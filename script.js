/* ==========================================
   BATMAN BIRTHDAY EXPERIENCE
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const flyButton =
    document.getElementById("flyButton");

const closeButton =
    document.getElementById("closeButton");

const lightning =
    document.querySelector(".lightning");


/* ==========================================
   FLY BUTTON
========================================== */

flyButton.addEventListener("click", () => {

    /* Screen flash */

    lightning.classList.remove("flash");

    void lightning.offsetWidth;

    lightning.classList.add("flash");


    /* Add cinematic opening */

    document.body.classList.add("opened");


    /* Create a swarm of bats */

    createBatSwarm();


    /* More bats after a short delay */

    setTimeout(() => {

        createBatSwarm();

    }, 800);


    /* Scroll to birthday card */

    setTimeout(() => {

        document.getElementById("birthdayCard")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1300);

});


/* ==========================================
   CREATE 3D BAT SWARM
========================================== */

function createBatSwarm() {

    for (let i = 0; i < 30; i++) {

        const bat =
            document.createElement("div");


        bat.innerHTML = "🦇";


        bat.style.position = "fixed";

        bat.style.left = "50%";

        bat.style.top = "50%";

        bat.style.zIndex = "200";

        bat.style.pointerEvents = "none";


        bat.style.fontSize =
            (15 + Math.random() * 45) + "px";


        document.body.appendChild(bat);


        const directionX =
            (Math.random() - 0.5) * 2500;


        const directionY =
            (Math.random() - 0.5) * 1800;


        const directionZ =
            Math.random() * 1000;


        const rotation =
            Math.random() * 720;


        const duration =
            1200 + Math.random() * 1800;


        bat.animate(

            [

                {

                    transform:
                        "translate(-50%,-50%) " +
                        "translate3d(0,0,0) " +
                        "scale(.1) " +
                        "rotate(0deg)",

                    opacity: 0

                },

                {

                    transform:
                        `translate(-50%,-50%)
                         translate3d(
                            ${directionX * .3}px,
                            ${directionY * .3}px,
                            ${directionZ * .2}px
                         )
                         scale(1)
                         rotate(${rotation / 2}deg)`,

                    opacity: 1

                },

                {

                    transform:
                        `translate(-50%,-50%)
                         translate3d(
                            ${directionX}px,
                            ${directionY}px,
                            ${directionZ}px
                         )
                         scale(.2)
                         rotate(${rotation}deg)`,

                    opacity: 0

                }

            ],

            {

                duration: duration,

                easing: "cubic-bezier(.2,.8,.2,1)"

            }

        );


        setTimeout(() => {

            bat.remove();

        }, duration + 100);

    }

}


/* ==========================================
   RANDOM LIGHTNING
========================================== */

function randomLightning() {

    lightning.classList.remove("flash");

    void lightning.offsetWidth;

    lightning.classList.add("flash");

}


setInterval(() => {

    if (Math.random() > .4) {

        randomLightning();

    }

}, 5000);


/* ==========================================
   CLOSE TRANSMISSION
========================================== */

closeButton.addEventListener("click", () => {

    document.body.classList.add("closing");


    /* Create closing bat swarm */

    createBatSwarm();


    setTimeout(() => {

        document.body.classList.remove("opened");

        document.body.classList.remove("closing");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1800);

});
