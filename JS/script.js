document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let dropdownMenu = document.querySelector(".dropdown-menu");
    let navbar = document.querySelector(".navbar");
    let menuToggle = document.querySelector(".menu-toggle");
    let menu = document.querySelector(".menu");

    // Mostrar/ocultar dropdown en hover (solo en escritorio)
    if (window.innerWidth > 768) {
        dropdown.addEventListener("mouseenter", function () {
            dropdownMenu.classList.add("show");
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdownMenu.classList.remove("show");
        });
    }

    // Cambio de color en el navbar cuando se hace scroll
    window.addEventListener("scroll", function () {
        requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    });

    // Toggle menú hamburguesa en móviles
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Cerrar menú cuando se toca un enlace en móviles
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});
