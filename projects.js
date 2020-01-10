var i = 0;
var text = "PROJECTS";
var speed = 85;

function typing() {
	if (i < text.length) {
		document.getElementById("projects").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
};

function openFlaskInfo() {
	document.getElementById("flaskInfo").style.width = "65%";
	document.getElementById("main").style.marginRight = "65%";
};

function openWriterInfo() {
	document.getElementById("writerInfo").style.width = "65%";
	document.getElementById("main").style.marginRight = "65%";
};

function openWebInfo() {
	document.getElementById("webInfo").style.width = "65%";
	document.getElementById("main").style.marginRight = "65%";
};

function openKpiInfo() {
	document.getElementById("kpiInfo").style.width = "65%";
	document.getElementById("main").style.marginRight = "65%";
};

function openPstrmiInfo() {
	document.getElementById("pstrmiInfo").style.width = "65%";
	document.getElementById("main").style.marginRight = "65%";
};

function openDataInfo() {
	document.getElementById("dataInfo").style.width = "65%";
	document.getElementById("main").style.marginRight = "65%";
};

function closeFlaskInfo() {
	document.getElementById("flaskInfo").style.width = "0";
};

function closeWriterInfo() {
	document.getElementById("writerInfo").style.width = "0";
};

function closeWebInfo() {
	document.getElementById("webInfo").style.width = "0";
};

function closeKpiInfo() {
	document.getElementById("kpiInfo").style.width = "0";
};

function closePstrmiInfo() {
	document.getElementById("pstrmiInfo").style.width = "0";
};

function closeDataInfo() {
	document.getElementById("dataInfo").style.width = "0";
}; 
