document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar-container").innerHTML = html;

      // Aplica traducciones si existen
      if (typeof applyTranslations === "function") {
        applyTranslations(localStorage.getItem("language") || "es");
      }

      // ==========================
      // SCROLL NAVBAR HIDE/SHOW
      // ==========================
      let lastScroll = 0;
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
          // Scroll hacia abajo -> esconder
          navbar.style.top = "-100px";
        } else {
          // Scroll hacia arriba -> mostrar
          navbar.style.top = "0";
        }

        lastScroll = currentScroll;
      });

      // ==========================
      // HAMBURGER MOBILE
      // ==========================
      const navLinks = document.querySelector(".nav-links");

      // Crear botón hamburger dinámicamente
      const hamburger = document.createElement("div");
      hamburger.classList.add("hamburger");
      hamburger.innerHTML = `<div></div><div></div><div></div>`;
      navbar.appendChild(hamburger);

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });

      // Cerrar menú al hacer click en link
      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
        });
      });
    })
    .catch(err => console.error("Navbar error:", err));
});
