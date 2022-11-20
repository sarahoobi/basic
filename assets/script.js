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

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
