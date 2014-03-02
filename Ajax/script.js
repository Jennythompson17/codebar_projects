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

$(document).ready(function(){
  $(document).on('keypress', '#username', function(e){
    if (e.which == 13) {
      // get val() from input field

     // assign getGithubUserInfo(username) to a variable response

    }
  })
});