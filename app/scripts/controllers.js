(function() {
  'use strict';

  angular.module('ecgMobile.controllers', [])
    .controller('HomeCtrl', function($scope, ecgQuicktestTexts) {
      console.log('HomeCtrl');
      var lang = 'de';
      $scope.t = ecgQuicktestTexts[lang];
    })
    .controller('MatrixCtrl', MatrixCtrl)
    .controller('MatrixIndicatorCtrl', MatrixIndicatorCtrl);

  MatrixCtrl.$inject = ['$scope', 'ECGMatrix'];
  function MatrixCtrl($scope, ECGMatrix) {
    $scope.indicators = ECGMatrix.getIndicators();
  }

  MatrixIndicatorCtrl.$inject = ['$scope', '$stateParams', 'ECGMatrix'];
  function MatrixIndicatorCtrl($scope, $stateParams, ECGMatrix) {
    console.log('MatrixIndicatorCtrl');
    $scope.indicator = ECGMatrix.getIndicator($stateParams.indicatorId);
  }

})();
