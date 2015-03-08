angular.module('shortly.global', [])

.controller('GlobalController', function ($scope, $location, Auth) {
  $scope.showNav = function() {
    return Auth.isAuth();
  };
  $scope.signout = function(){
    Auth.signout();
    $location.path('/signin');
  };
})
.directive('globalNav', function(){
  return {
    templateUrl: "app/global/global-nav.html"
  }
})
