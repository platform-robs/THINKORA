/* =====================================================
   SISTEMA DE TRADUCCIONES THINKORA
   -----------------------------------------------------
   - Todo texto visible DEBE vivir aquí
   - Cada idioma tiene la MISMA estructura
   - Para agregar traducciones:
     1. Agrega la clave en "es"
     2. Duplica la misma clave en "en"
===================================================== */

const translations = {

  /* =====================================================
     ESPAÑOL
  ===================================================== */
  es: {

    /* ---------- NAVBAR ---------- */
    nav: {
      services: "Servicios",
      packages: "Paquetes",
      tools: "Herramientas",
      about: "Nosotros",
      contact: "Contacto"
    },

    /* ---------- FOOTER ---------- */
    footer: {
      slogan: "Donde lo que piensas, se vuelve solución...",
      mail: "Correo",
      phone: "Whatsapp",
      copy: "Thinkora © 2026",
      author: "Desarrollado y gestionado por Salvador Robles"
    },

    /* ---------- PÁGINA EN DESARROLLO ---------- */
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

    /* ---------- HERO (INDEX) ---------- */
    hero: {
      messages: [
        'Transformamos tus <span class="highlight">ideas</span> en soluciones digitales modernas, eficientes y a la medida de tu negocio.',
        'Explora nuestros servicios, paquetes y herramientas para tu negocio.',
        'Donde lo que piensas, se vuelve solución...'
      ]
    },

    /* ---------- PÁGINA SERVICIOS ---------- */
    page: {
      title: "Servicios y Soluciones",
      subtitle1:
        "Encuentra soluciones digitales adaptadas a tu negocio.\n" +
        "Transforma tus ideas y necesidades en herramientas inteligentes que impulsan tu productividad y crecimiento."
    },

    /* ---------- TARJETAS DE SERVICIOS ---------- */
    services: {
      web: {
        title: "Desarrollo Web",
        desc: "Páginas web modernas, responsivas y optimizadas para cualquier dispositivo."
      },
      automation: {
        title: "Automatización",
        desc: "Sistemas que ahorran tiempo y recursos mediante la integración de procesos digitales."
      },
      apps: {
        title: "Aplicaciones Web",
        desc: "Aplicaciones personalizadas para satisfacer necesidades específicas de tu negocio."
      },
      consulting: {
        title: "Consultoría",
        desc: "Asesoría tecnológica para optimizar recursos y mejorar procesos en tu empresa."
      },
      uiux: {
        title: "UI / UX Design",
        desc: "Diseños atractivos y funcionales que garantizan la mejor experiencia al usuario."
      },
      support: {
        title: "Soporte Técnico",
        desc: "Asistencia continua y soluciones rápidas para mantener tu negocio en marcha."
      }
    },

    /* ---------- INTRO SOLUCIONES ---------- */
    solutionsIntro:
      "¿Te suena alguno de estos problemas?\n" +
      "No importa si no ves exactamente lo que necesitas.\n" +
      "Podemos construirlo contigo.",

    /* ---------- SOLUCIONES ---------- */
    solutions: {

      admin: {
        title: "Administración & Negocios",
        finance: {
          title: "Control Financiero",
          items: [
            "Control de ventas en Sheets",
            "Gastos con alertas automáticas",
            "Dashboard de ingresos y utilidades"
          ]
        },
        quotes: {
          title: "Reportes & Cotizaciones",
          items: [
            "Cotizaciones automáticas en PDF",
            "Reportes enviados por correo",
            "Historial de movimientos"
          ]
        },
        operations: {
          title: "Gestión Operativa",
          items: [
            "Sistema de caja diaria",
            "Inventario con alertas",
            "Registro de clientes (CRM)"
          ]
        }
      },

      restaurants: {
        title: "Restaurantes & Comercios",
        orders: {
          title: "Pedidos & Consumo",
          items: [
            "Sistema de pedidos digital",
            "Menú editable desde Sheets",
            "Cuentas automáticas por mesa"
          ]
        },
        floor: {
          title: "Control en Piso",
          items: [
            "Mesas por código",
            "Tiempos de preparación",
            "Control de refill"
          ]
        },
        analysis: {
          title: "Análisis & Mejora",
          items: [
            "Platillos más vendidos",
            "Registro de propinas",
            "Encuesta post-consumo"
          ]
        }
      },

      education: {
        title: "Educación & Escuelas",
        management: {
          title: "Gestión Escolar",
          items: [
            "Asistencia automática",
            "Registro de calificaciones",
            "Horarios escolares"
          ]
        },
        communication: {
          title: "Comunicación",
          items: [
            "Avisos a padres",
            "Encuestas para alumnos",
            "Bitácora de incidencias"
          ]
        },
        docs: {
          title: "Documentación",
          items: [
            "Boletas en PDF",
            "Registro de tareas",
            "Control de guardias"
          ]
        }
      },

      courses: {
        title: "Cursos & Infoproductos",
        access: {
          title: "Accesos & Usuarios",
          items: [
            "Registro de alumnos",
            "Acceso por código",
            "Lista de espera"
          ]
        },
        tracking: {
          title: "Seguimiento",
          items: [
            "Envío de material",
            "Panel de progreso",
            "Recordatorios automáticos"
          ]
        },
        payments: {
          title: "Pagos & Certificación",
          items: [
            "Control de pagos",
            "Certificados personalizados",
            "Renovación de accesos"
          ]
        }
      }
    }
  },

  /* =====================================================
     ENGLISH
  ===================================================== */
  en: {

    nav: {
      services: "Services",
      packages: "Packages",
      tools: "Tools",
      about: "About Us",
      contact: "Contact"
    },

    footer: {
      slogan: "Where what you think becomes a solution...",
      mail: "Email",
      phone: "Whatsapp",
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
    },

    page: {
      title: "Services & Solutions",
      subtitle1:
        "Find digital solutions tailored to your business.\n" +
        "Transform your ideas and needs into smart tools that boost productivity and growth."
    },

    services: {
      web: {
        title: "Web Development",
        desc: "Modern, responsive websites optimized for any device."
      },
      automation: {
        title: "Automation",
        desc: "Systems that save time and resources by integrating digital processes."
      },
      apps: {
        title: "Web Applications",
        desc: "Custom applications designed for your specific business needs."
      },
      consulting: {
        title: "Consulting",
        desc: "Technology consulting to optimize resources and improve business processes."
      },
      uiux: {
        title: "UI / UX Design",
        desc: "Attractive and functional designs that ensure the best user experience."
      },
      support: {
        title: "Technical Support",
        desc: "Ongoing assistance and fast solutions to keep your business running."
      }
    },

    solutionsIntro:
      "Does any of this sound familiar?\n" +
      "Even if you don't see exactly what you need.\n" +
      "We can build it with you.",

    solutions: {
      admin: {
        title: "Business & Administration",
        finance: {
          title: "Financial Control",
          items: [
            "Sales tracking in Sheets",
            "Expense alerts",
            "Revenue and profit dashboards"
          ]
        },
        quotes: {
          title: "Reports & Quotations",
          items: [
            "Automatic PDF quotations",
            "Email reports",
            "Transaction history"
          ]
        },
        operations: {
          title: "Operational Management",
          items: [
            "Daily cash system",
            "Inventory alerts",
            "Customer management (CRM)"
          ]
        }
      },

      restaurants: {
        title: "Restaurants & Retail",
        orders: {
          title: "Orders & Consumption",
          items: [
            "Digital ordering system",
            "Menu editable from Sheets",
            "Automatic table billing"
          ]
        },
        floor: {
          title: "Floor Control",
          items: [
            "Table codes",
            "Preparation times",
            "Refill control"
          ]
        },
        analysis: {
          title: "Analysis & Improvement",
          items: [
            "Best-selling dishes",
            "Tips tracking",
            "Post-consumption surveys"
          ]
        }
      },

      education: {
        title: "Education & Schools",
        management: {
          title: "School Management",
          items: [
            "Automatic attendance",
            "Grade records",
            "School schedules"
          ]
        },
        communication: {
          title: "Communication",
          items: [
            "Parent notifications",
            "Student surveys",
            "Incident logs"
          ]
        },
        docs: {
          title: "Documentation",
          items: [
            "PDF report cards",
            "Homework tracking",
            "Duty schedules"
          ]
        }
      },

      courses: {
        title: "Courses & Digital Products",
        access: {
          title: "Access & Users",
          items: [
            "Student registration",
            "Code-based access",
            "Waiting lists"
          ]
        },
        tracking: {
          title: "Progress Tracking",
          items: [
            "Material delivery",
            "Progress dashboard",
            "Automatic reminders"
          ]
        },
        payments: {
          title: "Payments & Certification",
          items: [
            "Payment tracking",
            "Custom certificates",
            "Access renewal"
          ]
        }
      }
    }
  }
};

/* =====================================================
   MOTOR DE TRADUCCIÓN
===================================================== */

let currentLang = localStorage.getItem("language") || "es";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let value = translations[lang];

    keys.forEach(k => value = value?.[k]);
    if (!value) return;

    // Arrays → listas (párrafos)
    if (Array.isArray(value)) {
      el.innerHTML = value.map(item => `<p>${item}</p>`).join("");
      return;
    }

    // Strings con saltos de línea / HTML
    el.innerHTML = value.replace(/\n/g, "<br>");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});
