const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto"
    },
    footer: {
      rights: "© 2025 Thinkora | Salvador Robles",
      mail: "Correo",
      phone: "WhatsApp"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      contact: "Contact"
    },
    footer: {
      rights: "© 2025 Thinkora | Salvador Robles",
      mail: "Email",
      phone: "WhatsApp"
    }
  }
};

let currentLang = localStorage.getItem("language") || "es";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n.split(".");
    let text = translations[lang];
    key.forEach(k => text = text?.[k]);
    if (text) el.textContent = text;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});
