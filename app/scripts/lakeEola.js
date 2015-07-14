(function(){
angular.module('oc-run')
  .controller('LakeController', function($scope, $http) {
    $http.get('http://oc-run.firebaseio.com/lakeEola/.json')
    .then(function(response){
      console.log(response.data)
    })
  })
})();
