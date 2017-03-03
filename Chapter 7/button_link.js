var web_page1 = "http://www.yahoo.com";
var web_page2 = "http://pageresource.com";
var web_page3 = "http://nfl.com";

var b1 = document.getElementById("btn1");
var b2 = document.getElementById("btn2");
var b3 = document.getElementById("btn3");

b1.onclick = function () {
  window.location = web_page1;
};

b2.onclick = function () {
    window.location = web_page2;
};

b3.onclick = function () {
    window.location = web_page3;
};

