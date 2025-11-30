---
layout: default
title: Celebrity Tomato
---
<div class="plant-hero">
  <a href="/FloridaLiving/assets/celebrity-tomato.jpg" target="_blank">
    <img src="/FloridaLiving/assets/celebrity-tomato.jpg" alt="Celebrity Tomato Plants">
  </a>

  <div class="plant-facts">
    <h3>Quick Facts</h3>
    <ul>
      <li><strong>USDA zones:</strong> All (9b loves it!)</li>
      <li><strong>Sun:</strong> Full sun</li>
      <li><strong>Water:</strong> Consistent</li>
      <li><strong>Height:</strong> 3–4 ft (determinate)</li>
      <li><strong>Fruit size:</strong> 8–12 oz globes</li>
      <li><strong>Days to harvest:</strong> 70–75 from transplant</li>
    </ul>
    <p><strong>Primary Use:</strong> Culinary → slicing, salads, sandwiches</p>
  </div>
</div>

<div class="middle-info">
  <h3>Wildlife Supported</h3>
  <p>Nectar for bees • Occasional hornworm food (hand-pick!)</p>

  <h3>Pests to Watch (The Villages)</h3>
  <p>Whiteflies → foil + soap spray + sticky traps<br>
     Hornworms → hand-pick or BT</p>

  <h3>Unusual / Fun Facts</h3>
  <p>Hybrid bred for disease resistance (VFN) — a Florida favorite!</p>

  <h3>Local Care Tips (The Villages 9b)</h3>
  <p>2 plants per 30-gal pot • Mulch with pine bark + foil underneath<br>
     Arriving ~Dec 1, 2025 — Pos 2</p>
</div>

<h3>Growth Over Time</h3>
<table class="log-table table-growth">
  <tr><th>Date</th><th>Photo</th><th>Notes</th></tr>
  <tr><td><strong>Dec 2025</strong></td><td><img src="/FloridaLiving/assets/celebrity-tomato.jpg" width="250"></td><td>Two plants arriving — let’s grow!</td></tr>
</table>

<h3>Harvest Log</h3>
<table class="log-table table-harvest">
  <tr><th>Date</th><th>Weight</th><th>Notes</th></tr>
</table>

<h3>Pests Encountered</h3>
<table class="log-table table-pests">
  <tr><th>Date</th><th>Pest</th><th>Treatment</th></tr>
</table>

<h3>Notes from the Gardener</h3>
<table class="log-table table-notes">
  <tr><th>Date</th><th>Note</th></tr>
  <tr><td>Nov 23, 2025</td><td>Ready for the tomato flood!</td></tr>
</table>

<hr>
{% assign plants = site.data.plant-order %}
{% assign current = page.url | split:'/' | last | split:'.' | first %}

{% for plant in plants %}
  {% if plant.file == current %}
    {% assign index = forloop.index0 %}
    {% assign prev = plants[index | minus: 1] %}
    {% assign next = plants[index | plus: 1] %}
  {% endif %}
{% endfor %}

<hr>
<p style="text-align:center; font-size:1.1rem;">
  {% if prev %}
    <a href="/FloridaLiving/plants/{{ prev.file }}.html">← Previous: {{ prev.name }}</a>
  {% else %}
    <span style="color:#999;">← First Plant</span>
  {% endif %}
  • 
  {% if next %}
    <a href="/FloridaLiving/plants/{{ next.file }}.html">Next: {{ next.name }} →</a>
  {% else %}
    <span style="color:#999;">Last Plant →</span>
  {% endif %}
  <br><br>
  <a href="/FloridaLiving/plants.html">← All Plants</a> • 
  <a href="/FloridaLiving/backyard.html">Backyard Overview</a>
</p>
