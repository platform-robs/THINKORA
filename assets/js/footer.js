fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    const container = document.getElementById("footer-container");
    container.innerHTML = html;

    if (typeof applyTranslations === "function") {
      applyTranslations(localStorage.getItem("language") || "es");
    }
  })
  .catch(err => console.error("Footer error:", err));
