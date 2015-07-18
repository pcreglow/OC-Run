/* global angular */
(function(){
  'use strict';

  angular.module('oc-run')
    .controller('MillsController', function($http, $routeParams, $firebaseArray) {
      var self = this;
      $http.get('https://oc-run.firebaseio.com/mills50/.json')
      .then(function(response){
        self.routes = response.data;
        console.log(self.routes);
      });

      var comments = $routeParams.lake;
      var ref = new Firebase('https://oc-run.firebaseio.com/millsFifty/route/' + 'comments');
      self.comments = $firebaseArray(ref);


    });
})();
