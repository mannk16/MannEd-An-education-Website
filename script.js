"use strict";

const faqs = document.querySelectorAll(".faq");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");
const nav_menu = document.querySelector("ul");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");

    const icon = faq.getElementsByTagName("ion-icon");

    const icons = icon.item("name");
    if (icons.name === "add-outline") {
      icons.setAttribute("name", "remove-outline");
    } else {
      icons.setAttribute("name", "add-outline");
    }
  });
});

let currSlide = 0;
const maxSlides = slides.length;
console.log(maxSlides);

btnRight.addEventListener("click", function () {
  if (currSlide === maxSlides + 2) {
    currSlide = 0;
  } else {
    currSlide += 2;
  }
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currSlide)}%`)
  );
});

btnLeft.addEventListener("click", function () {
  if (currSlide === 0) {
    currSlide = maxSlides + 2;
  } else {
    currSlide -= 2;
  }
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currSlide)}%`)
  );
});

menuBtn.addEventListener("click", () => {
  nav_menu.style.display = "block";
  closeBtn.classList.add("open-menu-btn");
  menuBtn.classList.remove("open-menu-btn");
});

closeBtn.addEventListener("click", () => {
  nav_menu.style.display = "none";
  menuBtn.classList.add("open-menu-btn");
  closeBtn.classList.remove("open-menu-btn");
});
