"use strict";


// ======================================================
// ===== NAVBAR INFERIOR Y SUPERIOR =====

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
// const heroSwiper = new Swiper('.hero-swiper', {
//     // Loop infinito suave: 1→2→3→1→2... sin brincos
//     loop: true,
    
//     // Velocidad de transición
//     speed: 500,

//     // Separación entre Cards
//     spaceBetween: 6,
    
//     // Autoplay cada 5 segundos
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false, // sigue auto después de tocar/drag
//         pauseOnMouseEnter: true,     // pausa al pasar el mouse
//     },
    
//     // Dots clickeables
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
    
//     // Touch nativo optimizado por Swiper
//     touchRatio: 1,
//     grabCursor: false, // lo manejamos con CSS para mantener tu estilo
//     simulateTouch: true,
// });
///////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////
// === BOTÓN ÉPICO UNIVERSAL + CONTADOR CARRITO ===
///////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////
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
// =========== FILTROS, VER MAS Y HEROS CON SWIPER ==================
///////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const catButtons = document.querySelectorAll('.cat-btn');
    const grid = document.getElementById('product-grid');
    const btnVerMas = document.getElementById('btn-ver-mas');
    const heroContainers = document.querySelectorAll('.hero-container');

    // --- INICIALIZAR CADA SWIPER INDEPENDIENTE CON SUS DOTS EXTERNOS ---
    const swiperTodos = new Swiper('#swiper-todos', { 
        loop: true, 
        spaceBetween: 6, // 🟢 AQUÍ RECUPERAS LA SEPARACIÓN ENTRE CARDS
        speed: 500,
        watchOverflow: false, 
        pagination: { 
            el: '.pagination-todos', 
            clickable: true 
        }, 
        autoplay: { 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
        } 
    });

    const swiperTecnologia = new Swiper('#swiper-tecnologia', { 
        loop: true, 
        spaceBetween: 6, // 🟢 AQUÍ RECUPERAS LA SEPARACIÓN ENTRE CARDS
        speed: 500,
        watchOverflow: false, 
        pagination: { 
            el: '.pagination-tecnologia', 
            clickable: true 
        },
        autoplay: { 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
        } 
    });

    const swiperHogar = new Swiper('#swiper-hogar', { 
        loop: true, 
        spaceBetween: 6, // 🟢 AQUÍ RECUPERAS LA SEPARACIÓN ENTRE CARDS
        speed: 500,
        watchOverflow: false, 
        pagination: { 
            el: '.pagination-hogar', 
            clickable: true 
        },
        autoplay: { 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
        } 
    });

    // --- MOSTRAR EL HERO CORRESPONDIENTE ---
    function showHero(categoria) {
        heroContainers.forEach(container => {
            container.classList.add('hidden');
        });

        const activeHero = document.getElementById(`hero-${categoria}`);
        if (activeHero) {
            activeHero.classList.remove('hidden');

            // Forzar actualización y reseteo de posición para evitar lag de los dots
            setTimeout(() => {
                if (categoria === 'todos') {
                    swiperTodos.update();
                    swiperTodos.slideToLoop(0);
                } else if (categoria === 'tecnologia') {
                    swiperTecnologia.update();
                    swiperTecnologia.slideTo(0, 0);
                } else if (categoria === 'hogar') {
                    swiperHogar.update();
                    swiperHogar.slideTo(0, 0);
                }
            }, 50);
        }
    }

    // --- EL RESTO DE TU LÓGICA DE FILTRADO Y VER MÁS ---
    if (!grid) return;

    const cards = Array.from(grid.getElementsByTagName('article'));
    let categoriaActual = 'todos';
    let showingAll = false;

    function getLimitByScreen() {
        const width = window.innerWidth;
        if (width >= 1280) return 15;
        if (width >= 1024) return 8;
        if (width >= 640)  return 9;
        return 8;
    }

    function updateDisplay() {
        const limit = getLimitByScreen();
        let visibleCount = 0;

        const cardsEnCategoria = cards.filter(card => 
            categoriaActual === 'todos' || card.classList.contains(`cat-${categoriaActual}`)
        );

        cards.forEach(card => {
            const perteneceCategoria = categoriaActual === 'todos' || card.classList.contains(`cat-${categoriaActual}`);

            if (perteneceCategoria) {
                if (showingAll) {
                    card.classList.remove('hidden');
                } else {
                    if (visibleCount < limit) {
                        card.classList.remove('hidden');
                        visibleCount++;
                    } else {
                        card.classList.add('hidden');
                    }
                }
            } else {
                card.classList.add('hidden');
            }
        });

        if (btnVerMas) {
            if (cardsEnCategoria.length <= limit) {
                btnVerMas.style.display = 'none';
            } else {
                btnVerMas.style.display = 'block';
                btnVerMas.textContent = showingAll ? 'Ver menos' : 'Ver más';
            }
        }
    }

    catButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            categoriaActual = e.currentTarget.getAttribute('data-categoria') || 'todos';
            showingAll = false;

            showHero(categoriaActual);
            updateDisplay();
        });
    });

    if (btnVerMas) {
        btnVerMas.addEventListener('click', () => {
            showingAll = !showingAll;
            updateDisplay();
        });
    }

    window.addEventListener('resize', () => {
        updateDisplay();
    });

    showHero("todos");
    updateDisplay();
});

// /////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////////////
// ======== AGREGAR AL CARRITO Y ACTIVAR BOTONES ===========
// /////////////////////////////////////////////////////////////
/**
 * Oculta todos los contenedores de los heros en la interfaz.
 */

// const btnCarrito = document.querySelector('#carrito-cambio')

// btnCarrito.addEventListener('click' , function ocultarHeros() {
//     // Selecciona todos los elementos con la clase hero-container
//     const heros = document.querySelectorAll('.hero-container');
//     const productos = document.querySelector('#product-grid');
//     const navCategorias = document.querySelector('#nav-categorias');
//     const btnMas = document.querySelector('#btn-mas');
//     const carritoSection = document.querySelector('#carrito-section');
//     const btnCarrito = document.querySelector('#btn-carrito');
    
    
//     heros.forEach(hero => {
//         // Añade la clase hidden de Tailwind (o CSS)
//         hero.classList.add('hidden');
//         // Fuerza el ocultamiento por estilo en línea por si hay conflictos
//         hero.style.display = 'none';
//     });

//     productos.classList.add('hidden');

//     navCategorias.classList.add('hidden');

//     btnMas.classList.add('hidden');

//     carritoSection.classList.remove('hidden');

//     btnCarrito.classList.remove('hidden');
// },);
// // Ejecutar la función al cargar el script o cuando lo necesites
// ocultarHeros()
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////


// ==========================================
// 1. ESTADO Y LÓGICA DEL CARRITO (Inicia vacío)
// ==========================================
let carritoDeCompras = [];

// Escuchar clics globales exclusivamente en los íconos circulares de añadir al carrito de la tienda
document.addEventListener('click', (e) => {
    const btnCircular = e.target.closest('.btn-agregar-carrito'); // Asegúrate que tu botón en la tarjeta tenga esta clase
    if (!btnCircular) return;

    const producto = {
        id: parseInt(btnCircular.dataset.id),
        titulo: btnCircular.dataset.titulo,
        subtitulo: btnCircular.dataset.subtitulo,
        precio: parseFloat(btnCircular.dataset.precio),
        imagen: btnCircular.dataset.imagen
    };

    agregarAlCarrito(producto);
});

function agregarAlCarrito(producto) {
    const index = carritoDeCompras.findIndex(item => item.id === producto.id);

    if (index !== -1) {
        carritoDeCompras[index].cantidad += 1;
    } else {
        carritoDeCompras.push({ ...producto, cantidad: 1 });
    }

    renderizarCarrito();
}

function renderizarCarrito() {
    const contenedorItems = document.querySelector('#contenedor-items-carrito');
    const elementoTotal = document.querySelector('#precio-total-general');
    
    if (!contenedorItems) return;

    contenedorItems.innerHTML = '';

    if (carritoDeCompras.length === 0) {
        contenedorItems.innerHTML = `<p class="font-Inter text-xs text-stone-500 py-4 px-2">Tu carrito está vacío.</p>`;
        if (elementoTotal) elementoTotal.textContent = 's/ 0.00';
        return;
    }

    let precioTotalGeneral = 0;

    carritoDeCompras.forEach(item => {
        const subtotalItem = item.precio * item.cantidad;
        precioTotalGeneral += subtotalItem;

        // Estructura idéntica a tu diseño original
        const articleHTML = `
            <article class="flex gap-3 py-2 border-b border-temu/20 justify-between">
                <article class="flex gap-3">
                    <div class="size-20 border border-temu rounded-lg overflow-hidden">
                        <img src="${item.imagen}" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col items-start justify-center gap-1">
                        <div>
                            <p class="font-Inter text-xs">${item.titulo}</p>
                            <p class="font-Inter text-xs">${item.subtitulo}</p>
                        </div>
                        <button class="h-6 w-30 border border-temu rounded-4xl flex justify-center items-center text-xs text-temu">
                            Color: Estandar
                        </button>
                        <p class="text-xs font-Inter">
                            s/ ${item.precio.toFixed(2)}
                        </p>
                    </div>
                </article>

                <div class="flex flex-col justify-start items-end">
                    <p class="font-semibold pr-1">s/ ${subtotalItem.toFixed(2)}</p>
                    <div class="flex justify-center items-center h-12 w-25 rounded-4xl border border-temu gap-2 text-temu">
                        <button onclick="cambiarCantidad(${item.id}, -1)" class="bg-temu cursor-pointer rounded-4xl size-5 text-white flex items-center justify-center">-</button>
                        <div class="flex flex-col items-center justify-center">
                            <p class="leading-3 text-xs">${item.cantidad}</p>
                            <p class="text-xs">Añadidos</p>
                        </div>
                        <button onclick="cambiarCantidad(${item.id}, 1)" class="bg-temu cursor-pointer rounded-4xl size-5 text-white flex items-center justify-center">+</button>
                    </div>
                </div>
            </article>
        `;
        contenedorItems.innerHTML += articleHTML;
    });

    if (elementoTotal) {
        elementoTotal.textContent = `s/ ${precioTotalGeneral.toFixed(2)}`;
    }
}

function cambiarCantidad(id, delta) {
    const index = carritoDeCompras.findIndex(item => item.id === id);
    if (index !== -1) {
        carritoDeCompras[index].cantidad += delta;
        if (carritoDeCompras[index].cantidad <= 0) {
            carritoDeCompras.splice(index, 1);
        }
        renderizarCarrito();
    }
}


// ==========================================
// 2. CONTROL DE VISTAS (TIENDA VS CARRITO)
// ==========================================
function gestionarVistaCarrito(esCarrito) {
    const heros = document.querySelectorAll('.hero-container');
    const productos = document.querySelector('#product-grid');
    const navCategorias = document.querySelector('#nav-categorias');
    const btnMas = document.querySelector('#btn-mas');
    const carritoSection = document.querySelector('#carrito-section');
    const btnCarritoFlotante = document.querySelector('#btn-carrito');

    if (esCarrito) {
        heros.forEach(hero => {
            hero.classList.add('hidden');
            hero.style.display = 'none';
        });
        if (productos) productos.classList.add('hidden');
        if (navCategorias) navCategorias.classList.add('hidden');
        if (btnMas) btnMas.classList.add('hidden');

        if (carritoSection) carritoSection.classList.remove('hidden');
        if (btnCarritoFlotante) btnCarritoFlotante.classList.remove('hidden');
    } else {
        heros.forEach(hero => {
            hero.classList.remove('hidden');
            hero.style.display = '';
        });
        if (productos) productos.classList.remove('hidden');
        if (navCategorias) navCategorias.classList.remove('hidden');
        if (btnMas) btnMas.classList.remove('hidden');

        if (carritoSection) carritoSection.classList.add('hidden');
        if (btnCarritoFlotante) btnCarritoFlotante.classList.add('hidden');
    }
}


// ==========================================
// 3. NAVBAR INFERIOR Y SUPERIOR
// ==========================================
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

function activateNav(key) {
    const config = navConfig[key];
    if (!config) return;

    if (navigationBar && navigationBarBorder) {
        Object.values(navConfig).forEach(c => {
            navigationBar.classList.remove(c.barClass);
            navigationBarBorder.classList.remove(c.barBorderClass);
        });
        navigationBar.classList.add(config.barClass);
        navigationBarBorder.classList.add(config.barBorderClass);
    }

    Object.values(navConfig).forEach(c => {
        const sphere = document.querySelector(c.sphereId);
        if (sphere) sphere.classList.add('hidden');
    });
    const activeSphere = document.querySelector(config.sphereId);
    if (activeSphere) activeSphere.classList.remove('hidden');

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

    document.querySelectorAll('.nav-desktop').forEach(btn => {
        const icon = btn.querySelector('i');
        const label = btn.querySelector('p');
        
        if (icon) {
            icon.classList.remove('text-temu');
            icon.classList.add('text-stone-950');
        }
        if (label) {
            label.classList.remove('text-temu', 'border-temu');
            label.classList.add('text-stone-950', 'border-transparent');
        }
    });

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

    if (key === 'carrito') {
        gestionarVistaCarrito(true);
    } else {
        gestionarVistaCarrito(false);
    }

    activeKey = key;
}

Object.keys(navConfig).forEach(key => {
    const btn = document.querySelector(navConfig[key].textSelector);
    if (btn) btn.addEventListener('click', () => activateNav(key));
});

document.querySelectorAll('.nav-desktop').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.nav;
        if (key) activateNav(key);
    });
});

// Iniciar en la página principal
activateNav('inicio');

