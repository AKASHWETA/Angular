(function(angular) {
  'use strict';
  var myApp = angular.module('spicyApp1',[]);
  myApp.controller('SpicyController',['$scope',function($scope) {
	  $scope.spice = 'very';
	  $scope.chilliSpicy = function(){
		  $scope.spice = 'chili';
	  };
	  
	  $scope.jalapenopSpicy = function() {
		  $scope.spice = 'jalapeno';
	  };
  }]);
})(window.angular);
