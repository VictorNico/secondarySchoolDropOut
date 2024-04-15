from flask import Flask, request, jsonify, session, make_response
from flask_cors import CORS
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity, get_jwt, unset_jwt_cookies
)

from passlib.hash import pbkdf2_sha256


from functools import wraps
from dotenv import load_dotenv
import os

from peewee import SqliteDatabase, Model, CharField
from mongodb.models.userModel import *
from mongodb.mixins import *
from mongodb.db import *

# Custom JSON serializer for User object
def user_encoder(user):
    return {
        '_id': str(user['_id']),
        'username': user['username'],
        'password': user['password'],
        'email': user['email']
    }

def create_app():
    load_dotenv('.flaskenv')

    app = Flask(__name__)
    jwt = JWTManager(app)

    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    app.config['DEBUG'] = os.getenv('DEBUG')
    # app.config['DATABASE'] = os.getenv('DATABASE')
    app.config['MONGO_URI'] = os.getenv('DB_SRV_CONNECTOR')
    app.config['JWT_TOKEN_LOCATION'] = ["cookies"]
    app.config['JWT_COOKIE_SECURE'] = False  # Set to True in production
    app.config['SESSION_COOKIE_HTTPONLY'] = False  # Set to True in production
    app.config['JWT_COOKIE_CSRF_PROTECT'] = False  # Set to True in production
    app.config['SESSION_COOKIE_SAMESITE'] = "None"  # Set to True in production
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 3600  # 1 hour
    # app.config['JWT_CSRF_IN_COOKIES'] = False
    # Set the custom JSON serializer for User object
    # app.json_encoder = user_encoder
    # SqLite database
    # database = SqliteDatabase(app.config['DATABASE'])
    # mongodb
    # Use LocalProxy to read the global db instance with just `db`
    db = LocalProxy(get_db)
    CORS(app)
    # CORS(app, origins='*', methods=['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], allow_headers=['Content-Type', 'Authorization'], supports_credentials=True)

    @app.before_request
    def before_request():
        print(request.headers)
        print(request.json)

    @app.route('/')
    def hello():
        return 'Hello, Flask 121!'
    
    @app.route('/api/register', methods=['POST'])
    def register():
        email = request.json['email']
        username = request.json['username']
        password = request.json['password']
        if not username or not password:
            return jsonify({'message': 'Missing username or password'}), 400

        if db.users.find_one({'username': username}):
            return jsonify({'message': 'Username already exists'})

        hashed_password = pbkdf2_sha256.hash(password)
        # Create a new user document
        user = {
            'email': email,
            'username': username,
            'password': hashed_password
        }
        # Insert the user into the database
        user_id = db.users.insert_one(user)

        return jsonify({'message': 'User registered successfully', 'user_id': str(user_id)}), 201

    @app.route('/api/login', methods=['POST'])
    def login():
        email = request.json['email']
        password = request.json['password']

        if not email or not password:
            return jsonify({'message': 'Missing email or password'}), 400
        

        # Find the user in the database
        user = db.users.find_one({'email': email})
        # print(type(user))
        if user and pbkdf2_sha256.verify(password, user['password']):
            print('hj')
            # Generate a JWT token
            # access_token = create_access_token(identity=User(str(user['_id']),user['username'],user['email']))
            access_token = create_access_token(identity=user_encoder(user)['_id'], additional_claims=user_encoder(user))
            resp = make_response(jsonify({'message': 'Login successful'}), 200)
            resp.set_cookie('access_token_cookie', access_token)

            return resp
        else:
            return make_response('Invalid email or password', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})
        

    @app.route('/api/logout', methods=['POST'])
    @jwt_required()
    def logout():
        print('kkk')
        jti = get_jwt_identity()  # Update get_jwt_identity function usage
        print(jti)
        print(get_jwt())
        resp = make_response(jsonify({'message': 'Logout successful'}), 200)  # Create a response object
        unset_jwt_cookies(resp)
        return resp

    
    return app

