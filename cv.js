var i = 0;
var text = "CURRICULUM VITAE";
var speed = 60;

function typing() {
	if (i < text.length) {
		document.getElementById("cv").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
};
