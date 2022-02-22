const btnTheme = document.querySelector(".btn-theme");
const htmlElement = document.documentElement;
const moonIcon = document.querySelector(".btn-theme .fa-moon");

btnTheme.addEventListener("click", () => {
  if (!htmlElement.hasAttribute("data-theme")) {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("marvelsQuizTheme", "dark");
  } else {
    htmlElement.removeAttribute("data-theme");
    localStorage.removeItem("marvelsQuizTheme");
  }

  moonIcon.classList.toggle("fas");
});

(() => {
  const theme = localStorage.getItem("marvelsQuizTheme");

  if (theme) {
    htmlElement.setAttribute("data-theme", "dark");
    moonIcon.classList.add("fas");
  }
})();
