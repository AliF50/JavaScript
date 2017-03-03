var mywin_width = 450;
if(window.innerWidth || document.body.clientWidth){
    mywin_width = (window.innerWidth)?window.innerWidth:document.body.clientWidth;
}

if(mywin_width>=1000){
    window.location = "http://www.nba.com";
}

else{
    window.location = "http://www.mlb.com";
}