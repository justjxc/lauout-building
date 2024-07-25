"use strict";

const searchForm = document.querySelector(".search-wrap__form"),
  searchSelect = document.querySelectorAll(".search-wrap__select"),
  searchOptions = document.querySelectorAll(".search-wrap__options"),
  searchBtns = document.querySelectorAll(".search-wrap__btn"),
  searchAllOptions = document.querySelectorAll(".search-wrap__option");

function closeOptions() {
  searchOptions.forEach((option) => {
    option.classList.remove("search-wrap__options--show");
  });
}

function openOptions(btn) {
  if (btn.nextElementSibling.classList.contains("search-wrap__options--show")) {
    closeOptions();
  } else {
    closeOptions();
    btn.nextElementSibling.classList.add("search-wrap__options--show");
  }
}

function closeAllOptions(target) {
  if (
    !target.classList.contains("search-wrap__btn") &&
    !target.classList.contains("search-wrap__option") &&
    !target.classList.contains("search-wrap__placeholder") &&
    !target.classList.contains("search-wrap__name") &&
    !target.classList.contains("search-wrap__chevron") &&
    !target.classList.contains("search-wrap__label")
  ) {
    closeOptions();
  }
}

function changeSelected(target) {
  const options = target.parentElement.querySelectorAll(".search-wrap__option");

  options.forEach((option) => {
    option.classList.remove("search-wrap__option--selected");
  });

  target.parentElement.previousElementSibling.children[1].innerHTML = target.textContent;
  target.classList.add("search-wrap__option--selected");

  closeOptions();
}

function handleSearchData() {
  let data = {},
    url = "https://jsonplaceholder.typicode.com/posts";

  searchAllOptions.forEach((option) => {
    if (option.classList.contains("search-wrap__option--selected")) {
      let name = option.parentElement.previousElementSibling.children[0].textContent.trim();
      data[name] = option.dataset.value;
    }
  });

  console.log(data);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((json) => {
      alert(`Data sent`);
      // console.log(json);
    })
    .catch((error) => {
      alert(`An error has occurred, status: ${error.message}`);
    });
}

document.addEventListener("click", (e) => {
  closeAllOptions(e.target);
});

searchOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    changeSelected(e.target);
  });
});

searchBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    openOptions(btn);
  });
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleSearchData();
});
