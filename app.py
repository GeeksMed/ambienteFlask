from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/home")
@app.route("/")
def home():
	return render_template("home.html")
@app.route("/contato")
def contato():
	return render_template("contato.html")
@app.route("/resultado")
def resultado():
	return render_template("resultado.html")

if __name__ == "__main__":
	app.run(debug=True)