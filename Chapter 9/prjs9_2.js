var link = document.getElementById("c_link");
var d1 = document.getElementById("div1")
link.onclick = function(){
    d1.style.backgroundColor = "red";
    d1.innerHTML = "<strong>Right now!</strong> Was that quick or what?";
    return false;
};