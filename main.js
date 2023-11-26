function convert(){

    var mouse = document.getElementById("mouse").value;
    var result = document.getElementById("result");
   
    if(mouse<0){
        result.innerHTML ="Enter real number";
        return false; 
    }else if(mouse == 0) {
        result.innerHTML = "enter number rather than zero ";
        return false;
    }else if(isNaN(mouse)){

        result.innerHTML="enter number not text";
        return false;
    }else{
        result.innerHTML = mouse *50 + "egyptian pound";
        return false;
    }




    
    
    result.innerHTML = mouse *50;
}
