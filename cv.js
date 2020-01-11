var i = 0;
var text = "CURRICULUM VITAE";
var speed = 50;

function typing() {
	if (i < text.length) {
		document.getElementById("cv").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
};
