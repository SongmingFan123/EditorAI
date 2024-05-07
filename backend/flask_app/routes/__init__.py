from flask import Flask
from .document_routes import bp as doc_bp
from .AI_routes import bp as AI_bp
from .promotion_routes import bp as promotion_bp

# Here lies all the routes that are needed for this backend to operate (authentication, document)


"""A function to register all the blueprints."""
def register_blueprints(app: Flask):
    app.register_blueprint(doc_bp, url_prefix='/documents')
    app.register_blueprint(AI_bp, url_prefix='/AI')
    app.register_blueprint(promotion_bp, url_prefix='/promotion')
