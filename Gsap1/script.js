gsap.registerPlugin(CSSRulePlugin);//to use pseudo elements

let t1=gsap.timeline({defaults:{ease:'power4.inOut', duration:2}});//creating a timeline lets you create a sequence of animations. we set the defaults for adding those properties to every animation without having to repeat them 

let flagPoles=CSSRulePlugin.getRule('.content-items-wrapper .card::before')//used to select the pseudo element. the first parameter is the selector which should be same as defined in the css.

t1.to('#text-wrapper', {
    clipPath:'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity:1,
    y:0,
    duration:1.5
}).to('#form-wrapper', {
    clipPath:'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity:1,
    y:0
}, "+.2").from('.card', {
    scaleY:0,
    opacity:0,
    stagger:.2
}, '+.2').from(flagPoles, {
    stagger:.4,
    opacity:0,
    transform:'translateY(100px)'
},"+.2").to('.content-items-wrapper h3', {
    stagger:.1,
    duration:1.2,
     opacity:1,
    y:0
}, '+.7')



