// ══════════════════════════════════════════════════════════════
//  GUARDIÁN – Lógica del chatbot con voz (Web Speech API)
// ══════════════════════════════════════════════════════════════

let voiceEnabled = true;
let isSpeaking  = false;
let currentUtterance = null;
const synth = window.speechSynthesis;

// ── Estado del panel ──────────────────────────────────────────
let chatOpen = false;
let hasOpenedBefore = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chatbot-panel');
  const badge = document.getElementById('bubble-badge');

  if (chatOpen) {
    panel.classList.add('open');
    badge.style.display = 'none';
    if (!hasOpenedBefore) {
      hasOpenedBefore = true;
      // Mensaje de bienvenida con delay
      setTimeout(() => {
        addBotMessage(`¡Hola! Soy <strong>Guardián</strong>, tu asesor de seguridad del hogar.<br>
Puedo resolverte dudas sobre incendios, gas, electricidad, mezclas peligrosas, seguridad para niños y mucho más.<br><br>
¿En qué puedo ayudarte hoy?`, true);
      }, 300);
    }
    // Scroll al fondo
    setTimeout(scrollToBottom, 400);
  } else {
    panel.classList.remove('open');
    stopVoice();
  }
}

// ── Enviar mensaje ─────────────────────────────────────────────
function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  processUserMessage(text);
}

function handleChatKey(e) {
  if (e.key === 'Enter') sendMessage();
}

function askGuardian(question) {
  // Si el panel está cerrado, ábrelo
  if (!chatOpen) {
    toggleChat();
    setTimeout(() => processUserMessage(question), 600);
  } else {
    processUserMessage(question);
  }
}

function processUserMessage(text) {
  addUserMessage(text);
  showTyping();
  // Simula tiempo de "pensamiento"
  setTimeout(() => {
    removeTyping();
    const answer = findAnswer(text);
    addBotMessage(answer, voiceEnabled);
  }, 700 + Math.random() * 400);
}

// ── Agregar mensajes ───────────────────────────────────────────
function addUserMessage(text) {
  const msgs = document.getElementById('chat-messages');
  const time = getTime();
  const div = document.createElement('div');
  div.className = 'msg user';
  div.innerHTML = `
    <div class="msg-bubble">${escapeHtml(text)}</div>
    <span class="msg-time">${time}</span>
  `;
  msgs.appendChild(div);
  scrollToBottom();
}

function addBotMessage(html, speak = false) {
  const msgs = document.getElementById('chat-messages');
  const time = getTime();
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.innerHTML = `
    <div class="msg-bubble">${html}</div>
    <span class="msg-time">${time}</span>
  `;
  msgs.appendChild(div);
  scrollToBottom();

  if (speak && voiceEnabled) {
    speakText(stripHtml(html));
  }
}

// ── Typing indicator ──────────────────────────────────────────
function showTyping() {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="typing-dot">
      <span></span><span></span><span></span>
    </div>
  `;
  msgs.appendChild(div);
  scrollToBottom();
}

function removeTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

// ── Voz ───────────────────────────────────────────────────────
function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  const btn = document.getElementById('voice-toggle');
  if (voiceEnabled) {
    btn.textContent = '🔊';
    btn.classList.remove('muted');
    btn.title = 'Desactivar voz';
  } else {
    btn.textContent = '🔇';
    btn.classList.add('muted');
    btn.title = 'Activar voz';
    stopVoice();
  }
}

function speakText(text) {
  if (!synth || !voiceEnabled) return;
  stopVoice();

  // Cortar si es muy largo
  const maxLen = 400;
  const safeText = text.length > maxLen ? text.substring(0, maxLen) + '...' : text;

  currentUtterance = new SpeechSynthesisUtterance(safeText);
  currentUtterance.lang = 'es-ES';
  currentUtterance.rate = 0.95;
  currentUtterance.pitch = 1.0;
  currentUtterance.volume = 1;

  // Intenta seleccionar voz en español
  const voices = synth.getVoices();
  const spanishVoice = voices.find(v => v.lang.startsWith('es'));
  if (spanishVoice) currentUtterance.voice = spanishVoice;

  isSpeaking = true;
  currentUtterance.onend = () => { isSpeaking = false; };
  synth.speak(currentUtterance);
}

function stopVoice() {
  if (synth) synth.cancel();
  isSpeaking = false;
}

// ── Utilidades ────────────────────────────────────────────────
function scrollToBottom() {
  const msgs = document.getElementById('chat-messages');
  msgs.scrollTop = msgs.scrollHeight;
}

function getTime() {
  return new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function stripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

// Mostrar badge en la burbuja si el chat no está abierto
function notifyBubble() {
  if (!chatOpen) {
    const badge = document.getElementById('bubble-badge');
    badge.style.display = 'flex';
  }
}

// Mostrar notificación después de un rato
setTimeout(() => {
  if (!hasOpenedBefore) notifyBubble();
}, 8000);
