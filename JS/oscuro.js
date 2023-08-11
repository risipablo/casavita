

const BtnOscuro = document.querySelectorAll("#oscuro");

BtnOscuro.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btn.classList.toggle('active');
    });
});