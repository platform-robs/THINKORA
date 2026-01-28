document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("navbar-container");
      container.innerHTML = html;

      if (typeof applyTranslations === "function") {
        applyTranslations(localStorage.getItem("language") || "es");
      }

      const navbar = container.querySelector(".navbar");
      const navLinks = container.querySelector(".nav-links");

      // SCROLL hide/show suave
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
          navbar.style.transform = "translateY(-120px)";
        } else {
          navbar.style.transform = "translateY(0)";
        }
        lastScroll = currentScroll;
      });

      // Hamburger mobile
      const hamburger = document.createElement("div");
      hamburger.classList.add("hamburger");
      hamburger.innerHTML = `<div></div><div></div><div></div>`;
      navbar.appendChild(hamburger);

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("active");
      });

      // Cerrar menú al click en link
      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
          hamburger.classList.remove("active");
        });
      });
    })
    .catch(err => console.error("Navbar error:", err));
});
