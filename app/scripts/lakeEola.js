/* global angular */
(function(){
  'use strict';

angular.module('oc-run')
  .controller('LakeController', function($http, $routeParams, $firebaseArray) {
    var self = this;
    $http.get('https://oc-run.firebaseio.com/lakeEola/.json')
    .then(function(response){
      self.routes = response.data;
      console.log(self.routes);
    });

    var ref = new Firebase('https://oc-run.firebaseio.com/lakeEola/route/comments/' + $routeParams.lake);
    self.comments = $firebaseArray(ref);

    self.addComment = function(){

      self.comments.$add({
        name: self.newCommentName,
        text: self.newCommentText
      });
    };

  });
})();
