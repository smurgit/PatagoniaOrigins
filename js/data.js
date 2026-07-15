/* ============================================================
   Patagonia Origins Co. — Datos de ejemplo (MOCKUP / MVP)
   No hay backend real: catálogo, stock y precios son de muestra.
   La arquitectura soporta DOS segmentos (crucero / esquí) desde
   el diseño de datos, no como agregado posterior.
   ============================================================ */

/* --- Categorías (alto nivel, un solo vendedor: Patagonia Origins Co.) --- */
const CATEGORIES = [
  { id: "tejidos",     name: { es: "Indumentaria, tejidos y lanas", en: "Apparel, textiles & wool" } },
  { id: "gastronomia", name: { es: "Sabores y conservas",    en: "Flavors & Preserves" } },
  { id: "ceramica",    name: { es: "Cerámica y objeto",      en: "Ceramics & Objects" } },
  { id: "cuero",       name: { es: "Cuero y marroquinería",  en: "Leather & Goods" } },
];

/* --- Colecciones curadas (criterio propio, NO "ofertas") --- */
const COLLECTIONS = [
  {
    id: "temporada",
    title:    { es: "Selección de la temporada",       en: "Season's Selection" },
    subtitle: { es: "Lo mejor de lo que llegó este mes a nuestro sitio.",
                en: "The best of what arrived at our shop this month." },
  },
  {
    id: "historias",
    title:    { es: "Historias detrás del objeto",      en: "Stories Behind the Object" },
    subtitle: { es: "Piezas con un origen que vale la pena conocer.",
                en: "Pieces with an origin worth knowing." },
  },
  {
    id: "regalo",
    title:    { es: "Ideal para regalo",                en: "Perfect to Gift" },
    subtitle: { es: "Curado para llevar un pedazo de la Patagonia a casa.",
                en: "Curated to take a piece of Patagonia home." },
  },
];

/* --- Paletas de color para los placeholders de fotografía --- */
/* (cada producto define un par de tonos coherentes con su historia) */

/* --- Catálogo de muestra --- */
/* segment: "crucero" | "esqui" | "both"  -> soporta ambos públicos       */
/* priceUSD principal (segmento crucero, tarjeta internacional);          */
/* priceARS de referencia (segmento esquí, medios locales).               */
const PRODUCTS = [
  {
    id: "p01",
    slug: "manta-lana-guanaco",
    image: "img/p01.jpg",
    category: "tejidos",
    segment: "both",
    name:   { es: "Manta de lana de oveja",          en: "Sheep Wool Throw" },
    tagline:{ es: "Tejida a telar en la estepa fueguina",
              en: "Loom-woven in the Fuegian steppe" },
    priceUSD: 240, priceARS: 312000,
    stock: 4,
    featured: true, isNew: false,
    collections: ["temporada", "historias", "regalo"],
    swatch: ["#8C6A4A", "#C9B79C"],
    variants: [
      { id: "nat", label: { es: "Natural",   en: "Natural" },   priceDelta: 0,  stock: 3 },
      { id: "gra", label: { es: "Grafito",   en: "Graphite" },  priceDelta: 20, stock: 1 },
    ],
    maker: { es: "Elaborado por el taller textil de Estela R., Tolhuin.",
             en: "Made by Estela R.'s textile workshop, Tolhuin." },
    story: {
      es: "Elegimos la pura lana de oveja fueguina por su textura honesta y su abrigo generoso, capaz de aislar del frío de forma natural. Esta fibra noble cobra vida en un telar de pie; un oficio entrañable que en Tierra del Fuego pasa con orgullo de madres a hijas. Nos conmueve esta manta no solo por su liviandad, sino por el carácter único e irrepetible de cada una de sus tramas, pensadas para acompañarte toda la vida.",
      en: "We chose pure Fuegian sheep wool for its honest texture and generous warmth, able to insulate from the cold naturally. This noble fiber comes to life on a standing loom — a beloved craft that in Tierra del Fuego passes proudly from mothers to daughters. This throw moves us not only for its lightness, but for the unique, unrepeatable character of each of its weaves, made to be with you for a lifetime.",
    },
    packaging: {
      es: "Viaja protegida dentro de una bolsa de tela de lienzo natural, hecha a mano y reutilizable. Llega cuidadosamente doblada y atada con un lazo de pura lana de oveja hilada en la isla, un detalle simple y honesto de nuestro origen.",
      en: "It travels protected inside a handmade, reusable natural canvas bag. It arrives carefully folded and tied with a ribbon of pure sheep wool spun on the island — a simple, honest detail of our origin.",
    },
    reviews: [
      { author: "Margaret H.", rating: 5, verified: true,
        text: { es: "Increíblemente suave y liviana. Llegó impecable al barco.",
                en: "Incredibly soft and light. Arrived at the ship in perfect condition." } },
      { author: "Thomas B.", rating: 5, verified: true,
        text: { es: "El mejor recuerdo de nuestro viaje a la Antártida.",
                en: "The best keepsake from our Antarctic trip." } },
    ],
    related: ["p04", "p02", "p07"],
  },
  {
    id: "p02",
    slug: "gorro-lana-merino",
    image: "img/p02.jpg",
    category: "tejidos",
    segment: "both",
    name:   { es: "Gorro de lana merino",            en: "Merino Wool Beanie" },
    tagline:{ es: "Tejido a mano, punto cerrado",     en: "Hand-knit, tight stitch" },
    priceUSD: 68, priceARS: 88400,
    stock: 12,
    featured: false, isNew: true,
    collections: ["temporada", "regalo"],
    swatch: ["#3B5A54", "#9DB8AE"],
    variants: [
      { id: "verde",  label: { es: "Verde patagónico", en: "Patagonian Green" }, priceDelta: 0, stock: 6 },
      { id: "crudo",  label: { es: "Crudo",            en: "Ecru" },             priceDelta: 0, stock: 4 },
      { id: "glaciar",label: { es: "Azul glaciar",     en: "Glacier Blue" },     priceDelta: 0, stock: 2 },
    ],
    maker: { es: "Elaborado por Cooperativa Lanas del Sur, Ushuaia.",
             en: "Made by Cooperativa Lanas del Sur, Ushuaia." },
    story: {
      es: "Esta pieza nace de la lana merino de rebaños patagónicos, hilada y teñida con procesos de bajo impacto. Cada gorro toma cerca de cuatro horas de paciente tejido a dos agujas por las artesanas de la cooperativa. Lo elegimos por ser un abrigo real y noble frente al viento de Ushuaia, lejos de ser un simple souvenir decorativo.",
      en: "This piece is born from merino wool of Patagonian flocks, spun and dyed with low-impact processes. Each beanie takes about four hours of patient two-needle knitting by the cooperative's artisans. We chose it as real, noble protection against the Ushuaia wind — far from a mere decorative souvenir.",
    },
    packaging: {
      es: "Se entrega dentro de una bolsa de algodón natural y reutilizable, con nuestro sello de origen impreso a mano.",
      en: "Delivered in a reusable natural cotton pouch, with our origin seal hand-printed.",
    },
    reviews: [
      { author: "Anke M.", rating: 5, verified: true,
        text: { es: "Calentísimo y el color azul glaciar es hermoso.",
                en: "Very warm and the glacier blue color is beautiful." } },
    ],
    related: ["p01", "p04", "p03"],
  },
  {
    id: "p03",
    slug: "chocolate-calafate",
    image: "img/p03.jpg",
    category: "gastronomia",
    segment: "crucero",
    name:   { es: "Chocolate artesanal con calafate", en: "Artisan Calafate Chocolate" },
    tagline:{ es: "70% cacao y fruto patagónico",     en: "70% cacao with Patagonian berry" },
    priceUSD: 22, priceARS: 28600,
    stock: 30,
    featured: true, isNew: false,
    collections: ["temporada", "regalo"],
    swatch: ["#4A3B55", "#7E6A8C"],
    variants: null,
    maker: { es: "Elaborado por la chocolatería de Marcelo D., Ushuaia.",
             en: "Made by Marcelo D.'s chocolate house, Ushuaia." },
    story: {
      es: "El calafate es el fruto emblema de la Patagonia: dice la leyenda que quien lo prueba, vuelve. Este chocolate combina cacao con pulpa de calafate cosechado a mano.",
      en: "The calafate is Patagonia's emblematic berry: legend says whoever tastes it returns. This chocolate blends cacao with hand-harvested calafate pulp.",
    },
    packaging: {
      es: "Barra envuelta en papel manteca y estuche de cartón kraft con ilustración botánica del calafate.",
      en: "Bar wrapped in parchment inside a kraft board sleeve with a botanical calafate illustration.",
    },
    reviews: [
      { author: "Julia P.", rating: 5, verified: true,
        text: { es: "Intenso y nada empalagoso. Compré tres más antes de zarpar.",
                en: "Intense and not too sweet. Bought three more before sailing." } },
    ],
    related: ["p05", "p06", "p02"],
  },
  {
    id: "p04",
    slug: "bufanda-tejida-mano",
    image: "img/p04.jpg",
    category: "tejidos",
    segment: "both",
    name:   { es: "Ruana tejida a mano",             en: "Hand-Woven Ruana" },
    tagline:{ es: "Lana orgánica",                    en: "Organic wool" },
    priceUSD: 95, priceARS: 123500,
    stock: 0,
    featured: false, isNew: false,
    collections: ["historias"],
    swatch: ["#6E5A3E", "#B79A6E"],
    variants: null,
    maker: { es: "Elaborado por Ona Land, tercera generación de productores rurales de Río Grande.",
             en: "Made by Ona Land, third-generation rural producers from Río Grande." },
    story: {
      es: "Una manta que fusiona la pureza del crudo natural con un detalle encantador de franjas teñidas artesanalmente en color marrón y vicuña. Cada pieza es un reflejo del arte y la tradición argentina, creada para quienes valoran la autenticidad y buscan darle un toque único y cálido a su hogar.",
      en: "A wrap that blends the purity of natural ecru with a charming detail of stripes hand-dyed in brown and vicuña tones. Each piece reflects Argentine art and tradition, created for those who value authenticity and want to bring a unique, warm touch to their home.",
    },
    packaging: {
      es: "Plegada con papel de seda y faja de cartón con la historia de la artesana impresa.",
      en: "Folded with tissue paper and a board band printed with the artisan's story.",
    },
    reviews: [],
    related: ["p01", "p02", "p07"],
  },
  {
    id: "p05",
    slug: "conserva-frutos-rojos",
    image: "img/p05.jpg",
    category: "gastronomia",
    segment: "crucero",
    name:   { es: "Conserva de frutos del bosque", en: "Forest Berry Preserve" },
    tagline:{ es: "Cosecha del bosque andino-patagónico", en: "Andean-Patagonian forest harvest" },
    priceUSD: 18, priceARS: 23400,
    stock: 24,
    featured: false, isNew: true,
    collections: ["temporada", "regalo"],
    swatch: ["#7A3B3B", "#B76A6A"],
    variants: null,
    maker: { es: "Elaborado por la finca familiar de los Quinchahual, Lago Escondido.",
             en: "Made by the Quinchahual family farm, Lago Escondido." },
    story: {
      es: "Una selección de frambuesa, frutilla y calafate, elaborada de forma artesanal y sin aditivos. Un dulce simple y honesto que concentra la esencia de los veranos fueguinos.",
      en: "A selection of raspberry, strawberry and calafate, made by hand and without additives. A simple, honest preserve that captures the essence of Fuegian summers.",
    },
    packaging: {
      es: "En frasco de vidrio sellado, con etiqueta artesanal y la mención de la pequeña finca donde nació el dulce.",
      en: "In a sealed glass jar, with a handmade label naming the small farm where the preserve was born.",
    },
    reviews: [
      { author: "Richard T.", rating: 4, verified: true,
        text: { es: "Delicioso. Ojalá vendieran el frasco grande.",
                en: "Delicious. Wish they sold the large jar." } },
    ],
    related: ["p03", "p06", "p08"],
  },
  {
    id: "p06",
    slug: "taza-ceramica-esmaltada",
    image: "img/p06.jpg",
    category: "ceramica",
    segment: "both",
    name:   { es: "Taza de cerámica esmaltada",       en: "Glazed Ceramic Mug" },
    tagline:{ es: "Torneada y esmaltada a mano",      en: "Hand-thrown and glazed" },
    priceUSD: 46, priceARS: 59800,
    stock: 9,
    featured: true, isNew: false,
    collections: ["historias", "regalo"],
    swatch: ["#3E5A66", "#7FA0AC"],
    variants: [
      { id: "glaciar", label: { es: "Esmalte glaciar", en: "Glacier Glaze" }, priceDelta: 0, stock: 5 },
      { id: "musgo",   label: { es: "Esmalte musgo",   en: "Moss Glaze" },    priceDelta: 0, stock: 4 },
    ],
    maker: { es: "Elaborada por A Punto, emprendimiento que fusiona el diseño y la cerámica en objetos de uso cotidiano.",
             en: "Made by A Punto, a studio that blends design and ceramics into objects for everyday use." },
    story: {
      es: "Cada taza se moldea a mano con arcilla de la región, inspirada en los tonos del hielo y el musgo de nuestros bosques. Al ser artesanal, no hay dos iguales. La elegimos para que te acompañe todas las mañanas con un recuerdo simple de tu viaje.",
      en: "Each mug is shaped by hand with regional clay, inspired by the tones of ice and the moss of our forests. Being handmade, no two are alike. We chose it to be with you every morning as a simple keepsake of your trip.",
    },
    packaging: {
      es: "Protegida en nido de viruta de madera reciclada dentro de caja rígida — sólida para el equipaje y cuidada al abrir.",
      en: "Nested in recycled wood shavings inside a rigid box — sturdy for luggage and refined to unbox.",
    },
    reviews: [
      { author: "Sofía G.", rating: 5, verified: true,
        text: { es: "El esmalte glaciar es una obra de arte. Llegó perfecta.",
                en: "The glacier glaze is a work of art. Arrived perfect." } },
    ],
    related: ["p07", "p01", "p03"],
  },
  {
    id: "p07",
    slug: "billetera-cuero-vegetal",
    image: "img/p07.jpg",
    category: "cuero",
    segment: "both",
    name:   { es: "Bandolera Alhelí",                 en: "Alhelí Crossbody Bag" },
    tagline:{ es: "Cuero de autor, silueta compacta", en: "Signature leather, compact silhouette" },
    priceUSD: 78, priceARS: 101400,
    stock: 7,
    featured: false, isNew: false,
    collections: ["regalo"],
    swatch: ["#6B4A2E", "#A9784E"],
    variants: [
      { id: "liso", label: { es: "Cuero liso",              en: "Smooth leather" }, priceDelta: 0, stock: 4 },
      { id: "pelo", label: { es: "Combinada · pelo natural", en: "Hair-on detail" }, priceDelta: 0, stock: 3 },
    ],
    maker: { es: "Elaborado por la marca familiar Rose Blanche, San Martín de los Andes.",
             en: "Made by the family brand Rose Blanche, San Martín de los Andes." },
    story: {
      es: "Un diseño esencial que celebra la nobleza de los materiales. La Bandolera Alhelí, realizada en cuero Victory, destaca por su silueta compacta y su versatilidad absoluta. Disponible en versiones de cuero liso o combinadas con detalles en pelo natural, es la pieza ideal para quienes buscan un accesorio de autor con carácter y funcionalidad.",
      en: "An essential design that celebrates the nobility of its materials. The Alhelí crossbody bag, crafted in Victory leather, stands out for its compact silhouette and absolute versatility. Available in smooth leather or combined with natural hair-on details, it's the ideal piece for those seeking a signature accessory with character and function.",
    },
    packaging: {
      es: "Viaja protegida dentro de una bolsa de lienzo de algodón natural, perfecta para cuidarla en tu placard. Llega acompañada de una tarjeta con consejos simples para nutrir el cuero, asegurando que su historia continúe con vos por muchísimos años.",
      en: "It travels protected inside a natural cotton canvas bag, perfect for keeping it safe in your wardrobe. It comes with a card of simple tips to nourish the leather, so its story continues with you for many years.",
    },
    reviews: [
      { author: "Peter K.", rating: 5, verified: true,
        text: { es: "Calidad excepcional. Se siente hecha para durar.",
                en: "Exceptional quality. Feels built to last." } },
    ],
    related: ["p06", "p01", "p02"],
  },
  {
    id: "p08",
    slug: "set-mate-esqui",
    image: "img/p08.jpg",
    category: "ceramica",
    segment: "esqui",
    name:   { es: "Set de mate patagónico",           en: "Patagonian Mate Set" },
    tagline:{ es: "Para las tardes de montaña",       en: "For mountain afternoons" },
    priceUSD: 58, priceARS: 75400,
    stock: 6,
    featured: false, isNew: true,
    collections: ["temporada", "regalo"],
    swatch: ["#4A4030", "#8A7A5A"],
    variants: null,
    maker: { es: "Elaborado por el colectivo de artesanos Tienda Siervo.",
             en: "Made by the artisan collective Tienda Siervo." },
    story: {
      es: "Este set nace de la mano de un grupo de artesanos apasionados por honrar la tradición y la cultura de nuestro país. Fabricado con materiales nobles que la naturaleza nos regala, cada elemento es moldeado con respeto y paciencia artesanal. Lo elegimos porque el ritual del mate merece ser celebrado con objetos únicos, pensados para transformar tu pausa diaria en un momento cálido, consciente y con identidad propia.",
      en: "This set comes from a group of artisans passionate about honoring the tradition and culture of our country. Made with the noble materials nature gives us, each element is shaped with respect and artisan patience. We chose it because the ritual of mate deserves to be celebrated with unique objects, made to turn your daily pause into a warm, mindful moment with an identity of its own.",
    },
    packaging: {
      es: "Caja de madera con divisiones internas y guía de cebado en dos idiomas.",
      en: "Wooden box with internal dividers and a two-language brewing guide.",
    },
    reviews: [],
    related: ["p06", "p03", "p05"],
  },
];

/* --- Helpers de acceso --- */
function getProduct(id)      { return PRODUCTS.find(p => p.id === id); }
function getBySlug(slug)     { return PRODUCTS.find(p => p.slug === slug); }
function getCategory(id)     { return CATEGORIES.find(c => c.id === id); }
function getCollection(id)   { return COLLECTIONS.find(c => c.id === id); }
