

const BtnOscuro = document.querySelectorAll("#oscuro");
const modoLocalStorageKey = "modoOscuro";


function cambiarModo() {
    document.body.classList.toggle('dark');
    BtnOscuro.forEach(btn => {
        btn.classList.toggle('active');
    });

    // variable para guardar en el localstorage
    const modoActual = document.body.classList.contains('dark') ? 'oscuro' : 'claro';
    localStorage.setItem(modoLocalStorageKey, modoActual);
}

// Modo oscuro desde el Local Storage al cargar la página
const modoGuardado = localStorage.getItem(modoLocalStorageKey);
if (modoGuardado === 'oscuro') {
    document.body.classList.add('dark');
    BtnOscuro.forEach(btn => {
        btn.classList.add('active');
    });
}

BtnOscuro.forEach(btn => {
    btn.addEventListener('click', cambiarModo);
});





