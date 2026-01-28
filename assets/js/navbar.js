/* ========================================
   NAVBAR LOADER
   Carga navbar.html desde la raíz
======================================== */

document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar-container").innerHTML = html;

      // Aplica traducciones cuando el navbar ya existe
      if (typeof applyTranslations === "function") {
        applyTranslations(
          localStorage.getItem("language") || "es"
        );
      }
    })
    .catch(err => console.error("Navbar error:", err));
});
