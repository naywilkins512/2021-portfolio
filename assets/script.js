
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel-1",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub:2,
        pinSpacing: false,

    }


});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel-2",
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        scrub:2,
        pinSpacing: false,

    }


});

function init() {


    // cursor controller

    gsap.set('.follower', { xPercent: -50, yPercent: -50 });
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

    var follow = document.querySelector('.follower');
    var cur = document.querySelector('.cursor');

    window.addEventListener('mousemove', e => {
        gsap.to(cur, 0.6, { x: e.clientX, y: e.clientY });
        gsap.to(follow, 0.3, { x: e.clientX, y: e.clientY });
    });

    // end cursor controller



    //timeline

    tl.from("body", { ease: "linear", autoAlpha: 0 })
        .from(".hi", { ease: "linear", duration: 1 })
        .from(".header", { y: -150, duration: 1 }, "-=.4")
        .from(".bio", { y: 40, duration: 1, ease: "power4" }, "-=1")
        .from(".scroll2", { duration: 2 }, "+=0.2")

    // to be scrolltriggered

    // .from("#project-header", { y: 100, opacity: 0})
    // .to(".hi", { y: -100, opacity: 0, duration: 1 })
    // .to(".header", { y: -250, opacity: 0.5, duration: 4 }, "<.3")
    // .to(".bio", { y: -300, opacity: 0, duration: 4 }, "<.2")
    // .from(".navbar", { opacity: 0, duration: 4 }, "<.2")

    //end timeline

    // to be scrolltriggered



    tl2.from(".panel-2", { opacity: 0}, "<")
    .to(".hi", {opacity:0})
    .to(".header", {opacity:0}, "<")
    .to(".bio", {opacity:0}, "<")
    
       

    tl3.from(".panel-3", {opacity:1, duration:3})

    // .from(".navbar", { opacity: 0, duration: 4 }, "<1")


    gsap.from("#project-header", {
        scrollTrigger: {
            trigger: ".project-header",
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,


        },
        y: 100, opacity: 0
    });


    gsap.from("#projects > .col-sm", {
        scrollTrigger: {
            trigger: "#projects > .col-sm",
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1

        },
        y: 100, opacity: 0, ease: "back", stagger: .1, duration: 2
    });

    gsap.from(".contact-header", {
        scrollTrigger: {
            trigger: ".contact-header",
            start: "top 90%",
            end: "bottom bottom",
            scrub: 1,



        },
        y: 100, opacity: 0
    });



    gsap.from(".navbar", {
        scrollTrigger: {
            trigger: ".navbar",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,



        },
        y: 100, opacity: 0
    });



    // gsap.from(".panel-2", {
    //     scrollTrigger: {
    //         trigger: ".panel-1",
    //         start: "top top",
    //         end: "100%",
    //         scrub:true,
    //         pin:true,
    //         anticipatePin:1,
    //     },
    //     yPercent: 100
    // })


    // gsap.from(".panel-3", {
    //     scrollTrigger: {
    //         trigger: ".panel-2",
    //         start: "top top",
    //         end: "100%",
    //         scrub:true,
    //         pin:true,
    //         anticipatePin:1,
    //     },
    //     yPercent: 100
    // })

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


document.getElementById("top").addEventListener( "click", () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
}));
  


//load screen function calling

window.addEventListener("load", function (event) {
    init();
})