from flask import Blueprint

bp = Blueprint('logo', __name__)

from app.logo import routes