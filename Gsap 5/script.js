document.addEventListener("DOMContentLoaded", () => {
    const button=document.querySelector(".button2");
    const overlay=document.querySelector(".overlay");

    window.addEventListener('mousemove', (e)=>{
            const {clientX, clientY}=e;
            const x=Math.round((clientX/window.innerWidth)*100);
            const y=Math.round((clientY/window.innerHeight)*100);

            gsap.to(overlay, {
                // for dynamic values we use  --x. the dynamic custom values are defined in css
                '--x':`${x}%`,
                '--y':`${y}%`,
                duration:.3,
                ease:'sine.out'
            })
    })

    button.addEventListener('click', ()=>{
        console.log('ran')
        overlay.classList.toggle('active');
    })
});