angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.key = '';
    $scope.results = undefined; 
    $scope.newItem = {
            "code": "", 
            "name": "", 
            "coordinates": {
                "latitude": 0, 
                "longitude": 0
            }, 
            "address": ""
    };

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.newItem);
      $scope.newItem = {
            "code": "", 
            "name": "", 
            "coordinates": {
                "latitude": 0, 
                "longitude": 0
            }, 
            "address": ""
      };
    }
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    }
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    }
/**/
    $scope.filter = function() {
	var length = $scope.listings.length;
	for(var i = 0; i < length; i++){
		if ($scope.listings[i].name.indexOf(key) == -1){
			$scope.listings.splice(i, 1);
		};
	}
	$scope.key = '';
    }
//
  }
]);
