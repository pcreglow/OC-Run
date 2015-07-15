/* global angular */
(function(){
  'use strict';

  angular.module('oc-run')
    .controller('MillsController', function($scope, $http) {
      $http.get('https://oc-run.firebaseio.com/mills50/.json')
      .then(function(response){
        $scope.routes = response.data;
        console.log(response.data);
      });
    });
})();
