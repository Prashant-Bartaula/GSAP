gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione quas. Ad deserunt vitae dolorum veniam. Corrupti quasi aliquam sint repellendus laudantium eveniet placeat vitae saepe voluptas, facere, non cumque";

  const textArray = text.split("");
  textArray.forEach((letter) => {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.textContent = letter;
    document.querySelector(".text-reveal").appendChild(span);
  });

  gsap.to(".letter", {
    scrollTrigger: {
      trigger: ".text-reveal",//this is the element triggers the animation
      start: "top center",
      end: "bottom 80%",
      scrub: 0.8,//This ties the animation to scroll position, adding a 0.8s smoothing delay. The animation doesn’t just "play" — it progresses as you scroll.
    },
    color: "#1A1D20",
    duration:5,
    stagger: 1,
  });
});
