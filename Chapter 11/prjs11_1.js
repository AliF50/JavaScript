var stuff = new Array("monitor", "motherboard", "chip", "hard drive", "CD-RW drive", "power supply");
stuff.sort();

for(var count = 0; count<stuff.length; count++){
    document.write(stuff[count] + "<br/>");
}

