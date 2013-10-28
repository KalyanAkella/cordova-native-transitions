'use strict';

angular.module('yoDemoApp')
  .controller('Html5Ctrl', function ($scope) {
    $scope.message = 'HTML5 Rocks !!!';

    $scope.goBack = function () {
      window.plugins.NativeNavigator.transition(false);
      window.history.back();
    };
  });
