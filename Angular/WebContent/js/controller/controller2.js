(function(angular) {
  'use strict';
  var myApp = angular.module('spicyApp2',[]);
  myApp.controller('SpicyController2',['$scope',function($scope) {
	  $scope.customSpice = "wasabi";
	  $scope.spice = "very";
	  
	  $scope.spicy = function(spice){
		  $scope.spice = spice;
	  };
	  
	  $scope.jalapenopSpicy = function() {
		  $scope.spice = 'jalapeno';
	  };
  }]);
})(window.angular);
