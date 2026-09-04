/* ==================================================
   MOBILE MENU
================================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

    });

}


/* ==================================================
   CLOSE MOBILE MENU
================================================== */

document.querySelectorAll(".mobile-menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


/* ==================================================
   SEARCH
================================================== */

function searchSite() {

    const input = document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const query = input.value.trim();

    if (query === "") {

        alert("Kirjoita hakusana.");

        return;
    }

    alert(
        'Hakutoiminto on valmis yhdistettäväksi myöhemmin. Hakusi: "' +
        query +
        '"'
    );

}


/* ==================================================
   ENTER KEY SEARCH
================================================== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            searchSite();

        }

    });

}


/* ==================================================
   CRISP
================================================== */

function openCrisp() {

    if (window.$crisp) {

        window.$crisp.push(["do", "chat:open"]);

    }

}


/* ==================================================
   SIMPLE SCROLL ANIMATION
================================================== */

const cards = document.querySelectorAll(
    ".service-card, .security-card, .news-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


cards.forEach(function (card) {

    observer.observe(card);

});
