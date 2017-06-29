'use strict';

/**
 * @ngdoc overview
 * @name galleryByReactApp
 * @description
 * # galleryByReactApp
 *
 * Main module of the application.
 */
angular
  .module('galleryByReactApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
