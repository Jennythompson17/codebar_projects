// used in lesson2.html

function go() {
	console.log(document.body.parentNode);
}

function listDomElements() {
  var children = document.body.childNodes;
  for(var i=0; i <  children.length; i++) {
    console.log(children[i]);
  }
}