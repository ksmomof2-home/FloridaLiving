---
layout: default
title: Basil (Genovese + Thai)
---
<div class="plant-hero">
  <a href="/FloridaLiving/assets/basil.jpg" target="_blank">
    <img src="/FloridaLiving/assets/basil.jpg" alt="Basil Plants">
  </a>

  <div class="plant-facts">
    <h3>Quick Facts</h3>
    <ul>
      <li><strong>USDA zones:</strong> All (annual)</li>
      <li><strong>Sun:</strong> Full sun</li>
      <li><strong>Water:</strong> Average</li>
      <li><strong>Height:</strong> 18–30 inches</li>
      <li><strong>Harvest:</strong> Pinch tips regularly</li>
    </ul>
    <p><strong>Primary Use:</strong> Culinary → pesto, Thai curries, caprese</p>
  </div>
</div>

<div class="full-width">
  <h3>Wildlife Supported</h3>
  <ul>
    <li>Nectar for bees when flowering</li>
  </ul>

  <h3>Pests to Watch</h3>
  <ul>
    <li>Whiteflies → soap spray</li>
  </ul>

  <h3>Unusual / Fun Facts</h3>
  <ul>
    <li>Thai basil has purple stems and anise flavor — perfect for pho!</li>
  </ul>

  <h3>Local Care Tips (The Villages 9b)</h3>
  <ul>
    <li>Pos 11 final destination</li>
    <li>Current basil in small pot 7a → moving soon</li>
  </ul>
</div>

<h3>Growth Over Time</h3>
<table class="log-table table-growth">
  <tr><th>Date</th><th>Photo</th><th>Notes</th></tr>
  <tr>
    <td><strong>Nov 22, 2025</strong></td>
    <td><a href="/FloridaLiving/assets/basil.jpg" target="_blank">
      <img src="/FloridaLiving/assets/basil.jpg" width="100">
    </a></td>
    <td>Basil thriving in small pot 7a — moving to big pot 11 soon</td>
  </tr>
</table>

<h3>Harvest Log</h3>
<table class="log-table table-harvest">
  <tr><th>Date</th><th>Amount</th><th>Notes</th></tr>
</table>

<h3>Pests Encountered</h3>
<table class="log-table table-pests">
  <tr><th>Date</th><th>Pest</th><th>Treatment</th></tr>
</table>

<h3>Notes from the Gardener</h3>
<table class="log-table table-notes">
  <tr><th>Date</th><th>Note</th></tr>
  <tr><td>Nov 22, 2025</td><td>Pesto season loading…</td></tr>
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
