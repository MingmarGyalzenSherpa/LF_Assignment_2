const themeToggler = document.querySelector(".theme-toggler");
const themeTogglerShade = document.querySelector(".theme-toggler__shade");
const htmlEl = document.querySelector("html");

const hamburgerWrapper = document.querySelector(
  ".header__hamburger-icon-wrapper"
);
const hamburgerWrapperIcons = hamburgerWrapper.querySelectorAll("img");
console.log(hamburgerWrapperIcons);

// cart icon wrapper
const cartIconWrapper = document.querySelector(
  ".header__icons-container__cart-icon-wrapper"
);

// hero section wrapper
const arrowDownWrapper = document.querySelector(
  ".hero-section__arrow-down-container__wrapper"
);

const arrowDownIcons = arrowDownWrapper.querySelectorAll("img");
const cartIcons = cartIconWrapper.querySelectorAll("img");
console.log(cartIcons);

const searchIconWrapper = document.querySelector(
  ".header__icons-container__search-icon-wrapper"
);
const searchIcons = searchIconWrapper.querySelectorAll("img");
console.log(searchIcons);

const htmlStyle = getComputedStyle(htmlEl);
const heroSectionEl = document.querySelector(".hero-section");
const heroSectionStyle = getComputedStyle(heroSectionEl);
//at first it is dark
//get values
const theme = {
  primaryColor: htmlStyle.getPropertyValue("--theme-primary"),
  secondaryColor: htmlStyle.getPropertyValue("--theme-secondary"),
  primaryHeroBg: heroSectionStyle.background,
  secondaryHeroBg: "white",
};
console.log(theme);
// event listeners
let isDarkMode = true;

themeToggler.addEventListener("click", switchTheme);

// count down
let hr = 5;
let min = 16;
let sec = 46;
let totalTime = hr * 60 * 60 + min * 60 + sec;

let hrEls = document.querySelectorAll(".time-left__value__hour");
let minEls = document.querySelectorAll(".time-left__value__min");
let secEls = document.querySelectorAll(".time-left__value__sec");

hrEls.forEach((hrEl) => (hrEl.textContent = hr > 10 ? hr : "0" + hr));
minEls.forEach((minEl) => (minEl.textContent = min));
secEls.forEach((secEl) => (secEl.textContent = sec));

function countDown() {
  console.log(totalTime);
  function converToHrMinSec(time) {
    hr = Math.floor(totalTime / (60 * 60));
    time = totalTime % (60 * 60);
    console.log(time);
    min = Math.floor(time / 60);
    sec = time % 60;
    console.log(time);
  }
  totalTime--;
  converToHrMinSec(totalTime);
  hrEls.forEach((hrEl) => (hrEl.textContent = hr > 10 ? hr : "0" + hr));
  minEls.forEach((minEl) => (minEl.textContent = min));
  secEls.forEach((secEl) => (secEl.textContent = sec));
}

setInterval(countDown, 1000);

function switchTheme(e) {
  htmlEl.style.setProperty("--theme-primary", theme.secondaryColor);
  htmlEl.style.setProperty("--theme-secondary", theme.primaryColor);
  heroSectionEl.style.setProperty("background", theme.secondaryHeroBg);

  console.log(themeTogglerShade.offsetWidth);
  //toggle button
  console.log(isDarkMode);
  themeTogglerShade.style.setProperty(
    "left",
    isDarkMode ? 4 + "px" : 27 + "px"
  );
  console.log(themeToggler);
  //swap
  let temp;
  temp = theme.primaryColor;
  theme.primaryColor = theme.secondaryColor;
  theme.secondaryColor = temp;
  temp = theme.primaryHeroBg;
  theme.primaryHeroBg = theme.secondaryHeroBg;
  theme.secondaryHeroBg = temp;
  console.log(theme);

  isDarkMode = !isDarkMode;
  searchIcons.forEach((searchIcon) => searchIcon.classList.toggle("hide"));
  cartIcons.forEach((cartIcon) => cartIcon.classList.toggle("hide"));
  arrowDownIcons.forEach((arrowDownIcon) =>
    arrowDownIcon.classList.toggle("hide")
  );
  hamburgerWrapperIcons.forEach((hamburgerIcon) =>
    hamburgerIcon.classList.toggle("hide")
  );
}
