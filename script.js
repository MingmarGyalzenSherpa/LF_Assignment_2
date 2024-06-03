const themeToggler = document.querySelector(".theme-toggler");
const themeTogglerShade = document.querySelector(".theme-toggler__shade");
const htmlEl = document.querySelector("html");
const cartIconWrapper = document.querySelector(
  ".header__icons-container__cart-icon-wrapper"
);
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
}
