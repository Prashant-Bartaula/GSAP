/** @format */
gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({//creating a timeline with scrollTrigger
    scrollTrigger: {
      trigger: ".imageBoard",
      pin: true,//to pin the elements inside imageBoard 
      start: "top top",//top of the imageBoard to the top of the viewport
      end: "+=300%",//to make the animation last for 300% of the height
      scrub: 1,//to make the animation smooth with scrolling event
    },
    defaults: {
      ease: "none",
    },
  })
  .to(
    document.body,
    {
      delay: 0.3,
      backgroundColor: "#f0f0f0",
    },
    "start"//start is used to specify when the animnation should start 
  )
  .to(
    ".upper-container h1",
    {
      scale: 5,
    },
    "start"
  )
  .to(
    ".upper-container h1",
    {
      opacity: 0,
    },
    "start"
  )
  .to(
    "#scaleableImg1",
    {
      scale: 10,
      x: -1500,
    },
    "start"
  )
  .to(
    "#scaleableImg2",
    {
      scale: 10,
      x: -2500,
    },
    "start"
  )
  .to(
    "#scaleableImg3",
    {
      scale: 10,
      x: -2000,
    },
    "start"
  )
  .to(
    "#scaleableImg4",
    {
      scale: 10,
      x: 3000,
    },
    "start"
  )
  
  .to(
    ".cardImage",
    {
      delay: 0.1,
      scale: 5,
    },
    "start"
  )
  .to(
    ".cardImage",
    {
      delay: 0.4,
      opacity: 1,
    },
    "start"
  )
  .to(".scaleableImg", {
    opacity: 0,
  });