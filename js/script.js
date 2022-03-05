gsap.registerPlugin(ScrollTrigger);

// visual timeline
const visualTimeline = gsap.timeline();

function visualImgOneXXl() {
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
            },
            "<"
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
            },
            "<"
        );

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

function visualImgOneXl() {
    const tl = gsap.timeline();
    tl.fromTo(
        "#visualize-one .img-grid .one",
        {
            x: "0",
            y: "0",
        },
        {
            x: "-508px",
            y: "-105px",
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
                x: "-560px",
                y: "-80px",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#visualize-one .img-grid .three",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-88px",
                y: "-274px",
                duration: 1,
            },
            "<"
        );

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

ScrollTrigger.matchMedia({
    "(min-width: 1200px)": function () {
        visualImgOneXl();
    },
    "(min-width: 1400px)": function () {
        visualTimeline.add(visualImgOneXXl());
    },
});
