const toggle = document.getElementById('langToggle');
let lang = 'es';
function setLanguage(next){
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  toggle.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
}
toggle.addEventListener('click',()=>setLanguage(lang === 'es' ? 'en' : 'es'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('[data-full]').forEach(btn => btn.addEventListener('click',()=>{
  lightboxImg.src = btn.dataset.full;
  lightboxImg.alt = btn.querySelector('img')?.alt || '';
  lightbox.showModal();
}));
document.getElementById('closeLightbox').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',e=>{ if(e.target===lightbox) lightbox.close(); });
