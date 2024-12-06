const navbarMneu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMneu.querySelector(".close-btn");

hamburgerBtn.addEventListener("click", () => {
    navbarMneu.classList.toggle("show-menu");

    hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());
});