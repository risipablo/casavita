const toggleMenu = () => document.body.classList.toggle("open");


// Cerrar el submenu cuando el cursor se aleja
const submenuToggle = document.querySelector('.submenu-toggle');

submenuToggle.addEventListener('click', () => {
    submenuToggle.classList.toggle('active');
});