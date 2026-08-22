/* =====================================
   BATMAN BIRTHDAY SCRIPT
===================================== */


/* =====================================
   ACTIVATE BAT-SIGNAL
===================================== */

function revealMessage() {

    const secret = document.getElementById("secret");
    const flash = document.getElementById("flash");
    const button = document.getElementById("batButton");


    // FLASH EFFECT
    flash.classList.remove("active");

    void flash.offsetWidth;

    flash.classList.add("active");


    // SCREEN SHAKE
    document.body.classList.add("shake");

    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 600);


    // CHANGE BUTTON TEXT
    button.innerHTML = "🦇 BAT-SIGNAL ACTIVATED ⚡";


    // SHOW SECRET MESSAGE
    secret.style.display = "block";


    // SCROLL TO MESSAGE
    setTimeout(() => {

        secret.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);


    // RELEASE EXTRA BATS
    createExtraBats();
}


/* =====================================
   EXTRA FLYING BATS
===================================== */

function createExtraBats() {

    for (let i = 0; i < 20; i++) {

        const bat = document.createElement("div");

        bat.innerHTML = "🦇";

        bat.style.position = "fixed";

        bat.style.left = "-60px";

        bat.style.top =
            Math.random() * 100 + "vh";

        bat.style.fontSize =
            (15 + Math.random() * 35) + "px";

        bat.style.zIndex = "999";

        bat.style.pointerEvents = "none";

        document.body.appendChild(bat);


        const duration =
            2000 + Math.random() * 4000;


        bat.animate(

            [

                {
                    transform:
                        "translateX(0) rotate(0deg) scale(.5)",
                    opacity: 0
                },

                {
                    transform:
                        "translateX(50vw) translateY(-100px) rotate(180deg) scale(1.3)",
                    opacity: 1
                },

                {
                    transform:
                        "translateX(120vw) translateY(100px) rotate(360deg) scale(.6)",
                    opacity: 0
                }

            ],

            {
                duration: duration,
                easing: "linear"
            }

        );


        setTimeout(() => {

            bat.remove();

        }, duration);

    }
}


/* =====================================
   LIGHTNING
===================================== */

function lightningFlash() {

    const lightning =
        document.querySelector(".lightning");


    lightning.style.background =
        "rgba(255,255,255,.3)";


    setTimeout(() => {

        lightning.style.background =
            "transparent";

    }, 100);


    setTimeout(() => {

        lightning.style.background =
            "rgba(255,255,255,.15)";

    }, 170);


    setTimeout(() => {

        lightning.style.background =
            "transparent";

    }, 250);
}


/* RANDOM LIGHTNING */

setInterval(() => {

    if (Math.random() > 0.45) {

        lightningFlash();

    }

}, 4000);


/* =====================================
   GOLDEN SPARKS
===================================== */

function createSpark() {

    const spark =
        document.createElement("div");


    spark.innerHTML = "✦";


    spark.style.position = "fixed";

    spark.style.left =
        Math.random() * 100 + "vw";

    spark.style.top =
        Math.random() * 100 + "vh";

    spark.style.color = "#f5c518";

    spark.style.fontSize =
        (5 + Math.random() * 15) + "px";

    spark.style.pointerEvents = "none";

    spark.style.zIndex = "1";


    document.body.appendChild(spark);


    spark.animate(

        [

            {
                opacity: 0,
                transform: "scale(0)"
            },

            {
                opacity: 1,
                transform: "scale(1.5)"
            },

            {
                opacity: 0,
                transform: "scale(0)"
            }

        ],

        {

            duration:
                1500 + Math.random() * 2000,

            easing: "ease-in-out"

        }

    );


    setTimeout(() => {

        spark.remove();

    }, 3500);

}


/* CREATE SPARKS */

setInterval(createSpark, 350);


/* =====================================
   MOUSE PARALLAX
===================================== */

document.addEventListener("mousemove", (event) => {

    const card =
        document.querySelector(".card");


    // Don't do the effect on mobile

    if (window.innerWidth <= 700) {
        return;
    }


    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;


    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;


    card.style.transform =
        `perspective(1000px)
         rotateY(${x * 2}deg)
         rotateX(${y * -2}deg)`;

});


/* RESET CARD */

document.addEventListener("mouseleave", () => {

    const card =
        document.querySelector(".card");


    card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";

});


/* =====================================
   BAT-SIGNAL BUTTON EFFECT
===================================== */

const batButton =
    document.getElementById("batButton");


batButton.addEventListener("click", () => {

    const signal =
        document.querySelector(".bat-signal");


    signal.style.animation =
        "signalPulse .3s infinite alternate";


    setTimeout(() => {

        signal.style.animation =
            "signalPulse 2s infinite alternate";

    }, 1500);

});


/* =====================================
   RANDOM BAT AMBIENCE
===================================== */

setInterval(() => {

    if (Math.random() > 0.5) {

        const bat =
            document.createElement("div");


        bat.innerHTML = "🦇";


        bat.style.position = "fixed";

        bat.style.left = "-50px";

        bat.style.top =
            Math.random() * 90 + "vh";

        bat.style.fontSize =
            (15 + Math.random() * 25) + "px";

        bat.style.zIndex = "-1";


        document.body.appendChild(bat);


        const animation =
            bat.animate(

                [

                    {
                        transform: "translateX(0)",
                        opacity: 0
                    },

                    {
                        transform:
                            "translateX(50vw) translateY(-80px)",
                        opacity: 1
                    },

                    {
                        transform:
                            "translateX(120vw) translateY(80px)",
                        opacity: 0
                    }

                ],

                {

                    duration:
                        5000 + Math.random() * 5000,

                    easing: "linear"

                }

            );


        animation.onfinish = () => {

            bat.remove();

        };

    }

}, 2500);
