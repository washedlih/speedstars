function showHeader() {
  const headerChildren = document.querySelector('header').querySelectorAll('*');
  headerChildren.forEach((child) => child.classList.add('hidden'));
}

const img = document.querySelector('nav img');
if (img.complete) {
  showHeader();
} else {
  img.addEventListener('load', () => {
    showHeader();
  });
}

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
