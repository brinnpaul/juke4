

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {

  $scope.logScope = function() {
    console.log($scope)
  };

  $scope.createNewPlaylist = function (data) {
  	PlaylistFactory.create(data);
  	$scope.name = null;
	$scope.newPlaylist.$setPristine();
	// $scope.$evalAsync();
  }


});
