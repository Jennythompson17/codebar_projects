describe("Cooking Ingredients Converter", function() {

  describe("Converting Temperatures", function() {
    it("Converts Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');

    });

	it("Converts Celsius to Fahrenheit", function() {
	      var result = convertCelsiustoFahrenheit(100);

	      expect(result).toEqual('212.0');
    });
  });

describe("Converting Weights", function() {
	it("Converts Pounds to Kilos", function() {
	      var result = convertPoundstoKilos(100);
	      expect(result).toEqual('45.4');
	   });
  });

describe("Converting Volumes", function() {
  it("Converts Litres to Gallons", function() {
        var result = convertLitrestoGallons(100);
        expect(result).toEqual('22.0');
     });
  });

describe("Converting Distance", function() {
  it("Converts Miles to Km", function() {
        var result = convertMilesToKm(100);
        expect(result).toEqual('160.9');
     });
  });

});