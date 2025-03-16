document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function () {
        dropdownMenu.classList.add("show");
    });
    dropdown.addEventListener("mouseleave", function () {
        dropdownMenu.classList.remove("show");
    });
    let navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    });
});
