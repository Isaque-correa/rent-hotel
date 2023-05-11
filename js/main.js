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
