from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms import validators


class ContactForm(FlaskForm):
    name = StringField("Name:", [validators.DataRequired("Please enter your name")])

    email = StringField("E-mail Address:", [validators.DataRequired(
        "Please enter your email"), validators.Email
        ("Please enter your email")])

    message = TextAreaField("Message:", [validators.DataRequired("Please enter your message")])

    submit = SubmitField("Send")
