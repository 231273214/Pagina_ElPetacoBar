document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el dropdown
    let dropdown = document.querySelector(".dropdown");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    // Mostrar menú al pasar el mouse
    dropdown.addEventListener("mouseenter", function () {
        dropdownMenu.classList.add("show");
    });

    // Ocultar menú al salir
    dropdown.addEventListener("mouseleave", function () {
        dropdownMenu.classList.remove("show");
    });

    // Detectar scroll y cambiar el navbar
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
