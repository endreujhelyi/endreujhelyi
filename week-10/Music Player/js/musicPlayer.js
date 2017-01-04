

var songList = document.querySelector("ol");
var playlistList = document.querySelector("ul");
var actualSong = document.querySelector("audio");
var artwork = document.querySelector(".artwork");
var currentArtist = document.querySelector(".current-artist");
var currentSongTitle = document.querySelector(".current-song");
var favoriteStar = document.querySelector('.favorite');

var songNumber = 0;
var listNumber = 0;
var songID = 0;


// Main Loop
for (var i = 0; i < playlists.length; i++) {
  playlistMaker(i)
}


// HTMLBuilder :: playlists
function playlistMaker(listIndex) {
  var newLiTag = document.createElement('li');
  var newH1Tag = document.createElement('h1');
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
    var favSongsList = musicLibrary.filter(function(song) {
      return song.fav;
    });
    var favSongsId = [];
    favSongsList.forEach(function(song) {
      favSongsId.push(song.id);
    });
    favSongsList.forEach(function(song, songIndex) {
      playlists[listIndex].songs =
      listMaker(song, songIndex, listIndex);
    });
  }
};




// HTMLBuilder :: tracklist
function listMaker(song, songIndex, listIndex) {
  var newLiTag = document.createElement('li');
  var newH1Tag = document.createElement('h1');
  var newH2Tag = document.createElement('h2');
  songList.appendChild(newLiTag);
  newLiTag.appendChild(newH1Tag).textContent = song.title;
  newLiTag.appendChild(newH2Tag);

  if (songIndex % 2 == 1) {
    newLiTag.classList.add('odd');
  }

  newLiTag.addEventListener('click', function() {
    songID = song.id;
    songNumber = songIndex;
    console.log(songNumber);
    trackFinder();
    songSelected();
  });
};



// rewind & fast forward events
var rewind = document.querySelector('.rewind');
var fastForward = document.querySelector('.forward');

rewind.addEventListener('click', function() {
  if (songNumber > 0) {
    songNumber--;
    songID = playlists[listNumber].songs[songNumber];
    trackFinder();
    songSelected();
  };
});

fastForward.addEventListener('click', function() {
  if (songNumber < playlists[listNumber].songs.length - 1) {
    songNumber++;
    songID = playlists[listNumber].songs[songNumber];
    trackFinder();
    songSelected();
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




// set selected class to the track
function songSelected() {
  unselector(songList);
  var songs = songList.querySelectorAll('li');
  songs.forEach(function(song, index) {
    if (index == songNumber) {
      song.classList.add('selected');
    }
  })
}

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
