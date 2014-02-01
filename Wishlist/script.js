/* Exercise 1: Wish list */

//revising Lesson 2

function listDomElements() {
  var children = document.body.childNodes;
  for(var i=0; i <  children.length; i++) {
    console.log(children[i]);
  }
}


function addWish() {
  var wish = document.createElement("wish");
  var content = document.createTextNode($("input[type=text]"););
  wish.appendChild(content);
  document.body.appendChild(population);
}

$(document).ready(function() {
  // here go all the interactions

  /* click, mouseover, change etc */
});



//$('#items').append("<li>Thing One</li>")