/* global angular */
(function(){
  'use strict';

angular.module('oc-run')
  .controller('Lake2Controller', function($http, $routeParams, $firebaseArray) {
    var self = this;
    self.routes = [ ];

    $http.get('https://oc-run.firebaseio.com/lakeEola2/.json')
    .then(function(response){
      console.log(response.data);
      self.routes = response.data;
    });

    var comments = $routeParams.lake;
    var ref = new Firebase('https://oc-run.firebaseio.com/lakeEola2/route/' + 'comments');
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
