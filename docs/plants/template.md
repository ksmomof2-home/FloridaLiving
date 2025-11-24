---
layout: default
title: {{ PLANT NAME }}
---
<div class="plant-hero">
  <a href="/FloridaLiving/assets/{{ photo-filename }}" target="_blank">
    <img src="/FloridaLiving/assets/{{ photo-filename }}" alt="{{ PLANT NAME }} Crown Rooting">
  </a>

  <div class="plant-facts">
    <h3>Quick Facts</h3>
    <ul>
      <li><strong>USDA zones:</strong> {{ zones }}</li>
      <li><strong>Sun:</strong> {{ sun }}</li>
      <li><strong>Water:</strong> {{ water }}</li>
      <li><strong>Height:</strong> {{ height }}</li>
      <li><strong>Spacing:</strong> {{ spacing }}</li>
      <li><strong>Fruit/Harvest:</strong> {{ time }}</li>
    </ul>
    <p><strong>Primary Use:</strong> {{ use }}</p>
  </div>
</div>

<div class="middle-section">
  <h3>Wildlife Supported</h3>
  <ul>
    <li>{{ wildlife-bullet1 }}</li>
    <li>{{ wildlife-bullet2 }}</li>
  </ul>

  <h3>Pests to Watch (The Villages)</h3>
  <ul>
    <li>{{ pests-bullet1 }}</li>
    <li>{{ pests-bullet2 }}</li>
  </ul>

  <h3>Unusual / Fun Facts</h3>
  <ul>
    <li>{{ fun-fact1 }}</li>
    <li>{{ fun-fact2 }}</li>
  </ul>

  <h3>Local Care Tips (The Villages 9b)</h3>
  <ul>
    <li>{{ care-tip1 }}</li>
    <li>{{ care-tip2 }}</li>
  </ul>
</div>

<h3>Growth Over Time</h3>
<table class="log-table growth-table">
  <tr>
    <th>Date</th>
    <th>Photo</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td><strong>Nov 22, 2025</strong></td>
    <td><img src="/FloridaLiving/assets/{{ photo1 }}" width="250"></td>
    <td>{{ first-growth-note }}</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>(Add future rows here)</td>
  </tr>
</table>

<h3>Harvest Log</h3>
<table class="log-table harvest-table">
  <tr>
    <th>Date</th>
    <th>Weight</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>(Add future harvests here)</td>
  </tr>
</table>

<h3>Pests Encountered</h3>
<table class="log-table pests-table">
  <tr>
    <th>Date</th>
    <th>Pest</th>
    <th>Treatment</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>(Add future pest events here)</td>
  </tr>
</table>

<h3>Notes from the Gardener</h3>
<table class="log-table notes-table">
  <tr>
    <th>Date</th>
    <th>Note</th>
  </tr>
  <tr>
    <td>Nov 22, 2025</td>
    <td>{{ first-note }}</td>
  </tr>
  <tr>
    <td></td>
    <td>(Add future notes here)</td>
  </tr>
</table>

<hr>
<p style="text-align:center;">
  <a href="/FloridaLiving/plants/{{ previous-file }}.html">← Previous: {{ previous-name }}</a> • 
  <a href="/FloridaLiving/plants/{{ next-file }}.html">Next: {{ next-name }} →</a>
  <br><br>
  <a href="/FloridaLiving/plants.html">← All Plants</a> • 
  <a href="/FloridaLiving/backyard.html">Backyard Overview</a>
</p>
