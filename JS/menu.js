const toggleMenu = () => document.body.classList.toggle("open");



const submenuToggle = document.querySelector('.submenu-toggle'); // Se llama a la variale

submenuToggle.addEventListener('click', () => {
    submenuToggle.classList.toggle('active');
});