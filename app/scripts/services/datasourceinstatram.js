'use strict';

/**
 * @ngdoc service
 * @name instagramApp.dataSourceInstatram
 * @description
 * # dataSourceInstatram
 * Service in the instagramApp.
 */
angular.module('instagramApp')
  .service('dataSourceInstatram', function ($http) {
    var _getUser = function functionName() {
      var token = window.localStorage.getItem('satellizer_token');
      return $http.jsonp('https://api.instagram.com/v1/users/self/?access_token='+token +'&callback=JSON_CALLBACK');
    };

    return {
      getUser: _getUser
    }
  });
