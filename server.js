 var express = require('express');
 var app = express();
 var middleware = require('./middleware.js');


app.use (middleware.logger);
app.get('/about',middleware.requiredAuthentication, function (req, res) {
 	// body...
 	res.send("my name is himanshu mittal");
 });

app.use(express.static ( __dirname + '/public'));

 
 app.listen(3000,function (){

 	console.log("server is running");
 });  