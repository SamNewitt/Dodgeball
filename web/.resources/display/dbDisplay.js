e("scoreboard").style.opacity="0";
e("win-screen").style.opacity="0";
e("matchup").style.opacity="0";
e("custom-image").style.opacity="0";


function message(type,data){
    switch(type){
    case "screen":
    switchScreen(data);
    break;

     case "leftScore":
        leftScore(data);
    break; 


    case "rightScore":
        rightScore(data);
    break; 

    case "brightness":
        brightness(data);
    break; 

    case "clockStart":
            clockStart();
        break;
        case "clockStop":
            clockStop();
        break;
        case "clockVal":
            clockSet(data);
        break;
    }
}




function screen();




var clockRemain=720, clock="12:00";

function clockStart(){
    clockInterval = setInterval(function(){
        clockRemain--;
        if(clockRemain%60<10){
            clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
        }
        else{
        clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
        }
setHTML("clock",clock);
if(clockRemain==0)
{
    clockStop();
}
},1000);
}

function clockStop(){
    clearInterval(clockInterval);
}

function clockSet(param){
clockRemain=param;
if(clockRemain%60<10){
    clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
}
else{
clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
}
setHTML("clock",clock);
}
