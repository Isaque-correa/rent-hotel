function menuShow() {
  let menuMobile = document.querySelector(".header__nav");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
  } else {
    menuMobile.classList.add("open");
  }
  let menuActive = document.querySelector(".header__burger");
  if (menuActive.classList.contains("active")) {
    menuActive.classList.remove("active");
  } else {
    menuActive.classList.add("active");
  }
}

function dropdownShow() {
  let dropdown = document.querySelector(".dropdown__input");
  if (dropdown.classList.contains("hide")) {
    dropdown.classList.remove("hide");
  } else {
    dropdown.classList.add("hide");
  }
}

function dropdownShow2() {
  let dropdown = document.querySelector(".dropdown__date");
  if (dropdown.classList.contains("hide")) {
    dropdown.classList.remove("hide");
  } else {
    dropdown.classList.add("hide");
  }
}

function dropdownShow3() {
  let dropdown = document.querySelector(".dropdown__date3");
  if (dropdown.classList.contains("hide")) {
    dropdown.classList.remove("hide");
  } else {
    dropdown.classList.add("hide");
  }
}
function dropdownShow4() {
  let dropdown = document.querySelector(".dropdown__select");
  if (dropdown.classList.contains("hide")) {
    dropdown.classList.remove("hide");
  } else {
    dropdown.classList.add("hide");
  }
}
function dropdownShow5() {
  let dropdown = document.querySelector(".dropdown__searchInput");
  if (dropdown.classList.contains("searchShow")) {
    dropdown.classList.remove("searchShow");
  } else {
    dropdown.classList.add("searchShow");
  }
}
function footerShow() {
  let dropdown = document.querySelector(".footer__homeLink");
  if (dropdown.classList.contains("homeShow")) {
    dropdown.classList.remove("homeShow");
  } else {
    dropdown.classList.add("homeShow");
  }
}
function footerShow1() {
  let dropdown = document.querySelector(".footer__helpLink");
  if (dropdown.classList.contains("homeShow")) {
    dropdown.classList.remove("homeShow");
  } else {
    dropdown.classList.add("homeShow");
  }
}
function footerShow2() {
  let dropdown = document.querySelector(".footer__getAppLink");
  if (dropdown.classList.contains("homeShow")) {
    dropdown.classList.remove("homeShow");
  } else {
    dropdown.classList.add("homeShow");
  }
}

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
