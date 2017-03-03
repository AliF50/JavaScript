var websites = new Array(5);
websites[0] = "http://www.pageresource.com";
websites[1] = "http://www.javascriptcity.com";
websites[2] = "http://www.mydemos.com";
websites[3] = "http://www.yahoo.com";
websites[4] = "http://www.google.com";

var rand_int = Math.floor(Math.random() * 5);

var a_div = document.getElementById("random_link");

a_div.innerHTML = "<a href = " + websites[rand_int] + "> Random Site!</a>";
