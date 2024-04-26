from flask import Blueprint, request
from ..services import editorai_chatbot
from ..utils import *
from flask_cors import cross_origin, CORS

bp = Blueprint('AI', __name__)
CORS(bp)

@bp.route('/generateTitle', methods=['POST'])
@cross_origin()
def suggest_title():
    """ """
    pass
    # try:
    #     AIconfig = editorai_chatbot()
    #     data = request.json
    #     content = AIconfig.create_title(data["document"])
    #     if(not content):
    #         return requestHandler.handle_server_error
    #     return handle_success(content)
    # except Exception as e:
    #      handle_server_error(e)

@bp.route('/summarize', methods=['POST'])
@cross_origin
def summarize_article():
    pass
    # try:
    #     AIconfig = editorai_chatbot()

    #     data = request.json
    #     content = AIconfig.summarize_article(data["document"])
    #     if(not content):
    #         return requestHandler.handle_server_error
    #     return handle_success(content)
    # except Exception as e:
    #     handle_server_error(e)

@bp.route('/sns', methods=['POST'])
@cross_origin
def make_sns():
    pass
    # try:
    #     AIconfig = editorai_chatbot()

    #     data = request.json
    #     content = AIconfig.create_social_media_copy(data["document"])
    #     if(not content):
    #         return requestHandler.handle_server_error
    #     return handle_success(content)
    # except Exception as e:
    #     handle_server_error(e)

    # return content