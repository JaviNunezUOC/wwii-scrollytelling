/* GALLERY.JS — Galería fotográfica con lightbox */

function initGallery() {
  const container = document.getElementById('gallery-container');
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const btnClose  = document.getElementById('lightbox-close');
  const btnPrev   = document.getElementById('lightbox-prev');
  const btnNext   = document.getElementById('lightbox-next');

  if (!container || !DATA.gallery) return;

  let currentIndex = 0;

  /* Generar items de la galería */
  DATA.gallery.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <img src="${item.src}" alt="${item.caption}" loading="lazy">
      <div class="gallery-item__caption">${item.caption}</div>
    `;
    div.addEventListener('click', () => openLightbox(i));
    container.appendChild(div);
  });

  /* Animación de entrada */
  const items = container.querySelectorAll('.gallery-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const all = Array.from(items);
        setTimeout(() => entry.target.classList.add('is-visible'), all.indexOf(entry.target) * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => observer.observe(item));

  /* Lightbox */
  function openLightbox(index) {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function showImage(index) {
    const item = DATA.gallery[index];
    if (!item) return;
    lbImg.src = item.src;
    lbImg.alt = item.caption;
    lbCaption.textContent = item.caption;
  }

  function prevImage() { currentIndex = (currentIndex - 1 + DATA.gallery.length) % DATA.gallery.length; showImage(currentIndex); }
  function nextImage() { currentIndex = (currentIndex + 1) % DATA.gallery.length; showImage(currentIndex); }

  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', prevImage);
  btnNext.addEventListener('click', nextImage);

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // Click fuera de la imagen
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener('DOMContentLoaded', initGallery);
