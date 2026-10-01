document.addEventListener("DOMContentLoaded", function () {
    fetch("./components/header.html")
        .then(response => response.text())
        .then(data => {

            const header = document.getElementById("header");

            if (header) {
                header.innerHTML = data;

                // Header load hone ke baad navbar setup
                setupNavbar();
                setupActiveNavigation();
            }

        });
        
    fetch("./components/footer.html")
        .then(response => response.text())
        .then(data => {

            const footer = document.getElementById("footer");

            if (footer) {
                footer.innerHTML = data;
            }

        });


    // =========================================
    // PODCAST VIDEO MODAL
    // Home + Podcast dono pages ke liye
    // =========================================
    setupPodcastModal();

});



/* =========================================
   NAVBAR TOGGLE
========================================= */

function setupNavbar() {

    const toggleButton =
        document.getElementById("navbarToggle");

    const navbarMenu =
        document.getElementById("mainNavbar");


    if (!toggleButton || !navbarMenu) {
        return;
    }


    const navbarCollapse =
        new bootstrap.Collapse(navbarMenu, {
            toggle: false
        });


    toggleButton.addEventListener("click", function () {

        navbarCollapse.toggle();

    });


    navbarMenu.addEventListener("shown.bs.collapse", function () {

        toggleButton.setAttribute(
            "aria-expanded",
            "true"
        );

    });


    navbarMenu.addEventListener("hidden.bs.collapse", function () {

        toggleButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

}



/* =========================================
   PODCAST VIDEO MODAL
========================================= */

function setupPodcastModal() {

    const podcastModal =
        document.getElementById("podcastModal");

    const podcastIframe =
        document.getElementById("podcastIframe");


    if (!podcastModal || !podcastIframe) {
        return;
    }


    const videoUrl = podcastIframe.getAttribute("data-video");


    podcastModal.addEventListener(
        "shown.bs.modal",
        function () {

            podcastIframe.src = videoUrl;

        }
    );


    podcastModal.addEventListener(
        "hidden.bs.modal",
        function () {

            podcastIframe.src = "";

        }
    );

}



function setupPodcastModal() {

    const podcastModal = document.getElementById("podcastModal");
    const podcastIframe = document.getElementById("podcastIframe");

    if (!podcastModal || !podcastIframe) {
        return;
    }

    podcastModal.addEventListener("show.bs.modal", function (event) {

        const clickedItem = event.relatedTarget;

        const clickedVideo =
            clickedItem?.getAttribute("data-video");

        const defaultVideo =
            podcastIframe.getAttribute("data-video");

        const videoUrl =
            clickedVideo || defaultVideo || "";

        podcastIframe.src = videoUrl;

    });


    podcastModal.addEventListener("hidden.bs.modal", function () {

        podcastIframe.src = "";

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

function setupActiveNavigation() {

    const currentPage =
        window.location.pathname.split("/").pop() || "home.html";

    document
        .querySelectorAll(".navbar-nav .nav-link[data-page]")
        .forEach(function (link) {

            const linkPage = link.getAttribute("data-page");
            const isCurrentPage = linkPage === currentPage;

            link.classList.toggle("active", isCurrentPage);

            if (isCurrentPage) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }

        });

}
