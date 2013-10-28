'use strict';

angular.module('yoDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/html5', {
        templateUrl: 'views/html5.html',
        controller: 'Html5Ctrl'
      })
      .when('/ng', {
        templateUrl: 'views/ng.html',
        controller: 'NgCtrl'
      })
      .when('/karma', {
        templateUrl: 'views/karma.html',
        controller: 'KarmaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
);
