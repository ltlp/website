var i = 0;
var text = "SKILLS";
var speed = 85;

function typing() {
	if (i < text.length) {
		document.getElementById("skills").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
};