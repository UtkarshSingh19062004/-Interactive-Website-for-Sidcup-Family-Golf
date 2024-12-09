var cur=document.querySelector("#cursor")
var eff=document.querySelector("#cursoreffect")
document.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x-7+"px"
    cur.style.top=dets.y-7+"px"
    eff.style.left=dets.x-150+"px"
    eff.style.top=dets.y-150+"px"
    
})
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:"#nav",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start:"top-30%",
        end:"top-100vh",
        scrub:2,
    }
})
gsap.from("#aboutus img,#aboutus-in", {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2,
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1.,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 65%",
        scrub:1,
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        scrub:3,
        start:"top 55%",
        end:"top 45%",

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        scrub:3,
        start:"top 55%",
        end:"top 45%",

    }
})
gsap.from("#page6 h1" , {
    y:50,
    scrollTrigger:{
        trigger:"#page6 h1",
        scroller:"body",
        scrub:3,
        start:"top 75%",
        end:"top 70%",
    }
})
