"use strict";

// === REFERENCIAS ===
const navigationBar = document.querySelector('.cardInicio');
const navigationBarBorder = document.querySelector('.cardInicio2');

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

let activeKey = 'inicio';

// === FUNCIÓN UNIVERSAL ===
function activateNav(key) {
    const config = navConfig[key];
    if (!config) return;

    // 1. Cambiar clip-path de las barras inferiores
    Object.values(navConfig).forEach(c => {
        navigationBar.classList.remove(c.barClass);
        navigationBarBorder.classList.remove(c.barBorderClass);
    });
    navigationBar.classList.add(config.barClass);
    navigationBarBorder.classList.add(config.barBorderClass);

    // 2. Esferas inferiores
    Object.values(navConfig).forEach(c => {
        const sphere = document.querySelector(c.sphereId);
        if (sphere) sphere.classList.add('hidden');
    });
    const activeSphere = document.querySelector(config.sphereId);
    if (activeSphere) activeSphere.classList.remove('hidden');

    // 3. Textos de la barra inferior
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

    // 4. === NAV DESKTOP: solo color naranja + barrita debajo ===
    document.querySelectorAll('.nav-desktop').forEach(btn => {
        const icon = btn.querySelector('i');
        const label = btn.querySelector('p');
        
        // Reset: vuelve a gris y barrita transparente
        if (icon) {
            icon.classList.remove('text-temu');
            icon.classList.add('text-stone-950');
        }
        if (label) {
            label.classList.remove('text-temu', 'border-temu');
            label.classList.add('text-stone-950', 'border-transparent');
        }
    });

    // Activa solo el clickeado
    const activeDesktopBtn = document.querySelector(`.nav-desktop[data-nav="${key}"]`);
    if (activeDesktopBtn) {
        const activeIcon = activeDesktopBtn.querySelector('i');
        const activeLabel = activeDesktopBtn.querySelector('p');
        
        if (activeIcon) {
            activeIcon.classList.remove('text-stone-950');
            activeIcon.classList.add('text-temu');
        }
        if (activeLabel) {
            activeLabel.classList.remove('text-stone-950', 'border-transparent');
            activeLabel.classList.add('text-temu', 'border-temu');
        }
    }

    activeKey = key;
}

// === LISTENERS — Barra inferior ===
Object.keys(navConfig).forEach(key => {
    const btn = document.querySelector(navConfig[key].textSelector);
    if (btn) btn.addEventListener('click', () => activateNav(key));
});

// === LISTENERS — Nav desktop ===
document.querySelectorAll('.nav-desktop').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.nav;
        if (key) activateNav(key);
    });
});

// Iniciar
activateNav('inicio');