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
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  const selectValue = document.querySelector("select").value;
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
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
  const allInputsValue = [...inputs].every((input) => input.value);
  if (selectValue && allInputsValue) {
    toast.classList.add("open");
    setTimeout(() => {
      toast.classList.remove("open");
    }, 2000);
  }
  inputs.forEach((input) => {
    input.value = "";
  });
  select.value = "null";
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
