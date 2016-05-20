'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

	PlaylistFactory.list()
	.then(function (res) {
		console.log(res);
		$scope.Playlists = res
	});
  // nothing to see here for now… state transitions happening with ui-sref!

});
