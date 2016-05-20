juke.factory('PlaylistFactory', function ($http, $q) {

	var PlaylistFactory = {};

	var cachedPlaylists = [];

	PlaylistFactory.create = function (playlistName) {
		console.log(playlistName)
		return $http.post('/api/playlists', {name: playlistName})
		.then(function (response) {
			var playlist = response.data
			cachedPlaylists.push(playlist);
			return playlist;
		});
	}

	PlaylistFactory.list = function () {
		return $http.get('/api/playlists')
		.then(function (res) {
			angular.copy(res.data, cachedPlaylists);
			return cachedPlaylists
		});
	}

	return PlaylistFactory;

})