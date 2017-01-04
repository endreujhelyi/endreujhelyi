

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
  playlistMaker(i);
}



// HTMLBuilder
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

    if (playlists[listIndex].name == "All Tracks") {
      musicLibrary.forEach(function(song, index) {
        playlists[listIndex].songs.push(song.id);
        listMaker(index, listIndex);
      });
    } else if (playlists[listIndex].name == "Favorites") {
      musicLibrary.forEach(function(song, index) {
        if (song.fav) {
          playlists[listIndex].songs.push(song);
          listMaker(playlists[listIndex].songs.length - 1, listIndex);
        }
      });
    } else {
        playlists[listIndex].songs.forEach(function(id) {
          musicLibrary.forEach(function(song, index) {
            if (song.id == id) {
              listMaker(index, listIndex);
            }
          });
        });
      }
    songSelected();
  });
};



// HTMLBuilder
function listMaker(num, listIndex) {
  var newLiTag = document.createElement('li');
  var newH1Tag = document.createElement('h1');
  var newH2Tag = document.createElement('h2');

  songList.appendChild(newLiTag);
  newLiTag.appendChild(newH2Tag);

  playlists[listIndex].songs.forEach(function(id) {
    musicLibrary.forEach(function(song) {
      console.log(id);
      console.log(song);
      if (song.id = id) {
        newLiTag.appendChild(newH1Tag).textContent = song.title;
      }
    })
  })

  if (num % 2 == 1) {
    newLiTag.classList.add('odd');
  }

  newLiTag.addEventListener('click', function() {
    songID = playlists[listIndex].songs[num].id;
    songNumber = num;
    setCurrentSong(num, listIndex);
    setActualSong(num, listIndex);
    songSelected();
  });
};



// set favorite star on-off
function setFavoriteStar() {
  if (playlists[listNumber].songs[songNumber].fav) {
    favoriteStar.setAttribute('src', 'imgs/star-1.png');
  } else {
    favoriteStar.setAttribute('src', 'imgs/star.png');
  }
};

// event listener to favorite star sign
favoriteStar.addEventListener('click', function() {
  musicLibrary.forEach(function(song, index) {
    if (songID === song.id) {
      song.fav = !song.fav;
    };
  });
  setFavoriteStar();
});



// rewind & fast forward events
var rewind = document.querySelector('.rewind');
var fastForward = document.querySelector('.forward');

rewind.addEventListener('click', function() {
  if (songNumber > 0) {
    songNumber--;
    songId = musicLibrary[songNumber].id;
    setCurrentSong(songNumber, listNumber);
    setActualSong(songNumber, listNumber);
    songSelected();
  };
});

fastForward.addEventListener('click', function() {
  if (songNumber < playlists[listNumber].songs.length - 1) {
    songNumber++;
    songId = musicLibrary[songNumber].id;
    setCurrentSong(songNumber, listNumber);
    setActualSong(songNumber, listNumber);
    songSelected();
  };
});



// set selected class to the track
function songSelected() {
  unselector(songList);
  var tracks = songList.querySelectorAll('li');
  playlists[listNumber].songs.forEach(function(id, index) {
    musicLibrary.forEach(function(song) {
      if (song.id === id) {
        tracks.forEach(function(li, liIndex) {
          if (index === liIndex) {
            li.classList.add('selected');
          }
        })
      }
    })
  })
}


// remove selected class from the track
function unselector(list) {
  list.querySelectorAll('li').forEach(function(song) {
    song.classList.remove('selected');
  })
};

// set title and artist visible
function setCurrentSong(num, listIndex) {
  currentArtist.textContent = playlists[listNumber].songs[num].artist;
  currentSongTitle.innerHTML = playlists[listNumber].songs[num].title;
  setFavoriteStar();
};


// set actual song
function setActualSong(num, listIndex) {
  actualSong.setAttribute('src', playlists[listIndex].songs[num].src);
  artwork.setAttribute('src', playlists[listIndex].songs[num].artwork);
}
