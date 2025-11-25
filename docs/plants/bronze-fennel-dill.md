---
layout: default
title: Bronze Fennel & Dill
---
<div class="plant-hero">
  <a href="/FloridaLiving/assets/dill.jpg" target="_blank">
    <img src="/FloridaLiving/assets/dill.jpg" alt="Bronze Fennel & Dill">
  </a>

  <div class="plant-facts">
    <h3>Quick Facts</h3>
    <ul>
      <li><strong>USDA zones:</strong> All (annual/biennial)</li>
      <li><strong>Sun:</strong> Full sun to part shade</li>
      <li><strong>Water:</strong> Average</li>
      <li><strong>Height:</strong> 4–6 ft</li>
      <li><strong>Let flower!</strong> → caterpillar city</li>
    </ul>
    <p><strong>Primary Use:</strong> Butterfly host → Black Swallowtail</p>
  </div>
</div>

<div class="full-width">
  <h3>Wildlife Supported</h3>
  <ul>
    <li>Only host for Black Swallowtail caterpillars</li>
    <li>Nectar for bees & butterflies</li>
  </ul>

  <h3>Pests to Watch</h3>
  <ul>
    <li>Swallowtail caterpillars → **DO NOT KILL** — they’re the whole point!</li>
  </ul>

  <h3>Unusual / Fun Facts</h3>
  <ul>
    <li>Bronze fennel looks like purple smoke</li>
    <li>Dill smells like pickles</li>
  </ul>

  <h3>Local Care Tips (The Villages 9b)</h3>
  <ul>
    <li>Big pot 6 — main tall patch</li>
    <li>Dill planted Nov 22</li>
    <li>Add bronze fennel when available</li>
  </ul>
</div>

<h3>Growth Over Time</h3>
<table class="log-table table-growth">
  <tr><th>Date</th><th>Photo</th><th>Notes</th></tr>
  <tr>
    <td><strong>Nov 22, 2025</strong></td>
    <td><a href="/FloridaLiving/assets/dill.jpg" target="_blank">
      <img src="/FloridaLiving/assets/dill.jpg" width="100">
    </a></td>
    <td>Dill planted — bronze fennel coming soon</td>
  </tr>
</table>

<h3>Harvest Log</h3>
<table class="log-table table-harvest">
  <tr><th>Date</th><th>Use</th><th>Notes</th></tr>
</table>

<h3>Pests Encountered</h3>
<table class="log-table table-pests">
  <tr><th>Date</th><th>Pest</th><th>Treatment</th></tr>
</table>

<h3>Notes from the Gardener</h3>
<table class="log-table table-notes">
  <tr><th>Date</th><th>Note</th></tr>
  <tr><td>Nov 22, 2025</td><td>Swallowtail buffet loading…</td></tr>
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
