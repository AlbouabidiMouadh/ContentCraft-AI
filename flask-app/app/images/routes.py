from app.images import bp
from flask import request

@bp.route('/images')
def index():
    return 'This is The Main Blueprint of Images'

@bp.route('/images/app1', methods=["POST"])
def index():
    image = request.files["image"]
    return 'this is the route of the app 1'

@bp.route('/images/app2', methods=["POST"])
def index():
    image = request.files["image"]
    return 'this is the route of the app 2'

@bp.route('/images/app3', methods=["POST"])
def index():
    image = request.files["image"]
    return 'this is the route of the app 3'
