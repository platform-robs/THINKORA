const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      solutions: "Soluciones",
      projects: "Proyectos",
      contact: "Contacto"
    },
    footer: {
      slogan: "Transformamos ideas en soluciones digitales",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      mail: "Correo",
      whatsapp: "WhatsApp",
      copy: "© 2025 Thinkora | Salvador Robles"
    },
    dev: {
      title: "En desarrollo",
      subtitle: "Esta sección está actualmente en construcción",
      cardTitle: "Estamos creando algo increíble 🚀",
      cardText:
        "Esta página forma parte del ecosistema Thinkora. Estamos construyendo una experiencia digital moderna y poderosa.",
      status: "EN DESARROLLO",
      nextTitle: "¿Qué sigue?",
      nextText:
        "Nuevos servicios, proyectos y soluciones digitales están en camino."
    }
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      contact: "Contact"
    },
    footer: {
      slogan: "We turn ideas into digital solutions",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      mail: "Email",
      whatsapp: "WhatsApp",
      copy: "© 2025 Thinkora | Salvador Robles"
    },
    dev: {
      title: "Under development",
      subtitle: "This section is currently under construction",
      cardTitle: "We are building something great 🚀",
      cardText:
        "This page is part of the Thinkora ecosystem. We are crafting a modern and powerful digital experience.",
      status: "IN DEVELOPMENT",
      nextTitle: "What’s next?",
      nextText:
        "New services, projects and digital solutions are coming soon."
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
    const keys = el.dataset.i18n.split(".");
    let text = translations[lang];
    keys.forEach(k => text = text?.[k]);
    if (text) el.textContent = text;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});
