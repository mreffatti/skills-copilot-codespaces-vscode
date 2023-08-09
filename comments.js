// create a web server with node.js
// run: node comment.js
// url: http://localhost:8000
//       http://localhost:8000/comments
//       http://localhost:8000/form

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {
  var path = url.parse(request.url).pathname;
  console.log(path);
  switch (path) {
    case '/':
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("This is Test Message.");
      response.end();
      break;
    case '/comments':
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("This is Comments Page.");
      response.end();
      break;
    case '/form':
      fs.readFile(__dirname + '/form.html', function(error, data) {
        if (error) {
          response.writeHead(404);
          response.write("opps this doesn't exist - 404");
        } else {
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(data, "utf8");
        }
        response.end();
      });
      break;
    default:
      response.writeHead(404);
      response.write("opps this doesn't exist - 404");
      response.end();
      break;
  }
});

server.listen(8000);
console.log("Server is running at http://localhost:8000");