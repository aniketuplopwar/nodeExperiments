/**
 * Created by nafdeya on 10/01/14.
 */


function Error(req, resp,callback){

    this.respond(req,resp,callback);
}

Error.prototype.respond = function(req,resp,callback) {

    var a=1;
    setTimeout(function(){
        a=0
    },10000);
    while(a == 1 ){
    }
        resp.render('error' , { title : 'Opps!' } );

}

if(module)
    module.exports = Error;