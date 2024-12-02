const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hidemenuBtn = navbarMenu.querySelector(".close-btn");


hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

hidemenuBtn.addEventListener("click", () => hamburgerBtn.click());