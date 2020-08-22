var http = require('http');
var perfect = require('./perfect');

http.createServer(function (req, res){
	res.writeHead(200, {'content-Type': 'text/html'});
	res.write(perfect.isPerfectNumber(6));
	res.end();
}).listen(3000);