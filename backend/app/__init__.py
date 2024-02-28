from flask import Flask
from .services.db import init_db

def create_app():
    app = Flask(__name__)
    init_db(app)  # Initialize Firebase connection
    return app