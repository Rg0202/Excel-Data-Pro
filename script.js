const nav=document.querySelector("#mainNav"),toggle=document.querySelector(".menu-toggle");
toggle?.addEventListener("click",()=>nav?.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-window.innerHeight,p=document.querySelector(".scroll-progress");if(p)p.style.width=(h?window.scrollY/h*100:0)+"%"});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity="1";e.target.style.transform="translateY(0)"}}),{threshold:.12});
document.querySelectorAll(".area-card,.latest-grid article,.resource-feature,.video-layout,.action-card,.premium-card,.decision-flow>div").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(18px)";el.style.transition="opacity .6s ease,transform .6s ease";observer.observe(el)});