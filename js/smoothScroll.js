"use strict";

const headerList = document.querySelector(".header__list");

headerList.addEventListener("click", (e) => {
  let target = e.target;
  e.preventDefault();

  let ID = target.getAttribute("href").slice(1);

  document.getElementById(ID).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  closeHeaderMenu();
});
