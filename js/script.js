gsap.registerPlugin(ScrollTrigger);

// visual timeline
const visualTimeline = gsap.timeline();

// visual scroll trigger
// ScrollTrigger.create({
//     animation: visualTimeline,
//     trigger: "#visualize-one",
//     markers: true,
//     start: "51% center",
//     end: "100% 0%",
//     scrub: true,
// });

function visualImgOne() {
    const tl = gsap.timeline();
    tl.fromTo(
        "#visualize-one .img-grid .one",
        {
            x: "0",
            y: "0",
        },
        {
            x: "-598px",
            y: "-88px",
            duration: 1,
        }
    )
    .fromTo(
        "#visualize-one .img-grid .two",
        {
            x: "0",
            y: "0",
        },
        {
            x: "-660px",
            y: "-105px",
            duration: 1,
        }, '<'
    )
    .fromTo(
        "#visualize-one .img-grid .three",
        {
            x: "0",
            y: "0",
        },
        {
            x: "-108px",
            y: "-275px",
            duration: 1,
        }, "<"
    )

    ScrollTrigger.create({
        animation: tl,
        trigger: "#visualize-one",
        endTrigger: "#visualize-one",
        markers: true,
        start: "51% center",
        // end: "100% 0%",
        scrub: true,
        pin: "#visualize-one .bottom-sec .img-grid",
    });
}

visualTimeline.add(visualImgOne());
