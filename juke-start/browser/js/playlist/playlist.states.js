

juke.config(function ($stateProvider) {
  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/template/newPlaylist.html',
    controller: 'PlaylistCtrl'
  });
  $stateProvider.state('PlayList', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/playlist/template/playlist.html',
    controller: 'PlaylistCtrl'
  })
});
