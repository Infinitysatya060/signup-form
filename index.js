var Emailfield =document.getElementById("email").value;
var text = document.getElementById("text");

function validation(){
    
    if(!Emailfield.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        text.innerHTML = "please enter a valid email";
        return false;

    }

        text.innerHTML="";
             return true;   
   
}