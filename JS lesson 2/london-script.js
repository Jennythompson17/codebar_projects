// used in london.html

function listDomElements() {
  var children = document.body.childNodes;
  for(var i=0; i <  children.length; i++) {
    console.log(children[i]);
  }
}

var description = document.getElementById("description");

var london = {
  name: "London",
  population: 8308369,
  tallestBuilding: {
     name:  "Shard",
     height: "310m"
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [ 1908, 1948, 2012]
}

var clear = true;
function displayPopulation() {
  if (clear){
    var population = document.createElement("p");
    var content = document.createTextNode("Population: " + london.population);
    population.appendChild(content);
    document.body.appendChild(population);
    clear = false;
  }
}

displayPopulation();