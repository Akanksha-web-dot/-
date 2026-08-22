/* =====================================================
   BATMAN BIRTHDAY - SCRIPT
===================================================== */


/* =========================
   GET ELEMENTS
========================= */

const flyButton =
    document.getElementById("flyButton");

const closeButton =
    document.getElementById("closeButton");


/* =========================
   FLY BUTTON
========================= */

if (flyButton) {

    flyButton.addEventListener(
        "click",
        function () {

            // Prevent double clicking
            flyButton.disabled = true;

            // Open Batman doors
            document.body.classList.add("open");

            // Create massive bat explosion
            createBatExplosion();

            // Create another wave of bats
            setTimeout(function () {

                createBatExplosion();

            }, 700);

        }
    );

}


/* =========================
   BAT EXPLOSION
========================= */

function createBatExplosion() {

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const bat =
            document.createElement("div");


        bat.innerHTML = "🦇";


        /* Position */

        bat.style.position =
            "fixed";

        bat.style.left =
            "50%";

        bat.style.top =
            "50%";


        /* Layer */

        bat.style.zIndex =
            "100";


        /* Size */

        bat.style.fontSize =
            (
                15 +
                Math.random() * 45
            ) + "px";


        /* Prevent clicking */

        bat.style.pointerEvents =
            "none";


        /* Make bats look darker */

        bat.style.filter =
            "drop-shadow(0 0 8px rgba(245,197,24,.7))";


        document.body.appendChild(
            bat
        );


        /* =========================
           RANDOM MOVEMENT
        ========================= */

        const x =
            (
                Math.random() - 0.5
            ) * 1800;


        const y =
            (
                Math.random() - 0.5
            ) * 1200;


        const rotation =
            (
                Math.random() - 0.5
            ) * 720;


        const scale =
            0.5 +
            Math.random() * 2;


        const duration =
            1300 +
            Math.random() * 1800;


        /* =========================
           ANIMATION
        ========================= */

        const animation =
            bat.animate(

                [

                    /* START */

                    {

                        transform:
                            `
                            translate(-50%, -50%)
                            scale(0.1)
                            rotate(0deg)
                            `,

                        opacity: 0

                    },


                    /* EXPLOSION */

                    {

                        transform:
                            `
                            translate(-50%, -50%)
                            translate(${x}px, ${y}px)
                            scale(${scale})
                            rotate(${rotation}deg)
                            `,

                        opacity: 1

                    },


                    /* FLY AWAY */

                    {

                        transform:
                            `
                            translate(-50%, -50%)
                            translate(${x * 1.5}px, ${y * 1.5}px)
                            scale(0.2)
                            rotate(${rotation * 1.5}deg)
                            `,

                        opacity: 0

                    }

                ],


                {

                    duration:
                        duration,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"

                }

            );


        /* =========================
           REMOVE BAT
        ========================= */

        animation.finished
            .then(function () {

                bat.remove();

            })
            .catch(function () {

                bat.remove();

            });

    }

}


/* =========================
   CLOSE TRANSMISSION
========================= */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        function () {

            /* Close doors */

            document.body.classList.remove(
                "open"
            );


            /* Enable FLY again */

            if (flyButton) {

                flyButton.disabled =
                    false;

            }


            /* Return to top */

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================
   EXTRA BAT WAVE
========================= */

/*
   Every few seconds,
   a few bats fly across
   the screen.
*/

function randomBatWave() {

    if (
        !document.body.classList.contains(
            "open"
        )
    ) {

        return;

    }


    const bat =
        document.createElement("div");


    bat.innerHTML = "🦇";


    bat.style.position =
        "fixed";


    bat.style.left =
        "-80px";


    bat.style.top =
        (
            10 +
            Math.random() * 80
        ) + "vh";


    bat.style.fontSize =
        (
            20 +
            Math.random() * 35
        ) + "px";


    bat.style.zIndex =
        "6";


    bat.style.pointerEvents =
        "none";


    bat.style.filter =
        "drop-shadow(0 0 5px black)";


    document.body.appendChild(
        bat
    );


    const distance =
        window.innerWidth + 200;


    const duration =
        4000 +
        Math.random() * 5000;


    const animation =
        bat.animate(

            [

                {

                    transform:
                        "translateX(0) translateY(0) rotate(-15deg)",

                    opacity: 0

                },

                {

                    transform:
                        `
                        translateX(${distance * 0.45}px)
                        translateY(-80px)
                        rotate(15deg)
                        `,

                    opacity: 1

                },

                {

                    transform:
                        `
                        translateX(${distance}px)
                        translateY(80px)
                        rotate(-15deg)
                        `,

                    opacity: 0

                }

            ],

            {

                duration:
                    duration,

                easing:
                    "ease-in-out"

            }

        );


    animation.finished
        .then(function () {

            bat.remove();

        })
        .catch(function () {

            bat.remove();

        });

}


/* =========================
   CONTINUOUS BAT WAVES
========================= */

setInterval(
    randomBatWave,
    3500
);
