// garden.js – one file to rule them all
async function loadGardenData() {
  const resp = await fetch('../garden-data.json');
  return await resp.json();
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

// Render log for a specific pot page
async function renderLogForPot(potId) {
  const data = await loadGardenData();
  const logDiv = document.getElementById('pot-log');
  const potName = data.pots[potId].name;

  document.title = `${potName} – Garden Log`;
  document.querySelector('h1').textContent = potName;

  const entries = data.log
    .filter(entry => {
      if (entry.pots === "all") return true;
      if (Array.isArray(entry.pots)) return entry.pots.includes(potId);
      return false;
    })
    .reverse(); // newest first

  if (entries.length === 0) {
    logDiv.innerHTML = "<p>No adventures yet… this pot is living its best quiet life.</p>";
    return;
  }

  const html = entries.map(e => `
    <div class="log-entry">
      <div class="log-date">${formatDate(e.date)}</div>
      <div class="log-action">${e.action}</div>
      ${e.details ? `<div class="log-details">${e.details}</div>` : ''}
      ${e.note ? `<div class="log-note">✍️ ${e.note}</div>` : ''}
    </div>
  `).join('');

  logDiv.innerHTML = html;
}

// Render the master "Recent Activity" page
async function renderMasterLog() {
  const data = await loadGardenData();
  const container = document.getElementById('master-log');
  const entries = data.log.slice().reverse();

  const html = entries.map(e => {
    let potList = '';
    if (e.pots === "all") potList = "🌱 <em>everybody!</em>";
    else if (Array.isArray(e.pots)) {
      const names = e.pots.map(id => data.pots[id]?.name || id);
      potList = names.length > 8 ? `${names.slice(0,8).join(', ')} and ${names.length-8} more` : names.join(', ');
    }

    return `
      <div class="master-entry">
        <div class="master-date">${formatDate(e.date)}</div>
        <div class="master-action">${e.action} ${potList}</div>
        ${e.details ? `<div class="master-details">${e.details}</div>` : ''}
        ${e.note ? `<div class="master-note">✦ ${e.note}</div>` : ''}
      </div>
    `;
  }).join('');

  container.innerHTML = html || "<p>Quiet in the garden today…</p>";
}
