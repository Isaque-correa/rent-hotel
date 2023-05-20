const splide = new Splide(".splide", {
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
});

splide.mount();

function toggleDOM(listner, target) {
  const clickElement = document.querySelector(listner)
  const toggleElement = document.querySelector(target);
  clickElement.addEventListener('click', function(){
    toggleElement.classList.toggle('open');
  });
}

// function menuShow() {
//   let menuMobile = document.querySelector(".header__nav");
//   if (menuMobile.classList.contains("open")) {
//     menuMobile.classList.remove("open");
//   } else {
//     menuMobile.classList.add("open");
//   }
//   let menuActive = document.querySelector(".header__burger");
//   if (menuActive.classList.contains("active")) {
//     menuActive.classList.remove("active");
//   } else {
//     menuActive.classList.add("active");
//   }
// }

toggleDOM('.header__burger', '.active');
toggleDOM('.header__burger', '.header__nav');
toggleDOM('.footer__home','.footer__homeLink');
toggleDOM('.footer__help','.footer__helpLink');
toggleDOM('.footer__getApp','.footer__getAppLink');


/// Map
var map;

function success(pos) {
  console.log(pos.coords.latitude, pos.coords.longitude);
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
