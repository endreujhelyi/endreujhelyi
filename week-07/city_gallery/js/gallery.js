var gallery = [
  {city: "Auckland,<br />New Zealand", link: "url('gallery/auckland.jpg')"},
  {city: "Beirut,<br />Libanon", link: "url('gallery/beirut.jpg')"},
  {city: "Bern,<br />Switzerland", link: "url('gallery/bern.jpg')"},
  {city: "Manila,<br />Philippines", link: "url('gallery/manila.jpg')"},
  {city: "New York,<br />USA", link: "url('gallery/new_york.jpg')"},
  {city: "Sao Paulo,<br />Brazil", link: "url('gallery/sao_paulo.jpg')"},
  {city: "Shanghai,<br />China", link: "url('gallery/shanghai.jpg')"},
  {city: "Singapore,<br />Singapore", link: "url('gallery/singapore.jpg')"},
  {city: "Tokyo,<br />Japan", link: "url('gallery/tokyo.jpg')"}
];

var thumb = document.querySelectorAll('.thumb');
var mainGallery = document.querySelector('.main-gallery');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');

var backgroundImageIndex = 0;

mainGallery.setAttribute('style', 'background-image: ' + gallery[0]['link'] + ';');

for (var i = 0; i < gallery.length; i++) {
  var background = 'background-image: ' + gallery[i]['link'] + ';';
  thumb[i].setAttribute('style', background);
  imageZoomer(i, background);
}

function imageZoomer(num, backgroundLink) {
  thumb[num].addEventListener('click', function() {
    mainGallery.setAttribute('style', backgroundLink);
    backgroundImageIndex = num;
    thumb.map(function(thumbnail) {
      thumbnail.classList.remove('active');
    });
    console.log(thumb[num]);
    thumb[num].classList.add('active');
    console.log(thumb[num]);
  });
}

leftArrow.addEventListener('click', function() {
  if (backgroundImageIndex > 0) {
    var background = 'background-image: ' + gallery[backgroundImageIndex - 1]['link'] + ';';
    mainGallery.setAttribute('style', background);
    backgroundImageIndex--;
  }
});

rightArrow.addEventListener('click', function() {
  if (backgroundImageIndex < gallery.length) {
    var background = 'background-image: ' + gallery[backgroundImageIndex + 1]['link'] + ';';
    mainGallery.setAttribute('style', background);
    backgroundImageIndex++;
  }
});
