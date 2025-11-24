**---
layout: default
title: {{ PLANT NAME }}
---
<div class="plant-hero">
  <img src="/FloridaLiving/assets/{{ photo filename }}" alt="{{ PLANT NAME }}">

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

<div>
<h3>Growth Over Time</h3>
<table class="log-table table-growth">
  <tr><th>Date</th><th>Photo</th><th>Notes</th></tr>
  <tr>
    <td><strong>Nov 22, 2025</strong></td>
    <td><img src="/FloridaLiving/assets/pineapple1.jpg" alt="Just planted"></td>
    <td>Two crowns just planted — rooting begins!</td>
  </tr>
</table>

<h3>Harvest Log</h3>
<table class="log-table table-harvest">
  <tr><th>Date</th><th>Weight</th><th>Notes</th></tr>
  <!-- future rows -->
</table>

<h3>Pests Encountered</h3>
<table class="log-table table-pests">
  <tr><th>Date</th><th>Pest</th><th>Treatment</th></tr>
  <!-- future rows -->
</table>

<h3>Notes from the Gardener</h3>
<table class="log-table table-notes">
  <tr><th>Date</th><th>Note</th></tr>
  <tr><td>Nov 22, 2025</td><td>Planted with love — can't wait for that first pineapple smell!</td></tr>
</table>
</div>
<hr>
<p style="text-align:center;">
  <a href="/FloridaLiving/plants/{{ previous-file }}.html">← Previous: {{ previous-name }}</a> • 
  <a href="/FloridaLiving/plants/{{ next-file }}.html">Next: {{ next-name }} →</a>
  <br><br>
  <a href="/FloridaLiving/plants.html">← All Plants</a> • 
  <a href="/FloridaLiving/backyard.html">Backyard Overview</a>
</p>

<hr>OLDFILE<hr>
# Avocado Tree
**Persea americana** | Lauraceae

<img src = "https://raw.githubusercontent.com/ksmomof2-home/FloridaLiving/main/docs/assets/avocado.jpg?" width=400 alt = "Avocado Tree">

### Quick Facts
- USDA zones: 9b–11 (we protect in winter)
- Sun: Full sun to part shade (Pos 5 – ideal)
- Mature height in 30-gal pot: 8–12 ft
- Fruit: 3–8 years from grafted tree

### Primary Use
- Culinary → guacamole, toast, salads

### Wildlife Supported
- Nectar for bees when flowering
- Occasional giant swallowtail host

### Local Care Tips
- Fertilize with citrus/avocado food every 6–8 weeks
- Mulch with pine bark
- Wrap trunk + frost cloth below 28 °F
- Current status: Pos 5 – fertilized, foiled, mulched Nov 20

<hr>
<div class="plant-nav">
  <p>
    {% if page.prev %}
      ← <a href="{{ page.prev }}">&laquo; Previous: {{ page.prev_name }}</a>
    {% endif %}
    &nbsp; &nbsp; 
    {% if page.next %}
      <a href="{{ page.next }}">Next: {{ page.next_name }} &raquo;</a>
    {% endif %}
  </p>
  <p style="text-align:center; margin-top:1rem;">
    <a href="/FloridaLiving/plants/">← All Plants</a> • 
    <a href="/FloridaLiving/backyard.html">Backyard Overview</a>
  </p>
</div>

[← Back to Backyard](/FloridaLiving/backyard.html)
**
