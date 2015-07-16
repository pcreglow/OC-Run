/* global angular */
(function(){
  'use strict';

angular.module('oc-run')
  .controller('LakeController', function($http) {
    var self = this;


    $http.get('https://oc-run.firebaseio.com/lakeEola/.json')
    .then(function(response){
      self.routes = response.data;
      console.log(self.routes);
    });
  });
})();
