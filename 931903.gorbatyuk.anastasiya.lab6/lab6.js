function leftbt() {
	var elem = document.getElementsByClassName("leftcl");
	for(var i=0; i<elem.length; i++) elem[i].style.width='870px';
	var elem = document.getElementsByClassName("rightcl");
	for(var i=0; i<elem.length; i++) elem[i].style.width='30px';
	var elem = document.getElementsByClassName("cat");
	for(var i=0; i<elem.length; i++) elem[i].style.width='600px';
	var elem = document.getElementsByClassName("dog");
	for(var i=0; i<elem.length; i++) elem[i].style.width='0px';	
}

function rightbt() {
	var elem = document.getElementsByClassName("leftcl");
	for(var i=0; i<elem.length; i++) elem[i].style.width='30px';
	var elem = document.getElementsByClassName("rightcl");
	for(var i=0; i<elem.length; i++) elem[i].style.width='870px';
	var elem = document.getElementsByClassName("cat");
	for(var i=0; i<elem.length; i++) elem[i].style.width='0px';
	var elem = document.getElementsByClassName("dog");
	for(var i=0; i<elem.length; i++) elem[i].style.width='600px';	
}
function middlebt() {
	var elem = document.getElementsByClassName("leftcl");
	for(var i=0; i<elem.length; i++) elem[i].style.width='450px';
	var elem = document.getElementsByClassName("rightcl");
	for(var i=0; i<elem.length; i++) elem[i].style.width='450px';
	var elem = document.getElementsByClassName("cat");
	for(var i=0; i<elem.length; i++) elem[i].style.width='400px';
	var elem = document.getElementsByClassName("dog");
	for(var i=0; i<elem.length; i++) elem[i].style.width='400px';	
}