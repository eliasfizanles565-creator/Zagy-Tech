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
        titulo: {
        es: "Álbum Tapa Dura",
        en: "Hardcover Album",
        qu: "Tapa Dura Álbum"
        },
        subtitulo: {
            es: "PANINI - Mundial 2026",
            en: "PANINI - World Cup 2026",
            qu: "PANINI - Mundial 2026"
        },
        marca: {
        es: "PANINI",
        en: "PANINI",
        qu: "PANINI"
        },
        estilo: {
            es: "Mundial 2026",
            en: "World Cup 2026",
            qu: "Mundial 2026"
        },
        precio: 45.00,
        precioOriginal: 77.91,      // null si NO hay descuento
        descuento: 33,              // % de descuento (0 si no hay)
        disponible: 7,
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
    // =========== 06 JBL ESSENTIAL  ================
    // =================================================
        id: 6,

        titulo: {
        es: "JBL Essential",
        en: "JBL Essential",
        qu: "JBL Kaqpuni"
        },
        subtitulo: {
            es: "Original",
            en: "Original",
            qu: "Kikin"
        },
        marca: {
        es: "Marca: JBL",
        en: "Brand: JBL",
        qu: "Yupichay: JBL"
        },
        estilo: {
            es: "JBL Essential Azul",
            en: "JBL Essential Blue",
            qu: "JBL Kaqpuni Anqas"
        },
        precio: 84.90,
        precioOriginal: 149.90,
        descuento: 43,
        disponible: 2,

        categoria: "tecnologia",
        imagenes: [
            "assets/06 JBL ESSENTIAL/01.webp",
            "assets/06 JBL ESSENTIAL/02.webp",
            "assets/06 JBL ESSENTIAL/03.webp",
            "assets/06 JBL ESSENTIAL/04.webp",
            "assets/06 JBL ESSENTIAL/05.webp",
            "assets/06 JBL ESSENTIAL/06.webp",
            "assets/06 JBL ESSENTIAL/07.webp",
            "assets/06 JBL ESSENTIAL/08.webp",
            "assets/06 JBL ESSENTIAL/08.webp",
            "assets/06 JBL ESSENTIAL/09.png",
            "assets/06 JBL ESSENTIAL/10.png",
            "assets/06 JBL ESSENTIAL/11.png",
            "assets/06 JBL ESSENTIAL/12.png",
            "assets/06 JBL ESSENTIAL/13.png",
            "assets/06 JBL ESSENTIAL/14.avif",
            "assets/06 JBL ESSENTIAL/15.avif",
            "assets/06 JBL ESSENTIAL/16.avif",
            "assets/06 JBL ESSENTIAL/17.avif",
            "assets/06 JBL ESSENTIAL/18.webp",
            "assets/06 JBL ESSENTIAL/19.webp",
            "assets/06 JBL ESSENTIAL/20.webp",
            "assets/06 JBL ESSENTIAL/21.png",
            
            
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/06 JBL ESSENTIAL/26.mp4",
            "assets/06 JBL ESSENTIAL/25.mp4",
            "assets/06 JBL ESSENTIAL/24.mp4",
            "assets/06 JBL ESSENTIAL/23.mp4",
            "assets/06 JBL ESSENTIAL/22.mp4",
            
            
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [

            "assets/06 JBL ESSENTIAL/15.avif",
            "assets/06 JBL ESSENTIAL/14.avif",
            "assets/06 JBL ESSENTIAL/18.webp",
            "assets/06 JBL ESSENTIAL/19.webp",
            "assets/06 JBL ESSENTIAL/17.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "JBL Essential Azul", en: "JBL Essential Blue", qu: "JBL Kaqpuni Anqas" }, 
            imagen: "assets/06 JBL ESSENTIAL/01.webp",
            color: { es: "Azul", en: "Blue", qu: "Anqas" } 
        },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 3, 15, 16, 17, 18, 19, 20, 21],


        tituloLargo: {
            es: "Altavoz Inalámbrico Portátil Mini JBL GO ESSENTIAL, Música, Edición Juvenil Ladrillo Dorado, Exterior, Batería de Larga Duración, Múltiples Colores Geniales y Subwoofer de Regalo.",
            en: "JBL GO ESSENTIAL Mini Portable Wireless Speaker, Music, Youth Edition Brick Gold, Outdoor, Long Battery Life, Multiple Cool Colors and Free Subwoofer.",
            qu: "JBL GO KAQPUNI Mini Altavoz Inalámbrico Portátil, Musiku, Quri Ladrillo Wayna Edición, Hawa, Unay Batería Vida, Achka Cool Colores chaymanta Regalo Subwoofer",
        },

        detalles: {
            es: "JBL GO Essential es un altavoz con Bluetooth portátil y ultracompacto. Reproduzca música en streaming a través de Bluetooth con una autonomía de hasta 5 horas y calidad de sonido JBL Pro original. Olas de entretenimiento con su diseño resistente al agua conforme a la norma IPX7. Disponible en 3 llamativos colores, el GO Essential es el altavoz perfecto para llevar tu música a todas partes.\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n ✓Rico sonido JBL Pro original.\n✓ Resistente al agua: IPX7.\n✓ Reproducción inalámbrica BT.\n✓ Bluetooth: 4.2.\n✓ Duración promedio: 5 horas.\n ✓ Peso: 180 gramos.\n✓ Cable de carga: Si.",
            en: "The JBL GO Essential is an ultra-compact, portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of battery life and enjoy original JBL Pro sound quality. Experience waves of entertainment with its IPX7 water-resistant design. Available in 3 vibrant colors, the GO Essential is the perfect speaker to take your music everywhere.\n\n<strong>Features:</strong>\n✓ Easy to carry.\n ✓ Rich, original JBL Pro sound.\n✓ Water resistant: IPX7.\n✓ Bluetooth wireless playback.\n✓ Bluetooth: 4.2.\n✓ Average battery life: 5 hours.\n ✓ Weight: 180 grams.\n✓ Charging cable: Yes.",
            qu: "JBL GO Kaqpuni nisqaqa huk apaykachanapaq hinallataq ultra-compacto Bluetooth parlantemi. Bluetooth kaqnintakama takikunata purichiy 5 pachakama autonomía kaqwan chaymanta original JBL Pro uyariy calidad kaqwan. Olas de entretenimiento IPX7 yaku hark'aq diseñonwan. 3 llamativo colores nisqapi tarikun, GO Essential nisqa allin parlantemi takiykita maymanpas apananpaq.\n\n<strong>Rurakuna:</strong>\n✓ Mana sasachu apanapaq.\n ✓Qhapaq original JBL Pro uyariy.\n✓ Yakuman mana yaykuq: IPX7.\n✓ BT mana alambreyuq pukllay.\n✓ Bluetooth: 4.2.\n✓ Chawpi unay pacha: 5.\n ✓ Llasaq: 180 gramos.\n✓ Carga cable: Arí.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 19],
    },
    {
    // =================================================
    // =========== 07 MINI PARLANTE G200  ================
    // =================================================
        id: 7,

        titulo: {
        es: "Mini Parlante",
        en: "Mini Speaker",
        qu: "Uchuy Rimaspa"
        },
        subtitulo: {
            es: "G200",
            en: "G200",
            qu: "G200"
        },
        marca: {
        es: "Marca: G200",
        en: "Brand: G200",
        qu: "Yupichay: G200"
        },
        estilo: {
            es: "Mini G200 Negro",
            en: "Mini G200 Black",
            qu: "Uchuy G200 Yana"
        },
        precio: 24.90,
        precioOriginal: 34.90,
        descuento: 28,
        disponible: 5,

        categoria: "tecnologia",
        imagenes: [
            "assets/07 MINI PARLANTE G200/01.webp",
            "assets/07 MINI PARLANTE G200/02.webp",
            "assets/07 MINI PARLANTE G200/03.webp",
            "assets/07 MINI PARLANTE G200/04.webp",
            "assets/07 MINI PARLANTE G200/05.webp",
            "assets/07 MINI PARLANTE G200/06.avif",
            "assets/07 MINI PARLANTE G200/07.avif",
            "assets/07 MINI PARLANTE G200/08.avif",
            "assets/07 MINI PARLANTE G200/09.avif",
            "assets/07 MINI PARLANTE G200/10.avif",
            "assets/07 MINI PARLANTE G200/11.avif",
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/07 MINI PARLANTE G200/14.mp4",
            "assets/07 MINI PARLANTE G200/13.mp4",
            "assets/07 MINI PARLANTE G200/12.mp4",
            
            
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [

            "assets/07 MINI PARLANTE G200/09.avif",
            "assets/07 MINI PARLANTE G200/08.avif",
            "assets/07 MINI PARLANTE G200/06.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Mini G200 Negro", en: "Mini G200 Black", qu: "Uchuy G200 Yana" }, 
            imagen: "assets/07 MINI PARLANTE G200/01.webp",
            color: { es: "Negro", en: "Black", qu: "Yana" } 
        },
        { 
            nombre: { es: "Mini G200 Blanco", en: "Mini G200 White", qu: "Uchuy G200 Yuraq" }, 
            imagen: "assets/07 MINI PARLANTE G200/09.5.webp",
            color: { es: "Blanco", en: "White", qu: "Yuraq" } 
        },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],


        tituloLargo: {
            es: "Altavoces mini de materiales duraderos, altavoces bluetooth magnéticos, portátiles, con iluminación rgb multicolor, compatibles con iphone y android, carga usb, controles por botones, ideales para casa, dormitorio, fiestas y oficina.",
            en: "Mini speakers of durable materials, magnetic bluetooth speakers, portable, with multicolor rgb lighting, compatible with iphone and android, usb charging, button controls, ideal for home, bedroom, parties and office.",
            qu: "Mini parlantekuna ruwasqa materiales duraderos kaqmanta, parlantes magnéticos Bluetooth kaqmanta, apaykachanapaq, achka llimp’iyuq RGB k'anchayniyuq, iPhone chaymanta Android kaqwan tupaq, USB carga, controles de botones, wasipaq, puñuna wasipaq, fiestakunapaq chaymanta oficinapaq allin.",
        },

        detalles: {
            es: "Altavoz Inalámbrico Magnético Portátil, Mini Altavoz con Luz RGB, Audio con Refuerzo de Graves, Emparejamiento TWS, Carga Tipo C, Montaje con Ventosa, Compatible con iPhone Android, Multicolor Opcional para Oficina en Casa.\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Resistente al agua: IPX7.\n✓ Reproducción inalámbrica BT.\n✓ Bluetooth: 5.3.\n✓ Duración promedio: 4 horas.\n✓ Conexión dual: Si.\n✓ Cable de carga: Si.\n✓ Tipo C: Si.\n✓ Radio: Si.\n✓ Lector SD Card: Si.",
            en: "Portable Magnetic Wireless Speaker, Mini Speaker with RGB Light, Audio with Bass Booster, TWS Pairing, Type C Charging, Suction Mount, Android iPhone Compatible, Optional Multicolor for Home Office.\n\n<strong>Features:</strong>\n✓ Easy to carry.\n✓ Water resistant: IPX7.\n✓ BT wireless playback.\n✓ Bluetooth: 5.3.\n✓ Average duration: 4 hours.\n✓ Dual connection: Yes.\n✓ Charging cable: Yes.\n✓ Type C: Yes.\n✓ Radio: Yes.\n✓ SD Card Reader: Yes.",
            qu: "Altavoz mana alambreyuq magnético apaykachanapaq, Mini Altavoz RGB k'anchaywan, Audio Bass Boosterwan, TWS Parejamientowan, Tipo C Carga, Succión Montaje, Android iPhone Compatible, Opcional Multicolor Home Officepaq.\n\n<strong>Ruraykuna:</strong>\n✓ Mana sasachu apaykachanapaq.\n✓ Yaku hark'aq: IPX7.\n✓ BT mana alambreyuq pukllay.\n✓ Bluetooth: 5.3.\n✓ Chawpi pacha: 4 pacha.\n✓ Iskay tinkiynin: Arí.\n✓ Cable de carga: Arí.\n✓ Tipo C: Arí.\n✓ Radio: Arí.\n✓ Tarjeta SD Ñawinchaq: Arí.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 19],
    },
    {
    // =================================================
    // =========== 08 MINI PARLANTE MX-G60  ================
    // =================================================
        id: 8,

        titulo: {
        es: "Mini Parlante",
        en: "Mini Speaker",
        qu: "Uchuy Rimaspa"
        },
        subtitulo: {
            es: "MX-G60",
            en: "MX-G60",
            qu: "MX-G60"
        },
        marca: {
        es: "Marca: MX-G60",
        en: "Brand: MX-G60",
        qu: "Yupichay: MX-G60"
        },
        estilo: {
            es: "Mini MX-G60",
            en: "Mini MX-G60",
            qu: "Uchuy MX-G60"
        },
        precio: 29.90,
        precioOriginal: 39.90,
        descuento: 25,
        disponible: 4,

        categoria: "tecnologia",
        imagenes: [
            "assets/08 MINI PARLANTE MX-G60/01.webp",
            "assets/08 MINI PARLANTE MX-G60/02.webp",
            "assets/08 MINI PARLANTE MX-G60/03.avif",
            "assets/08 MINI PARLANTE MX-G60/04.avif",
            "assets/08 MINI PARLANTE MX-G60/05.avif",
            "assets/08 MINI PARLANTE MX-G60/06.avif",
            "assets/08 MINI PARLANTE MX-G60/07.avif",
            "assets/08 MINI PARLANTE MX-G60/08.avif",
            "assets/08 MINI PARLANTE MX-G60/09.avif",
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/08 MINI PARLANTE MX-G60/10.mp4",
            
            
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [

            "assets/08 MINI PARLANTE MX-G60/06.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Mini MX-G60", en: "Mini MX-G60", qu: "Uchuy MX-G60" }, 
            imagen: "assets/08 MINI PARLANTE MX-G60/01.webp",
            color: { es: "Negro", en: "Black", qu: "Yana" } 
        },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],


        tituloLargo: {
            es: "Altavoces mini de materiales duraderos, altavoces bluetooth magnéticos, portátiles, con iluminación rgb multicolor, compatibles con iphone y android, carga usb, controles por botones, ideales para casa, dormitorio, fiestas y oficina.",
            en: "Mini speakers of durable materials, magnetic bluetooth speakers, portable, with multicolor rgb lighting, compatible with iphone and android, usb charging, button controls, ideal for home, bedroom, parties and office.",
            qu: "Mini parlantekuna ruwasqa materiales duraderos kaqmanta, parlantes magnéticos Bluetooth kaqmanta, apaykachanapaq, achka llimp’iyuq RGB k'anchayniyuq, iPhone chaymanta Android kaqwan tupaq, USB carga, controles de botones, wasipaq, puñuna wasipaq, fiestakunapaq chaymanta oficinapaq allin.",
        },

        detalles: {
            es: "Altavoz Inalámbrico Magnético Portátil, Mini Altavoz con Luz RGB, Audio con Refuerzo de Graves, Emparejamiento TWS, Carga Tipo C, Montaje con Ventosa, Compatible con iPhone Android, Multicolor Opcional para Oficina en Casa.\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Resistente al agua: IPX7.\n✓ Reproducción inalámbrica BT.\n✓ Bluetooth: 5.3.\n✓ Duración promedio: 4 horas.\n✓ Conexión dual: Si.\n✓ Cable de carga: Si.\n✓ Tipo C: Si.\n✓ Radio: Si.\n✓ Lector SD Card: Si.",
            en: "Portable Magnetic Wireless Speaker, Mini Speaker with RGB Light, Audio with Bass Booster, TWS Pairing, Type C Charging, Suction Mount, Android iPhone Compatible, Optional Multicolor for Home Office.\n\n<strong>Features:</strong>\n✓ Easy to carry.\n✓ Water resistant: IPX7.\n✓ BT wireless playback.\n✓ Bluetooth: 5.3.\n✓ Average duration: 4 hours.\n✓ Dual connection: Yes.\n✓ Charging cable: Yes.\n✓ Type C: Yes.\n✓ Radio: Yes.\n✓ SD Card Reader: Yes.",
            qu: "Altavoz mana alambreyuq magnético apaykachanapaq, Mini Altavoz RGB k'anchaywan, Audio Bass Boosterwan, TWS Parejamientowan, Tipo C Carga, Succión Montaje, Android iPhone Compatible, Opcional Multicolor Home Officepaq.\n\n<strong>Ruraykuna:</strong>\n✓ Mana sasachu apaykachanapaq.\n✓ Yaku hark'aq: IPX7.\n✓ BT mana alambreyuq pukllay.\n✓ Bluetooth: 5.3.\n✓ Chawpi pacha: 4 pacha.\n✓ Iskay tinkiynin: Arí.\n✓ Cable de carga: Arí.\n✓ Tipo C: Arí.\n✓ Radio: Arí.\n✓ Tarjeta SD Ñawinchaq: Arí.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 19],
    },
    {
    // =================================================
    // =========== 09 MASAJEADOR ALMOHADA  ================
    // =================================================
        id: 9,

        titulo: {
        es: "Masajeador Suave",
        en: "Soft Massager",
        qu: "Llamp’u Masajeador"
        },
        subtitulo: {
            es: "4 Botones",
            en: "4 Buttons",
            qu: "4 Ñitina"
        },
        marca: {
        es: "Marca: Estándar",
        en: "Brand: Standard",
        qu: "Yupichay: Kaqlla"
        },
        estilo: {
            es: "Masajeadora 4 Botones",
            en: "Massager 4 Buttons",
            qu: "Masajeador 4 Ñitina"
        },
        precio: 64.90,
        precioOriginal: 89.90,
        descuento: 27,
        disponible: 3,

        categoria: "hogar",
        imagenes: [
            "assets/12 ALMOHADA DE 4 BOTONES/01.webp",
            "assets/12 ALMOHADA DE 4 BOTONES/02.webp",
            "assets/12 ALMOHADA DE 4 BOTONES/03.webp",
            "assets/12 ALMOHADA DE 4 BOTONES/04.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/05.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/06.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/07.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/08.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/09.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/10.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/11.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/12.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/13.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/14.avif",
            
            
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/12 ALMOHADA DE 4 BOTONES/16.mp4",
            "assets/12 ALMOHADA DE 4 BOTONES/15.mp4",
            
            
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [

            "assets/12 ALMOHADA DE 4 BOTONES/09.avif",
            "assets/12 ALMOHADA DE 4 BOTONES/02.webp",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Masajeadora Beige", en: "Fawn Massager", qu: "Masajeador Chunpi" }, 
            imagen: "assets/13 MANITA MASAJEADORA/01.webp",
            color: { es: "Beige", en: "Fawn", qu: "Chunpi" } 
        },
        { 
            nombre: { es: "Masajeadora Beige", en: "Fawn Massager", qu: "Masajeador Chunpi" }, 
            imagen: "assets/13 MANITA MASAJEADORA/03.webp",
            color: { es: "Azul", en: "Blue", qu: "Anqas" } 
        },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],


        tituloLargo: {
            es: "Almohada de Masaje Eléctrica para Cuello, Dispositivo de Masaje Shiatsu sin Cable con Calor, Herramienta Portátil Recargable Tipo-C para Relajación Cervical para Oficina, Hogar y Viajes, Regalo de Masajeador Ergonómico.",
            en: "Electric Neck Massage Pillow, Cordless Shiatsu Massage Device with Heat, Portable Rechargeable Type-C Neck Relaxation Tool for Office, Home and Travel, Ergonomic Massager Gift.",
            qu: "Sawna masaje de cuello eléctrico, Dispositivo de Masaje Shiatsu Inalámbrico Ruphaywan, Herramienta Recargable Recargable Tipo-C Cuello Relajación Oficinapaq, Wasipaq chaymanta Viajepaq, Masajeador Ergonómico Regalo.",
        },

        detalles: {
            es: "La Almohada masajeadora de cuello ofrece un masaje shiatsu profundo en cualquier lugar y en cualquier momento. El control integrado le permite controlar su experiencia de masaje. Agregue calor y experimente un masaje de cuello y hombros más profundo y relajante..\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Masaje bidireccional.\n✓ Ruido silencios de alta frecuencia.\n✓ Suave y transpirable.\n✓ Ayuda a aliviar el dolor muscular.\n✓ Batería de litio recargable.\n✓ Capacidad de Batería: 2000mAH.\n✓ Potencia nominal: 3,7 W.\n✓ Tensión nominal: DC5.0V\n✓ Peso neto del producto:495 gramos.  \n✓ Cable de Carga: Si.\n✓ Tipo C: Si.",
            en: "The neck massage pillow offers a deep shiatsu massage anywhere, anytime. The integrated control allows you to customize your massage experience. Add heat for a deeper, more relaxing neck and shoulder massage.\n\n<strong>Features:</strong>\n✓ Easy to carry.\n✓ Two-way massage.\n✓ High-frequency noise reduction.\n✓ Soft and breathable.\n✓ Helps relieve muscle pain.\n✓ Rechargeable lithium battery.\n✓ Battery capacity: 2000mAh.\n✓ Rated power: 3.7W.\n✓ Rated voltage: DC5.0V\n✓ Net weight: 495 grams.\n✓ Charging cable: Yes.\n✓ Type C: Yes.",
            qu: "Kunka masaje almohadaqa maypipas, mayk’aqllapas ukhu shiatsu masajeta qun. Control integrado nisqa masaje experienciaykita ruwayta atikunki. Ruphayta yapay aswan ukhu, aswan samayniyuq kunka, hombro masajepaq.\n\n<strong>Rurakuna:</strong>\n✓ Mana sasachu apaykachanapaq.\n✓ Iskay ñan masaje.\n✓ Alto frecuenciawan qapariy pisiyachiy.\n✓ Llampu hinaspa samay atiy.\n✓ Aycha nanayta allinyachinanpaq yanapan.\n✓ Batería de litio recargable.\n✓ Pila capacidad: 2000mAh.\n✓ Atiy nominal: 3.7W.\n✓ Tensión nominal: DC5.0V\n✓ Llasaq neto: 495 gramos.\n✓ Cable de carga: Arí.\n✓ Tipo C: Arí.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 13, 12, 11, 10],
    },
    {
    // =================================================
    // =========== 10 MANITA MASAJEADORA  ================
    // =================================================
        id: 10,

        titulo: {
        es: "Manita Muscular",
        en: "Muscular Hand",
        qu: "Aychasapa Maki"
        },
        subtitulo: {
            es: "Masajeadora",
            en: "Massager",
            qu: "Masajeador"
        },
        marca: {
        es: "Marca: Estándar",
        en: "Brand: Standard",
        qu: "Yupichay: Kaqlla"
        },
        estilo: {
            es: "Masajeadora",
            en: "Massager",
            qu: "Masajeador"
        },
        precio: 109.90,
        precioOriginal: 149.90,
        descuento: 26,
        disponible: 3,

        categoria: "hogar",
        imagenes: [
            "assets/13 MANITA MASAJEADORA/01.webp",
            "assets/13 MANITA MASAJEADORA/02.webp",
            "assets/13 MANITA MASAJEADORA/03.avif",
            "assets/13 MANITA MASAJEADORA/04.avif",
            "assets/13 MANITA MASAJEADORA/05.avif",
            "assets/13 MANITA MASAJEADORA/06.avif",
            "assets/13 MANITA MASAJEADORA/07.avif",
            "assets/13 MANITA MASAJEADORA/08.avif",
            "assets/13 MANITA MASAJEADORA/09.avif",
            "assets/13 MANITA MASAJEADORA/10.avif",
            "assets/13 MANITA MASAJEADORA/11.webp",
            "assets/13 MANITA MASAJEADORA/19.webp",
            "assets/13 MANITA MASAJEADORA/21.webp",
            
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/13 MANITA MASAJEADORA/24.mp4",
            "assets/13 MANITA MASAJEADORA/23.mp4",
            "assets/13 MANITA MASAJEADORA/22.mp4",
            
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [

            "assets/13 MANITA MASAJEADORA/07.avif",
            "assets/13 MANITA MASAJEADORA/06.avif",
            "assets/13 MANITA MASAJEADORA/10.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Masajeadora", en: "Massager", qu: "Masajeador" }, 
            imagen: "assets/13 MANITA MASAJEADORA/01.webp",
            color: { es: "Verde", en: "Green", qu: "Qumir" } 
        },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],


        tituloLargo: {
            es: "Masajeador de Tejido Profundo Recargable USB, 8 Garras - Masajeador Portátil de Dedo Adecuado para Cuello, Espalda, Hombros y Piernas - Regalo Perfecto para Hombres y Mujeres, Cintura, Relajación. Masajeador de Músculo Esternocleidomastoideo, Masajeador sin varillas Portátil con Calor para Cuello.",
            en: "USB Rechargeable Deep Tissue Massager, 8 Claws - Portable Finger Massager Suitable for Neck, Back, Shoulders, and Legs - Perfect Gift for Men and Women, Waist, Relaxation. Sternocleidomastoid Muscle Massager, Portable Rodless Massager with Heat for Neck.",
            qu: "USB Recargable Masajeador de Tejido Profundo, 8 Garras - Masajeador de Dedo Portátil Kunkapaq, Wasanpaq, Hombrospaq, Chakipaqpas allin - Qharikunapaq Warmikunapaqpas, Cinturapaq, Relajaciónpaq Regalo Perfecto. Masajeador Muscular Esternocleidomastoide, Masajeador Portátil sin Varilla Cuellopaq Ruphayniyuq.",
        },

        detalles: {
            es: "Masajeador de Tejido Profundo Recargable USB, 8 Garras - Masajeador Portátil de Dedo Adecuado para Cuello, Espalda, Hombros y Piernas - Regalo Perfecto para Hombres y Mujeres, Cintura, Relajación. Masajeador de Músculo Esternocleidomastoideo, Masajeador sin varillas Portátil con Calor para Cuello.\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Diseño novedoso y Ergonómico.\n✓ Controles Intuitivos.\n✓ Ayuda a aliviar el dolor muscular.\n✓ Alivia el dolor cervical y de hombros.\n✓ 2 niveles de calor.\n✓ Duración de Batería: 70min.\n✓ Cable de Carga: Si.\n✓ Tipo C: Si.",
            en: "USB Rechargeable Deep Tissue Massager, 8 Claws - Portable Finger Massager Suitable for Neck, Back, Shoulders, and Legs - Perfect Gift for Men and Women, Waist, Relaxation. Sternocleidomastoid Muscle Massager, Portable Rodless Massager with Heat for Neck.\n\n<strong>Features:</strong>\n✓ Easy to carry.\n✓ Novel and Ergonomic Design.\n✓ Intuitive Controls.\n✓ Helps relieve muscle pain.\n✓ Relieves neck and shoulder pain.\n✓ 2 Heat Levels.\n✓ Battery Life: 70 min.\n✓ Charging Cable: Yes.\n✓ Type-C: Yes.",
            qu: "USB Recargable Masajeador de Tejido Profundo, 8 Garras - Masajeador de Dedo Portátil Kunkapaq, Wasanpaq, Hombrospaq, Chakipaqpas allin - Qharikunapaq Warmikunapaqpas, Cinturapaq, Relajaciónpaq Regalo Perfecto. Masajeador Muscular Esternocleidomastoide, Masajeador Portátil sin Varilla con Ruphay kunkapaq.\n\n<strong>Características:</strong>\n✓ Facil apa.\n✓ Diseño Novedoso y Ergonómico.\n✓ Controles Intuitivos.\n✓ Yanapakun aycha nanayta allinyachinanpaq.\n✓ Kunka nanayta, hombro nanayta allinyachin.\n✓ 2 Niveles de calor.\n✓ Pila kawsay: 70 min.\n✓ Cable de carga: Arí.\n✓ Tipo-C: Arí.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 13, 12, 11],
    },
    {
    // =================================================
    // =========== 11 DISPENSADOR JABON  ================
    // =================================================
        id: 11,

        titulo: {
        es: "Dispensador de Jabón",
        en: "Soap Dispenser",
        qu: "Jabon Dispensador"
        },
        subtitulo: {
            es: "Automático",
            en: "Automatic",
            qu: "Sapaq"
        },
        marca: {
        es: "Marca: Estándar",
        en: "Brand: Standard",
        qu: "Yupichay: Kaqlla"
        },
        estilo: {
            es: "Dispensador de Jabón",
            en: "Soap Dispenser",
            qu: "Jabon Dispensador"
        },
        precio: 109.90,
        precioOriginal: 185.90,
        descuento: 40,
        disponible: 4,

        categoria: "hogar",
        imagenes: [
            "assets/21 DISPENSADOR DE JABÓN/00.webp",
            "assets/21 DISPENSADOR DE JABÓN/03.webp",
            "assets/21 DISPENSADOR DE JABÓN/04.webp",
            "assets/21 DISPENSADOR DE JABÓN/05.webp",
            "assets/21 DISPENSADOR DE JABÓN/06.webp",
            "assets/21 DISPENSADOR DE JABÓN/07.webp",
            "assets/21 DISPENSADOR DE JABÓN/08.webp",
            "assets/21 DISPENSADOR DE JABÓN/09.webp",
            "assets/21 DISPENSADOR DE JABÓN/10.webp",
            "assets/21 DISPENSADOR DE JABÓN/11.webp",
            "assets/21 DISPENSADOR DE JABÓN/12.webp",
            "assets/21 DISPENSADOR DE JABÓN/13.webp",
            "assets/21 DISPENSADOR DE JABÓN/14.webp",
            "assets/21 DISPENSADOR DE JABÓN/15.webp",
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/21 DISPENSADOR DE JABÓN/17.mp4",
            "assets/21 DISPENSADOR DE JABÓN/18.mp4",
            "assets/21 DISPENSADOR DE JABÓN/16.mp4",
            "assets/21 DISPENSADOR DE JABÓN/16.5.mp4",
            
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [

            "assets/21 DISPENSADOR DE JABÓN/10.webp",
            "assets/21 DISPENSADOR DE JABÓN/11.webp",
            "assets/21 DISPENSADOR DE JABÓN/09.webp",
            "assets/21 DISPENSADOR DE JABÓN/12.webp",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Dispensador de Jabón", en: "Soap Dispenser", qu: "Jabon Dispensador" }, 
            imagen: "assets/21 DISPENSADOR DE JABÓN/00.webp",
            color: { es: "Negro", en: "Black", qu: "Yana" } 
        },
        { 
            nombre: { es: "Dispensador", en: "Dispenser", qu: "Dispensador" }, 
            imagen: "assets/21 DISPENSADOR DE JABÓN/02.webp",
            color: { es: "Blanco", en: "White", qu: "Yuraq" } 
        },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],


        tituloLargo: {
            es: "Dispensador de jabón inteligente automático sin contacto | Dispensador de manos higiénico sin contacto | De pared, batería recargable e interfaz USB, ajustes regulables, elegante y moderno, apto para baño/cocina/hospital/escuela - Duradero",
            en: "Automatic Smart Touchless Soap Dispenser | Hygienic Touchless Hand Dispenser | Wall Mounted, Rechargeable Battery and USB Interface, Adjustable Settings, Stylish and Modern, Suitable for Bathroom/Kitchen/Hospital/School - Durable",
            qu: "Automático Smart Touchless Jabon Dispensador | Dispensador de Mano Sin Toctil Higiénico | Perqapi churasqa, Batería Recargable y Interfaz USB, Ajustes Ajustables, Estilo y Moderno, Baño/Cocina/Hospital/Escuelapaq allin - Duradero",
        },

        detalles: {
            es: "Transforma tu aseo en un santuario de bienestar con un toque de pura sofisticación. Nuestro dispensador automático combina una estética impecable con la comodidad del sistema touchless. Sin manchas, sin desperdicio, solo la pureza del jabón en tus manos con un gesto elegante. Porque el verdadero lujo está en los detalles que hacen tu vida más fácil y saludable. Dale a tu baño el estilo que se merece.\n\n<strong>Características:</strong>\n✓ Material: Plástico ABS.\n✓ Batería: 2000 mAh.\n✓ Capacidad máxima: 500ml.\n✓ Peso: 400 gramos.\n✓ Protección de Humedad: IPXS.\n✓ Voltaje: 3,7 V.\n✓ Temperatura de Trabajo: 0-70.\n✓ Sensor Infrarojo: Si.\n✓ Cable de Carga: Si.\n✓ Tipo C: Si.",
            en: "Transform your bathroom into a sanctuary of well-being with a touch of pure sophistication. Our automatic dispenser combines impeccable aesthetics with the convenience of a touchless system. No stains, no waste, just the purity of soap in your hands with an elegant gesture. Because true luxury lies in the details that make your life easier and healthier. Give your bathroom the style it deserves.\n\n<strong>Features:</strong>\n✓ Material: ABS plastic.\n✓ Battery: 2000 mAh.\n✓ Maximum capacity: 500ml.\n✓ Weight: 400 grams.\n✓ Moisture protection: IPXS.\n✓ Voltage: 3.7 V.\n✓ Working temperature: 0-70°C.\n✓ Infrared sensor: Yes.\n✓ Charging cable: Yes.\n✓ Type C: Yes.",
            qu: "Bañoykita allin kawsaypa santuarionman tikray, chuya sofisticación nisqawan. Dispensador automático nisqaykuqa mana ima pantayniyuq estética nisqawanmi hukllawakun, mana llachpanapaq sistema nisqapa allin kayninwan. Mana manchakuna, mana usuchiy, makiykipi jabonpa chuya kayninlla huk elegante gestowan. Imaraykuchus cheqaq lujoqa kashan chay detallekunapin, chaykunan kawsayniykita aswan facilta, aswan qhali kananpaq ima. Bañoykiman quy chay estilota merecesqanman hina.\n\n<strong>Características:</strong>\n✓ Material: Plástico ABS.\n✓ Batería: 2000 mAh.\n✓ Capacidad máxima: 500ml.\n✓ Llasaq: 400 gramos.\n✓ Humedadmanta harkakuy: IPXS.\n✓ Tensión: 3.7 V.\n✓ Llamkanapaq temperatura: 0-70°C.\n✓ Sensor infrarrojo: Arí.\n✓ Cable de carga: Arí.\n✓ Tipo C: Arí.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 13, 12, 10],
    },
    {
    // =================================================
    // =========== 12 PROYECTOR L018  ================
    // =================================================
        id: 12,

        titulo: {
        es: "Proyector MagCubic",
        en: "MagCubic Projector",
        qu: "Ruwana MagCubic"
        },
        subtitulo: {
            es: "L018",
            en: "L018",
            qu: "L018"
        },
        marca: {
        es: "Marca: MagCubic",
        en: "Brand: MagCubic",
        qu: "Yupichay: MagCubic"
        },
        estilo: {
            es: "Proyector L018",
            en: "Projector L018",
            qu: "Ruwana L018"
        },
        precio: 350.00,
        precioOriginal: 428.67,
        descuento: 18,
        disponible: 1,

        categoria: "hogar",
        imagenes: [
            "assets/22 PROYECTOR L018/01.webp",
            "assets/22 PROYECTOR L018/02.avif",
            "assets/22 PROYECTOR L018/03.webp",
            "assets/22 PROYECTOR L018/04.webp",
            "assets/22 PROYECTOR L018/05.avif",
            "assets/22 PROYECTOR L018/06.avif",
            "assets/22 PROYECTOR L018/07.avif",
            "assets/22 PROYECTOR L018/08.webp",
            "assets/22 PROYECTOR L018/09.avif",
            "assets/22 PROYECTOR L018/10.webp",
            "assets/22 PROYECTOR L018/11.webp",
            "assets/22 PROYECTOR L018/12.webp",
            "assets/22 PROYECTOR L018/13.jpg",
            "assets/22 PROYECTOR L018/14.webp",
            "assets/22 PROYECTOR L018/15.avif",
            "assets/22 PROYECTOR L018/16.avif",
            "assets/22 PROYECTOR L018/17.webp",
            "assets/22 PROYECTOR L018/18.webp",
            "assets/22 PROYECTOR L018/19.webp",
            
            
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/22 PROYECTOR L018/32.mp4",
            "assets/22 PROYECTOR L018/33.mp4",
            "assets/22 PROYECTOR L018/20.mp4",
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [
            "assets/22 PROYECTOR L018/08.webp",
            "assets/22 PROYECTOR L018/09.avif",
            "assets/22 PROYECTOR L018/14.webp",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Proyector L018", en: "Projector L018", qu: "Ruwana L018" }, 
            imagen: "assets/22 PROYECTOR L018/01.webp",
            color: { es: "Blanco", en: "White", qu: "Yuraq" } 
        },
        ],
        ///////////////

        collageOrder: [2, 4, 5, 6, 7, 8, 9, 10, 11, 6, 13, 14],


        tituloLargo: {
            es: "Proyector Magcubic L018 Nativamente 1080P 650ANSI con 360° Portátil Desmontable, Corrección Automática de Trapecio y Enfoque, Wifi de Doble Banda",
            en: "Magcubic L018 Projector, Native 1080P 650ANSI, 360° Portable Detachable Projector, Automatic Keystone Correction and Focus, Dual-Band WiFi",
            qu: "Magcubic L018 Ruwana, Nativo 1080p 650 ANSI Resolución, 360° Desmontable Ruwana Portatil, Automático Keystone Corrección y Enfoque, Iskay Banda WiFi.",
        },

        detalles: {
            es: "Deja atrás las limitaciones de una televisión fija. Con el nuevo Magcubic L018, cualquier superficie se convierte en un portal al cine de alta definición. Gracias a su diseño 360° giratorio, puedes proyectar desde el suelo hasta el techo con un solo giro. Cuenta con una resolución nativa 1080P con soporte 4K y Android 14 integrado. No es solo un proyector, es libertad visual absoluta en la palma de tu mano. Magcubic L018: Tu cine, tus reglas, en cualquier lugar.\n\n<strong>Características:</strong>\n✓ Resolución: 1080p Nativa.\n✓ Autoenfoque Instantáneo.\n✓ Ajuste de Pantalla Automático.\n✓ Evitación Inteligente de Obstáculos.\n✓ Soporte de calidad 4K.\n✓ 3 Modos de Brillo Ajustables.\n✓ Android 14.\n✓ Wifi 6 - Soporta 5G.\n✓ Bluetooth:5.4.\n✓ Brillo Ansi: 630 Lumens.\n✓ Parlante Interno Integrado.\n✓ Entrada HDMI: Si.\n✓ Entrada USB: Si.\n✓ Entrada Jack 3.5: Si.\n✓ Control por Voz Incluido: Si.\n✓ Conexión a Play Station(3,4,5): Si.",
            en: "Leave behind the limitations of a fixed television. With the new Magcubic L018, any surface becomes a portal to high-definition cinema. Thanks to its 360° rotating design, you can project from floor to ceiling with a single turn. It features native 1080P resolution with 4K support and integrated Android 14. It's not just a projector; it's absolute visual freedom in the palm of your hand. Magcubic L018: Your cinema, your rules, anywhere.\n\n<strong>Features:</strong>\n✓ Resolution: Native 1080p.\n✓ Instant Autofocus.\n✓ Automatic Screen Adjustment.\n✓ Intelligent Obstacle Avoidance.\n✓ 4K Quality Support.\n✓ 3 Adjustable Brightness Modes.\n✓ Android 14.\n✓ Wi-Fi 6 - Supports 5G.\n✓ Bluetooth: 5.4.\n✓ ANSI Brightness: 630 Lumens.\n✓ Built-in Speaker.\n✓ HDMI Input: Yes.\n✓ USB Input: Yes.\n✓ 3.5mm Jack Input: Yes.\n✓ Voice Control Included: Yes.\n✓ PlayStation (3, 4, 5) Connection: Yes.",
            qu: "Saqiy mana takyasqa televisionpa mana atisqankunata. Musuq Magcubic L018 nisqawanmi ima hawapas hatun definicion cineman portalman tukun. 360° muyuriq ruwayninraykum, huk kutillapi pampamanta techokama proyectayta atinki. Chayqa 1080P nativo resolución kaqwan 4K yanapakuywan chaymanta Android 14 tinkisqa kaqwan.Mana proyectorllachu; chayqa makiykiq palmanpi absoluta libertad visual nisqa. Magcubic L018: Cineyki, kamachiyniyki, maypipas.\n\n<strong>Rurakuna:</strong>\n✓ Resolución: Nativo 1080p.\n✓ Instant Autofocus.\n✓ Pantalla Kikinmanta Ajuste.\n✓ Inteligente Obstáculo Evitacion.\n✓ 4K Calidad Yanapakuy.\n✓ 3 Modos de Brillo Ajustable.\n✓ Android 14.\n✓ Wi-Fi 6 - 5G yanapakun.\n✓ Bluetooth: 5.4.\n✓ ANSI K'anchay: 630 Lúmenes.\n✓ Altavoz incorporado.\n✓ HDMI Yaykuy: Arí.\n✓ USB Yaykuy: Arí.\n✓ 3.5mm Jack Yaykuy: Arí.\n✓ Kunka kamachiy Yaykusqa: Arí.\n✓ PlayStation (3, 4, 5) T'inkisqa: Arí.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 13, 11, 10],
    },
    {
    // =================================================
    // =========== 13 LAMPARA SOLAR  ================
    // =================================================
        id: 13,

        titulo: {
        es: "Lámpara Led",
        en: "Led Lamp",
        qu: "Led Lampara"
        },
        subtitulo: {
            es: "Solar",
            en: "Solar",
            qu: "Intimanta"
        },
        marca: {
        es: "Marca: Estándar",
        en: "Brand: Standard",
        qu: "Yupichay: Kaqlla"
        },
        estilo: {
            es: "Lámpara Solar",
            en: "Lamp Solar",
            qu: "Lampara Intimanta"
        },
        precio: 129.90,
        precioOriginal: 169.90,
        descuento: 23,
        disponible: 5,

        categoria: "hogar",
        imagenes: [
            "assets/23 LAMPARA LED SOLAR/01.webp",
            "assets/23 LAMPARA LED SOLAR/02.avif",
            "assets/23 LAMPARA LED SOLAR/03.avif",
            "assets/23 LAMPARA LED SOLAR/04.avif",
            "assets/23 LAMPARA LED SOLAR/05.avif",
            "assets/23 LAMPARA LED SOLAR/06.avif",
            "assets/23 LAMPARA LED SOLAR/07.avif",
            "assets/23 LAMPARA LED SOLAR/08.avif",
            "assets/23 LAMPARA LED SOLAR/09.avif",
            "assets/23 LAMPARA LED SOLAR/10.avif",
            "assets/23 LAMPARA LED SOLAR/11.webp",
            "assets/23 LAMPARA LED SOLAR/12.webp",
            "assets/23 LAMPARA LED SOLAR/13.webp",
            "assets/23 LAMPARA LED SOLAR/14.webp",
            "assets/23 LAMPARA LED SOLAR/15.webp",
            
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/23 LAMPARA LED SOLAR/16.mp4",
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [
            "assets/23 LAMPARA LED SOLAR/09.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Lámpara Solar", en: "Lamp Solar", qu: "Lampara Intimanta" }, 
            imagen: "assets/23 LAMPARA LED SOLAR/01.webp",
            color: { es: "Negro", en: "Black", qu: "Yana" } 
        },
        ],
        ///////////////

        collageOrder: [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12],


        tituloLargo: {
            es: "1 Paquete, Luz Solar Super Brillante De 504 LED, Luz De Calle Exterior, Luz De Día 3 Modos, Iluminación De Jardín Con Sensor De Movimiento Inteligente.",
            en: "1 Pack, Super Bright 504 LED Solar Light, Outdoor Street Light, Daylight 3 Modes, Garden Lighting with Smart Motion Sensor.",
            qu: "1 Pack, Super Bright 504 LED Inti K'anchay, Hawa Calle K'anchay, P'unchaw K'anchay 3 Modos, Huerta K'anchay Smart Motion Sensorwan.",
        },

        detalles: {
            es: "1 Luminaria Comercial de Exterior, Luz Solar con 504 LED y Sensor de Movimiento, 3 Modos + Control Remoto, Foco LED IP65 de Alto Lúmen, Ideal para Calles, Patios, Porches, Iluminación de Paredes Exteriores y Decoración Navideña.\n\n<strong>Características:</strong>\n✓ Potencia: 252 W.\n✓ Batería 4500 mAh.\n✓ Resistencia a Polvo y Humedad IP65.\n✓ Carga Solar: Si.\n✓ Control incluido: Si",
            en: "1 Commercial Outdoor Solar Light with 504 LEDs and Motion Sensor, 3 Modes + Remote Control, IP65 High Lumen LED Spotlight, Ideal for Streets, Patios, Porches, Exterior Wall Lighting, and Christmas Decorations.\n\n<strong>Features:</strong>\n✓ Power: 252 W.\n✓ 4500 mAh Battery.\n✓ IP65 Dust and Moisture Resistance.\n✓ Solar Charging: Yes.\n✓ Remote Control Included: Yes",
            qu: "1 Comercial Hawa Inti K'anchay 504 LEDs kaqwan chaymanta Sensor de Movimiento kaqwan, 3 Modos + Control Remoto kaqwan, IP65 Alto Lumen LED Foco kaqwan, Callekunapaq, Patiokunapaq, Pórticokunapaq, Hawa Perqa K'anchaypaq, chaymanta Navidad Decoraciones kaqpaq allin.\n\n<strong>Rurakuna:</strong>\n✓ Atiy: 252 W.\n✓ 4500 mAh Batería.\n✓ IP65 Polvo y humedad Resistencia.\n✓ Intimanta carga: Arí.\n✓ Control remoto Incluido: Arí",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 11, 12, 10],
    },
    {
    // =================================================
    // =========== 14 CASACA IMPERMEABLE  ================
    // =================================================
        id: 14,

        titulo: {
        es: "Casaca Impermeable",
        en: "Waterproof jacket",
        qu: "Chaqueta impermeable"
        },
        subtitulo: {
            es: "(Varios Colores)",
            en: "(Various Colors)",
            qu: "(Imaymana llimp'ikuna)"
        },
        marca: {
        es: "Marca: Estándar",
        en: "Brand: Standard",
        qu: "Yupichay: Kaqlla"
        },
        estilo: {
            es: "Casaca Azul",
            en: "Blue Coat",
            qu: "Azul Chaleco"
        },
        precio: 89.90,
        precioOriginal: 119.90,
        descuento: 25,
        disponible: 7,

        categoria: "ropa",
        imagenes: [
            "assets/28 CASACA IMPERMEABLE AZUL/01.webp",
            "assets/28 CASACA IMPERMEABLE AZUL/06.avif",
            "assets/28 CASACA IMPERMEABLE AZUL/07.avif",
            "assets/28 CASACA IMPERMEABLE AZUL/08.avif",
            // "assets/28 CASACA IMPERMEABLE AZUL/05.avif",
            "assets/28 CASACA IMPERMEABLE AZUL/02.webp",
            "assets/28 CASACA IMPERMEABLE AZUL/03.webp",
            "assets/28 CASACA IMPERMEABLE AZUL/04.webp",
            "assets/28 CASACA IMPERMEABLE AZUL/09.avif",
            "assets/28 CASACA IMPERMEABLE AZUL/10.avif",
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/28 CASACA IMPERMEABLE AZUL/11.mp4",
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [
            "assets/28 CASACA IMPERMEABLE AZUL/08.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Casaca Azul", en: "Blue Jacket", qu: "Azul Chaleco" }, 
            imagen: "assets/28 CASACA IMPERMEABLE AZUL/01.webp",
            color: { es: "Azul", en: "Blue", qu: "Azul" } 
        },
        { 
            nombre: { es: "Casaca Negra", en: "Black Jacket", qu: "Yana Chaleco" }, 
            imagen: "assets/28 CASACA IMPERMEABLE AZUL/02.webp",
            color: { es: "Negro", en: "Black", qu: "Yana" } 
        },
        { 
            nombre: { es: "Casaca Gris", en: "Gray Jacket", qu: "Gris Chaleco" }, 
            imagen: "assets/28 CASACA IMPERMEABLE AZUL/03.webp",
            color: { es: "Gris", en: "Gray", qu: "Gris" } 
        },
        { 
            nombre: { es: "Casaca Roja", en: "Red Jacket", qu: "Puka Punchu" }, 
            imagen: "assets/28 CASACA IMPERMEABLE AZUL/04.webp",
            color: { es: "Rojo", en: "Red", qu: "Puka" } 
        },
        ],
        ///////////////

        collageOrder: [0, 4, 5, 6, 1, 2, 3, 7, 8],


        tituloLargo: {
            es: "Casaca Impermeable para hombre de primavera/otoño, abrigo trench deportivo casual de moda para hombre, chaqueta juvenil de color sólido con capucha, ropa de abrigo a prueba de viento.",
            en: "Men's Spring/Autumn Waterproof Jacket, Fashionable Casual Sports Trench Coat for Men, Solid Color Hooded Youth Jacket, Windproof Outerwear.",
            qu: "Qharikuna Primavera/Otoño Chaqueta Impermeable, Moda Casual Deportes Trinchera Abrigo Qharikunapaq, Sólido Color Capucha Chaqueta Wayna-sipas, Wayramanta Rupa Exterior.",
        },

        detalles: {
            es: "Diseñada para el hombre que no se detiene, esta chaqueta de entretiempo es el equilibrio perfecto entre estilo urbano y confort deportivo. Gracias a su capucha removible, tienes dos looks en uno: un abrigo deportivo para tus días activos o una chaqueta casual delgada para una salida nocturna. Ligera, estilizada y lista para enfrentar el viento de primavera u otoño. No elijas entre estilo o función, llévatelo todo.\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Abrigo Deportivo.\n✓ Chaqueta Casual.\n✓ Capucha Removible.",
            en: "Designed for the man who never stops, this transitional jacket strikes the perfect balance between urban style and sporty comfort. Thanks to its detachable hood, you get two looks in one: a sporty coat for your active days or a lightweight casual jacket for a night out. Lightweight, stylish, and ready to face the spring or fall breeze. Don't choose between style and function—get it all.\n\n<strong>Features:</strong>\n✓ Easy to carry.\n✓ Sporty Coat.\n✓ Casual Jacket.\n✓ Removable Hood.",
            qu: "Mana hayk’aq sayaq runapaq ruwasqa, kay chaleco transicionalqa allin equilibriota ruwan estilo urbanowan confort deportivowan. Gracias a su capucha desmontable, iskay qhawariykunata hukllapi tarinki: huk abrigo deportivo activo p’unchawniykikunapaq utaq huk llamp’u chaleco casual huk tuta lluqsiypaq. Llampu, sumaq rikchayniyuq, primavera utaq urquy wayrawan tupananpaq listo. Ama akllaychu estilomanta, ruwaymantawan —tukuy imata jap’iy.\n\n<strong>Rurakuna:</strong>\n✓ Mana sasachu apay.\n✓ Abrigo deportivo.\n✓ Chaqueta Casual.\n✓ Capucha hurqunapaq.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 11, 13, 12, 10],
    },
    {
    // =================================================
    // =========== 15 CORREA AUTOMATICA  ================
    // =================================================
        id: 15,

        titulo: {
        es: "Correa de Cuero",
        en: "Leather Strap",
        qu: "Q’aramanta Correa"
        },
        subtitulo: {
            es: "Automática",
            en: "Automatic",
            qu: "Kikinmanta"
        },
        marca: {
        es: "Marca: Estándar",
        en: "Brand: Standard",
        qu: "Yupichay: Kaqlla"
        },
        estilo: {
            es: "Correa de Cuero",
            en: "Leather Strap",
            qu: "Q’aramanta Correa"
        },
        precio: 39.90,
        precioOriginal: 55.90,
        descuento: 40,
        disponible: 8,

        categoria: "ropa",
        imagenes: [
            "assets/30 CORREA DE CUERO AUTOMATICA/01.webp",
            "assets/30 CORREA DE CUERO AUTOMATICA/02.avif",
            "assets/30 CORREA DE CUERO AUTOMATICA/03.avif",
            "assets/30 CORREA DE CUERO AUTOMATICA/04.avif",
            "assets/30 CORREA DE CUERO AUTOMATICA/05.avif",
            "assets/30 CORREA DE CUERO AUTOMATICA/06.avif",
            "assets/30 CORREA DE CUERO AUTOMATICA/07.avif",
            "assets/30 CORREA DE CUERO AUTOMATICA/08.avif",
            "assets/30 CORREA DE CUERO AUTOMATICA/09.avif",
            "assets/30 CORREA DE CUERO AUTOMATICA/10.avif",
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            // "assets/34 MOCHILA WEIXIER/15.mp4",
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [
            // "assets/34 MOCHILA WEIXIER/02.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Correa de Cuero", en: "Leather Strap", qu: "Q’aramanta Correa" }, 
            imagen: "assets/30 CORREA DE CUERO AUTOMATICA/01.webp",
            color: { es: "Negro", en: "Black", qu: "Yana" } 
        },
        
        ],
        ///////////////

        collageOrder: [0, 2, 3, 4, 5, 6, 7, 8, 9],


        tituloLargo: {
            es: "Cinturón de cuero para hombre, juego de 1/3, nuevo modelo 2026, hebilla automática sin dientes para uso interno, adecuado para negocios y uso casual, sin cola sobrante",
            en: "Men's Leather Belt, 1/3 Set, New 2026 Model, Automatic Toothless Buckle for Internal Use, Suitable for Business and Casual Wear, No Excess Tail.",
            qu: "Qharikunapa qaramanta chumpi, 1/3 Set, Musuq 2026 Modelo, Automático Mana Kiruyuq Hebilla Ukhupi Usopaq, Negociopaq hinaspa Casual Desgastepaq allin, Mana Chupa Excesoyuq.",
        },

        detalles: {
            es: "Descubre la comodidad absoluta con este cinturón de cuero genuino y sistema de hebilla automática. Olvida las restricciones de los cinturones convencionales; gracias a su mecanismo de precisión, puedes ajustarlo exactamente a tu medida con un solo deslizamiento. Un accesorio minimalista, duradero y sofisticado, diseñado para quienes valoran la funcionalidad sin sacrificar el estilo. Ajuste inteligente para tu día a día.\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Cuero Genuino.\n✓ Enganche Automático.",
            en: "Discover absolute comfort with this genuine leather belt and automatic buckle system. Forget the restrictions of conventional belts; thanks to its precision mechanism, you can adjust it exactly to your size with a single slide. A minimalist, durable, and sophisticated accessory, designed for those who value functionality without sacrificing style. Smart fit for your everyday life.\n\n<strong>Features:</strong>\n✓ Easy to wear.\n✓ Genuine Leather.\n✓ Automatic Buckle.",
            qu: "Descubre absoluta confort kay genuino qara cinturonwan hinaspa sistema automático de hebillaswan. Qunqay convencional cinturonkunapa harkakuyninkunata; gracias mecanismo de precisión nisqawan, huk diapositivawanlla sayayniykiman hina allinta allichayta atinki. Huk minimalista, unaypaq, chaymanta sofisticado accesorio, ruwasqa pikunachus ruwayta chaninchanku mana estilota sacrificaspa. Sapa punchaw kawsayniykipaq allin yuyayniyuq.\n\n<strong>Rurakuna:</strong>\n✓ Mana sasa churanapaq.\n✓ Chiqap Qara.\n✓ Kikinmanta Hebilla.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 11, 14, 13, 12, 10],
    },
    {
    // =================================================
    // =========== 16 CASACA CORTAVIENTO  ================
    // =================================================
        id: 16,

        titulo: {
        es: "Casaca Cortaviento",
        en: "Windbreaker jacket",
        qu: "Wayra hark’aq chaleco"
        },
        subtitulo: {
            es: "(Varios Colores)",
            en: "(Various Colors)",
            qu: "(Imaymana llimp'ikuna)"
        },
        marca: {
        es: "Marca: Estándar",
        en: "Brand: Standard",
        qu: "Yupichay: Kaqlla"
        },
        estilo: {
            es: "Casaca Azul",
            en: "Blue Coat",
            qu: "Azul Chaleco"
        },
        precio: 69.90,
        precioOriginal: 89.90,
        descuento: 22,
        disponible: 5,

        categoria: "ropa",
        imagenes: [
            "assets/33 CASACA CORTAVIENTO AZUL/01.webp",
            "assets/33 CASACA CORTAVIENTO AZUL/02.webp",
            "assets/33 CASACA CORTAVIENTO AZUL/03.webp",
            "assets/33 CASACA CORTAVIENTO AZUL/04.avif",
            "assets/33 CASACA CORTAVIENTO AZUL/05.avif",
            "assets/33 CASACA CORTAVIENTO AZUL/06.avif",
            "assets/33 CASACA CORTAVIENTO AZUL/07.avif",
            "assets/33 CASACA CORTAVIENTO AZUL/08.avif",
            "assets/33 CASACA CORTAVIENTO AZUL/09.avif",
            "assets/33 CASACA CORTAVIENTO AZUL/10.avif",
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            // "assets/34 MOCHILA WEIXIER/15.mp4",
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [
            // "assets/34 MOCHILA WEIXIER/02.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Casaca Azul", en: "Blue Jacket", qu: "Azul Chaleco" }, 
            imagen: "assets/33 CASACA CORTAVIENTO AZUL/01.webp",
            color: { es: "Azul", en: "Blue", qu: "Azul" } 
        },
        { 
            nombre: { es: "Casaca Negra", en: "Black Jacket", qu: "Yana Chaleco" }, 
            imagen: "assets/33 CASACA CORTAVIENTO AZUL/02.webp",
            color: { es: "Negro", en: "Black", qu: "Yana" } 
        },
        { 
            nombre: { es: "Casaca Gris", en: "Gray Jacket", qu: "Gris Chaleco" }, 
            imagen: "assets/33 CASACA CORTAVIENTO AZUL/03.webp",
            color: { es: "Gris", en: "Gray", qu: "Gris" } 
        },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],


        tituloLargo: {
            es: "Chaqueta nueva para hombre, prenda superior deportiva de exterior casual con bolsillos con cremallera, chaqueta de trabajo ligera cortavientos con capucha. Esta chaqueta con cremallera es para hombres que disfrutan de actividades al aire libre como trotar, ciclismo, pesca, senderismo y acampada.",
            en: "New men's jacket, casual outdoor sports top with zip pockets, lightweight windproof work jacket with hood. This zip-up jacket is for men who enjoy outdoor activities such as jogging, cycling, fishing, hiking, and camping.",
            qu: "Musuq qharikuna chaleco, casual hawapi pukllay patamanta cremallera bolsillosniyuq, llampu wayramanta hark’aq llamk’ay chaleco capuchayuq. Kay cremallerayuq chalecoqa qharikunapaqmi, paykunaqa hawapi ruwaykunata kusikunku, imaynan phaway, bicicletapi puriy, challwakuy, senderismo, camping ima.",
        },

        detalles: {
            es: "Diseñada para los que encuentran su libertad en la ruta, la montaña o el río. Esta chaqueta cortavientos es la aliada perfecta para tus sesiones de running, ciclismo o senderismo. Ligera como una segunda piel, pero lo suficientemente resistente para protegerte en tus acampadas más exigentes. Con bolsillos con cremallera de seguridad para que tus pertenencias lleguen tan lejos como tú. No dejes que el clima dicte tus reglas; sal ahí fuera y conquista tu próxima cima.\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Abrigo Deportivo.\n✓ Chaqueta Casual.\n✓ Capucha Removible.",
            en: "Designed for those who find their freedom on the trail, in the mountains, or on the river. This windbreaker jacket is the perfect companion for your running, cycling, or hiking sessions. Light as a second skin, yet durable enough to protect you on your most demanding camping trips. It features secure zippered pockets so your belongings can go as far as you do. Don't let the weather dictate your rules; get out there and conquer your next summit.\n\n<strong>Features:</strong>\n✓ Easy to carry.\n✓ Sporty Coat.\n✓ Casual Jacket.\n✓ Removable Hood.",
            qu: "Senderopi, orqokunapi otaq mayupi libre kayta tariqkunapaqmi ruwasqa. Kay wayra hark’aq chaleco allin compañero kan phaway, bicicleta utaq senderismo sesionesniykipaq. Iskay kaq qara hina k’anchariq, chaywanpas allin takyaq, aswan sasa camping puriyniykikunapi amachanaykipaq. Chayqa seguro cremallerayuq bolsillosniyuqmi, chaymi imaykipas qam hina karuman rinanpaq. Ama pacha kamachikuyniykikunata kamachinanta saqeychu; chaymanta lluqsispa qatiqnin puntaykita atipay.\n\n<strong>Rurakuna:</strong>\n✓ Mana sasachu apay.\n✓ Abrigo deportivo.\n✓ Chaqueta Casual.\n✓ Capucha hurqunapaq.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 11, 15, 14, 13, 12, 10],
    },
    {
    // =================================================
    // =========== 17 MOCHILA WEIXIER ================
    // =================================================
        id: 17,
        // titulo: "Figura de Albedo",
        // subtitulo: "35x50 cm",
        titulo: {
        es: "Mochila Monarch",
        en: "Monarch Backpack",
        qu: "Q'ipina Inka"
        },
        subtitulo: {
            es: "WEIXIER",
            en: "WEIXIER",
            qu: "WEIXIER"
        },
        marca: {
        es: "Marca: WEIXIER",
        en: "Brand: WEIXIER",
        qu: "Yupichay: WEIXIER"
        },
        estilo: {
            es: "Monarca Oscuro",
            en: "Dark Monarch",
            qu: "Tutayaq Kamachikuq"
        },
        precio: 84.90,
        precioOriginal: 109.90,
        descuento: 22,
        disponible: 2,
        // marca: "Marca: BANDAI",
        // estilo: "Albedo",
        categoria: "moda",
        imagenes: [
            "assets/34 MOCHILA WEIXIER/01.webp",
            "assets/34 MOCHILA WEIXIER/02.avif",
            "assets/34 MOCHILA WEIXIER/03.avif",
            "assets/34 MOCHILA WEIXIER/04.avif",
            "assets/34 MOCHILA WEIXIER/05.avif",
            "assets/34 MOCHILA WEIXIER/06.avif",
            "assets/34 MOCHILA WEIXIER/07.avif",
            "assets/34 MOCHILA WEIXIER/08.avif",
            "assets/34 MOCHILA WEIXIER/09.avif",
            "assets/34 MOCHILA WEIXIER/10.avif",
            "assets/34 MOCHILA WEIXIER/11.avif",
            "assets/34 MOCHILA WEIXIER/12.avif",
            "assets/34 MOCHILA WEIXIER/13.avif",
            "assets/34 MOCHILA WEIXIER/14.avif",
            
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/34 MOCHILA WEIXIER/15.mp4",
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [
            "assets/34 MOCHILA WEIXIER/02.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Monarca Oscuro", en: "Dark Monarch", qu: "Tutayaq Kamachikuq" }, 
            imagen: "assets/34 MOCHILA WEIXIER/01.webp",
            color: { es: "Negro", en: "Black", qu: "Tutayaq" } 
        },
        { 
            nombre: { es: "Monarca Blanco", en: "White Monarch", qu: "Yuraq Kamachiq" }, 
            imagen: "assets/34 MOCHILA WEIXIER/04.5.webp", 
            color: { es: "Blanco", en: "White", qu: "Yuraq" } 
        },
        ],
        ///////////////

        collageOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14],


        tituloLargo: {
            es: "WEIXIER Mochila Multifuncional Unisex, Bolso de Hombro Doble para Mayor Sujeción, Mochila para Viajes Cortos, Bolso para Ir al Trabajo, con Compartimento Separado para Zapatos, Gran Capacidad con Múltiples Bolsillos, Compatible con Laptop, Mochila de Moda, Bolso Multifuncional.",
            en: "WEIXIER Unisex Multifunctional Backpack, Double Shoulder Bag for Extra Support, Short Trip Backpack, Work Bag, with Separate Shoe Compartment, Large Capacity with Multiple Pockets, Laptop Compatible, Fashionable Backpack, Multifunctional Bag.",
            qu: "WEIXIER Unisex Multifuncional Q'ipina, Iskay Hombro Wayaqa Extra Yanapanapaq, Pisi Viaje Mochila, Llamkana Bolsa, Sapaq Zapato Compartimientoyuq, Hatun Capacidad achka Bolsillosniyuq, Laptop Compatible, Moda Q'ipina, Multifuncional Wayaqa.",
        },

        detalles: {
            es: "Viajar ligero no significa dejar nada fuera. Esta mochila Weixier está diseñada para optimizar cada centímetro. Su compartimento especial para calzado te permite llevar un par extra de zapatillas sin ocupar espacio en el compartimento principal de ropa y tecnología. Es la organización definitiva para viajes cortos: tus zapatillas abajo, tu laptop arriba, y tú listo para la acción.\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Compartimento para calzado.\n✓ Soporta 50 Kilos.\n✓ Material Resistente.",
            en: "Traveling light doesn't mean leaving anything behind. This Weixier backpack is designed to optimize every inch. Its special shoe compartment lets you pack an extra pair of sneakers without taking up space in the main compartment for clothes and tech. It's the ultimate organization solution for short trips: your sneakers at the bottom, your laptop at the top, and you're ready for action.\n\n<strong>Characteristics:</strong>\n✓ Easy to carry.\n✓ Shoe compartment.\n✓ Supports 50 kilos.\n✓ Durable Material.",
            qu: "Viaje k’anchayqa manan imatapas saqeychu. Kay Weixier mochilaqa sapa pulgadata allinta ruwananpaqmi ruwasqa kachkan. Paypa especial zapatos compartimienton permite pack huk extra par zapatillas mana espaciota hap’ispa compartimiento principalpi p’achakunapaq hinallataq tech. Chayqa qhipa organizacionpa solucionnin pisi puriykunapaq: zapatillasniyki uraypi, laptopniyki patapi, chaymanta ruwanapaq wakichisqa kanki.\n\n<strong>Kaqninkuna:</strong>\n✓ Mana sasachu apanapaq.\n✓ Zapatokuna churana.\n✓ 50 kilokunata yanapan.\n✓ Material Hark'aq.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 11, 16, 15, 14, 13, 12, 10],
    },
    {
    // =================================================
    // =========== 18 MASAJEADOR ALMOHADA 3 BOTONES  ================
    // =================================================
        id:18,

        titulo: {
        es: "Masajeador Suave",
        en: "Soft Massager",
        qu: "Llamp’u Masajeador"
        },
        subtitulo: {
            es: "3 Botones",
            en: "3 Buttons",
            qu: "3 Ñitina"
        },
        marca: {
        es: "Marca: Estándar",
        en: "Brand: Standard",
        qu: "Yupichay: Kaqlla"
        },
        estilo: {
            es: "Masajeadora 3 Botones",
            en: "Massager 3 Buttons",
            qu: "Masajeador 3 Ñitina"
        },
        precio: 54.90,
        precioOriginal: 79.90,
        descuento: 31,
        disponible: 3,

        categoria: "licores",
        imagenes: [
            "assets/11 ALMOHADA DE 3 BOTONES/01.webp",
            "assets/11 ALMOHADA DE 3 BOTONES/03.avif",
            "assets/11 ALMOHADA DE 3 BOTONES/04.avif",
            "assets/11 ALMOHADA DE 3 BOTONES/05.avif",
            "assets/11 ALMOHADA DE 3 BOTONES/06.avif",
            "assets/11 ALMOHADA DE 3 BOTONES/07.avif",
            "assets/11 ALMOHADA DE 3 BOTONES/08.avif",
            
        ],
        videos: [
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
            "assets/11 ALMOHADA DE 3 BOTONES/09.mp4",
            
            
        ],
        // ─── CARÁTULAS DE CADA VIDEO (mismo orden que videos) ───
        videoPosters: [

            "assets/11 ALMOHADA DE 3 BOTONES/06.avif",
        ],

        tipoVariante: "color", // ← 'estilo' | 'color' | 'talla'
        // ─── ESTILOS / COLORES ───
        // Onii-chan: aquí defines los diferentes colores/estilos del producto.
        // Cada uno tiene una mini imagen para el selector.
        estilos: [
        { 
            nombre: { es: "Masajeadora 3 Botones", en: "Massager 3 Buttons", qu: "Masajeador 3 Ñitina" }, 
            imagen: "assets/11 ALMOHADA DE 3 BOTONES/01.webp",
            color: { es: "Azul", en: "Blue", qu: "Anqas" } 
        },
        ],
        ///////////////

        collageOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],


        tituloLargo: {
            es: "Almohada de Masaje Eléctrica para Cuello, Dispositivo de Masaje Shiatsu sin Cable con Calor, Herramienta Portátil Recargable Tipo-C para Relajación Cervical para Oficina, Hogar y Viajes, Regalo de Masajeador Ergonómico.",
            en: "Electric Neck Massage Pillow, Cordless Shiatsu Massage Device with Heat, Portable Rechargeable Type-C Neck Relaxation Tool for Office, Home and Travel, Ergonomic Massager Gift.",
            qu: "Sawna masaje de cuello eléctrico, Dispositivo de Masaje Shiatsu Inalámbrico Ruphaywan, Herramienta Recargable Recargable Tipo-C Cuello Relajación Oficinapaq, Wasipaq chaymanta Viajepaq, Masajeador Ergonómico Regalo.",
        },

        detalles: {
            es: "La Almohada masajeadora de cuello ofrece un masaje shiatsu profundo en cualquier lugar y en cualquier momento. El control integrado le permite controlar su experiencia de masaje. Agregue calor y experimente un masaje de cuello y hombros más profundo y relajante..\n\n<strong>Características:</strong>\n✓ Fácil de llevar.\n✓ Masaje bidireccional.\n✓ Ruido silencios de alta frecuencia.\n✓ Suave y transpirable.\n✓ Ayuda a aliviar el dolor muscular.\n✓ Batería de litio recargable.\n✓ Capacidad de Batería: 2000mAH.\n✓ Potencia nominal: 3,7 W.\n✓ Tensión nominal: DC5.0V\n✓ Peso neto del producto:495 gramos.  \n✓ Cable de Carga: Si.\n✓ Tipo C: Si.",
            en: "The neck massage pillow offers a deep shiatsu massage anywhere, anytime. The integrated control allows you to customize your massage experience. Add heat for a deeper, more relaxing neck and shoulder massage.\n\n<strong>Features:</strong>\n✓ Easy to carry.\n✓ Two-way massage.\n✓ High-frequency noise reduction.\n✓ Soft and breathable.\n✓ Helps relieve muscle pain.\n✓ Rechargeable lithium battery.\n✓ Battery capacity: 2000mAh.\n✓ Rated power: 3.7W.\n✓ Rated voltage: DC5.0V\n✓ Net weight: 495 grams.\n✓ Charging cable: Yes.\n✓ Type C: Yes.",
            qu: "Kunka masaje almohadaqa maypipas, mayk’aqllapas ukhu shiatsu masajeta qun. Control integrado nisqa masaje experienciaykita ruwayta atikunki. Ruphayta yapay aswan ukhu, aswan samayniyuq kunka, hombro masajepaq.\n\n<strong>Rurakuna:</strong>\n✓ Mana sasachu apaykachanapaq.\n✓ Iskay ñan masaje.\n✓ Alto frecuenciawan qapariy pisiyachiy.\n✓ Llampu hinaspa samay atiy.\n✓ Aycha nanayta allinyachinanpaq yanapan.\n✓ Batería de litio recargable.\n✓ Pila capacidad: 2000mAh.\n✓ Atiy nominal: 3.7W.\n✓ Tensión nominal: DC5.0V\n✓ Llasaq neto: 495 gramos.\n✓ Cable de carga: Arí.\n✓ Tipo C: Arí.",
        },
        envio: {
            es: "✓ Envío gratis en las Estaciones del Tren.\n✓ S/10 por Envío a domicilio o Provincia.",
            en: "✓ Free shipping at Train Stations.\n✓ S/10 for Home Delivery.",
            qu: "✓ Libre chaski Tren Estaciones.\n✓ S/10 wasi chaski.",
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
        relacionados: [1, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9],
    },
    {
    // =================================================
    // =========== 19 FIGURA ALBEDO ================
    // =================================================
        id: 19,
        // titulo: "Figura de Albedo",
        // subtitulo: "35x50 cm",
        titulo: {
        es: "Figura de Albedo",
        en: "Albedo Figure",
        qu: "Albedo Siqi"
        },
        subtitulo: {
            es: "35x50 cm",
            en: "35x50 cm",
            qu: "35x50 cm"
        },
        marca: {
        es: "Marca: BANDAI",
        en: "Brand: BANDAI",
        qu: "Yupichay: BANDAI"
        },
        estilo: {
            es: "Albedo",
            en: "Albedo",
            qu: "Albedo"
        },
        precio: 51.87,
        precioOriginal: 77.91,
        descuento: 33,
        disponible: 7,
        // marca: "Marca: BANDAI",
        // estilo: "Albedo",
        categoria: "perfumes",
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
            // "assets/videos/albedo-360.mp4", https://res.cloudinary.com/dmeoj7xbx/video/upload/v1787964476/17_eebcv2.webm
            
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
        { 
            nombre: { es: "Albedo", en: "Albedo", qu: "Albedo" }, 
            imagen: "assets/01 albedo.avif", 
            color: { es: "Estándar", en: "Standard", qu: "Kaqlla" } 
        },
        { 
            nombre: { es: "Albedo Oscura", en: "Albedo Dark", qu: "Albedo Tutayasqa" }, 
            imagen: "assets/35 FIGURA ALBEDO/09.jpg", 
            color: { es: "Negro", en: "Black", qu: "Yanaq" } 
        },
        { 
            nombre: { es: "Albedo Sacerdotisa", en: "Albedo Priestess", qu: "Albedo Tayta Cura" }, 
            imagen: "assets/35 FIGURA ALBEDO/13.webp", 
            color: { es: "Púrpura", en: "Purple", qu: "Kulli" } 
        },
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
        relacionados: [1, 11, 17, 16, 15, 14, 13, 12, 10],
    },
    // ═══════════════════════════════════════════════════════
    // ONII-CHAN: COPIA Y PEGA EL BLOQUE DE ARRIBA PARA AGREGAR MÁS PRODUCTOS.
    // Solo cambia el id, los textos, las rutas de imágenes y videos.
    // ═══════════════════════════════════════════════════════
];

// Helper para leer campos traducidos de un producto
// Soporta tanto string antiguo como objeto {es, en, qu}
function tp(producto, key, fallback = '') {
    if (!producto) return fallback;
    const val = producto[key];
    if (typeof val === 'string') return val;          // ← retrocompatible
    if (val && typeof val === 'object') {
        return val[idiomaActual] || val.es || val.en || fallback;
    }
    return fallback;
}

// Helper para los estilos/variantes
function tEstilo(estilo, key = 'nombre') {
    if (!estilo) return '';
    const val = estilo[key];
    if (typeof val === 'string') return val;
    if (val && typeof val === 'object') {
        return val[idiomaActual] || val.es || val.en || '';
    }
    return '';
}







////////////////////////////////////////////////////////////////////////////
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
let lightboxStatePushed = false;

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
        if (width >= 1024) return 16;
        if (width >= 640) return 15;
        return 16;
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
            window.scrollTo({ top: 0, behavior: 'smooth' });

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
    // ======================================================
    // CONFIGURACIÓN (Onii-chan edita aquí)
    // ======================================================
    const WHATSAPP_NUMEROS = {
    default:  '51900556685',
    perfumes: '51933602140',
    licores:  '51910517754',
    };

    const TEXTO_PEDIDO = {
    encabezado: '🛒 *Pedido ZAGY Tech*\n\n',
    separador:  '─────────────────\n',
    pie:        '¡Gracias por tu compra! 🙌'
    };

    // ======================================================
    // DETECTAR CATEGORÍA (tu función actual)
    // ======================================================
    function detectarCategoriaItem(item) {
    const prod = getProducto(item.id);
    if (prod?.categoria) {
        const cat = prod.categoria.toLowerCase().trim();
        if (['perfumes','joyeria','licores'].includes(cat)) return cat;
    }
    // Fallback por clases del DOM
    const el = document.querySelector(`#product-grid article[data-id="${item.id}"],
                                        #favoritos-grid article[data-id="${item.id}"]`);
    if (el) {
        const cls = Array.from(el.classList).find(c => c.startsWith('cat-'));
        if (cls) {
        const cat = cls.replace('cat-', '');
        if (['perfumes','joyeria','licores'].includes(cat)) return cat;
        }
    }
    return 'default';
    }

    // ======================================================
    // PANEL MODAL PARA CHATS BLOQUEADOS
    // ======================================================
    function mostrarPanelWhatsApp(chatsPendientes) {
    // Si ya existe, destruirlo
    const viejo = document.getElementById('zagy-modal-whatsapp');
    if (viejo) viejo.remove();

    const overlay = document.createElement('div');
    overlay.id = 'zagy-modal-whatsapp';
    overlay.style.cssText = `
        position:fixed; inset:0; z-index:9999;
        background:rgba(0,0,0,0.75); backdrop-filter:blur(4px);
        display:flex; align-items:center; justify-content:center;
        padding:16px; font-family:Inter, sans-serif;
    `;

    const card = document.createElement('div');
    card.style.cssText = `
        background:#fff; border-radius:20px; width:100%; max-width:380px;
        padding:24px; box-shadow:0 20px 60px rgba(0,0,0,0.4);
        animation:modalPop 0.25s ease-out;
    `;

    // Keyframes rápidos inline
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalPop{from{transform:scale(0.9);opacity:0}to{transform:scale(1);opacity:1}}
        .zagy-wa-btn{display:block;width:100%;padding:14px 16px;border-radius:14px;
        background:#FB7701;color:#fff;font-weight:700;text-decoration:none;
        margin-bottom:10px;text-align:center;font-size:15px;transition:transform .15s}
        .zagy-wa-btn:active{transform:scale(0.97)}
        .zagy-wa-btn.secundario{background:#1f2937}
        .zagy-close-btn{width:100%;padding:12px;border-radius:14px;border:none;
        background:#e5e7eb;color:#374151;font-weight:700;cursor:pointer;margin-top:6px}
    `;
    document.head.appendChild(style);

    // Título
    const titulo = document.createElement('h3');
    titulo.textContent = 'Enviar pedido por WhatsApp';
    titulo.style.cssText = 'margin:0 0 6px 0;font-size:18px;font-weight:800;color:#111';
    card.appendChild(titulo);

    const sub = document.createElement('p');
    sub.textContent = 'Tu navegador bloqueó ventanas automáticas. Toca cada botón para enviar:';
    sub.style.cssText = 'margin:0 0 18px 0;font-size:13px;color:#6b7280;line-height:1.4';
    card.appendChild(sub);

    // Botones de chats
    chatsPendientes.forEach(chat => {
        const a = document.createElement('a');
        a.href = `https://wa.me/${chat.numero}?text=${encodeURIComponent(chat.mensaje)}`;
        a.target = '_blank';
        a.className = 'zagy-wa-btn' + (chat.tipo === 'default' ? '' : ' secundario');
        a.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;gap:8px">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span>${chat.label}</span>
            <span style="opacity:.85;font-size:12px;font-weight:500">s/ ${chat.total.toFixed(2)}</span>
        </div>
        <div style="font-size:11px;font-weight:500;opacity:.85;margin-top:4px">${chat.numero}</div>
        `;
        card.appendChild(a);
    });

    // Botón cerrar
    const cerrar = document.createElement('button');
    cerrar.className = 'zagy-close-btn';
    cerrar.textContent = 'Cerrar';
    cerrar.onclick = () => overlay.remove();
    card.appendChild(cerrar);

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // Cerrar al tocar fondo
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
    }

    // ======================================================
    // FINALIZAR COMPRA → WHATSAPP (ANTI-BLOQUEO)
    // ======================================================
    const btnFinalizar = document.querySelector('#btn-carrito button');
    if (btnFinalizar) {
    btnFinalizar.addEventListener('click', () => {
        if (carritoDeCompras.length === 0) {
        const msg = idiomaActual === 'en' ? 'Your cart is empty' :
                    idiomaActual === 'qu' ? 'Carroykiqa ch\'usaqmi' :
                    'Tu carrito está vacío';
        alert(msg);
        return;
        }

        // 1. Agrupar
        const grupos = {
        default:  { items: [], total: 0, numero: WHATSAPP_NUMEROS.default, label: '📦 Pedido General' },
        perfumes: { items: [], total: 0, numero: WHATSAPP_NUMEROS.perfumes, label: '💎 Perfumes / Joyería' },
        licores:  { items: [], total: 0, numero: WHATSAPP_NUMEROS.licores,  label: '🍷 Licores' }
        };

        carritoDeCompras.forEach(item => {
        const cat = detectarCategoriaItem(item);
        let destino = 'default';
        if (cat === 'perfumes' || cat === 'joyeria') destino = 'perfumes';
        else if (cat === 'licores') destino = 'licores';

        grupos[destino].items.push(item);
        grupos[destino].total += item.precio * item.cantidad;
        });

        // 2. Construir objetos de chat
        const chats = [];
        Object.entries(grupos).forEach(([key, g]) => {
        if (g.items.length === 0) return;
        let mensaje = TEXTO_PEDIDO.encabezado;
        g.items.forEach(item => {
            mensaje += `• *${item.titulo}* ${item.subtitulo}\n`;
            mensaje += `  _Cantidad:_ ${item.cantidad}\n`;
            mensaje += `  _Precio unitario:_ s/ ${item.precio.toFixed(2)}\n\n`;
        });
        mensaje += TEXTO_PEDIDO.separador;
        mensaje += `*Total a pagar: s/ ${g.total.toFixed(2)}*\n\n`;
        mensaje += TEXTO_PEDIDO.pie;

        chats.push({
            tipo: key,
            numero: g.numero,
            mensaje: mensaje,
            total: g.total,
            label: g.label
        });
        });

        if (chats.length === 0) return;

        // 3. ESTRATEGIA ANTI-BLOQUEO
        const esMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const abiertas = [];
        const bloqueadas = [];

        if (true) {
        // MÓVIL: abrir SOLO el primero automático, el resto en modal
        const [primera, ...resto] = chats;
        window.open(`https://wa.me/${primera.numero}?text=${encodeURIComponent(primera.mensaje)}`, '_blank');
        if (resto.length > 0) mostrarPanelWhatsApp(resto);

        } else {
        // PC: intentar abrir TODAS en el mismo tick del click
        chats.forEach(chat => {
            const win = window.open(
            `https://wa.me/${chat.numero}?text=${encodeURIComponent(chat.mensaje)}`,
            '_blank'
            );
            // Si retorna null o la ventana ya está cerrada = bloqueada
            if (win && !win.closed) {
            abiertas.push(chat);
            } else {
            bloqueadas.push(chat);
            }
        });

        // Si el navegador bloqueó alguna, mostrar modal con esas
        if (bloqueadas.length > 0) {
            mostrarPanelWhatsApp(bloqueadas);
        }
        }
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
    
    // 🔥 SOLO aceptar variantes reales (con key numérica del detalle/favoritos)
    // Ignorar completamente variantes hardcodeadas del HTML estático
    if (btnCircular.dataset.variante) {
        try { 
            const varParsed = JSON.parse(btnCircular.dataset.variante);
            if (varParsed && typeof varParsed.key === 'number') {
                producto.variante = varParsed;
            }
            // Si no tiene key numérica, NO se asigna variante (tratado como base)
        } catch(e) {}
    }
    
    agregarAlCarrito(producto);
    animarFlyToCart(btnCircular, producto.imagen);
});

function agregarAlCarrito(producto) {
    // ¿Es base? (sin variante, null, o sin key numérica)
    const esBase = (v) => !v || v === null || typeof v.key !== 'number';
    
    const prodEsBase = esBase(producto.variante);
    
    const index = carritoDeCompras.findIndex(item => {
        const itemEsBase = esBase(item.variante);
        if (item.id !== producto.id) return false;
        
        // Ambos son base → mismo item
        if (prodEsBase && itemEsBase) return true;
        
        // Ambos son variantes reales → comparar por key
        if (!prodEsBase && !itemEsBase) {
            return (item.variante?.key === producto.variante?.key);
        }
        
        // Uno es base y otro no → diferentes
        return false;
    });
    
    if (index !== -1) {
        carritoDeCompras[index].cantidad += 1;
    } else {
        const itemLimpio = { 
            ...producto, 
            cantidad: 1, 
            cartId: Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
        };
        // Si es base, eliminar la propiedad variante por completo
        if (prodEsBase) {
            delete itemLimpio.variante;
        }
        carritoDeCompras.push(itemLimpio);
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
        const prod = getProducto(item.id);
        
        let tituloItem = item.titulo || '';
        if (typeof tituloItem === 'object') {
            tituloItem = tituloItem[idiomaActual] || tituloItem.es || tituloItem.en || '';
        }
        if (prod) tituloItem = tp(prod, 'titulo', tituloItem);
        
        let subtituloItem = item.subtitulo || '';
        if (typeof subtituloItem === 'object') {
            subtituloItem = subtituloItem[idiomaActual] || subtituloItem.es || subtituloItem.en || '';
        }
        if (prod) subtituloItem = tp(prod, 'subtitulo', subtituloItem);

        const subtotalItem = item.precio * item.cantidad;
        precioTotalGeneral += subtotalItem;
        
        const subtotalStr = subtotalItem.toFixed(2);
        const subSizeClass = subtotalStr.length > 7 ? 'text-sm' : 'text-lg';

        // VARIANTE
        let varianteTexto = '';
        if (item.variante) {
            let valorMostrar = item.variante.valor || '';
            if (prod?.estilos && typeof item.variante.key === 'number' && prod.estilos[item.variante.key]) {
                const estiloDB = prod.estilos[item.variante.key];
                valorMostrar = tEstilo(estiloDB, 'color') || tEstilo(estiloDB);
            } else if (typeof valorMostrar === 'object') {
                valorMostrar = valorMostrar[idiomaActual] || valorMostrar.es || '';
            }
            const tipoVar = item.variante.tipo || 'Color';
            varianteTexto = `${tipoVar}: ${valorMostrar}`;
        } else {
            // BASE: leer el COLOR del estilo base desde productosDB
            const tipo = prod?.tipoVariante || 'estilo';
            const labelMap = { estilo: 'Estilo', color: 'Color', talla: 'Talla' };
            const label = labelMap[tipo] || 'Estilo';
            
            let colorBase = 'Estándar';
            if (prod?.estilos?.length) {
                const nombreBase = tp(prod, 'estilo');
                const estiloBase = prod.estilos.find(est => tEstilo(est) === nombreBase) || prod.estilos[0];
                colorBase = tEstilo(estiloBase, 'color') || tEstilo(estiloBase);
            }
            varianteTexto = `${label}: ${colorBase}`;
        }

        const articleHTML = `
    <div class="swipe-wrapper shadow-lg shadow-stone-400 dark:shadow-temu/0 relative rounded-xl" data-swipe-id="${item.cartId}">
        <div class="swipe-delete-btn absolute right-0 top-0 bottom-0 w-20 flex items-center justify-center z-0 cursor-pointer rounded-r-xl">
            <i class="ri-delete-bin-6-line text-white text-xl"></i>
        </div>
        <article class="card-swipe relative z-10 flex gap-3 py-2 rounded-xl justify-between" data-id="${item.id}" data-titulo="${tituloItem}" data-subtitulo="${subtituloItem}">
            <article class="flex gap-3 min-w-0">
                <div class="size-20 ml-2 rounded-lg overflow-hidden shrink-0 cursor-pointer" onclick="event.stopPropagation(); abrirDetalleProducto(${item.id})">
                    <img src="${item.imagen}" alt="" class="w-full h-full object-cover pointer-events-none">
                </div>
                <div class="flex flex-col items-start justify-center gap-1 min-w-0">
                    <div>
                        <p class="font-Inter font-medium text-xs truncate w-full dark:text-temu">${tituloItem}</p>
                        <p class="font-Inter font-medium text-xs truncate w-full dark:text-temu">${subtituloItem}</p>
                    </div>
                    <button class="h-6 w-30 bg-verdeTemu3 dark:bg-stone-800 rounded-4xl flex justify-center items-center text-xs font-semibold text-white dark:text-verdeTemu2">
                        ${varianteTexto}
                    </button>
                    <p class="text-xs font-bold font-MontAlternates dark:text-stone-500">s/ ${item.precio.toFixed(2)}</p>
                </div>
            </article>
            <div class="flex flex-col justify-start items-end mr-2 mt-6 shrink-0">
                <p class="${subSizeClass} text-temu font-Russo pr-1 leading-3 whitespace-nowrap">s/ ${subtotalStr}</p>
                <div class="flex justify-center items-center h-5 w-15 rounded-4xl bg-stone-950 dark:bg-stone-800 gap-2 text-white dark:text-white/70 font-semibold mt-5">
                    <button onclick="cambiarCantidad('${item.cartId}', -1)" class="bg-transparent cursor-pointer rounded-4xl size-5 flex items-center justify-center">-</button>
                    <div class="flex flex-col items-center justify-center">
                        <p class="leading-3 text-xs">${item.cantidad}</p>
                    </div>
                    <button onclick="cambiarCantidad('${item.cartId}', 1)" class="bg-transparent cursor-pointer rounded-4xl size-5 flex items-center justify-center">+</button>
                </div>
            </div>
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
    let totalSizeClass = 'text-3xl';
    let decimalSizeClass = 'text-xl';
    if (totalChars > 9) { totalSizeClass = 'text-xl'; decimalSizeClass = 'text-base'; }
    else if (totalChars > 7) { totalSizeClass = 'text-2xl'; decimalSizeClass = 'text-lg'; }

    if (elementoTotal) {
        elementoTotal.innerHTML = `<span class="font-Russo ${totalSizeClass} whitespace-nowrap">s/ ${entero}.<span class="${decimalSizeClass} font-Russo">${decimal}</span></span>`;
    }
    
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
    const pid = parseInt(producto.id, 10);
    let index;
    
    if (producto.variante) {
        const pKey = producto.variante.key != null ? String(producto.variante.key) : null;
        index = favoritos.findIndex(f => {
            if (parseInt(f.id, 10) !== pid) return false;
            if (!f.variante) return false;
            const fKey = f.variante.key != null ? String(f.variante.key) : null;
            if (pKey !== null && fKey !== null) return pKey === fKey;
            return (f.variante.valor || '').toString().trim().toLowerCase() === 
                   (producto.variante.valor || '').toString().trim().toLowerCase();
        });
    } else if (producto.esBase) {
        index = favoritos.findIndex(f => parseInt(f.id, 10) === pid && !f.variante);
    } else {
        // Grid general: solo toca el producto BASE
        index = favoritos.findIndex(f => parseInt(f.id, 10) === pid && !f.variante);
    }
    
    if (index !== -1) { 
        favoritos.splice(index, 1); 
    } else { 
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
    document.querySelectorAll('.btn-favorito').forEach(btn => {
        const card = btn.closest('article');
        if (!card) return;
        const id = parseInt(card.dataset.id, 10);
        const icono = btn.querySelector('i');
        
        const varianteAttr = card.getAttribute('data-variante');
        const enFavoritosGrid = !!card.closest('#favoritos-grid');
        
        let esFav = false;
        
        if (varianteAttr) {
            try {
                const v = JSON.parse(varianteAttr);
                // Normalizar key a string (dataset siempre stringifica, JSON puede traer number)
                const vKey = v.key != null ? String(v.key) : null;
                const vVal = (v.valor || '').toString().trim().toLowerCase();
                
                esFav = favoritos.some(f => {
                    if (parseInt(f.id, 10) !== id) return false;
                    if (!f.variante) return false;
                    
                    const fKey = f.variante.key != null ? String(f.variante.key) : null;
                    const fVal = (f.variante.valor || '').toString().trim().toLowerCase();
                    
                    // Prioridad absoluta: key numérico (invariante al idioma)
                    if (vKey !== null && fKey !== null) {
                        return vKey === fKey;
                    }
                    // Fallback: valor normalizado
                    return vVal === fVal;
                });
            } catch(e) {
                esFav = false;
            }
        } else if (enFavoritosGrid) {
            // Card en favoritos sin data-variante = producto base
            esFav = favoritos.some(f => parseInt(f.id, 10) === id && !f.variante);
        } else {
            // Grid general: solo mostrar activo si el producto BASE está en favoritos
            esFav = favoritos.some(f => parseInt(f.id, 10) === id && !f.variante);
        }
        
        if (esFav) {
            btn.classList.add('activo');
            if (icono) {
                icono.classList.remove('ri-heart-line', 'text-stone-950', 'dark:text-white/20');
                icono.classList.add('ri-heart-fill', 'text-temu');
            }
        } else {
            btn.classList.remove('activo');
            if (icono) {
                icono.classList.remove('ri-heart-fill', 'text-temu');
                icono.classList.add('ri-heart-line', 'text-stone-950', 'dark:text-white/20');
            }
        }
    });
    
    // ─── HEROES ───
    document.querySelectorAll('.btn-favorito-hero').forEach(btn => {
        const slide = btn.closest('.swiper-slide');
        if (!slide) return;
        const id = parseInt(slide.dataset.id, 10);
        const icono = btn.querySelector('i');
        const esFav = favoritos.some(f => parseInt(f.id, 10) === id && !f.variante);
        if (esFav) {
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
        const prod = getProducto(item.id);
        
        let tituloFav = item.titulo || '';
        if (typeof tituloFav === 'object') {
            tituloFav = tituloFav[idiomaActual] || tituloFav.es || tituloFav.en || '';
        }
        if (prod) tituloFav = tp(prod, 'titulo', tituloFav);
        
        let subtituloFav = item.subtitulo || '';
        if (typeof subtituloFav === 'object') {
            subtituloFav = subtituloFav[idiomaActual] || subtituloFav.es || subtituloFav.en || '';
        }
        if (prod) subtituloFav = tp(prod, 'subtitulo', subtituloFav);
        
        let textoVariante = subtituloFav;
        if (item.variante) {
            let valorMostrar = item.variante.valor || '';
            if (prod?.estilos && typeof item.variante.key === 'number' && prod.estilos[item.variante.key]) {
                const estiloDB = prod.estilos[item.variante.key];
                valorMostrar = tEstilo(estiloDB, 'color') || tEstilo(estiloDB);
            } else if (typeof valorMostrar === 'object') {
                valorMostrar = valorMostrar[idiomaActual] || valorMostrar.es || '';
            }
            textoVariante = `${item.variante.tipo || 'Color'}: ${valorMostrar}`;
        } else if (prod) {
            // BASE: leer el COLOR del estilo base
            const tipo = prod.tipoVariante || 'estilo';
            const labelMap = { estilo: 'Estilo', color: 'Color', talla: 'Talla' };
            const label = labelMap[tipo] || 'Estilo';
            
            let colorBase = 'Estándar';
            if (prod.estilos?.length) {
                const nombreBase = tp(prod, 'estilo');
                const estiloBase = prod.estilos.find(est => tEstilo(est) === nombreBase) || prod.estilos[0];
                colorBase = tEstilo(estiloBase, 'color') || tEstilo(estiloBase);
            }
            textoVariante = `${label}: ${colorBase}`;
        }

        const cardHTML = `
        <article class="w-[172px] h-[254px] relative sm:w-[234px] sm:h-[381px]" data-id="${item.id}" data-titulo="${tituloFav}" data-subtitulo="${subtituloFav}" data-imagen="${item.imagenVariante || item.imagen}" ${item.variante ? `data-variante='${JSON.stringify(item.variante)}'` : ''}>
            <div class="${item.clsProducto || 'absolute inset-0 bg-stone-950 dark:bg-temu cardProducto'}"></div>
            <div class="${item.clsProductoInner || 'w-[172px] h-52.5 bg-white dark:bg-stone-900 cardProductoInner absolute inset-0 overflow-hidden border border-stone-950 dark:border-temu sm:w-[234px] sm:h-78.75'}">
                <img src="${item.imagenVariante || item.imagen}" alt="" class="${item.clsImgProducto || 'w-full h-full object-cover object-[50%_70%] sm:object-[50%_60%]'}">
            </div>
            <button class="${item.clsBtnFav || 'btn-favorito absolute top-1.5 right-1.5 z-20 size-6 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 sm:size-9 sm:top-2 sm:right-2'} activo">
                <i class="ri-heart-fill text-sm text-temu transition-colors duration-200 sm:text-lg"></i>
            </button>
            <div class="${item.clsBtnPrecio || 'w-18 h-6 absolute top-0.5 left-2.25 bg-puro dark:bg-stone-800 dark:text-temu dark:border dark:border-stone-800 rounded-br-xl rounded-tl-xl flex items-center justify-center cursor-pointer btn-precio sm:w-27 sm:h-9 sm:top-0.75 sm:left-[13.5px] sm:rounded-br-[18px] sm:rounded-tl-[18px]'}">
                <p class="font-Russo text-xs pt-0.25 sm:text-base">s/ ${parseFloat(item.precio).toFixed(2)}</p>
            </div>
            <button class="${item.clsBtnCarrito || 'btn-agregar-carrito size-7 bg-stone-950 dark:bg-stone-800 absolute right-[2.5px] bottom-[28px] rounded-4xl z-10 flex justify-center items-center cursor-pointer transition-transform duration-300 btn-epico sm:size-10.5 sm:right-[3.75px] sm:bottom-[42px]'}"
            data-id="${item.id}" data-titulo="${tituloFav}" data-subtitulo="${subtituloFav}" data-precio="${item.precio}" data-imagen="${item.imagenVariante || item.imagen}" ${item.variante ? `data-variante='${JSON.stringify(item.variante)}'` : ''}>
                <i class="${item.clsCarritoIcon || 'ri-shopping-cart-2-line text-white dark:text-temu text-[13px] pb-px pl-px sm:text-[19.5px] sm:pl-[0.5px] sm:pb-[1.5px]'}"></i>
            </button>
            <div class="${item.clsInfo || 'absolute bg-stone-950 dark:bg-temu bottom-0 cardInfo w-[172px] h-10 sm:w-[234px] sm:h-15'}"></div>
            <div class="${item.clsInfoInner || 'w-[172px] h-10 absolute bottom-0 bg-puro dark:bg-stone-900 dark:text-temu cardInfoInner flex flex-col justify-center border border-stone-950 dark:border-temu sm:w-[234px] sm:h-15'}">
                <p class="${item.clsTitle || 'font-Inter text-xs font-extrabold pl-3 w-34 cursor-default sm:w-51 sm:text-base sm:leading-none sm:pl-4.5 sm:pt-0.25'}">${tituloFav}</p>
                <p class="${item.clsSubtitle || 'font-Inter text-xs font-extrabold pl-3 w-34 cursor-default sm:w-51 sm:text-base sm:mt-0.5 sm:pl-4.5'}">${textoVariante}</p>
            </div>
            ${item.clsBtnDots ? `<button class="${item.clsBtnDots}">${item.dotsHTML || ''}</button>` : ''}
        </article>`;
    
        grid.insertAdjacentHTML('beforeend', cardHTML);
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
    // Footer y copyright
    const footer = document.querySelector('footer');
    const footerCopy = document.querySelector('footer + p');

    if (vista === 'carrito') {
        heros.forEach(hero => { hero.classList.add('hidden'); hero.style.display = 'none'; });
        if (footer) footer.classList.add('hidden');
        if (footerCopy) footerCopy.classList.add('hidden');

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
        if (footer) footer.classList.add('hidden');
        if (footerCopy) footerCopy.classList.add('hidden');

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
        if (footer) footer.classList.remove('hidden');
        if (footerCopy) footerCopy.classList.remove('hidden');

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
            if (detalleFooterObserver) {
                detalleFooterObserver.disconnect();
                detalleFooterObserver = null;
            }
            const btnFlotante = document.getElementById('detalle-btn-flotante');
            const fondoFijo = document.getElementById('detalle-fondo-fijo');
            if (btnFlotante) {
                btnFlotante.style.transform = '';
                btnFlotante.style.opacity = '';
                btnFlotante.style.pointerEvents = '';
            }
            if (fondoFijo) {
                fondoFijo.style.transform = '';
                fondoFijo.style.opacity = '';
            }

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
        if (activeKey === 'inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
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
        cerrarPanelCategorias();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const clickEnBtnCategorias = btnCategoriasMobile?.contains(e.target) 
        || btnCategoriasDesktop?.contains(e.target) 
        || btnCatMobileNaranja?.contains(e.target);
    
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
    const clickEnBtnUsuario = btnUsuarioMobile?.contains(e.target) 
        || btnUsuarioDesktop?.contains(e.target) 
        || btnUsuarioNaranja?.contains(e.target);
    
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
        metaTheme.setAttribute('content', modo === 'dark' ? '#0c0a09' : '#ffffff');
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
disponible:'disponible(s)',
envioGratisTren: 'Envío gratis en las Estaciones del Tren',
envioDomicilio: 'S/10 a domicilio o Provincia',
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
disponible:'available',
envioGratisTren: 'Free delivery to train stations',
envioDomicilio: 'S/10 Home delivery or Province',
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
disponible:'hayka',
envioGratisTren: 'Trenpa kasqanman mana qullqillapaq apachiy',
envioDomicilio: 'S/10 Wasiman apachiy utaq Provincia',
    }
};

let idiomaActual = 'es';

// Helper para obtener traducciones del idioma actual (siempre fresco)
function _t() {
    return traducciones[idiomaActual] || traducciones.es;
}

function recargarGridIdioma() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.querySelectorAll('article[data-id]').forEach(card => {
        const id = parseInt(card.dataset.id);
        const prod = getProducto(id);
        if (!prod) return;
        
        const infoInner = card.querySelector('.cardInfoInner');
        if (!infoInner) return;
        
        const ps = infoInner.querySelectorAll('p');
        const tituloTraducido = tp(prod, 'titulo');
        const subtituloTraducido = tp(prod, 'subtitulo');
        
        if (ps[0]) ps[0].textContent = tituloTraducido;
        if (ps[1]) ps[1].textContent = subtituloTraducido;
        
        // Actualizar dataset para que la búsqueda funcione con el nuevo idioma
        card.dataset.titulo = tituloTraducido;
        card.dataset.subtitulo = subtituloTraducido;
    });
    
    // 🔥 ESTO FALTABA: resincronizar corazones tras regenerar textos
    sincronizarCorazones();
}

function aplicarIdioma(lang) {
    idiomaActual = lang;
    const t = traducciones[lang];
    if (!t) return;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const clave = el.getAttribute('data-i18n');
        if (t[clave]) el.textContent = t[clave];
    });

    const inputBuscar = document.getElementById('buscador');
    if (inputBuscar && t.buscarPlaceholder) {
        inputBuscar.placeholder = t.buscarPlaceholder;
    }

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

    // ═══ Carrito (siempre refrescar) ═══
    renderizarCarrito();
    
    // ═══ Grid de productos (solo si está visible) ═══
    const grid = document.getElementById('product-grid');
    if (grid && !grid.classList.contains('hidden')) {
        recargarGridIdioma();
    }
    
    // ═══ Favoritos (solo si está visible) ═══
    const favoritosSection = document.getElementById('favoritos-section');
    if (favoritosSection && !favoritosSection.classList.contains('hidden')) {
        renderizarFavoritos();
    }
    
    // ═══ Detalle de producto (solo si está abierto) ═══
    const detalleSection = document.getElementById('producto-detalle');
    if (detalleSection && !detalleSection.classList.contains('hidden')) {
        recargarTextosDetalle();
    }

    // 🔥 RESINCRONIZAR TODO DESPUÉS DE CUALQUIER RECARGA
    sincronizarCorazones();
    
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

    const footer = document.querySelector('footer');
    const footerCopy = document.querySelector('footer + p');
    if (footer) footer.classList.remove('hidden');
    if (footerCopy) footerCopy.classList.remove('hidden');
    const fondoFijo = document.getElementById('detalle-fondo-fijo');
    if (fondoFijo) {
        fondoFijo.style.transform = '';
        fondoFijo.style.opacity = '';
    }

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
    document.getElementById('detalle-titulo').textContent = tp(producto, 'titulo');
    document.getElementById('detalle-subtitulo').textContent = tp(producto, 'subtitulo');
    document.getElementById('detalle-marca').textContent = tp(producto, 'marca');
    document.getElementById('detalle-estilo-nombre').textContent = tp(producto, 'estilo');
    document.getElementById('detalle-disponible').textContent = (producto.disponible || 0) + ' ' + _t().disponible;
    document.getElementById('detalle-precio').textContent = (producto.precio || 0).toFixed(2);
    

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
    if (accDet) {
    const rawText = producto.detalles?.[idiomaActual] || producto.detalles?.es || '';
    accDet.innerHTML = rawText.replace(/\n/g, '<br>');
    }
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
    renderizarEstilos(producto);
    sincronizarFavoritoDetalle();
    renderizarCollage(producto, medias);
    renderizarRelacionados(producto.relacionados || []);
    initMarqueeEnvio();
    initDetalleFooterObserver();
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
    // container.addEventListener('wheel', onWheel, { passive: false });

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
    // container.removeEventListener('wheel', onWheel);
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
                slide.className = 'swiper-slide flex items-center justify-center overflow-hidden pb-15';
                slide.innerHTML = `
                    <div class="lightbox-img-wrapper relative flex items-center justify-center w-full h-full overflow-hidden">
                        <img src="${media.src}" class="max-w-[100vw] max-h-full object-contain lightbox-zoom-target transition-transform duration-75" alt="">
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
        spaceBetween: isPC ? 0 : 8,   // ← En celular 16px de separación, en PC 0
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
                            setLightboxPadding(false);
                        } else {
                            // Zoom IN → ocultar botones
                            lbScale = 2.5;
                            swiperLightbox.allowTouchMove = false;
                            setLightboxUIVisible(false); // ← AQUÍ
                            setLightboxPadding(true);
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
                        setLightboxPadding(true);
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
                            setLightboxPadding(false);
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

    // ═══ CAPTURAR BOTÓN ATRÁS DEL NAVEGADOR/CELULAR ═══
    lightboxStatePushed = true;
    history.pushState({ lightbox: true }, '', location.href);
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

function setLightboxPadding(zoomed) {
    if (window.innerWidth >= 1024) return;
    document.querySelectorAll('.swiper-lightbox .swiper-slide').forEach(slide => {
        if (zoomed) {
            slide.classList.remove('pb-15');
        } else {
            slide.classList.add('pb-15');
        }
    });
}

function cerrarLightbox() {
    setLightboxUIVisible(true);
    setLightboxPadding(true);
    const btnCarritoLb = document.getElementById('lightbox-btn-carrito');
    if (btnCarritoLb) btnCarritoLb.classList.add('hidden');

    const lightbox = document.getElementById('lightbox-detalle');
    const contadorLb = document.getElementById('lightbox-contador');
    if (!lightbox || lightbox.classList.contains('hidden')) return;
    
    // Cerrar visualmente primero
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
    
    // Limpiar la entrada del historial si la creamos nosotros
    if (lightboxStatePushed) {
        lightboxStatePushed = false;
        history.back();
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

    // ═══ Título normal ═══
    const elTitulo = document.getElementById('detalle-titulo');
    if (elTitulo) elTitulo.textContent = tp(producto, 'titulo');

    // ═══ Subtítulo ═══
    const elSubtitulo = document.getElementById('detalle-subtitulo');
    if (elSubtitulo) elSubtitulo.textContent = tp(producto, 'subtitulo');

    // ═══ Marca ═══
    const elMarca = document.getElementById('detalle-marca');
    if (elMarca) elMarca.textContent = tp(producto, 'marca');

    // ═══ Estilo base (nombre del producto) ═══
    const elEstilo = document.getElementById('detalle-estilo-nombre');
    if (elEstilo) elEstilo.textContent = tp(producto, 'estilo');

    // ═══ Disponible ═══
    const elDisp = document.getElementById('detalle-disponible');
    if (elDisp) elDisp.textContent = (producto.disponible || 0) + ' ' + _t().disponible;

    // ═══ Título largo expandible ═══
    const tituloLargo = document.getElementById('detalle-titulo-largo');
    if (tituloLargo) {
        tituloLargo.textContent = producto.tituloLargo?.[idiomaActual] || producto.tituloLargo?.es || '';
        initTituloLargo();
    }

    // ═══ Accordions ═══
    const accEnv = document.getElementById('accordion-envio');
    const accGar = document.getElementById('accordion-garantia');
    const accDet = document.getElementById('accordion-detalles');
    const accDon = document.getElementById('accordion-donacion');

    if (accEnv) accEnv.textContent = producto.envio?.[idiomaActual] || producto.envio?.es || '';
    if (accGar) accGar.textContent = producto.garantia?.[idiomaActual] || producto.garantia?.es || '';
    if (accDet) {
    const rawText = producto.detalles?.[idiomaActual] || producto.detalles?.es || '';
    // Convertir \n a <br> para respetar saltos de línea
    const htmlText = rawText.replace(/\n/g, '<br>');
    accDet.innerHTML = htmlText;
    };
    if (accDon) accDon.textContent = producto.donacion?.[idiomaActual] || producto.donacion?.es || '';

    // ═══ RE-RENDERIZAR MINIATURAS DE ESTILO CON TRADUCCIÓN FRESCA ═══
    const keyActiva = estiloSeleccionado?.key;
    renderizarEstilos(producto);

    // Restaurar selección visual y actualizar texto del estilo elegido
    if (keyActiva !== undefined && producto.estilos?.[keyActiva]) {
        const container = document.getElementById('detalle-estilos-container');
        if (container) {
            container.querySelectorAll('.estilo-btn').forEach((btn, idx) => {
                if (parseInt(btn.dataset.key) === keyActiva) {
                    btn.classList.add('activo');
                } else {
                    btn.classList.remove('activo');
                }
            });
        }

        const est = producto.estilos[keyActiva];
        const nombreTraducido = tEstilo(est);
        const colorTraducido = tEstilo(est, 'color') || nombreTraducido;

        estiloSeleccionado = {
            nombre: nombreTraducido,
            color: colorTraducido,
            imagen: est.imagen,
            key: keyActiva
        };

        if (elEstilo) elEstilo.textContent = nombreTraducido;
    }
    // ═══ RE-SINCRONIZAR CORAZÓN DEL DETALLE ═══
    sincronizarFavoritoDetalle();
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
        const nombreBase = tp(producto, 'estilo') || 'Estándar';
        estilos.push({ 
            nombre: producto.estilo || 'Estándar', 
            imagen: producto.imagenes?.[0] || '', 
            color: producto.estilo || 'Estándar'
        });
    }

    estilos.forEach((est, idx) => {
        const btn = document.createElement('div');
        const nombreTraducido = tEstilo(est);
        const colorTraducido = tEstilo(est, 'color') || nombreTraducido;
        
        btn.className = 'estilo-btn' + (idx === 0 ? ' activo' : '');
        btn.dataset.nombre = nombreTraducido;
        btn.dataset.color = colorTraducido;
        btn.dataset.imagen = est.imagen;
        btn.dataset.key = idx;   // ← ÍNDICE INVARIANTE

        const isVideo = est.imagen && est.imagen.match(/\.(mp4|webm|ogg|mov)$/i);
        if (isVideo) {
            btn.innerHTML = `<video src="${est.imagen}" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>`;
        } else {
            btn.innerHTML = `<img src="${est.imagen}" alt="${nombreTraducido}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`;
        }
        if (colorTraducido && colorTraducido !== nombreTraducido) {
            btn.innerHTML += `<div class="estilo-label">${colorTraducido}</div>`;
        }

        btn.addEventListener('click', () => {
            container.querySelectorAll('.estilo-btn').forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            estiloSeleccionado = { 
                nombre: nombreTraducido, 
                color: colorTraducido, 
                imagen: est.imagen,
                key: idx
            };
            document.getElementById('detalle-estilo-nombre').textContent = nombreTraducido;
            const imgPrincipal = document.getElementById('img-principal');
            if (imgPrincipal) imgPrincipal.src = est.imagen;
            sincronizarFavoritoDetalle();
            cantidadDetalle = 1;
            actualizarCantidadDisplay();
            actualizarPrecioDetalle();
        });

        container.appendChild(btn);
    });

    if (estilos.length && !estiloSeleccionado) {
        const firstName = tEstilo(estilos[0]);
        const firstColor = tEstilo(estilos[0], 'color') || firstName;
        estiloSeleccionado = { 
            nombre: firstName, 
            color: firstColor, 
            imagen: estilos[0].imagen,
            key: 0
        };
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

    // CORREGIDO: usar tp() porque producto.estilo es {es,en,qu} directo
    const nombreEstiloBase = tp(producto, 'estilo');
    const esEstiloBase = estiloSeleccionado && estiloSeleccionado.nombre === nombreEstiloBase;

    const itemBase = {
        id: producto.id,
        titulo: tp(producto, 'titulo'),
        subtitulo: tp(producto, 'subtitulo'),
        precio: producto.precio,
        imagen: estiloSeleccionado?.imagen || producto.imagenes?.[0] || '',
        variante: esEstiloBase ? null : {
            tipo: label,
            valor: estiloSeleccionado?.color || estiloSeleccionado?.nombre || 'Estándar',
            key: estiloSeleccionado?.key
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
    const nombreEstiloBase = tp(producto, 'estilo');
    
    // Si el producto no tiene estilos definidos, SIEMPRE es base
    const tieneEstilos = producto?.estilos?.length > 0;
    const esEstiloBase = !tieneEstilos || (estiloSeleccionado && estiloSeleccionado.nombre === nombreEstiloBase);
    
    let esFav = false;
    const pid = productoActualId;
    
    if (esEstiloBase) {
        // Buscar: favorito base puro (sin variante) 
        // O variante con key "0" (por si el estándar se guardó como variante en algún momento)
        esFav = favoritos.some(f => {
            if (parseInt(f.id, 10) !== pid) return false;
            if (!f.variante) return true;
            const fKey = f.variante.key != null ? String(f.variante.key) : null;
            return fKey === '0';
        });
    } else {
        const selKey = estiloSeleccionado?.key != null ? String(estiloSeleccionado.key) : null;
        esFav = favoritos.some(f => {
            if (parseInt(f.id, 10) !== pid) return false;
            if (!f.variante) return false;
            const fKey = f.variante.key != null ? String(f.variante.key) : null;
            if (selKey !== null && fKey !== null) return selKey === fKey;
            const selVal = (estiloSeleccionado?.color || estiloSeleccionado?.nombre || '').toString().trim().toLowerCase();
            const favVal = (f.variante.valor || '').toString().trim().toLowerCase();
            return selVal === favVal;
        });
    }
    
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
    
    // CORREGIDO
    const nombreEstiloBase = tp(producto, 'estilo');
    const esEstiloBase = estiloSeleccionado && estiloSeleccionado.nombre === nombreEstiloBase;
    
    const productoFav = {
        id: producto.id,
        titulo: tp(producto, 'titulo'),
        subtitulo: tp(producto, 'subtitulo'),
        precio: producto.precio,
        imagen: estiloSeleccionado?.imagen || producto.imagenes?.[0] || '',
    };
    
    if (esEstiloBase) {
        productoFav.esBase = true;
    } else if (estiloSeleccionado) {
        productoFav.imagenVariante = estiloSeleccionado.imagen;
        productoFav.variante = {
            tipo: label,
            valor: estiloSeleccionado.color || estiloSeleccionado.nombre,
            key: estiloSeleccionado.key
        };
    }
    
    toggleFavorito(productoFav);
    sincronizarFavoritoDetalle();
});

// ─── VOLVER ───
function cerrarDetalleProducto(updateHistory = true) {
    if (detalleFooterObserver) {
        detalleFooterObserver.disconnect();
        detalleFooterObserver = null;
    }
    const btnFlotante = document.getElementById('detalle-btn-flotante');
    const fondoFijo = document.getElementById('detalle-fondo-fijo');
    if (btnFlotante) {
        btnFlotante.style.transform = '';
        btnFlotante.style.opacity = '';
        btnFlotante.style.pointerEvents = '';
    }
    if (fondoFijo) {
        fondoFijo.style.transform = '';
        fondoFijo.style.opacity = '';
    }

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
            <p class="font-Inter text-xs font-semibold text-stone-950 dark:text-white truncate leading-tight mt-1">${tp(p, 'titulo')}</p>
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

let detalleFooterObserver = null;

function initDetalleFooterObserver() {
    const footer = document.querySelector('footer');
    const btnFlotante = document.getElementById('detalle-btn-flotante');
    const fondoFijo = document.getElementById('detalle-fondo-fijo');
    if (!footer || !btnFlotante) return;
    
    if (detalleFooterObserver) {
        detalleFooterObserver.disconnect();
        detalleFooterObserver = null;
    }
    
    detalleFooterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                btnFlotante.style.transform = 'translateY(200%)';
                btnFlotante.style.opacity = '0';
                btnFlotante.style.pointerEvents = 'none';
                if (fondoFijo) {
                    fondoFijo.style.transform = 'translateY(100%)';
                    fondoFijo.style.opacity = '0';
                }
            } else {
                btnFlotante.style.transform = '';
                btnFlotante.style.opacity = '';
                btnFlotante.style.pointerEvents = '';
                if (fondoFijo) {
                    fondoFijo.style.transform = '';
                    fondoFijo.style.opacity = '';
                }
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
    
    detalleFooterObserver.observe(footer);
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
    const lightbox = document.getElementById('lightbox-detalle');
    const estaAbiertoLb = lightbox && !lightbox.classList.contains('hidden');
    
    // ═══ PRIORIDAD MÁXIMA: Cerrar lightbox con botón Atrás ═══
    if (estaAbiertoLb) {
        lightbox.classList.add('hidden');
        document.getElementById('lightbox-contador')?.classList.add('hidden');
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
        lightboxStatePushed = false;
        return; // ← Detener aquí, no tocar el detalle
    }
    
    const detalle = document.getElementById('producto-detalle');
    const estaAbiertoDetalle = detalle && !detalle.classList.contains('hidden');
    
    if (e.state) {
        // 🔥 PRIORIDAD 1: Restaurar búsqueda
        if (e.state.vista === 'busqueda') {
            if (estaAbiertoDetalle) {
                cerrarDetalleProducto(false);
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
            if (btnCategoriaBusqueda) eliminarCategoriaBusqueda(false);
            
            if (e.state.vista === 'carrito') {
                activateNav('carrito', true);
            } else if (e.state.vista === 'favoritos') {
                activateNav('favoritos', true);
            } else {
                categoriaActual = e.state.categoria || 'todos';
                showingAll = e.state.showingAll || false;
                activateNav('inicio', true, false);
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

    let nombreMostrar = '';
    if (estiloEncontrado) {
        nombreMostrar = tEstilo(estiloEncontrado, 'color') || tEstilo(estiloEncontrado);
    } else if (estiloSeleccionado) {
        nombreMostrar = estiloSeleccionado.color || estiloSeleccionado.nombre;
    } else {
        // BASE: color del estilo base desde DB
        const nombreBase = tp(producto, 'estilo');
        const estiloBase = producto.estilos?.find(est => tEstilo(est) === nombreBase) || producto.estilos?.[0];
        nombreMostrar = estiloBase ? (tEstilo(estiloBase, 'color') || tEstilo(estiloBase)) : 'Estándar';
    }
    
    const precioTotal = (producto.precio * cantidadDetalle).toFixed(2);
    const agregarTexto = _t().agregarCarrito || 'Agregar';

    btnText.textContent = `${agregarTexto} · ${nombreMostrar} · s/ ${precioTotal}`;
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

    let estiloParaCarrito = estiloSeleccionado;
    if (mediaActual && mediaActual.tipo === 'imagen') {
        const estiloCoincide = getEstiloPorImagen(producto, mediaActual.src);
        if (estiloCoincide) {
            const idxReal = producto.estilos?.findIndex(est => 
                est.imagen === estiloCoincide.imagen || 
                tEstilo(est) === tEstilo(estiloCoincide)
            ) ?? -1;
            
            estiloParaCarrito = {
                nombre: tEstilo(estiloCoincide),
                color: tEstilo(estiloCoincide, 'color') || tEstilo(estiloCoincide),
                imagen: estiloCoincide.imagen,
                key: idxReal >= 0 ? idxReal : estiloSeleccionado?.key
            };
        }
    }

    if (!estiloParaCarrito && producto.estilos?.length) {
        estiloParaCarrito = {
            nombre: tEstilo(producto.estilos[0]),
            color: tEstilo(producto.estilos[0], 'color') || tEstilo(producto.estilos[0]),
            imagen: producto.estilos[0].imagen,
            key: 0
        };
    }

    // CORREGIDO
    const nombreEstiloBase = tp(producto, 'estilo');
    const esEstiloBase = estiloParaCarrito && estiloParaCarrito.nombre === nombreEstiloBase;

    const itemBase = {
        id: producto.id,
        titulo: tp(producto, 'titulo'),
        subtitulo: tp(producto, 'subtitulo'),
        precio: producto.precio,
        imagen: estiloParaCarrito?.imagen || producto.imagenes?.[0] || '',
        variante: esEstiloBase ? null : {
            tipo: producto.tipoVariante === 'color' ? 'Color' : (producto.tipoVariante === 'talla' ? 'Talla' : 'Estilo'),
            valor: estiloParaCarrito?.color || estiloParaCarrito?.nombre || 'Estándar',
            key: estiloParaCarrito?.key
        }
    };

    for (let i = 0; i < cantidadDetalle; i++) {
        agregarAlCarrito(itemBase);
    }

    animarFlyToCart(e.currentTarget, itemBase.imagen);

    const btnText = document.getElementById('lightbox-add-cart-text');
    if (btnText) {
        const original = btnText.textContent;
        btnText.textContent = '✓';
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
///////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////
// ======================================================
// BOTÓN VOLVER ARRIBA — V3 SIN CSS CUSTOM
// ======================================================
(function initVolverArriba() {
    const btn = document.getElementById('btn-volver-arriba');
    if (!btn) return;

    const CLASE_MOSTRAR = ['translate-y-0', 'opacity-100', 'pointer-events-auto'];
    const CLASE_OCULTAR = ['translate-y-24', 'opacity-0', 'pointer-events-none'];

    function mostrarBoton() {
        btn.classList.remove(...CLASE_OCULTAR);
        btn.classList.add(...CLASE_MOSTRAR);
    }

    function ocultarBoton() {
        btn.classList.remove(...CLASE_MOSTRAR);
        btn.classList.add(...CLASE_OCULTAR);
    }

    function ajustarPosicion() {
        const detalle = document.getElementById('producto-detalle');
        const carrito = document.getElementById('carrito-section');
        const enDetalle = detalle && !detalle.classList.contains('hidden');
        const enCarrito = carrito && !carrito.classList.contains('hidden');

        // Limpiar posiciones
        btn.classList.remove('bottom-20', 'bottom-44');

        if (window.innerWidth >= 1024) {
            btn.classList.add('lg:bottom-8');
            return;
        }

        if (enDetalle || enCarrito) {
            btn.classList.add('bottom-37'); // 11rem = 176px, evita botones fijos
        } else {
            btn.classList.add('bottom-20'); // 5rem = 80px, encima de bottom nav
        }
    }

    function checkScroll() {
        const lightbox = document.getElementById('lightbox-detalle');
        const lightboxAbierto = lightbox && !lightbox.classList.contains('hidden');

        // Si lightbox está abierto, SIEMPRE ocultar
        if (lightboxAbierto) {
            ocultarBoton();
            return;
        }

        if (window.scrollY > window.innerHeight * 0.75) {
            mostrarBoton();
        } else {
            ocultarBoton();
        }
    }

    // Click: subir suave
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', () => { ajustarPosicion(); checkScroll(); });

    // Detectar cambio de vista
    const secciones = ['producto-detalle', 'carrito-section', 'favoritos-section'];
    const observer = new MutationObserver(() => {
        ajustarPosicion();
        setTimeout(checkScroll, 50);
    });
    secciones.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el, { attributes: true, attributeFilter: ['class'] });
    });

    ajustarPosicion();
    checkScroll();
})();