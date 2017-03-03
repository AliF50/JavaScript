var the_name = window.prompt("Please enter a name: ");
var first_char = the_name.charAt(0);

if(first_char === "S")
    document.write(the_name);
else
    document.write("Name has to start with capital S to be displayed.");