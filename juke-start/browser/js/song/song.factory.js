'use strict';

juke.factory('SongFactory', function ($http) {

  var SongFactory = {}

  SongFactory.convert = function (song) {
      song.audioUrl = '/api/songs/' + song.id + '/audio';
      return song;
    }


  SongFactory.fetchAll = function() {
    return $http.get('/api/songs')
    .then(function(res) { return res.data})
    .then(function(songs) {
      return songs
    })
  }

  return SongFactory

});
