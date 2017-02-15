from flask import Flask, render_template, request,redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    if 'count' in session:
        session['count'] +=1
    else:
        session['count'] =0
    return render_template('index.html')

@app.route('/Two')
def count():
    if 'count' in session:
        session['count'] +=1
    return redirect('/')
@app.route('/reset')
def resetvalue():
    session.clear()
    return redirect('/')

#end of the route
app.run(debug=True)
