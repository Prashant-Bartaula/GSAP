gsap.registerPlugin(CSSRulePlugin);

let buttonIconLeft = CSSRulePlugin.getRule(".menu-icon::before");
let buttonIconRight = CSSRulePlugin.getRule(".menu-icon::after");

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");

  const t1 = gsap.timeline({
    paused: true,
    reversed: true,
    defaults: {
      ease: "power4.in",
      duration: .8
    }
  });

   // Explicitly set the initial background colors because cssRulePlugin has errors with reverse method
//   t1.set([buttonIconLeft, buttonIconRight], {
//     backgroundColor: "black"
//   });

  t1.to(".menu-button", {
    backgroundColor: "black",
    color: "white"
  })
     .fromTo(
      [buttonIconLeft, buttonIconRight],
      { backgroundColor: "black" },   // from
      { backgroundColor: "white" },   // to
      "<"//to start at the same time with previous animation
    )
    .to(".menu-wrapper", {
      transform: "translateX(0%)",
      duration:1
    }, "<") .from(".menu-item", {
      x: -60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.3,
      ease: "power2.out"
    });
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("menu-active");

    if (t1.reversed()) {
      t1.play();
    } else {
      t1.reverse();
    }
  });
});
