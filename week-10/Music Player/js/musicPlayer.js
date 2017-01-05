

var songList = document.querySelector("ol"),
    playlistList = document.querySelector("ul"),
    actualSong = document.querySelector("audio"),
    artwork = document.querySelector(".artwork"),
    currentArtist = document.querySelector(".current-artist"),
    currentSongTitle = document.querySelector(".current-song"),
    favoriteStar = document.querySelector('.favorite'),
    addSongToPlaylist = document.querySelector('.add_new_song'),
    addNewPlaylist = document.querySelector('.add_new_playlist'),
    plusAddSong = document.querySelector('.add-song'),
    plusAddPlaylist = document.querySelector('.add-playlist'),
    cancelPlaylist = document.querySelector('.cancel-playlist'),
    cancelSong = document.querySelector('.cancel-song');

var songNumber = 0,
    listNumber = 0,
    songID = 0;


// Main Loop
for (var i = 0; i < playlists.length; i++) {
  playlistMaker(i)
}


// HTMLBuilder :: playlists
function playlistMaker(listIndex) {
  var newLiTag = document.createElement('li'),
      newH1Tag = document.createElement('h1');
  playlistList.appendChild(newLiTag);
  newLiTag.appendChild(newH1Tag).innerHTML = playlists[listIndex].name;

  if (listIndex % 2 == 1) {
    newLiTag.classList.add('odd');
  }

  newLiTag.addEventListener('click', function() {
    songNumber = 0;
    listNumber = listIndex;
    unselector(playlistList);
    var songs = songList.querySelectorAll('li');
    songs.forEach(function(song) {
      song.remove();
    });
    selected(playlistList, "playlists");
    songSelector(listIndex);
  });
};



// create actual tracklist
function songSelector(listIndex) {
  if (listIndex !== 1) {
    playlists[listIndex].songs.forEach(function(id, songIndex) {
      musicLibrary.forEach(function(song) {
        if (id === song.id) {
          listMaker(song, songIndex, listIndex);
        }
      });
    });
  } else { // set favorite tracklist
    playlists[listIndex].songs = [];
    var favSongsList = musicLibrary.filter(function(song) {
      return song.fav;
    });
    favSongsList.forEach(function(song, songIndex) {
      playlists[listIndex].songs.push(song.id);
    });
    favSongsList.forEach(function(song, songIndex) {
      listMaker(song, songIndex, listIndex);
    })
  }
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
    trackFinder();
    selected(songList, "songs");
  });
};



// rewind & fast forward events
var rewind = document.querySelector('.rewind'),
    fastForward = document.querySelector('.forward');

rewind.addEventListener('click', function() {
  if (songNumber > 0) {
    songNumber--;
    songID = playlists[listNumber].songs[songNumber];
    trackFinder();
    selected(songList, "songs");
  };
});

fastForward.addEventListener('click', function() {
  if (songNumber < playlists[listNumber].songs.length - 1) {
    songNumber++;
    songID = playlists[listNumber].songs[songNumber];
    trackFinder();
    selected(songList, "songs");
  };
});




// event listener to favorite star sign
favoriteStar.addEventListener('click', function() {
  musicLibrary.forEach(function(song, index) {
    if (songID === song.id) {
      song.fav = !song.fav;
    };
  });
  trackFinder();
});

// set favorite star on-off
function setFavoriteStar(song) {
  if (song.fav) {
    favoriteStar.setAttribute('src', 'imgs/star_full.png');
  } else {
    favoriteStar.setAttribute('src', 'imgs/star.png');
  }
};



// event listeners to ADD buttons
plusAddPlaylist.addEventListener('click', function() {
  addNewPlaylist.classList.remove('pop-off');
});
cancelPlaylist.addEventListener('click', function() {
  addNewPlaylist.classList.add('pop-off');
});

plusAddSong.addEventListener('click', function() {
  addSongToPlaylist.classList.remove('pop-off');
});
cancelSong.addEventListener('click', function() {
  addSongToPlaylist.classList.add('pop-off');
});





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
function trackFinder() {
  musicLibrary.forEach(function(song) {
    if (song.id === songID) {
      setCurrentSong(song);
      setActualSong(song);
      setFavoriteStar(song);
    }
  })
}


// set title and artist visible
function setCurrentSong(song) {
  currentArtist.textContent = song.artist;
  currentSongTitle.innerHTML = song.title;
};


// set actual song
function setActualSong(song) {
  actualSong.setAttribute('src', song.src);
  artwork.setAttribute('src', song.artwork);
}
