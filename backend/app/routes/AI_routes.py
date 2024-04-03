from flask import Blueprint, request
from ..services import *
from ..utils import *
from flask_cors import cross_origin

bp = Blueprint('AI', __name__)
