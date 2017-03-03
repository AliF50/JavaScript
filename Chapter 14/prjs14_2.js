function go_there() {
    s = document.getElementById("s1");
    window.location = s.options[s.selectedIndex].value;
    return false;
}