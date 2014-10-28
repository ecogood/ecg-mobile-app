(function() {
  'use strict';

  angular
    .module('ecgMobile.controllers')
    .controller('mQuicktestHomeCtrl', function($scope, ecgQuicktestTexts) {
      var lang = 'de';
      $scope.t = ecgQuicktestTexts[lang];
    });
})();