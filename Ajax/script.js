// github user finder example

var userName = 'jennythompson17'; 
var url = 'https://api.github.com/users/'+ userName;

function getData() {
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onload = function(){
 	var userData = JSON.parse(this.responseText);
 	console.log(userData);
 	console.log(userData.login);
 };
 xmlhttp.open("GET", url, true);
 xmlhttp.send();
 return xmlhttp;
};

getData();