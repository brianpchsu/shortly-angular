angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  $scope.link = {};
  $scope.link.url = "";

  $scope.addLink = function(link){
    Shorten.addLink(link);
    $location.path('/links');
  }
});
