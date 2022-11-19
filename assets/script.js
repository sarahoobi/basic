// menu sticky ------------

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// ------menu navbar------
const menuLine = document.querySelector(".menuHam");
const menuHamCross = document.querySelector(".menuHamCross");
const navbarBurger = document.querySelector(".navbarBurger");

const openMenu = function () {
  menuHamCross.classList.remove("hidden");
  navbarBurger.classList.remove("hidden");
  menuLine.classList.add("hidden");
};
const closeMenu = function () {
  navbarBurger.classList.add("hidden");
  menuHamCross.classList.add("hidden");
  menuLine.classList.remove("hidden");
};
menuLine.addEventListener("click", openMenu);

menuHamCross.addEventListener("click", closeMenu);
