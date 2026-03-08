// ══════════════════════════════════════════════════════════════
//  GUARDIÁN – Base de conocimiento del chatbot
//  Sin IA externa: respuestas basadas en reglas y palabras clave
// ══════════════════════════════════════════════════════════════

const GUARDIAN_KNOWLEDGE = [

  // ──────────────────────────── MEZCLAS PELIGROSAS ────────────
  {
    keywords: ['mezcl', 'juntar', 'combinar', 'cloro', 'cloro', 'amoniaco', 'amoníaco', 'vinagre', 'quimicos', 'químicos', 'limpieza', 'productos'],
    response: `⚠️ <strong>Mezclas de limpieza que NUNCA debes hacer:</strong><br><br>
🔴 <strong>Cloro + Amoníaco</strong> → Gas de cloro (tóxico para pulmones).<br>
🔴 <strong>Cloro + Vinagre</strong> → Vapores de cloro irritantes.<br>
🔴 <strong>Cloro + Agua oxigenada</strong> → Reacción violenta con gas tóxico.<br>
🔴 <strong>Cloro + Limpiacristales</strong> → La mayoría contienen amoníaco.<br>
🔴 <strong>Salfumán + cualquier cosa</strong> → Vapores ácidos muy peligrosos.<br>
🔴 <strong>Desengrasante + Lavavajillas</strong> → Espuma tóxica, irritación piel.<br><br>
✅ <strong>Regla de oro:</strong> Nunca mezcles productos de limpieza. Usa uno a la vez y ventila bien.`
  },

  // ──────────────────────────── FUGA DE GAS ───────────────────
  {
    keywords: ['gas', 'fuga', 'huele', 'olor', 'escape', 'butano', 'propano', 'natural'],
    response: `💨 <strong>Si hueles a gas, actúa así:</strong><br><br>
1️⃣ <strong>NO encendas</strong> luces ni interruptores eléctricos.<br>
2️⃣ <strong>NO uses</strong> cerillas, encendedores ni móvil dentro del espacio.<br>
3️⃣ <strong>Abre</strong> todas las ventanas y puertas de golpe.<br>
4️⃣ <strong>Cierra</strong> la llave de paso del gas (debajo de la cocina o en la pared).<br>
5️⃣ <strong>Sal</strong> de la vivienda inmediatamente.<br>
6️⃣ Desde fuera, llama a tu empresa de gas o <strong>emergencias: 123</strong><br><br>
⛔ <strong>NUNCA</strong> uses agua para apagar fuego de gas: puede hacer explotar la botella.`
  },

  // ──────────────────────────── EXTINTOR ─────────────────────
  {
    keywords: ['extintor', 'extinguir', 'usar extintor', 'apagar fuego', 'incendio pequeño'],
    response: `🔥 <strong>Cómo usar un extintor (método PASE):</strong><br><br>
<strong>P</strong> – Quita el <strong>Pasador</strong> (precinto) tirando del anillo.<br>
<strong>A</strong> – <strong>Apunta</strong> la boquilla a la BASE de las llamas (no al humo.)<br>
<strong>S</strong> – <strong>Squash</strong> (aprieta) la palanca superior con firmeza.<br>
<strong>E</strong> – <strong>Escanea</strong> moviendo la boquilla de lado a lado.<br><br>
📏 Mantente a <strong>2-3 metros</strong> del fuego.<br>
🚪 Colócate siempre <strong>entre el fuego y la salida.</strong><br>
⏱️ Un extintor de 1 kg dura solo <strong>8-12 segundo.s</strong><br>
🔔 Tipo ABC: sirve para sólidos, líquidos inflamables y fuegos eléctricos.`
  },

  // ──────────────────────────── INCENDIO EN CASA ──────────────
  {
    keywords: ['incendio', 'fuego', 'llamas', 'humo', 'evacua', 'quema', 'arde'],
    response: `🚨 <strong>Incendio en casa – protocolo de emergencia:</strong><br><br>
1️⃣ <strong>Avisa</strong> a todos en la casa inmediatamente<br>
2️⃣ <strong>Llama al 112</strong> (hazlo desde fuera si puedes)<br>
3️⃣ <strong>No abras</strong> puertas calientes al tacto (hay fuego al otro lado)<br>
4️⃣ Ve <strong>agachado</strong>: el humo sube, el aire limpio está abajo<br>
5️⃣ Tapa tu boca/nariz con un <strong>trapo húmedo</strong><br>
6️⃣ Si hay humo en las escaleras, usa <strong>la escalera de emergencia</strong><br>
7️⃣ <strong>NUNCA uses el ascensor</strong> durante un incendio<br>
8️⃣ Una vez fuera, <strong>no vuelvas a entrar</strong> bajo ningún concepto<br><br>
🏠 Punto de reunión: acuerda uno con tu familia antes de que ocurra.`
  },

  // ──────────────────────────── ELECTRICIDAD ──────────────────
  {
    keywords: ['electricidad', 'electrico', 'eléctrico', 'cable', 'enchufe', 'cortocircuito', 'electrocucion', 'electrocución', 'calambre'],
    response: `⚡ <strong>Seguridad eléctrica en el hogar:</strong><br><br>
🔴 <strong>Riesgos principales:</strong><br>
• Cables pelados o dañados<br>
• Aparatos eléctricos mojados o cerca del agua<br>
• Sobrecargar enchufes con muchos ladrones<br>
• Enchufes calientes al tacto (señal de fallo)<br><br>
✅ <strong>Prevención:</strong><br>
• Revisa cables regularmente: sin grietas ni pelados<br>
• Nunca uses aparatos eléctricos con manos mojadas<br>
• Prueba el diferencial anualmente (botón TEST)<br>
• Tapas de seguridad en enchufes si hay niños<br>
• Llama siempre a un electricista certificado para reparaciones`
  },

  // ──────────────────────────── SEGURIDAD INFANTIL ────────────
  {
    keywords: ['niño', 'niños', 'bebé', 'bebe', 'infantil', 'pequeño', 'hijo', 'hijos', 'criatura'],
    response: `👶 <strong>Seguridad para niños pequeños:</strong><br><br>
🔌 <strong>Electricidad:</strong> tapas en enchufes, cables fuera de alcance<br>
🔥 <strong>Cocina:</strong> mangos hacia adentro, valla protectora en la entrada<br>
💊 <strong>Medicamentos:</strong> bajo llave, fuera del alcance, sin caducados<br>
🧪 <strong>Químicos:</strong> armarios con pestillo, envases originales<br>
🪟 <strong>Ventanas/Balcones:</strong> limitadores de apertura, redes<br>
🛁 <strong>Baño:</strong> nunca solos en la bañera, agua a máx. 37°C para ellos<br>
🧸 <strong>Asfixia:</strong> sin objetos menores de 4cm (botones, monedas, pilas)<br>
📎 <strong>Cordones:</strong> persianas y cortinas enrollados a más de 1.5m<br>
🪑 <strong>Muebles:</strong> protectores de esquinas, estanterías ancladas`
  },

  // ──────────────────────────── MONÓXIDO DE CARBONO ───────────
  {
    keywords: ['monóxido', 'monoxido', 'co', 'carbono', 'brasero', 'combustión', 'calentador', 'asfixia'],
    response: `☠️ <strong>Monóxido de Carbono (CO) – el asesino invisible:</strong><br><br>
El CO es <strong>inodoro e incoloro</strong>. No puedes detectarlo sin un sensor.<br><br>
⚠️ <strong>Síntomas de intoxicación:</strong><br>
• Dolor de cabeza persistente<br>
• Náuseas, mareos, confusión<br>
• Color morado en labios y manos<br>
• Somnolencia inusual<br><br>
🛡️ <strong>Prevención:</strong><br>
• Instala un detector de CO (entre 15-30€)<br>
• No uses braseros en habitaciones cerradas<br>
• No dejes el coche en marcha en garaje cerrado<br>
• Ventila siempre donde haya calentador de gas<br>
• Revisa la chimenea y caldera anualmente<br><br>
🚨 Si sospechas intoxicación: sal al aire libre y llama al 112`
  },

  // ──────────────────────────── BALCONES Y MASCOTAS ───────────
  {
    keywords: ['balcon', 'balcón', 'mascota', 'gato', 'perro', 'caída al balcón', 'terraza', 'ventana'],
    response: `🐱 <strong>Balcones y terrazas seguros para mascotas:</strong><br><br>
🔒 <strong>Medidas esenciales:</strong><br>
• Red de protección de malla fina (mínimo 5x5cm por agujero)<br>
• Barandillas sin huecos mayores de 10cm (los gatos caben por más)<br>
• No dejar muebles cerca de la barandilla (trampolín involuntario)<br>
• Revisar que no haya grietas por donde pase la pata<br><br>
🪟 <strong>Para ventanas:</strong><br>
• Usa limitadores de apertura: permiten ventilación sin riesgo<br>
• Las mosquiteras <strong>NO son suficientes</strong> para retener mascotas<br><br>
⚡ <strong>Síndrome del gato volador:</strong> los gatos caen de pisos altos con más frecuencia en verano. Una red puede salvar su vida.`
  },

  // ──────────────────────────── MEDICAMENTOS ──────────────────
  {
    keywords: ['medicamento', 'medicina', 'fármaco', 'pastilla', 'botiquín', 'caducado', 'intoxicación'],
    response: `💊 <strong>Seguridad con medicamentos:</strong><br><br>
🔐 <strong>Almacenamiento:</strong><br>
• Botiquín con llave o en alto fuera del alcance de niños<br>
• Temperatura ambiente (no en el baño: hay humedad)<br>
• Sin mezclar medicamentos sin etiqueta<br><br>
⏰ <strong>Caducados:</strong><br>
• Revisa el botiquín cada 6 meses<br>
• Los caducados pueden ser ineficaces o tóxicos<br>
• Llévados a la farmacia (punto SIGRE): no al cubo de basura<br><br>
⚠️ <strong>Riesgo de intoxicación accidental:</strong><br>
• Es la 3ª causa de intoxicación infantil<br>
• Si un niño ingiere medicamentos: llama inmediatamente al <strong>Instituto Nacional de Toxicología: 91 562 04 20</strong> (España)<br>
• No induzcas el vómito sin instrucción médica`
  },

  // ──────────────────────────── CAÍDAS ────────────────────────
  {
    keywords: ['caída', 'caidas', 'resbalar', 'tropezar', 'escalera', 'barandilla', 'alfombra'],
    response: `🩹 <strong>Prevención de caídas en el hogar:</strong><br><br>
Las caídas son la <strong>causa más frecuente de accidente doméstico (44%)</strong>.<br><br>
✅ <strong>Medidas clave:</strong><br>
• Suelos libres de obstáculos (cables, zapatos, juguetes)<br>
• Alfombras fijadas con base antideslizante o velcro<br>
• Iluminación nocturna en pasillos y baños (luz LED de sensor)<br>
• Barandillas resistentes a ≥50kg en todas las escaleras<br>
• Alfombrilla antideslizante dentro Y fuera de la ducha<br>
• Estanterías y muebles pesados anclados a la pared<br>
• Evita usar sillas para alcanzar objetos altos: usa escaleras<br><br>
👴 <strong>Para adultos mayores:</strong> instala barras de apoyo en baño y pasillo.`
  },

  // ──────────────────────────── QUEMADURAS ────────────────────
  {
    keywords: ['quemadura', 'quemar', 'caliente', 'aceite', 'plancha', 'horno'],
    response: `🩹 <strong>Primeros auxilios para quemaduras:</strong><br><br>
<strong>Quemadura leve (rojez, sin ampollas):</strong><br>
1️⃣ Enfría con agua fría (no helada) durante <strong>20 minutos</strong><br>
2️⃣ No pongas hielo, mantequilla, pasta de dientes ni ningún remedio casero<br>
3️⃣ Cubre con apósito estéril o film transparente<br><br>
<strong>Quemadura grave (ampollas, piel blanca/negra):</strong><br>
1️⃣ Llama al <strong>112</strong> inmediatamente<br>
2️⃣ No rompas ampollas ni quites ropa pegada<br>
3️⃣ Cubre con sábana limpia y espera ayuda<br><br>
🛡️ <strong>Prevención:</strong> agua calentador máx. 50°C, mangos de sartén hacia adentro, guantes de cocina siempre a mano`
  },

  // ──────────────────────────── AGUA / GRIFOS ─────────────────
  {
    keywords: ['agua', 'grifo', 'inundación', 'tubería', 'fuga agua', 'llave paso agua'],
    response: `💧 <strong>Seguridad con el agua en casa:</strong><br><br>
🚰 <strong>Antes de salir o dormir:</strong><br>
• Revisa que todos los grifos estén bien cerrados<br>
• Una gotita continua puede suponer cientos de litros al día<br><br>
🔧 <strong>Llave de paso principal:</strong><br>
• Localízala (suele estar en el armario del baño o entrada)<br>
• Debe cerrarse ante cualquier fuga o rotura de tubería<br><br>
🌡️ <strong>Temperatura segura:</strong><br>
• Calentador a máx. 50°C para adultos<br>
• Para baños de niños: máx. 37°C (comprueba con el codo)<br><br>
🏊 <strong>Prevención de ahogamiento (niños):</strong><br>
• Nunca solos en la bañera ni cerca de recipientes con agua<br>
• Vacía cubos y palanganas inmediatamente tras usarlos`
  },

  // ──────────────────────────── VENTANAS ──────────────────────
  {
    keywords: ['ventana', 'cerrar ventana', 'ventanas', 'corriente aire', 'lluvia', 'tormenta'],
    response: `🪟 <strong>Cierre seguro de ventanas:</strong><br><br>
✅ <strong>Al salir o dormir:</strong><br>
• Cierra TODAS las ventanas para evitar entrada de lluvia, insectos e intrusos<br>
• En tormenta, cierra especialmente las orientadas al viento<br><br>
👶 <strong>Con niños o mascotas:</strong><br>
• Instala limitadores de apertura (máx. 10cm de apertura)<br>
• Las mosquiteras NO retienen el peso de un niño o gato<br>
• Las ventanas a menos de 90cm del suelo necesitan protección<br><br>
🌬️ <strong>Ventilación segura:</strong><br>
• Usa ventanas altas o de tipo oscilobatiente para ventilar<br>
• Asegura las ventanas abiertas con topes para que no golpeen con el viento`
  },

  // ──────────────────────────── SALUDO / DEFAULT ──────────────
  {
    keywords: ['hola', 'buenos', 'buenas', 'hey', 'saludos', 'qué puedes', 'que puedes', 'ayuda'],
    response: `👋 ¡Hola! Soy <strong>Guardián</strong>, tu asesor de seguridad doméstica.<br><br>
Puedo ayudarte con preguntas sobre:<br>
🔥 Prevención de incendios<br>
💨 Fugas de gas y monóxido de carbono<br>
⚡ Riesgos eléctricos<br>
🧪 Mezclas peligrosas de productos de limpieza<br>
👶 Seguridad para niños y mascotas<br>
🪟 Balcones, ventanas y caídas<br>
💊 Medicamentos y botiquín<br>
🚿 Seguridad en el baño<br><br>
¿Sobre qué quieres saber hoy? También puedes usar los botones de acceso rápido de abajo. 😊`
  },

  // ──────────────────────────── GRACIAS ───────────────────────
  {
    keywords: ['gracias', 'genial', 'perfecto', 'excelente', 'ok', 'bien', 'entendido'],
    response: `😊 ¡Con mucho gusto! Recuerda que la seguridad del hogar se construye con pequeños hábitos diarios.<br><br>
Si tienes más dudas, aquí estoy. ¡Cuídate! 🛡️`
  }
];

// Función de búsqueda en la base de conocimiento
function findAnswer(query) {
  const q = query.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quitar acentos para matching
    .toLowerCase();

  for (const entry of GUARDIAN_KNOWLEDGE) {
    const matches = entry.keywords.filter(kw => q.includes(kw));
    if (matches.length > 0) {
      return entry.response;
    }
  }

  // Respuesta por defecto
  return `🤔 No encontré información específica sobre eso, pero puedo ayudarte con temas como:<br><br>
• Mezclas peligrosas de productos de limpieza<br>
• Fugas de gas y monóxido de carbono<br>
• Uso de extintores e incendios<br>
• Seguridad eléctrica<br>
• Protección de niños y mascotas<br>
• Caídas y zonas húmedas<br><br>
Intenta reformular tu pregunta o usa los botones de acceso rápido. ¡Estoy aquí para ayudarte! 🛡️`;
}
