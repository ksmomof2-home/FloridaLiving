---
layout: default
title: Avocado Tree
---
<div class="plant-hero">
  <a href="/FloridaLiving/assets/avocado.jpg" target="_blank">
    <img src="/FloridaLiving/assets/avocado.jpg" alt="Avocado Tree">
  </a>

  <div class="plant-facts">
    <h3>Quick Facts</h3>
    <ul>
      <li><strong>USDA zones:</strong> 9b–11 (protect below 28 °F)</li>
      <li><strong>Sun:</strong> Full sun to part shade</li>
      <li><strong>Water:</strong> Average — never soggy</li>
      <li><strong>Height in pot:</strong> 8–12 ft</li>
      <li><strong>Fruit in:</strong> 3–8 years from grafted tree</li>
    </ul>
    <p><strong>Primary Use:</strong> Culinary → guacamole, toast, salads</p>
  </div>
</div>

<div class="full-width">
  <h3>Wildlife Supported</h3>
  <ul>
    <li>Nectar for bees</li>
    <li>Occasional giant swallowtail host</li>
  </ul>

  <h3>Pests to Watch</h3>
  <ul>
    <li>Scale</li>
    <li>Spider mites (rare)</li>
  </ul>

  <h3>Unusual / Fun Facts</h3>
  <ul>
    <li>Avocados have “A” and “B” flower types — ours is a mystery!</li>
  </ul>

  <h3>Local Care Tips (The Villages 9b)</h3>
  <ul>
    <li>Fertilize with citrus/avocado food</li>
    <li>Mulch with pine bark</li>
    <li>Wrap trunk + frost cloth below 28 °F</li>
    <li>Current status: Pos 5 — fertilized, foiled, mulched Nov 20</li>
  </ul>
</div>

<h3>Growth Over Time</h3>
<table class="log-table table-growth">
  <tr><th>Date</th><th>Photo</th><th>Notes</th></tr>
  <tr>
    <td><strong>Nov 20, 2025</strong></td>
    <td><a href="/FloridaLiving/assets/avocado.jpg" target="_blank">
      <img src="/FloridaLiving/assets/avocado.jpg" width="100">
    </a></td>
    <td>Fertilized, foiled, mulched — growing strong</td>
  </tr>
</table>

<h3>Harvest Log</h3>
<table class="log-table table-harvest">
  <tr><th>Date</th><th>Count</th><th>Notes</th></tr>
</table>

<h3>Pests Encountered</h3>
<table class="log-table table-pests">
  <tr><th>Date</th><th>Pest</th><th>Treatment</th></tr>
</table>

<h3>Notes from the Gardener</h3>
<table class="log-table table-notes">
  <tr><th>Date</th><th>Note</th></tr>
  <tr><td>Nov 20, 2025</td><td>Future guac factory!</td></tr>
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
{% assign plants = site.data.plant-order %}
{% assign current = page.url | split:'/' | last | split:'.' | first %}

{% assign prev_file = '' %}
{% assign prev_name = '' %}
{% assign next_file = '' %}
{% assign next_name = '' %}

{% for plant in plants %}
  {% if plant.file == current %}
    {% assign index = forloop.index0 %}
    {% if index > 0 %}
      {% assign prev = plants[index | minus: 1] %}
      {% if prev.file != '' %}
        {% assign prev_file = prev.file %}
        {% assign prev_name = prev.name %}
      {% endif %}
    {% endif %}
    {% if index < plants.size | minus: 1 %}
      {% assign next = plants[index | plus: 1] %}
      {% if next.file != '' %}
        {% assign next_file = next.file %}
        {% assign next_name = next.name %}
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}

<hr>
{% assign plants = site.data.plant-order %}
{% assign current = page.url | split:'/' | last | split:'.' | first %}

{% assign prev = null %}
{% assign next = null %}

{% for plant in plants %}
  {% if plant.file == current %}
    {% assign current_index = forloop.index0 %}
    {% assign prev_index = current_index | minus: 1 %}
    {% assign next_index = current_index | plus: 1 %}
    {% if prev_index >= 0 %}
      {% assign prev = plants[prev_index] %}
    {% endif %}
    {% if next_index < plants.size %}
      {% assign next = plants[next_index] %}
    {% endif %}
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
