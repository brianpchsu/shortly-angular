angular.module('shortly.shorten', [])

.controller('ShortenController', function ($rootScope, $scope, $location, Shorten) {
  $scope.link = {};

  $scope.addLink = function(link){
    Shorten.addLink(link);
    $location.path('/links');
  }


});
