/** Calculator Functions **/
		
window.onload = function(){
	var input = document.getElementById("input");
	var output = document.getElementById("output");
	var choice = document.getElementById("convertingWhat");

		document.getElementById("button").onclick=function(){
			switch(choice.value) {
				case "Fahrenheit to Celsius":
					output.value=convertFahrenheitToCelsius(input.value);
					break;

				case "Celsius to Fahrenheit":
					output.value=convertCelsiustoFahrenheit(input.value);
					break;

				case "Pounds to Kilos":
					output.value=convertPoundstoKilos(input.value);
					break;

				case "Litres to Gallons":
					output.value=convertLitrestoGallons(input.value);
					break;

				case "Miles to Km":
					output.value=convertMilesToKm(input.value);
					break;
				
			};
        
      	};

      	choice.onchange=function(){
      		input.value = "";
      		output.value = "";
      	};



    };