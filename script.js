const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    Menu.classList.toggle("active");
}
