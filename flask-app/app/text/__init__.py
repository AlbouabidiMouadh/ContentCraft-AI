from flask import Blueprint

bp = Blueprint('text', __name__)

from app.text import routes