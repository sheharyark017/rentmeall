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

var typed = new Typed(".text-animation", {
  strings: [
    "Spaces",
    "Vehicles",
    "Furniture",
    "Business",
    "Tools",
    "Equipments",
  ],
  typeSpeed: 150,
  backSpeed: 50,
  smartBackspace: true, // Default value
  loop: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
