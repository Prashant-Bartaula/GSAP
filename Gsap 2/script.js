
const loaderWrapper=document.querySelector("#preloader-wrapper");
const loader=document.querySelector("#loader");
document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(() => {
       const t1=gsap.timeline();
        t1.to(loader, {
            scale:0,
            duration:.7,
            ease:'power2.out'
        }).to(loaderWrapper, {
            y:'-100%',
            duration:.7,
            ease:'power2.out',
        }, '+.5')
   }, 4000);
})