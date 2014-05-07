
/**
 * Module dependencies.
 */

var express = require('express');
var Dispatcher = require('./Server/Dispatcher');
var http = require('http');
var path = require('path');
var RedisStore = require('redis');

var app = express();

// all environments
app.set('port', process.env.PORT || 8181);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*
app.get('/', routes.index);
app.get('/users', routes.list);
app.get('/login', routes.login);
*/

app.get('/*', function(req, res){
    Dispatcher.handleRequest(req,res);
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

/**
 * Redis code starts here
 */


var client =   RedisStore.createClient();


client.on("error", function (err) {
    console.log("Error " + err);
});

//client.on("connect", runSample);

function runSample(obj) {

    client.set("string key", "Hello World", function (err, reply) {
        console.log(reply.toString());
    });
    client.get("foo", function (err, reply) {
        console.log(reply.toString());
    });


}


function setAsObject(obj){

    var  finalObj = obj;

    if(typeof obj == "string"){
        finalObj = JSON.parse(obj);
    }
    var keys =  Object.keys(finalObj);
    for(key in keys){
        if(typeof finalObj[key] == "string")
            client.hmset(key,)

    }
}
/**
 * Redis code ends here
 */