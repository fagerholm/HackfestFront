'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($scope, Employees) {
      $scope.allcustomers = Employees.query() ;
      $scope.showSelectedElement = function(c){
          $scope.selected = c;
      }
  })
  .controller('MyCtrl2', [function() {

  }]);