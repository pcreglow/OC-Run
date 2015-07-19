/* global angular Firebase */
(function(){
  'use strict';

angular.module('oc-run')
  .controller('LakeEventsController', function($http) {
    var self = this;
    $http.get('https://oc-run.firebaseio.com/lakeEvents/.json')
    .then(function(response){
      self.routes = response.data;
      console.log(self.routes);
    });
});
})();
