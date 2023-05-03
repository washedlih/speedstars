const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});
