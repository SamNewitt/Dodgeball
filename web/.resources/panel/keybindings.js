document.addEventListener("keyup",function(event){
    if(document.activeElement!=e("clock-input")  &&  document.activeElement!=e("custom-input") &&  document.activeElement!=e("brightness-input") ){
        switch(event.key){
            case "Backspace":
                screen(0);
            break;
            case "q":
                addLeftScore(1);
            break;
            case "a":
                addLeftScore(-1);
            break;
            case "z":
                leftCatch();
            break;
            case "w":
                addRightScore(1);
            break;
            case "s":
                addRightScore(-1);
            break;
            case "x":
                rightCatch();
            break;
            case "o":
                bright();
            break;
            case "p":
                dim();
            break;

            default:
            screen(parseInt(event.key));
            break;


        }}

        else if(document.activeElement==e("clock-input") && event.key=="Enter"){
            clockUpdate();
            document.activeElement.blur();
    
        }


    });



    document.addEventListener("keypress",function(event){
        if((document.activeElement!=e("clock-input")  &&  document.activeElement!=e("custom-input") &&  document.activeElement!=e("brightness-input"))&&( event.key==" ")){
            document.activeElement.blur();
        }
        if((document.activeElement!=e("clock-input")   )&&( event.key=="Enter")){
            document.activeElement.blur();
        }
    });