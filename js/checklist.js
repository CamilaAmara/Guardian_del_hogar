// ══════════════════════════════════════════════════════════════
//  GUARDIÁN – Lógica del checklist interactivo
// ══════════════════════════════════════════════════════════════

function initChecklist() {
  const allItems = document.querySelectorAll('.checklist input[type="checkbox"]');
  const totalEl  = document.getElementById('total-count');
  const checkedEl= document.getElementById('checked-count');
  const bar      = document.getElementById('progress-bar');
  const status   = document.getElementById('progress-status');

  // Total inicial
  document.getElementById('total-count').textContent = allItems.length;

  // Actualizar contadores de cada sección
  updateSectionCounters();

  allItems.forEach(cb => {
    cb.addEventListener('change', () => {
      const li = cb.closest('li');
      if (cb.checked) {
        li.classList.add('checked');
      } else {
        li.classList.remove('checked');
      }
      updateProgress(allItems, checkedEl, bar, status);
      updateSectionCounters();
    });
  });

  // Estado inicial del progreso
  updateProgress(allItems, checkedEl, bar, status);
}

function updateProgress(allItems, checkedEl, bar, status) {
  const total   = allItems.length;
  const checked = document.querySelectorAll('.checklist input[type="checkbox"]:checked').length;
  const pct     = total > 0 ? Math.round((checked / total) * 100) : 0;

  checkedEl.textContent = checked;
  bar.style.width = pct + '%';

  // Actualizar estado de alerta
  let statusText = '';
  let statusColor = '';
  if (pct === 0) {
    statusText = '⏳ Aún sin evaluar';
    statusColor = 'var(--text-soft)';
  } else if (pct < 40) {
    statusText = '🔴 Atención urgente requerida';
    statusColor = '#E07A5F';
  } else if (pct < 70) {
    statusText = '🟡 Progreso moderado – sigue revisando';
    statusColor = '#D4A853';
  } else if (pct < 100) {
    statusText = '🟢 Buen progreso – casi listo';
    statusColor = 'var(--ok)';
  } else {
    statusText = '✅ ¡Hogar seguro! Todo revisado';
    statusColor = 'var(--ok)';
    showResult(checked, total, pct);
  }

  status.textContent = statusText;
  status.style.color = statusColor;
}

function updateSectionCounters() {
  const sections = document.querySelectorAll('.section-card');
  sections.forEach(sec => {
    const id    = sec.dataset.section;
    const items = sec.querySelectorAll('.checklist input[type="checkbox"]');
    const done  = sec.querySelectorAll('.checklist input[type="checkbox"]:checked');
    const el    = document.getElementById('prog-' + id);
    if (el) {
      el.textContent = done.length + '/' + items.length;
      if (done.length === items.length && items.length > 0) {
        el.style.background = 'var(--ok-lt)';
        el.style.color = 'var(--ok)';
      } else {
        el.style.background = 'var(--accent-lt)';
        el.style.color = 'var(--accent-dk)';
      }
    }
  });
}

function showResult(checked, total, pct) {
  const section = document.getElementById('result-section');
  const icon  = document.getElementById('result-icon');
  const title = document.getElementById('result-title');
  const text  = document.getElementById('result-text');
  const card  = document.getElementById('result-card');

  section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth', block: 'center' });

  icon.textContent  = '🏆';
  title.textContent = '¡Felicitaciones! Tu hogar está protegido';
  text.textContent  = `Has verificado los ${total} puntos de seguridad. Recuerda repetir esta revisión cada 3 meses y practicar el plan de evacuación con tu familia al menos una vez al año.`;
  card.style.background = 'linear-gradient(135deg, var(--ok-lt), #f0fdf4)';
}

function resetAll() {
  document.querySelectorAll('.checklist input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
    cb.closest('li').classList.remove('checked');
  });

  const allItems = document.querySelectorAll('.checklist input[type="checkbox"]');
  const checkedEl= document.getElementById('checked-count');
  const bar      = document.getElementById('progress-bar');
  const status   = document.getElementById('progress-status');

  checkedEl.textContent = '0';
  bar.style.width = '0%';
  status.textContent = '⏳ Aún sin evaluar';
  status.style.color = 'var(--text-soft)';
  updateSectionCounters();

  document.getElementById('result-section').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Acordeón ──────────────────────────────────────────────────
function toggleSection(header) {
  const card = header.closest('.section-card');
  const isOpen = card.classList.contains('open');

  // Cierra todas
  document.querySelectorAll('.section-card.open').forEach(c => {
    if (c !== card) c.classList.remove('open');
  });

  // Toggle la actual
  card.classList.toggle('open', !isOpen);
}
