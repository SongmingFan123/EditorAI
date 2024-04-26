<<<<<<< HEAD:backend/flask_app/__main__.py
from flask_app import create_app

# Every backend operation starts here!


if __name__ == '__main__':
    app = create_app()

    app.run(
        debug=False,
        threaded=True
    )

=======
from app import create_app

# Every backend operation starts here!

app = create_app()

if __name__ == '__main__':

    app.run(
        debug=True
    )
>>>>>>> dev:backend/app/__main__.py
