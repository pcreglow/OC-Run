(function(){
  angular.module('oc-run')
    .controller('MillsController', function($scope, $http) {
      $http.get('http://oc-run.firebaseio.com/millsFifty/.json')
      .then(function(response){
        $scope.routes = response.data;
        console.log(response.data);
      })
    })
})();
