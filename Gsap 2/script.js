
const loaderWrapper=document.querySelector("#preloader-wrapper");
const loader=document.querySelector("#loader");
const headerItem=document.querySelectorAll(".header-item");
const textWrapperItem=document.querySelectorAll(".text-wrapper-item");
const clippyItem=document.querySelectorAll(".clippyItem");
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
        }, '+1').from('#hero', {
            scale:1.1,
            duration: 1,
        }, '+1').from(headerItem, {
            x:'-50px',
            opacity:0,
            duration:1.7,
            ease:'back.out(2)',
            stagger:.2,
        }, '+1.5').from(textWrapperItem, {
            opacity:0,
            y:'40px',
            duration:1.5,
            ease:'power2.out',
        }, '+2').from(clippyItem, {
            clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            duration:1.5,
        }, '<')//start at the same time as the previous one. give value 0 if you want to start at the starting of the timeline.
   }, 3500);
})