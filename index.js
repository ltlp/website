var i = 0;
var text = "LAURA PRICE";
var speed = 60;

function typing() {
	if (i < text.length) {
		document.getElementById("laura").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
};