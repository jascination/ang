'use strict';

/**
 * @ngdoc function
 * @name angApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angApp
 */
angular.module('angApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
