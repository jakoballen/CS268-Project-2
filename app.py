from flask import Flask, render_template, request, flash
import forms
import sqlite3 as sql

app = Flask(__name__)
app.config['SECRET_KEY']='MWMahjong1'



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


@app.route('/news', methods=['GET', 'POST'])
def news():
    form = forms.NewsForm()

    if not form.validate():
        flash("All fields are required")
        return render_template("news.html", form=form)
    else:
        try:
            headline = form.headline.data
            url = form.url.data
            with sql.connect("database.db") as conn:
                cur = conn.cursor()
                cur.execute("INSERT INTO NEWS(headline, url) VALUES(?, ?)",
                            (headline, url))
                conn.commit()
                return render_template("success.html")
        except:
            conn.rollback()
            return render_template("failure.html")
        finally:
            conn.close()


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


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = forms.ContactForm()

    if not form.validate():
        flash("All fields are required")
        return render_template("contact.html", form=form)
    else:
        try:
            user_name = form.name.data
            email = form.email.data
            message = form.message.data
            with sql.connect("database.db") as conn:
                cur = conn.cursor()
                cur.execute("INSERT INTO MESSAGES(user_name, email, message) VALUES(?, ?, ?)", (user_name, email, message))
                conn.commit()
                return render_template("success.html")
        except:
            conn.rollback()
            return render_template("failure.html")
        finally:
            conn.close()


@app.route('/list')
def list():
    con = sql.connect("database.db")
    con.row_factory = sql.Row

    cur = con.cursor()
    cur.execute("select * from messages")

    rows = cur.fetchall()
    return render_template("display.html", rows=rows)



if __name__ == '__main__':
    app.run()
