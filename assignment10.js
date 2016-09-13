var express = require('express');
var app = express();
var PORT = 8080;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('route hit');
		next();
	},
	logger:function(req,res,next){
		console.log('get');
		next();
	}
}


app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.use(express.static(__dirname,"/public" ));

app.listen(PORT, function(){
	console.log('srever started on port  '+PORT);
});