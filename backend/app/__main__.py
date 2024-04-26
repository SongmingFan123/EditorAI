from app import create_app

# Every backend operation starts here!

app = create_app()

if __name__ == '__main__':

    # app.run(
    #     debug=False,
    #     threaded=True
    # )

    app.run(host='0.0.0.0', debug=False)
