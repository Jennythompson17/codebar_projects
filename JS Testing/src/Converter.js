/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  var farenheit = temperature;
  var celsius = (farenheit - 32)/1.8
  return celsius.toFixed(1);
  //return
}

function convertCelsiustoFahrenheit(temperature) {
  //conversion code
  var celsius = temperature;
  var fahrenheit = celsius * 1.8 + 32
  return fahrenheit.toFixed(1);
  //return
}
