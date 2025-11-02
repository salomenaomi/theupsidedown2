const button = document.querySelector("button");
const nav = document.querySelector("nav");

button.addEventListener("click", hamburgerMenu);

function hamburgerMenu () {
  nav.classList.add('active');
  console.log("Ik ben geklikt");
}

console.log("Hello World");
