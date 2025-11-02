const button = document.querySelector("button");
const nav = document.querySelector('nav');
let menuOpen = false;
button.addEventListener("click", hamburgerMenu);

// let themeIsSwitched = false;
// const themeSwitcher = document.getElementsByClassName('buttondark-mode')[0];
// themeSwitcher.addEventListener('click', flipTheme);

function hamburgerMenu() {
  nav.classList.toggle('uitschuiven'); // als er geklikt is schuift het menu uit door de class en code in css
  menuOpen = menuOpen ? false : true; // verandert de afbeelding adhv de waarde van de boolean waardoor het menu een kruisje wordt
  button.style.background = menuOpen ? 'url(images/kruisje.png)' : 'url(images/hamburgermenu.png)';
}

// function flipTheme() {
//   themeIsSwitched !== true // true staat gelijk aan light-mode, de default. false staat gelijk aan dark-mode, waardoor je tussen deze modes kan toggelen met de button
//     ? document.body.setAttribute('class', 'dark-mode')
//     : document.body.setAttribute('class', 'light-mode')
//   themeIsSwitched = themeIsSwitched ? false : true;
// }

/*
    Copyright (c) 2020 - present, DITDOT Ltd.
    https://www.ditdot.hr/en
*/

function load() {
  const button = document.querySelector(".buttondark-mode");

  // MediaQueryList object
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Toggles the "dark-mode" class based on if the media query matches
  function toggleDarkMode(state) {
    // Older browser don't support the second parameter in the
    // classList.toggle method so you'd need to handle this manually
    // if you need to support older browsers.
    document.body.classList.toggle("dark-mode", state);
    document.documentElement.classList.toggle("dark-mode", state);
  }

  // Initial setting
  toggleDarkMode(useDark.matches);

  // Listen for changes in the OS settings
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark-mode" class on click
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("dark-mode");
  });
}

window.addEventListener("DOMContentLoaded", load);