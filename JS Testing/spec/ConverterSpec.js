describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');

    });
  });
});

describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
	it("Celsius to Fahrenheit", function() {
	      var result = convertCelsiustoFahrenheit(100);

	      expect(result).toEqual('212.0');
    });
  });
});

describe("Cooking Ingredients Converter", function() {

  describe("Weight", function() {
	it("convertPoundstoKilos", function() {
	      var result = convertPoundstoKilos(100);

	      expect(result).toEqual('45.3')
	});
  });
});