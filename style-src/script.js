const hamburgerButton = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("diklik");
  navbar.classList.toggle("active")
})