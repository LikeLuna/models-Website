$(document).ready(function () {
    $(".content_text1 h1 , .content_text1 h3").lettering();
    let tl = gsap.timeline();
        tl.from(".back img", {
        opacity: 0,
        y: -10,
        duration: 1,
        delay: 0.2,
        });
        tl.from(".content_text1 h1 span ", {
        opacity: 0,
        y: -90,
        duration: 1,
        stagger: 0.1,
        });
        tl.from(".content_text1 h3 span ", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        });
    });
    let tm = gsap.timeline();
        tm.from("#header", {
            delay: 5,
            y: -100,
            duration: 1,
        });
        tm.from("header .logo, header .search", {
            x: -100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.5,
        });
        tm.from(" header ul li a", {
            opacity: 0,
            x: 100,
            duration: 0.5,
            stagger: 0.2,
        });

gsap.from("#img2,#img1,#img3", {
    opacity: 0,
    duration: 1,
    y: 100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#img1,#img2,#img3",
        scroller: "body",
        // markers:true,
        scrub: true,
        start: "top 85%",
        end: "top 50%",
        },
});

gsap.from(".text h1", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".text h1",
        scroller: "body",
        // markers:true,
        start: "top 120%",
        end: "top 110%",
        },
});