'use strict';

angular.module('yoDemoApp')
  .controller('KarmaCtrl', function ($scope) {
    $scope.message = 'KarmaJS helps run tests easily :)';

    $scope.goBack = function () {
      window.plugins.NativeNavigator.transition(false);
      window.history.back();
    };
  });
