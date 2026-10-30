const button=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
function closeMenu(){button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open menu');nav.classList.remove('is-open');}
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('is-open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){closeMenu();button.focus();}});window.matchMedia('(min-width:1101px)').addEventListener('change',closeMenu);document.querySelector('#year').textContent=new Date().getFullYear();
const viewer=document.querySelector('.photo-dialog');
let photoTrigger;
document.querySelectorAll('.photo-open').forEach(trigger=>trigger.addEventListener('click',()=>{
 photoTrigger=trigger;const source=trigger.querySelector('img'),image=viewer.querySelector('img');image.src=trigger.dataset.photo;image.alt=source.alt;viewer.showModal();
}));
viewer.querySelector('.photo-close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
viewer.addEventListener('close',()=>photoTrigger?.focus());
