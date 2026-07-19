// gsap.from("#page1 #box", {
//     rotate: 360,
//     duration: 2,
//     delay: 1,
//     opacity: 0,
//     scale: 0.2
// })

// gsap.from("#page2 #box", {
//     rotate: 360,
//     duration: 2,
//     opacity: 0,
//     scale: 0.2,
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         start: "top 60%"
//     }
// })

// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         start: "top 50%",
//         end: "top 30%",
//         scrub: 3,
//     }
// })

// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         start: "top 50%",
//         end: "top 30%",
//         scrub: 3,
//         pin: true,
//     }
// })


gsap.to("#page1 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        markers: true,
        scrub: 2,
        pin: true,
        start: "top 0%",
        end: "top -150%"
    }
})