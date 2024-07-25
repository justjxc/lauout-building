"use strict";

const hamburgerBtn = document.querySelector(".hamburger-btn"),
  hamburgerMenu = document.querySelector(".header__content");

const bars = hamburgerBtn.children;

function hamburgerBtnOpen() {
  bars[0].style.transform = "rotate(43deg)";
  bars[1].style.transform = "scale(0)";
  bars[2].style.transform = "rotate(-43deg)";
}

function hamburgerBtnClose() {
  bars[0].style.transform = "rotate(0deg)";
  bars[1].style.transform = "scale(1)";
  bars[2].style.transform = "rotate(0deg)";
}

function toggleHeaderMenu() {
  if (hamburgerMenu.classList.contains("header__content--show")) {
    hamburgerMenu.classList.remove("header__content--show");
    hamburgerBtnClose();
  } else {
    hamburgerMenu.classList.add("header__content--show");
    hamburgerBtnOpen();
  }
}

hamburgerBtn.addEventListener("click", () => {
  toggleHeaderMenu();
});
