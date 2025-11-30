async function loadGardenData() {
  const resp = await fetch('garden-data.json?' + Date.now()); // cache-bust
  return await resp.json();
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

// Auto-detect which pot we're looking at from the URL
function getCurrentPotId() {
  const path = window.location.pathname;
  // If someone visits /pot.html?pot15 or /pot.html#pot08 or just pot.html (fallback)
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.slice(1);
  return params.get('id') || hash || 'pot01'; // default to pot01 if nothing specified
}

// Main render function – works on pot.html no matter how you arrive
async function renderPotPage() {
  const data = await loadGardenData();
  const potId = getCurrentPotId();
  const pot = data.pots[potId];

  if (!pot) {
    document.body.innerHTML = `<h1>🤷 Pot ${potId} ran away!</h1><p><a href="index.html">← Back home</a></p>`;
    return;
  }

  // Update page title & header
  document.title = `${pot.name} – Garden Log`;
  document.querySelector('h1').innerHTML = `${pot.name} <small>(${potId})</small>`;

// Hero photo (newest one)
const myImages = window.GARDEN_IMAGE_LIST
  ?.filter(f => f.startsWith(`pot${potId.replace('pot','').padStart(2,'0')}_`))
  .sort().reverse();
if (myImages?.[0]) {
  document.getElementById('hero-photo').style.backgroundImage = `url(assets/images/pots/${myImages[0]})`;
}

// Species badge
const species = pot.species || '';
const variety = pot.variety ? ` '${pot.variety}'` : '';
  
document.getElementById('species-badge').textContent = species ? `${species}${variety}` : 'Mystery Plant 🌿';
document.getElementById('species-full').textContent = pot.species || 'Mystery plant 🌿';
document.getElementById('variety').textContent = pot.variety || '—';
document.getElementById('planted-date').textContent = pot.planted || 'Unknown';
document.getElementById('light-needs').innerHTML = pot.light ? `☀️ ${pot.light}` : '—';
document.getElementById('water-needs').innerHTML = pot.water ? `💧 ${pot.water}` : '—';
document.getElementById('pests').textContent   = pot.pests   || 'None known yet';
document.getElementById('diseases').textContent = pot.diseases || 'None known yet';
document.getElementById('personality').textContent = pot.notes || 'Quietly judging you';
  
  // Optional cute subtitle
  const subtitle = document.getElementById('pot-subtitle');
  if (subtitle) subtitle.textContent = pot.notes || `${pot.type || 'mysterious plant'} vibes`;

  // Build the log
  const entries = data.log
    .filter(entry => {
      if (entry.pots === "all") return true;
      if (Array.isArray(entry.pots)) return entry.pots.includes(potId);
      return false;
    })
    .reverse();

  const logDiv = document.getElementById('pot-log');
  if (entries.length === 0) {
    logDiv.innerHTML = "<p>Perfectly peaceful… nothing has happened yet!</p>";
    return;
  }

${e.details ? `<div class="log-details">✨ ${e.details}</div>` : ''}
${e.note ? `<div class="log-note">🌱 <em>${e.note}</em></div>` : ''}

  logDiv.innerHTML = html;
  renderPhotosForPot(potId);
}

// Add this function anywhere in garden.js
async function renderPhotosForPot(potId) {
  const gallery = document.getElementById('photo-gallery');
  if (!gallery) return; // if the page doesn't have the div, skip gracefully

  // Try to fetch a directory index – GitHub Pages doesn't give real directory listings,
  // so we cheat with a tiny pre-generated list instead (see Step 3 below)
  const imageList = window.GARDEN_IMAGE_LIST || []; 

  const myImages = imageList
    .filter(file => file.startsWith(`pot${potId.replace('pot','').padStart(2,'0')}_`))
    .sort() // oldest first
    .reverse(); // newest first

  if (myImages.length === 0) {
    gallery.innerHTML = '<p class="no-photos">📷 No paparazzi shots yet…</p>';
    return;
  }

  const html = myImages.map(src => {
    const full = `assets/images/pots/${src}`;
    const date = src.match(/_(\d{8})_/) || src.match(/_(\d{8})\./);
    const prettyDate = date ? new Date(date[1].replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }) : 'Some day';
    return `
      <a href="${full}" target="_blank" class="photo-thumb">
        <img src="${full}" alt="${potId} on ${prettyDate}" loading="lazy">
        <div class="photo-caption">${prettyDate}</div>
      </a>`;
  }).join('');

  gallery.innerHTML = html;
}

// ──────────────────────────────────────────────────────────────
// Index-page functions (used only on index.html) – the missing magic!
// ──────────────────────────────────────────────────────────────
async function buildIndex() {
  try {
    const data = await loadGardenData();

    // Update footer date with a flourish
    const updatedEl = document.getElementById('last-updated');
    if (updatedEl) updatedEl.textContent = new Date(data.lastUpdated || Date.now()).toLocaleDateString();

    // Build the pot grid – your leafy darlings in all their glory
    const grid = document.getElementById('pot-grid');
    if (!grid) return; // Bail if we're not on the right page

    const html = Object.keys(data.pots || {}).sort().map(id => {
      const p = data.pots[id];
      return `
        <div class="pot-card">
          <a href="pot.html?id=${id}">
            <div class="pot-name">${p.name || id}</div>
            ${p.notes ? `<div class="pot-note">${p.notes}</div>` : ''}
            <div style="margin-top:0.5rem; opacity:0.5; font-size:0.8rem;">${id}</div>
          </a>
        </div>`;
    }).join('');

    grid.innerHTML = html || '<p>No pots yet… time to adopt some plant babies! 🌱</p>';

    // Now summon the recent adventures chronicle
    renderMasterLog(data);
  } catch (error) {
    console.error('Garden index build hiccup:', error);
    document.getElementById('pot-grid').innerHTML = '<p>Oops! The garden data took a nap. <a href="index.html">Refresh and try again?</a></p>';
  }
}

async function renderMasterLog(dataParam = null) {
  if (!document.getElementById('master-log')) return; // Not on the chronicle page

  try {
    let data = dataParam || await loadGardenData();
    const container = document.getElementById('master-log');
    //const entries = (data.log || []).slice().reverse(); // Newest first, darling
    const entries = (data.log || []).slice(); // Newest first, darling

    const html = entries.map(e => {
      let potList = '';
      if (e.pots === "all") potList = '<em>everybody!</em> 🌍';
      else if (Array.isArray(e.pots)) {
        const names = e.pots.map(id => data.pots[id]?.name || id).slice(0, 6);
        potList = names.length > 5 ? names.join(', ') + ' …' : names.join(', ');
      } else potList = e.pots || 'mystery pots';

      return `
        <div class="master-entry">
          <div class="master-date">${formatDate(e.date)}</div>
          <div class="master-action"><strong>${e.action.toUpperCase()}</strong> — ${potList}</div>
          ${e.details ? `<div class="master-details">${e.details}</div>` : ''}
          ${e.note ? `<div class="master-note">✦ ${e.note}</div>` : ''}
        </div>`;
    }).join('');

    container.innerHTML = html || "<p>All quiet in the garden today… the pots are plotting something whimsical. 😏</p>";
  } catch (error) {
    console.error('Chronicle rendering oopsie:', error);
    document.getElementById('master-log').innerHTML = '<p>The adventure log is shy today. Refresh for stories!</p>';
  }
}

// ──────────────────────────────────────────────────────────────
// Smart loader — runs the right thing on the right page (yours is already perfect here!)
// ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('pot-grid')) {
    buildIndex();          // we are on index.html
  } else if (document.getElementById('pot-log') || document.getElementById('photo-gallery')) {
    renderPotPage();       // we are on pot.html
  }
});

