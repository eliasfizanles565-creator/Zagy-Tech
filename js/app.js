"use strict";

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let categoriaActual = 'todos';
let showingAll = false;
let swiperTodos, swiperTecnologia, swiperHogar;

// ======================================================
// LOCALSTORAGE HELPERS
// ======================================================
function guardarCarrito() {
    localStorage.setItem('zagy_carrito', JSON.stringify(carritoDeCompras));
}
function cargarCarrito() {
    const data = localStorage.getItem('zagy_carrito');
    if (data) {
        try { carritoDeCompras = JSON.parse(data); } catch (e) { carritoDeCompras = []; }
    }
}
function guardarFavoritos() {
    localStorage.setItem('zagy_favoritos', JSON.stringify(favoritos));
}
function cargarFavoritos() {
    const data = localStorage.getItem('zagy_favoritos');
    if (data) {
        try { favoritos = JSON.parse(data); } catch (e) { favoritos = []; }
    }
}

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

// Activar/desactivar botones categorias
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
    heroContainers.forEach(container => {
        container.classList.add('hidden');
        container.style.display = '';
        container.style.visibility = '';
    });
    const activeHero = document.getElementById(`hero-${categoria}`);
    if (activeHero) {
        activeHero.classList.remove('hidden');
        activeHero.style.display = 'block';
        activeHero.style.visibility = 'visible';

        // FIX CORAZON: doble reflow + resizeHandler para que Swiper recalcule ancho real
        void activeHero.offsetWidth;
        requestAnimationFrame(() => {
            void activeHero.offsetWidth;
            let swiperInstance = null;
            if (categoria === 'todos') swiperInstance = swiperTodos;
            else if (categoria === 'tecnologia') swiperInstance = swiperTecnologia;
            else if (categoria === 'hogar') swiperInstance = swiperHogar;

            if (swiperInstance) {
                swiperInstance.updateSize();
                swiperInstance.updateSlides();
                swiperInstance.update();
                swiperInstance.resize.resizeHandler();
                if (categoria === 'todos') swiperInstance.slideToLoop(0, 0);
                else swiperInstance.slideTo(0, 0);
            }
        });
    }
}

// ======================================================
// BADGES DE CANTIDAD SINCRONIZADOS
// ======================================================
function actualizarBadgeNavbar() {
    const totalItems = carritoDeCompras.reduce((sum, item) => sum + item.cantidad, 0);

    // 1. ESFERA ACTIVA (#btnCarrito) — fondo temu → badge BLANCO + stone-950
    const esferaCarrito = document.getElementById('btnCarrito');
    if (esferaCarrito) {
        const icono = esferaCarrito.querySelector('i');
        let badge = icono ? icono.querySelector('.navbar-carrito-badge') : null;
        if (totalItems > 0) {
            if (!badge && icono) {
                badge = document.createElement('span');
                badge.className = 'navbar-carrito-badge';
                badge.style.cssText = 'position:absolute;top:-6px;right:-6px;min-width:18px;height:18px;background:#0c0a09;color:#ffffff;font-size:10px;font-weight:bold;border-radius:9999px;display:flex;align-items:center;justify-content:center;padding:0 4px;z-index:60;pointer-events:none;';
                icono.style.position = 'relative';
                icono.appendChild(badge);
            }
            if (badge) {
                badge.textContent = totalItems;
                badge.style.display = 'flex';
            }
        } else if (badge) {
            badge.style.display = 'none';
        }
    }

    // 2. ICONO PREDETERMINADO (barra negra .textCarrito) — fondo stone-950 → badge TEMU + blanco
    const iconoPredeterminado = document.querySelector('.textCarrito');
    if (iconoPredeterminado) {
        let badge = iconoPredeterminado.querySelector('.navbar-carrito-badge');
        if (totalItems > 0) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'navbar-carrito-badge';
                badge.style.cssText = 'position:absolute;top:-8px;right:-8px;min-width:18px;height:18px;background:#FB7701;color:white;font-size:10px;font-weight:bold;border-radius:9999px;display:flex;align-items:center;justify-content:center;padding:0 4px;z-index:60;pointer-events:none;';
                iconoPredeterminado.style.position = 'relative';
                iconoPredeterminado.appendChild(badge);
            }
            badge.textContent = totalItems;
            badge.style.display = 'flex';
        } else if (badge) {
            badge.style.display = 'none';
        }
    }

    // 3. Desktop nav carrito
    const navDesktopCarrito = document.querySelector('.nav-desktop[data-nav="carrito"]');
    if (navDesktopCarrito) {
        let badge = navDesktopCarrito.querySelector('.navbar-carrito-badge');
        if (totalItems > 0) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'navbar-carrito-badge';
                badge.style.cssText = 'position:absolute;top:-4px;right:-8px;min-width:18px;height:18px;background:#FB7701;color:white;font-size:10px;font-weight:bold;border-radius:9999px;display:flex;align-items:center;justify-content:center;padding:0 4px;z-index:60;pointer-events:none;';
                navDesktopCarrito.style.position = 'relative';
                navDesktopCarrito.appendChild(badge);
            }
            badge.textContent = totalItems;
            badge.style.display = 'flex';
        } else if (badge) {
            badge.style.display = 'none';
        }
    }
}

function sincronizarBadgesCantidad() {
    document.querySelectorAll('.btn-agregar-carrito').forEach(btn => {
        const id = parseInt(btn.dataset.id);
        if (isNaN(id)) return;
        const item = carritoDeCompras.find(i => i.id === id);
        let badge = btn.querySelector('.cantidad-badge');

        if (item && item.cantidad > 0) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'cantidad-badge';
                badge.style.cssText = 'position:absolute;top:-6px;right:-6px;min-width:18px;height:18px;background:#FB7701;color:white;font-size:10px;font-weight:bold;border-radius:9999px;display:flex;align-items:center;justify-content:center;padding:0 4px;z-index:30;pointer-events:none;box-shadow:0 2px 6px rgba(251,119,1,0.4);';
                btn.appendChild(badge);
            }
            badge.textContent = item.cantidad;
            badge.style.display = 'flex';
        } else if (badge) {
            badge.style.display = 'none';
        }
    });

    actualizarBadgeNavbar();
}

// ======================================================
// FILTROS, VER MAS Y SWIPERS
// ======================================================
document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
    cargarFavoritos();

    const grid = document.getElementById('product-grid');
    const btnVerMas = document.getElementById('btn-ver-mas');

    swiperTodos = new Swiper('#swiper-todos', { loop: true, spaceBetween: 6, speed: 500, watchOverflow: false, pagination: { el: '.pagination-todos', clickable: true }, autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true } });
    swiperTecnologia = new Swiper('#swiper-tecnologia', { loop: true, spaceBetween: 6, speed: 500, watchOverflow: false, pagination: { el: '.pagination-tecnologia', clickable: true }, autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true } });
    swiperHogar = new Swiper('#swiper-hogar', { loop: true, spaceBetween: 6, speed: 500, watchOverflow: false, pagination: { el: '.pagination-hogar', clickable: true }, autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true } });

    // Copiar data attributes de slides a botones de carrito en heroes
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        const btn = slide.querySelector('.btn-epico');
        if (btn && slide.dataset.id) {
            const icono = btn.querySelector('i[class*="ri-shopping-cart"]');
            if (icono) {
                btn.classList.add('btn-agregar-carrito');
                btn.dataset.id = slide.dataset.id;
                btn.dataset.titulo = slide.dataset.titulo;
                btn.dataset.subtitulo = slide.dataset.subtitulo;
                btn.dataset.precio = slide.dataset.precio;
                btn.dataset.imagen = slide.dataset.imagen;
            }
        }
    });

    if (!grid) return;
    const cards = Array.from(grid.getElementsByTagName('article'));

    function getLimitByScreen() {
        const width = window.innerWidth;
        if (width >= 1280) return 15;
        if (width >= 1024) return 12;
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
            else { btnVerMas.style.display = 'block'; btnVerMas.textContent = showingAll ? 'Ver menos' : 'Ver mas'; }
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

    // Sincronizar UI con datos cargados de localStorage
    sincronizarCorazones();
    sincronizarBadgesCantidad();
    renderizarCarrito();



    // WhatsApp — Finalizar compra
    const btnFinalizar = document.querySelector('#btn-carrito button');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            if (carritoDeCompras.length === 0) {
                alert('Tu carrito esta vacio');
                return;
            }
            let mensaje = '%F0%9F%9B%92%20*Pedido%20ZAGY%20Tech*%0A%0A';
            let total = 0;
            carritoDeCompras.forEach(item => {
                mensaje += `%E2%80%A2%20*${encodeURIComponent(item.titulo)}*%20${encodeURIComponent(item.subtitulo)}%0A%20%20_Cantidad:_%20${item.cantidad}%0A%20%20_Precio%20unitario:_%20s/%20${item.precio.toFixed(2)}%0A%0A`;
                total += item.precio * item.cantidad;
            });
            mensaje += '%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%0A*Total%20a%20pagar:%20s/%20${total.toFixed(2)}*%0A%0A%C2%A1Gracias%20por%20tu%20compra!%20%F0%9F%99%8C';
            // CAMBIA ESTE NUMERO POR TU WHATSAPP REAL (codigo pais + numero, sin +)
            const telefono = '51900556685';
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
        });
    }
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
    guardarCarrito();
    renderizarCarrito();
    sincronizarBadgesCantidad();
}

function renderizarCarrito() {
    const contenedorItems = document.querySelector('#contenedor-items-carrito');
    const elementoTotal = document.querySelector('#precio-total-general');
    if (!contenedorItems) return;
    contenedorItems.innerHTML = '';
    if (carritoDeCompras.length === 0) {
        contenedorItems.innerHTML = `<p class="font-Inter text-xs text-stone-500 py-4 px-2">Tu carrito esta vacio.</p>`;
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
                        <button onclick="cambiarCantidad(${item.id}, -1)" class="bg-transparent cursor-pointer rounded-4xl size-5 text-temu flex items-center justify-center">-</button>
                        <div class="flex flex-col items-center justify-center"><p class="leading-3 text-xs">${item.cantidad}</p><p class="text-xs">Añadidos</p></div>
                        <button onclick="cambiarCantidad(${item.id}, 1)" class="bg-transparent cursor-pointer rounded-4xl size-5 text-temu flex items-center justify-center">+</button>
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
        guardarCarrito();
        renderizarCarrito();
        sincronizarBadgesCantidad();
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
    guardarFavoritos();
    sincronizarCorazones();
    renderizarFavoritos();
}

function sincronizarCorazones() {
    const idsFavoritos = favoritos.map(f => f.id);
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
// GESTION DE VISTAS (TIENDA VS CARRITO VS FAVORITOS)
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

    // Nav superior COMPLETO (logo + buscador + iconos desktop) y su separador
    const navSuperior = document.querySelector('nav');
    const separadorSuperior = navSuperior ? navSuperior.nextElementSibling : null;

    if (vista === 'carrito') {
        heros.forEach(hero => { hero.classList.add('hidden'); hero.style.display = 'none'; });
        if (productos) productos.classList.add('hidden');
        if (navCategorias) navCategorias.classList.add('hidden');
        if (btnMas) btnMas.classList.add('hidden');
        if (favoritosSection) favoritosSection.classList.add('hidden');
        if (carritoSection) carritoSection.classList.remove('hidden');
        if (btnCarritoFlotante) btnCarritoFlotante.classList.remove('hidden');
        if (separadorNav) separadorNav.classList.add('hidden');
        // Ocultar nav superior COMPLETO en movil/tablet (quita el espacio vacio)
        if (navSuperior) navSuperior.classList.add('max-lg:hidden');
        if (separadorSuperior) separadorSuperior.classList.add('max-lg:hidden');
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
        // Ocultar nav superior COMPLETO en movil/tablet (quita el espacio vacio)
        if (navSuperior) navSuperior.classList.add('max-lg:hidden');
        if (separadorSuperior) separadorSuperior.classList.add('max-lg:hidden');
    } else {
        heros.forEach(hero => {
            hero.style.display = '';
            hero.style.visibility = '';
        });
        showHero(categoriaActual);
        if (productos) productos.classList.remove('hidden');
        if (navCategorias) navCategorias.classList.remove('hidden');
        if (btnMas) btnMas.classList.remove('hidden');
        if (carritoSection) carritoSection.classList.add('hidden');
        if (btnCarritoFlotante) btnCarritoFlotante.classList.add('hidden');
        if (favoritosSection) favoritosSection.classList.add('hidden');
        if (separadorNav) separadorNav.classList.remove('hidden');
        // Mostrar nav superior completo en movil/tablet
        if (navSuperior) navSuperior.classList.remove('max-lg:hidden');
        if (separadorSuperior) separadorSuperior.classList.remove('max-lg:hidden');
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

    if (key === 'carrito') { gestionarVista('carrito'); }
    else if (key === 'favoritos') { gestionarVista('favoritos'); }
    else if (key === 'inicio') {
        // Solo Inicio resetea y vuelve a la tienda
        categoriaActual = 'todos';
        showingAll = false;
        const btnTodos = document.querySelector('[data-categoria="todos"]');
        if (btnTodos) setActiveCategory(btnTodos);
        gestionarVista('tienda');
    }
    // Usuario y Categorias no hacen nada funcional (solo el navbar visual cambia)

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

activateNav('inicio');

// ======================================================
// BOTON EPICO UNIVERSAL + CONTADOR CARRITO (DECORATIVO)
// ======================================================
// Este contador cuenta clicks, NO productos reales.
// Para el contador REAL de productos, ver: sincronizarBadgesCantidad()
//
// PERSONALIZACION DEL BADGE DECORATIVO:
// - Color fondo: cambia 'background:#FB7701'
// - Color texto: cambia 'color:white'
// - Tamaño: cambia 'width' y 'height'
// - Posicion: cambia 'top' y 'right'
// - Fuente: cambia 'font-size'
//
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-epico');
    if (!btn) return;
    e.stopPropagation();

    // Solo crear contador de clicks en botones que NO son de agregar carrito
    const iconoCarrito = btn.querySelector('i[class*="ri-shopping-cart"]');
    if (iconoCarrito && !btn.classList.contains('btn-agregar-carrito')) {
        let badge = btn.querySelector('.carrito-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'carrito-badge';
            // ===== PERSONALIZA EL ESTILO DEL BADGE AQUI =====
            badge.style.cssText = `
                position: absolute;
                top: -6px;
                right: -6px;
                min-width: 18px;
                height: 18px;
                background: #FB7701;
                color: white;
                font-size: 10px;
                font-weight: bold;
                border-radius: 9999px;
                border:none;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 4px;
                z-index: 30;
                pointer-events: none;
                box-shadow: 0 2px 6px rgba(251,119,1,0.4);
            `;
            // =================================================
            btn.style.position = 'relative';
            btn.appendChild(badge);
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
// BOTON PRECIO UNIVERSAL
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

// LOGO
document.getElementById('logo-zagy').addEventListener('click', () => {
    activateNav('inicio');
});