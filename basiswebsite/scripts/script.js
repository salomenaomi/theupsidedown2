const button = document.querySelector("button");
const nav = document.querySelector('nav');
let menuOpen = false;
button.addEventListener("click", hamburgerMenu);

let themeIsSwitched = false;
const themeSwitcher = document.getElementsByClassName('buttondark-mode')[0];
themeSwitcher.addEventListener('click', flipTheme);

function hamburgerMenu() {
  nav.classList.toggle('uitschuiven'); // als er geklikt is schuift het menu uit door de class en code in css
  menuOpen = menuOpen ? false : true; // verandert de afbeelding adhv de waarde van de boolean waardoor het menu een kruisje wordt
  button.style.background = menuOpen ? 'url(../images/kruisje.png)' : 'url(../images/hamburgermenu.png)';
}

function flipTheme() {
  themeIsSwitched !== true // true staat gelijk aan light-mode, de default. false staat gelijk aan dark-mode, waardoor je tussen deze modes kan toggelen met de button
    ? document.body.setAttribute('class', 'dark-mode')
    : document.body.setAttribute('class', 'light-mode')
  themeIsSwitched = themeIsSwitched ? false : true;
}