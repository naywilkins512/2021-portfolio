
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

function init() {


    // cursor controller

    gsap.set('.follower', { xPercent: -50, yPercent: -50 });
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

    var follow = document.querySelector('.follower');
    var cur = document.querySelector('.cursor');

    window.addEventListener('mousemove', e => {
        gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
        gsap.to(follow, 0.3, { x: e.clientX, y: e.clientY });
    });

    // end cursor controller



    //timeline

    tl.from("body", { ease: "linear", autoAlpha: 0 })
        .from(".hi", { ease: "linear", duration: 1 })
        .from(".header", { y: -150, duration: 2.5 }, "-=.4")
        .from(".bio", { y: 40, duration: 1, ease: "power4" }, "-=1")
        .from(".scroll", { y: 40, duration: 1, ease: "power4" }, "+=0.2")

        // to be scrolltriggered

        // .from("#project-header", { y: 100, opacity: 0})
        // .to(".hi", { y: -100, opacity: 0, duration: 1 })
        // .to(".header", { y: -250, opacity: 0.5, duration: 4 }, "<.3")
        // .to(".bio", { y: -300, opacity: 0, duration: 4 }, "<.2")
        // .from(".navbar", { opacity: 0, duration: 4 }, "<.2")

    //end timeline

    // to be scrolltriggered

let tl2 = gsap.timeline({  
    scrollTrigger: {
    trigger: "#project-header",
    start: "top 60%%",

}


})

    tl2.from("#project-header", { y: 100, opacity: 0})
        .to(".hi", { y: -100, opacity: 0, duration: 1 })
        .to(".header", { y: -250, opacity: 0.5, duration: 4 }, "<.3")
        .to(".bio", { y: -300, opacity: 0, duration: 4 }, "<.2")
        .from(".navbar", { opacity: 0, duration: 4 }, "<.2")



    gsap.from("#projects > .col-sm", {
        scrollTrigger: {
            trigger: "#projects > .col-sm",
            start: "top 80%"
        },
        y: 100, opacity: 0, ease: "back", stagger: .1, duration: 2
    })


      

}





//load screen function calling

window.addEventListener("load", function (event) {
    init();
})