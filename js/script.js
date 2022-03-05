gsap.registerPlugin(ScrollTrigger);

// visual timeline
const masterTl = gsap.timeline();

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
        start: "51% center",
        // end: "100% 0%",
        scrub: true,
        pin: "#visualize-one .bottom-sec .img-grid",
    });
}
function visualImgOneLg() {
    const mainTl = gsap.timeline();
    const one = gsap.timeline().fromTo(
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
    );

    mainTl.add(one);

    ScrollTrigger.create({
        animation: mainTl,
        trigger: "#visualize-one",
        endTrigger: "#visualize-one",
        start: "51% center",
        // end: "100% 0%",
        scrub: true,
        // markers: true
    });
}

// control timeline ----------------------------------------

function controlXXl() {
    const tl = gsap.timeline();
    tl.fromTo(
        "#control-one .img-grid .round",
        {
            x: "0",
            y: "0",
        },
        {
            x: "-580px",
            y: "250px",
            scale: "1.2",
            duration: 1,
        }
    )
        .fromTo(
            "#control-one .img-grid .form",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-80px",
                y: "115px",
                scale: "0.9",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#control-one .img-grid .sq-one",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-286px",
                y: "-128px",
                scale: "0.9",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#control-one .img-grid .sq-two",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-503px",
                y: "-306px",
                scale: "0.9",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#control-one .img-grid .sq-three",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-392px",
                y: "-367px",
                scale: "0.9",
                duration: 1,
            },
            "<"
        );

    ScrollTrigger.create({
        animation: tl,
        trigger: "#control-one",
        endTrigger: "#control-one",
        start: "51% center",
        // end: "100% 0%",
        scrub: true,
        pin: "#control-one .bottom-sec .img-grid",
    });
}
function controlXl() {
    const tl = gsap.timeline();
    tl.fromTo(
        "#control-one .img-grid .round",
        {
            x: "0",
            y: "0",
        },
        {
            x: "-500px",
            y: "250px",
            scale: "1.2",
            duration: 1,
        }
    )
        .fromTo(
            "#control-one .img-grid .form",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-100px",
                y: "155px",
                scale: "0.9",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#control-one .img-grid .sq-one",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-250px",
                y: "-122px",
                scale: "1.1",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#control-one .img-grid .sq-two",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-433px",
                y: "-300px",
                scale: "1.05",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#control-one .img-grid .sq-three",
            {
                x: "0",
                y: "0",
            },
            {
                x: "-342px",
                y: "-360px",
                scale: "1.05",
                duration: 1,
            },
            "<"
        );

    ScrollTrigger.create({
        animation: tl,
        trigger: "#control-one",
        endTrigger: "#control-one",
        start: "51% center",
        // end: "100% 0%",
        scrub: true,
        pin: "#control-one .bottom-sec .img-grid",
        markers: true,
    });
}

// illuminate timeline ----------------------------------------

function illuminateXXl() {
    const tl = gsap.timeline();
    tl.fromTo(
        "#illuminate-one .img-grid .tyers",
        {
            x: "0",
            y: "0",
        },
        {
            y: "-70px",
            x: "-22px",
            scale: "0.95",
            duration: 1,
        }
    )
        .fromTo(
            "#illuminate-one .img-grid .blur-img",
            {
                x: "0",
                y: "0",
            },
            {
                y: "-155px",
                x: "-418px",
                scale: "0.58",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#illuminate-one .img-grid .cards",
            {
                x: "0",
                y: "0",
            },
            {
                y: "8px",
                x: "-997px",
                scale: "1",
                duration: 1,
            },
            "<"
        );

    ScrollTrigger.create({
        animation: tl,
        trigger: "#illuminate-one",
        endTrigger: "#illuminate-one",
        markers: true,
        start: "51% center",
        // end: "100% 0%",
        scrub: true,
        pin: "#illuminate-one .bottom-sec .img-grid",
    });
}

function illuminateXl() {
    const tl = gsap.timeline();
    tl.fromTo(
        "#illuminate-one .img-grid .tyers",
        {
            x: "0",
            y: "0",
        },
        {
            y: "-70px",
            x: "-22px",
            scale: "0.95",
            duration: 1,
        }
    )
        .fromTo(
            "#illuminate-one .img-grid .blur-img",
            {
                x: "0",
                y: "0",
            },
            {
                y: "-111px",
                x: "-390px",
                scale: "0.5",
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#illuminate-one .img-grid .cards",
            {
                x: "0",
                y: "0",
            },
            {
                y: "35px",
                x: "-860px",
                scale: "1.02",
                duration: 1,
            },
            "<"
        );

    ScrollTrigger.create({
        animation: tl,
        trigger: "#illuminate-one",
        endTrigger: "#illuminate-one",
        markers: true,
        start: "51% center",
        // end: "100% 0%",
        scrub: true,
        pin: "#illuminate-one .bottom-sec .img-grid",
    });
}

ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
        masterTl.add(visualImgOneLg());
    },
    "(min-width: 1200px)": function () {
        masterTl.add(visualImgOneXl()).add(controlXl()).add(illuminateXl());
    },
    "(min-width: 1400px)": function () {
        masterTl.add(visualImgOneXXl()).add(controlXXl()).add(illuminateXXl());
    },
});
