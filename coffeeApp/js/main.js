//This accesses the Foursquare API

var app;

app = angular.module('CoffeeShopFinder', []);

		app.controller('FinderCtrl', function($scope, $http, $location, $window){
			//var foundGeocode = function(response) {
			$scope.findShops = function() {
				var getLatLong = function(address){
	 				$http({
	 					method:"get",
	 					url:"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDpq8m_cmrhDzVAMLxZFvdxGK-tbHjvXIA&address="+address
	 					}).then(function(response){
	 						lat = response.data.results[0]['geometry']['location']['lat']
							lng = response.data.results[0]['geometry']['location']['lng']
// check variables
						console.log(lat + "," + lng);
						locateCoffee (lat, lng);
	 					});
	 			};

				var locateCoffee = function(lat, lng){
					$http({
					 	method:"get",
					 	url:" https://api.foursquare.com/v2/venues/search?oauth_token=IMLGBRBQ0CRH4XICMZPURTJ2OT3DOH5QJYS3XKM3QR32LYET&v=20141105&categoryId=4bf58dd8d48988d1e0931735&ll="+lat + ","+lng
					 	}).then(function(response){
					 		var allResultsJSON = response.data['response']['venues'];
					 		allResultsJSON.forEach(function(venue){

					 		console.log(venue['name'])
					 		});
					 	});

				};
						getLatLong ($scope.searchTerm);
			};
	


// Log search term
					//console.log($scope.searchTerm);

});


