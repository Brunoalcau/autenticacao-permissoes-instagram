'use strict';

/**
 * @ngdoc overview
 * @name instagramApp
 * @description
 * # instagramApp
 *
 * Main module of the application.
 */
angular
  .module('instagramApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {

    $authProvider.instagram({
      clientId: 'Seu id do instagram',
      responseType:'token',
      scope:'public_content+comments+follower_list+relationships'
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
