# User model
class User(object):
    def __init__(self, id, username, email, password=None):
        self._id = id
        self.username = username
        self.email = email
        self.password = password