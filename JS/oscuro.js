
const Oscuro = document.getElementById ("boton");
const header = document.querySelector(".header");

Oscuro.addEventListener ( "click" , () => {
    container.classList.toggle("dark-mode");
    container.classList.toggle("light-mode");
})