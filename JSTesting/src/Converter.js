/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  var farenheit = temperature;
  var celsius = (farenheit - 32)/1.8
  return celsius.toFixed(1);

}

function convertCelsiustoFahrenheit(temperature) {
  //conversion code
  var celsius = temperature;
  var fahrenheit = celsius * 1.8 + 32
  return fahrenheit.toFixed(1);

}

function convertPoundstoKilos(pounds) {
  //conversion code
  var kilos = pounds/2.2046
  return kilos.toFixed(1);

}

function convertLitrestoGallons(litres) {
  //conversion code
  var gallons = litres*0.22
  return gallons.toFixed(1);

}

function convertMilesToKm(miles) {
  //conversion code
  var km = miles*1.609
  return km.toFixed(1);

}