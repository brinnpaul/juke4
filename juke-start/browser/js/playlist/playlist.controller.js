

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $stateParams, $state, SongFactory) {

  PlaylistFactory.fetchById($stateParams.playlistId)
  .then(function(playlist) {
    $scope.playlist = playlist
  })

  $scope.logScope = function() {
    console.log($scope)
  };

  $scope.createNewPlaylist = function (data) {
    $scope.newPlaylist.$setPristine();
    $scope.name = null;
    PlaylistFactory.create(data).then(function(res) {
      $state.go('PlayList', {playlistId: res.id})
    })
  }

  SongFactory.fetchAll()
  .then(function(songs) {
    $scope.songs = songs
  })

  function setSongToPost(song) {
    $scope.song = song
  }

  $scope.add = function(song, playlist) {
    PlaylistFactory.addSong(song, playlist)
  }

});
