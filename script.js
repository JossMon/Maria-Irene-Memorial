
const toggle=document.getElementById('langToggle');let lang='es';
function setLang(next){lang=next;document.documentElement.lang=lang;document.querySelectorAll('[data-es][data-en]').forEach(el=>el.textContent=el.dataset[lang]);toggle.textContent=lang==='es'?'EN':'ES';}
toggle.addEventListener('click',()=>setLang(lang==='es'?'en':'es'));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const box=document.getElementById('lightbox'),boxImg=document.getElementById('lightboxImg');
document.querySelectorAll('[data-full]').forEach(el=>el.addEventListener('click',()=>{boxImg.src=el.dataset.full;box.showModal()}));
document.getElementById('closeLightbox').addEventListener('click',()=>box.close());
box.addEventListener('click',e=>{if(e.target===box)box.close()});
