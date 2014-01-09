
setTimeout(function(){
var socket = io.connect("http://localhost:3000");
socket.on('connect', function() {
    console.log('connected');
});
socket.on('news', function (data) {
        console.log(data);
    });
} , 5000);