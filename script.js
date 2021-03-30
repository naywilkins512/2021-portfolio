
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hi",
        start: "top top",
        scrub: 2

    }


});

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
        .from(".scroll", { duration: 2 }, "+=0.2")

    // to be scrolltriggered

    // .from("#project-header", { y: 100, opacity: 0})
    // .to(".hi", { y: -100, opacity: 0, duration: 1 })
    // .to(".header", { y: -250, opacity: 0.5, duration: 4 }, "<.3")
    // .to(".bio", { y: -300, opacity: 0, duration: 4 }, "<.2")
    // .from(".navbar", { opacity: 0, duration: 4 }, "<.2")

    //end timeline

    // to be scrolltriggered



    tl2.to(".hi", { opacity: 0 })
        .to(".header", { duration: 4 }, "<.3")
        .to(".bio", { opacity: 0, duration: 4 }, "<.2")
    // .from(".navbar", { opacity: 0, duration: 4 }, "<1")



    gsap.from("#projects > .col-sm", {
        scrollTrigger: {
            trigger: "#projects > .col-sm",
            start: "top 80%",
            scrub: 2,

        },
        y: 100, opacity: 0, ease: "back", stagger: .1, duration: 2
    });

    gsap.from("#project-header", {
        scrollTrigger: {
            trigger: ".project-header",
            start: "top 60%",
            scrub: true,
        },
        y: 100, opacity: 0
    });


    gsap.from(".panel-2", {
        scrollTrigger: {
            trigger: ".panel-1",
            start: "top top",
            end: "100%",
            scrub:true,
            pin:true,
            anticipatePin:1,
        },
        yPercent: 100
    })

    // gsap.from(".panel-3", {
    //     scrollTrigger: {
    //         trigger: ".panel-2",
    //         start: "top top",
    //         end:"bottom",
    //         scrub:true,
    //         pin:true,
    //         anticipatePin:1,
    //         markers: true
    //     },
    //     xPercent: 100
    // })

}





//load screen function calling

window.addEventListener("load", function (event) {
    init();
})