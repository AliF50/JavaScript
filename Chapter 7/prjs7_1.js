function send_alerts(){
    window.alert("Hi there, and welcome to my page.");
    window.alert("Please sign the guest book before you leave!");
    window.alert("Are these alerts annoying you yet? Ha, Ha!");
}

var clickButton = document.getElementById("get_alerts");

clickButton.onclick = send_alerts;

