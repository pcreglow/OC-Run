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
      templateUrl: 'views/lakeEola2.html',
      controller: 'Lake2Controller',
      controllerAs: 'lake2'
    });

    $routeProvider.when('/route2', {
      templateUrl: 'views/lakeEola3.html',
      controller: 'Lake3Controller',
      controllerAs: 'lake3'
    });

    $routeProvider.when('/millsFifty', {
      templateUrl: 'views/millsFifty.html',
      controller: 'MillsController',
      controllerAs: 'mills'
    });

    $routeProvider.when('/mills1', {
      templateUrl: 'views/mills2.html',
      controller: 'Mills2Controller',
      controllerAs: 'mills2'
    });

    $routeProvider.when('/mills2', {
      templateUrl: 'views/mills3.html',
      controller: 'Mills3Controller',
      controllerAs: 'mills3'
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
