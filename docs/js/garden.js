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

  const html = entries.map(e => `
    <div class="log-entry">
      <div class="log-date">${formatDate(e.date)}</div>
      <div class="log-action">
        ${e.action === 'fertilized' ? '🍽️' : e.action === 'watered' ? '💧' : e.action === 'repotted' ? '🪴' : '✨'} 
        ${e.action}
      </div>
      ${e.details ? `<div class="log-details">${e.details}</div>` : ''}
      ${e.note ? `<div class="log-note">✍️ ${e.note}</div>` : ''}
    </div>
  `).join('');

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
    const full = `images/${src}`;
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

// Then just call it at the end of renderPotPage():
// renderPhotosForPot(potId);   ← add this line!

// Run on page load - later commented out
// document.addEventListener('DOMContentLoaded', renderPotPage);

// Smart loader — runs the right thing on the right page
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('pot-grid')) {
    buildIndex();          // we are on index.html
  } else if (document.getElementById('pot-log') || document.getElementById('photo-gallery')) {
    renderPotPage();       // we are on pot.html
  }
});
