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
      clientId: '158d76fc9666428bb5a5977cf29d3aa0',
      responseType:'token',
      scope:'public_content+comments'
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
