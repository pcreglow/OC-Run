/* global angular */
(function(){
  'use strict';

  angular.module('oc-run', [
    'ngRoute',
    'restangular',
    'firebase'
  ])
  .config(function($routeProvider){
    $routeProvider.when('/home', {
      templateUrl: 'views/home.html'
    });

    $routeProvider.when('/lakeEola', {
      templateUrl: 'views/lakeEola.html',
      controller: 'LakeController',
      controllerAs: 'lake'
    });

    $routeProvider.when('/route1', {
      templateUrl: 'views/route1.html'
    });

    $routeProvider.when('/millsFifty', {
      templateUrl: 'views/millsFifty.html',
      controller: 'MillsController',
      controllerAs: 'mills'
    });

    $routeProvider.when('/about', {
      templateUrl: 'views/about.html'
    });

    $routeProvider.when('/404', {
      templateUrl: 'views/404.html'
    });

    $routeProvider.when('/', {
        redirectTo: '/home'
      });

      $routeProvider.otherwise('/404');

  });
})();
