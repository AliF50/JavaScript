function get_price() {
    var the_price = 500;
    if (this.speed === "2GHZ")
        the_price += 200;
    else
        the_price += 100;
    if(this.hdspace === "80GB")
        the_price += 50;
    else
        the_price += 25;
    if(this.ram === "1GB")
        the_price += 150;
    else
        the_price += 75;
    
    return the_price;
}

function computer(speed, hdspace, ram) {
    this.speed = speed;
    this.hdspace = hdspace;
    this.ram = ram;
    this.price = get_price;
}

var work_computer = new computer("2GHZ", "80GB", "1GB");
var home_computer = new computer("1.5GHZ", "40GB", "512MB");
var laptop_computer = new computer("1GHZ", "20GB", "256MB");

work_computer_price = work_computer.price();
home_computer_price = home_computer.price();
laptop_computer_price = laptop_computer.price();

document.write("Work computer: <br/>");
document.write("Speed: " + work_computer.speed + "<br/>");
document.write("HD Space: " + work_computer.hdspace + "<br/>");
document.write("RAM: " + work_computer.ram + "<br/>");
document.write("Price: $" + work_computer_price + "<br/><br/>");

document.write("Home computer: <br/>");
document.write("Speed: " + home_computer.speed + "<br/>");
document.write("HD Space: " + home_computer.hdspace + "<br/>");
document.write("RAM: " + home_computer.ram + "<br/>");
document.write("Price: $" + home_computer_price + "<br/><br/>");


document.write("Laptop computer: <br/>");
document.write("Speed: " + laptop_computer.speed + "<br/>");
document.write("HD Space: " + laptop_computer.hdspace + "<br/>");
document.write("RAM: " + laptop_computer.ram + "<br/>");
document.write("Price: $" + laptop_computer_price + "<br/><br/>");




