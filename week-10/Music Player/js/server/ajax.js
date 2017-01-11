var Ajax = function() {
  this.listPlaylist = function(callback) {
    this.collector('GET', `/playlists`, null, callback);
  }
  this.list = function(callback, listID) {
    this.collector('GET', `/playlist-tracks/${listID}`, null, callback);
  };
  this.addList = function(callback, data) {
    this.collector('POST', `/playlists`, data, callback);
  };
  this.addTrack = function(listID, trackID) {
    this.collector('POST', `/playlist-tracks/${listID}/${trackID}`, null);
  };
  this.update = function(songID) {
    this.collector('PUT', `/playlist-tracks/${songID}`, null);
  };
  this.removeList = function(listID) {
    this.collector('DELETE', `/playlists/${listID}`, null);
  };
  this.removeSong = function(listID, trackID) {
    this.collector('DELETE', `/playlists/${listID}/${trackID}`, null);
  };



  this.collector = function(method, resource, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, 'http://localhost:3000' + resource, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    data = (data) ? JSON.stringify(data) : null;
    xhr.send(data);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (callback != undefined) {
          actualList = JSON.parse(xhr.responseText);
          callback(actualList);
        }
      }
    };
  };
}

var ajax = new Ajax();
