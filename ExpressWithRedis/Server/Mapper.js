/**
 * Created by nafdeya on 10/01/14.
 */

var fs = require("fs");


 function Mapper(){
     "use strict"

    if(Mapper._instance){
       return Mapper._instance;
    }
    Mapper._instance = this;
    this.actionMap = JSON.parse(fs.readFileSync('./Server/ActionMap.json', 'UTF-8'));
 }

 Mapper.prototype.getHandler = function(url){

        return this.actionMap[this.identifyCommand(url)];
 };
 Mapper.getInstance = function(){
     return Mapper._instance || new Mapper();
 }

 Mapper.prototype.identifyCommand = function(url){

    var command = "err";
    var indexOfSlash = url.indexOf('/');
    if(indexOfSlash != -1){
        var arr = url.split("/");
        if(indexOfSlash == 0){
            command = arr[1];
        }else{
            command = arr[0]
        }

    }

    return command;
    };



if(module){
    module.exports = Mapper.getInstance();
}


