var clockRemain=300, clock="5:00", input, clockInterval=null, clockRunning=false;

function clockStart(){
    if(!clockRunning && clockRemain>0){
    clockRunning=true;
    send("clockVal="+clockRemain);

    send("clockStart");
    active("clock-start");
    inactive("clock-stop");
    clockInterval = setInterval(function(){
        clockRemain--;
        if(clockRemain%60<10){
            clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
        }
        else{
        clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
        }
e("clock").innerHTML=clock;
if(clockRemain<1)
{
    clockStop();
}
    },1000);
    }
}

function clockStop(){
    if(clockRunning){
    clockRunning=false;
    clearInterval(clockInterval);
    send("clockStop");
    send("clockVal="+clockRemain);
    inactive("clock-start");
    active("clock-stop");
    if(clockRemain%60<10){
        e("clock-input").value=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
    }
    else{
        e("clock-input").value=Math.trunc(clockRemain/60)+":"+clockRemain%60;
    }
    }
}

function clockToggle(){
    if(clockRunning){
        clockStop()
    }
    else{
        clockStart();
    }
}

function clockSet(param){
    clockRemain=param;
    if(clockRemain%60<10){
        clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
    }
    else{
    clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
    }
    e("clock").innerHTML=clock;
    send("clockVal="+clockRemain);
    
    }


var clockInputError=false;
function clockUpdate(){
input = e("clock-input").value;
input=input.replace(";",":");
if(!input.includes(":")){
clockInputError=true;
}
input = input.split(":");
if(Number.isInteger(parseInt(input[0])*60+parseInt(input[1])) && (parseInt(input[0])*60+parseInt(input[1]))>=0){
clockSet(parseInt(input[0])*60+parseInt(input[1]));

e("clock-update").classList.remove("update");
e("clock-update").innerHTML="Update (M)";
}
else{
    clockInputError=true;
}
if(clockInputError){
    clockInputError=false;
e("clock-input").value="Error";
setTimeout(function(){
    if(clockRemain%60<10){
        e("clock-input").value=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
    }
    else{
        e("clock-input").value=Math.trunc(clockRemain/60)+":"+clockRemain%60;
    }
    e("clock-input").focus();
    e("clock-input").select();
},500);
}

}

function clockReset(){
    clockSet(300);
}

function clockType(){
    e("clock-update").classList.add("update");
    e("clock-update").innerHTML="Update (Ent)";
}



//------------------------------------------------------------SCORING------------------------------------------------
var leftScore=5,rightScore=5


function addLeftScore(param){
    if(leftScore+parseInt(param)>-1){
        leftScore+=parseInt(param);
        e("left-score").innerHTML=leftScore;
        send("leftScore="+leftScore);
        }
}


function addRightScore(param){
    if(rightScore+parseInt(param)>-1){
        rightScore+=parseInt(param);
        e("right-score").innerHTML=rightScore;
        send("rightScore="+rightScore);
        }
}

function leftCatch(){
    if(leftScore<5){
    addLeftScore(1);
    }
    addRightScore(-1);
}

function rightCatch(){
    if(rightScore<5){
        addRightScore(1);

    }
    addLeftScore(-1);
}


//---------------------------------------------------------------------CURRENT SCREEN---------------------------------
var currentScreen=0;

function screen(param){
    if(param!=currentScreen || param==5)
    {
        currentScreen=param;
    if(param==5){
        send("customImage="+e("custom-input").value)
    }
    if(param==4){
        send("customImage=welcome");
    }
    

    
    inactiveC("screen");
    active("screen-"+param);
    if(param==1 || param==3){
    send("leftTeam="+e("left-team").value);
    send("rightTeam="+e("right-team").value);
    }
    if(param==4){
        send("customImage=welcome");
    }
    if(param==5){
        send("customImage="+e("custom-input").value);
        param=4;
    }
    send("screen="+param);
}
}

function bright(){
    inactive("dim");
    active("bright");
    send("brightness=100");
}

function dim(){
    inactive("bright");
    active("dim");
    send("brightness="+e("brightness-input").value);
}

var leftSlots, rightSlots;
leftSlots=document.getElementsByClassName("left-team-option");
rightSlots=document.getElementsByClassName("right-team-option");

function dbInit(){
    for(var i=0; i<jsonData.teams.length; i++){
        leftSlots[i].innerHTML=jsonData.teams[i].name;
        rightSlots[i].innerHTML=jsonData.teams[i].name;
    }
}
