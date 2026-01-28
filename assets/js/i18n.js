const translations = {
  es: {
    nav: {
      services: "Servicios",
      solutions: "Paquetes",
      projects: "Herramientas",
      about: "Nosotros",
      contact: "Contacto"
    },
    footer: {
      slogan: "Donde lo que piensas, se vuelve solución...",
      mail: "Correo",
      phone: "Teléfono",
      copy: "Thinkora © 2026",
      author: "Desarrollado y gestionado por Salvador Robles"
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
    },
    hero: {
      messages: [
        'Transformamos tus <span class="highlight">ideas</span> en soluciones digitales modernas, eficientes y a la medida de tu negocio.',
        'Explora nuestros servicios, paquetes y herramientas para tu negocio.',
        'Donde lo que piensas, se vuelve solución...'
      ]
    }
  },

  en: {
    nav: {
      services: "Services",
      solutions: "Packages",
      projects: "Tools",
      about: "About Us",
      contact: "Contact"
    },
    footer: {
      slogan: "Where what you think becomes a solution...",
      mail: "Email",
      phone: "Phone",
      copy: "Thinkora © 2026",
      author: "Developed and managed by Salvador Robles"
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
    },
    hero: {
      messages: [
        'We transform your <span class="highlight">ideas</span> into modern, efficient digital solutions tailored to your business.',
        'Explore our services, packages, and tools for your business.',
        'Where what you think becomes a solution...'
      ]
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
