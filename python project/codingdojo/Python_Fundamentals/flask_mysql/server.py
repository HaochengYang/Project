from flask import Flask
#import the connector function
from mysqlconnection import MYSQLConnector
app =Flask(__name__)
#connect and store the connection in"mysql" note that you pass the detabase name to the function
mysql = MYSQLConnector(app,'world')
print mysql.query_db("SELECT* FROM country")
app.run(debug=True)
