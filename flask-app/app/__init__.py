import os

from flask import Flask


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    # Configure database here

    # Initialize Flask extensions here

    # Register blueprints here

    from app.images import bp as images_bp

    app.register_blueprint(images_bp)

    from app.logo import bp as logo_bp

    app.register_blueprint(logo_bp)

    from app.text import bp as text_bp

    app.register_blueprint(text_bp)

    from app.videos import bp as videos_bp

    app.register_blueprint(videos_bp)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route("/hello")
    def hello():
        return "Hello, World!"

    return app
