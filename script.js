var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const css1 = getComputedStyle(body);
var random = document.querySelector(".random")


let colorArray = css1.backgroundImage.split(", rgb");

body.style.background = "linear-gradient(to right, rgb" + colorArray[1] + ", rgb" + colorArray[2];



function componentToHex(rgb) {
	var hex = Number(rgb).toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rbgToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgbFormat(comp) {
	return comp.split('(').join('').split(')').join('').split(", ")
}

hex1 = rbgToHex(rgbFormat(colorArray[1])[0], rgbFormat(colorArray[1])[1], rgbFormat(colorArray[1])[2])
hex2 = rbgToHex(rgbFormat(colorArray[2])[0], rgbFormat(colorArray[2])[1], rgbFormat(colorArray[2])[2])

color1.value = hex1
color2.value = hex2

css.textContent = body.style.background + ";";


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function(){
	color1.value = rbgToHex(randomGradientColor(), randomGradientColor(), randomGradientColor())
	color2.value = rbgToHex(randomGradientColor(), randomGradientColor(), randomGradientColor())
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    css.textContent = body.style.background + ";"

})

function randomGradientColor(){
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    return x.toString()
}



