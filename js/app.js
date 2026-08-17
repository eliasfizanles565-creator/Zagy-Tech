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
// === HERO SWIPER ===
const heroSwiper = new Swiper('.hero-swiper', {
    // Loop infinito suave: 1→2→3→1→2... sin brincos
    loop: true,
    
    // Velocidad de transición
    speed: 500,

    // Separación entre Cards
    spaceBetween: 6,
    
    // Autoplay cada 5 segundos
    autoplay: {
        delay: 5000,
        disableOnInteraction: false, // sigue auto después de tocar/drag
        pauseOnMouseEnter: true,     // pausa al pasar el mouse
    },
    
    // Dots clickeables
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Touch nativo optimizado por Swiper
    touchRatio: 1,
    grabCursor: false, // lo manejamos con CSS para mantener tu estilo
    simulateTouch: true,
});
///////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////
// === BOTÓN ÉPICO UNIVERSAL + CONTADOR CARRITO ===
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-epico');
    if (!btn) return;
    
    e.stopPropagation();
    
    // ========== LÓGICA DEL CONTADOR CARRITO ==========
    // Verifica si el botón tiene un icono de carrito de Remix
    const iconoCarrito = btn.querySelector('i[class*="ri-shopping-cart"]');
    
    if (iconoCarrito) {
        // Busca si ya tiene badge
        let badge = btn.querySelector('.carrito-badge');
        
        // Si no tiene, lo crea
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'carrito-badge';
            badge.textContent = '0';
            btn.appendChild(badge);
            
            // Pequeño delay para que la animación de entrada se vea
            requestAnimationFrame(() => {
                badge.classList.add('visible');
            });
        }
        
        // Suma 1
        let cuenta = parseInt(badge.textContent) || 0;
        cuenta++;
        badge.textContent = cuenta;
        
        // Animación de "pop"
        badge.classList.remove('pop');
        void badge.offsetWidth; // fuerza reflow para reiniciar animación
        badge.classList.add('pop');
    }
    
    // ========== LÓGICA ACTIVO/ÉPICO (la que ya tenías) ==========
    if (btn.classList.contains('activo')) return;
    
    document.querySelectorAll('.btn-epico.activo').forEach(b => {
        b.classList.remove('activo');
    });
    
    btn.classList.add('activo');
    
    // Ripple
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});

// Click fuera: quita activo de todos los btn-epico
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-epico')) return;
    
    document.querySelectorAll('.btn-epico.activo').forEach(b => {
        b.classList.remove('activo');
    });
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// === BOTÓN PRECIO UNIVERSAL (funciona en CUALQUIER parte de la página) ===
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-precio');
    
    if (btn) {
        // Click DENTRO del botón
        e.stopPropagation();
        
        // Toggle: si ya está activo, lo apaga; si no, lo enciende
        const estaActivo = btn.classList.contains('activo');
        
        // Primero apaga TODOS los btn-precio (solo uno activo a la vez)
        document.querySelectorAll('.btn-precio.activo').forEach(b => {
            b.classList.remove('activo');
        });
        
        // Si no estaba activo, lo activa
        if (!estaActivo) {
            btn.classList.add('activo');
            
            // Ripple desde el centro del botón
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-precio');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 500);
        }
        
    } else {
        // Click FUERA de cualquier btn-precio
        document.querySelectorAll('.btn-precio.activo').forEach(b => {
            b.classList.remove('activo');
        });
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// ======= BOTON VER MAS PRODUCTOS ========
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("product-grid");
    const btnVerMas = document.getElementById("btn-ver-mas");
    
    if (!grid || !btnVerMas) return;

    const cards = Array.from(grid.getElementsByTagName("article"));
    let showingAll = false;

    // Función para saber cuántas mostrar según el ancho de pantalla actual
    function getLimitByScreen() {
        const width = window.innerWidth;
        if (width >= 1280) return 15; // PC
        if (width >= 1024) return 12;  // Laptop
        if (width >= 640)  return 9;  // Tablet
        return 8;                     // Celular
    }

    function updateCardsVisibility() {
        const limit = getLimitByScreen();

        cards.forEach((card, index) => {
            if (showingAll) {
                card.classList.remove("hidden");
            } else {
                if (index < limit) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            }
        });

        // Si el total de tarjetas es menor o igual al límite inicial, ocultamos el botón
        if (cards.length <= limit) {
            btnVerMas.style.display = "none";
        } else {
            btnVerMas.style.display = "block";
            btnVerMas.textContent = showingAll ? "Ver menos" : "Ver más";
        }
    }

    // Evento click del botón
    btnVerMas.addEventListener("click", () => {
        showingAll = !showingAll;
        updateCardsVisibility();
    });

    // Recalcular si el usuario redimensiona la ventana
    window.addEventListener("resize", () => {
        if (!showingAll) {
            updateCardsVisibility();
        }
    });

    // Ejecutar al cargar la página
    updateCardsVisibility();
});
