from flask import Flask
from firebase_admin import credentials
import firebase_admin
from flask_cors import CORS
import os
from .routes import *
import json

# create_app Flask function

def create_app():

    app = Flask(__name__)


    # Enable CORS
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


    # Configure CORS settings to allow requests from your Next.js application
    app.config['CORS_HEADERS'] = 'Content-Type'
    app.config['CORS_ORIGINS'] = ['http://localhost:3000']

    # cred = credentials.Certificate(r"./backend/secrets/se-editor-ai-firebase-adminsdk-nd6dz-b1262c7a32.json")
    cred = credentials.Certificate(json.loads(os.getenv('FIREBASE_CREDENTIALS')))

    firebase_admin.initialize_app(cred)
    

    routes.register_blueprints(app)
    print("reaches here")

    return app