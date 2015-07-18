/* global angular */
(function(){
  'use strict';

  angular.module('oc-run')
    .controller('Mills2Controller', function($http, $routeParams, $firebaseArray) {
      var self = this;
      $http.get('https://oc-run.firebaseio.com/mills2/.json')
      .then(function(response){
        self.routes = response.data;
        console.log(self.routes);
      });

      var comments = $routeParams.lake;
      var ref = new Firebase('https://oc-run.firebaseio.com/mills2/route/' + 'comments');
      self.comments = $firebaseArray(ref);

      self.addComment = function(){

        self.comments.$add({
          name: self.newCommentName,
          text: self.newCommentText
        });
        self.newCommentName="";
        self.newCommentText="";
      };

    });
})();
