
function toggleDOM(listner, target) {
  const clickElement = document.querySelector(listner)
  const toggleElement = document.querySelector(target);
  clickElement?.addEventListener('click', function(){
    toggleElement.classList.toggle('open');
  });
}

toggleDOM('.header__burger', '.active');
toggleDOM('.header__burger', '.header__nav');
toggleDOM('.footer__home','.footer__homeLink');
toggleDOM('.footer__help','.footer__helpLink');
toggleDOM('.footer__getApp','.footer__getAppLink');
toggleDOM('.frequentlyAsked__question', '.frequentlyAsked__response');
toggleDOM('.frequentlyAsked__question-1', '.frequentlyAsked__response-1');
toggleDOM('.frequentlyAsked__question-2', '.frequentlyAsked__response-2');
toggleDOM('.frequentlyAsked__question', '.rightTitle');
toggleDOM('.frequentlyAsked__question-1', '.rightTitle-1');
toggleDOM('.frequentlyAsked__question-2', '.rightTitle-2');



//----------------------------------------------------------------------

//****************************SPLIDE CARROUSEL************************//
document.addEventListener('DOMContentLoaded',function(){
   new Splide("#slider1", {
    arrows : false,
    perPage: 3,
    gap: '24px',
    breakpoints: { 
      900: {            
        perPage: 2,
      },  
      700: {            
        perPage: 1,
      },
    }
  }).mount();
});
//-------------------------------------------------------------------//
document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#main-slider', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  var thumbnails = new Splide( '#thumbnail-slider', {
    fixedWidth : 100,
    fixedHeight: 60,
		gap        : 10,
		rewind     : true,
    arrows    : false,
		pagination : false,
    cover      : true,
    isNavigation: true,
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );

//------------------------------------------------------------------------
//****************************LEAFLETJS MAP API************************//
var map;

function success(pos) {
  //console.log(pos.coords.latitude, pos.coords.longitude);
  if (map === undefined) {
    map = L.map("map").setView([pos.coords.latitude, pos.coords.longitude], 11);
  } else {
    map.remove();
    map = L.map("map").setView([pos.coords.latitude, pos.coords.longitude], 11);
  }
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
  var marker2 = L.marker([-23.6, -46.5]).addTo(map);
  var marker3 = L.marker([-23.5, -46.5]).addTo(map);
}
function error(err) {
  console.log(err);
}
var watchID = navigator.geolocation.watchPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 5000,
});
