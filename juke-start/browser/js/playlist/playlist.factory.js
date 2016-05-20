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

	PlaylistFactory.fetchById = function (id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) { return response.data; })
    // .then(AlbumFactory.convert)
    .then(function (playlists) {
      return playlists
    });
  };

	PlaylistFactory.addSong = function (song, playlist) {
		return $http.post('/api/playlists/'+playlist.id+'/songs', {playlistId: 10, songId: 100} )
		.then(function (response) {
			console.log(response)
			return response.data;
		})
		.then(function (playlistWithSongs) {
			return playlistWithSongs
		});
	};

	return PlaylistFactory;

})
