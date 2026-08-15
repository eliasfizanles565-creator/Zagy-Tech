"use strict";


// ======================================================
// ===== NAVBAR INFERIOR Y SUPERIOR =====
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
// ======================================================




// ======================================================
// ===== BOTONES CATEGORIAS =====
const scrollContainer = document.getElementById('categorias-scroll');
const btnLeft = document.getElementById('scroll-left');
const btnRight = document.getElementById('scroll-right');

// === Mostrar/ocultar flechas según posición ===
function updateArrows() {
    if (!scrollContainer || !btnLeft || !btnRight) return;

    const scrollLeft = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Flecha izquierda: visible si NO estamos al inicio
    if (scrollLeft > 10) {
        btnLeft.classList.remove('lg:hidden');
        btnLeft.classList.add('lg:flex');
    } else {
        btnLeft.classList.remove('lg:flex');
        btnLeft.classList.add('lg:hidden');
    }

    // Flecha derecha: visible si NO estamos al final
    if (scrollLeft < maxScroll - 10) {
        btnRight.classList.remove('lg:hidden');
        btnRight.classList.add('lg:flex');
    } else {
        btnRight.classList.remove('lg:flex');
        btnRight.classList.add('lg:hidden');
    }
}

// === Flechas ===
if (btnLeft) {
    btnLeft.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });
}

if (btnRight) {
    btnRight.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
}

// === Detectar scroll para mostrar/ocultar flechas ===
if (scrollContainer) {
    scrollContainer.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    
    // Chequear al cargar
    updateArrows();
}

// === Drag con mouse (PC) ===
if (scrollContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.style.cursor = 'grabbing';
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.style.cursor = 'grab';
}

// === CATEGORÍAS: activar/desactivar botones ===
const catButtons = document.querySelectorAll('.cat-btn');

function setActiveCategory(clickedBtn) {
    catButtons.forEach(btn => {
        const text = btn.querySelector('p');
        
        // Desactivar todos
        btn.classList.remove('bg-stone-950');
        btn.classList.add('bg-white', 'border', 'border-stone-950');
        
        if (text) {
            text.classList.remove('text-white');
            text.classList.add('text-stone-950');
        }
    });

    // Activar el clickeado
    clickedBtn.classList.remove('bg-white', 'border', 'border-stone-950');
    clickedBtn.classList.add('bg-stone-950');
    
    const activeText = clickedBtn.querySelector('p');
    if (activeText) {
        activeText.classList.remove('text-stone-950');
        activeText.classList.add('text-white');
    }
}

catButtons.forEach(btn => {
    btn.addEventListener('click', () => setActiveCategory(btn));
});
///////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////
// === HERO SLIDER ===
const heroTrack = document.getElementById('hero-track');
const heroDots = document.querySelectorAll('.hero-dot');
const heroContainer = document.getElementById('hero-container');

let currentSlide = 0;
const totalSlides = 3;
let autoSlideInterval;

function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    heroTrack.style.transform = `translateX(-${index * 100}%)`;
    
    heroDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Click en dots
heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(parseInt(dot.dataset.slide));
        startAutoSlide();
    });
});

// === DRAG / SWIPE (sin lag) ===
let startX = 0;
let currentX = 0;
let isDragging = false;

function getX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function onStart(e) {
    isDragging = true;
    startX = getX(e);
    currentX = startX;
    stopAutoSlide();
    heroTrack.style.transition = 'none';        // ← quita transición para 0 lag
    heroTrack.style.cursor = 'grabbing';
}

function onMove(e) {
    if (!isDragging) return;
    currentX = getX(e);
    const diff = currentX - startX;
    const base = -currentSlide * heroContainer.offsetWidth;
    heroTrack.style.transform = `translateX(${base + diff}px)`; // ← puro px, rápido
}

function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    heroTrack.style.transition = 'transform 0.5s ease-out'; // ← restaura animación suave
    heroTrack.style.cursor = 'grab';
    
    const diff = currentX - startX;
    const threshold = 50; // mínimo px para cambiar de slide
    
    if (diff < -threshold) {
        goToSlide(currentSlide + 1);
    } else if (diff > threshold) {
        goToSlide(currentSlide - 1);
    } else {
        goToSlide(currentSlide); // vuelve al centro si no arrastró lo suficiente
    }
    
    startAutoSlide();
}

// Touch
heroContainer.addEventListener('touchstart', onStart, { passive: true });
heroContainer.addEventListener('touchmove', onMove, { passive: true });
heroContainer.addEventListener('touchend', onEnd, { passive: true });

// Mouse
heroContainer.addEventListener('mousedown', onStart);
heroContainer.addEventListener('mousemove', onMove);
heroContainer.addEventListener('mouseup', onEnd);
heroContainer.addEventListener('mouseleave', onEnd);

// Iniciar
goToSlide(0);
startAutoSlide();