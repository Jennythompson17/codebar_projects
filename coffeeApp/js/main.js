var app;

app = angular.module('CoffeeShopFinder', true);

app.controller('FinderCtrl', function($scope, $http, $location, $window){
	$scope.findShops = function() {
		foundGeocode = function(response) {
			lat = response.data.results[0]['geometry']['location']['lat']
			lng = response.data.results[0]['geometry']['location']['lng']

			$http({
				method:"get",
				url:" https://api.foursquare.com/v2/venues/search?oauth_token=IMLGBRBQ0CRH4XICMZPURTJ2OT3DOH5QJYS3XKM3QR32LYET&v=20141105&ll="+lat + ","+lng
			}).then(foundShops, (function(){}));
		};

		foundShops = function(response){
			debugger
		};

		$http({
			method:"get",
			url:"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDpq8m_cmrhDzVAMLxZFvdxGK-tbHjvXIA&address="+$scope.searchTerm
		}).then(foundGeocode, (function(){}));



		console.log($scope.searchTerm)
	};

});
