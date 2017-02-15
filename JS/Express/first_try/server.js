
// request module and store as a value before we incoke it
var express = require("express");
var app = express();
//create a response when the server got an request
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// let the app we create to handle the express request, we built a route
app.get('/', function(request, response) {
  response.send("<h1>Hello</h1>");
});
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
// create a listener for this
app.listen(8000, function() {
  console.log("listening on port 8000");
})
