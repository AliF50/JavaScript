function get_add()
{
    var email_add = window.prompt("Enter your e-mail address: ");
    if(email_add.indexOf("@") == -1)
        {
            window.alert("Incorrect format, try again!");
            get_add();
        }
   
    
    if(email_add.indexOf(".") == -1)
        {
            window.alert("Incorrect format, try again!");
            get_add();
        }
    if(email_add.indexOf(".") == -1 && email_add.indexOf("@") == -1)
        {
           window.alert("Incorrect format, try again!");
           get_add();
        }
    else{
        window.alert("Thanks");
    }
  
}
get_add();