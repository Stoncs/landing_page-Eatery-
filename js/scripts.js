let popupCloser=document.querySelector(".popup__closer"),popup=document.querySelector(".popup"),backdrop=document.querySelector(".backdrop");function myFunction(){popup.classList.toggle("popup__show"),backdrop.classList.toggle("backdrop__show"),document.body.style.overflow="hidden"}setTimeout((()=>myFunction()),2e3),popupCloser.addEventListener("click",(()=>{popup.classList.toggle("popup__show"),backdrop.classList.toggle("backdrop__show"),document.body.style.overflow=""})),document.addEventListener("DOMContentLoaded",(()=>{const e=new Date(2022,11,31);let o=null;const t=()=>{const t=e-new Date;t<=0&&clearInterval(o);const s=t>0?Math.floor(t/1e3/60/60/24):0,p=t>0?Math.floor(t/1e3/60/60)%24:0,u=t>0?Math.floor(t/1e3/60)%60:0,d=t>0?Math.floor(t/1e3)%60:0;n.textContent=s<10?"0"+s:s,c.textContent=p<10?"0"+p:p,r.textContent=u<10?"0"+u:u,l.textContent=d<10?"0"+d:d},n=document.querySelector(".days"),c=document.querySelector(".hours"),r=document.querySelector(".minutes"),l=document.querySelector(".seconds");t(),o=setInterval(t,1e3)}));