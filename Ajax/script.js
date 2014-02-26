// github user finder example

var url = 'https://api.github.com/users/jennythompson17';

function getData() {
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onload = function(){
 	var userData = JSON.parse(this.responseText);
 	console.log(userData);
 };
 xmlhttp.open("GET", url, true);
 xmlhttp.send();
 return xmlhttp;
};

getData();