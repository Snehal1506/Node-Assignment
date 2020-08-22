var http = require('http');
var roman = require('./roman');

http.createServer(function (req, res){
	res.writeHead(200, {'content-Type': 'text/html'});
	res.write(roman.toRoman(4));
	res.end();
}).listen(3000);