// Basit gallery lightbox ve keyboard navigasyonu
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('galleryGrid');
  const items = Array.from(grid.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  let currentIndex = -1;

  function openLightbox(index){
    currentIndex = index;
    const src = items[index].dataset.full || items[index].src;
    lbImage.src = src;
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lightbox.setAttribute('aria-hidden','true');
    lbImage.src = '';
    document.body.style.overflow = '';
  }

  function showNext(){
    if(currentIndex < items.length - 1) openLightbox(currentIndex + 1);
  }
  function showPrev(){
    if(currentIndex > 0) openLightbox(currentIndex - 1);
  }

  items.forEach((img, idx) => {
    img.addEventListener('click', () => openLightbox(idx));
    img.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') openLightbox(idx);
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
  });
  lbNext.addEventListener('click', showNext);
  lbPrev.addEventListener('click', showPrev);

  document.addEventListener('keydown', (e) => {
    if(lightbox.getAttribute('aria-hidden') === 'false'){
      if(e.key === 'Escape') closeLightbox();
      if(e.key === 'ArrowRight') showNext();
      if(e.key === 'ArrowLeft') showPrev();
    }
  });
});