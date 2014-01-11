

function Login(req, resp,callback){

    this.respond(req,resp,callback);
}

Login.prototype.respond = function(req,resp,callback) {

    this.a=1;
    var self = this;
    var flag = false;
    setTimeout(function(){
       flag = true;
        console.log("after timeout: "+ self.a);
    },5000);
    while(self.a == 1 ){
        if(flag){
            self.a++;
        }
    }
    resp.render('login' , { title : 'Login' });

}

if(module)
module.exports = Login;