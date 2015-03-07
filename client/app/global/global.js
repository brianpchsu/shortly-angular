angular.module('shortly.global', [])

.controller('GlobalController', function ($scope, $location, Auth) {
  $scope.showNav = function() {
    return Auth.isAuth();
  };
  $scope.go = function(event, location){
    event.stopPropagation();
    $location.path = location;
  }
});
