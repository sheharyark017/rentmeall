const body = document.querySelector("body");
const dropdownButton = document.querySelector(".dropdown-image");
const dropdown = document.querySelector(".dropdown-links");
const signoutBtn = document.querySelector(".signout-btn");

dropdownButton.addEventListener("click", function (e) {
  dropdown.classList.toggle("show");
});

body.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown-image")) {
    dropdown.classList.remove("show");
  }
});
