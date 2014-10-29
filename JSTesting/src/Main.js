/** Calculator Functions **/
		
window.onload = function(){
	var button = document.getElementById("button");
	var input = document.getElementById("input");
	var output = document.getElementById("output");
	var choice = document.getElementById("convertingWhat");

		button.onclick=function(){
			switch(choice.value) {
				case "Fahrenheit to Celsius":
					var temperature = input.value;
					output.value=convertFahrenheitToCelsius(temperature);
					break;

				case "Celsius to Fahrenheit":
					var temperature = input.value;
					output.value=convertCelsiustoFahrenheit(temperature);
					break;

				case "Pounds to Kilos":
					var pounds = input.value;
					output.value=convertPoundstoKilos(pounds);
					break;

				case "Litres to Gallons":
					var litres = input.value;
					output.value=convertLitrestoGallons(litres);
					break;

				case "Miles to Km":
					var miles = input.value;
					output.value=convertMilesToKm(miles);
					break;
				
			};
        
      	};

    };