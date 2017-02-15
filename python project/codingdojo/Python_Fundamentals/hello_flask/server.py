from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def helloworld():
    return render_template('index.html')

@app.route('/success')
def success():
    return render_template('success.html', name="Haocheng")

@app.route('/static')
def something():
    return render_template('static.html')

app.run(debug=True)
