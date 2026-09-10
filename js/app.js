<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ffffff" id="theme-color-meta">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="ZAGY">
    <link rel="apple-touch-icon" href="assets/icon-192.png">
    <title>Acerca de Zagy Tech | ZAGY Tech</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Russo+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/estilos.css?v=6">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css" rel="stylesheet"/>
    <style>
        /* Fallback acordeones (por si estilos.css no los incluye) */
        .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
        .accordion-icon { transition: transform 0.3s ease; }
        .accordion-icon.rotado { transform: rotate(180deg); }
        .pagina-badge { width: fit-content; }
    </style>
<base target="_blank">
</head>
<body class="bg-white dark:bg-stone-950">

    <!-- BARRA INFERIOR (móvil) -->
    <div class="fixed bottom-2 left-1/2 -translate-x-1/2 z-40 w-90 lg:hidden">
        <div class="cardInicio2 h-15.5 w-full bg-white dark:bg-temu rounded-full absolute -top-0.5 left-0"></div>
        <div class="cardInicio h-15 w-full bg-stone-950 rounded-full relative flex items-center justify-center gap-x-6.5">
            <i class="ri-user-line text-2xl text-white dark:text-stone-400 flex flex-col items-center gap-0 leading-none pb-1.25 textUsuario cursor-pointer"><p class="text-[10px] leading-none mt-0.5 font-semibold">Usuario</p></i>
            <i class="ri-menu-search-line text-2xl text-white dark:text-stone-400 flex flex-col items-center gap-0 leading-none pb-1.25 textCategorias cursor-pointer"><p class="text-[10px] leading-none mt-0.5 font-semibold">Categorías</p></i>
            <i class="ri-home-line text-2xl text-white dark:text-stone-400 flex flex-col items-center gap-0 leading-none pb-1.25 textInicio cursor-pointer opacity-0"><p class="text-[10px] leading-none mt-0.5 font-semibold">Inicio</p></i>
            <i class="ri-poker-hearts-line text-2xl text-white dark:text-stone-400 flex flex-col items-center gap-0 leading-none pb-1.25 textFavoritos cursor-pointer"><p class="text-[10px] leading-none mt-0.5 font-semibold">Favoritos</p></i>
            <i class="ri-shopping-cart-line text-2xl text-white dark:text-stone-400 flex flex-col items-center gap-0 leading-none pb-1.25 textCarrito cursor-pointer"><p class="text-[10px] leading-none mt-0.5 font-semibold">Carrito</p></i>
        </div>
    </div>

    <!-- ESFERAS (móvil) -->
    <section class="lg:hidden">
        <div id="btnUsuario" class="fixed bottom-6.25 left-1/2 -translate-x-[calc(50%+120px)] z-50 size-12 rounded-4xl bg-temu flex items-center justify-center hidden"><i class="ri-user-line text-3xl text-white"></i></div>
        <div id="btnCategorias" class="fixed bottom-6.25 left-1/2 -translate-x-[calc(50%+64.6px)] z-50 size-12 rounded-4xl bg-temu flex items-center justify-center hidden"><i class="ri-menu-search-line text-3xl text-white"></i></div>
        <div id="btnInicio" class="fixed bottom-6.25 left-1/2 -translate-x-1/2 z-50 size-12 rounded-4xl bg-temu flex items-center justify-center"><i class="ri-home-line text-3xl text-white pb-0.5"></i></div>
        <div id="btnFavoritos" class="fixed bottom-6.25 left-1/2 -translate-x-[calc(50%-64.6px)] z-50 size-12 rounded-4xl bg-temu flex items-center justify-center hidden"><i class="ri-poker-hearts-line text-3xl text-white"></i></div>
        <div id="btnCarrito" class="fixed bottom-6.25 left-1/2 -translate-x-[calc(50%-120px)] z-50 size-12 rounded-4xl bg-temu flex items-center justify-center hidden"><i class="ri-shopping-cart-line text-3xl text-white"></i></div>
    </section>

    <!-- NAV DESKTOP -->
    <nav class="w-[95vw] h-10 mx-auto relative lg:max-w-7xl">
        <section class="size-9 absolute top-2 flex gap-8 xl:gap-12">
            <img id="logo-zagy" src="assets/logoZagy.webp" alt="logo" class="cursor-pointer">
            <div class="flex gap-8 max-lg:hidden xl:gap-12">
                <button class="nav-desktop group flex flex-col justify-center items-center mt-1 cursor-pointer transition-all duration-300" data-nav="usuario">
                    <i class="ri-user-line text-xl text-stone-950 dark:text-white/70 leading-none transition-colors duration-300 group-hover:text-temu"></i>
                    <p class="text-xs leading-none border-b-2 border-transparent transition-colors duration-300 group-hover:text-temu group-hover:border-temu">Usuario</p>
                </button>
                <button class="nav-desktop group flex flex-col justify-center items-center mt-1 cursor-pointer transition-all duration-300" data-nav="categorias">
                    <i class="ri-menu-search-line text-xl text-stone-950 dark:text-white/70 leading-none transition-colors duration-300 group-hover:text-temu"></i>
                    <p class="text-xs leading-none border-b-2 border-transparent transition-colors duration-300 group-hover:text-temu group-hover:border-temu">Categorías</p>
                </button>
                <button class="nav-desktop group flex flex-col justify-center items-center mt-1 cursor-pointer transition-all duration-300" data-nav="inicio">
                    <i class="ri-home-line text-xl text-stone-950 dark:text-white/70 leading-none transition-colors duration-300 group-hover:text-temu"></i>
                    <p class="text-xs leading-none border-b-2 border-transparent transition-colors duration-300 group-hover:text-temu group-hover:border-temu">Inicio</p>
                </button>
            </div>
        </section>

        <!-- BUSCADOR -->
        <section class="bg-white dark:bg-stone-900 border border-stone-950 dark:border-stone-700 rounded-4xl absolute right-0 top-2 h-9 w-[82dvw] sm:w-[88dvw] lg:w-157 lg:left-1/2 lg:-translate-x-[calc(50%-74px)] xl:w-187 xl:-translate-x-[calc(50%-92px)] z-90">
            <input id="buscador" class="bg-transparent dark:text-white/80 outline-none pl-4 pr-14 pt-0 text-base w-full h-full rounded-4xl" type="text" placeholder="soporte para celular">
            <button id="search-btn" type="button" class="h-7.5 w-11 rounded-3xl flex items-center justify-center absolute right-0.5 top-0.5 bg-stone-950 cursor-pointer border-none touch-manipulation">
                <i class="ri-search-line text-lg text-white dark:text-temu pointer-events-none"></i>
            </button>
        </section>

        <section class="w-30 h-9 absolute top-2 flex gap-8 right-0 xl:gap-12 xl:w-33">
            <div class="flex gap-8 max-lg:hidden xl:gap-12">
                <button class="nav-desktop group flex flex-col justify-center items-center mt-1 cursor-pointer transition-all duration-300" data-nav="favoritos"><i class="ri-poker-hearts-line text-xl text-stone-950 dark:text-white/70 leading-none transition-colors duration-300 group-hover:text-temu"></i><p class="text-xs leading-none border-b-2 border-transparent transition-colors duration-300 group-hover:text-temu group-hover:border-temu">Favoritos</p></button>
                <button class="nav-desktop group flex flex-col justify-center items-center mt-1 cursor-pointer transition-all duration-300" data-nav="carrito"><i class="ri-shopping-cart-line text-xl text-stone-950 dark:text-white/70 leading-none transition-colors duration-300 group-hover:text-temu"></i><p class="text-xs leading-none border-b-2 border-transparent transition-colors duration-300 group-hover:text-temu group-hover:border-temu">Carrito</p></button>
            </div>
        </section>
    </nav>
    <div class="w-full h-px bg-stone-950/10 mt-3"></div>

    <!-- ==================== CONTENIDO DE LA PÁGINA ==================== -->
    <main class="w-[95vw] mx-auto lg:max-w-7xl pb-30 lg:pb-14 min-h-[62vh]">

        <div class="pt-4 pb-5 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-1 text-stone-950 dark:text-white hover:text-temu transition-colors">
                <i class="ri-arrow-left-line text-xl"></i>
                <span class="font-Inter text-sm font-semibold">Volver a la tienda</span>
            </a>
            <button id="btn-modo-pagina" class="size-9 rounded-full border border-stone-950 dark:border-stone-700 bg-white dark:bg-stone-900 flex items-center justify-center cursor-pointer hover:border-temu transition-colors" aria-label="Cambiar tema">
                <i class="ri-sun-fill text-lg text-stone-950 dark:text-temu"></i>
            </button>
        </div>

        <h1 class="pagina-badge font-Inter font-bold text-lg h-10 px-6 bg-stone-950 dark:bg-stone-800 text-white dark:text-temu rounded-4xl flex justify-center items-center mb-2">Acerca de Zagy Tech</h1>
        <p class="font-Inter text-sm text-stone-500 dark:text-stone-400 mb-5">Conoce quiénes somos y cómo trabajamos para llevarte los mejores productos.</p>
        <section class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 sm:p-6 mb-4">
            <h2 class="font-Inter font-bold text-base sm:text-lg text-stone-950 dark:text-white mb-3 flex items-center gap-2">
                <i class="ri-store-2-line text-temu"></i>¿Quiénes somos?
            </h2>
            <div class="font-Inter text-sm text-stone-600 dark:text-stone-300 leading-relaxed space-y-2">            <p><strong class="text-stone-950 dark:text-white">Zagy Tech</strong> es una tienda peruana de productos importados y de colección. Nació con una idea simple: acercar figuras, álbums, ropa, tecnología y accesorios de tendencia a precios justos, con entregas seguras y un trato cercano.</p>
            <p>Operamos 100% online y coordinamos entregas presenciales con nuestros clientes, priorizando siempre la confianza y la puntualidad.</p></div>
        </section>        <section class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 sm:p-6 mb-4">
            <h2 class="font-Inter font-bold text-base sm:text-lg text-stone-950 dark:text-white mb-3 flex items-center gap-2">
                <i class="ri-price-tag-3-line text-temu"></i>¿Qué vendemos?
            </h2>
            <div class="font-Inter text-sm text-stone-600 dark:text-stone-300 leading-relaxed space-y-2">            <ul class="list-disc pl-5 space-y-1">
                <li><strong>Tecnología:</strong> parlantes, proyectores, soportes, lámparas, masajeadores y más.</li>
                <li><strong>Colección:</strong> figuras de anime, álbums oficiales (como el Mundial 2026) y artículos exclusivos.</li>
                <li><strong>Moda y ropa:</strong> casacas, mochilas, correas, zapatillas y accesorios.</li>
                <li><strong>Hogar:</strong> dispensadores, iluminación solar y gadgets útiles para tu casa.</li>
            </ul></div>
        </section>        <section class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 sm:p-6 mb-4">
            <h2 class="font-Inter font-bold text-base sm:text-lg text-stone-950 dark:text-white mb-3 flex items-center gap-2">
                <i class="ri-shopping-cart-2-line text-temu"></i>¿Cómo comprar?
            </h2>
            <div class="font-Inter text-sm text-stone-600 dark:text-stone-300 leading-relaxed space-y-2">            <ol class="list-decimal pl-5 space-y-1">
                <li>Explora el catálogo y elige tus productos favoritos.</li>
                <li>Agrega al carrito y selecciona cantidad, color o estilo.</li>
                <li>Presiona <strong>"Finalizar compra"</strong>: tu pedido se envía automáticamente por WhatsApp.</li>
                <li>Coordinamos contigo la entrega: <strong>gratis en estaciones del tren</strong> o S/10 a domicilio/provincia.</li>
                <li><strong>Pagas al recibir</strong> tu producto. Puedes probarlo sin compromiso en un lugar público.</li>
            </ol></div>
        </section>        <section class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 sm:p-6 mb-4">
            <h2 class="font-Inter font-bold text-base sm:text-lg text-stone-950 dark:text-white mb-3 flex items-center gap-2">
                <i class="ri-secure-payment-fill text-temu"></i>Pagos y entregas
            </h2>
            <div class="font-Inter text-sm text-stone-600 dark:text-stone-300 leading-relaxed space-y-2">            <p>Aceptamos <strong>Yape, Plin, transferencias y efectivo</strong>. Horario de entrega: <strong>10 am - 9 pm</strong>.</p>
            <p>Todos los pedidos se confirman por WhatsApp y te mantenemos informado hasta que tengas tu producto en las manos.</p></div>
        </section>

    </main>

    <!-- ==================== FOOTER ==================== -->
    <footer class="bg-stone-950 dark:border-t border-stone-600 w-full h-220 sm:h-150 lg:h-85 text-white flex justify-center">
        <div class="w-[95vw] mx-auto lg:max-w-7xl grid justify-items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 pl-10 pt-15 pb-20">
            <article class="flex flex-col gap-2 justify-start items-start w-full h-30 text-[13px]">
                <h1 class="font-bold mb-2 text-sm">Información de la Empresa</h1>
                <a href="informacion.html" class="footer-link">Acerca de Zagy Tech</a>
                <a href="contacto.html" class="footer-link">Contáctanos</a>
                <a href="donaciones.html" class="footer-link">Programa de Donaciones</a>
            </article>
            <article class="flex flex-col gap-2 justify-start items-start w-full h-30 text-[13px]">
                <h1 class="font-bold mb-2 text-sm">Atención al cliente</h1>
                <a href="devolucion.html" class="footer-link">Política de devolución y reembolso</a>
                <a href="ayuda.html" class="footer-link">Centro de ayuda y preguntas frecuentes</a>
                <a href="propiedad.html" class="footer-link">Política de propiedad intelectual</a>
            </article>
            <article class="flex flex-col gap-0.5 justify-start items-start w-full h-30 text-[13px] lg:pl-10">
                <h1 class="mb-1 text-sm font-bold">Nuestras redes</h1>
                <a href="https://tiktok.com" target="_blank" rel="noopener" class="footer-link flex gap-3 items-center">
                    <i class="ri-tiktok-fill text-lg"></i><span>Tik Tok</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener" class="footer-link flex gap-3 items-center">
                    <i class="ri-facebook-circle-fill text-lg"></i><span>Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener" class="footer-link flex gap-3 items-center">
                    <i class="ri-instagram-fill text-lg"></i><span>Instagram</span>
                </a>
            </article>
            <article class="flex flex-col gap-2 justify-start items-start w-full h-full text-[13px]">
                <h1 class="font-bold mb-1 text-sm">Descarga nuestra app</h1>
                <div class="flex gap-3 cursor-pointer items-center pl-1">
                    <div><i class="ri-discount-percent-fill"></i></div>
                    <p>Alertas de baja de precio</p>
                </div>
                <div class="flex gap-3 cursor-pointer items-center pl-1">
                    <div><i class="ri-secure-payment-fill"></i></div>
                    <p>Pago más rápido y seguro</p>
                </div>
                <div class="flex gap-3 cursor-pointer items-center mb-3 pl-1">
                    <div><i class="ri-price-tag-3-fill"></i></div>
                    <p>Ofertas exclusivas</p>
                </div>
                <a href="descargarApp.html" class="btn-playstore w-55 h-15 border-2 border-stone-600 rounded-full flex gap-5 items-center relative overflow-hidden group">
                    <div class="size-10 rounded-full ml-5 relative z-10">
                        <img src="assets/logoPlayStore.png" alt="logo Play Store" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col gap-0 pt-1 relative z-10">
                        <p class="leading-3 text-stone-300 group-hover:text-white transition-colors">Descargar en </p>
                        <p class="font-semibold text-lg group-hover:text-white transition-colors">Google Play</p>
                    </div>
                </a>
            </article>
        </div>
    </footer>

    <p class="border-t border-stone-600 text-white text-xs bg-stone-950 w-full text-center pt-5 pb-24 lg:pb-5">
        Zagy Tech 2026 © Todos los derechos reservados
    </p>

    <script src="js/paginas.js"></script>
</body>
</html>