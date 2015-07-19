/* global angular Firebase */
(function(){
  'use strict';

  angular.module('oc-run')
    .controller('MillsEventsController', function($http, $routeParams, $firebaseArray) {
      var self = this;
      $http.get('https://oc-run.firebaseio.com/millsEvents/.json')
      .then(function(response){
        self.routes = response.data;
        console.log(self.routes);
      });

  });
})();
