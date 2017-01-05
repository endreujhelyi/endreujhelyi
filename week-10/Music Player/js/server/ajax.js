var Ajax = function() {
  this.list = function(callback, listID) {
    this.collector('GET', `/playlist-tracks/${listID}`, null, callback);
  };
  this.addList = function(callback, data) {
    this.collector('POST', `/playlists`, data, callback);
  };
  this.addTrack = function(callback, data, listID) {
    this.collector('POST', `/playlist-tracks/${listID}`, data, callback);
  };
  this.update = function(callback, data, songID) {
    this.collector('PUT', `/playlist-tracks/${songID}`, data, callback);
  };
  this.removeList = function(callback, listID) {
    this.collector('DELETE', `/playlists/${listID}`, null, callback);
  };
  this.removeSong = function(callback, listID, trackID) {
    this.collector('DELETE', `/playlists/${listID}/${trackID}`, null, callback);
  };



  this.collector = function(method, resource, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, 'http://localhost:3000' + resource, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    data = (data) ? JSON.stringify(data) : null;
    xhr.send(data);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        callback(listNumber);
      }
    };
  };
};
