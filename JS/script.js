document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let dropdownMenu = document.querySelector(".dropdown-menu");
    let navbar = document.querySelector(".navbar");
    let menuToggle = document.querySelector(".menu-toggle");
    let menu = document.querySelector(".menu");

    // Mostrar/ocultar dropdown en hover 
    if (window.innerWidth > 768) {
        dropdown.addEventListener("mouseenter", function () {
            dropdownMenu.classList.add("show");
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdownMenu.classList.remove("show");
        });
    } else {
        // Para móviles: Mostrar dropdown al hacer clic
        dropdown.addEventListener("click", function () {
            dropdown.classList.toggle("active");
        });
    }

    // Cambio de color cuando se hace scroll
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

    // Evitar que el menú hamburguesa se cierre al hacer clic dentro del submenú
    document.querySelector(".dropdown-menu").addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Cerrar menú hamburguesa al hacer clic en un enlace 
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (event.target.closest(".dropdown-menu")) {
                return; // No cerrar si el clic fue en el submenú
            }
            menu.classList.remove("active");
        });
    });
});
