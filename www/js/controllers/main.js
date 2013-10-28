'use strict';

angular.module('yoDemoApp')
  .controller('MainCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.awesomeThings = {
      'html5': 'HTML5 Boilerplate',
      'ng': 'AngularJS',
      'karma': 'Karma'
    };

    $scope.transition = function() {
      window.plugins.NativeNavigator.transition();
    };
  }]
);
