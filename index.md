---
layout: page
class: home
---

<div class="masthead">  
  <h1 class="masthead_heading">Hi, I am Ruby
    <div class="masthead_subheading">Artist based in London Borough of Hounslow</div>
   </h1>
  
  <p class="masthead_description">I love working with <a href="https://en.wikipedia.org/wiki/Henna" target="_blank">Henna</a> and Face painting. I also draw, sketch and paint in variety of mediums covering subjects mostly from landscapes and abstract ideas.</p>
  <p class="masthead_description">You can enquire about anything related to my work by writing at <a href="mailto:ruby@preciousredstone.com">ruby@preciousredstone.com</a> and view my work by visiting Facebook pages for <a href="https://facebook.com/PRSArtGallery/photos">PRS Art Gallery</a> and <a href="https://facebook.com/HennaByRuby/photos">Henna &amp; Face paint by Ruby</a>.</p>
</div>

div.contact

<div id="hire" class="hire">
  <h2 class="hire_heading">Hire me for:</h2>
  <ul class="hire_services">
    <li>Seasonal/Occasional/Bridal Henna art, tattoos</li>
    <li>Face painting at Birthday parties or social events</li>
    <li>Handmade paintings</li>
    <li>Glitter tattoos</li>
    <li>Bespoke artwork for home or workplace</li>
  </ul>
</div>


<div id="gallery" class="gallery">
  <h2 class="gallery_heading">Gallery</h2>
  <p class="gallery_description">Here is some of my work</p>
  {% assign artWork = site.static_files | where: "gallery", true %}
  {% for art in artWork %}
    <img src="{{ art.path | prepend: site.url }}" alt="{{ art.basename }}" class="gallery_image img-responsive">
  {% endfor %}
</div>
