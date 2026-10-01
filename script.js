function getPageElement() {
  return document.querySelector(".page");
}

function getThemeButton() {
  return document.querySelector(".header__theme-button");
}

function isDarkThemeActive() {
  const pageElement = getPageElement();
  return pageElement?.classList.contains("page--theme-dark") ?? true;
}

function setTheme(themeName) {
  const pageElement = getPageElement();
  const themeButton = getThemeButton();

  if (!pageElement) {
    return;
  }

  pageElement.classList.toggle("page--theme-dark", themeName === "dark");
  pageElement.classList.toggle("page--theme-light", themeName === "light");
  localStorage.setItem("dota-theme", themeName);

  if (themeButton) {
    themeButton.setAttribute("aria-pressed", themeName === "light" ? "true" : "false");
  }
}

function switchTheme() {
  setTheme(isDarkThemeActive() ? "light" : "dark");
}

function restoreSavedTheme() {
  const savedTheme = localStorage.getItem("dota-theme");
  setTheme(savedTheme === "light" ? "light" : "dark");
}

function initThemeButton() {
  const themeButton = getThemeButton();

  if (!themeButton) {
    return;
  }

  themeButton.addEventListener("click", switchTheme);
}

function initPage() {
  restoreSavedTheme();
  initThemeButton();
}

document.addEventListener("DOMContentLoaded", initPage);
