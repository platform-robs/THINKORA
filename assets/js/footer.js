/*
  footer.js
  ----------
  Carga el footer.html desde la raíz del proyecto
  y aplica las traducciones una vez insertado en el DOM
*/

fetch("footer.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar footer.html");
    }
    return response.text();
  })
  .then(html => {
    // Insertamos el footer en la página
    document.getElementById("footer-container").innerHTML = html;

    // 🔑 MUY IMPORTANTE:
    // Volvemos a aplicar traducciones
    if (typeof applyTranslations === "function") {
      applyTranslations(
        localStorage.getItem("language") || "es"
      );
    }
  })
  .catch(error => {
    console.error("Error cargando el footer:", error);
  });
