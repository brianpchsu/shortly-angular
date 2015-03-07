angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.Links = {};

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function (data){
        $scope.Links = data;
      }).catch(function (error){
        console.error(error);
      });
  };

  $scope.getLinks();
})
