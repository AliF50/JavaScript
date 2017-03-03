function ask(){
   var isSure = window.confirm("Do you want to continue using the web page?");
   if(isSure){
       window.alert("Okay");
   }
   else{
       window.location = "http://www.google.ca";
   }
}

window.setTimeout("ask()", 1000);