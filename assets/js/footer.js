/* ========================================
   FOOTER LOADER
   Carga footer.html desde la raíz
======================================== */

document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-container").innerHTML = html;

      // Aplica traducciones cuando el footer ya existe
      if (typeof applyTranslations === "function") {
        applyTranslations(
          localStorage.getItem("language") || "es"
        );
      }
    })
    .catch(err => console.error("Footer error:", err));
});
