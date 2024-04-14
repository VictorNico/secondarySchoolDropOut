class User(Model):
    email = CharField(unique=True, nullable=False)
    username = CharField(unique=True, nullable=False)
    password = CharField()

    def __repr__(self):
        return f"User('{self.username}')"

    class Meta:
        database = database