// let navBar = document.getElementById("navBar");
// let manu = document.getElementById("manu");

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
