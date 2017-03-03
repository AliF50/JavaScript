var message_text = "Help! I\'m in a box!";
var message_link = document.getElementById("msg_link");
var message_box = document.getElementById("msg_box");

message_link.onmouseover = function (){
    message_box.value = message_text;
}

message_link.onmouseout = function()
{
    message_box.value = "";
}
