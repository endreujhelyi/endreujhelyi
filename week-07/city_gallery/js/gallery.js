
var thumbParent  = document.querySelectorAll('.thumb');
var thumb = document.querySelectorAll('.thumb-img');

var mainGallery = document.querySelector('.main-gallery');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var infoBox = document.querySelector('.info-box');
var infoBoxHeader = infoBox.querySelector('h1');
var infoBoxParagraph = infoBox.querySelector('p');

var title = document.querySelector('.main-title');


// Set starting images
mainGallery.style.backgroundImage = 'url("gallery/main_city.jpg")';
setTimeout(function(){ title.classList.add('start-pos');}, 1000);

var backgroundImageIndex = 0;


// Main Loop
for (var i = 0; i < gallery.length; i++) {
  var background = 'url("' + gallery[i]['link'] + '")';
  thumb[i].style.backgroundImage = background;
  imageZoomer(i, background);
}


// Thumbnail Event Setter
function imageZoomer(num, background) {
  thumb[num].addEventListener('click', function() {
    mainImageShifter(background);
    backgroundImageIndex = num;
    eventRecaller(num);
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
  infoBoxHeader.innerHTML = gallery[num]['city'];
  infoBoxParagraph.innerHTML = gallery[num]['info'];
};

function infoBoxVisibler(num) {
  setTimeout(function(){
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


// Adding Event To Right Arrow
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
  infoBoxRender(thumbIndex);
  infoBoxVisibler(thumbIndex);
}
