'use strict';

angular.module('yoDemoApp')
  .controller('NgCtrl', function ($scope) {
    $scope.message = 'AngularJS is amazing !!!';

    $scope.goBack = function () {
      window.history.back();
    };
  });
