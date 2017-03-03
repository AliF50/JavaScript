var me_div = document.getElementById("div1");
var me_title = me_div.title;
window.alert(me_title);

var inner_div = document.createElement("div");
var inner_div_text = document.createTextNode("See you!");
inner_div.appendChild(inner_div_text);
me_div.appendChild(inner_div);