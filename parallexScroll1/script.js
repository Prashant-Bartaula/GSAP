// it is good practice to use functions to load heavty images or svgs for more control over when and how to display the svgs 
function loadSVG () {
    // here when we use fetch to load the svg file, browser will construct an HTTP GET request for the resource located at the URL "city.svg" (which is a relative URL that the browser resolves based on the current page's URL).
    fetch("city.svg")

    // fetch returns a Promise that resolves to the Response object representing the response to the request.
    .then((response) => { 
        //The argument response is an instance of the Response object, which contains information about the network response (e.g., status code, headers).
        //response.text returns response as a plain text in this case string of svg which we use as innerHTML inside div
        return response.text();})
    .then((svg) => {
        console.log(svg);
        document.getElementById('bg_city').innerHTML = svg;

        // preserveAspectRatio  is the name of the SVG attribute you are setting. This attribute is specifically designed for SVG elements to control their scaling behavior.xMid: Aligns the midpoint of the SVG's viewBox (its internal coordinate system) with the midpoint of the viewport along the X-axis.yMid: Aligns the midpoint of the SVG's viewBox with the midpoint of the viewport along the Y-axis.

        //When slice is used, the SVG is scaled uniformly (maintaining its aspect ratio) so that the smallest dimension of the SVG's viewBox completely fills the corresponding dimension of the viewport. If the aspect ratios don't match, this means the content will extend beyond the boundaries of the viewport on the larger dimension, effectively "slicing" off parts of the SVG.

        //this is used because the typical object cover effect is not available in svg, so we use this to make sure the svg fills the entire div without stretching it.This is particularly useful for responsive designs where you want the SVG to adapt to different screen sizes while maintaining its aspect ratio.
        document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice");
        setAnimationScroll();
    })
}
loadSVG();
function setAnimationScroll () {
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    });

    //we use add function of gsap to chain multiple animations  at the same time. and the next add function will wait for the previous one to finish before starting.
    runAnimation.add([

        //second query is the duration of animation in seconds. we can define it inside the braces as well. its just a standard approach.
        gsap.to("#bg_city svg", 2, {
            scale: 1.5
        }),
        gsap.to("#full_city", 2, {
            opacity: 0
        })
    ])
    .add([
        gsap.to("#building_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#wall_front", 2, {
            x: 200, y: 200,
            opacity: 0
        })
    ])
    .add([
        gsap.to("#interior_wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_side_2", 2, {
            opacity: 0
        }),
        gsap.to("#interior_wall_front", 2, {
            opacity: 0
        })
    ]);
}