/* global angular Firebase */
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
      templateUrl: 'views/lakeEola.html'
    });

    $routeProvider.when('/millsFifty', {
      templateUrl: 'views/millsFifty.html'
    });

    $routeProvider.when('/404', {
      templateUrl: 'views/404.html'
    });



  })
})();
