"use strict";

const navMenu = document.querySelector(".nav-menu");
const openBtn = document.querySelector(".about-open-btn");
const closedBtn = document.querySelector(".about-close-btn");

openBtn.addEventListener("click", () => {
  navMenu.style.display = "block";
  closedBtn.classList.add("about-open-btn");
  openBtn.classList.remove("about-open-btn");
});

closedBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
  openBtn.classList.add("about-open-btn");
  closedBtn.classList.remove("about-open-btn");
});
