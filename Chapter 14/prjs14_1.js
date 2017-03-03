function check_it() {
    var phone = document.getElementById("phoneNumber").value;
    var tomatch = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if(tomatch.test(phone)) {
        window.alert("Phone number validated");
    }
    else {
          window.alert("Invalid phone number entered. Valid format is XXX-XXX-XXXX"); 
        }
}
