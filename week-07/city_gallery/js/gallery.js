
var backgroundImageIndex = -1;
var body = document.querySelector('body');
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
var clickArea = document.querySelector('.click-area');
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
  // Left Arrow
  if (backgroundImageIndex <= 0) {
    leftArrow.classList.remove('enable');
  } else {
    leftArrow.classList.add('enable');
  }
  // Right Arrow
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
    infoBoxParagraph.innerHTML = gallery[num]['info'];
  }, 550);
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



// Full Screen HTML creator
clickArea.addEventListener('click', function() {
  if (backgroundImageIndex >= 0) {
    var newDivTag = document.createElement('div');
    body.appendChild(newDivTag).classList.add('full-screen');
    var newImgTag = document.createElement('img');
    newDivTag.appendChild(newImgTag).classList.add('full-screen-img');
    newImgTag.setAttribute('src', gallery[backgroundImageIndex]['link']);
    var newSpanTag = document.createElement('span');
    newDivTag.appendChild(newSpanTag).classList.add('close');
    newSpanTag.innerHTML = 'close';
    arrowMaker(newDivTag);
    arrowFullEnableChecker();
    newSpanTag.addEventListener('click', function() {
      body.removeChild(newDivTag);
    });
  }
});

function arrowMaker(div) {
  var newImgTag = document.createElement('img');
  var newImgTag2 = document.createElement('img');
  div.appendChild(newImgTag2);
  div.appendChild(newImgTag);
  newImgTag.classList.add('full-arrow', 'full-left', 'full-enable');
  newImgTag.setAttribute('src', 'imgs/left-white.png');
  newImgTag2.classList.add('full-arrow', 'full-right', 'full-enable');
  newImgTag2.setAttribute('src', 'imgs/right-white.png');
  arrowFullEventMaker()
};


// Arrow Event Setter in Full Mode
function arrowFullEventMaker() {
  var leftFullArrow = document.querySelector('.full-left');
  var rightFullArrow = document.querySelector('.full-right');
  leftArrowFullImage(leftFullArrow);
  rightArrowFullImage(rightFullArrow);
};

function leftArrowFullImage(arrow) {
  arrow.addEventListener('click', function() {
    if (backgroundImageIndex > 0) {
      backgroundImageIndex--;
      fullImgEventRecaller(backgroundImageIndex);
    }
  });
};

function rightArrowFullImage(arrow) {
  arrow.addEventListener('click', function() {
    if (backgroundImageIndex < gallery.length) {
      backgroundImageIndex++;
      fullImgEventRecaller(backgroundImageIndex);
    }
  });
};

function fullImgEventRecaller(num) {
  fullScreenImgChanger(num);
  infoBoxRender(num);
  arrowFullEnableChecker(num);
}

function fullScreenImgChanger(num) {
  var fullImg = document.querySelector('.full-screen-img');
  var background = 'url("' + gallery[num]['link'] + '")';
  fullImg.setAttribute('src', gallery[num]['link']);
  arrowFullEnableChecker();
  mainImageShifter(background);
};

function arrowFullEnableChecker() {
  var left = document.querySelector('.full-left');
  var right = document.querySelector('.full-right');
  // Left Arrow
  if (backgroundImageIndex == 0) {
    left.classList.remove('full-enable');
  } else {
    left.classList.add('full-enable');
  }
  // Right Arrow
  if (backgroundImageIndex == gallery.length - 1) {
    right.classList.remove('full-enable');
  } else {
    right.classList.add('full-enable');
  }
};



// Updating thumbs & infobox
function eventRecaller(thumbIndex){
  thumbRefresher(thumbIndex);
  thumbBoxRefresher(thumbIndex);
  infoBoxVisibler(thumbIndex);
  infoBoxRender(thumbIndex);
  arrowEnableChecker();
}


// Thumbnails Rollin' Effect

thumbnailsContainer.addEventListener('mousemove', function(event) {
  var height = window.innerHeight;
  var y = event.pageY;
  var percentage = y / (height / 100);
  var hidden = (gallery.length * 60 - height) / 2;
  if (y < height / 2) {
    thumbnailsContainer.style.transform = 'translateY(' + ((hidden / 100) * (100 - percentage * 2) + 2) + 'px)';
  } else {
    thumbnailsContainer.style.transform = 'translateY(-' + ((hidden / 100) * (percentage - 50) * 2 + 2) + 'px)';
  }
});

thumbnailsContainer.addEventListener('mouseout', function() {
  thumbnailsContainer.style.transform = 'translateX(-50px)';
  console.log("hello");
});
