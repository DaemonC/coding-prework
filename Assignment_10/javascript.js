function grow() {
    var h = parseInt(document.getElementById("box").style.height) + 10;
    document.getElementById("box").style.height = h + "px";
    var w = parseInt(document.getElementById("box").style.width) +10;
    document.getElementById("box").style.width = w + "px";
}

function changeBlue() {
    document.getElementById("box").style.backgroundColor = "blue";
}

function reset() {
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
}

