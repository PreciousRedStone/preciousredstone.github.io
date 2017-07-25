(function (root, doc) {

  function enlargeImage(ev) {
    ev.preventDefault();
    document.body.classList.add('no-scroll');

    var copy = this.cloneNode();
    var lightbox = document.querySelector('.gallery_lightbox');
    var lbImage = document.querySelector('.gallery_lightbox_image');
    var lbClose = document.querySelector('.gallery_lightbox_close');

    lightbox.classList.remove('gallery_lightbox--hidden');
    copy.classList.remove('gallery_image--interactive');
    lbImage.appendChild(copy);

    doc.addEventListener('keyup', function (ev2) {
      if (ev2.which === 27) {
        doc.removeEventListener('keyup', this);
        lbClose.click();
      }
    });

    lbClose.addEventListener('click', function () {
      lbImage.innerHTML = '';
      lightbox.classList.add('gallery_lightbox--hidden');
      this.removeEventListener('click', this);
      document.body.classList.remove('no-scroll');
    }, false);
  }

  doc.querySelectorAll('.gallery_image').forEach(function(img) {
    img.addEventListener('click', enlargeImage, false);
  });

})(window, document);
