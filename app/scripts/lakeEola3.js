/* global angular */
(function(){
  'use strict';

  angular.module('oc-run')
    .controller('Lake3Controller', function($http) {
      var self = this;
      self.routes = [ ];

      $http.get('https://oc-run.firebaseio.com/lakeEola3/.json')
      .then(function(response){
        console.log(response.data);
        self.routes = response.data;
      });
    });
})();
