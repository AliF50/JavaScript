function startclock() {
    var thetime = new Date();
    var hours = thetime.getHours();
    var mins = thetime.getMinutes();
    var secn = thetime.getSeconds();
    var ap = (hours >= 12) ? "p.m." : "a.m.";
    var themonth = thetime.getMonth();
    var thedate = thetime.getDate();
    var theyear = thetime.getFullYear();
    
     themonth++;
  
    if(hours >= 13){
        hours -=12;
    }
    
    if(hours < 1){
        hours = 12;
    }
    
    if(mins < 10){
        mins = "0" + mins;
    }
    if(secn < 10){
        secn = "0" + secn;
    }
     
    var clock_div = document.getElementById("my_clock");
    clock_div.innerHTML = hours + ":" + mins + ":" + secn + " " + ap + themonth + "/" + thedate + "/" + theyear;
    setTimeout("startclock()", 1000);
    
    
}
startclock();