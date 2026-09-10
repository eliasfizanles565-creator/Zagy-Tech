"use strict";

// ======================================================
// PAGINAS.JS — Subpáginas de Zagy Tech
// Redirige al index, modo oscuro sincronizado y acordeones
// ======================================================


// ─── MODO OSCURO (sincronizado con localStorage 'zagy_modo') ───
function aplicarModo(modo) {
    const root = document.documentElement;
    if (modo === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');

    localStorage.setItem('zagy_modo', modo);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', modo === 'dark' ? '#0c0a09' : '#ffffff');

    const btn = document.getElementById('btn-modo-pagina');
    if (btn) {
        const icono = btn.querySelector('i');
        if (icono) {
            icono.className = modo === 'dark'
                ? 'ri-moon-fill text-lg text-temu'
                : 'ri-sun-fill text-lg text-temu';
        }
    }
}

(function iniciarModo() {
    const guardado = localStorage.getItem('zagy_modo');
    if (guardado === 'dark' || guardado === 'light') {
        aplicarModo(guardado);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        aplicarModo('dark');
    } else {
        aplicarModo('light');
    }
})();

document.getElementById('btn-modo-pagina')?.addEventListener('click', () => {
    const actual = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    aplicarModo(actual === 'dark' ? 'light' : 'dark');
});

// ─── ACORDEONES (FAQ) ───
document.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header');
    if (!header) return;

    const item = header.closest('.accordion-item');
    const content = item?.querySelector('.accordion-content');
    const icon = header.querySelector('.accordion-icon');
    if (!content) return;

    const abierto = content.classList.contains('abierto');

    document.querySelectorAll('.accordion-content').forEach(c => {
        c.style.maxHeight = '0px';
        c.classList.remove('abierto');
    });
    document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotado'));

    if (!abierto) {
        content.classList.add('abierto');
        icon?.classList.add('rotado');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
});

// ─── FORMULARIO DE CONTACTO → WHATSAPP ───
const formContacto = document.getElementById('form-contacto');
if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('contacto-nombre')?.value.trim() || '';
        const mensaje = document.getElementById('contacto-mensaje')?.value.trim() || '';
        const texto = `👋 *Hola Zagy Tech!*\n\n*Nombre:* ${nombre}\n\n*Mensaje:*\n${mensaje}`;
        window.open('https://wa.me/51915112116?text=' + encodeURIComponent(texto), '_blank');
    });
}