'use strict';

/**
 * @ngdoc function
 * @name instagramApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the instagramApp
 */
angular.module('instagramApp')
  .controller('AboutCtrl', function ($scope, dataSourceInstatram, $q) {
    $scope.user;
    function init(){
        dataSourceInstatram.getUser().then(function(res){
          // dataSourceInstatram.flo()
          console.log(res.data.data);
          $scope.user = res.data.data;
          // $scope.user = {
          //   name :
          // }
        });
    }
    init();

  });
