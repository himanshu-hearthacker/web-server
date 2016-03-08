 var express = require('express');
 var app = express();


 //app.get('/', function (req, res) {
 	// body...
 //	res.send("hello express!!");
 //});

var middleware = {

requiredAuthentication : function (req, res, next){
	console.log("private route hit");
	
	next();
	},
	logger : function (req, res, next){
		console.log('Request :' + new Date().toString()+' '+req.method + ' ' + req.originalUrl);
		next();
	}

}

app.use (middleware.logger);
app.get('/about',middleware.requiredAuthentication, function (req, res) {
 	// body...
 	res.send("my name is himanshu mittal");
 });

app.use(express.static ( __dirname + '/public'));

 
 app.listen(3000,function (){

 	console.log("server is running");
 });