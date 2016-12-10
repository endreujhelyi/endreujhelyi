
var backgroundImageIndex = -1;
var thumbnailsContainer = document.querySelector('.thumbnails');
// Main Loop
for (var i = 0; i < gallery.length; i++) {
  HTMLBuilder(i);
}


// Selectors
var title = document.querySelector('.main-title');

var thumbParent = document.querySelectorAll('.thumb');
var thumb = document.querySelectorAll('.thumb-img');

var mainGallery = document.querySelector('.main-gallery');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var infoBox = document.querySelector('.info-box');
var infoBoxHeader = infoBox.querySelector('h1');
var infoBoxParagraph = infoBox.querySelector('p');


// Set starting images
mainGallery.style.backgroundImage = 'url("gallery/main_city.jpg")';
setTimeout(function(){ title.classList.add('main-title-fixed');}, 1000);

for (var i = 0; i < gallery.length; i++) {
  var background = 'url("' + gallery[i]['link'] + '")';
  thumb[i].style.backgroundImage = background;
  imageZoomer(i, background);
}



function HTMLBuilder(num) {
  var newDivTag = document.createElement('div');
  var newH1Tag = document.createElement('h1');
  var newH2Tag = document.createElement('h2');
  thumbnailsContainer.appendChild(newDivTag).classList.add('thumb');
  var newDivTag2 = document.createElement('div');
  newDivTag.appendChild(newDivTag2).classList.add('thumb-img');
  newDivTag.appendChild(newH1Tag).textContent = gallery[num]['city'];
  newDivTag.appendChild(newH2Tag).textContent = gallery[num]['country'];
}

arrowEnableChecker()
function arrowEnableChecker() {
  if (backgroundImageIndex <= 0) {
    leftArrow.classList.remove('enable');
  } else {
    leftArrow.classList.add('enable');
  }

  if (backgroundImageIndex == gallery.length - 1) {
    rightArrow.classList.remove('enable');
  } else {
    rightArrow.classList.add('enable');
  }
}



// Magnet PNG creator
var newImg = document.createElement('img');
thumbnailsContainer.appendChild(newImg).id = 'magnet';
newImg.setAttribute('src', 'imgs/magnet.png');


// Thumbnail Event Setter
function imageZoomer(num, background) {
  thumb[num].addEventListener('click', function() {
    if (backgroundImageIndex != num) {
      mainImageShifter(background);
      backgroundImageIndex = num;
      eventRecaller(num);
    }
  });
};


// Thumbnail Events Executing
function thumbRefresher(num) {
  thumb.forEach(function(thumbnail) {
    thumbnail.classList.remove('active');
  });
  thumb[num].classList.add('active');
}

function thumbBoxRefresher(num) {
  thumbParent.forEach(function(thumbnail) {
    thumbnail.classList.remove('clicked');
  });
  thumbParent[num].classList.add('clicked');
}


// Gallery Info Box Events Executing
function infoBoxRender(num) {
  setTimeout(function() {
    infoBoxHeader.innerHTML = gallery[num]['city'] + ', ' + gallery[num]['country'];
  }, 550);
  infoBoxParagraph.innerHTML = gallery[num]['info'];
};

function infoBoxVisibler(num) {
  setTimeout(function() {
  infoBox.classList.add('hidden-box');
  }, 400);
  infoBox.classList.remove('hidden-box');
};


// Adding Event To The Left Arrow
leftArrow.addEventListener('click', function() {
  if (backgroundImageIndex > 0) {
    var background = 'url("' + gallery[backgroundImageIndex - 1]['link'] + '")';
    backgroundImageIndex--;
    mainImageShifter(background);
    eventRecaller(backgroundImageIndex);
  }
});


// Adding Event To The Right Arrow
rightArrow.addEventListener('click', function() {
  if (backgroundImageIndex < gallery.length) {
    var background = 'url("' + gallery[backgroundImageIndex + 1]['link'] + '")';
    backgroundImageIndex++;
    mainImageShifter(background);
    eventRecaller(backgroundImageIndex);
  }
});


// Main Gallery Image Shifter
function mainImageShifter(background) {
  setTimeout(function() { mainGallery.style.backgroundImage = background;
  mainGallery.style.opacity = 1;
  }, 300);
  mainGallery.style.opacity = .5;
};


// Updating thumbs & infobox
function eventRecaller(thumbIndex){
  thumbRefresher(thumbIndex);
  thumbBoxRefresher(thumbIndex);
  infoBoxVisibler(thumbIndex);
  infoBoxRender(thumbIndex);
  arrowEnableChecker();
}
