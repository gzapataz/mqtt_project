var http = require('http');

http.createServer(function (req, res) {
  console.log("\n\n");
  console.log(req.method + " " + req.url + " " + req.httpVersion);
  console.log(req.headers);

  if(req.method == 'POST') {
    req.on('data', function(chunk) {
      console.log(chunk.toString());
    });
  }
  if(req.method == 'GET') {
      console.log(JSON.stringify(req));
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080);

console.log('Server running...');