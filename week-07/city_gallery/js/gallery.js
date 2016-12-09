
var thumbParent  = document.querySelectorAll('.thumb');
var thumb = document.querySelectorAll('.thumb-img');
var mainGallery = document.querySelector('.main-gallery');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var infoBox = document.querySelector('.info-box');

var infoBoxHeader = infoBox.querySelector('h1');
var infoBoxParagraph = infoBox.querySelector('p');


var backgroundImageIndex = 0;

// Set starting images
mainGallery.setAttribute('style', 'background-image: ' + gallery[0]['link'] + ';');
thumbParent[0].classList.add('clicked');

// Add thumbnails and their click events
for (var i = 0; i < gallery.length; i++) {
  var background = 'background-image: ' + gallery[i]['link'] + ';';
  thumb[i].setAttribute('style', background);
  imageZoomer(i, background);
}


function imageZoomer(num, backgroundLink) {
  thumb[num].addEventListener('click', function() {
    setTimeout(function(){ mainGallery.setAttribute('style', backgroundLink);
    backgroundImageIndex = num;
    mainGallery.style.opacity = 1;
    }, 300);
    thumb.forEach(function(thumbnail) {
      thumbnail.classList.remove('active');
    });
    mainGallery.style.opacity = .5;
    thumb[num].classList.add('active');
    thumbParent.forEach(function(thumbnail) {
      thumbnail.classList.remove('clicked');
    });
    thumbParent[num].classList.add('clicked');

    infoBoxRender(num);
    infoBoxVisibler(num);
  });
};

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

// adding event to left arrow
leftArrow.addEventListener('click', function() {
  if (backgroundImageIndex > 0) {
    var background = 'background-image: ' + gallery[backgroundImageIndex - 1]['link'] + ';';
    mainGallery.setAttribute('style', background);
    backgroundImageIndex--;
  }
});

// adding event to right arrow
rightArrow.addEventListener('click', function() {
  if (backgroundImageIndex < gallery.length) {
    var background = 'background-image: ' + gallery[backgroundImageIndex + 1]['link'] + ';';
    mainGallery.setAttribute('style', background);
    backgroundImageIndex++;
  }
});
