// gsap.registerPlugin(ScrollTrigger);

gsap.to('#textswipe', {
    transform : "translateX(-45%)",
    scrollTrigger : {
        trigger : '#textswipesection',
        scroller : 'body',
        duration : 2,
        scrub : 2,
        pin : true
    }
})