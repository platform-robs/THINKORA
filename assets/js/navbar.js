document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar-container").innerHTML = html;

      if (typeof applyTranslations === "function") {
        applyTranslations(localStorage.getItem("language") || "es");
      }

      const navbar = document.querySelector(".navbar");
      const navLinks = document.querySelector(".nav-links");

      // SCROLL HIDE/SHOW
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
          navbar.style.top = "-100px";
        } else {
          navbar.style.top = "0";
        }
        lastScroll = currentScroll;
      });

      // HAMBURGER ANIMADA
      const hamburger = document.createElement("div");
      hamburger.classList.add("hamburger");
      hamburger.innerHTML = `<div></div><div></div><div></div>`;
      navbar.appendChild(hamburger);

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("active");
      });

      // Cerrar menú al hacer click en link
      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
          hamburger.classList.remove("active");
        });
      });
    })
    .catch(err => console.error("Navbar error:", err));
});
