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

<div class="row">
  <div id="hire" class="col-sm-4 col-sm-offset-1 hire">
    <h2 class="hire_heading">What I offer</h2>
    <ul class="list-unstyled hire_services">
      <li>Seasonal/Occasional/Bridal Henna art, tattoos</li>
      <li>Face painting at Birthday parties or social events</li>
      <li>Handmade paintings</li>
      <li>Glitter tattoos</li>
      <li>Bespoke artwork for home or workplace</li>
    </ul>
  </div>

  <div id="contact" class="col-sm-4 col-sm-offset-2 contact">
    <h2 class="contact_heading">Get in touch</h2>
    <ul class="list-unstyled contact_details">
      <li><a href="mailto:ruby@preciousredstone.com">ruby@preciousredstone.com</a></li>
      <li><a href="tel:07597081126">07597 081 126</a></li>
      <li><a href="https://www.instagram.com/hennabyrubylondon">Visit my page on Instagram</a></li>
      <li><a href="https://www.facebook.com/hennabyruby">Visit my page on Facebook</a></li>
    </ul>
  </div>
</div>

<hr>

<div id="gallery" class="gallery">
  <h2 class="gallery_heading">Gallery</h2>
  <p class="gallery_description">Here is some of my work</p>
  {% assign artWork = site.static_files | where: "gallery", true %}
  {% for art in artWork %}
    <div class="gallery_image_holder js-lazy-load" title="{{ art.basename }}" data-src="{{ art.path | prepend: site.url }}"></div>
  {% endfor %}
  <div class="gallery_lightbox gallery_lightbox--hidden">
    <button class="gallery_lightbox_close" type="button">&times;</button>
    <div class="gallery_lightbox_image"></div>
  </div>
</div>
