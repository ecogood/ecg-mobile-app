(function() {
  'use strict';

  angular.module('ecgMobile')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        })

        .state('matrix', {
          url: '/matrix',
          templateUrl: 'templates/matrix.html',
          controller: 'MatrixCtrl'
        })

        .state('matrixIndicator', {
          url: '/matrix/:indicatorId',
          templateUrl: (window.innerWidth > 500 ?
            'templates/matrix-indicator-tablet.html' :
            'templates/matrix-indicator.html'),
          controller: 'MatrixIndicatorCtrl'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/home');

    });


})();
