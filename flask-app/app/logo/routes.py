from app.logo import bp


@bp.route('/logo')
def index():
    return 'This is The Main Blueprint of logo'