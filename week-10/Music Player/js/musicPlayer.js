

var songList = document.querySelector("ol"),
    playlistList = document.querySelector("ul"),
    actualSong = document.querySelector("audio"),
    artwork = document.querySelector(".artwork"),
    currentArtist = document.querySelector(".current-artist"),
    currentSongTitle = document.querySelector(".current-song"),
    favoriteStar = document.querySelector('.favorite'),
    inputField = document.querySelector('.new-list'),
    selectField = document.querySelector('.playlist-selector');
    addSongToPlaylist = document.querySelector('.add_new_song'),
    addNewPlaylist = document.querySelector('.add_new_playlist'),
    plusAddSong = document.querySelector('.add-song'),
    addSongTo = document.querySelector('.add-song-to'),
    plusAddPlaylist = document.querySelector('.add-playlist'),
    cancelPlaylist = document.querySelector('.cancel-playlist'),
    cancelSong = document.querySelector('.cancel-song');

var songNumber = 0,
    listNumber = 0,
    songID = 0,
    actualList = [],
    actualPlaylists = [];

ajax.listPlaylist(mainLoop);



// Main Loop
function mainLoop(playlistData) {
  actualPlaylists = playlistData;
  var allLiElements = playlistList.querySelectorAll('li');
  allLiElements.forEach(function(elem) {
    playlistList.removeChild(elem);
  })
  for (var i = 0; i < actualPlaylists.length; i++) {
    playlistMaker(actualPlaylists[i], i)
  }
};


// HTMLBuilder :: playlists
function playlistMaker(listData, listIndex) {
  var newLiTag = document.createElement('li'),
      newH1Tag = document.createElement('h1'),
      newImgTag = document.createElement('img');
  playlistList.appendChild(newLiTag);
  newLiTag.appendChild(newH1Tag).innerHTML = listData.name;

  if (listIndex % 2 == 1) {
    newLiTag.classList.add('odd');
  }

  if (listIndex > 1) {
    newLiTag.appendChild(newImgTag).classList.add('delete-list');
    newImgTag.setAttribute('src', 'imgs/cross.png');
  }

  newLiTag.addEventListener('click', function() {
    songNumber = 0;
    listNumber = listData.id;
    unselector(playlistList);
    ajax.list(songSelector, listIndex);
    var songs = songList.querySelectorAll('li');
    songs.forEach(function(song) {
      song.remove();
    });
    selected(playlistList, "playlists");
  });

  newImgTag.addEventListener('click', function() {
    listNumber = listData.id;
    playlistList.removeChild(newLiTag);
    ajax.removeList(listNumber);
  });
};



// create actual tracklist
function songSelector(songData) {
  songData.forEach(function(song, songIndex) {
    listMaker(song, songIndex, listNumber);
  });
};



// HTMLBuilder :: tracklist
function listMaker(song, songIndex, listIndex) {
  var newLiTag = document.createElement('li'),
      newH1Tag = document.createElement('h1'),
      newH2Tag = document.createElement('h2');
  songList.appendChild(newLiTag);
  newLiTag.appendChild(newH1Tag).textContent = song.title;
  newLiTag.appendChild(newH2Tag);

  if (songIndex % 2 == 1) {
    newLiTag.classList.add('odd');
  }

  newLiTag.addEventListener('click', function() {
    songID = song.id;
    songNumber = songIndex;
    trackFinder(song);
    selected(songList, "songs");
  });
};



// rewind & fast forward events
var rewind = document.querySelector('.rewind'),
    fastForward = document.querySelector('.forward');

rewind.addEventListener('click', function() {
  if (songNumber > 0) {
    songNumber--;
    songID = actualList[songNumber].track_id;
    trackFinder(actualList[songNumber]);
    selected(songList, "songs");
  };
});

fastForward.addEventListener('click', function() {
  if (songNumber < actualList.length - 1) {
    songNumber++;
    songID = actualList[songNumber].track_id;
    trackFinder(actualList[songNumber]);
    selected(songList, "songs");
  };
});




// event listener to favorite star sign
favoriteStar.addEventListener('click', function() {
  ajax.update(songID);
  actualList.forEach(function(song) {
    if (song.trackID === songID) {
      if (song.fav === 1) {
        song.fav = 0;
        ajax.removeSong(1, songID);
      } else {
        song.fav = 1;
        ajax.addTrack(1, songID);
      }
      trackFinder(song);
    };
  });
});



// event listeners to ADD PLAYLIST button
plusAddPlaylist.addEventListener('click', function() {
  addNewPlaylist.classList.remove('pop-off');
  inputField.value = "";
});
addNewPlaylist.addEventListener('click', function() {
  if (inputField.value.length !== 0) {
    ajax.addList(function() {
      ajax.listPlaylist(mainLoop);
    }, {text: inputField.value});
    inputField.value = "";
    addNewPlaylist.classList.add('pop-off');
  }
});
cancelPlaylist.addEventListener('click', function() {
  addNewPlaylist.classList.add('pop-off');
});

plusAddSong.addEventListener('click', function() {
  addSongToPlaylist.classList.remove('pop-off');
  selectMenuSetUp();
});

addSongTo.addEventListener('click', function() {
  actualPlaylists.forEach(function(list) {
    if (list.id == selectField.value) {
      ajax.addTrack(list.id, songNumber);
    }
  });
  addSongToPlaylist.classList.add('pop-off');
});

cancelSong.addEventListener('click', function() {
  addSongToPlaylist.classList.add('pop-off');
});



function selectMenuSetUp() {
  var selectorContainer = document.querySelector('.selector-container');
      playlistSelector = document.querySelector('.playlist-selector');
  selectorContainer.removeChild(playlistSelector);

  var newSelectTag = document.createElement('select');

  selectorContainer.appendChild(newSelectTag).classList.add('playlist-selector');

  actualPlaylists.forEach(function(list, listIndex) {
    var newOptionTag = document.createElement('option');
    playlistSelector = document.querySelector('.playlist-selector');
    newOptionTag.value = list.id;
    if (listIndex > 1) {
      playlistSelector.appendChild(newOptionTag).innerHTML = list.name;
    }
  });
};



// set selected class to the track
function selected(list, key) {
  unselector(list);
  var lines = list.querySelectorAll('li');
  lines.forEach(function(line, index) {
    if (key === "songs") {
      if (index === songNumber) {
        line.classList.add('selected');
      }
    } else {
      if (index === listNumber) {
        line.classList.add('selected');
      }
    }
  });
};

// remove selected class from the track
function unselector(list) {
  list.querySelectorAll('li').forEach(function(song) {
    song.classList.remove('selected');
  })
};


// current track finder
function trackFinder(song) {
  setCurrentSong(song);
  setActualSong(song);
  setFavoriteStar(song);
};



// set title and artist visible
function setCurrentSong(song) {
  currentArtist.textContent = song.title;
  currentSongTitle.innerHTML = song.artist;
};


// set actual song
function setActualSong(song) {
  actualSong.setAttribute('src', song.src);
  artwork.setAttribute('src', song.artwork);
}

// set favorite star
function setFavoriteStar(song) {
  if (song.fav === 1) {
    favoriteStar.setAttribute('src', 'imgs/star_full.png');
  } else {
    favoriteStar.setAttribute('src', 'imgs/star.png');
  }
};
