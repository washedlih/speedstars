const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});

const form = document.querySelector("form");

const select = document.querySelector("select");
const toast = document.querySelector(".toast");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit", (e) => {
  const selectValue = document.querySelector("select").value;
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });
  if (selectValue === "null") {
    select.classList.add("error");
  } else {
    select.classList.remove("error");
  }
  if (
    selectValue !== "null" &&
    inputs[0].value !== "" &&
    inputs[1].value !== "" &&
    inputs[2].value !== "" &&
    inputs[3].value !== "" &&
    inputs[4].value !== ""
  ) {
    toast.classList.add("open");
    setTimeout(() => {
      toast.classList.remove("open");
    }, 2000);
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });
});

select.addEventListener("change", () => {
  if (select.value === "null") {
    select.classList.add("error");
  } else {
    select.classList.remove("error");
  }
});
