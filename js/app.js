"use strict";

// === REFERENCIAS ===
const navigationBar = document.querySelector('.cardInicio');
const navigationBarBorder = document.querySelector('.cardInicio2');

// Configuración: cada botón sabe qué clases usar
const navConfig = {
    usuario: {
        barClass: 'cardUsuario',
        barBorderClass: 'cardUsuario2',
        sphereId: '#btnUsuario',
        textSelector: '.textUsuario'
    },
    categorias: {
        barClass: 'cardCategorias',
        barBorderClass: 'cardCategorias2',
        sphereId: '#btnCategorias',
        textSelector: '.textCategorias'
    },
    inicio: {
        barClass: 'cardInicio',
        barBorderClass: 'cardInicio2',
        sphereId: '#btnInicio',
        textSelector: '.textInicio'
    },
    favoritos: {
        barClass: 'cardFavoritos',
        barBorderClass: 'cardFavoritos2',
        sphereId: '#btnFavoritos',
        textSelector: '.textFavoritos'
    },
    carrito: {
        barClass: 'cardCarrito',
        barBorderClass: 'cardCarrito2',
        sphereId: '#btnCarrito',
        textSelector: '.textCarrito'
    }
};

let activeKey = 'inicio'; // Botón activo por defecto

// === FUNCIÓN UNIVERSAL ===
function activateNav(key) {
    const config = navConfig[key];
    if (!config) return;

    // 1. Cambiar clip-path de las barras
    // Primero quitamos TODAS las clases de estado posibles
    Object.values(navConfig).forEach(c => {
        navigationBar.classList.remove(c.barClass);
        navigationBarBorder.classList.remove(c.barBorderClass);
    });
    // Agregamos las nuevas
    navigationBar.classList.add(config.barClass);
    navigationBarBorder.classList.add(config.barBorderClass);

    // 2. Ocultar TODAS las esferas y mostrar solo la activa
    Object.values(navConfig).forEach(c => {
        const sphere = document.querySelector(c.sphereId);
        if (sphere) sphere.classList.add('hidden');
    });
    const activeSphere = document.querySelector(config.sphereId);
    if (activeSphere) activeSphere.classList.remove('hidden');

    // 3. Ocultar texto del activo, mostrar texto del anterior
    Object.values(navConfig).forEach(c => {
        const text = document.querySelector(c.textSelector);
        if (text) {
            if (c.textSelector === config.textSelector) {
                text.classList.add('opacity-0');
                text.classList.remove('opacity-100');
            } else {
                text.classList.remove('opacity-0');
                text.classList.add('opacity-100');
            }
        }
    });

    activeKey = key;
}

// === EVENT LISTENERS ===
Object.keys(navConfig).forEach(key => {
    const btn = document.querySelector(navConfig[key].textSelector);
    if (btn) {
        btn.addEventListener('click', () => activateNav(key));
    }
});

// Iniciar con Inicio activo
activateNav('inicio');