gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', ()=>{
    const scrollWrapper=Array.from(document.querySelectorAll('.scroll-wrapper'));
    scrollWrapper.forEach((wrapper, index)=>{
        console.log('run')
        const [xStart, xEnd]=index%2===0 ? ['100%', (wrapper.scrollWidth- wrapper.offsetWidth)*-1]:[wrapper.scrollWidth*-1, 0];
        gsap.fromTo(wrapper, {x:xStart},{
            x:xEnd,
            scrollTrigger:{
                trigger: '.main-container',
                scrub: 1,
            },

        })
    })
})