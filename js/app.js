"use strict";

// ======================================================
// BASE DE DATOS DE PRODUCTOS
// ======================================================
// INSTRUCCIONES PARA ONII-CHAN:
// 1. Cada producto tiene un array "imagenes" con las rutas de sus fotos.
// 2. El array "videos" es para archivos locales (.mp4, .webm).
//    Si no tiene videos, déjalo vacío: videos: []
// 3. "collageOrder" controla el ORDEN de las imágenes en el grid collage.
//    Ej: collageOrder: [2, 0, 1, 3] → primero muestra imagen índice 2, luego 0, etc.
// 4. "relacionados" son los IDs de otros productos que aparecen en "Explora más".
// 5. Agrega más productos copiando la estructura y cambiando el id.
// ======================================================


const productosDB = [
    {
        // =================================================
        // =========== 01 ALBUM PANINI ================
        // =================================================
        id: 1,
        titulo: "Álbum Tapa Dura",
        subtitulo: "PANINI - Mundial 2026",
        precio: 45.00,
        precioOriginal: 77.91,      // null si NO hay descuento
        descuento: 33,              // % de descuento (0 si no hay)
        disponible: 7,
        marca: "PANINI",
        estilo: "Mundial 2026",
        categoria: "albums",
        // ─── IMÁGENES DEL PRODUCTO ───
        // Agrega aquí todas las fotos que quieras mostrar en la galería
        imagenes: [
            "assets/06 mundial.webp",
            "assets/06 mundial-2.webp",   // ← Onii-chan: reemplaza con tus fotos
            "assets/06 mundial-3.webp",
            "assets/06 mundial-4.webp",
            // "assets/06 mundial-5.webp", // descomenta para agregar más
        ],
        // ─── VIDEOS LOCALES ───
        // Agrega aquí tus archivos .mp4 o .webm
        videos: [
            // "assets/videos/album-mundial.mp4", // ← Onii-chan: descomenta y pon tu video
        ],
        // ─── ORDEN DEL GRID COLLAGE ───
        // Controla qué imagen va en cada posición del collage.
        // Los números son los índices del array "imagenes" de arriba.
        collageOrder: [0, 2, 1, 3],
        // ─── TEXTOS LARGOS (por idioma) ───

        tituloLargo: {
            es: "Álbum oficial de la FIFA World Cup 2026 edición tapa dura. Incluye 80 páginas a full color con todos los equipos clasificados, jugadores estrella y estadísticas exclusivas. Tapa reforzada con acabado brillante. Edición coleccionista limitada con stickers holográficos incluidos.",
            en: "Official FIFA World Cup 2026 hardcover album. Includes 80 full-color pages with all qualified teams, star players and exclusive statistics. Reinforced cover with glossy finish. Limited collector's edition with holographic stickers included.",
            qu: "FIFA World Cup 2026 album oficial. 80 páginas color nisqan, tukuy equipokuna, star jugadorkuna. Tapa fuerte. Coleccionista edición limitada.",
        },

        detalles: {
            es: "Álbum oficial de la FIFA World Cup 2026 edición tapa dura. Incluye 80 páginas a full color con todos los equipos clasificados, jugadores estrella y estadísticas exclusivas. Tapa reforzada con acabado brillante.",
            en: "Official FIFA World Cup 2026 hardcover album. Includes 80 full-color pages with all qualified teams, star players and exclusive statistics. Reinforced cover with glossy finish.",
            qu: "FIFA World Cup 2026 album oficial. 80 páginas color nisqan, tukuy equipokuna, star jugadorkuna. Tapa fuerte.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren\n✓ S/10 por Envío a domicilio o Provincia\nEntrega: 10 am - 9 pm",
            en: "✓ Free shipping at Train Stations\n✓ S/10 for Home or Province Delivery\nDelivery: 10 am - 9 pm",
            qu: "✓ Libre chaski Tren Estaciones\n✓ S/10 wasi chaski\nChayay: 10 am - 9 pm",
        },
        garantia: {
            es: "✓ Pagos seguros mediante Yape, Plin, Efectivo o Transferencias.\n✓ Paga cuando recibas tu producto.\n✓ Puedes probar tu producto sin compromiso en un lugar público.\n✓ Coordinamos tu entrega en la brevedad posible.",
            en: "✓ Secure payments\n✓ Pay when you receive your product\n✓ Secure privacy\n✓ We coordinate your delivery as soon as possible",
            qu: "✓ Seguro pagokuna\n✓ Chaskispay paga\n✓ Seguro privacidad",
        },
        donacion: {
            es: "Ayúdanos para poder llevarle un bonito regalo a los niños por esta Navidad y un delicioso compartir.",
            en: "Help us bring a nice gift to children this Christmas and a delicious sharing moment.",
            qu: "Yanapayku churay regalo wawakunaman Navidad p'unchaypi.",
        },
        // ─── PRODUCTOS RELACIONADOS (Explora más) ───
        // IDs de otros productos que quieres mostrar al final
        relacionados: [18, 4, 6, 11, 2, 3],
    },
    {
        // =================================================
        // =========== 18 FIGURA ALBEDO ================
        // =================================================
        id: 18,
        titulo: "Figura de Albedo",
        subtitulo: "35x50 cm",
        precio: 51.87,
        precioOriginal: 77.91,
        descuento: 33,
        disponible: 7,
        marca: "Marca: BANDAI",
        estilo: "Albedo",
        categoria: "figuras",
        imagenes: [
            "assets/35 FIGURA ALBEDO/01.avif",
            "assets/35 FIGURA ALBEDO/02.avif",   // ← Onii-chan: pon tus fotos aquí
            "assets/35 FIGURA ALBEDO/03.avif",
            "assets/35 FIGURA ALBEDO/04.avif",
            "assets/35 FIGURA ALBEDO/05.avif",
            "assets/35 FIGURA ALBEDO/06.jpg",
            "assets/35 FIGURA ALBEDO/07.avif",
            "assets/35 FIGURA ALBEDO/08.avif",
            "assets/35 FIGURA ALBEDO/09.jpg",
            "assets/35 FIGURA ALBEDO/10.jpg",
            "assets/35 FIGURA ALBEDO/11.jpg",
            "assets/35 FIGURA ALBEDO/12.jpg",
            "assets/35 FIGURA ALBEDO/13.webp",
            "assets/35 FIGURA ALBEDO/14.jpg",
            "assets/35 FIGURA ALBEDO/15.webp",
            "assets/35 FIGURA ALBEDO/16.avif",
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4",
            "assets/35 FIGURA ALBEDO/17.webm",
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [
            "assets/35 FIGURA ALBEDO/09.jpg",   // ← portada del video 17.webm
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { nombre: "Albedo", imagen: "assets/01 albedo.avif", color: "Estándar" },
        { nombre: "Albedo Dark", imagen: "assets/35 FIGURA ALBEDO/09.jpg", color: "Negro" },
        { nombre: "Albedo Gold", imagen: "assets/35 FIGURA ALBEDO/13.webp", color: "Dorado" },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],


        tituloLargo: {
            es: "Figura de Anime de Albedo del anime Overlord en Pose de Batalla. Estatua de 24cm/9.45 pulgadas con accesorios. Adorno de Escritorio, Regalo Coleccionable para Fans. Material de alta calidad PVC con pintura detallada y base decorativa incluida.",
            en: "Anime Figure of Albedo from Overlord in Battle Pose. 24cm/9.45 inches statue with accessories. Desktop Ornament, Collectible Gift for Fans. High quality PVC material with detailed paint and decorative base included.",
            qu: "Albedo figura anime Overlord. 24cm estatua, accesorios nisqan. Wasi adorno, coleccionista regalo. PVC materia alta calidad, pintura detallada.",
        },

        detalles: {
            es: "Figura de Anime de Albedo del anime Overlord en Pose de Batalla. Estatua de 24cm/9.45 pulgadas con accesorios. Adorno de Escritorio, Regalo Coleccionable para Fans.",
            en: "Anime Figure of Albedo from Overlord in Battle Pose. 24cm/9.45 inches statue with accessories. Desktop Ornament, Collectible Gift for Fans.",
            qu: "Albedo figura anime Overlord. 24cm estatua, accesorios nisqan.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren\n✓ S/10 por Envío a domicilio o Provincia",
            en: "✓ Free shipping at Train Stations\n✓ S/10 for Home Delivery",
            qu: "✓ Libre chaski Tren Estaciones\n✓ S/10 wasi chaski",
        },
        garantia: {
            es: "✓ Pagos seguros mediante Yape, Plin, Efectivo o Transferencias.\n✓ Paga cuando recibas tu producto.\n✓ Prueba tu producto sin compromiso en un lugar público.\n✓ Coordinamos tu entrega en la brevedad posible.",
            en: "✓ Secure payments\n✓ Pay when you receive your product\n✓ Secure privacy\n✓ We coordinate your delivery as soon as possible",
            qu: "✓ Seguro pagokuna\n✓ Chaskispay paga\n✓ Seguro privacidad",
        },
        donacion: {
            es: "Ayúdanos para poder llevarle un bonito regalo a los niños por esta Navidad.",
            en: "Help us bring a nice gift to children this Christmas.",
            qu: "Yanapayku wawakunaman regalo churay.",
        },
        relacionados: [1, 4, 6, 11, 12, 9],
    },
    // ═══════════════════════════════════════════════════════
    // ONII-CHAN: COPIA Y PEGA EL BLOQUE DE ARRIBA PARA AGREGAR MÁS PRODUCTOS.
    // Solo cambia el id, los textos, las rutas de imágenes y videos.
    // ═══════════════════════════════════════════════════════
];

// Helper para obtener un producto por ID
function getProducto(id) {
    return productosDB.find(p => p.id === id) || null;
}










/////////////////////////////////////////////////////////////////////////////////////

function extractBgClass(el) {
    if (!el) return 'bg-puro';
    const match = el.className.match(/bg-[\w-]+/);
    return match ? match[0] : 'bg-puro';
}
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
        try { 
            carritoDeCompras = JSON.parse(data); 
            carritoDeCompras.forEach(item => {
                if (!item.cartId) {
                    item.cartId = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
                }
            });
        } catch (e) { carritoDeCompras = []; }
    }
}
function guardarFavoritos() {
    localStorage.setItem('zagy_favoritos', JSON.stringify(favoritos));
}
function cargarFavoritos() {
    const data = localStorage.getItem('zagy_favoritos');
    if (data) {
        try { 
            favoritos = JSON.parse(data); 
            // Si un favorito antiguo no tiene clsProducto, lo buscamos en el DOM y copiamos todo
            favoritos.forEach(f => {
                if (!f.clsProducto) {
                    const card = document.querySelector(`article[data-id="${f.id}"]`);
                    if (card) {
                        const getCls = (sel) => {
                            const el = card.querySelector(sel);
                            return el ? el.className : '';
                        };
                        f.clsProducto      = getCls('.cardProducto');
                        f.clsProductoInner = getCls('.cardProductoInner');
                        f.clsInfo          = getCls('.cardInfo');
                        f.clsInfoInner     = getCls('.cardInfoInner');
                        f.clsBtnFav        = getCls('.btn-favorito');
                        f.clsBtnPrecio     = getCls('div.btn-precio');
                        f.clsBtnCarrito    = getCls('.btn-agregar-carrito');
                        
                        const dotsBtn = card.querySelector('button.btn-precio');
                        f.clsBtnDots = dotsBtn ? dotsBtn.className : '';
                        f.dotsHTML   = dotsBtn ? dotsBtn.innerHTML : '';
                        const infoInner = card.querySelector('.cardInfoInner');
                        if (infoInner) {
                            const ps = infoInner.querySelectorAll('p');
                            f.clsTitle    = ps[0] ? ps[0].className : '';
                            f.clsSubtitle = ps[1] ? ps[1].className : '';
                        }
                    }
                }
            });
        } catch (e) { favoritos = []; }
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
        btn.classList.remove('bg-stone-950', 'dark:bg-temu'); btn.classList.add('bg-puro', 'dark:bg-stone-800', 'hover:bg-plomo', 'dark:hover:bg-stone-900');
        if (text) { text.classList.remove('text-white', 'dark:text-white/90'); text.classList.add('text-stone-950', 'dark:text-white/50'); }
    });
    clickedBtn.classList.remove('bg-puro', 'dark:bg-stone-800', 'border', 'border-stone-950', 'hover:bg-plomo', 'dark:hover:bg-stone-900' ); clickedBtn.classList.add('bg-stone-950', 'dark:bg-temu');
    const activeText = clickedBtn.querySelector('p');
    if (activeText) { activeText.classList.remove('text-stone-950', 'dark:text-white/50'); activeText.classList.add('text-white', 'dark:text-white/90'); }
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
        
        // 🔥 SUMA TODAS LAS VARIANTES DEL MISMO PRODUCTO
        const totalCantidad = carritoDeCompras
            .filter(i => i.id === id)
            .reduce((sum, i) => sum + i.cantidad, 0);
        
        let badge = btn.querySelector('.cantidad-badge');

        if (totalCantidad > 0) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'cantidad-badge';
                badge.style.cssText = 'position:absolute;top:-6px;right:-6px;min-width:18px;height:18px;background:#FB7701;color:white;font-size:10px;font-weight:bold;border-radius:9999px;display:flex;align-items:center;justify-content:center;padding:0 4px;z-index:30;pointer-events:none;box-shadow:0 2px 6px rgba(251,119,1,0.4);';
                btn.appendChild(badge);
            }
            badge.textContent = totalCantidad;
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
        if (window.filtrandoBusqueda) return;  // <-- PEGA ESTA LÍNEA
        
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
            else { btnVerMas.style.display = 'block';
            btnVerMas.textContent = showingAll ? _t().verMenos : _t().verMas;
            }
        }
    }

    catButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            categoriaActual = e.currentTarget.getAttribute('data-categoria') || 'todos';
            showingAll = false;
            showHero(categoriaActual);
            updateDisplay();
            scrollToCategory(e.currentTarget);
            if (panelCategorias && !panelCategorias.classList.contains('hidden')) {
                sincronizarEsferasPanel();
            }
            
            // 🔥 PushState para categoría
            if (appInicializada) {
                history.pushState(
                    { vista: 'tienda', categoria: categoriaActual, showingAll: false },
                    '',
                    '#categoria-' + categoriaActual
                );
            }
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

    window.updateDisplayRef = updateDisplay;



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
// ======================================================
// FLY TO CART (efecto Temu)
// ======================================================
function getDestinoCarrito() {
    // Desktop: icono del nav superior
    const navDesktop = document.querySelector('.nav-desktop[data-nav="carrito"]');
    if (navDesktop && navDesktop.offsetParent !== null) {
        return navDesktop.querySelector('i') || navDesktop;
    }
    // Móvil: icono de carrito en la bottom nav
    const bottomCarrito = document.querySelector('.textCarrito');
    if (bottomCarrito && bottomCarrito.offsetParent !== null) {
        return bottomCarrito;
    }
    return null;
}

function animarFlyToCart(btnOrigen, imagenUrl) {
    const destino = getDestinoCarrito();
    if (!destino || !btnOrigen) return;

    const rectOrigen = btnOrigen.getBoundingClientRect();
    const rectDestino = destino.getBoundingClientRect();

    const size = 36;
    const startX = rectOrigen.left + rectOrigen.width / 2 - size / 2;
    const startY = rectOrigen.top + rectOrigen.height / 2 - size / 2;
    const endX   = rectDestino.left + rectDestino.width / 2 - size / 2;
    const endY   = rectDestino.top + rectDestino.height / 2 - size / 2;

    const tx = endX - startX;
    const ty = endY - startY;

    // Crear el "fantasmita"
    const ghost = document.createElement('div');
    ghost.className = 'fly-to-cart-ghost';
    ghost.style.left = startX + 'px';
    ghost.style.top  = startY + 'px';

    if (imagenUrl) {
        const img = document.createElement('img');
        img.src = imagenUrl;
        ghost.appendChild(img);
    }

    document.body.appendChild(ghost);

    // Animar con Web Animations API (arco hacia arriba)
    const anim = ghost.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${tx * 0.25}px, ${ty * 0.25 - 55}px) scale(1.1)`, opacity: 1, offset: 0.25 },
        { transform: `translate(${tx}px, ${ty}px) scale(0.1)`, opacity: 0 }
    ], {
        duration: 580,
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
    });

    anim.onfinish = () => {
        ghost.remove();

        // Bounce en el icono de carrito destino
        destino.classList.remove('icono-llegada');
        void destino.offsetWidth;
        destino.classList.add('icono-llegada');
        setTimeout(() => destino.classList.remove('icono-llegada'), 400);

        // Pop en el badge si existe
        const badge = destino.querySelector('.navbar-carrito-badge, .cantidad-badge');
        if (badge) {
            badge.classList.remove('badge-pop-llegada');
            void badge.offsetWidth;
            badge.classList.add('badge-pop-llegada');
            setTimeout(() => badge.classList.remove('badge-pop-llegada'), 350);
        }
    };
}

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
    // 🔥 SI VIENE UNA VARIANTE DESDE FAVORITOS, LA PASAMOS AL CARRITO
    if (btnCircular.dataset.variante) {
        try { producto.variante = JSON.parse(btnCircular.dataset.variante); } catch(e) {}
    }
    agregarAlCarrito(producto);
    animarFlyToCart(btnCircular, producto.imagen);
});

function agregarAlCarrito(producto) {
    const index = carritoDeCompras.findIndex(item => 
        item.id === producto.id && 
        (item.variante?.valor || '') === (producto.variante?.valor || '')
    );
    
    if (index !== -1) {
        carritoDeCompras[index].cantidad += 1;
    } else {
        carritoDeCompras.push({ 
            ...producto, 
            cantidad: 1, 
            cartId: Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
        });
    }
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
        contenedorItems.innerHTML = `<p class="font-Inter text-xs text-stone-500 py-0 px-2">${_t().carritoVacio}.</p>`;
        if (elementoTotal) elementoTotal.innerHTML = `s/ 0.<span class="text-xl font-Russo">00</span>`;
        return;
    }
    let precioTotalGeneral = 0;
    carritoDeCompras.forEach(item => {
        const subtotalItem = item.precio * item.cantidad;
        precioTotalGeneral += subtotalItem;
        
        const subtotalStr = subtotalItem.toFixed(2);
// Si el número es muy largo, baja el tamaño para que no rompa la línea
const subSizeClass = subtotalStr.length > 7 ? 'text-sm' : 'text-lg';

// Reemplaza el botón de "Color: Estandar" en renderizarCarrito por:
const varianteTexto = item.variante 
    ? `${item.variante.tipo}: ${item.variante.valor}` 
    : 'Color: Estándar';

const articleHTML = `
    <div class="swipe-wrapper shadow-lg shadow-stone-400 dark:shadow-temu/0 relative rounded-xl" data-swipe-id="${item.cartId}">
        <!-- Botón rojo que aparece al deslizar -->
        <div class="swipe-delete-btn absolute right-0 top-0 bottom-0 w-20 flex items-center justify-center z-0 cursor-pointer rounded-r-xl">
            <i class="ri-delete-bin-6-line text-white text-xl"></i>
        </div>

        <!-- Card principal (se desliza) -->
        <article class="card-swipe relative z-10 flex gap-3 py-2 rounded-xl justify-between" data-id="${item.id}" data-titulo="${item.titulo}" data-subtitulo="${item.subtitulo}">
            <article class="flex gap-3 min-w-0">
                <div class="size-20 ml-2 rounded-lg overflow-hidden shrink-0 cursor-pointer" onclick="event.stopPropagation(); abrirDetalleProducto(${item.id})">
                    <img src="${item.imagen}" alt="" class="w-full h-full object-cover pointer-events-none">
                </div>
                <div class="flex flex-col items-start justify-center gap-1 min-w-0">
                    <div>
                        <p class="font-Inter font-medium text-xs truncate w-full dark:text-temu">${item.titulo}</p>
                        <p class="font-Inter font-medium text-xs truncate w-ful dark:text-temu">${item.subtitulo}</p>
                    </div>
                    <button class="h-6 w-30 bg-verdeTemu3 dark:bg-stone-800 rounded-4xl flex justify-center items-center text-xs font-semibold text-white dark:text-verdeTemu2">
                        ${varianteTexto}
                    </button>
                    <p class="text-xs font-bold font-MontAlternates dark:text-stone-500">s/ ${item.precio.toFixed(2)}</p>
                </div>
            </article>

            <div class="flex flex-col justify-start items-end mr-2 mt-6 shrink-0">
                <!-- s/ y número juntos, nunca se rompen, se encojen si es necesario -->
                <p class="${subSizeClass} text-temu font-Russo pr-1 leading-3 whitespace-nowrap">s/ ${subtotalStr}</p>
                <div class="flex justify-center items-center h-5 w-15 rounded-4xl bg-stone-950 dark:bg-stone-800 gap-2 text-white dark:text-white/70 font-semibold mt-5">
                    <button onclick="cambiarCantidad('${item.cartId}', -1)" class="bg-transparent cursor-pointer rounded-4xl size-5 flex items-center justify-center">-</button>
                    <div class="flex flex-col items-center justify-center">
                        <p class="leading-3 text-xs">${item.cantidad}</p>
                    </div>
                    <button onclick="cambiarCantidad('${item.cartId}', 1)" class="bg-transparent cursor-pointer rounded-4xl size-5 flex items-center justify-center">+</button>
                </div>
            </div>

            <!-- Tachito de la esquina superior derecha (click directo) -->
            <div class="btn-tachito bg-temu h-5 w-7 absolute top-0 right-0 rounded-bl-xl flex justify-center items-center text-white cursor-pointer z-20" onclick="eliminarArticulo('${item.cartId}')">
                <i class="ri-delete-bin-6-line text-xs pl-1"></i>
            </div>
        </article>
    </div>`;
        
        contenedorItems.innerHTML += articleHTML;
    });
    
    const precioStr = precioTotalGeneral.toFixed(2);
const [entero, decimal] = precioStr.split('.');
const totalChars = precioStr.length;

// Si el número es muy largo, reduce el tamaño para que no rompa el layout
let totalSizeClass = 'text-3xl';
let decimalSizeClass = 'text-xl';
if (totalChars > 9) {
    totalSizeClass = 'text-xl';
    decimalSizeClass = 'text-base';
} else if (totalChars > 7) {
    totalSizeClass = 'text-2xl';
    decimalSizeClass = 'text-lg';
}

if (elementoTotal) {
    elementoTotal.innerHTML = `<span class="font-Russo ${totalSizeClass} whitespace-nowrap">s/ ${entero}.<span class="${decimalSizeClass} font-Russo">${decimal}</span></span>`;
}
    
    // ¡IMPORTANTE! Inicializar el swipe después de pintar
    initSwipeDelete();
}

function cambiarCantidad(cartId, delta) {
    const index = carritoDeCompras.findIndex(item => item.cartId === cartId);
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
    let index;
    if (producto.variante) {
        // Detalle con estilo alternativo o card de favoritos con variante
        index = favoritos.findIndex(f => 
            f.id === producto.id && 
            f.variante?.valor === producto.variante.valor
        );
    } else if (producto.esBase) {
        // Detalle con estilo base o card de favoritos base
        index = favoritos.findIndex(f => f.id === producto.id && !f.variante);
    } else {
        // Grid: buscar por id (cualquiera, comportamiento anterior de "uno por uno")
        index = favoritos.findIndex(f => f.id === producto.id);
    }
    
    if (index !== -1) { 
        favoritos.splice(index, 1); 
    }
    else { 
        const card = document.querySelector(`article[data-id="${producto.id}"]`);
        if (card) {
            const getCls = (sel) => {
                const el = card.querySelector(sel);
                return el ? el.className : '';
            };
            
            producto.clsProducto      = getCls('.cardProducto');
            producto.clsProductoInner = getCls('.cardProductoInner');
            producto.clsInfo          = getCls('.cardInfo');
            producto.clsInfoInner     = getCls('.cardInfoInner');
            producto.clsBtnFav        = getCls('.btn-favorito');
            producto.clsBtnPrecio     = getCls('div.btn-precio');
            producto.clsBtnCarrito    = getCls('.btn-agregar-carrito');

            const carritoIcon = card.querySelector('.btn-agregar-carrito i');
            producto.clsCarritoIcon = carritoIcon ? carritoIcon.className : '';

            const imgProducto = card.querySelector('.cardProductoInner img');
            producto.clsImgProducto = imgProducto ? imgProducto.className : '';
            
            const dotsBtn = card.querySelector('button.btn-precio');
            producto.clsBtnDots = dotsBtn ? dotsBtn.className : '';
            producto.dotsHTML   = dotsBtn ? dotsBtn.innerHTML : '';
            
            const infoInner = card.querySelector('.cardInfoInner');
            if (infoInner) {
                const ps = infoInner.querySelectorAll('p');
                producto.clsTitle    = ps[0] ? ps[0].className : '';
                producto.clsSubtitle = ps[1] ? ps[1].className : '';
            }
        }
        favoritos.push(producto); 
    }
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
        <article class="w-[172px] h-[254px] relative sm:w-[234px] sm:h-[381px]" data-id="${item.id}" data-titulo="${item.titulo}" data-subtitulo="${item.variante ? item.variante.tipo + ': ' + item.variante.valor : item.subtitulo}" data-imagen="${item.imagenVariante || item.imagen}" ${item.variante ? `data-variante='${JSON.stringify(item.variante)}'` : ''}>
            <div class="${item.clsProducto || 'absolute inset-0 bg-stone-950 dark:bg-temu cardProducto'}"></div>
            <div class="${item.clsProductoInner || 'w-[172px] h-52.5 bg-white dark:bg-stone-900 cardProductoInner absolute inset-0 overflow-hidden border border-stone-950 dark:border-temu sm:w-[234px] sm:h-78.75'}">
                <img src="${item.imagenVariante || item.imagen}" alt="" class="${item.clsImgProducto || 'w-full h-full object-cover object-[50%_70%] sm:object-[50%_60%]'}">
            </div>
            <button class="${item.clsBtnFav || 'btn-favorito absolute top-1.5 right-1.5 z-20 size-6 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 sm:size-9 sm:top-2 sm:right-2'} activo">
                <i class="ri-heart-fill text-sm text-stone-950 dark:text-white/20 transition-colors duration-200 sm:text-lg"></i>
            </button>
            <div class="${item.clsBtnPrecio || 'w-18 h-6 absolute top-0.5 left-2.25 bg-puro dark:bg-stone-800 dark:text-temu dark:border dark:border-stone-800 rounded-br-xl rounded-tl-xl flex items-center justify-center cursor-pointer btn-precio sm:w-27 sm:h-9 sm:top-0.75 sm:left-[13.5px] sm:rounded-br-[18px] sm:rounded-tl-[18px]'}">
                <p class="font-Russo text-xs pt-0.25 sm:text-base">s/ ${parseFloat(item.precio).toFixed(2)}</p>
            </div>
            <button class="${item.clsBtnCarrito || 'btn-agregar-carrito size-7 bg-stone-950 dark:bg-stone-800 absolute right-[2.5px] bottom-[28px] rounded-4xl z-10 flex justify-center items-center cursor-pointer transition-transform duration-300 btn-epico sm:size-10.5 sm:right-[3.75px] sm:bottom-[42px]'}"
            data-id="${item.id}" data-titulo="${item.titulo}" data-subtitulo="${item.subtitulo}" data-precio="${item.precio}" data-imagen="${item.imagenVariante || item.imagen}" ${item.variante ? `data-variante='${JSON.stringify(item.variante)}'` : ''}>
                <i class="${item.clsCarritoIcon || 'ri-shopping-cart-2-line text-white dark:text-temu text-[13px] pb-px pl-px sm:text-[19.5px] sm:pl-[0.5px] sm:pb-[1.5px]'}"></i>
            </button>
            <div class="${item.clsInfo || 'absolute bg-stone-950 dark:bg-temu bottom-0 cardInfo w-[172px] h-10 sm:w-[234px] sm:h-15'}"></div>
            <div class="${item.clsInfoInner || 'w-[172px] h-10 absolute bottom-0 bg-puro dark:bg-stone-900 dark:text-temu cardInfoInner flex flex-col justify-center border border-stone-950 dark:border-temu sm:w-[234px] sm:h-15'}">
                <p class="${item.clsTitle || 'font-Inter text-xs font-extrabold pl-3 w-34 cursor-default sm:w-51 sm:text-base sm:leading-none sm:pl-4.5 sm:pt-0.25'}">${item.titulo}</p>
                <p class="${item.clsSubtitle || 'font-Inter text-xs font-extrabold pl-3 w-34 cursor-default sm:w-51 sm:text-base sm:mt-0.5 sm:pl-4.5'}">${item.variante ? item.variante.tipo + ': ' + item.variante.valor : item.subtitulo}</p>
            </div>
            ${item.clsBtnDots ? `<button class="${item.clsBtnDots}">${item.dotsHTML || ''}</button>` : ''}
        </article>`;
    
        grid.insertAdjacentHTML('beforeend', cardHTML);

         // 🔥 PINTAR BADGES EN LAS CARDS RECIÉN CREADAS
        sincronizarBadgesCantidad();
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
        const varianteAttr = card.getAttribute('data-variante');
        const esCardFavoritosBase = card.closest('#favoritos-grid') && !varianteAttr;
        
        if (varianteAttr) {
            try { producto.variante = JSON.parse(varianteAttr); } catch(e) {}
        } else if (esCardFavoritosBase) {
            producto.esBase = true;
        }
        // Si es grid sin variante: no poner nada, toggleFavorito busca por id (como antes)
        
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
          // OCULTAR NAV SUPERIOR EN MÓVIL/TABLET
        const navSup = document.querySelector('nav');
        const sepSup = navSup?.nextElementSibling;
        if (navSup) navSup.classList.add('max-lg:hidden');
        if (sepSup) sepSup.classList.add('max-lg:hidden');
        if (favoritosSection) favoritosSection.classList.remove('hidden');
        if (separadorNav) separadorNav.classList.add('hidden');
        renderizarFavoritos();
        // Ocultar nav superior COMPLETO en movil/tablet (quita el espacio vacio)
        if (navSuperior) navSuperior.classList.add('max-lg:hidden');
        if (separadorSuperior) separadorSuperior.classList.add('max-lg:hidden');
    } else {
        // Cerrar detalle si está abierto al volver a tienda
        const detalleSection = document.getElementById('producto-detalle');
        if (detalleSection && !detalleSection.classList.contains('hidden')) {
            detalleSection.classList.add('hidden');
        }
        
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

        // OCULTAR NAV SUPERIOR EN MÓVIL/TABLET AL ENTRAR AL DETALLE
        const navSup = document.querySelector('nav');
        const sepSup = navSup?.nextElementSibling;
        if (navSup) navSup.classList.add('max-lg:hidden');
        if (sepSup) sepSup.classList.add('max-lg:hidden');

    // 🔥 ESTO ES LO QUE FALTABA: LIMPIAR CUALQUIER TRANSFORM BASURA
        if (favoritosSection) favoritosSection.classList.add('hidden');
        if (separadorNav) separadorNav.classList.remove('hidden');
        // Mostrar nav superior completo en movil/tablet
        if (navSuperior) navSuperior.classList.remove('max-lg:hidden');
        if (separadorSuperior) separadorSuperior.classList.remove('max-lg:hidden');
    }
}

function setNavMobileVisible(mostrar) {
    const nav = document.querySelector('nav');
    const sep = nav?.nextElementSibling;
    if (!nav || window.innerWidth >= 1024) return;
    
    nav.style.transition = 'transform 0.35s ease, opacity 0.35s ease';
    nav.style.willChange = 'transform, opacity';
    
    if (mostrar) {
        nav.style.transform = 'translateY(0)';
        nav.style.opacity = '1';
        nav.style.pointerEvents = 'auto';
        if (sep) { sep.style.display = 'block'; sep.style.opacity = '1'; }
    } else {
        nav.style.transform = 'translateY(-120%)';
        nav.style.opacity = '0';
        nav.style.pointerEvents = 'none';
        if (sep) { sep.style.opacity = '0'; setTimeout(() => sep.style.display = 'none', 300); }
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



// ======================================================
// NAVEGACIÓN NATIVA (History API)
// ======================================================
let appInicializada = false;

function getCurrentState() {
    const enCarrito = !document.getElementById('carrito-section').classList.contains('hidden');
    const enFavoritos = !document.getElementById('favoritos-section').classList.contains('hidden');
    const enDetalle = document.getElementById('producto-detalle') && !document.getElementById('producto-detalle').classList.contains('hidden');
    
    if (enDetalle && productoActualId) {
        return { detalleId: productoActualId, vistaAnterior: window._vistaAnterior || { vista: 'tienda', categoria: 'todos', showingAll: false } };
    }
    if (enCarrito) return { vista: 'carrito' };
    if (enFavoritos) return { vista: 'favoritos' };
    return { vista: 'tienda', categoria: categoriaActual, showingAll: showingAll };
}



let activeKey = 'inicio';

function activateNav(key, fromHistory = false, resetCategory = true) {
    // Cerrar detalle si vamos a una vista principal
    if (key !== 'usuario' && key !== 'categorias') {
        const detalleSection = document.getElementById('producto-detalle');
        if (detalleSection && !detalleSection.classList.contains('hidden')) {
            detalleSection.classList.add('hidden');
            document.querySelectorAll('#zoom-container video').forEach(v => {
                v.pause(); v.removeAttribute('src'); v.load(); v.remove();
            });
            document.querySelectorAll('#zoom-container #video-play-overlay').forEach(o => o.remove());
            const imgPrincipal = document.getElementById('img-principal');
            if (imgPrincipal) { imgPrincipal.style.display = 'block'; imgPrincipal.src = ''; }
        }
    }

    const config = navConfig[key];
    if (!config) return;

    if (key !== 'usuario') {
        const pu = document.getElementById('panel-usuario');
        if (pu) pu.classList.add('hidden');
    }
    if (key !== 'categorias') {
        const pc = document.getElementById('panel-categorias');
        if (pc) pc.classList.add('hidden');
    }

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
        if (icon) { icon.classList.remove('text-temu'); icon.classList.add('text-stone-950', 'dark:text-white/70'); }
        if (label) { label.classList.remove('text-temu', 'border-temu'); label.classList.add('text-stone-950', 'dark:text-white/70', 'border-transparent'); }
    });

    const activeDesktopBtn = document.querySelector(`.nav-desktop[data-nav="${key}"]`);
    if (activeDesktopBtn) {
        const activeIcon = activeDesktopBtn.querySelector('i');
        const activeLabel = activeDesktopBtn.querySelector('p');
        if (activeIcon) { activeIcon.classList.remove('text-stone-950', 'dark:text-white/70'); activeIcon.classList.add('text-temu'); }
        if (activeLabel) { activeLabel.classList.remove('text-stone-950', 'border-transparent', 'dark:text-white/70'); activeLabel.classList.add('text-temu', 'border-temu'); }
    }

    if (key === 'usuario') {
        togglePanelUsuario();
    }
    else if (key === 'categorias') {
        togglePanelCategorias();
    }
    
    if (key === 'carrito') { 
        gestionarVista('carrito'); 
    }
    else if (key === 'favoritos') { 
        gestionarVista('favoritos'); 
    }
    else if (key === 'inicio') {
        gestionarVista('tienda');

         // 🔥 LIMPIAR BÚSQUEDA AL VOLVER A INICIO
        if (btnCategoriaBusqueda) {
            eliminarCategoriaBusqueda(false);
        }
        // Limpiar input y cerrar dropdown
        const inputBuscar = document.getElementById('buscador');
        if (inputBuscar) inputBuscar.value = '';
        const dropdown = document.getElementById('sugerencias-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
        // Ocultar mensaje de resultados
        const msg = document.getElementById('search-results-msg');
        if (msg) msg.classList.add('hidden');

        if (resetCategory) {
            categoriaActual = 'todos';
            showingAll = false;
        }
        const btnCat = document.querySelector(`[data-categoria="${categoriaActual}"]`);
        if (btnCat) {
            setActiveCategory(btnCat);
        }
        showHero(categoriaActual);
        if (typeof updateDisplayRef === 'function') updateDisplayRef();
    }

    activeKey = key;

    // 🔥 PushState solo si no vino del historial y app ya inició
    if (!fromHistory && appInicializada && key !== 'usuario' && key !== 'categorias') {
        const state = getCurrentState();
        let hash = '';
        if (key === 'carrito') hash = '#carrito';
        else if (key === 'favoritos') hash = '#favoritos';
        else hash = '#';
        history.pushState(state, '', hash);
    }
}

Object.keys(navConfig).forEach(key => {
    // Click en el texto del navbar
    const btn = document.querySelector(navConfig[key].textSelector);
    if (btn) btn.addEventListener('click', () => activateNav(key));
    
    // Click en la ESFERA naranja (lo que el usuario realmente ve cuando está activo)
    const sphere = document.querySelector(navConfig[key].sphereId);
    if (sphere) {
        sphere.style.cursor = 'pointer';
        sphere.addEventListener('click', () => activateNav(key));
    }
});

document.querySelectorAll('.nav-desktop').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.nav;
        if (key) activateNav(key);
    });
});



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
    ripple.style.left = (e.clientX - size/2) + 'px';  // ← coordenadas del VIEWPORT
    ripple.style.top = (e.clientY - size/2) + 'px';   // ← no relativas al botón
    ripple.style.position = 'fixed';
    ripple.style.zIndex = '9999';
    document.body.appendChild(ripple);  // ← se pone en el body, no en el botón
    setTimeout(() => ripple.remove(), 10);
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
            ripple.style.left = (e.clientX - size/2) + 'px';  // ← VIEWPORT
            ripple.style.top = (e.clientY - size/2) + 'px';   // ← no relativas al botón
            ripple.style.position = 'fixed';
            ripple.style.zIndex = '9999';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 10);
        }
    } else {
        document.querySelectorAll('.btn-precio.activo').forEach(b => b.classList.remove('activo'));
    }
});

// LOGO
document.getElementById('logo-zagy').addEventListener('click', () => {
    activateNav('inicio');
});
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
// ==== FILTRO BUSCADOR ====
/////////////////////////////////////////////////////////////////
// document.addEventListener('keyup', e => {
//     if(e.target.matches('#buscador')) {
//         document.querySelectorAll('.producto-tienda').forEach(producto => {
//             producto.textContent.toLowerCase().includes(e.target.value)?
//             producto.classList.remove('filtro') : producto.classList.add('filtro');
//         })
//     }
// })

// ======================================================
// BÚSQUEDA COMO CATEGORÍA DINÁMICA
// ======================================================
let btnCategoriaBusqueda = null;
window.filtrandoBusqueda = false;

function mostrarSugerencias(query) {
    const dropdown = document.getElementById('sugerencias-dropdown');
    if (!dropdown) return;
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    if (!q) { dropdown.classList.add('hidden'); return; }

    const cards = document.querySelectorAll('#product-grid article');
    const sugerencias = [];
    cards.forEach(card => {
        if (sugerencias.length >= 5) return;
        const titulo = (card.getAttribute('data-titulo') || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const subtitulo = (card.getAttribute('data-subtitulo') || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const texto = `${titulo} ${subtitulo}`;
        if (texto.includes(q) && !sugerencias.some(s => s.titulo === (card.getAttribute('data-titulo') || ''))) {
            sugerencias.push({
                titulo: card.getAttribute('data-titulo') || '',
                subtitulo: card.getAttribute('data-subtitulo') || '',
                imagen: card.getAttribute('data-imagen') || ''
            });
        }
    });

    if (sugerencias.length === 0) { dropdown.classList.add('hidden'); return; }

    dropdown.innerHTML = sugerencias.map(s => `
        <div class="sugerencia-item flex items-center gap-3 px-4 py-2 border-b border-stone-100 dark:border-stone-700 last:border-0 cursor-default" data-sugerencia="${s.titulo}">
            <img src="${s.imagen}" class="w-8 h-8 object-cover rounded-lg border border-stone-200 dark:border-temu shrink-0">
            <div class="flex flex-col">
                <span class="text-sm font-semibold text-stone-950 dark:text-temu">${s.titulo}</span>
                <span class="text-xs text-stone-500">${s.subtitulo}</span>
            </div>
        </div>
    `).join('');
    dropdown.classList.remove('hidden');
}

function filtrarProductosGlobal(query) {
    window.filtrandoBusqueda = true;
    
    const enCarrito = !document.getElementById('carrito-section').classList.contains('hidden');
    const enFavoritos = !document.getElementById('favoritos-section').classList.contains('hidden');
    
    let contenedor;
    if (enCarrito) contenedor = document.getElementById('contenedor-items-carrito');
    else if (enFavoritos) contenedor = document.getElementById('favoritos-grid');
    else contenedor = document.getElementById('product-grid');
    
    if (!contenedor) { window.filtrandoBusqueda = false; return 0; }
    
    const cards = contenedor.querySelectorAll('article');
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    let encontrados = 0;

    if (!q) {
        cards.forEach(card => card.classList.remove('hidden'));
        window.filtrandoBusqueda = false;
        return cards.length;
    }

    cards.forEach(card => {
        let texto = '';
        const tituloAttr = card.getAttribute('data-titulo');
        const subtituloAttr = card.getAttribute('data-subtitulo');
        if (tituloAttr || subtituloAttr) {
            texto = ((tituloAttr || '') + ' ' + (subtituloAttr || '')).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        } else {
            texto = card.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        if (texto.includes(q)) {
            card.classList.remove('hidden');
            encontrados++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    return encontrados;
}

function mostrarMensajeResultados(query, encontrados) {
    const enCarrito = !document.getElementById('carrito-section').classList.contains('hidden');
    const enFavoritos = !document.getElementById('favoritos-section').classList.contains('hidden');
    
    let referencia;
    if (enCarrito) referencia = document.getElementById('contenedor-items-carrito');
    else if (enFavoritos) referencia = document.getElementById('favoritos-grid');
    else referencia = document.getElementById('product-grid');
    
    if (!referencia) return;
    let msg = document.getElementById('search-results-msg');
    if (!msg) {
        msg = document.createElement('div');
        msg.id = 'search-results-msg';
        msg.className = 'w-full text-center py-4 mb-2';
        referencia.parentNode.insertBefore(msg, referencia);
    }
    if (encontrados === 0) {
        msg.innerHTML = `<p class="font-Inter text-sm text-stone-500">No se encontraron productos para "<span class="text-temu font-semibold">${query}</span>"</p>`;
    } else {
        msg.innerHTML = `<p class="font-Inter text-sm text-stone-500">${encontrados} resultado${encontrados !== 1 ? 's' : ''} para "<span class="text-temu font-semibold">${query}</span>"</p>`;
    }
    msg.classList.remove('hidden');
}

function crearCategoriaBusqueda(query, fromHistory = false) {

    // >>> AGREGAR ESTO AL INICIO <<<
    // Cerrar detalle de producto si está abierto
    const detalleSection = document.getElementById('producto-detalle');
    if (detalleSection && !detalleSection.classList.contains('hidden')) {
        detalleSection.classList.add('hidden');
        const grid = document.getElementById('product-grid');
        const navCat = document.getElementById('nav-categorias');
        const btnMas = document.getElementById('btn-mas');
        if (grid) grid.classList.remove('hidden');
        if (navCat) navCat.classList.remove('hidden');
        if (btnMas) btnMas.classList.remove('hidden');
    }
    // >>> FIN DEL AGREGADO <<<

    ///////////////////////////////////////////////
    if (!query || !query.trim()) return;
    
    const enCarrito = !document.getElementById('carrito-section').classList.contains('hidden');
    const enFavoritos = !document.getElementById('favoritos-section').classList.contains('hidden');
    
    if (enCarrito || enFavoritos) {
        activateNav('inicio');
    }

    // Push state para que el botón Atrás funcione
    if (!fromHistory && appInicializada) {
        history.pushState(
            { vista: 'busqueda', query: query },
            '',
            '#buscar-' + encodeURIComponent(query)
        );
    }
    
    if (btnCategoriaBusqueda && btnCategoriaBusqueda.parentNode) {
        const encontrados = filtrarProductosGlobal(query);
        mostrarMensajeResultados(query, encontrados);
        setActiveCategory(btnCategoriaBusqueda);
        document.getElementById('sugerencias-dropdown').classList.add('hidden');
        
        // Asegurar que heroes sigan ocultos en resultados de búsqueda
        document.querySelectorAll('.hero-container').forEach(h => {
            h.classList.add('hidden');
            h.style.display = 'none';
        });
        const btnMas = document.getElementById('btn-mas');
        if (btnMas) btnMas.classList.add('hidden');
        
        return;
    }
    
    eliminarCategoriaBusqueda(false);
    
    document.querySelectorAll('.hero-container').forEach(h => {
        h.classList.add('hidden');
        h.style.display = 'none';
    });
    const btnMas = document.getElementById('btn-mas');
    if (btnMas) btnMas.classList.add('hidden');
    const grid = document.getElementById('product-grid');
    if (grid) grid.classList.add('pb-24');  
    
    const scrollContainer = document.getElementById('categorias-scroll');
    if (!scrollContainer) return;
    
    btnCategoriaBusqueda = document.createElement('button');
    btnCategoriaBusqueda.className = 'cat-btn shrink-0 w-25 h-8 bg-stone-950 rounded-4xl flex justify-center items-center cursor-pointer snap-start';
    btnCategoriaBusqueda.setAttribute('data-categoria', 'busqueda');
    btnCategoriaBusqueda.innerHTML = `<p class="text-white font-semibold text-sm">Resultados</p>`;
    
    scrollContainer.insertBefore(btnCategoriaBusqueda, scrollContainer.firstChild);
    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    
    setActiveCategory(btnCategoriaBusqueda);
    const encontrados = filtrarProductosGlobal(query);
    mostrarMensajeResultados(query, encontrados);
    document.getElementById('sugerencias-dropdown').classList.add('hidden');
}

function eliminarCategoriaBusqueda(restaurarVista = true) {
    window.filtrandoBusqueda = false;

    // 🔥 SI ESTAMOS EN DETALLE DE PRODUCTO, NO HACER NADA
    const detalle = document.getElementById('producto-detalle');
    if (detalle && !detalle.classList.contains('hidden')) {
        // Solo limpiar input y msg, no tocar hero
        const input = document.getElementById('buscador');
        if (input && restaurarVista) input.value = '';
        const msg = document.getElementById('search-results-msg');
        if (msg) msg.classList.add('hidden');
            // Limpiar input para que no quede basura
    
        return;
    }
    
    if (btnCategoriaBusqueda && btnCategoriaBusqueda.parentNode) {
        btnCategoriaBusqueda.parentNode.removeChild(btnCategoriaBusqueda);
    }
    btnCategoriaBusqueda = null;
    
    const msg = document.getElementById('search-results-msg');
    if (msg) msg.classList.add('hidden');

    const enCarrito = !document.getElementById('carrito-section').classList.contains('hidden');
    const enFavoritos = !document.getElementById('favoritos-section').classList.contains('hidden');
    
    if (enCarrito || enFavoritos) {
        filtrarProductosGlobal('');
        return;
    }
    
    if (restaurarVista) {
    const btnTodos = document.querySelector('[data-categoria="todos"]');
    if (btnTodos) {
        setActiveCategory(btnTodos);  // ← USA TU FUNCIÓN QUE YA FUNCIONA
        
        categoriaActual = 'todos';
        showingAll = false;
        showHero('todos');
        if (typeof updateDisplayRef === 'function') updateDisplayRef();
    }
    const btnMas = document.getElementById('btn-mas');
    if (btnMas) btnMas.classList.remove('hidden');
    }
}

const buscadorInput = document.querySelector('#buscador');
if (buscadorInput) {
    buscadorInput.addEventListener('input', e => {
        const val = e.target.value;
        
        // 🔥 SOLO mostrar sugerencias, NUNCA filtrar/ocultar cards automáticamente
        if (val.trim().length > 0) {
            mostrarSugerencias(val);
        } else {
            document.getElementById('sugerencias-dropdown').classList.add('hidden');
        }
        
        // 🔥 Si borra todo, solo cerrar dropdown. SIN efecto en la vista actual.
        // (No llamamos eliminarCategoriaBusqueda aquí)
    });
    
    buscadorInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            crearCategoriaBusqueda(buscadorInput.value);
        }
    });
}

const btnLupa = document.querySelector('#search-btn');
if (btnLupa) {
    btnLupa.addEventListener('click', e => {
        e.preventDefault();
        if (buscadorInput) crearCategoriaBusqueda(buscadorInput.value);
    });
}

document.querySelectorAll('.cat-btn[data-categoria]').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btnCategoriaBusqueda) eliminarCategoriaBusqueda(false);
    });
});

const busquedaFavoritos = document.getElementById('favoritos');
const busquedaFavoritos2 = document.getElementById('text-favoritos');
const busquedaCarrito = document.getElementById('carrito-cambio');
const busquedaCarrito2 = document.getElementById('text-carrito');

[busquedaFavoritos, busquedaFavoritos2, busquedaCarrito, busquedaCarrito2].forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
        const msg = document.getElementById('search-results-msg');
        if (msg) msg.classList.add('hidden');
    });
});

const dropdownSug = document.getElementById('sugerencias-dropdown');
if (dropdownSug) {
    dropdownSug.addEventListener('touchstart', e => {
        const item = e.target.closest('.sugerencia-item');
        if (!item) return;
        e.preventDefault();
        ejecutarSugerencia(item);
    }, { passive: false });
    
    dropdownSug.addEventListener('click', e => {
        const item = e.target.closest('.sugerencia-item');
        if (!item) return;
        ejecutarSugerencia(item);
    });
}

function ejecutarSugerencia(item) {
    const texto = item.getAttribute('data-sugerencia');
    const input = document.getElementById('buscador');
    if (input) { input.value = texto; input.blur(); }
    crearCategoriaBusqueda(texto);
    document.getElementById('sugerencias-dropdown').classList.add('hidden');
}

document.addEventListener('click', e => {
    const dropdown = document.getElementById('sugerencias-dropdown');
    const buscador = document.getElementById('buscador');
    if (!dropdown || !buscador) return;
    if (!dropdown.contains(e.target) && !buscador.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

document.addEventListener('touchstart', (e) => {
    const input = document.getElementById('buscador');
    if (!input || document.activeElement !== input) return;
    if (input.contains(e.target)) return;
    input.blur();
}, { passive: true });
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
// ==== ELIMINAR CARRITO ABSOLUTO ====
/////////////////////////////////////////////////////////////////
// ======================================================
// ELIMINAR ARTICULO COMPLETO DEL CARRITO
// ======================================================
function eliminarArticulo(cartId, animarTachito = true) {
    const wrapper = document.querySelector(`.swipe-wrapper[data-swipe-id="${cartId}"]`);
    
    if (wrapper) {
        if (animarTachito) {
            const tachito = wrapper.querySelector('.btn-tachito');
            if (tachito) {
                tachito.classList.remove('tachito-animado');
                void tachito.offsetWidth;
                tachito.classList.add('tachito-animado');
            }
            setTimeout(() => {
                const card = wrapper.querySelector('.card-swipe');
                if (card) card.classList.add('card-eliminandose');
            }, 350);
            
            setTimeout(() => {
                wrapper.classList.add('eliminando');
                setTimeout(() => {
                    const index = carritoDeCompras.findIndex(item => item.cartId === cartId);
                    if (index !== -1) {
                        carritoDeCompras.splice(index, 1);
                        guardarCarrito();
                        renderizarCarrito();
                        sincronizarBadgesCantidad();
                    }
                }, 300);
            }, 550);
        } else {
            const card = wrapper.querySelector('.card-swipe');
            if (card) card.classList.add('card-eliminandose');
            setTimeout(() => {
                wrapper.classList.add('eliminando');
                setTimeout(() => {
                    const index = carritoDeCompras.findIndex(item => item.cartId === cartId);
                    if (index !== -1) {
                        carritoDeCompras.splice(index, 1);
                        guardarCarrito();
                        renderizarCarrito();
                        sincronizarBadgesCantidad();
                    }
                }, 300);
            }, 200);
        }
    } else {
        const index = carritoDeCompras.findIndex(item => item.cartId === cartId);
        if (index !== -1) {
            carritoDeCompras.splice(index, 1);
            guardarCarrito();
            renderizarCarrito();
            sincronizarBadgesCantidad();
        }
    }
}

// ======================================================
// SWIPE TO DELETE (mouse + touch)
// ======================================================
function initSwipeDelete() {
    document.querySelectorAll('.swipe-wrapper').forEach(wrapper => {
        const card = wrapper.querySelector('.card-swipe');
        const deleteBtn = wrapper.querySelector('.swipe-delete-btn');
        if (!card) return;
        
        let startX = 0, currentX = 0, isDragging = false;
        let hasDragged = false; // 🔥 NUEVO
        const threshold = 60;
        const maxOpen = 80;

        function setTranslate(x) {
            card.style.transition = 'none';
            card.style.transform = `translateX(${x}px)`;
        }

        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            window._isSwiping = false; // 🔥 NUEVO: liberar flag
            card.style.transition = 'transform 0.2s ease-out';
            if (Math.abs(currentX) > threshold) {
                card.style.transform = `translateX(-${maxOpen}px)`;
            } else {
                card.style.transform = 'translateX(0)';
            }
        }

        function closeOthers() {
            document.querySelectorAll('.swipe-wrapper').forEach(w => {
                if (w !== wrapper) {
                    const c = w.querySelector('.card-swipe');
                    if (c) {
                        c.style.transition = 'transform 0.2s ease-out';
                        c.style.transform = 'translateX(0)';
                    }
                }
            });
        }

        // --- TOUCH ---
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            hasDragged = false; // 🔥 NUEVO
            window._isSwiping = false; // 🔥 NUEVO
            currentX = 0;
            closeOthers();
        }, { passive: true });

        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            hasDragged = true; // 🔥 NUEVO
            window._isSwiping = true; // 🔥 NUEVO
            const x = e.touches[0].clientX;
            const dx = x - startX;
            if (dx < 0) {
                currentX = Math.max(dx, -maxOpen - 10);
                setTranslate(currentX);
            }
        }, { passive: true });

        card.addEventListener('touchend', () => {
            endDrag();
            // 🔥 NUEVO: dar tiempo a que el click se dispare antes de liberar
            setTimeout(() => { window._isSwiping = false; }, 80);
        });

        // --- MOUSE ---
        card.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            hasDragged = false; // 🔥 NUEVO
            window._isSwiping = false; // 🔥 NUEVO
            currentX = 0;
            closeOthers();
        });

        card.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            hasDragged = true; // 🔥 NUEVO
            window._isSwiping = true; // 🔥 NUEVO
            const dx = e.clientX - startX;
            if (dx < 0) {
                currentX = Math.max(dx, -maxOpen - 10);
                setTranslate(currentX);
            }
        });

        card.addEventListener('mouseup', () => {
            endDrag();
            setTimeout(() => { window._isSwiping = false; }, 80); // 🔥 NUEVO
        });
        
        card.addEventListener('mouseleave', () => {
            if (isDragging) {
                endDrag();
                setTimeout(() => { window._isSwiping = false; }, 80); // 🔥 NUEVO
            }
        });

        // Click en el botón rojo del swipe
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                const cartId = wrapper.dataset.swipeId;
                eliminarArticulo(cartId, false);    
            });
        }
    });
}

// Cerrar todos los swipes al hacer click fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.swipe-wrapper')) {
        document.querySelectorAll('.card-swipe').forEach(c => {
            c.style.transition = 'transform 0.2s ease-out';
            c.style.transform = 'translateX(0)';
        });
    }
});
// ////////////////////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////////////////////

// ===================================================
// SECTION CATEGORIAS
// ===================================================
// Swiper del panel de categorías
const swiperCategorias = new Swiper('.swiper-categorias', {
    slidesPerView: 1,        // 1 slide = 1 página del grid
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,             // con 2 slides no hace falta loop
    pagination: {
        el: '.pagination-categorias',
        clickable: true
    }
});

// Desplaza el scroll horizontal de categorías para que el btn activo sea visible
function scrollToCategory(btn) {
    if (!btn || !scrollContainer) return;
    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

// Click en una esfera del panel
document.querySelectorAll('.cat-esfera').forEach(esfera => {
    esfera.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = esfera.dataset.cat;
        if (!cat) return;

         // 🔥 ELIMINAR resultados de búsqueda si están activos
        if (btnCategoriaBusqueda) {
            eliminarCategoriaBusqueda(false);
        }
        
        // Limpiar input y cerrar sugerencias
        const input = document.getElementById('buscador');
        if (input) input.value = '';
        const dropdown = document.getElementById('sugerencias-dropdown');
        if (dropdown) dropdown.classList.add('hidden');

        // Volver a la tienda (por si estaba en carrito o favoritos)
        gestionarVista('tienda');

        // Activar categoría directamente (sin simular click para evitar cierre del panel)
        const btnCat = document.querySelector(`[data-categoria="${cat}"]`);
        if (btnCat) {
            setActiveCategory(btnCat);
            scrollToCategory(btnCat);
            categoriaActual = cat;
            showingAll = false;
            showHero(categoriaActual);
            if (typeof window.updateDisplayRef === 'function') window.updateDisplayRef();
        }
        sincronizarEsferasPanel();
    });
});

const panelCategorias = document.getElementById('panel-categorias');
const btnCategoriasMobile = document.querySelector('.textCategorias');
const btnCatMobileNaranja = document.querySelector('#btnCategorias');
const btnCategoriasDesktop = document.querySelector('[data-nav="categorias"]');

// Sincroniza el estado visual de las esferas del panel con categoriaActual
function sincronizarEsferasPanel() {
    document.querySelectorAll('.cat-esfera').forEach(esfera => {
        const circulo = esfera.querySelector('.size-10');
        const texto = esfera.querySelector('p');
        if (esfera.dataset.cat === categoriaActual) {
            if (circulo) {
                circulo.classList.remove('ring-transparent');
                circulo.classList.add('ring-temu');
                // circulo.style.boxShadow = '0 0 10px rgba(251, 119, 1, 0.5)';
            }
            if (texto) {
                texto.classList.remove('text-white', 'dark:text-stone-400');
                texto.classList.add('text-temu', 'font-semibold');
            }
        } else {
            if (circulo) {
                circulo.classList.remove('ring-temu');
                circulo.classList.add('ring-transparent');
                circulo.style.boxShadow = '';
            }
            if (texto) {
                texto.classList.remove('text-temu', 'font-semibold');
                texto.classList.add('text-white', 'dark:text-stone-400');
            }
        }
    });
}

function abrirPanelCategorias() {
    if (!panelCategorias) return;
    panelCategorias.classList.remove('hidden');

    
    document.querySelectorAll('.cat-esfera').forEach(esfera => {
        const circulo = esfera.querySelector('.size-10');
        const texto = esfera.querySelector('p');
        if (esfera.dataset.cat === categoriaActual) {
            if (circulo) {
                circulo.classList.remove('ring-transparent');
                circulo.classList.add('ring-temu');
                // circulo.style.boxShadow = '0 0 10px rgba(251, 119, 1, 0.5)';
            }
            if (texto) {
                texto.classList.remove('text-white','dark:text-stone-400');   // ← QUITAR blanco
                texto.classList.add('text-temu', 'font-semibold');       // ← PONER naranja
            }
        } else {
            if (circulo) {
                circulo.classList.remove('ring-temu');
                circulo.classList.add('ring-transparent');
                circulo.style.boxShadow = '';
            }
            if (texto) {
                texto.classList.remove('text-temu', 'font-semibold');    // ← QUITAR naranja
                texto.classList.add('text-white', 'dark:text-stone-400');      // ← VOLVER blanco
            }
        }
    });
    
    if (swiperCategorias) swiperCategorias.update();
}

function cerrarPanelCategorias() {
    if (!panelCategorias) return;
    panelCategorias.classList.add('hidden');
}

function togglePanelCategorias() {
    if (!panelCategorias) return;
    if (panelCategorias.classList.contains('hidden')) {
        abrirPanelCategorias();
    } else {
        cerrarPanelCategorias();
    }
}




// Cerrar al clickear fuera
document.addEventListener('click', (e) => {
    if (!panelCategorias) return;
    if (panelCategorias.classList.contains('hidden')) return;
    
    const clickDentroPanel = panelCategorias.contains(e.target);
    const clickEnBtnCategorias = btnCategoriasMobile?.contains(e.target) || btnCategoriasDesktop?.contains(e.target);
    
    if (!clickDentroPanel && !clickEnBtnCategorias) {
        cerrarPanelCategorias();
    }
});
/////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////
// ==== SECTION USUARIO ====
/////////////////////////////////////////////////////////////////
const panelUsuario = document.getElementById('panel-usuario');
const btnUsuarioMobile = document.querySelector('.textUsuario');
const btnUsuarioNaranja = document.querySelector('#btnUsuario');
const btnUsuarioDesktop = document.querySelector('[data-nav="usuario"]');

function abrirPanelUsuario() {
    if (!panelUsuario) return;
    panelUsuario.classList.remove('hidden');
    // Cerrar panel de categorías si está abierto
    if (panelCategorias && !panelCategorias.classList.contains('hidden')) {
        cerrarPanelCategorias();
    }
}

function cerrarPanelUsuario() {
    if (!panelUsuario) return;
    panelUsuario.classList.add('hidden');
}

function togglePanelUsuario() {
    if (!panelUsuario) return;
    if (panelUsuario.classList.contains('hidden')) {
        abrirPanelUsuario();
    } else {
        cerrarPanelUsuario();
    }
}


// Cerrar al clickear fuera
document.addEventListener('click', (e) => {
    if (!panelUsuario) return;
    if (panelUsuario.classList.contains('hidden')) return;
    
    const clickDentroPanel = panelUsuario.contains(e.target);
    const clickEnBtnUsuario = btnUsuarioMobile?.contains(e.target) || btnUsuarioDesktop?.contains(e.target) || btnUsuarioNaranja?.contains(e.target);
    
    if (!clickDentroPanel && !clickEnBtnUsuario) {
        cerrarPanelUsuario();
    }
});

///////////////////////////////////////////////////////////

// ======================================================
// HOVER DESKTOP CON FLAGS (no depende de mouseleave)
// ======================================================
(function initDesktopHoverPanels() {
    // Flags de estado
    let overCatBtn = false, overCatPanel = false;
    let overUserBtn = false, overUserPanel = false;

    const btnCat = document.querySelector('[data-nav="categorias"]');
    const panelCat = document.getElementById('panel-categorias');
    const btnUser = document.querySelector('[data-nav="usuario"]');
    const panelUser = document.getElementById('panel-usuario');

    function checkClose() {
        if (window.innerWidth < 1024) return;
        // Si el mouse NO está ni en el botón ni en el panel → cerrar
        if (!overCatBtn && !overCatPanel) cerrarPanelCategorias();
        if (!overUserBtn && !overUserPanel) cerrarPanelUsuario();
    }

    // --- CATEGORÍAS ---
    if (btnCat) {
        btnCat.addEventListener('mouseenter', () => { 
            overCatBtn = true; 
            if (window.innerWidth >= 1024) abrirPanelCategorias(); 
        });
        btnCat.addEventListener('mouseleave', () => { 
            overCatBtn = false; 
            setTimeout(checkClose, 60); // 60ms para cruzar al panel
        });
    }
    if (panelCat) {
        panelCat.addEventListener('mouseenter', () => { overCatPanel = true; });
        panelCat.addEventListener('mouseleave', () => { 
            overCatPanel = false; 
            setTimeout(checkClose, 60); 
        });
    }

    // --- USUARIO ---
    if (btnUser) {
        btnUser.addEventListener('mouseenter', () => { 
            overUserBtn = true; 
            if (window.innerWidth >= 1024) abrirPanelUsuario(); 
        });
        btnUser.addEventListener('mouseleave', () => { 
            overUserBtn = false; 
            setTimeout(checkClose, 60); 
        });
    }
    if (panelUser) {
        panelUser.addEventListener('mouseenter', () => { overUserPanel = true; });
        panelUser.addEventListener('mouseleave', () => { 
            overUserPanel = false; 
            setTimeout(checkClose, 60); 
        });
    }
})();




/////////////////////////////////////////////////////////


// ======================================================
// MODO OSCURO / CLARO
// ======================================================
const btnModoClaro = document.getElementById('btn-modo-claro');
const btnModoOscuro = document.getElementById('btn-modo-oscuro');
const htmlRoot = document.documentElement;

function aplicarModo(modo) {
    // modo: 'light' | 'dark'
    if (modo === 'dark') {
        htmlRoot.classList.add('dark');
        
        // Botón oscuro ACTIVO
        if (btnModoOscuro) {
            btnModoOscuro.classList.add('bg-temu');
            const icono = btnModoOscuro.querySelector('i');
            if (icono) {
                icono.classList.remove('ri-moon-line');
                icono.classList.add('ri-moon-fill');
            }
        }
        // Botón claro INACTIVO
        if (btnModoClaro) {
            btnModoClaro.classList.remove('bg-temu');
            const icono = btnModoClaro.querySelector('i');
            if (icono) {
                icono.classList.remove('ri-sun-fill');
                icono.classList.add('ri-sun-line');
            }
        }
    } else {
        htmlRoot.classList.remove('dark');
        
        // Botón claro ACTIVO
        if (btnModoClaro) {
            btnModoClaro.classList.add('bg-temu');
            const icono = btnModoClaro.querySelector('i');
            if (icono) {
                icono.classList.remove('ri-sun-line');
                icono.classList.add('ri-sun-fill');
            }
        }
        // Botón oscuro INACTIVO
        if (btnModoOscuro) {
            btnModoOscuro.classList.remove('bg-temu');
            const icono = btnModoOscuro.querySelector('i');
            if (icono) {
                icono.classList.remove('ri-moon-fill');
                icono.classList.add('ri-moon-line');
            }
        }
    }
    localStorage.setItem('zagy_modo', modo);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.setAttribute('content', modo === 'dark' ? '#000000' : '#ffffff');
    }
    
}

function iniciarModo() {
    const guardado = localStorage.getItem('zagy_modo');
    if (guardado) {
        aplicarModo(guardado);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        aplicarModo('dark');
    } else {
        aplicarModo('light');
    }
}

if (btnModoClaro) {
    btnModoClaro.addEventListener('click', () => aplicarModo('light'));
}
if (btnModoOscuro) {
    btnModoOscuro.addEventListener('click', () => aplicarModo('dark'));
}

// ======================================================
// IDIOMA (ES / EN)
// ======================================================
const btnLangEs = document.getElementById('btn-lang-es');
const btnLangEn = document.getElementById('btn-lang-en');
const btnLangQu = document.getElementById('btn-lang-qu');

const traducciones = {
    es: {
        modo: 'Modo:',
        idioma: 'Idioma:',
        firstWeb: 'Primera Web:',
        usuario: 'Usuario',
        categorias: 'Categorías',
        inicio: 'Inicio',
        favoritos: 'Favoritos',
        carrito: 'Carrito',
        verMas: 'Ver más',
        verMenos: 'Ver menos',
        buscarPlaceholder: 'soporte para celular',
        usuario: 'Usuario',
        categorias: 'Categorías',
        inicio: 'Inicio',
        favoritos: 'Favoritos',
        carrito: 'Carrito',
        todos: 'Todos',
        ofertas: 'Ofertas',
        hogar: 'Hogar',
        tecnologia: 'Tecnología',
        accesorios: 'Accesorios',
        figuras: 'Figuras',
        albums: 'Álbums',
        ropa: 'Ropa',
        hombre: 'Hombre',
        mujer: 'Mujer',
        moda: 'Moda',
        zapatillas: 'Zapatillas',
        relojes: 'Relojes',
        perfumes: 'Perfumes',
        joyeria: 'Joyería',
        licores: 'Licores',
        misFavoritos: 'Mis Favoritos',
        guardarFavoritos: 'Guarda aquí lo que te gusta',
        miCarrito: 'Mi Carrito',
        total: 'Total',
        finalizarCompra: 'Finalizar Compra',
        carritoVacio: 'Tu carrito está vacío',
volver: "Volver",
estilo: "Estilo:",
agregarCarrito: "Agregar al Carrito",
envioTitulo: "Envío",
porQueElegirnos: "¿Por qué elegirnos?",
detallesProducto: "Detalles del producto",
programaDonacion: "Programa de Donación",
galeriaProducto: "Galería del producto",
exploraMas: "Explora más productos",
zoomHint: "Pasa el mouse o mantén presionado para ampliar",
pagoSeguro: "Pagos Seguros",
puntualidad: "Puntualidad",
privacidadSegura: "Privacidad segura",
entregaGarantizada: "Entrega garantizada",
        // Agrega aquí más claves según vayas traduciendo tu web...
        
    },
    en: {
        modo: 'Mode:',
        idioma: 'Language:',
        firstWeb: 'First Web:',
        usuario: 'User',
        categorias: 'Categories',
        inicio: 'Home',
        favoritos: 'Favorites',
        carrito: 'Cart',
        verMas: 'See more',
        verMenos: 'See less',
        buscarPlaceholder: 'cellphone holder',
        usuario: 'User',
        categorias: 'Categories',
        inicio: 'Home',
        favoritos: 'Favorites',
        carrito: 'Cart',
        todos: 'All',
        ofertas: 'Offers',
        hogar: 'House',
        tecnologia: 'Technology',
        accesorios: 'Accessories',
        figuras: 'Figures',
        albums: 'Albums',
        ropa: 'Clothes',
        hombre: 'Man',
        mujer: 'Women',
        moda: 'Fashion',
        zapatillas: 'Sneakers',
        relojes: 'Watches',
        perfumes: 'Perfumes',
        joyeria: 'Jewelry',
        licores: 'Liquors',
        misFavoritos: 'My Favorites',
        guardarFavoritos: 'Save what you like here',
        miCarrito: 'My Cart',
        total: 'Total',
        finalizarCompra: 'Complete Purchase',
        carritoVacio: 'You cart is empty',
volver: "Back",
estilo: "Style:",
agregarCarrito: "Add to Cart",
envioTitulo: "Shipping",
porQueElegirnos: "Why choose us?",
detallesProducto: "Product details",
programaDonacion: "Donation Program",
galeriaProducto: "Product Gallery",
exploraMas: "Explore more products",
zoomHint: "Hover or hold to zoom",
pagoSeguro: "Secure payments",
pagaRecibir: "Pay on delivery",
privacidadSegura: "Secure privacy",
entregaRapida: "Coordinated delivery",
        // Agrega aquí los equivalentes en inglés...
    },
    // ============================================
    // NUEVO: QUECHUA
    // ============================================
    qu: {
        modo: 'Sami:',
        idioma: 'Simi:',
        firstWeb: 'Ñawpaq Web:',
        usuario: 'Ruraq',
        categorias: 'T\'inkikuna',
        inicio: 'Qallariy',
        favoritos: 'Munasqakuna',
        carrito: 'Churana',
        verMas: 'Aswan rikuy',
        verMenos: 'Aswan pisiy',
        buscarPlaceholder: 'kipu apaykachana',
        todos: 'Tukuy',
        ofertas: 'Chaninchasqa',
        hogar: 'Wasi',
        tecnologia: 'Tecnología',
        accesorios: 'Yanapakuna',
        figuras: 'Rikch\'akuna',
        albums: 'Álbumkuna',
        ropa: 'Churana',
        hombre: 'Qhari',
        mujer: 'Warmi',
        moda: 'Takiy',
        zapatillas: 'Sapatillakuna',
        relojes: 'Unanchakuna',
        perfumes: 'Perfumekuna',
        joyeria: 'Qhapaq ñanikuna',
        licores: 'Usphakuna',
        misFavoritos: 'Munasqaykuna',
        guardarFavoritos: 'Kaypi waqaychay munasqaykita',
        miCarrito: 'Churanay',
        total: 'Tukuy chanin',
        finalizarCompra: 'Tukuchiy rantiyta',
        carritoVacio: 'Carroykiqa ch\'usaqmi kashan',
volver: "Kuti",
estilo: "Sami:",
agregarCarrito: "Churana Carroy",
envioTitulo: "Chaski",
porQueElegirnos: "Imataq akllasunki?",
detallesProducto: "Producto detalles",
programaDonacion: "Donacion Programa",
galeriaProducto: "Producto Galería",
exploraMas: "Aswan productokuna",
zoomHint: "Yapay icha hapiy",
pagoSeguro: "Seguro pagokuna",
pagaRecibir: "Chaskispay paga",
privacidadSegura: "Seguro privacidad",
entregaRapida: "Utqay chaski",
    }
};

let idiomaActual = 'es';

// Helper para obtener traducciones del idioma actual (siempre fresco)
function _t() {
    return traducciones[idiomaActual] || traducciones.es;
}

function aplicarIdioma(lang) {
    idiomaActual = lang;
    const t = traducciones[lang];
    if (!t) return;
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const clave = el.getAttribute('data-i18n');
        if (t[clave]) el.textContent = t[clave];
    });

    // 2. AQUÍ VA EL PLACEHOLDER DEL BUSCADOR
    const inputBuscar = document.getElementById('buscador');
    if (inputBuscar && t.buscarPlaceholder) {
        inputBuscar.placeholder = t.buscarPlaceholder;
    }

    
     // ============================================
    // ACTUALIZAR BOTONES VISUALES (ES / EN / QU)
    // ============================================
    const botones = {
        es: document.getElementById('btn-lang-es'),
        en: document.getElementById('btn-lang-en'),
        qu: document.getElementById('btn-lang-qu')
    };

    Object.keys(botones).forEach(key => {
        const btn = botones[key];
        if (!btn) return;
        if (key === lang) {
            btn.classList.add('border-temu', 'bg-temu');
            btn.classList.remove('border-transparent');
        } else {
            btn.classList.remove('border-temu', 'bg-temu');
            btn.classList.add('border-transparent');
        }
    });

    renderizarCarrito();
    
    // Si el detalle está abierto, recargar textos dinámicos
    const detalleSection = document.getElementById('producto-detalle');
    if (detalleSection && !detalleSection.classList.contains('hidden')) {
        recargarTextosDetalle();
    }
    
    localStorage.setItem('zagy_idioma', lang);
}

function iniciarIdioma() {
    const guardado = localStorage.getItem('zagy_idioma');
    if (guardado && traducciones[guardado]) {
        aplicarIdioma(guardado);
    } else {
        aplicarIdioma('es');
    }
}

if (btnLangEs) btnLangEs.addEventListener('click', () => aplicarIdioma('es'));
if (btnLangEn) btnLangEn.addEventListener('click', () => aplicarIdioma('en'));
if (btnLangQu) btnLangQu.addEventListener('click', () => aplicarIdioma('qu'));

// ======================================================
// FIRST WEB - Redirección externa
// ======================================================
const btnFirstWeb = document.getElementById('btn-first-web');
if (btnFirstWeb) {
    btnFirstWeb.addEventListener('click', () => {
        window.open('https://zagy-tech-import.vercel.app', '_blank');
    });
}

// ======================================================
// INICIALIZAR TODO AL CARGAR
// ======================================================
document.addEventListener('DOMContentLoaded', () => {
    iniciarModo();
    iniciarIdioma();
});
//////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////
// ======================================================
// DETALLE DE PRODUCTO - V3 FUNCIONAL
// ======================================================

let swiperMiniVLeft, swiperMiniVRight, swiperMiniH, swiperLightbox;
let productoActualId = null;
let estiloSeleccionado = null;
let cantidadDetalle = 1;

// Helper para obtener producto
function getProducto(id) {
    return productosDB.find(p => p.id === id) || null;
}

// ─── ABRIR DETALLE ───
function abrirDetalleProducto(id, fromPopstate = false) {
    const msg = document.getElementById('search-results-msg');
    if (msg) msg.classList.add('hidden');
    
    const producto = getProducto(id);
    if (!producto) return;

    productoActualId = id;
    cantidadDetalle = 1;
    estiloSeleccionado = null;

    // 🔥 GUARDAR VISTA ACTUAL ANTES DE OCULTAR TODO
    const enCarrito = !document.getElementById('carrito-section').classList.contains('hidden');
    const enFavoritos = !document.getElementById('favoritos-section').classList.contains('hidden');
    const enBusqueda = !!btnCategoriaBusqueda;
    
    let vistaActual;
    if (enBusqueda) {
        const input = document.getElementById('buscador');
        vistaActual = { vista: 'busqueda', query: input ? input.value : '' };
    } else if (enCarrito) {
        vistaActual = { vista: 'carrito' };
    } else if (enFavoritos) {
        vistaActual = { vista: 'favoritos' };
    } else {
        vistaActual = { vista: 'tienda', categoria: categoriaActual, showingAll: showingAll };
    }
    
    window._vistaAnterior = vistaActual;

     // Push state al historial
    if (!fromPopstate && appInicializada) {
        history.pushState({ detalleId: id, vistaAnterior: vistaActual }, '', '#producto-' + id);
    }
    const detalleSection = document.getElementById('producto-detalle');
    if (!detalleSection) return;

    // OCULTAR TODO LO DEMÁS
    document.querySelectorAll('.hero-container').forEach(h => { h.classList.add('hidden'); h.style.display = 'none'; });
    const grid = document.getElementById('product-grid');
    const navCat = document.getElementById('nav-categorias');
    const btnMas = document.getElementById('btn-mas');
    const carritoSec = document.getElementById('carrito-section');
    const favSec = document.getElementById('favoritos-section');
    const btnCarritoFlotante = document.getElementById('btn-carrito');

    if (grid) grid.classList.add('hidden');
    if (navCat) navCat.classList.add('hidden');
    if (btnMas) btnMas.classList.add('hidden');
    if (carritoSec) carritoSec.classList.add('hidden');
    if (favSec) favSec.classList.add('hidden');
    if (btnCarritoFlotante) btnCarritoFlotante.classList.add('hidden');

    // OCULTAR NAV SUPERIOR EN MÓVIL/TABLET (igual que en carrito)
    const navSup = document.querySelector('nav');
    const sepSup = navSup?.nextElementSibling;
    if (navSup) navSup.classList.add('max-lg:hidden');
    if (sepSup) sepSup.classList.add('max-lg:hidden');

    // 🔥 ESTO ES LO QUE FALTABA: LIMPIAR CUALQUIER TRANSFORM BASURA
    detalleSection.classList.remove('hidden');
    detalleSection.style.removeProperty('transform');
    detalleSection.style.removeProperty('transition');
    detalleSection.style.opacity = '0';
    
    // Fade in simple, SIN transform
    requestAnimationFrame(() => {
        detalleSection.style.transition = 'opacity 0.3s ease';
        detalleSection.style.opacity = '1';
    });

    if (window.innerWidth >= 1024) {
        window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
        setTimeout(() => {
            detalleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }

    // --- RESTO DE LA FUNCIÓN (info, precios, etc.) ---
    document.getElementById('detalle-titulo').textContent = producto.titulo || '';
    document.getElementById('detalle-subtitulo').textContent = producto.subtitulo || '';
    document.getElementById('detalle-marca').textContent = producto.marca || '';
    document.getElementById('detalle-disponible').textContent = (producto.disponible || 0) + ' disponible(s)';
    document.getElementById('detalle-precio').textContent = (producto.precio || 0).toFixed(2);
    document.getElementById('detalle-estilo-nombre').textContent = producto.estilo || '';

    // Título largo expandible
    const tituloLargo = document.getElementById('detalle-titulo-largo');
    if (tituloLargo) {
        tituloLargo.textContent = producto.tituloLargo?.[idiomaActual] || producto.tituloLargo?.es || '';
        initTituloLargo();
    }

    const precioTachado = document.getElementById('detalle-precio-tachado');
    const badgeDesc = document.getElementById('detalle-descuento');
    if (producto.precioOriginal && producto.descuento > 0) {
        precioTachado.classList.remove('hidden');
        badgeDesc.classList.remove('hidden');
        document.getElementById('detalle-precio-original').textContent = producto.precioOriginal.toFixed(2);
        badgeDesc.textContent = producto.descuento + '% OFF';
    } else {
        precioTachado.classList.add('hidden');
        badgeDesc.classList.add('hidden');
    }

    actualizarCantidadDisplay();
    actualizarPrecioDetalle();

    const accEnv = document.getElementById('accordion-envio');
    const accGar = document.getElementById('accordion-garantia');
    const accDet = document.getElementById('accordion-detalles');
    const accDon = document.getElementById('accordion-donacion');
    if (accEnv) accEnv.textContent = producto.envio?.[idiomaActual] || producto.envio?.es || '';
    if (accGar) accGar.textContent = producto.garantia?.[idiomaActual] || producto.garantia?.es || '';
    if (accDet) accDet.textContent = producto.detalles?.[idiomaActual] || producto.detalles?.es || '';
    if (accDon) accDon.textContent = producto.donacion?.[idiomaActual] || producto.donacion?.es || '';

    document.querySelectorAll('.accordion-content').forEach(c => {
        c.style.maxHeight = '0px';
        c.classList.remove('abierto');
    });
    document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotado'));

    // MEDIAS
    const medias = [];
    (producto.imagenes || []).forEach(src => medias.push({ tipo: 'imagen', src }));
    (producto.videos || []).forEach((src, i) => medias.push({ 
        tipo: 'video', 
        src,
        poster: producto.videoPosters?.[i] || producto.imagenes?.[0] || ''
    }));

    window._detalleMedias = medias;

    renderizarMiniaturas(medias);
    cambiarImagenPrincipal(medias, 0);
    initZoomAndSwipe();
    sincronizarFavoritoDetalle();
    renderizarEstilos(producto);
    renderizarCollage(producto, medias);
    renderizarRelacionados(producto.relacionados || []);
    initMarqueeEnvio();
}

// ─── MINIATURAS ───
function renderizarMiniaturas(medias) {
    const wrapLeft = document.getElementById('mini-v-left-wrapper');
    const wrapRight = document.getElementById('mini-v-right-wrapper');
    const wrapH = document.getElementById('mini-h-wrapper');
    if (!wrapLeft || !wrapRight || !wrapH) return;

    wrapLeft.innerHTML = '';
    wrapRight.innerHTML = '';
    wrapH.innerHTML = '';

    // ─── Crear slides ───
    medias.forEach((media, idx) => {
        const isVideo = media.tipo === 'video';
        const html = isVideo
        ? `<div class="swiper-slide" data-media-idx="${idx}" style="width:72px;height:72px;flex-shrink:0;border-radius:0.5rem;overflow:hidden;cursor:pointer;position:relative;background:transparent;border:2px solid transparent;transition:all 0.2s ease;">
             <img src="${media.poster || ''}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">
             <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;background:rgba(0,0,0,0.15);">
               <div style="width:24px;height:24px;background:#FB7701;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.4);">
                 <i class="ri-play-fill" style="color:white;font-size:12px;margin-left:1px;"></i>
               </div>
             </div>
           </div>`
        : `<div class="swiper-slide" data-media-idx="${idx}" style="width:72px;height:72px;flex-shrink:0;border-radius:0.5rem;overflow:hidden;cursor:pointer;position:relative;background:transparent;border:2px solid transparent;transition:all 0.2s ease;">
             <img src="${media.src}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">
           </div>`;

        // Horizontal: TODAS las medias
        wrapH.insertAdjacentHTML('beforeend', html);

        // Verticales: pares izquierda, impares derecha
        if (idx % 2 === 0) wrapLeft.insertAdjacentHTML('beforeend', html);
        else               wrapRight.insertAdjacentHTML('beforeend', html);
    });

    // ─── Destruir anteriores ───
    [swiperMiniVLeft, swiperMiniVRight, swiperMiniH].forEach(s => {
        if (s) { s.destroy(true, true); }
    });
    swiperMiniVLeft = swiperMiniVRight = swiperMiniH = null;

    // Helper: config de loop segura
    const loopCfg = (slideCount) => slideCount > 3
        ? { loop: true, loopedSlides: slideCount }
        : { loop: false };

    // ─── VERTICAL IZQUIERDA (solo pares) ───
    const leftCount = wrapLeft.children.length;
    swiperMiniVLeft = new Swiper('.swiper-mini-v-left', {
        direction: 'vertical',
        slidesPerView: 7,           // móvil por defecto
        spaceBetween: 8,
        speed: 300,
        mousewheel: true,
        loop: true,
        loopedSlides: leftCount,
        resistance: true,
        resistanceRatio: 0.5,
        touchRatio: 1,
        breakpoints: {
            // Tablet (640px+)
            640: { slidesPerView: 7 },
            // PC (1024px+)
            1024: { slidesPerView: 6 },
            // Desktop grande (1280px+)
            1280: { slidesPerView: 6 }
        }
    });

    // ─── VERTICAL DERECHA (solo impares) ───
    const rightCount = wrapRight.children.length;
    swiperMiniVRight = new Swiper('.swiper-mini-v-right', {
        direction: 'vertical',
        slidesPerView: 7,
        spaceBetween: 8,
        speed: 300,
        mousewheel: true,
        loop: true,
        loopedSlides: rightCount,
        resistance: true,
        resistanceRatio: 0.5,
        touchRatio: 1,
        breakpoints: {
            640: { slidesPerView: 7 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 6 }
        }
    });

    // ═══ HORIZONTAL (todas las medias) ═══
    const hCount = wrapH.children.length;
    swiperMiniH = new Swiper('.swiper-mini-h', {
        slidesPerView: 4,           // móvil: 4 miniaturas
        spaceBetween: 8,
        speed: 300,
        centeredSlides: true,
        loop: true,
        loopedSlides: hCount,
        touchRatio: 1,
        resistance: true,
        resistanceRatio: 0.5,
        breakpoints: {
            // Tablet
            640: { slidesPerView: 8 },
            // PC
            1024: { slidesPerView: 7 },
            // Desktop grande
            1280: { slidesPerView: 7 }
        }
    });

    // ═══ FLECHAS: cambian la imagen principal, no el swiper ═══
    const btnPrev = document.getElementById('mini-h-prev');
    const btnNext = document.getElementById('mini-h-next');

    if (btnPrev) {
        const cleanPrev = btnPrev.cloneNode(true);
        btnPrev.parentNode.replaceChild(cleanPrev, btnPrev);
        cleanPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            const medias = window._detalleMedias || [];
            const currentIdx = parseInt(document.getElementById('img-principal')?.dataset.mediaIdx || 0);
            const newIdx = (currentIdx - 1 + medias.length) % medias.length;
            cambiarImagenPrincipal(medias, newIdx);
        });
    }
    if (btnNext) {
        const cleanNext = btnNext.cloneNode(true);
        btnNext.parentNode.replaceChild(cleanNext, btnNext);
        cleanNext.addEventListener('click', (e) => {
            e.stopPropagation();
            const medias = window._detalleMedias || [];
            const currentIdx = parseInt(document.getElementById('img-principal')?.dataset.mediaIdx || 0);
            const newIdx = (currentIdx + 1) % medias.length;
            cambiarImagenPrincipal(medias, newIdx);
        });
    }

    // ─── Click en miniaturas (después de init para atrapar clones del loop) ───
    const bindClicks = (swiper) => {
        if (!swiper) return;
        swiper.wrapperEl.querySelectorAll('.swiper-slide[data-media-idx]').forEach(slide => {
            slide.addEventListener('click', () => {
                const idx = parseInt(slide.dataset.mediaIdx);
                if (!isNaN(idx)) {
                    cambiarImagenPrincipal(window._detalleMedias, idx);
                    marcarMiniaturaActiva(idx);
                }
            });
        });
    };
    bindClicks(swiperMiniH);
    bindClicks(swiperMiniVLeft);
    bindClicks(swiperMiniVRight);
}

function marcarMiniaturaActiva(idxActivo) {
    const todos = document.querySelectorAll(
        '.swiper-mini-h .swiper-slide, .swiper-mini-v-left .swiper-slide, .swiper-mini-v-right .swiper-slide'
    );

    // Reset
    todos.forEach(slide => {
        slide.classList.remove('swiper-slide-thumb-active');
        slide.style.opacity = '0.5';
        slide.style.transform = 'scale(1)';
        slide.style.borderColor = 'transparent';
        slide.style.boxShadow = 'none';   // ← asegúrate de que esté
    });

    // Activar todos los que coincidan (incluye clones del loop)
    todos.forEach(slide => {
        if (parseInt(slide.dataset.mediaIdx) === idxActivo) {
            slide.classList.add('swiper-slide-thumb-active');
            slide.style.opacity = '1';
            // slide.style.transform = 'scale(1.08)';
            slide.style.borderColor = '#FB7701';
        }
    });
}

function cambiarImagenPrincipal(medias, idx) {
    const container = document.getElementById('zoom-container');
    const imgPrincipal = document.getElementById('img-principal');
    const badgeVideo = document.getElementById('badge-video-principal');
    if (!container || !imgPrincipal) return;

    const media = medias[idx];
    if (!media) return;

    // Limpieza de video anterior
    container.querySelectorAll('video').forEach(v => {
        v.pause(); v.removeAttribute('src'); v.load(); v.remove();
    });
    container.querySelectorAll('#video-play-overlay, .btn-video-fullscreen').forEach(o => o.remove());
    imgPrincipal.style.display = 'block';
    imgPrincipal.style.opacity = '1';

    if (media.tipo === 'video') {
        imgPrincipal.style.display = 'none';
        // ... (tu código de video se mantiene igual) ...
        const video = document.createElement('video');
        video.src = media.src;
        video.poster = media.poster || '';
        video.style.backgroundColor = 'transparent';  // negro mate #0c0a09, o pon #ffffff o el color que quieras
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.preload = 'metadata';
        video.className = 'w-full h-full object-contain';
        // video.style.borderRadius = '1rem';
        video.loop = false;
        video.muted = false;
        video.style.pointerEvents = 'none';
        
        const playOverlay = document.createElement('div');
        playOverlay.id = 'video-play-overlay';
        playOverlay.className = 'absolute inset-0 flex items-center justify-center bg-transparent cursor-pointer z-10 transition-opacity duration-300';
        playOverlay.innerHTML = `
            <div class="size-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <i class="ri-play-fill text-4xl text-temu ml-1"></i>
            </div>
        `;
        
        playOverlay.addEventListener('click', (e) => {
            e.stopPropagation();
            video.play();
        });

        video.addEventListener('click', (e) => {
            e.stopPropagation();
            if (video.paused) video.play();
            else video.pause();
        });
        
        video.addEventListener('play', () => {
            playOverlay.style.opacity = '0';
            setTimeout(() => playOverlay.style.display = 'none', 300);
        });
        video.addEventListener('pause', () => {
            playOverlay.style.display = 'flex';
            setTimeout(() => playOverlay.style.opacity = '1', 10);
        });
        video.addEventListener('ended', () => {
            playOverlay.style.display = 'flex';
            setTimeout(() => playOverlay.style.opacity = '1', 10);
        });

        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.className = 'btn-video-fullscreen absolute bottom-3 left-3 z-20 size-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200';
        fullscreenBtn.innerHTML = '<i class="ri-fullscreen-line text-white text-xl"></i>';
        fullscreenBtn.title = 'Pantalla completa';
        fullscreenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            abrirLightbox(idx);
        });

        container.appendChild(video);
        container.appendChild(playOverlay);
        container.appendChild(fullscreenBtn);
        
        if (badgeVideo) badgeVideo.classList.remove('hidden');
    } else {
        imgPrincipal.src = media.src;
        imgPrincipal.style.display = 'block';
        if (badgeVideo) badgeVideo.classList.add('hidden');
    }
    
    imgPrincipal.dataset.mediaIdx = idx;

    marcarMiniaturaActiva(idx);

    // ─── Sincronizar swipers ───
    // Horizontal: índice global directo
    if (swiperMiniH) {
        if (swiperMiniH.params.loop) swiperMiniH.slideToLoop(idx, 300, false);
        else swiperMiniH.slideTo(idx, 300, false);
    }

    // Vertical izquierda: solo almacena pares → índice local = idx/2
    if (swiperMiniVLeft && idx % 2 === 0) {
        const local = idx / 2;
        if (swiperMiniVLeft.params.loop) swiperMiniVLeft.slideToLoop(local, 300, false);
        else swiperMiniVLeft.slideTo(local, 300, false);
    }

    // Vertical derecha: solo almacena impares → índice local = (idx-1)/2
    if (swiperMiniVRight && idx % 2 !== 0) {
        const local = (idx - 1) / 2;
        if (swiperMiniVRight.params.loop) swiperMiniVRight.slideToLoop(local, 300, false);
        else swiperMiniVRight.slideTo(local, 300, false);
    }

    window.updateDetalleCounter?.();
}

// Genera thumbnail de video de forma asíncrona
function generarThumbnailVideo(videoSrc, callback) {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.muted = true;
    video.playsInline = true;
    video.preload = 'metadata';

    const onReady = () => {
        try {
            video.currentTime = 0.1;
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth || 320;
            canvas.height = video.videoHeight || 240;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            callback(canvas.toDataURL('image/jpeg', 0.7));
        } catch (e) {
            callback(null);
        }
    };

    video.addEventListener('loadeddata', onReady);
    video.addEventListener('error', () => callback(null));
    video.load();
}

// ─── ZOOM ───
// ============================================================
// ─── ZOOM + SWIPE + CONTADOR (imagen principal detalle) ───
window._zoomHandlers = window._zoomHandlers || {};

function initZoomAndSwipe() {
    const container = document.getElementById('zoom-container');
    const img = document.getElementById('img-principal');
    const contador = document.getElementById('contador-principal');
    if (!container || !img) return;

    // 🔥 LIMPIAR LISTENERS ANTERIORES (evita acumulación)
    if (window._zoomHandlers.cleanup) {
        window._zoomHandlers.cleanup();
    }

    let scale = 1;
    let panX = 0, panY = 0;
    let isDragging = false;
    let isPinching = false;
    let startX, startY, startPanX, startPanY;
    let initialPinchDistance = 0;
    let initialScale = 1;
    let touchStartX = 0, touchStartY = 0, touchStartTime = 0;
    let isSwiping = false;
    let isTap = true;
    let hasDragged = false;

    function applyTransform() {
        img.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    }

    function resetZoom() {
        scale = 1; panX = 0; panY = 0;
        img.style.transition = 'transform 0.25s ease';
        applyTransform();
        setTimeout(() => { img.style.transition = 'none'; }, 250);
    }

    function updateCounter() {
        const idx = parseInt(img.dataset.mediaIdx || 0) + 1;
        const total = window._detalleMedias?.length || 1;
        if (contador) contador.textContent = `${idx}/${total}`;
    }
    updateCounter();
    window.updateDetalleCounter = updateCounter;

    // --- PC: Hover zoom ---
    const onMouseMoveHover = (e) => {
        if (window.innerWidth < 1024 || scale > 1.05) return;
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
        container.classList.add('zoom-activo');
        img.style.transform = 'scale(2.5)';
    };
    const onMouseLeaveHover = () => {
        if (scale <= 1.05) {
            container.classList.remove('zoom-activo');
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'center center';
        }
    };

    // --- PC: Wheel zoom libre ---
    const onWheel = (e) => {
        if (window.innerWidth < 1024) return;
        e.preventDefault();
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const factor = e.deltaY < 0 ? 1.12 : 0.88;
        const newScale = Math.min(Math.max(scale * factor, 1), 5);
        if (newScale !== scale) {
            panX = mouseX - (mouseX - panX) * (newScale / scale);
            panY = mouseY - (mouseY - panY) * (newScale / scale);
            scale = newScale;
            img.style.transition = 'none';
            applyTransform();
        }
        if (scale <= 1.05) {
            container.classList.remove('zoom-activo');
            img.style.transformOrigin = 'center center';
        }
    };

    // --- PC: Pan con mouse ---
    const onMouseDown = (e) => {
        if (scale <= 1.05) return;
        isDragging = true;
        startX = e.clientX; startY = e.clientY;
        startPanX = panX; startPanY = panY;
        img.style.cursor = 'grabbing';
    };
    const onWindowMouseMove = (e) => {
        if (!isDragging) return;
        panX = startPanX + (e.clientX - startX);
        panY = startPanY + (e.clientY - startY);
        img.style.transition = 'none';
        applyTransform();
    };
    const onWindowMouseUp = () => {
        isDragging = false;
        img.style.cursor = scale > 1.05 ? 'grab' : 'default';
    };

    
    let lightboxOpened = false;

    // --- PC: 1 click abre overlay | Móvil: ignoramos click, todo por touch ---
    const onClick = (e) => {
        if (e.target.closest('video') || e.target.closest('#video-play-overlay') || e.target.closest('.btn-video-fullscreen')) return;
        if (lightboxOpened) return;
        if (window.innerWidth < 1024) return; // Móvil: todo por touch, no por click
        
        const idx = parseInt(img.dataset.mediaIdx || 0);
        abrirLightbox(idx);
    };

    // --- Mobile: Touch (single tap, doble tap zoom, pinch, pan, swipe) ---
let touchCount = 0;
let touchTimer = null;

const onTouchStart = (e) => {
        if (e.target.closest('.btn-video-fullscreen')) return;

    if (e.touches.length === 2) {
        isPinching = true;
        isDragging = false;
        isSwiping = false;
        touchCount = 0;
        clearTimeout(touchTimer);
        initialPinchDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
        );
        initialScale = scale;
    } else if (e.touches.length === 1) {
        touchCount++;
        isTap = true;
        hasDragged = false;
        
        if (touchCount === 1) {
            touchTimer = setTimeout(() => {
                touchCount = 0;
            }, 300);
        } else if (touchCount === 2) {
            clearTimeout(touchTimer);
            touchCount = 0;
            e.preventDefault(); // ← evita que se dispare el click fantasma después
            
            if (scale > 1.05) {
                resetZoom();
            } else {
                const touch = e.touches[0];
                const rect = container.getBoundingClientRect();
                const clickX = touch.clientX - rect.left;
                const clickY = touch.clientY - rect.top;
                scale = 2.5;
                panX = (rect.width/2 - clickX) * (scale - 1);
                panY = (rect.height/2 - clickY) * (scale - 1);
                img.style.transition = 'transform 0.25s ease';
                applyTransform();
                setTimeout(() => { img.style.transition = 'none'; }, 250);
            }
        }

        if (scale > 1.05) {
            isDragging = true;
            isSwiping = false;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startPanX = panX;
            startPanY = panY;
        } else {
            isSwiping = true;
            isDragging = false;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
        }
    }
};

const onTouchMove = (e) => {
    if (isPinching && e.touches.length === 2) {
        e.preventDefault();
        const dist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
        );
        scale = Math.min(Math.max((dist / initialPinchDistance) * initialScale, 1), 5);
        img.style.transition = 'none';
        applyTransform();
    } else if (isDragging && e.touches.length === 1 && scale > 1.05) {
        e.preventDefault();
        panX = startPanX + (e.touches[0].clientX - startX);
        panY = startPanY + (e.touches[0].clientY - startY);
        img.style.transition = 'none';
        applyTransform();
    } else if (isSwiping && e.touches.length === 1 && scale <= 1.05) {
        const dy = Math.abs(e.touches[0].clientY - touchStartY);
        const dx = Math.abs(e.touches[0].clientX - touchStartX);
        if (dy > dx * 1.2) isSwiping = false;
        // Si mueve el dedo más de 10px, cancela el single tap (no abre lightbox al soltar)
        if ((dx > 40 || dy > 40) && touchCount === 1) {
            isTap = false;
            hasDragged = true;
            touchCount = 0;
            clearTimeout(touchTimer);
        }
    }
};

const onTouchEnd = (e) => {
    if (e.touches.length < 2) isPinching = false;

    if (e.touches.length === 0) {
        if (isDragging) {
            isDragging = false;
            if (scale < 1.05) resetZoom();
        }
        if (isSwiping && scale <= 1.05) {
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dt = Date.now() - touchStartTime;
            const threshold = container.offsetWidth * 0.12;
            if (Math.abs(dx) > threshold && dt < 500) {
                touchCount = 0;
                clearTimeout(touchTimer);
                const medias = window._detalleMedias || [];
                const currentIdx = parseInt(img.dataset.mediaIdx || 0);
                const newIdx = dx < 0 
                    ? (currentIdx + 1) % medias.length 
                    : (currentIdx - 1 + medias.length) % medias.length;
                cambiarImagenPrincipal(medias, newIdx);
            }
        }
        
         // TAP SIMPLE: video → play/pause | imagen → lightbox
        if (isTap && !isPinching) {
            const vid = container.querySelector('video');
            if (vid) {
                // Hay video en el contenedor → SOLO reproduce/pausa, NUNCA lightbox
                vid.paused ? vid.play() : vid.pause();
            } else {
                // Es imagen → abre lightbox
                lightboxOpened = true;
                const idx = parseInt(img.dataset.mediaIdx || 0);
                abrirLightbox(idx);
                setTimeout(() => lightboxOpened = false, 500);
            }
        }

        isSwiping = false;
        isTap = true;
    }
};

    // Registrar todo
    container.addEventListener('mousemove', onMouseMoveHover);
    container.addEventListener('mouseleave', onMouseLeaveHover);
    // Wheel zoom SOLO si NO es PC (en PC usamos el overlay, no wheel zoom)
    container.addEventListener('wheel', onWheel, { passive: false });

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onWindowMouseMove);
    window.addEventListener('mouseup', onWindowMouseUp);
    container.addEventListener('click', onClick);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);

    // Guardar función de limpieza para la próxima vez
    window._zoomHandlers.cleanup = () => {
    container.removeEventListener('mousemove', onMouseMoveHover);
    container.removeEventListener('mouseleave', onMouseLeaveHover);
    container.removeEventListener('wheel', onWheel);
    container.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mousemove', onWindowMouseMove);
    window.removeEventListener('mouseup', onWindowMouseUp);
    container.removeEventListener('click', onClick);
    container.removeEventListener('touchstart', onTouchStart);
    container.removeEventListener('touchmove', onTouchMove);
    container.removeEventListener('touchend', onTouchEnd);
    };
}

// ─── LIGHTBOX ───
function abrirLightbox(startIdx) {
    const medias = window._detalleMedias || [];
    if (!medias.length) return;

    document.querySelectorAll('#zoom-container video').forEach(v => {
        v.pause(); v.currentTime = 0;
    });

    const lightbox = document.getElementById('lightbox-detalle');
    const wrapper = document.getElementById('lightbox-wrapper');
    const contadorLb = document.getElementById('lightbox-contador');
    const overlayMiniWrapper = document.getElementById('overlay-mini-wrapper');
    const isPC = window.innerWidth >= 1024;

    if (!lightbox || !wrapper) return;

    if (isPC) window._overlayPCMode = 'contain';

    function updateLbCounter(idx) {
        if (contadorLb) {
            contadorLb.textContent = `${idx + 1}/${medias.length}`;
            contadorLb.classList.remove('hidden');
        }
    }

    wrapper.innerHTML = '';
    if (overlayMiniWrapper) overlayMiniWrapper.innerHTML = '';

    // ═══════════════════════════════════════════════════════
    // 1. CREAR SLIDES (diferente para PC y móvil)
    // ═══════════════════════════════════════════════════════
    medias.forEach((media, idx) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide flex items-center justify-center overflow-hidden';
        slide.style.touchAction = 'pan-y';
        
        if (media.tipo === 'video') {
            // Video igual para ambos
            slide.innerHTML = `<video src="${media.src}" controls playsinline class="max-h-[85vh] max-w-[90vw] lg:max-h-full lg:max-w-full lg:w-full lg:h-full object-contain rounded-lg transition-all duration-300 overlay-pc-media" data-idx="${idx}"></video>`;
        } else {
            if (isPC) {
                // PC: tu HTML actual con overlay-pc-media
                slide.innerHTML = `
                    <div class="lightbox-img-wrapper relative flex items-center justify-center w-full h-full overflow-hidden">
                        <img src="${media.src}" class="max-h-[85vh] max-w-[90vw] lg:max-h-full lg:max-w-full lg:w-full lg:h-full object-contain rounded-lg transition-all duration-300 overlay-pc-media" data-idx="${idx}" alt="">
                    </div>
                `;
            } else {
                // MÓVIL: HTML simple del antiguo con lightbox-zoom-target
                slide.innerHTML = `
                    <div class="lightbox-img-wrapper relative flex items-center justify-center w-full h-full overflow-hidden">
                        <img src="${media.src}" class="max-h-[85vh] max-w-[90vw] object-contain lightbox-zoom-target transition-transform duration-75" alt="">
                    </div>
                `;
            }
        }
        wrapper.appendChild(slide);
    });

    // ═══════════════════════════════════════════════════════
    // 2. MINIATURAS ABAJO (solo PC)
    // ═══════════════════════════════════════════════════════
    if (isPC && overlayMiniWrapper) {
        medias.forEach((media, idx) => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.style.cssText = 'width:56px;height:56px;border-radius:8px;overflow:hidden;cursor:pointer;opacity:0.5;border:2px solid transparent;transition:all 0.2s ease;position:relative;background:#e7e5e4;flex-shrink:0;';
            if (window.innerWidth >= 640) {
                slide.style.cssText = 'width:68px;height:68px;border-radius:10px;overflow:hidden;cursor:pointer;opacity:0.5;border:2px solid transparent;transition:all 0.2s ease;position:relative;background:#e7e5e4;flex-shrink:0;';
            }
            slide.dataset.mediaIdx = idx;

            if (media.tipo === 'video') {
                slide.innerHTML = `<video src="${media.src}" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;display:block;"></video>
                    <div style="position:absolute;inset:0;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;pointer-events:none;"><i class="ri-play-fill" style="color:white;font-size:16px;"></i></div>`;
            } else {
                slide.innerHTML = `<img src="${media.src}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">`;
            }
            overlayMiniWrapper.appendChild(slide);
        });
    }

    document.body.style.overflow = 'hidden';
    lightbox.classList.remove('hidden');
    setLightboxUIVisible(true); // siempre visible al abrir
    updateLbCounter(startIdx);

    // Fullscreen solo móvil
    

    // Destruir anteriores
    if (swiperLightbox) swiperLightbox.destroy(true, true);
    if (window.swiperOverlayMini) {
        window.swiperOverlayMini.destroy(true, true);
        window.swiperOverlayMini = null;
    }

    // ═══════════════════════════════════════════════════════
    // 3. SWIPER PRINCIPAL
    // ═══════════════════════════════════════════════════════
    swiperLightbox = new Swiper('.swiper-lightbox', {
        initialSlide: startIdx,
        loop: medias.length > 1,
        pagination: { el: '.pagination-lightbox', clickable: true },
        keyboard: { enabled: true },
        touchRatio: isPC ? 1 : 2,  // Móvil: 2 (fluido) | PC: 1
        on: {
            slideChange: function() {
                setLightboxUIVisible(true); // ← AGREGA ESTA LÍNEA AL INICIO
                updateLbCounter(this.realIndex);
                actualizarBotonLightboxCarrito();  // ← AGREGA ESTA LÍNEA
                
                // PC: sincronizar miniaturas y resetear modo
                if (isPC) {
                    window._overlayPCMode = 'contain';
                    aplicarModoOverlayPC(this.slides[this.activeIndex]);
                    if (window.swiperOverlayMini) {
                        window.swiperOverlayMini.slideToLoop(this.realIndex, 200);
                        marcarMiniOverlayActiva(this.realIndex);
                    }
                }
                
                // Móvil: resetear zoom al cambiar de slide
                if (!isPC) {
                    this.slides.forEach((slide) => {
                        const zImg = slide.querySelector('.lightbox-zoom-target');
                        if (zImg) {
                            zImg.style.transform = 'scale(1)';
                        }
                    });
                }

                // Videos: play/pause
                this.slides.forEach((slide, idx) => {
                    const vid = slide.querySelector('video');
                    if (vid) {
                        if (idx === this.activeIndex) vid.play().catch(() => {});
                        else { vid.pause(); vid.currentTime = 0; }
                    }
                });
            }
        }
    });
     // Fullscreen solo móvil
    if (!isPC) {
        requestAnimationFrame(() => {
            if (lightbox.requestFullscreen) lightbox.requestFullscreen().catch(() => {});
        });
    }

    // ═══════════════════════════════════════════════════════
    // 4. PC: Miniaturas, flechas, modo contain/cover, zoom mouse
    // ═══════════════════════════════════════════════════════
    if (isPC) {
        if (overlayMiniWrapper && overlayMiniWrapper.children.length) {
            const miniCount = overlayMiniWrapper.children.length;
            const loopCfg = miniCount > 3 ? { loop: true, loopedSlides: miniCount } : { loop: false };
            
            window.swiperOverlayMini = new Swiper('.swiper-overlay-mini', {
                slidesPerView: 14,
                spaceBetween: 8,
                centeredSlides: true,
                speed: 300,
                touchRatio: 1,

                loop: true,
                
                resistance: true,
                resistanceRatio: 0.5,
                ...loopCfg,
            });

            window.swiperOverlayMini.wrapperEl.querySelectorAll('.swiper-slide').forEach(slide => {
                slide.addEventListener('click', () => {
                    const idx = parseInt(slide.dataset.mediaIdx);
                    if (!isNaN(idx)) swiperLightbox.slideToLoop(idx, 300);
                });
            });

            marcarMiniOverlayActiva(startIdx);
        }

        const prevBtn = document.getElementById('overlay-pc-prev');
        const nextBtn = document.getElementById('overlay-pc-next');
        if (prevBtn) prevBtn.onclick = () => swiperLightbox?.slidePrev();
        if (nextBtn) nextBtn.onclick = () => swiperLightbox?.slideNext();

        setTimeout(() => {
            wrapper.querySelectorAll('.overlay-pc-media').forEach(mediaEl => {
                mediaEl.style.cursor = 'pointer';
                mediaEl.onclick = (e) => {
                    e.stopPropagation();
                    const activeSlide = swiperLightbox.slides[swiperLightbox.activeIndex];
                    window._overlayPCMode = window._overlayPCMode === 'contain' ? 'cover' : 'contain';
                    aplicarModoOverlayPC(activeSlide);
                };
            });
            aplicarModoOverlayPC(swiperLightbox.slides[swiperLightbox.activeIndex]);
        }, 100);
    }

    // ═══════════════════════════════════════════════════════
    // 5. MÓVIL: Zoom fluido integrado (del archivo antiguo)
    //    Pinch con 2 dedos + pan + doble tap
    // ═══════════════════════════════════════════════════════
    if (!isPC) {
        setTimeout(() => {
            wrapper.querySelectorAll('.lightbox-img-wrapper').forEach(wrapperEl => {
                const img = wrapperEl.querySelector('img');
                if (!img) return;

                let lbScale = 1;
                let lbPanX = 0, lbPanY = 0;
                let isPanning = false;
                let isPinching = false;
                let startX = 0, startY = 0;
                let startPanX = 0, startPanY = 0;
                let pinchStartDist = 0;
                let pinchStartScale = 1;

                function lbApply() {
                    img.style.transform = `translate(${lbPanX}px, ${lbPanY}px) scale(${lbScale})`;
                }

                // Doble tap para zoom
                let lastTap = 0;
                img.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const now = Date.now();
                    if (now - lastTap < 300) {
                        if (lbScale > 1.1) {
                            // Zoom OUT → mostrar botones
                            lbScale = 1; lbPanX = 0; lbPanY = 0;
                            swiperLightbox.allowTouchMove = true;
                            setLightboxUIVisible(true);  // ← AQUÍ
                        } else {
                            // Zoom IN → ocultar botones
                            lbScale = 2.5;
                            swiperLightbox.allowTouchMove = false;
                            setLightboxUIVisible(false); // ← AQUÍ
                        }
                        img.style.transition = 'transform 0.2s ease';
                        lbApply();
                        setTimeout(() => { img.style.transition = 'transform 0.05s linear'; }, 200);
                    }
                    lastTap = now;
                });

                wrapperEl.addEventListener('touchstart', (e) => {
                    if (e.touches.length === 2) {
                        isPinching = true;
                        isPanning = false;
                        pinchStartDist = Math.hypot(
                            e.touches[0].clientX - e.touches[1].clientX,
                            e.touches[0].clientY - e.touches[1].clientY
                        );
                        pinchStartScale = lbScale;
                    } else if (e.touches.length === 1 && lbScale > 1.1) {
                        isPanning = true;
                        isPinching = false;
                        startX = e.touches[0].clientX;
                        startY = e.touches[0].clientY;
                        startPanX = lbPanX;
                        startPanY = lbPanY;
                    }
                }, { passive: true });

                wrapperEl.addEventListener('touchmove', (e) => {
                    if (isPinching && e.touches.length === 2) {
                        e.preventDefault();
                        const dist = Math.hypot(
                            e.touches[0].clientX - e.touches[1].clientX,
                            e.touches[0].clientY - e.touches[1].clientY
                        );
                        lbScale = Math.min(Math.max((dist / pinchStartDist) * pinchStartScale, 1), 5);
                        if (lbScale > 1.1) {
                            swiperLightbox.allowTouchMove = false;
                            setLightboxUIVisible(false); // ← OCULTAR al agrandar
                        } else {
                            swiperLightbox.allowTouchMove = true;
                            setLightboxUIVisible(true);  // ← MOSTRAR si vuelve a 1
                        }
                        lbApply();
                    } else if (isPanning && e.touches.length === 1 && lbScale > 1.1) {
                        e.preventDefault();
                        lbPanX = startPanX + (e.touches[0].clientX - startX);
                        lbPanY = startPanY + (e.touches[0].clientY - startY);
                        lbApply();
                    }
                }, { passive: false });

                wrapperEl.addEventListener('touchend', (e) => {
                    if (e.touches.length < 2) isPinching = false;
                    if (e.touches.length === 0) {
                        isPanning = false;
                        if (lbScale < 1.15) {
                            lbScale = 1; lbPanX = 0; lbPanY = 0;
                            swiperLightbox.allowTouchMove = true;
                            setLightboxUIVisible(true); // ← MOSTRAR al volver a normal
                            lbApply();
                        }
                    }
                });
            });
        }, 100);
    }
    // Mostrar/ocultar botón de carrito según dispositivo
    const btnCarritoLb = document.getElementById('lightbox-btn-carrito');
    if (btnCarritoLb) {
        if (!isPC) btnCarritoLb.classList.remove('hidden');
        else btnCarritoLb.classList.add('hidden');
        actualizarBotonLightboxCarrito();
    }
}

function marcarMiniOverlayActiva(idxActivo) {
    if (!window.swiperOverlayMini) return;
    window.swiperOverlayMini.wrapperEl.querySelectorAll('.swiper-slide').forEach(slide => {
        const idx = parseInt(slide.dataset.mediaIdx);
        if (idx === idxActivo) {
            slide.style.opacity = '1';
            slide.style.borderColor = '#FB7701';
            // slide.style.transform = 'scale(1.08)';
        } else {
            slide.style.opacity = '0.5';
            slide.style.borderColor = 'transparent';
            slide.style.transform = 'scale(1)';
        }
    });
}

function aplicarModoOverlayPC(slide) {
    const img = slide.querySelector('img.overlay-pc-media');
    const vid = slide.querySelector('video.overlay-pc-media');
    const media = img || vid;
    if (!media) return;

    // Limpiar zoom anterior
    if (media._cleanupZoom) media._cleanupZoom();

    if (window._overlayPCMode === 'contain') {
        media.style.objectFit = 'contain';
        media.style.cursor = 'pointer';
        media.style.transform = 'scale(1)';
        media.style.transformOrigin = 'center center';
        media.style.transition = 'all 0.3s ease';
    } else {
        media.style.objectFit = 'contain';
        media.style.cursor = 'zoom-in';
        media.style.transition = 'none';
        if (img) setupOverlayPCZoom(slide, img);
    }
}

function setupOverlayPCZoom(slide, img) {
    const wrapper = slide.querySelector('.lightbox-img-wrapper') || slide;
    if (!wrapper || !img) return;

    let scale = 1;
    let panX = 0, panY = 0;
    let isPanning = false;
    let startX, startY, startPanX, startPanY;

    function applyTransform() {
        img.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    }

    function resetZoom() {
        scale = 1; panX = 0; panY = 0;
        img.style.transition = 'transform 0.25s ease';
        img.style.transform = 'scale(1)';
        img.style.transformOrigin = 'center center';
        setTimeout(() => { img.style.transition = 'none'; }, 250);
    }

    // Hover zoom tipo lupa (IGUAL que imagen principal del detalle)
    const onMouseMove = (e) => {
        if (isPanning || scale > 1.05) return;
        const rect = wrapper.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
        wrapper.classList.add('zoom-activo');
        img.style.transform = 'scale(2.5)';
        img.style.transition = 'transform 0.1s ease-out';
    };

    const onMouseLeave = () => {
        if (isPanning) return;
        wrapper.classList.remove('zoom-activo');
        img.style.transform = 'scale(1)';
        img.style.transformOrigin = 'center center';
        img.style.transition = 'transform 0.25s ease';
    };

    // Wheel zoom libre (IGUAL que imagen principal)
    const onWheel = (e) => {
        e.preventDefault();
        const rect = wrapper.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const factor = e.deltaY < 0 ? 1.12 : 0.88;
        const newScale = Math.min(Math.max(scale * factor, 1), 5);
        if (newScale !== scale) {
            panX = mouseX - (mouseX - panX) * (newScale / scale);
            panY = mouseY - (mouseY - panY) * (newScale / scale);
            scale = newScale;
            img.style.transition = 'none';
            applyTransform();
        }
        if (scale <= 1.05) {
            wrapper.classList.remove('zoom-activo');
            img.style.transformOrigin = 'center center';
        }
    };

    // Pan con mouse (arrastrar cuando está zoomed) — esto soluciona "no me deja desplazarme"
    const onMouseDown = (e) => {
        if (scale <= 1.05) {
            scale = 2.5;
            const rect = wrapper.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            panX = (rect.width/2 - clickX) * (scale - 1);
            panY = (rect.height/2 - clickY) * (scale - 1);
            img.style.transition = 'transform 0.25s ease';
            applyTransform();
            setTimeout(() => { img.style.transition = 'none'; }, 250);
        }
        isPanning = true;
        startX = e.clientX; startY = e.clientY;
        startPanX = panX; startPanY = panY;
        img.style.cursor = 'grabbing';
    };

    const onWindowMouseMove = (e) => {
        if (!isPanning) return;
        panX = startPanX + (e.clientX - startX);
        panY = startPanY + (e.clientY - startY);
        img.style.transition = 'none';
        applyTransform();
    };

    const onWindowMouseUp = () => {
        isPanning = false;
        img.style.cursor = 'grab';
    };

    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('mouseleave', onMouseLeave);
    wrapper.addEventListener('wheel', onWheel, { passive: false });
    wrapper.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onWindowMouseMove);
    window.addEventListener('mouseup', onWindowMouseUp);

    img._cleanupZoom = () => {
        wrapper.removeEventListener('mousemove', onMouseMove);
        wrapper.removeEventListener('mouseleave', onMouseLeave);
        wrapper.removeEventListener('wheel', onWheel);
        wrapper.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onWindowMouseMove);
        window.removeEventListener('mouseup', onWindowMouseUp);
        resetZoom();
    };
}

function cerrarLightbox() {
    // Salir de fullscreen nativo
    if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    }


    setLightboxUIVisible(true); // ← RESET al cerrar
    // Ocultar botón de carrito del lightbox
    const btnCarritoLb = document.getElementById('lightbox-btn-carrito');
    if (btnCarritoLb) btnCarritoLb.classList.add('hidden');

    const lightbox = document.getElementById('lightbox-detalle');
    const contadorLb = document.getElementById('lightbox-contador');
    if (!lightbox) return;
    
    
    lightbox.classList.add('hidden');
    if (contadorLb) contadorLb.classList.add('hidden');
    document.body.style.overflow = '';
    
    if (swiperLightbox) {
        swiperLightbox.slides.forEach(slide => {
            const vid = slide.querySelector('video');
            if (vid) { vid.pause(); vid.currentTime = 0; vid.removeAttribute('src'); vid.load(); }
            const img = slide.querySelector('img');
            if (img && img._cleanupZoom) img._cleanupZoom();
        });
        swiperLightbox.destroy(true, true);
        swiperLightbox = null;
    }
    if (window.swiperOverlayMini) {
        window.swiperOverlayMini.destroy(true, true);
        window.swiperOverlayMini = null;
    }
}

// ─── TÍTULO LARGO EXPANDIBLE (estilo Temu) ───
function initTituloLargo() {
    const p = document.getElementById('detalle-titulo-largo');
    const btn = document.getElementById('btn-expandir-titulo');
    if (!p || !btn) return;

    // Resetear a colapsado para medir overflow
    p.classList.add('line-clamp-2');
    p.classList.remove('expandido');
    btn.innerHTML = '<i class="ri-arrow-down-s-line text-lg leading-none"></i>';

    // Medir si hay más de 2 líneas
    requestAnimationFrame(() => {
        const isOverflow = p.scrollHeight > p.clientHeight + 2;
        if (isOverflow) {
            btn.classList.remove('hidden');
        } else {
            btn.classList.add('hidden');
        }
    });

    // Limpiar listener anterior para no acumular
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', () => {
        const pEl = document.getElementById('detalle-titulo-largo');
        const estaExpandido = pEl.classList.contains('expandido');

        if (estaExpandido) {
            pEl.classList.remove('expandido');
            pEl.classList.add('line-clamp-2');
            newBtn.innerHTML = '<i class="ri-arrow-down-s-line text-lg leading-none"></i>';
        } else {
            pEl.classList.remove('line-clamp-2');
            pEl.classList.add('expandido');
            newBtn.innerHTML = '<i class="ri-arrow-up-s-line text-lg leading-none"></i>';
        }
    });
}

// ─── RECARGAR TEXTOS DEL DETALLE AL CAMBIAR IDIOMA ───
function recargarTextosDetalle() {
    if (!productoActualId) return;
    const producto = getProducto(productoActualId);
    if (!producto) return;

    // Título largo
    const tituloLargo = document.getElementById('detalle-titulo-largo');
    if (tituloLargo) {
        tituloLargo.textContent = producto.tituloLargo?.[idiomaActual] || producto.tituloLargo?.es || '';
        initTituloLargo();
    }

    // Accordions
    const accEnv = document.getElementById('accordion-envio');
    const accGar = document.getElementById('accordion-garantia');
    const accDet = document.getElementById('accordion-detalles');
    const accDon = document.getElementById('accordion-donacion');

    if (accEnv) accEnv.textContent = producto.envio?.[idiomaActual] || producto.envio?.es || '';
    if (accGar) accGar.textContent = producto.garantia?.[idiomaActual] || producto.garantia?.es || '';
    if (accDet) accDet.textContent = producto.detalles?.[idiomaActual] || producto.detalles?.es || '';
    if (accDon) accDon.textContent = producto.donacion?.[idiomaActual] || producto.donacion?.es || '';
}

function enablePinchZoom(img) {
    let scale = 1;
    let initialDistance = 0;
    let initialScale = 1;

    img.style.transition = 'transform 0.15s ease-out';
    img.parentElement.style.overflow = 'hidden';

    img.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            initialDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            initialScale = scale;
        }
    }, { passive: true });

    img.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const distance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            scale = Math.min(Math.max((distance / initialDistance) * initialScale, 1), 4);
            img.style.transform = `scale(${scale})`;
        }
    }, { passive: false });

    img.addEventListener('touchend', (e) => {
        if (e.touches.length < 2 && scale < 1.2) {
            scale = 1;
            img.style.transform = 'scale(1)';
        }
    });

    // Doble tap para resetear zoom
    let lastTap = 0;
    img.addEventListener('touchend', () => {
        const now = Date.now();
        if (now - lastTap < 300) {
            scale = 1;
            img.style.transform = 'scale(1)';
        }
        lastTap = now;
    });
}


document.getElementById('lightbox-close')?.addEventListener('click', cerrarLightbox);
document.getElementById('lightbox-detalle')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox-detalle') cerrarLightbox();
});

// Si el usuario sale del fullscreen con ESC, cerrar lightbox
document.addEventListener('fullscreenchange', () => {
    const lightbox = document.getElementById('lightbox-detalle');
    if (!document.fullscreenElement && lightbox && !lightbox.classList.contains('hidden')) {
        cerrarLightbox();
    }
});

// ─── ACCORDIONS (delegación global, 100% funcional) ───
document.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header');
    if (!header) return;

    const item = header.closest('.accordion-item');
    const content = item?.querySelector('.accordion-content');
    const icon = header.querySelector('.accordion-icon');
    if (!content || !icon) return;

    const estaAbierto = content.classList.contains('abierto');

    // Cerrar todos
    document.querySelectorAll('.accordion-content').forEach(c => {
        c.style.maxHeight = '0px';
        c.classList.remove('abierto');
    });
    document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotado'));

    if (!estaAbierto) {
        content.classList.add('abierto');
        icon.classList.add('rotado');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
});

// ─── ESTILOS / COLORES ───
function renderizarEstilos(producto) {
    const container = document.getElementById('detalle-estilos-container');
    if (!container) return;
    container.innerHTML = '';

    const estilos = producto.estilos || [];
    if (!estilos.length) {
        // Fallback: un solo estilo con imagen principal
        estilos.push({ nombre: producto.estilo || 'Estándar', imagen: producto.imagenes?.[0] || '', color: 'Estándar' });
    }

    estilos.forEach((est, idx) => {
        const btn = document.createElement('div');
        btn.className = 'estilo-btn' + (idx === 0 ? ' activo' : '');
        btn.dataset.nombre = est.nombre;
        btn.dataset.color = est.color || est.nombre;
        btn.dataset.imagen = est.imagen;

        const isVideo = est.imagen && est.imagen.match(/\.(mp4|webm|ogg|mov)$/i);
        if (isVideo) {
            btn.innerHTML = `<video src="${est.imagen}" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>`;
        } else {
            btn.innerHTML = `<img src="${est.imagen}" alt="${est.nombre}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`;
        }
        if (est.color && est.color !== est.nombre) {
            btn.innerHTML += `<div class="estilo-label">${est.color}</div>`;
        }

        btn.addEventListener('click', () => {
            container.querySelectorAll('.estilo-btn').forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            estiloSeleccionado = { nombre: est.nombre, color: est.color || est.nombre, imagen: est.imagen };
            document.getElementById('detalle-estilo-nombre').textContent = est.nombre;
            const imgPrincipal = document.getElementById('img-principal');
            if (imgPrincipal) imgPrincipal.src = est.imagen;
            sincronizarFavoritoDetalle(); // 🔥 ACTUALIZAR CORAZÓN AL CAMBIAR ESTILO

            // 🔥 AGREGAR ESTAS 3 LÍNEAS AQUÍ:
            cantidadDetalle = 1;
            actualizarCantidadDisplay();
            actualizarPrecioDetalle();
        });

        container.appendChild(btn);
    });

    if (estilos.length && !estiloSeleccionado) {
        estiloSeleccionado = { nombre: estilos[0].nombre, color: estilos[0].color || estilos[0].nombre, imagen: estilos[0].imagen };
    }
}

// ─── CANTIDAD +/- ───
function actualizarCantidadDisplay() {
    document.querySelectorAll('.detalle-cantidad-valor').forEach(el => {
        el.textContent = cantidadDetalle;
    });
}

function actualizarPrecioDetalle() {
    const producto = getProducto(productoActualId);
    if (!producto) return;

    const totalActual = producto.precio * cantidadDetalle;
    const totalStr = totalActual.toFixed(2);

    // Tamaño dinámico si el número crece mucho
    let sizeClass = 'text-lg';
    if (totalStr.length > 7) sizeClass = 'text-sm';
    else if (totalStr.length > 5) sizeClass = 'text-base';

    // Precio actual (abajo)
    const precioMobile = document.getElementById('detalle-precio-actual-mobile');
    if (precioMobile) {
        precioMobile.className = `font-Russo text-stone-950 dark:text-white whitespace-nowrap ${sizeClass} leading-none mt-0.5`;
        precioMobile.textContent = `s/ ${totalStr}`;
    }

    // Precio tachado (arriba, pequeño)
    const tachadoMobile = document.getElementById('detalle-precio-tachado-mobile');
    if (tachadoMobile && producto.precioOriginal && producto.descuento > 0) {
        const totalOriginal = producto.precioOriginal * cantidadDetalle;
        tachadoMobile.classList.remove('hidden');
        tachadoMobile.textContent = `s/ ${totalOriginal.toFixed(2)}`;
    } else if (tachadoMobile) {
        tachadoMobile.classList.add('hidden');
    }
}

document.querySelectorAll('.detalle-cantidad-menos').forEach(btn => {
    btn.addEventListener('click', () => {
        if (cantidadDetalle > 1) {
            cantidadDetalle--;
            actualizarCantidadDisplay();
            actualizarPrecioDetalle();
        }
    });
});

document.querySelectorAll('.detalle-cantidad-mas').forEach(btn => {
    btn.addEventListener('click', () => {
        cantidadDetalle++;
        actualizarCantidadDisplay();
        actualizarPrecioDetalle();
    });
});

// ─── AGREGAR CARRITO ───
document.getElementById('detalle-btn-carrito')?.addEventListener('click', (e) => {
    const producto = getProducto(productoActualId);
    if (!producto) return;

    const tipo = producto.tipoVariante || 'estilo';
    const labelMap = { estilo: 'Estilo', color: 'Color', talla: 'Talla' };
    const label = labelMap[tipo] || 'Estilo';

    // 🔥 SI ES EL ESTILO BASE, NO ENVIAR VARIANTE (suma con la card original del grid)
    const esEstiloBase = estiloSeleccionado && estiloSeleccionado.nombre === producto.estilo;

    const itemBase = {
        id: producto.id,
        titulo: producto.titulo,
        subtitulo: producto.subtitulo,
        precio: producto.precio,
        imagen: estiloSeleccionado?.imagen || producto.imagenes?.[0] || '',
        variante: esEstiloBase ? null : {
            tipo: label,
            valor: estiloSeleccionado.color || estiloSeleccionado.nombre
        }
    };

    for (let i = 0; i < cantidadDetalle; i++) {
        agregarAlCarrito(itemBase);
    }

    animarFlyToCart(e.currentTarget, itemBase.imagen);
    cantidadDetalle = 1;
    const el = document.getElementById('detalle-cantidad-valor');
    if (el) el.textContent = '1';
});

// ─── FAVORITO ───
function sincronizarFavoritoDetalle() {
    const btn = document.getElementById('detalle-btn-favorito');
    const icono = btn?.querySelector('i');
    if (!btn || !productoActualId) return;

    const producto = getProducto(productoActualId);
    const esEstiloBase = estiloSeleccionado && producto && estiloSeleccionado.nombre === producto.estilo;
    
    // 🔥 Si es base → buscar favorito SIN variante. Si es alternativo → buscar CON esa variante
    const esFav = esEstiloBase
        ? favoritos.some(f => f.id === productoActualId && !f.variante)
        : favoritos.some(f => 
            f.id === productoActualId && 
            f.variante?.valor === (estiloSeleccionado?.color || estiloSeleccionado?.nombre)
        );
    if (esFav) {
        btn.classList.add('activo');
        icono.classList.remove('ri-heart-line', 'text-stone-950', 'dark:text-white');
        icono.classList.add('ri-heart-fill', 'text-temu');
    } else {
        btn.classList.remove('activo');
        icono.classList.remove('ri-heart-fill', 'text-temu');
        icono.classList.add('ri-heart-line', 'text-stone-950', 'dark:text-white');
    }
}

document.getElementById('detalle-btn-favorito')?.addEventListener('click', () => {
    const producto = getProducto(productoActualId);
    if (!producto) return;
    
    const tipo = producto.tipoVariante || 'estilo';
    const labelMap = { estilo: 'Estilo', color: 'Color', talla: 'Talla' };
    const label = labelMap[tipo] || 'Estilo';
    
    const esEstiloBase = estiloSeleccionado && producto && estiloSeleccionado.nombre === producto.estilo;
    
    const productoFav = {
        id: producto.id,
        titulo: producto.titulo,
        subtitulo: producto.subtitulo,
        precio: producto.precio,
        // 🔥 IMAGEN DEL ESTILO SELECCIONADO (incluso para el base)
        imagen: estiloSeleccionado?.imagen || producto.imagenes?.[0] || '',
    };
    
    if (esEstiloBase) {
        // Base: marcarlo para que toggleFavorito busque exacto y no confunda con variantes
        productoFav.esBase = true;
    } else if (estiloSeleccionado) {
        // Variante alternativa
        productoFav.imagenVariante = estiloSeleccionado.imagen;
        productoFav.variante = {
            tipo: label,
            valor: estiloSeleccionado.color || estiloSeleccionado.nombre
        };
    }
    
    toggleFavorito(productoFav);
    sincronizarFavoritoDetalle();
});

// ─── VOLVER ───
function cerrarDetalleProducto(updateHistory = true) {
    const detalle = document.getElementById('producto-detalle');
    if (detalle) {
        detalle.classList.add('hidden');
        detalle.style.removeProperty('transform');
        detalle.style.removeProperty('opacity');
        detalle.style.removeProperty('transition');
    }

    // Pausar y matar videos
    document.querySelectorAll('#zoom-container video').forEach(v => {
        v.pause();
        v.removeAttribute('src');
        v.load();
        v.remove();
    });
    document.querySelectorAll('#zoom-container #video-play-overlay').forEach(o => o.remove());
    const imgPrincipal = document.getElementById('img-principal');
    if (imgPrincipal) {
        imgPrincipal.style.display = 'block';
        imgPrincipal.src = '';
    }

    // 🔥 RESTAURAR LA VISTA ANTERIOR (no siempre a "todos")
    if (window._vistaAnterior) {
        const v = window._vistaAnterior;
        if (v.vista === 'busqueda') {
            // Restaurar tienda SIN mostrar hero (la búsqueda no usa hero)
        const grid = document.getElementById('product-grid');
        const navCat = document.getElementById('nav-categorias');
        const carritoSec = document.getElementById('carrito-section');
        const favSec = document.getElementById('favoritos-section');
        const btnCarritoFlotante = document.getElementById('btn-carrito');
        const separadorNav = navCat ? navCat.nextElementSibling : null;
        const navSuperior = document.querySelector('nav');
        const separadorSuperior = navSuperior ? navSuperior.nextElementSibling : null;
        
        if (grid) grid.classList.remove('hidden');
        if (navCat) navCat.classList.remove('hidden');
        if (carritoSec) carritoSec.classList.add('hidden');
        if (favSec) favSec.classList.add('hidden');
        if (btnCarritoFlotante) btnCarritoFlotante.classList.add('hidden');
        if (separadorNav) separadorNav.classList.remove('hidden');
        if (navSuperior) navSuperior.classList.remove('max-lg:hidden');
        if (separadorSuperior) separadorSuperior.classList.remove('max-lg:hidden');
        
        // Asegurar heroes ocultos
        document.querySelectorAll('.hero-container').forEach(h => {
            h.classList.add('hidden');
            h.style.display = 'none';
        });
        const btnMas = document.getElementById('btn-mas');
        if (btnMas) btnMas.classList.add('hidden');
        
        crearCategoriaBusqueda(v.query, true);
        } else if (v.vista === 'carrito') {
            gestionarVista('carrito');
        } else if (v.vista === 'favoritos') {
            gestionarVista('favoritos');
        } else {
            gestionarVista('tienda');
            categoriaActual = v.categoria || 'todos';
            showingAll = v.showingAll || false;
            showHero(categoriaActual);
            const btnCat = document.querySelector(`[data-categoria="${categoriaActual}"]`);
            if (btnCat) setActiveCategory(btnCat);
            if (typeof updateDisplayRef === 'function') updateDisplayRef();
        }
        window._vistaAnterior = null;
    } else {
        // Fallback si no hay nada guardado
        gestionarVista('tienda');
        categoriaActual = 'todos';
        showingAll = false;
        showHero('todos');
        const btnTodos = document.querySelector('[data-categoria="todos"]');
        if (btnTodos) setActiveCategory(btnTodos);
        if (typeof updateDisplayRef === 'function') updateDisplayRef();
    }

    // Retroceder en el historial nativo (solo si no vino de popstate)
    if (updateHistory) {
        history.back();
    }
}

document.getElementById('btn-volver-detalle')?.addEventListener('click', cerrarDetalleProducto);

// ─── COLLAGE COMPLEJO ───
function renderizarCollage(producto, medias) {
    const grid = document.getElementById('collage-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const imagenes = medias.filter(m => m.tipo === 'imagen');
    const orden = producto.collageOrder || imagenes.map((_, i) => i);

    // Layouts rotativos usando clases Tailwind estándar
    const layouts = [
        'col-span-2 row-span-2',   // 0: grande 2x2
        'col-span-2 row-span-4',   // 1: alto 2x4
        'col-span-2 row-span-1',   // 2: ancho 2x1
        'col-span-2 row-span-2',   // 3: grande 2x2
        'col-span-2 row-span-1',   // 4: ancho 2x1
        'col-span-2 row-span-2',   // 5: alto 2x2
        'col-span-2 row-span-2',   // 6: grande 2x2
        'col-span-2 row-span-1',   // 7: ancho 2x1
    ];

    orden.forEach((imgIdx, pos) => {
        const media = imagenes[imgIdx];
        if (!media) return;

        const item = document.createElement('div');
        const layoutClass = layouts[pos % layouts.length];
        item.className = `collage-item ${layoutClass}`;
        item.innerHTML = `<img src="${media.src}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`;
        item.addEventListener('click', () => abrirLightbox(medias.indexOf(media)));
        grid.appendChild(item);
    });
}

// ─── RELACIONADOS ───
function renderizarRelacionados(ids) {
    const contenedor = document.getElementById('detalle-relacionados');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    ids.forEach(id => {
        const p = getProducto(id);
        if (!p) return;
        const card = document.createElement('div');
        card.className = 'card-relacionada snap-start';
        card.innerHTML = `
            <div class="rel-img-wrap">
                <img src="${p.imagenes?.[0] || ''}" alt="${p.titulo || ''}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <p class="font-Inter text-xs font-semibold text-stone-950 dark:text-white truncate leading-tight mt-1">${p.titulo || ''}</p>
            <p class="font-Russo text-xs text-temu mt-0.5">s/ ${(p.precio || 0).toFixed(2)}</p>
        `;
        card.addEventListener('click', () => abrirDetalleProducto(p.id));
        contenedor.appendChild(card);
    });
}

// ─── CLICK EN CUALQUIER CARD PARA ABRIR DETALLE ───
document.addEventListener('click', (e) => {
    // Si estamos haciendo swipe en el carrito, NO abrir detalle
    if (window._isSwiping) return;
    if (e.target.closest('.swipe-wrapper')) return;

    // Detectar card
    const card = e.target.closest('#product-grid article[data-id], #favoritos-grid article[data-id], #contenedor-items-carrito article[data-id], .swiper-slide[data-id]');
    if (!card) return;

    // ❌ IGNORAR clicks en botones de acción
    if (e.target.closest('.btn-agregar-carrito') || 
        e.target.closest('.btn-favorito') || 
        e.target.closest('.btn-favorito-hero') || 
        e.target.closest('.btn-epico') ||
        e.target.closest('.btn-precio')) return;

    // ✅ SOLO permitir si el click fue en la IMAGEN o en el TEXTO
    const clickEnImagen = e.target.closest('.cardProductoInner img');
    const clickEnTexto  = e.target.closest('.cardInfoInner p');

    if (!clickEnImagen && !clickEnTexto) return;

    const id = parseInt(card.dataset.id);
    if (!isNaN(id)) abrirDetalleProducto(id);
});

// ======================================================
// MARQUEE ENVÍO - Scroll infinito + arrastre
// ======================================================
function initMarqueeEnvio() {
    const track = document.getElementById('envio-track');
    if (!track) return;

    let x = 0;
    let speed = 0.5; // px por frame
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let rafId = null;
    let autoScroll = true;

    function animate() {
        if (autoScroll && !isDragging) {
            x -= speed;
            // Cuando la primera mitad se va, reseteamos
            const halfWidth = track.scrollWidth / 2;
            if (Math.abs(x) >= halfWidth) {
                x = 0;
            }
            track.style.transform = `translateX(${x}px)`;
        }
        rafId = requestAnimationFrame(animate);
    }

    // Touch
    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        autoScroll = false;
        startX = e.touches[0].pageX;
        scrollLeft = x;
        track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].pageX - startX;
        x = scrollLeft + dx;
        track.style.transform = `translateX(${x}px)`;
    }, { passive: true });

    track.addEventListener('touchend', () => {
        isDragging = false;
        track.style.transition = 'transform 0.3s ease-out';
        // Retomar auto-scroll después de 1s
        setTimeout(() => { autoScroll = true; }, 1000);
    });

    // Mouse
    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        autoScroll = false;
        startX = e.pageX;
        scrollLeft = x;
        track.style.transition = 'none';
        track.style.cursor = 'grabbing';
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const dx = e.pageX - startX;
        x = scrollLeft + dx;
        track.style.transform = `translateX(${x}px)`;
    });

    track.addEventListener('mouseup', () => {
        isDragging = false;
        track.style.cursor = 'grab';
        track.style.transition = 'transform 0.3s ease-out';
        setTimeout(() => { autoScroll = true; }, 1000);
    });

    track.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            track.style.cursor = 'grab';
            setTimeout(() => { autoScroll = true; }, 1000);
        }
    });

    rafId = requestAnimationFrame(animate);
}

////////////////////////////


/////////////////////////////
// Navegar imágenes del detalle con flechas del teclado
document.addEventListener('keydown', (e) => {
    const detalle = document.getElementById('producto-detalle');
    if (!detalle || detalle.classList.contains('hidden')) return;
    
    const lightbox = document.getElementById('lightbox-detalle');
    if (lightbox && !lightbox.classList.contains('hidden')) return;

    const medias = window._detalleMedias || [];
    if (!medias.length) return;
    
    const currentIdx = parseInt(document.getElementById('img-principal')?.dataset.mediaIdx || 0);
    let newIdx = currentIdx;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        newIdx = (currentIdx + 1) % medias.length;
        e.preventDefault(); // ← evita que la página haga scroll
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        newIdx = (currentIdx - 1 + medias.length) % medias.length;
        e.preventDefault(); // ← evita que la página haga scroll
    } else {
        return;
    }

    cambiarImagenPrincipal(medias, newIdx);
});




// ======================================================
// NAVEGACIÓN NATIVA (History API) — VISTAS + DETALLE
// ======================================================

window.addEventListener('popstate', (e) => {
    const detalle = document.getElementById('producto-detalle');
    const estaAbiertoDetalle = detalle && !detalle.classList.contains('hidden');
    
    if (e.state) {
        // 🔥 PRIORIDAD 1: Restaurar búsqueda
        if (e.state.vista === 'busqueda') {
            if (estaAbiertoDetalle) {
                cerrarDetalleProducto(false); // ya restaura la búsqueda dentro
            } else {
                crearCategoriaBusqueda(e.state.query, true);
            }
            return;
        }
        
        if (e.state.detalleId) {
            if (!estaAbiertoDetalle) {
                window._vistaAnterior = e.state.vistaAnterior || { vista: 'tienda', categoria: 'todos', showingAll: false };
                abrirDetalleProducto(e.state.detalleId, true);
            } else if (productoActualId !== e.state.detalleId) {
                cerrarDetalleProducto(false);
                window._vistaAnterior = e.state.vistaAnterior || { vista: 'tienda', categoria: 'todos', showingAll: false };
                abrirDetalleProducto(e.state.detalleId, true);
            }
        } else {
            if (estaAbiertoDetalle) {
                cerrarDetalleProducto(false);
            }
            // Si no es búsqueda, limpiar cualquier búsqueda activa
            if (btnCategoriaBusqueda) eliminarCategoriaBusqueda(false);
            
            if (e.state.vista === 'carrito') {
                activateNav('carrito', true);
            } else if (e.state.vista === 'favoritos') {
                activateNav('favoritos', true);
            } else {
                categoriaActual = e.state.categoria || 'todos';
                showingAll = e.state.showingAll || false;
                activateNav('inicio', true, false); // ← resetCategory = false
            }
        }
    } else {
        if (estaAbiertoDetalle) cerrarDetalleProducto(false);
        if (btnCategoriaBusqueda) eliminarCategoriaBusqueda(false);
        activateNav('inicio', true, false);
    }
});

// ======================================================
// DEEP LINKING AL CARGAR — SIEMPRE INICIO LIMPIO
// ======================================================
document.addEventListener('DOMContentLoaded', () => {
    iniciarModo();
    iniciarIdioma();
    
    // 🔥 SIEMPRE empezar en inicio al recargar (F5)
    // Limpiar cualquier búsqueda activa
    if (btnCategoriaBusqueda) {
        eliminarCategoriaBusqueda(false);
    }
    const inputBuscar = document.getElementById('buscador');
    if (inputBuscar) inputBuscar.value = '';
    const dropdown = document.getElementById('sugerencias-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
    const msg = document.getElementById('search-results-msg');
    if (msg) msg.classList.add('hidden');
    
    // Resetear estado
    categoriaActual = 'todos';
    showingAll = false;
    
    // Reemplazar historial para que no quede basura del hash anterior
    history.replaceState(
        { vista: 'tienda', categoria: 'todos', showingAll: false },
        '',
        '#'
    );
    
    // Activar inicio
    activateNav('inicio', true);
    
    appInicializada = true;
});

//////////////////////////////////////////////



//////////////////////////////////////////////
// ========================================
// BTN AÑADIR AL CARRITO EN IMG PRINCIPAL
// ========================================
// Detecta si la imagen actual del lightbox coincide con alguna miniatura de estilo
function getEstiloPorImagen(producto, imagenSrc) {
    if (!producto?.estilos?.length) return null;
    const normalize = (s) => s?.toString().replace(/^\.\//, '').replace(/^\//, '').toLowerCase().trim();
    const imgNorm = normalize(imagenSrc);
    return producto.estilos.find(est => normalize(est.imagen) === imgNorm) || null;
}

// Actualiza el texto del botón del lightbox según la imagen actual
function actualizarBotonLightboxCarrito() {
    const btnText = document.getElementById('lightbox-add-cart-text');
    if (!btnText) return;
    const producto = getProducto(productoActualId);
    if (!producto) return;

    const medias = window._detalleMedias || [];
    const currentIdx = swiperLightbox?.realIndex || 0;
    const mediaActual = medias[currentIdx];

    let estiloEncontrado = null;
    if (mediaActual && mediaActual.tipo === 'imagen') {
        estiloEncontrado = getEstiloPorImagen(producto, mediaActual.src);
    }

    const nombreEstilo = estiloEncontrado 
        ? estiloEncontrado.nombre 
        : (estiloSeleccionado?.nombre || producto.estilo || 'Estándar');
    const precioTotal = (producto.precio * cantidadDetalle).toFixed(2);

    btnText.textContent = `Agregar · ${nombreEstilo} · s/ ${precioTotal}`;
}
//////////////////////////
// Click en "Agregar al carrito" desde el lightbox (móvil/tablet)
document.getElementById('lightbox-add-cart')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const producto = getProducto(productoActualId);
    if (!producto) return;

    const medias = window._detalleMedias || [];
    const currentIdx = swiperLightbox?.realIndex || 0;
    const mediaActual = medias[currentIdx];

    // Detectar si la imagen actual coincide con algún estilo
    let estiloParaCarrito = estiloSeleccionado;
    if (mediaActual && mediaActual.tipo === 'imagen') {
        const estiloCoincide = getEstiloPorImagen(producto, mediaActual.src);
        if (estiloCoincide) {
            estiloParaCarrito = {
                nombre: estiloCoincide.nombre,
                color: estiloCoincide.color || estiloCoincide.nombre,
                imagen: estiloCoincide.imagen
            };
        }
    }

    // Fallback: si no hay estilo seleccionado, usar el primero/base
    if (!estiloParaCarrito && producto.estilos?.length) {
        estiloParaCarrito = {
            nombre: producto.estilos[0].nombre,
            color: producto.estilos[0].color || producto.estilos[0].nombre,
            imagen: producto.estilos[0].imagen
        };
    }

    const esEstiloBase = estiloParaCarrito && producto.estilo && estiloParaCarrito.nombre === producto.estilo;

    const itemBase = {
        id: producto.id,
        titulo: producto.titulo,
        subtitulo: producto.subtitulo,
        precio: producto.precio,
        imagen: estiloParaCarrito?.imagen || producto.imagenes?.[0] || '',
        variante: esEstiloBase ? null : {
            tipo: producto.tipoVariante === 'color' ? 'Color' : (producto.tipoVariante === 'talla' ? 'Talla' : 'Estilo'),
            valor: estiloParaCarrito?.color || estiloParaCarrito?.nombre || 'Estándar'
        }
    };

    // Agregar la cantidad que ya eligió en el detalle
    for (let i = 0; i < cantidadDetalle; i++) {
        agregarAlCarrito(itemBase);
    }

    // Fly-to-cart animado
    animarFlyToCart(e.currentTarget, itemBase.imagen);

    // Feedback visual rápido
    const btnText = document.getElementById('lightbox-add-cart-text');
    if (btnText) {
        const original = btnText.textContent;
        btnText.textContent = '¡Agregado!';
        setTimeout(() => btnText.textContent = original, 1000);
    }
});

//////////////////
function setLightboxUIVisible(visible) {
    const lightbox = document.getElementById('lightbox-detalle');
    if (!lightbox) return;
    if (visible) lightbox.classList.remove('lightbox-ui-oculta');
    else lightbox.classList.add('lightbox-ui-oculta');
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// =======================================================
// ======= PWA - GRANDES LIGAS  =======
// =======================================================
// Registrar Service Worker (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registrado:', reg.scope))
      .catch(err => console.log('SW error:', err));
  });
}

// Si el usuario sale del fullscreen con el gesto del sistema, cerrar lightbox
document.addEventListener('fullscreenchange', () => {
    const lightbox = document.getElementById('lightbox-detalle');
    if (!document.fullscreenElement && lightbox && !lightbox.classList.contains('hidden')) {
        cerrarLightbox();
    }
});