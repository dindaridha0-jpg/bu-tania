(function(){
 const root=document.documentElement,toggle=document.querySelector('#theme-toggle');
 function apply(value){
  const theme=value==='dark'?'dark':'light',dark=theme==='dark';
  root.dataset.theme=theme;root.style.colorScheme=theme;
  toggle.setAttribute('aria-pressed',String(dark));
  const label=dark?'Aktifkan mode terang':'Aktifkan mode gelap';
  toggle.setAttribute('aria-label',label);toggle.title=label;
  toggle.querySelector('.theme-symbol').textContent=dark?'☾':'☀';
  toggle.querySelector('.theme-current').textContent=dark?'Gelap':'Terang';
  const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=dark?'#0b1520':'#188fd4';
 }
 toggle.addEventListener('click',()=>{
  apply(root.dataset.theme==='dark'?'light':'dark');
  try{localStorage.setItem('uas-theme',root.dataset.theme)}catch(e){}
 });
 window.addEventListener('storage',e=>{if(e.key==='uas-theme')apply(e.newValue)});
 apply(root.dataset.theme);
})();
