from flask import Flask, render_template, redirect

app = Flask(__name__)

# Rodar esse servidor apenas no Edge

@app.route('/')
def index(): # Flask will look for a template called index.html in the templates folder (It isn't necessary to specify the folder, Flask does it automatically)
    return render_template('index.html') 

if __name__ == '__main__':
    app.run(debug=True)