/* global angular Firebase */
(function(){
  'use strict';

  angular.module('oc-run')
    .controller('Mills3Controller', function($http, $routeParams, $firebaseArray) {
      var self = this;
      $http.get('https://oc-run.firebaseio.com/mills3/.json')
      .then(function(response){
        self.routes = response.data;
        console.log(self.routes);
      });

      var ref = new Firebase('https://oc-run.firebaseio.com/mills3/route/' + 'comments');
      self.comments = $firebaseArray(ref);

      self.addComment = function(){

        self.comments.$add({
          name: self.newCommentName,
          text: self.newCommentText
        });
        self.newCommentName = '';
        self.newCommentText = '';
      };

    });
})();
