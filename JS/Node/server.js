var http = require('http');
// get the http module and File system model
var fs =require('fs');
//we create a server by using http module
var server = http createserver(function(request,response){
// see what URL the clients are requiring;
console.log('client request URL:',request url);
//make some routings
if(request url == '/'){
  fs readFile('index.html','utf8',function(error,contents){
    response.writeHead(200,{'Content-Type':'text/html'});
    //send data about response
    response.write(contents);
    //send response body
    response.end();
    //finished
  });
}
else if(request.url === "/dojo.html"){
  fs.readFile('dojo.html','utf8',function(errors,contents){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(contents);
    response.end();
  });
}
else {
  response.writeHead(404);
  response.end('File not Found!!!');
}//request does not match
});
//tell your server which port to run on
server.listen(6789);
console.log("running in localhost at port 6789");
//print to terminal window
