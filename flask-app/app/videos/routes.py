from app.videos import bp


@bp.route('/videos')
def index():
    return 'This is The Main Blueprint of Videos'