/* global angular Firebase */
(function(){
  'use strict';

angular.module('oc-run')
  .controller('LakeEventsController', function($http, $routeParams, $firebaseArray) {
    var self = this;
    $http.get('https://oc-run.firebaseio.com/lakeEvents/.json')
    .then(function(response){
      self.routes = response.data;
      console.log(self.routes);
    });

    var ref = new Firebase('https://oc-run.firebaseio.com/lakeEvents/route/' + 'events');
    self.events = $firebaseArray(ref);

    self.addEvent = function(){

      self.events.$add({
        name: self.newEventName,
        location: self.newEventLocation,
        date: self.newEventDate,
        time: self.newEventTime,
        contact: self.newEventContact,
        info: self.newEventInformation
      });
      self.newEventName = '';
      self.newEventLocation = '';
      self.newEventDate = '';
      self.newEventTime = '';
      self.newEventContact = '';
      self.newEventInformation = '';
    };
});
})();
