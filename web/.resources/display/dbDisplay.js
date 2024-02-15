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
        setLeftScore(data);
    break; 


    case "rightScore":
        setRightScore(data);
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

        case "customImage":
            customImage=data;
        break;
        
        case "brightness":
            brightness(data);
        break;

        case "leftTeam":
            preLeftTeam(data);
        break;

        case "rightTeam":
            preRightTeam(data);
        break;
    }
}




function switchScreen(param){
    e("scoreboard").style.opacity="0";
e("win-screen").style.opacity="0";
e("matchup").style.opacity="0";
e("custom-image").style.opacity="0";

setTimeout(function(){
    setLeftTeam(pendingLeftTeam);
    setRightTeam(pendingRightTeam);
    customImageUpdate();
switch(param){
    
case "1":
  
    e("scoreboard").style.opacity="1";
break;

case "2":
    if(leftScore>rightScore){
        e("winner").innerHTML=jsonData.teams[leftTeam].name;
        e("win-screen-names").innerHTML=jsonData.teams[leftTeam].member1+"<br>"+jsonData.teams[leftTeam].member2+"<br>"+jsonData.teams[leftTeam].member3+"<br>"+jsonData.teams[leftTeam].member4+"<br>"+jsonData.teams[leftTeam].member5;
    }
    else{
        e("winner").innerHTML=jsonData.teams[rightTeam].name;
        e("win-screen-names").innerHTML=jsonData.teams[rightTeam].member1+"<br>"+jsonData.teams[rightTeam].member2+"<br>"+jsonData.teams[rightTeam].member3+"<br>"+jsonData.teams[rightTeam].member4+"<br>"+jsonData.teams[rightTeam].member5;
 
    }

    if(e("winner").innerHTML.charAt(e("winner").innerHTML.length-1)=="s"){
        e("winner").innerHTML+=" WIN!"
    }
    else{
        e("winner").innerHTML+=" WINS!"
    }

    e("win-screen").style.opacity="1";
break;

case "3":
    e("matchup").style.opacity="1";
    setRightScore(5);
    setLeftScore(5);
break;

case "4":
    e("custom-image").style.opacity="1";
break;
}

},400);

}




var clockRemain=300, clock="5:00", clockInterval;

function clockStart(){
    clockInterval = setInterval(function(){
        clockRemain--;
        if(clockRemain%60<10){
            clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
        }
        else{
        clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
        }

e("clock").innerHTML=clock;
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
e("clock").innerHTML=clock;

}



//---------------------------------------SORING
var leftScore=5, rightScore=5;
function setLeftScore(param){
    leftScore=param;
    e("left-score").innerHTML=param;
}


function setRightScore(param){
    rightScore=param;
    e("right-score").innerHTML=param;
}


var leftTeam=0; rightTeam=0, pendingLeftTeam=0, pendingRightTeam=0;

function preLeftTeam(param){
    pendingLeftTeam=param;
}

function preRightTeam(param){
    pendingRightTeam=param;
}

function setLeftTeam(param){
    leftTeam=param;
    e("left-team-name").innerHTML=jsonData.teams[param].name;
    e("matchup-left-team").innerHTML=jsonData.teams[param].name;
    e("left-team-members").innerHTML=jsonData.teams[param].member1+"<br>"+jsonData.teams[param].member2+"<br>"+jsonData.teams[param].member3+"<br>"+jsonData.teams[param].member4+"<br>"+jsonData.teams[param].member5;
    e("matchup-left-names").innerHTML=jsonData.teams[param].member1+"<br>"+jsonData.teams[param].member2+"<br>"+jsonData.teams[param].member3+"<br>"+jsonData.teams[param].member4+"<br>"+jsonData.teams[param].member5;

}


function setRightTeam(param){
    rightTeam=param;
    e("right-team-name").innerHTML=jsonData.teams[param].name;
    e("matchup-right-team").innerHTML=jsonData.teams[param].name;
    e("right-team-members").innerHTML=jsonData.teams[param].member1+"<br>"+jsonData.teams[param].member2+"<br>"+jsonData.teams[param].member3+"<br>"+jsonData.teams[param].member4+"<br>"+jsonData.teams[param].member5;
    e("matchup-right-names").innerHTML=jsonData.teams[param].member1+"<br>"+jsonData.teams[param].member2+"<br>"+jsonData.teams[param].member3+"<br>"+jsonData.teams[param].member4+"<br>"+jsonData.teams[param].member5;
}


function brightness(param){
    e("brightness-cover").style.opacity=(100-param)/100;
}

var customImage=0;

function customImageUpdate(){
    e("custom-image").setAttribute("src","../customImages/"+customImage+".jpg")
}