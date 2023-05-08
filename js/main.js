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
