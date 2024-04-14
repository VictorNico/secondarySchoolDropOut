

@app.before_request
def before_request():
    database.connect()

@app.after_request
def after_request(response):
    database.close()
    return response

@app.cli.command()
def initdb():
    database.create_tables([User])
    print('Initialized the database.')