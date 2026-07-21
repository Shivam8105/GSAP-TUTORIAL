var main = document.getElementById("main");
var cursor = document.getElementById("cursor");
var imageDiv = document.getElementById("image");

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})

imageDiv.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale: 2
    })
})


imageDiv.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale: 1
    })
})


