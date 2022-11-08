const menuHam = document.querySelector(".menuHam");
const menuHamCross = document.querySelector(".menuHamCross");
const menuChange = function () {
  menuHamCross.classList.remove("hidden");
  // menuHam.classList.add("hidden");
};
menuHam.addEventListener("click", menuChange);

// window.onscroll = function () {
//   myFunction();
// };

// var headerNav = document.getElementById("headerNav");
// var sticky = headerNav.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     headerNav.classList.add("sticky");
//   } else {
//     headerNav.classList.remove("sticky");
//   }
// }
