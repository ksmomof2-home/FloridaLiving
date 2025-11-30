---
layout: default
title: Bronze Fennel (Extra)
---
<div class="plant-hero">
  <a href="/FloridaLiving/assets/pot9a.jpg" target="_blank">
    <img src="/FloridaLiving/assets/pot9a.jpg" alt="Extra Bronze Fennel">
  </a>

  <div class="plant-facts">
    <h3>Quick Facts</h3>
    <ul>
      <li><strong>USDA zones:</strong> All (annual/biennial)</li>
      <li><strong>Sun:</strong> Full sun to part shade</li>
      <li><strong>Water:</strong> Average</li>
      <li><strong>Height:</strong> 3–5 ft</li>
    </ul>
    <p><strong>Primary Use:</strong> Extra Black Swallowtail host</p>
  </div>
</div>

<div class="full-width">
  <h3>Wildlife Supported</h3>
  <ul>
    <li>Black Swallowtail host</li>
    <li>Nectar for bees & butterflies</li>
  </ul>

  <h3>Local Care Tips (The Villages 9b)</h3>
  <ul>
    <li>Small pot 7a — bonus swallowtail patch</li>
    <li>Currently occupied by basil (moving to Pos 11 soon)</li>
  </ul>
</div>

<h3>Growth Over Time</h3>
<table class="log-table table-growth">
  <tr><th>Date</th><th>Photo</th><th>Notes</th></tr>
  <tr>
    <td><strong>Nov 23, 2025</strong></td>
    <td><a href="/FloridaLiving/assets/pot9a.jpg" target="_blank">
      <img src="/FloridaLiving/assets/pot9a.jpg" width="100">
    </a></td>
    <td>Waiting for bronze fennel — basil temporary resident</td>
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
