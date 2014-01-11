/**
 * Created by nafdeya on 10/01/14.
 */

var Mapper = require("./Mapper");

function Dispatcher(){
    "use strict"

    if(Dispatcher._instance){
        return Mapper._instance;
    }
    Dispatcher._instance = this;
    this.actionPath = "./Actions/";
}

Dispatcher.prototype.handleRequest = function(req,res){
    var handlerURI = Mapper.getHandler(req.url);

    if(!handlerURI){
        handlerURI = "error";
    }
    var handler = require(this.actionPath + handlerURI);
    var callback = function(page,data){
        res.render(page,data);

    };

    new handler(req,res,callback);
    console.log(handlerURI +": Dispatcher task completed");
};



Dispatcher.getInstance = function(){
    return Dispatcher._instance || new Dispatcher();
}

if(module)
    module.exports = Dispatcher.getInstance();