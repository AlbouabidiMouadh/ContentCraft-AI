from app.text import bp


@bp.route('/text')
def index():
    return 'This is The Main Blueprint of Text'