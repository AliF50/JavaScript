function set_it() {
    var thetext = window.prompt("Enter your name:", "");
    var expdate = "; expires = Thu, 28 Oct 2016 14:00:00 UTC";
    var newtext = "name=personName&name=" + thetext;
    newtext += expdate;
    document.cookie = newtext;
}

function read_it() {
    if(document.cookie){
        var thetext = document.cookie;
        var fixed_thetext = unescape(thetext);
        var thepairs = fixed_thetext.split("&");
        var namevalue2 = thepairs[1].split("=");
        window.alert("Welcome, " + namevalue2[1]);
    }
   else{
       window.alert("no cookie");
       set_it();
   }
}

read_it();
