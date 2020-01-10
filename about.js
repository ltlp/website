var i = 0;
var text = "ABOUT";
var speed = 85;

function typing() {
	if (i < text.length) {
		document.getElementById("about").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
};