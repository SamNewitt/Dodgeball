// window.onbeforeunload = function(event) {
//     event.returnValue = "Whoa there! Leaving so soon??? O:";
//   };

function e(param){
    return document.getElementById(param);
}

function c(param){
    return Array.from(document.querySelectorAll("."+param));
}

function active(param){
    e(param).classList.add("active");
}

function inactive(param){
    e(param).classList.remove("active");
}

function inactiveC(param){
   var elems=c(param)
    for(var i=0; i<elems.length; i++){
        elems[i].classList.remove("active");
    }
}

function isActive(param){
    return e(param).classList.contains("active");
}

function isActiveC(param){
    var elems=c(param)
for(var i=0; i<elems.length; i++){
if(elems[i].classList.contains("active")){
    return true
}
}
return false;
}

function init(){
dbInit();





}


var socket, msgData, jsonData;

function serverConnect(){
    
 socket = new WebSocket("ws://localhost:6788");


            
socket.addEventListener("open", function (event) {
e("wait-cover").style.display="none";
// e("connection").innerHTML="CONNECTED"
// e("connection").style.backgroundColor="#008000";


});


socket.addEventListener("close", function (event) {
e("wait-cover").style.display="block";
// e("connection").innerHTML="ERROR"
// e("connection").style.backgroundColor="#f00";
setTimeout(function() {
    serverConnect();
  }, 1000);
});

socket.addEventListener("message", function(event){
msgData=event.data.split("=");
    switch(msgData[0]){
    case "broadcastFile":
    jsonData=JSON.parse(msgData[1]);
    init();
    break;
}
});

}


serverConnect();






function send(param){
    socket.send(param);
    console.log(param);
}




