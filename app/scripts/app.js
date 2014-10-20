(function() {
  'use strict';

  angular.module('ecgMobile',
    ['ionic', 'ecgMobile.controllers', 'ecgMobile.services',
     'tabSlideBox'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })
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
          templateUrl: 'templates/matrix-indicator.html',
          controller: 'MatrixIndicatorCtrl'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/home');

    });


})();
