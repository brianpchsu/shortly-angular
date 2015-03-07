angular.module('shortly.links', [])

.controller('LinksController', function ($rootScope, $scope, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function (data){
        $scope.data.links = data;
      }).catch(function (error){
        console.error(error);
      });
  };
  $rootScope.getLinks = $scope.getLinks;
  console.log($rootScope.getLinks);

  $scope.getLinks();
})
