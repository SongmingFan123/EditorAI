from flask import Flask
from firebase_admin import credentials
import firebase_admin
from flask_cors import CORS
from .routes import *

# create_app Flask function

def create_app(cred_route=r"./secrets/se-editor-ai-firebase-adminsdk-nd6dz-b1262c7a32.json", Test=False) -> Flask:

    app = Flask(__name__)
    app.config["TESTING"] = Test

    # Enable CORS
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


    # Configure CORS settings to allow requests from your Next.js application
    app.config['CORS_HEADERS'] = 'Content-Type'
    app.config['CORS_ORIGINS'] = ['http://localhost:3000']

    cred = credentials.Certificate(cred_route)
    firebase_admin.initialize_app(cred)


    routes.register_blueprints(app)


    return app