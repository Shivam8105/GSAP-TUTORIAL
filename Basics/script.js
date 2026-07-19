// gsap.to("#box",{
//     x: 1000,
//     duration: 2,
//     delay: 1
// })

// gsap.from("h1", {
//     opacity: 0,
//     duration: 1,
//     y: 30,
//     delay: 1,
//     stagger: 1
// });

gsap.to("#box1", {
    x: 1200,
    duration: 1.5,
    delay: 1,
    rotate: 360,
});

gsap.to("#box2", {
    x: 1200,
    duration: 1.5,
    delay: 2.5,
    backgroundColor: "yellow",
});

gsap.to("#box3", {
    x: 1200,
    scale: 0.5,
    borderRadius: "50%",
    duration: 1.5,
    backgroundColor: "blue",
    delay: 4
});

var tl = gsap.timeline();

tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5
})


tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})

tl.from("h1", {
    y: 20,
    opacity: 0,
    scale: 0.2,
    duration: 0.2
})



