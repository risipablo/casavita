const toggleMenu = () => document.body.classList.toggle("open");


document.addEventListener("DOMContentLoaded", function() {
    let quienesSomosLink = document.getElementById("quienesSomos");
    let submenu = document.getElementById("submenu");

    quienesSomosLink.addEventListener("click", function(event) {
        event.preventDefault();
        submenu.classList.toggle("active");
    });
});
