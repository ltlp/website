function openSidebar() {
	document.getElementById("sidebar").style.width = "240px";
};

function closeSidebar() {
	document.getElementById("sidebar").style.width = "0";
};

function openFlaskInfo() {
	document.getElementById("flaskInfo").style.width = "65%";
	document.getElementById("main").style.marginRight = "65%";
};

function closeFlaskInfo() {
	document.getElementById("flaskInfo").style.width = "0";
	document.getElementById("main").style.marginRight = "0";
};
