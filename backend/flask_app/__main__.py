from flask_app import create_app

# Every backend operation starts here!


if __name__ == '__main__':
    app = create_app()

    app.run(
        debug=False,
        threaded=True
    )

