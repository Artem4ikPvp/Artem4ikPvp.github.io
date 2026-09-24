function getPageElement() {
  return document.querySelector(".page");
}

function getThemeToggleButton() {
  return document.querySelector(".theme-toggle");
}

function isDarkThemeActive() {
  const page = getPageElement();
  return page && page.classList.contains("page--theme-dark");
}

function applyDarkTheme() {
  const page = getPageElement();
  if (!page) return;

  page.classList.remove("page--theme-light");
  page.classList.add("page--theme-dark");
  localStorage.setItem("dota-theme", "dark");
}

function applyLightTheme() {
  const page = getPageElement();
  if (!page) return;

  page.classList.remove("page--theme-dark");
  page.classList.add("page--theme-light");
  localStorage.setItem("dota-theme", "light");
}

function switchTheme() {
  if (isDarkThemeActive()) {
    applyLightTheme();
  } else {
    applyDarkTheme();
  }
}

function restoreSavedTheme() {
  const savedTheme = localStorage.getItem("dota-theme");
  if (savedTheme === "light") {
    applyLightTheme();
  } else {
    applyDarkTheme();
  }
}

function initThemeToggle() {
  const toggleBtn = getThemeToggleButton();
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", switchTheme);
}

function initPage() {
  restoreSavedTheme();
  initThemeToggle();
}

document.addEventListener("DOMContentLoaded", initPage);
