/* =====================================================
   SISTEMA DE TRADUCCIONES THINKORA
   -----------------------------------------------------
   REGLAS:
   - TODO texto visible vive aquí
   - TODOS los idiomas comparten la MISMA estructura
   - El HTML solo usa data-i18n / data-items
   - NO se toca diseño ni estructura visual
===================================================== */

const translations = {


alerts: {
  phone: {
    es: "El teléfono debe tener 10 dígitos.",
    en: "Phone number must have 10 digits."
  },
  invalidEmail: {
    es: "Correo inválido.",
    en: "Invalid email."
  },
  passwordLength: {
    es: "La contraseña debe tener al menos 8 caracteres.",
    en: "Password must be at least 8 characters."
  },
  passwordMismatch: {
    es: "Las contraseñas no coinciden.",
    en: "Passwords do not match."
  },
  success: {
    es: "Solicitud enviada correctamente.",
    en: "Request sent successfully."
  }
},
   

  /* =====================================================
     ESPAÑOL
  ===================================================== */
  es: {

    /* ---------- NAVBAR ---------- */
    nav: {
      services: "Servicios",
      faqs: "Preguntas",
      about: "Nosotros",
      contact: "Contacto",
      tools: "Herramientas"
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
        "Encuentra soluciones digitales adaptadas a tu negocio.<br>" +
        "Transforma tus <span class='highlight'>ideas</span> y <span class='highlight'>necesidades</span> en herramientas inteligentes que impulsan tu productividad y crecimiento."
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
      "¿Te suena alguno de estos problemas?<br>" +
      "No importa si no ves exactamente lo que necesitas.<br>" +
      "<span class='highlight'>Podemos construirlo contigo.</span>",

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
    },

     /* ---------- HERRAMIENTAS ---------- */
     toolsPage: {
      title: "Herramientas Internas",
      intro:
       "Accede a las herramientas internas de Thinkora.<br>" +
       "Algunas requieren permisos según tu equipo y estado.",
      
      cards: {
       quote: "Cotizador",
       viewQuotes: "Ver Cotizaciones",
       techGen: "Generar Propuesta Técnica",
       viewTech: "Ver Propuestas Técnicas",
       contracts: "Contratos",
       agents: "Presentación Agentes",
       packages: "Paquetes",
       portfolio: "Portafolio",
       createUser: "Crear Usuario"
      },
      
      login: {
       title: "Acceso requerido",
       id: "ID",
       password: "Contraseña",
       confirmPassword: "Confirmar contraseña",
       team: "Equipo",
       submit: "Ingresar",
       register: "Registrar usuario",
       error: "No tienes permisos para acceder.",
       disabled: "Enviando solicitud..."
      },
      
      register: {
       title: "Unirse al equipo Thinkora",
       name: "Nombre",
       lastName1: "Apellido Paterno",
       lastName2: "Apellido Materno",
       phone: "Teléfono",
       email: "Correo",
       password: "Contraseña",
       confirmPassword: "Confirmar contraseña",
       team: "Equipo",
       submit: "Enviar solicitud",
       success: "Solicitud enviada correctamente. Revisa tu correo."
      },
      
      email: {
       subject: "Solicitud recibida - Thinkora",
       body:
         "Hola {{name}},\n\n" +
         "Hemos recibido tu solicitud para unirte al equipo Thinkora.\n\n" +
         "Equipo: {{team}}\n" +
         "Correo: {{email}}\n\n" +
         "Tu solicitud está en revisión.\n\n" +
         "Thinkora"
      },

        descriptions: {
        quote: "Genera cotizaciones personalizadas.",
        viewQuotes: "Consulta historial de cotizaciones.",
        techGen: "Crea propuestas técnicas profesionales.",
        viewTech: "Consulta propuestas guardadas.",
        contracts: "Gestión de contratos activos.",
        agents: "Material para agentes comerciales.",
        packages: "Paquetes para negocios.",
        projects: "Acceso a proyectos externos.",
        createUser: "Únete al equipo."
      },
      
      registerModal: {
        title: "Solicitud de Nuevo Usuario",
        cancel: "Cancelar",
        selectTeam: "Selecciona equipo",
        close: "Cerrar" 
      }
      }
  },

  /* =====================================================
     ENGLISH
  ===================================================== */
  en: {

    nav: {
      services: "Services",
      faqs: "FAQs",
      about: "About Us",
      contact: "Contact",
      tools: "Tools"
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
        "Find digital solutions tailored to your business.<br>" +
        "Transform your <span class='highlight'>ideas</span> and <span class='highlight'>needs</span> into smart tools that boost productivity and growth."
    },

    services: {
      web: { title: "Web Development", desc: "Modern, responsive websites optimized for any device." },
      automation: { title: "Automation", desc: "Systems that save time and resources by integrating digital processes." },
      apps: { title: "Web Applications", desc: "Custom applications designed for your specific business needs." },
      consulting: { title: "Consulting", desc: "Technology consulting to optimize resources and improve business processes." },
      uiux: { title: "UI / UX Design", desc: "Attractive and functional designs that ensure the best user experience." },
      support: { title: "Technical Support", desc: "Ongoing assistance and fast solutions to keep your business running." }
    },

    solutionsIntro:
      "Does any of this sound familiar?<br>" +
      "Even if you don't see exactly what you need.<br>" +
      "<span class='highlight'>We can build it with you.</span>",

    solutions: {
      admin: {
        title: "Business & Administration",
        finance: { title: "Financial Control", items: ["Sales tracking in Sheets", "Expense alerts", "Revenue and profit dashboards"] },
        quotes: { title: "Reports & Quotations", items: ["Automatic PDF quotations", "Email reports", "Transaction history"] },
        operations: { title: "Operational Management", items: ["Daily cash system", "Inventory alerts", "Customer management (CRM)"] }
      },
      restaurants: {
        title: "Restaurants & Retail",
        orders: { title: "Orders & Consumption", items: ["Digital ordering system", "Menu editable from Sheets", "Automatic table billing"] },
        floor: { title: "Floor Control", items: ["Table codes", "Preparation times", "Refill control"] },
        analysis: { title: "Analysis & Improvement", items: ["Best-selling dishes", "Tips tracking", "Post-consumption surveys"] }
      },
      education: {
        title: "Education & Schools",
        management: { title: "School Management", items: ["Automatic attendance", "Grade records", "School schedules"] },
        communication: { title: "Communication", items: ["Parent notifications", "Student surveys", "Incident logs"] },
        docs: { title: "Documentation", items: ["PDF report cards", "Homework tracking", "Duty schedules"] }
      },
      courses: {
        title: "Courses & Digital Products",
        access: { title: "Access & Users", items: ["Student registration", "Code-based access", "Waiting lists"] },
        tracking: { title: "Progress Tracking", items: ["Material delivery", "Progress dashboard", "Automatic reminders"] },
        payments: { title: "Payments & Certification", items: ["Payment tracking", "Custom certificates", "Access renewal"] }
      }
    },

      /* ---------- TOOLS ---------- */
      toolsPage: {
        title: "Internal Tools",
        intro:
          "Access Thinkora internal tools.<br>" +
          "Some require permissions depending on your team and status.",
      
        cards: {
          quote: "Quote Generator",
          viewQuotes: "View Quotes",
          techGen: "Technical Proposal Generator",
          viewTech: "View Technical Proposals",
          contracts: "Contracts",
          agents: "Agents Presentation",
          packages: "Packages",
          portfolio: "Portfolio",
          createUser: "Create User"
        },
      
        login: {
          title: "Access Required",
          id: "ID",
          password: "Password",
          confirmPassword: "Confirm Password",
          team: "Team",
          submit: "Login",
          register: "Register user",
          error: "You don't have permission to access.",
          disabled: "Sending request..."
        },
      
        register: {
          title: "Join the Thinkora Team",
          name: "Name",
          lastName1: "Last Name",
          lastName2: "Second Last Name",
          phone: "Phone",
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm Password",
          team: "Team",
          submit: "Send request",
          success: "Request sent successfully. Check your email."
        },
      
        email: {
          subject: "Request received - Thinkora",
          body:
            "Hello {{name}},\n\n" +
            "We have received your request to join Thinkora.\n\n" +
            "Team: {{team}}\n" +
            "Email: {{email}}\n\n" +
            "Your request is under review.\n\n" +
            "Thinkora"
        },

         descriptions: {
        quote: "Generate custom quotes.",
        viewQuotes: "View quote history.",
        techGen: "Create professional technical proposals.",
        viewTech: "View saved proposals.",
        contracts: "Manage active contracts.",
        agents: "Material for sales agents.",
        packages: "Business packages.",
        projects: "Access external projects.",
        createUser: "Join the team."
      },
      
      registerModal: {
        title: "New User Request",
        cancel: "Cancel",
        selectTeam: "Select team",
         close: "Close"
      }
      }
    },
};

/* =====================================================
   MOTOR DE TRADUCCIÓN
===================================================== */

let currentLang = localStorage.getItem("language") || "es";

function t(path) {
  return path
    .split('.')
    .reduce((obj, key) => obj[key], translations)[currentLang];
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  applyTranslations(lang);
  renderItems();
   document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let text = translations[lang];
    keys.forEach(k => text = text?.[k]);
    if (!text) return;
    if (el.placeholder !== undefined) {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
  });
}

function renderItems() {
  document.querySelectorAll("[data-items]").forEach(el => {
    const keys = el.dataset.items.split(".");
    let items = translations[currentLang];
    keys.forEach(k => items = items?.[k]);
    if (!Array.isArray(items)) return;
    el.innerHTML = items.map(i => `<p>${i}</p>`).join("");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  renderItems();
});
