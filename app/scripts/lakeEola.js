/* global angular */
(function(){
  'use strict';

angular.module('oc-run')
  .controller('LakeController', function($scope, $http) {
    $http.get('https://oc-run.firebaseio.com/lakeEola/.json')
    .then(function(response){
      $scope.routes = response.data;
      console.log(response.data);
    });
  });
})();
