
const loaderWrapper=document.querySelector("#preloader-wrapper");
const loader=document.querySelector("#loader");
const headerItem=document.querySelectorAll(".header-item");
document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(() => {
       const t1=gsap.timeline();
        t1.to(loader, {
            scale:2,
            opacity:0,
            duration:2,
            ease:'power2.out'
        }).to(loaderWrapper, {
            y:'-100%',
            duration:.9,
            ease:'power2.out',
        }, '+1').from(headerItem, {
            x:'-50px',
            opacity:0,
            duration:.8,
            ease:'back.out(4)',
            stagger:.2,
        })
   }, 3500);
})