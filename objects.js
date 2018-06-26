var playlist = {
  artist: 'song titles'
}

function updatePlaylist(obj, artist, song) {
  obj[artist] = song
  return obj;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName 
  return playlist;
}
}
