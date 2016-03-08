 var express = require('express');
 var app = express();

 //app.get('/', function (req, res) {
 	// body...
 //	res.send("hello express!!");
 //});


app.get('/about', function (req, res) {
 	// body...
 	res.send("my name is himanshu mittal");
 });

app.use(express.static ( __dirname + '/public'));

 
 app.listen(3000,function (){

 	console.log("server is running");
 });
 