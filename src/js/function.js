function turnOnLight() {
    document.getElementById("image").src = "../../images/Light-ON.png";
    document.getElementById("image").title = "Bulb ON";
    document.body.style.backgroundColor = "#FFF";
    document.getElementsByTagName("h1")[0].style.color = "#000";
    document.getElementById("image").style.transform = "translateY(-15px)";
    document.getElementById("image").style.transition = "transform 1s ease";
    
}
function turnOffLight() {
    document.getElementById("image").src = "../../images/light-OFF.png";
    document.getElementById("image").title = "Bulb OFF";
    document.body.style.backgroundColor = "#000";
    document.getElementsByTagName("h1")[0].style.color = "#FFF";
    document.getElementsByTagName("h1")[0].style.transition = "color 1s ease-in";
    document.getElementById("image").style.transform = "translateY(15px)" ;
}