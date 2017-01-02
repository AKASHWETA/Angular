(function(angular) {
  'use strict';
  var app = angular.module('testApp', []);
  app.config(function ($provide) {
      $provide.decorator('$exceptionHandler', ['$delegate','$scope',function ($delegate,$scope) {
          return function (exception, cause) {
              $delegate(exception, cause);
              $scope.error='There has been an error: the error is:';
              $scope.msg='There has been an error: the error is:';
          };
      }]);
  });

  app.controller("exceptionHandlerController", function ($scope) {
      var onSuccess = function (response) {
          $scope.status = response.status;
          $scope.data = response.data;
      };

      var onError = function (response) {
          $scope.status = response.status;
          $scope.data = response.data;
      }
      $scope.getData = function () {
          $http.get("/getdata").then(onSuccess, onError);

      };
  });
})(window.angular);
