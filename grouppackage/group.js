const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const children = entry.target.querySelectorAll("*");
      children.forEach((child) => child.classList.add("hidden2"));
    }
  });
});

const element = document.getElementById("cta-section");
observer.observe(element);
