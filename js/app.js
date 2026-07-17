/* ============================================================
   Patagonia Origins Co. — Lógica compartida (MOCKUP)
   i18n ES/EN · carrito (localStorage) · header/footer · helpers
   ============================================================ */

/* ---------------- Google Analytics 4 ---------------- */
(function () {
  var GA_ID = "G-KGQ5048C6S";
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
})();

/* ---------------- Estado global ---------------- */
const STORE_LANG = "poco_lang";
const STORE_CART = "poco_cart";

const State = {
  get lang() { return localStorage.getItem(STORE_LANG) || "es"; },
  set lang(v) { localStorage.setItem(STORE_LANG, v); },
  get cart() {
    try { return JSON.parse(localStorage.getItem(STORE_CART)) || []; }
    catch { return []; }
  },
  set cart(v) { localStorage.setItem(STORE_CART, JSON.stringify(v)); },
};

/* ---------------- Diccionario de interfaz ---------------- */
const T = {
  /* Navegación / global */
  "nav.home":        { es: "Inicio",       en: "Home" },
  "nav.shop":        { es: "Catálogo",     en: "Shop" },
  "nav.about":       { es: "Nosotros",     en: "About" },
  "nav.cart":        { es: "Bolsa",        en: "Bag" },
  "brand.tagline":   { es: "Curaduría patagónica auténtica",
                       en: "Authentic Patagonian curation" },

  /* Disclaimer de sitio de prueba (todas las páginas) */
  "disc.tag":        { es: "Sitio de prueba", en: "Test site" },
  "disc.body":       { es: "Las imágenes de producto son de muestra. No ingreses datos reales: no hace falta información verdadera para probar la compra, no se procesan pagos ni se guardan tus datos personales.",
                       en: "Product images are placeholders. Don't enter real data: no real information is needed to try the checkout, no payments are processed and no personal data is stored." },
  "co.notice.title": { es: "Checkout de demostración", en: "Demo checkout" },
  "co.notice.body":  { es: "No ingreses datos reales ni información de tarjeta. No se guardan tus datos personales, no se procesa ningún pago y no se genera ninguna orden. Completá lo que quieras para probar el flujo.",
                       en: "Don't enter real or card details. No personal data is stored, no payment is processed and no order is created. Fill in anything you like to test the flow." },

  /* Footer */
  "footer.impact.title": { es: "Compra de triple impacto",
                           en: "Triple-impact purchase" },
  "footer.impact.body":  { es: "Cada compra fortalece directamente a productores y artesanos patagónicos.",
                           en: "Every purchase directly strengthens Patagonian producers and artisans." },
  "footer.explore":  { es: "Explorar",     en: "Explore" },
  "footer.help":     { es: "Ayuda",        en: "Help" },
  "footer.faq":      { es: "Preguntas frecuentes", en: "FAQ" },
  "footer.shipping": { es: "Entrega y retiro",     en: "Delivery & pickup" },
  "footer.returns":  { es: "Devoluciones",         en: "Returns" },
  "footer.rights":   { es: "Prototipo de demostración · Datos de ejemplo",
                       en: "Demonstration prototype · Sample data" },

  /* Confianza (transversal) */
  "trust.guarantee": { es: "Garantía de devolución 100%",
                       en: "100% money-back guarantee" },
  "trust.curated":   { es: "La curaduría de Patagonia Origins Co. es tu garantía de calidad",
                       en: "Patagonia Origins Co.'s curation is your quality guarantee" },
  "trust.reviews":   { es: "Reseñas verificadas", en: "Verified reviews" },

  /* Home */
  "home.hero.eyebrow": { es: "Ushuaia · Fin del mundo",
                         en: "Ushuaia · End of the world" },
  "home.hero.title":   { es: "Poco tiempo en tierra. El recuerdo correcto, ya elegido por vos.",
                         en: "Little time ashore. The right keepsake, already chosen for you." },
  "home.hero.body":    { es: "Seleccionamos productos patagónicos auténticos y los entregamos donde estés — durante tu estadía, antes de zarpar. Sin recorrer la ciudad, sin resignar tiempo de tu viaje.",
                         en: "We select authentic Patagonian products and deliver them wherever you are — during your stay, before you sail. No wandering the city, no giving up time from your trip." },
  "home.hero.cta":     { es: "Ver la selección", en: "See the selection" },
  "home.hero.cta2":    { es: "Nuestro propósito", en: "Our purpose" },
  "home.impact.eyebrow": { es: "Por qué existimos", en: "Why we exist" },
  "home.impact.title":   { es: "Tu paso deja huella, tu compra preserva un legado",
                           en: "Your visit leaves a mark, your purchase preserves a legacy" },
  "home.impact.body":    { es: "Viajar es, sobre todo, conectar con las personas y su tierra. Por eso en Patagonia Origins Co. creamos este puente hacia los hogares y las manos que dan vida a la Patagonia. Cada pieza que seleccionamos lleva consigo el tiempo y la historia de su creador. Al elegirla, apoyás a una familia local, preservás un oficio que pasa de generación en generación y abrazás una forma de crear en armonía con el paisaje que hoy te recibe.",
                           en: "To travel is, above all, to connect with people and their land. That's why at Patagonia Origins Co. we built this bridge to the homes and the hands that give life to Patagonia. Every piece we select carries the time and the story of its maker. By choosing it, you support a local family, preserve a craft passed down from generation to generation, and embrace a way of creating in harmony with the landscape that welcomes you today." },
  "home.impact.eco.t":   { es: "Económico", en: "Economic" },
  "home.impact.eco.b":   { es: "Comercio justo e ingresos directos que fortalecen a los creadores fueguinos.",
                           en: "Fair trade and direct income that strengthen Fuegian makers." },
  "home.impact.soc.t":   { es: "Social", en: "Social" },
  "home.impact.soc.b":   { es: "Preservación cultural: oficios tradicionales que se mantienen vivos y trascienden generaciones.",
                           en: "Cultural preservation: traditional crafts kept alive and passed across generations." },
  "home.impact.env.t":   { es: "Ambiental", en: "Environmental" },
  "home.impact.env.b":   { es: "Huella consciente: procesos de bajo impacto y packaging responsables con el entorno.",
                           en: "Mindful footprint: low-impact processes and packaging that respects the environment." },
  "home.news.title":     { es: "Recibí la selección de cada temporada",
                           en: "Get each season's selection" },
  "home.news.body":      { es: "Nuestros últimos hallazgos y las creaciones que se suman a nuestro espacio. Sin ruido.",
                           en: "Our latest finds and the new creations joining our space. No noise." },
  "home.news.ph":        { es: "Tu correo electrónico", en: "Your email address" },
  "home.news.cta":       { es: "Suscribirme", en: "Subscribe" },
  "home.news.ok":        { es: "¡Gracias! Te sumamos a la lista (demo).",
                           en: "Thank you! You're on the list (demo)." },

  /* PLP */
  "plp.title":       { es: "Catálogo curado", en: "Curated catalog" },
  "plp.subtitle":    { es: "Piezas reales, stock limitado.",
                       en: "Real pieces, limited stock." },
  "plp.filters":     { es: "Filtros", en: "Filters" },
  "plp.f.category":  { es: "Categoría", en: "Category" },
  "plp.f.all":       { es: "Todas", en: "All" },
  "plp.f.price":     { es: "Rango de precio", en: "Price range" },
  "plp.f.avail":     { es: "Disponibilidad", en: "Availability" },
  "plp.f.instock":   { es: "Solo con stock", en: "In stock only" },
  "plp.sort":        { es: "Ordenar por", en: "Sort by" },
  "plp.sort.feat":   { es: "Destacados", en: "Featured" },
  "plp.sort.priceA": { es: "Precio: menor a mayor", en: "Price: low to high" },
  "plp.sort.priceD": { es: "Precio: mayor a menor", en: "Price: high to low" },
  "plp.sort.new":    { es: "Novedades", en: "Newest" },
  "plp.count":       { es: "piezas", en: "pieces" },
  "plp.empty":       { es: "No hay piezas que coincidan con estos filtros.",
                       en: "No pieces match these filters." },
  "plp.clear":       { es: "Limpiar filtros", en: "Clear filters" },

  /* Estados / badges */
  "badge.new":       { es: "Novedad", en: "New" },
  "badge.sold":      { es: "Sin stock", en: "Sold out" },
  "badge.last":      { es: "Últimas piezas", en: "Last pieces" },

  /* PDP */
  "pdp.by":          { es: "Origen", en: "Origin" },
  "pdp.qty":         { es: "Cantidad", en: "Quantity" },
  "pdp.variant":     { es: "Variante", en: "Variant" },
  "pdp.add":         { es: "Agregar a la bolsa", en: "Add to bag" },
  "pdp.sold":        { es: "Sin stock por ahora", en: "Out of stock for now" },
  "pdp.stock":       { es: "en stock", en: "in stock" },
  "pdp.added":       { es: "Agregado a tu bolsa", en: "Added to your bag" },
  "pdp.story.title": { es: "La historia de esta pieza", en: "The story of this piece" },
  "pdp.pack.title":  { es: "Cómo llega a tus manos", en: "How it reaches you" },
  "pdp.reviews.title": { es: "Reseñas verificadas", en: "Verified reviews" },
  "pdp.reviews.none":{ es: "Todavía sin reseñas para esta pieza.",
                       en: "No reviews yet for this piece." },
  "pdp.related":     { es: "También seleccionamos", en: "Also curated" },
  "pdp.ask.title":   { es: "¿Tenés una pregunta?", en: "Have a question?" },
  "pdp.ask.body":    { es: "Escribile al equipo de Patagonia Origins Co. Respondemos en el día.",
                       en: "Write to the Patagonia Origins Co. team. We reply same day." },
  "pdp.ask.ph":      { es: "Tu pregunta sobre esta pieza…", en: "Your question about this piece…" },
  "pdp.ask.cta":     { es: "Enviar consulta", en: "Send question" },
  "pdp.ask.ok":      { es: "Recibimos tu consulta. Te responderemos por correo (demo).",
                       en: "We received your question. We'll reply by email (demo)." },
  "pdp.verified":    { es: "Compra verificada", en: "Verified purchase" },

  /* Carrito / Checkout */
  "cart.title":      { es: "Tu bolsa", en: "Your bag" },
  "cart.empty":      { es: "Tu bolsa está vacía.", en: "Your bag is empty." },
  "cart.browse":     { es: "Ver el catálogo", en: "Browse the catalog" },
  "co.title":        { es: "Finalizar compra", en: "Checkout" },
  "co.step.segment": { es: "1 · ¿Cómo estás visitando Ushuaia?",
                       en: "1 · How are you visiting Ushuaia?" },
  "co.seg.cruise":   { es: "Estoy de paso", en: "Just passing through" },
  "co.seg.cruise.d": { es: "Poco tiempo en la ciudad y una hora de salida fija (crucero, excursión, vuelo).",
                       en: "Little time in the city and a fixed departure time (cruise, tour, flight)." },
  "co.seg.ski":      { es: "Me quedo unos días", en: "Staying a few days" },
  "co.seg.ski.d":    { es: "Tu estadía es de varios días, con más flexibilidad.",
                       en: "Your stay is several days, with more flexibility." },
  "co.step.delivery":{ es: "2 · Entrega", en: "2 · Delivery" },
  "co.step.contact": { es: "3 · Contacto", en: "3 · Contact" },
  "co.step.payment": { es: "4 · Pago", en: "4 · Payment" },
  "co.deadline.cruise": { es: "Fecha y hora de tu salida", en: "Your departure date & time" },
  "co.deadline.ski":    { es: "Fecha y hora de fin de tu estadía", en: "End-of-stay date & time" },
  "co.deadline.help":   { es: "La usamos para garantizar que la entrega ocurra a tiempo.",
                          en: "We use it to guarantee delivery happens in time." },
  "co.del.dock":     { es: "Entrega cerca del muelle", en: "Delivery near the dock" },
  "co.del.beforeSail": { es: "Entrega coordinada antes de tu salida", en: "Delivery coordinated before your departure" },
  "co.del.hotel":    { es: "Entrega en tu alojamiento", en: "Delivery to your accommodation" },
  "co.del.point":    { es: "Retiro en un punto de la ciudad (horario comercial)", en: "Pickup at a city point (business hours)" },
  "co.f.name":       { es: "Nombre completo", en: "Full name" },
  "co.f.email":      { es: "Correo electrónico", en: "Email" },
  "co.f.phone":      { es: "Teléfono (WhatsApp)", en: "Phone (WhatsApp)" },
  "co.f.phone.help": { es: "Con código de país. Lo usamos para coordinar la entrega por WhatsApp.",
                       en: "With country code. We use it to coordinate delivery via WhatsApp." },
  "co.f.ref":        { es: "Alojamiento o referencia en Ushuaia", en: "Accommodation or reference in Ushuaia" },
  "co.f.notes":      { es: "Notas para la entrega (opcional)", en: "Delivery notes (optional)" },
  "co.pay.intl":     { es: "Tarjeta internacional / PayPal", en: "International card / PayPal" },
  "co.pay.intl.d":   { es: "Para visitantes con medios de pago del exterior.",
                       en: "For visitors paying with international methods." },
  "co.pay.local":    { es: "Medios de pago locales (Argentina)", en: "Local payment methods (Argentina)" },
  "co.pay.local.d":  { es: "Tarjetas argentinas, Mercado Pago y transferencia.",
                       en: "Argentine cards, Mercado Pago and bank transfer." },
  "co.summary":      { es: "Resumen de compra", en: "Order summary" },
  "co.subtotal":     { es: "Subtotal", en: "Subtotal" },
  "co.delivery":     { es: "Entrega", en: "Delivery" },
  "co.delivery.free":{ es: "Incluida", en: "Included" },
  "co.total":        { es: "Total", en: "Total" },
  "co.place":        { es: "Continuar al pago", en: "Continue to payment" },
  "co.placed":       { es: "¡Pedido confirmado! (demo) Te enviaremos los detalles de entrega por correo.",
                       en: "Order confirmed! (demo) We'll email you the delivery details." },
  "co.remove":       { es: "Quitar", en: "Remove" },
  "co.itemsTitle":   { es: "En tu bolsa", en: "In your bag" },

  /* About */
  "ab.eyebrow":      { es: "Nosotros", en: "About" },
  "ab.title":        { es: "Curaduría con raíces", en: "Curation with roots" },
  "ab.manifesto.t":  { es: "Manifiesto", en: "Manifesto" },
  "ab.manifesto.b":  { es: "Creemos que un recuerdo de viaje debería contar una verdad: quién lo hizo, con qué, y por qué vale la pena. En una ciudad donde el tiempo del visitante es escaso y la oferta de souvenirs es genérica, elegimos hacer lo contrario del volumen: seleccionar poco, seleccionar bien, y responder por cada pieza que ofrecemos.",
                       en: "We believe a travel keepsake should tell a truth: who made it, with what, and why it's worth it. In a city where visitors' time is scarce and souvenirs are generic, we chose the opposite of volume: select little, select well, and stand behind every piece we offer." },
  "ab.impact.t":     { es: "Triple impacto, con ejemplos", en: "Triple impact, with examples" },
  "ab.eco.t":        { es: "Impacto económico", en: "Economic impact" },
  "ab.eco.b":        { es: "Trabajamos por consignación: el productor mantiene la propiedad de su pieza hasta que se vende y recibe un pago justo, sin intermediarios que erosionen su margen. Ejemplo: la cooperativa de tejido de Tolhuin colocó su producción de invierno completa a través de nuestra vidriera.",
                       en: "We work on consignment: the producer keeps ownership of their piece until it sells and receives fair payment, with no intermediaries eroding their margin. Example: the Tolhuin weaving cooperative placed its entire winter production through our storefront." },
  "ab.soc.t":        { es: "Impacto social", en: "Social impact" },
  "ab.soc.b":        { es: "Documentamos y compartimos la historia detrás de cada creación. Así, cuidamos que aquellos oficios que corren riesgo de perderse encuentren un espacio para seguir latiendo. Un ejemplo de este puente es Rosa, tejedora de Río Grande: gracias a la plataforma, el saber de sus manos y su relato de vida hoy viajan por el mundo en el equipaje de visitantes de doce países.",
                       en: "We document and share the story behind each creation. This way, we help crafts at risk of being lost find a space to keep beating. One example of this bridge is Rosa, a weaver from Río Grande: thanks to the platform, the skill of her hands and the story of her life now travel the world in the luggage of visitors from twelve countries." },
  "ab.env.t":        { es: "Impacto ambiental", en: "Environmental impact" },
  "ab.env.b":        { es: "Elegimos cuidar la tierra que nos cobija. Priorizamos fibras naturales, procesos limpios y empaques pensados para ser reutilizados o regresar a la naturaleza sin dejar huella. Cuidamos cada detalle: para proteger las piezas más delicadas, dejamos de lado el plástico de burbuja y las envolvemos en un nido de viruta de madera recuperada, un abrigo tan seguro como biodegradable.",
                       en: "We choose to care for the land that shelters us. We prioritize natural fibers, clean processes and packaging designed to be reused or returned to nature without a trace. We look after every detail: to protect the most delicate pieces, we set aside bubble wrap and nest them in recovered wood shavings — a cushion as safe as it is biodegradable." },
  "ab.story.t":      { es: "Cómo empezó", en: "How it started" },
  "ab.story.b":      { es: "Patagonia Origins Co. nació observando la misma escena repetida en el puerto de Ushuaia: visitantes con pocas horas en tierra, buscando algo auténtico entre góndolas de imanes importados. Del otro lado, artesanos con piezas excepcionales y sin forma de llegar a ese visitante. Nos pusimos en el medio como curadores — un solo interlocutor confiable — para que esa compra suceda bien, para ambos lados.",
                       en: "Patagonia Origins Co. was born watching the same scene repeat at the port of Ushuaia: visitors with only hours ashore, hunting for something authentic among racks of imported magnets. On the other side, artisans with exceptional pieces and no way to reach that visitor. We placed ourselves in between as curators — a single trustworthy interlocutor — so that purchase happens well, for both sides." },
  "ab.cta":          { es: "Ver la selección", en: "See the selection" },

  /* Página de pago */
  "pay.title":       { es: "Pago seguro", en: "Secure payment" },
  "pay.sub":         { es: "Completá los datos de pago para confirmar tu pedido.",
                       en: "Enter your payment details to confirm your order." },
  "pay.accepted":    { es: "Medios aceptados", en: "Accepted methods" },
  "pay.method.card": { es: "Tarjeta de crédito o débito", en: "Credit or debit card" },
  "pay.method.wallet": { es: "PayPal / Payoneer", en: "PayPal / Payoneer" },
  "pay.card.number": { es: "Número de tarjeta", en: "Card number" },
  "pay.card.name":   { es: "Nombre en la tarjeta", en: "Name on card" },
  "pay.card.exp":    { es: "Vencimiento", en: "Expiry" },
  "pay.card.cvc":    { es: "CVC", en: "CVC" },
  "pay.wallet.body": { es: "Vas a ser redirigido a la plataforma elegida para completar el pago de forma segura.",
                       en: "You'll be redirected to the chosen platform to complete payment securely." },
  "pay.wallet.paypal":   { es: "Continuar con PayPal", en: "Continue with PayPal" },
  "pay.wallet.payoneer": { es: "Continuar con Payoneer", en: "Continue with Payoneer" },
  "pay.pay":         { es: "Pagar", en: "Pay" },
  "pay.secure.title":{ es: "Pago 100% seguro", en: "100% secure payment" },
  "pay.secure.ssl":  { es: "Cifrado SSL de 256 bits", en: "256-bit SSL encryption" },
  "pay.secure.pci":  { es: "Certificación PCI-DSS Nivel 1", en: "PCI-DSS Level 1 certified" },
  "pay.secure.nostore": { es: "No almacenamos los datos de tu tarjeta", en: "We never store your card data" },
  "pay.demo":        { es: "Modo demostración — no se procesa ningún pago real.",
                       en: "Demo mode — no real payment is processed." },
  "pay.done":        { es: "¡Pago aprobado! (demo). Te enviaremos la confirmación y los detalles de entrega por correo.",
                       en: "Payment approved! (demo). We'll email your confirmation and delivery details." },
  "pay.back":        { es: "Volver al checkout", en: "Back to checkout" },
  "pay.protected":   { es: "Transacción protegida", en: "Protected transaction" },

  /* Genéricos */
  "misc.from":       { es: "Desde", en: "From" },
  "misc.placeholder":{ es: "Fotografía de referencia", en: "Reference photo" },
};

function t(key) {
  const e = T[key];
  return e ? (e[State.lang] || e.es) : key;
}
function tf(field) { /* traduce un campo {es,en} de datos */
  if (!field) return "";
  return field[State.lang] || field.es || "";
}

/* ---------------- Formato de precio ---------------- */
function priceUSD(n) {
  return "US$ " + n.toLocaleString(State.lang === "es" ? "es-AR" : "en-US");
}
function priceARSref(n) {
  return "$" + n.toLocaleString("es-AR") + " ARS";
}

/* ---------------- Placeholder de fotografía (SVG local, sin red) ---------------- */
function photoPlaceholder(product, tall) {
  const [c1, c2] = product.swatch || ["#6E5A3E", "#B79A6E"];
  const w = 800, h = tall ? 1000 : 800;
  const label = tf(product.name);
  const svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='${c2}'/>
      <stop offset='1' stop-color='${c1}'/>
    </linearGradient>
    <radialGradient id='v' cx='0.5' cy='0.42' r='0.75'>
      <stop offset='0' stop-color='#ffffff' stop-opacity='0.18'/>
      <stop offset='1' stop-color='#000000' stop-opacity='0.12'/>
    </radialGradient>
  </defs>
  <rect width='${w}' height='${h}' fill='url(#g)'/>
  <g fill='none' stroke='#ffffff' stroke-opacity='0.14' stroke-width='2'>
    <path d='M0 ${h*0.72} Q ${w*0.25} ${h*0.60} ${w*0.5} ${h*0.70} T ${w} ${h*0.66}'/>
    <path d='M0 ${h*0.80} Q ${w*0.3} ${h*0.70} ${w*0.55} ${h*0.78} T ${w} ${h*0.74}'/>
  </g>
  <g stroke='#ffffff' stroke-opacity='0.22' stroke-width='2' fill='none'>
    <path d='M ${w*0.18} ${h*0.55} l ${w*0.16} -${h*0.20} l ${w*0.16} ${h*0.20} z'/>
    <path d='M ${w*0.48} ${h*0.55} l ${w*0.20} -${h*0.26} l ${w*0.20} ${h*0.26} z'/>
  </g>
  <rect width='${w}' height='${h}' fill='url(#v)'/>
  <text x='${w/2}' y='${h-46}' text-anchor='middle'
        font-family='Georgia, serif' font-size='30' fill='#ffffff' fill-opacity='0.9'>${escapeXml(label)}</text>
  <text x='${w/2}' y='${h-18}' text-anchor='middle'
        font-family='Georgia, serif' font-size='15' fill='#ffffff' fill-opacity='0.55'>Patagonia Origins Co. · ${t("misc.placeholder")}</text>
</svg>`.trim();
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function escapeXml(s) {
  return String(s).replace(/[<>&'"]/g, c =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]));
}
/* Imagen real del producto si existe; si no, placeholder SVG.
   onerror recae al placeholder si la foto no carga (ej. sin conexión). */
function productImage(product, tall) {
  return product.image || photoPlaceholder(product, tall);
}
function imgFallbackAttr(product, tall) {
  return `onerror="this.onerror=null;this.src='${photoPlaceholder(product, tall)}'"`;
}

/* ---------------- Estrellas ---------------- */
function stars(n) {
  let s = "";
  for (let i = 1; i <= 5; i++) s += i <= n ? "★" : "☆";
  return `<span class="stars" aria-label="${n}/5">${s}</span>`;
}

/* ---------------- Carrito ---------------- */
function cartCount() {
  return State.cart.reduce((a, i) => a + i.qty, 0);
}
function addToCart(id, variantId, qty) {
  const cart = State.cart;
  const key = variantId || "_";
  const found = cart.find(i => i.id === id && (i.variant || "_") === key);
  if (found) found.qty += qty;
  else cart.push({ id, variant: variantId || null, qty });
  State.cart = cart;
  updateCartBadge();
}
function removeFromCart(id, variantId) {
  const key = variantId || "_";
  State.cart = State.cart.filter(i => !(i.id === id && (i.variant || "_") === key));
  updateCartBadge();
}
function setQty(id, variantId, qty) {
  const cart = State.cart;
  const key = variantId || "_";
  const it = cart.find(i => i.id === id && (i.variant || "_") === key);
  if (it) it.qty = Math.max(1, qty);
  State.cart = cart;
}
function lineUnitPrice(product, variantId) {
  let p = product.priceUSD;
  if (product.variants && variantId) {
    const v = product.variants.find(x => x.id === variantId);
    if (v) p += v.priceDelta;
  }
  return p;
}
function cartSubtotal() {
  return State.cart.reduce((sum, i) => {
    const p = getProduct(i.id);
    if (!p) return sum;
    return sum + lineUnitPrice(p, i.variant) * i.qty;
  }, 0);
}
function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "inline-flex" : "none";
  });
}

/* ---------------- i18n aplicado al DOM ---------------- */
function applyI18n() {
  document.documentElement.lang = State.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
  // botones de idioma activos
  document.querySelectorAll("[data-lang-btn]").forEach(b => {
    b.classList.toggle("is-active", b.getAttribute("data-lang-btn") === State.lang);
  });
}
function setLang(lang) {
  State.lang = lang;
  applyI18n();
  // re-render de la página si expone un hook
  if (typeof window.renderPage === "function") window.renderPage();
}

/* ---------------- Header / Footer inyectados ---------------- */
function buildChrome() {
  // Favicon (marca de montañas) — inyectado una sola vez para todas las páginas
  if (!document.querySelector("link[rel=icon]")) {
    const fav = document.createElement("link");
    fav.rel = "icon"; fav.type = "image/png"; fav.href = "img/logo-mark.png";
    document.head.appendChild(fav);
  }
  const header = document.querySelector("[data-chrome=header]");
  if (header) {
    header.innerHTML = `
      <div class="nav container">
        <a class="brand" href="index.html">
          <img class="brand-logo" src="img/logo-mark.png" alt="" aria-hidden="true">
          <span class="brand-name">Patagonia Origins Co.</span>
        </a>
        <nav class="nav-links" aria-label="Principal">
          <a href="index.html" data-i18n="nav.home"></a>
          <a href="catalogo.html" data-i18n="nav.shop"></a>
          <a href="nosotros.html" data-i18n="nav.about"></a>
        </nav>
        <div class="nav-right">
          <div class="lang" role="group" aria-label="Idioma">
            <button data-lang-btn="es" onclick="setLang('es')">ES</button>
            <span class="lang-sep">/</span>
            <button data-lang-btn="en" onclick="setLang('en')">EN</button>
          </div>
          <a class="bag" href="checkout.html" aria-label="Bag">
            <span class="bag-ico" aria-hidden="true">🜍</span>
            <span data-i18n="nav.cart"></span>
            <span class="bag-badge" data-cart-count></span>
          </a>
        </div>
      </div>`;
    // Disclaimer de sitio de prueba, debajo del header, en todas las páginas
    if (!document.querySelector(".site-disclaimer")) {
      const disc = document.createElement("div");
      disc.className = "site-disclaimer";
      disc.setAttribute("role", "note");
      disc.innerHTML = `
        <div class="container">
          <span class="disc-ico" aria-hidden="true">ⓘ</span>
          <span><b data-i18n="disc.tag"></b> — <span data-i18n="disc.body"></span></span>
        </div>`;
      header.insertAdjacentElement("afterend", disc);
    }
  }
  const footer = document.querySelector("[data-chrome=footer]");
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-grid">
        <div class="footer-impact">
          <img class="footer-logo" src="img/logo-full-light.png" alt="Patagonia Origins Co.">
          <h4 data-i18n="footer.impact.title"></h4>
          <p data-i18n="footer.impact.body"></p>
        </div>
        <div>
          <h5 data-i18n="footer.explore"></h5>
          <ul>
            <li><a href="catalogo.html" data-i18n="nav.shop"></a></li>
            <li><a href="nosotros.html" data-i18n="nav.about"></a></li>
          </ul>
        </div>
        <div>
          <h5 data-i18n="footer.help"></h5>
          <ul>
            <li><a href="#" data-i18n="footer.faq"></a></li>
            <li><a href="#" data-i18n="footer.shipping"></a></li>
            <li><a href="#" data-i18n="footer.returns"></a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Patagonia Origins Co.</span>
        <span data-i18n="footer.rights"></span>
      </div>`;
  }
}

/* ---------------- Card de producto (reutilizable) ---------------- */
function productCardHTML(p) {
  const sold = p.stock <= 0;
  const low = !sold && p.stock <= 3;
  let badges = "";
  if (sold) badges += `<span class="badge badge--sold">${t("badge.sold")}</span>`;
  else {
    if (p.isNew) badges += `<span class="badge badge--new">${t("badge.new")}</span>`;
    if (low) badges += `<span class="badge badge--last">${t("badge.last")}</span>`;
  }
  const cat = getCategory(p.category);
  return `
    <a class="pcard" href="producto.html?id=${p.id}">
      <div class="pcard-media ${sold ? "is-sold" : ""}">
        ${badges ? `<div class="pcard-badges">${badges}</div>` : ""}
        <img src="${productImage(p, true)}" ${imgFallbackAttr(p, true)} alt="${escapeXml(tf(p.name))}" loading="lazy">
      </div>
      <div class="pcard-body">
        <div class="pcard-cat">${cat ? tf(cat.name) : ""}</div>
        <h3 class="pcard-name">${tf(p.name)}</h3>
        <p class="pcard-tag">${tf(p.tagline)}</p>
        <div class="pcard-price">${priceUSD(p.priceUSD)}<span class="ars">${priceARSref(p.priceARS)}</span></div>
      </div>
    </a>`;
}

/* ---------------- Init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  buildChrome();
  applyI18n();
  updateCartBadge();
  if (typeof window.renderPage === "function") window.renderPage();
});
