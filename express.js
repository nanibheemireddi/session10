var express = require('express');
var app = express();
var PORT = 8080;

var middleware = require("./middleware.js");


app.use(middleware.logger);

app.get('/', function(req, res)
{
	res.send('this is the express program');
});


app.get('/about', function(req, res)
{
	res.send('about us!');
});

app.get('/nani',middleware.requireAuthentication,function(req, res)
{
	res.send('about nani');
});

app.use(express.static(__dirname + "/public"));
//console.log(__dirname);
app.listen(PORT, function()
{
	console.log('express srever started on port ' +PORT);
});