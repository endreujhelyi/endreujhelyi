

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
      playlists[listIndex].songs.forEach(function(song, index) {
        listMaker(index, listIndex);
      });
    } else {
        playlists[listIndex].songs.forEach(function(id) {
          musicLibrary.forEach(function(song, index) {
            if (songs.id == id) {
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
  newLiTag.appendChild(newH1Tag).textContent = musicLibrary[num].title;
  newLiTag.appendChild(newH2Tag);

  if (num % 2 == 1) {
    newLiTag.classList.add('odd');
  }

  newLiTag.addEventListener('click', function() {
    songNumber = num;
    setCurrentSong(num, listIndex);
    setActualSong(num, listIndex);
    songSelected();
  });
};



// set favorite star on-off
function setFavoriteStar() {
  if (playlists[listNumber].songs[songNumber].fav) {
    favoriteStar.setAttribute('src', 'imgs/star-1');
  }
};

// event listener to favorite star sign
favoriteStar.addEventListener('click', function() {
  musicLibrary.forEach(function(song, index) {
    playlistList
  })
  playlists[listNumber]
  playlists[1].songs.push(playlists[listNumber].songs[songNumber]);
});



// rewind & fast forward events
var rewind = document.querySelector('.rewind');
var fastForward = document.querySelector('.forward');

rewind.addEventListener('click', function() {
  if (songNumber > 0) {
    songNumber--;
    setCurrentSong(songNumber, listNumber);
    setActualSong(songNumber, listNumber);
    songSelected();
  };
});

fastForward.addEventListener('click', function() {
  if (songNumber < playlists[listNumber].songs.length - 1) {
    songNumber++;
    setCurrentSong(songNumber, listNumber);
    setActualSong(songNumber, listNumber);
    songSelected();
  };
});



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

// set title and artist visible
function setCurrentSong(num, listIndex) {
  currentArtist.textContent = playlists[listIndex].songs[num].artist;
  currentSongTitle.innerHTML = playlists[listIndex].songs[num].title;
  setFavoriteStar();
};


// set actual song
function setActualSong(num, listIndex) {
  actualSong.setAttribute('src', playlists[listIndex].songs[num].src);
  artwork.setAttribute('src', playlists[listIndex].songs[num].artwork);
}
