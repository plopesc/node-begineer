var http = require('http');

var try_count = 0;

var onRequest = function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World ' + ++try_count);
  response.end();
};

http.createServer(onRequest).listen(8888);
console.log ('start');
