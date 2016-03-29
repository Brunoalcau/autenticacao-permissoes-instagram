'use strict';

/**
 * @ngdoc function
 * @name instagramApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the instagramApp
 */
angular.module('instagramApp')
  .controller('MainCtrl', function ($scope, $auth) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
  });
