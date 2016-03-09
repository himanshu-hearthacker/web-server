 var express = require('express');
 var app = express();
 var middleware = require('./middleware.js');

 app.set('port',(process.env.PORT || 3000));


app.use (middleware.logger);
app.get('/about',middleware.requiredAuthentication, function (req, res) {
 	// body...
 	res.send("my name is himanshu mittal");
 });

app.use(express.static ( __dirname + '/public'));

 
 app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});   