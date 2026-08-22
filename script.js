const flyButton =
    document.getElementById("flyButton");

const closeButton =
    document.getElementById("closeButton");


/* =========================
   FLY
========================= */

flyButton.addEventListener("click", function () {

    document.body.classList.add("open");

    createBatExplosion();

});


/* =========================
   BAT EXPLOSION
========================= */

function createBatExplosion() {

    for (let i = 0; i < 35; i++) {

        const bat =
            document.createElement("div");

        bat.innerHTML = "🦇";

        bat.style.position = "fixed";

        bat.style.left = "50%";

        bat.style.top = "50%";

        bat.style.zIndex = "100";

        bat.style.fontSize =
            (15 + Math.random() * 45) + "px";

        bat.style.pointerEvents = "none";

        document.body.appendChild(bat);


        const x =
            (Math.random() - .5) * 1800;

        const y =
            (Math.random() - .5) * 1200;

        const scale =
            1 + Math.random() * 2;


        bat.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(.1)",

                    opacity: 0

                },

                {
                    transform:
                        `translate(-50%,-50%)
                         translate(${x}px,${y}px)
                         scale(${scale})`,

                    opacity: 1

                },

                {
                    transform:
                        `translate(-50%,-50%)
                         translate(${x * 1.5}px,${y * 1.5}px)
                         scale(.2)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1500 + Math.random() * 1500,

                easing:
                    "ease-out"

            }

        );


        setTimeout(() => {

            bat.remove();

        }, 3200);

    }

}


/* =========================
   CLOSE
========================= */

closeButton.addEventListener("click", function () {

    document.body.classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
