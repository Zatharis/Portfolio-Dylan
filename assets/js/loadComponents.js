document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.
    getElementById("nav-placeholder");

    const isInPagesFolder = window.location.pathname.includes("/pages/");

    const navPath = isInPagesFolder
        ? "../assets/components/nav.html"
        : "assets/components/nav.html";

    fetch(navPath)
        .then(response => response.text())
        .then(data => {
            navPlaceholder.innerHTML = data;
        })
        .catch(error => console.error("Error loading nav:", error));


    // if (navPlaceholder) {
    //     fetch("assets/components/nav.html")
    //         .then(response => response.text())
    //         .then(data => {
    //             navPlaceholder.innerHTML = data;
    //         })
    //         .catch(error => console.error("Error loading nav:", error));
    // }
});