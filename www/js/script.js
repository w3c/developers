document.onscroll = function () {
	if(window.pageYOffset > 1) {
		document.getElementById('navbar').style.display = "inline";
	} else {
		document.getElementById('navbar').style.display = "none";
	}
}