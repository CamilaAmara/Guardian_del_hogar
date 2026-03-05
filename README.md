# 🛡️ Guardián del Hogar

Sistema de recordatorios de seguridad doméstica con checklist interactivo y chatbot de voz.

---

## 📁 Estructura del proyecto

```
guardian-home/
├── index.html              ← Página principal
├── css/
│   └── styles.css          ← Todos los estilos
├── js/
│   ├── knowledge.js        ← Base de conocimiento del chatbot
│   ├── chatbot.js          ← Lógica del chatbot + voz
│   ├── checklist.js        ← Lógica del checklist
│   └── main.js             ← Inicialización y animaciones
├── images/                 ← Tus imágenes (ver lista abajo)
└── README.md
```

---

## 🖼️ Imágenes necesarias

Coloca estas imágenes en la carpeta `images/` con exactamente estos nombres:

| Nombre del archivo       | Sección que ilustra               | Sugerencia de búsqueda          |
|--------------------------|-----------------------------------|---------------------------------|
| `extintor.jpg`           | Prevención de Incendios           | "extintor rojo ABC"             |
| `gas.jpg`                | Seguridad con el Gas              | "llave de paso gas cocina"      |
| `cable_pelado.jpg`       | Riesgos Eléctricos                | "cable eléctrico dañado"        |
| `cocina.jpg`             | Cocina Segura                     | "cocina segura manango sartén"  |
| `quimicos.jpg`           | Productos Químicos                | "productos limpieza hogar"      |
| `bano.jpg`               | Baño y Zonas Húmedas              | "baño seguro alfombrilla"       |
| `escalera.jpg`           | Prevención de Caídas              | "escalera casa barandilla"      |
| `ninos_seguridad.jpg`    | Niños y Mascotas                  | "protección bebé enchufes"      |
| `rutina_noche.jpg`       | Rutina Antes de Salir / Dormir    | "lista rutina hogar noche"      |

> **Tip:** Si una imagen no carga, el ícono emoji de fallback se muestra automáticamente. El sitio funciona perfectamente sin imágenes.

---

## 🚀 Cómo desplegar en GitHub Pages

### Paso 1 – Instala Git (si no lo tienes)
Descárgalo en: https://git-scm.com/downloads  
Verifica con: `git --version`

### Paso 2 – Crea una cuenta en GitHub
Ve a https://github.com y crea una cuenta gratuita.

### Paso 3 – Crea un repositorio nuevo
1. En GitHub, haz clic en **"New repository"**
2. Nómbralo: `guardian-hogar` (o el nombre que quieras)
3. Marca **"Public"**
4. **NO** inicialices con README (ya tienes uno)
5. Haz clic en **"Create repository"**

### Paso 4 – Sube el proyecto desde VS Code

Abre la terminal en VS Code (`Ctrl + ñ` o `Terminal > New Terminal`) y ejecuta:

```bash
# 1. Ve a la carpeta de tu proyecto
cd ruta/a/guardian-home

# 2. Inicializa Git
git init

# 3. Agrega todos los archivos
git add .

# 4. Primer commit
git commit -m "Primer commit: Guardián del Hogar"

# 5. Conecta con tu repositorio de GitHub
#    (reemplaza TU_USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/guardian-hogar.git

# 6. Sube el código
git branch -M main
git push -u origin main
```

### Paso 5 – Activa GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (arriba a la derecha)
3. En el menú izquierdo, ve a **Pages**
4. En "Source", selecciona **"Deploy from a branch"**
5. Selecciona la rama **main** y carpeta **/ (root)**
6. Haz clic en **Save**

### Paso 6 – ¡Listo!
En 1-2 minutos tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/guardian-hogar/
```

---

## 🔄 Actualizar el sitio después de cambios

Cada vez que hagas cambios en VS Code:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

GitHub Pages se actualiza automáticamente en ~1 minuto.

---

## 📦 Dependencias

**¡Ninguna instalación necesaria!**  
El proyecto usa solo:
- HTML5 + CSS3 + JavaScript puro (Vanilla JS)
- Google Fonts (se carga desde CDN, necesita internet)
- Web Speech API (integrada en el navegador, sin instalación)

No necesitas Node.js, npm ni ningún bundler.

---

## 🎙️ Función de voz

El chatbot usa la **Web Speech API** nativa del navegador:
- ✅ Chrome / Edge: soporte completo
- ✅ Safari (macOS/iOS): soporte completo  
- ⚠️ Firefox: soporte limitado en algunas versiones
- El botón 🔊/🔇 en el chat activa/desactiva la lectura en voz alta

---

## ✏️ Personalización rápida

| Qué cambiar | Dónde está |
|-------------|------------|
| Colores del sitio | `css/styles.css` → variables en `:root` |
| Añadir/quitar ítems del checklist | `index.html` → dentro de `<ul class="checklist">` |
| Agregar respuestas al chatbot | `js/knowledge.js` → nuevo objeto en `GUARDIAN_KNOWLEDGE` |
| Cambiar texto de bienvenida | `js/chatbot.js` → función `toggleChat()` |
