function new_win() {
   /* window.open("sales.html", "sales", "width = 300, height = 200");*/
 document.getElementById("salesInfo").innerHTML = "Clothes: 25% off<br //> Electronics: 10% off<br //> Appliances: 15% off (with coupon)";
    return false;
 }
var s_alert = document.getElementById("sales");
s_alert.onclick = new_win;