var i = 0;
var text = "CONTACT";
var speed = 65;

function typing() {
	if (i < text.length) {
		document.getElementById("contact").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
};
