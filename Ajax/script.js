// github user finder example
function showUser(userData,person){
	$("#profile h2").html(person + " is GitHub user # " + userData.id)
	$("#profile .information").html("<a href="+userData.html_url+">"+ userData.html_url + "</a>")
	};




function updatePage(userData, response, person){
	if(response!=404){
		showUser(userData, person);
		//console.log(userData);
 		//console.log(userData.login);
 		}
	else{
		$("#profile h2").html("no such user: " + person);
		};
	};


function getData(person) {
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onload = function(){
 	var userData = JSON.parse(this.responseText);
 	var response = JSON.parse(this.status);
 	updatePage(userData, response, person);
 };

 var query = 'https://api.github.com/users/'+ person;
 xmlhttp.open("GET", query, true);
 xmlhttp.send();
 return xmlhttp;
};


$(document).ready(function(){
  $(document).on('keypress', '#username', function(e){
    if (e.which == 13) {
      var person = $('#username').val();
      getData(person);
    }
  })
});


//$("#profile h2").html("no such user: " + person)