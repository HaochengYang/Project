module.exports = function routes(app){
  app.get('/',function(req,res){
    res.render('index');
  }),
  app.get('/new',function(req,res){
    res.render('new');
  }),
  app.get('/:id',function(req,res){
    res.render('show');
  }),
  app.get('/:id',function(req,res){
    res.render('edit');
  })
}
