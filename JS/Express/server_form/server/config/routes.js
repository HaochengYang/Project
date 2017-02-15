module.exports = function(app){
//root route render the index.ejs view
  app.get('/',function(request, response){
    response.render("index");
  })
// post route for adding a data from survey
/*  app.get('/result', function(request, response){
    submitted_info ={
      name:request.body.name,
      location:request.body.locationl,
      favorite_language:request.body.favorite_language,
      comment: request.body.comment
    };
    response.render("result",{user_data:submitted_info});
  })
*/
};
