from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/basics')
def basics():
    return render_template("basic.html")


@app.route('/hands')
def hands():
    return render_template("hands.html")


@app.route('/history')
def history():
    return render_template("history.html")


@app.route('/misc')
def misc():
    return render_template("misc.html")


@app.route('/news')
def news():
    return render_template("news.html")


@app.route('/platforms')
def platforms():
    return render_template("platforms.html")


@app.route('/rules')
def rules():
    return render_template("rules.html")


@app.route('/scoring')
def scoring():
    return render_template("scoring.html")


@app.route('/strategy')
def strategy():
    return render_template("strategy.html")


@app.route('/variations')
def variations():
    return render_template("variations.html")


if __name__ == '__main__':
    app.run()
