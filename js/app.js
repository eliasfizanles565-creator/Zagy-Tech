"use strict";

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let categoriaActual = 'todos';
let showingAll = false;
let swiperTodos, swiperTecnologia, swiperHogar;

// ======================================================
// BOTONES CATEGORIAS - SCROLL Y FLECHAS
// ======================================================
const scrollContainer = document.getElementById('categorias-scroll');
const btnLeft = document.getElementById('scroll-left');
const btnRight = document.getElementById('scroll-right');

function updateArrows() {
    if (!scrollContainer || !btnLeft || !btnRight) return;
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (scrollLeft > 10) { btnLeft.classList.remove('lg:hidden'); btnLeft.classList.add('lg:flex'); }
    else { btnLeft.classList.remove('lg:flex'); btnLeft.classList.add('lg:hidden'); }
    if (scrollLeft < maxScroll - 10) { btnRight.classList.remove('lg:hidden'); btnRight.classList.add('lg:flex'); }
    else { btnRight.classList.remove('lg:flex'); btnRight.classList.add('lg:hidden'); }
}

if (btnLeft) btnLeft.addEventListener('click', () => scrollContainer.scrollBy({ left: -200, behavior: 'smooth' }));
if (btnRight) btnRight.addEventListener('click', () => scrollContainer.scrollBy({ left: 200, behavior: 'smooth' }));
if (scrollContainer) {
    scrollContainer.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    updateArrows();
}

// Drag con mouse
if (scrollContainer) {
    let isDown = false, startX, scrollLeft;
    scrollContainer.addEventListener('mousedown', (e) => { isDown = true; scrollContainer.style.cursor = 'grabbing'; startX = e.pageX - scrollContainer.offsetLeft; scrollLeft = scrollContainer.scrollLeft; });
    scrollContainer.addEventListener('mouseleave', () => { isDown = false; scrollContainer.style.cursor = 'grab'; });
    scrollContainer.addEventListener('mouseup', () => { isDown = false; scrollContainer.style.cursor = 'grab'; });
    scrollContainer.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - scrollContainer.offsetLeft; const walk = (x - startX) * 1.5; scrollContainer.scrollLeft = scrollLeft - walk; });
    scrollContainer.style.cursor = 'grab';
}

// Activar/desactivar botones categorías
const catButtons = document.querySelectorAll('.cat-btn');
function setActiveCategory(clickedBtn) {
    catButtons.forEach(btn => {
        const text = btn.querySelector('p');
        btn.classList.remove('bg-stone-950'); btn.classList.add('bg-white', 'border', 'border-stone-950');
        if (text) { text.classList.remove('text-white'); text.classList.add('text-stone-950'); }
    });
    clickedBtn.classList.remove('bg-white', 'border', 'border-stone-950'); clickedBtn.classList.add('bg-stone-950');
    const activeText = clickedBtn.querySelector('p');
    if (activeText) { activeText.classList.remove('text-stone-950'); activeText.classList.add('text-white'); }
}
catButtons.forEach(btn => btn.addEventListener('click', () => setActiveCategory(btn)));

// ======================================================
// SWIPERS Y SHOW HERO
// ======================================================
function showHero(categoria) {
    const heroContainers = document.querySelectorAll('.hero-container');
    heroContainers.forEach(container => container.classList.add('hidden'));
    const activeHero = document.getElementById(`hero-${categoria}`);
    if (activeHero) {
        activeHero.classList.remove('hidden');
        setTimeout(() => {
            if (categoria === 'todos' && swiperTodos) { swiperTodos.update(); swiperTodos.slideToLoop(0); }
            else if (categoria === 'tecnologia' && swiperTecnologia) { swiperTecnologia.update(); swiperTecnologia.slideTo(0, 0); }
            else if (categoria === 'hogar' && swiperHogar) { swiperHogar.update(); swiperHogar.slideTo(0, 0); }
        }, 50);
    }
}

// ======================================================
// FILTROS, VER MAS Y SWIPERS
// ======================================================
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    const btnVerMas = document.getElementById('btn-ver-mas');

    swiperTodos = new Swiper('#swiper-todos', { loop: true, spaceBetween: 6, speed: 500, watchOverflow: false, pagination: { el: '.pagination-todos', clickable: true }, autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true } });
    swiperTecnologia = new Swiper('#swiper-tecnologia', { loop: true, spaceBetween: 6, speed: 500, watchOverflow: false, pagination: { el: '.pagination-tecnologia', clickable: true }, autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true } });
    swiperHogar = new Swiper('#swiper-hogar', { loop: true, spaceBetween: 6, speed: 500, watchOverflow: false, pagination: { el: '.pagination-hogar', clickable: true }, autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true } });

    if (!grid) return;
    const cards = Array.from(grid.getElementsByTagName('article'));

    function getLimitByScreen() {
        const width = window.innerWidth;
        if (width >= 1280) return 15;
        if (width >= 1024) return 8;
        if (width >= 640) return 9;
        return 8;
    }

    function updateDisplay() {
        const limit = getLimitByScreen();
        let visibleCount = 0;
        const cardsEnCategoria = cards.filter(card => categoriaActual === 'todos' || card.classList.contains(`cat-${categoriaActual}`));
        cards.forEach(card => {
            const perteneceCategoria = categoriaActual === 'todos' || card.classList.contains(`cat-${categoriaActual}`);
            if (perteneceCategoria) {
                if (showingAll) { card.classList.remove('hidden'); }
                else { if (visibleCount < limit) { card.classList.remove('hidden'); visibleCount++; } else { card.classList.add('hidden'); } }
            } else { card.classList.add('hidden'); }
        });
        if (btnVerMas) {
            if (cardsEnCategoria.length <= limit) { btnVerMas.style.display = 'none'; }
            else { btnVerMas.style.display = 'block'; btnVerMas.textContent = showingAll ? 'Ver menos' : 'Ver más'; }
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
        btnVerMas.addEventListener('click', () => { showingAll = !showingAll; updateDisplay(); });
    }
    window.addEventListener('resize', () => updateDisplay());
    showHero('todos');
    updateDisplay();
});

// ======================================================
// CARRITO
// ======================================================
let carritoDeCompras = [];

document.addEventListener('click', (e) => {
    const btnCircular = e.target.closest('.btn-agregar-carrito');
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
    if (index !== -1) { carritoDeCompras[index].cantidad += 1; }
    else { carritoDeCompras.push({ ...producto, cantidad: 1 }); }
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
        const articleHTML = `
            <article class="flex gap-3 py-2 border-b border-temu/20 justify-between">
                <article class="flex gap-3">
                    <div class="size-20 border border-temu rounded-lg overflow-hidden"><img src="${item.imagen}" alt="" class="w-full h-full object-cover"></div>
                    <div class="flex flex-col items-start justify-center gap-1">
                        <div><p class="font-Inter text-xs">${item.titulo}</p><p class="font-Inter text-xs">${item.subtitulo}</p></div>
                        <button class="h-6 w-30 border border-temu rounded-4xl flex justify-center items-center text-xs text-temu">Color: Estandar</button>
                        <p class="text-xs font-Inter">s/ ${item.precio.toFixed(2)}</p>
                    </div>
                </article>
                <div class="flex flex-col justify-start items-end">
                    <p class="font-semibold pr-1">s/ ${subtotalItem.toFixed(2)}</p>
                    <div class="flex justify-center items-center h-12 w-25 rounded-4xl border border-temu gap-2 text-temu">
                        <button onclick="cambiarCantidad(${item.id}, -1)" class="bg-temu cursor-pointer rounded-4xl size-5 text-white flex items-center justify-center">-</button>
                        <div class="flex flex-col items-center justify-center"><p class="leading-3 text-xs">${item.cantidad}</p><p class="text-xs">Añadidos</p></div>
                        <button onclick="cambiarCantidad(${item.id}, 1)" class="bg-temu cursor-pointer rounded-4xl size-5 text-white flex items-center justify-center">+</button>
                    </div>
                </div>
            </article>`;
        contenedorItems.innerHTML += articleHTML;
    });
    if (elementoTotal) elementoTotal.textContent = `s/ ${precioTotalGeneral.toFixed(2)}`;
}

function cambiarCantidad(id, delta) {
    const index = carritoDeCompras.findIndex(item => item.id === id);
    if (index !== -1) {
        carritoDeCompras[index].cantidad += delta;
        if (carritoDeCompras[index].cantidad <= 0) carritoDeCompras.splice(index, 1);
        renderizarCarrito();
    }
}

// ======================================================
// FAVORITOS
// ======================================================
let favoritos = [];

function toggleFavorito(producto) {
    const index = favoritos.findIndex(f => f.id === producto.id);
    if (index !== -1) { favoritos.splice(index, 1); }
    else { favoritos.push(producto); }
    sincronizarCorazones();
    renderizarFavoritos();
}

function sincronizarCorazones() {
    const idsFavoritos = favoritos.map(f => f.id);
    // Cards de producto
    document.querySelectorAll('.btn-favorito').forEach(btn => {
        const card = btn.closest('article');
        if (!card) return;
        const id = parseInt(card.dataset.id);
        const icono = btn.querySelector('i');
        if (idsFavoritos.includes(id)) {
            btn.classList.add('activo');
            if (icono) { icono.classList.remove('ri-heart-line'); icono.classList.add('ri-heart-fill'); }
        } else {
            btn.classList.remove('activo');
            if (icono) { icono.classList.remove('ri-heart-fill'); icono.classList.add('ri-heart-line'); }
        }
    });
    // Heroes
    document.querySelectorAll('.btn-favorito-hero').forEach(btn => {
        const slide = btn.closest('.swiper-slide');
        if (!slide) return;
        const id = parseInt(slide.dataset.id);
        const icono = btn.querySelector('i');
        if (idsFavoritos.includes(id)) {
            btn.classList.add('activo');
            if (icono) { icono.classList.remove('ri-heart-line'); icono.classList.add('ri-heart-fill'); }
        } else {
            btn.classList.remove('activo');
            if (icono) { icono.classList.remove('ri-heart-fill'); icono.classList.add('ri-heart-line'); }
        }
    });
}

function renderizarFavoritos() {
    const grid = document.getElementById('favoritos-grid');
    const vacioMsg = document.getElementById('favoritos-vacio');
    if (!grid) return;
    // Limpiar cards anteriores (excepto mensaje vacío)
    const existingCards = grid.querySelectorAll('article');
    existingCards.forEach(c => c.remove());

    if (favoritos.length === 0) {
        if (vacioMsg) vacioMsg.classList.remove('hidden');
        return;
    }
    if (vacioMsg) vacioMsg.classList.add('hidden');

    favoritos.forEach(item => {
        const cardHTML = `
            <article class="w-[172px] h-[254px] bg-white relative sm:w-[234px] sm:h-[381px]" data-id="${item.id}">
                <div class="absolute inset-0 bg-stone-950 cardProducto"></div>
                <div class="w-[172px] h-52.5 bg-white cardProductoInner absolute inset-0 overflow-hidden border border-stone-950 sm:w-[234px] sm:h-78.75">
                    <img src="${item.imagen}" alt="" class="w-full h-full object-contain object-[50%_70%] sm:object-[50%_60%]">
                </div>
                <button class="btn-favorito absolute top-1.5 right-1.5 z-20 size-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 sm:size-9 sm:top-2 sm:right-2 activo">
                    <i class="ri-heart-fill text-sm text-stone-950 transition-colors duration-200 sm:text-lg"></i>
                </button>
                <div class="w-18 h-6 absolute top-0.5 left-2.25 bg-puro border rounded-br-xl rounded-tl-xl flex items-center justify-center cursor-pointer btn-precio sm:w-27 sm:h-9 sm:top-0.75 sm:left-[13.5px] sm:rounded-br-[18px] sm:rounded-tl-[18px]">
                    <p class="font-Russo text-xs pt-0.25 sm:text-base">s/ ${parseFloat(item.precio).toFixed(2)}</p>
                </div>
                <button class="btn-agregar-carrito size-7 bg-stone-950 absolute right-[2.5px] bottom-[28px] rounded-4xl z-10 flex justify-center items-center cursor-pointer transition-transform duration-300 btn-epico sm:size-10.5 sm:right-[3.75px] sm:bottom-[42px]"
                    data-id="${item.id}" data-titulo="${item.titulo}" data-subtitulo="${item.subtitulo}" data-precio="${item.precio}" data-imagen="${item.imagen}">
                    <i class="ri-shopping-cart-2-line text-white text-[13px] pb-px pl-px sm:text-[19.5px] sm:pl-[0.5px] sm:pb-[1.5px]"></i>
                </button>
                <div class="absolute bg-stone-950 bottom-0 cardInfo w-[172px] h-10 sm:w-[234px] sm:h-15"></div>
                <div class="w-[172px] h-10 absolute bottom-0 bg-puro cardInfoInner flex flex-col justify-center border border-stone-950 sm:w-[234px] sm:h-15">
                    <p class="font-Inter text-xs font-extrabold pl-3 w-34 cursor-default sm:w-51 sm:text-base sm:leading-none sm:pl-4.5 sm:pt-0.25">${item.titulo}</p>
                    <p class="font-Inter text-xs font-extrabold pl-3 w-34 cursor-default sm:w-51 sm:text-base sm:mt-0.5 sm:pl-4.5">${item.subtitulo}</p>
                </div>
            </article>`;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Click en favorito (cards)
document.addEventListener('click', (e) => {
    const btnFav = e.target.closest('.btn-favorito');
    if (btnFav) {
        const card = btnFav.closest('article');
        if (!card) return;
        const producto = {
            id: parseInt(card.dataset.id),
            titulo: card.dataset.titulo,
            subtitulo: card.dataset.subtitulo,
            precio: parseFloat(card.dataset.precio),
            imagen: card.dataset.imagen
        };
        toggleFavorito(producto);
    }
});

// Click en favorito (heroes)
document.addEventListener('click', (e) => {
    const btnFavHero = e.target.closest('.btn-favorito-hero');
    if (btnFavHero) {
        const slide = btnFavHero.closest('.swiper-slide');
        if (!slide) return;
        const producto = {
            id: parseInt(slide.dataset.id),
            titulo: slide.dataset.titulo,
            subtitulo: slide.dataset.subtitulo,
            precio: parseFloat(slide.dataset.precio),
            imagen: slide.dataset.imagen
        };
        toggleFavorito(producto);
    }
});

// ======================================================
// GESTIÓN DE VISTAS (TIENDA VS CARRITO VS FAVORITOS)
// ======================================================
function gestionarVista(vista) {
    const heros = document.querySelectorAll('.hero-container');
    const productos = document.querySelector('#product-grid');
    const navCategorias = document.querySelector('#nav-categorias');
    const btnMas = document.querySelector('#btn-mas');
    const carritoSection = document.querySelector('#carrito-section');
    const btnCarritoFlotante = document.querySelector('#btn-carrito');
    const favoritosSection = document.querySelector('#favoritos-section');
    const separadorNav = navCategorias ? navCategorias.nextElementSibling : null;

    if (vista === 'carrito') {
        heros.forEach(hero => { hero.classList.add('hidden'); hero.style.display = 'none'; });
        if (productos) productos.classList.add('hidden');
        if (navCategorias) navCategorias.classList.add('hidden');
        if (btnMas) btnMas.classList.add('hidden');
        if (favoritosSection) favoritosSection.classList.add('hidden');
        if (carritoSection) carritoSection.classList.remove('hidden');
        if (btnCarritoFlotante) btnCarritoFlotante.classList.remove('hidden');
        if (separadorNav) separadorNav.classList.add('hidden');
    } else if (vista === 'favoritos') {
        heros.forEach(hero => { hero.classList.add('hidden'); hero.style.display = 'none'; });
        if (productos) productos.classList.add('hidden');
        if (navCategorias) navCategorias.classList.add('hidden');
        if (btnMas) btnMas.classList.add('hidden');
        if (carritoSection) carritoSection.classList.add('hidden');
        if (btnCarritoFlotante) btnCarritoFlotante.classList.add('hidden');
        if (favoritosSection) favoritosSection.classList.remove('hidden');
        if (separadorNav) separadorNav.classList.add('hidden');
        renderizarFavoritos();
    } else {
        // VISTA TIENDA (inicio, categorías, usuario, etc.)
        // CORRECCIÓN DEL BUG: en vez de mostrar TODOS los heroes,
        // llamamos showHero(categoriaActual) para mostrar solo el activo
        showHero(categoriaActual);
        if (productos) productos.classList.remove('hidden');
        if (navCategorias) navCategorias.classList.remove('hidden');
        if (btnMas) btnMas.classList.remove('hidden');
        if (carritoSection) carritoSection.classList.add('hidden');
        if (btnCarritoFlotante) btnCarritoFlotante.classList.add('hidden');
        if (favoritosSection) favoritosSection.classList.add('hidden');
        if (separadorNav) separadorNav.classList.remove('hidden');
    }
}

// ======================================================
// NAVBAR INFERIOR Y SUPERIOR
// ======================================================
const navigationBar = document.querySelector('.cardInicio');
const navigationBarBorder = document.querySelector('.cardInicio2');

const navConfig = {
    usuario: { barClass: 'cardUsuario', barBorderClass: 'cardUsuario2', sphereId: '#btnUsuario', textSelector: '.textUsuario' },
    categorias: { barClass: 'cardCategorias', barBorderClass: 'cardCategorias2', sphereId: '#btnCategorias', textSelector: '.textCategorias' },
    inicio: { barClass: 'cardInicio', barBorderClass: 'cardInicio2', sphereId: '#btnInicio', textSelector: '.textInicio' },
    favoritos: { barClass: 'cardFavoritos', barBorderClass: 'cardFavoritos2', sphereId: '#btnFavoritos', textSelector: '.textFavoritos' },
    carrito: { barClass: 'cardCarrito', barBorderClass: 'cardCarrito2', sphereId: '#btnCarrito', textSelector: '.textCarrito' }
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
            if (c.textSelector === config.textSelector) { text.classList.add('opacity-0'); text.classList.remove('opacity-100'); }
            else { text.classList.remove('opacity-0'); text.classList.add('opacity-100'); }
        }
    });

    document.querySelectorAll('.nav-desktop').forEach(btn => {
        const icon = btn.querySelector('i');
        const label = btn.querySelector('p');
        if (icon) { icon.classList.remove('text-temu'); icon.classList.add('text-stone-950'); }
        if (label) { label.classList.remove('text-temu', 'border-temu'); label.classList.add('text-stone-950', 'border-transparent'); }
    });

    const activeDesktopBtn = document.querySelector(`.nav-desktop[data-nav="${key}"]`);
    if (activeDesktopBtn) {
        const activeIcon = activeDesktopBtn.querySelector('i');
        const activeLabel = activeDesktopBtn.querySelector('p');
        if (activeIcon) { activeIcon.classList.remove('text-stone-950'); activeIcon.classList.add('text-temu'); }
        if (activeLabel) { activeLabel.classList.remove('text-stone-950', 'border-transparent'); activeLabel.classList.add('text-temu', 'border-temu'); }
    }

    // Gestionar vistas según el botón
    if (key === 'carrito') { gestionarVista('carrito'); }
    else if (key === 'favoritos') { gestionarVista('favoritos'); }
    else {
        // RESET completo al inicio
        categoriaActual = 'todos';
        showingAll = false;
        
        // Activar botón "Todos" visualmente
        const btnTodos = document.querySelector('[data-categoria="todos"]');
        if (btnTodos) setActiveCategory(btnTodos);
        
        // Mostrar hero de todos y productos
        gestionarVista('tienda');
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

// Iniciar
activateNav('inicio');

// ======================================================
// BOTÓN ÉPICO UNIVERSAL + CONTADOR CARRITO
// ======================================================
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-epico');
    if (!btn) return;
    e.stopPropagation();
    const iconoCarrito = btn.querySelector('i[class*="ri-shopping-cart"]');
    if (iconoCarrito) {
        let badge = btn.querySelector('.carrito-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'carrito-badge';
            badge.textContent = '0';
            btn.appendChild(badge);
            requestAnimationFrame(() => badge.classList.add('visible'));
        }
        let cuenta = parseInt(badge.textContent) || 0;
        cuenta++;
        badge.textContent = cuenta;
        badge.classList.remove('pop');
        void badge.offsetWidth;
        badge.classList.add('pop');
    }
    if (btn.classList.contains('activo')) return;
    document.querySelectorAll('.btn-epico.activo').forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');
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

document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-epico')) return;
    document.querySelectorAll('.btn-epico.activo').forEach(b => b.classList.remove('activo'));
});

// ======================================================
// BOTÓN PRECIO UNIVERSAL
// ======================================================
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-precio');
    if (btn) {
        e.stopPropagation();
        const estaActivo = btn.classList.contains('activo');
        document.querySelectorAll('.btn-precio.activo').forEach(b => b.classList.remove('activo'));
        if (!estaActivo) {
            btn.classList.add('activo');
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
        document.querySelectorAll('.btn-precio.activo').forEach(b => b.classList.remove('activo'));
    }
});

//////////////////
// LOGO
//////////////////
document.getElementById('logo-zagy').addEventListener('click', () => {
    activateNav('inicio');
});