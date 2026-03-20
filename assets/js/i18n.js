/* =====================================================
   SISTEMA DE TRADUCCIONES — THINKORA
   =====================================================

   CÓMO USAR ESTE ARCHIVO:
   ─────────────────────────────────────────────────────
   1. AGREGAR TEXTO NUEVO:
      - Encuentra la sección del idioma (es / en)
      - Encuentra la página o módulo correspondiente
      - Agrega tu clave siguiendo el mismo patrón
      - Agrégala en AMBOS idiomas (es y en)

   2. USAR EN HTML:
      - Texto simple:   data-i18n="seccion.clave"
      - Lista/items:    data-items="seccion.clave.items"
      - Placeholder:    data-i18n="seccion.clave"  (en inputs)

   3. ESTRUCTURA DE CLAVES:
      - Máximo 3 niveles: pagina.seccion.clave
      - Usa camelCase: toolsPage, cardTitle
      - Nombres descriptivos en inglés

   4. AGREGAR UNA PÁGINA NUEVA:
      - Crea un bloque nuevo dentro de "es" y "en"
      - Sigue el patrón: nombrePagina: { title, subtitle, ...}
      - Documenta la página con un comentario de sección

   5. HTML EN TRADUCCIONES:
      - Solo se permite HTML simple: <br> <span class='highlight'>
      - NUNCA uses scripts ni eventos dentro de las traducciones

   PÁGINAS ACTUALES:
   ─────────────────────────────────────────────────────
   • navbar          → Menú de navegación (todas las páginas)
   • footer          → Pie de página (todas las páginas)
   • hero            → Slider de mensajes (index)
   • page            → Títulos hero de páginas internas
   • services        → Cards de servicios (servicios.html)
   • solutions       → Cards flip por sector (servicios.html)
   • toolsPage       → Panel de herramientas (herramientas.html)
   • about           → Sección nosotros (nosotros.html)
   •   about.slider  → 6 slides del hero de nosotros.html
   •   about.valuesLabel → etiqueta de sección de valores
   • faq             → Preguntas frecuentes (nosotros.html + preguntas.html)
   • dev             → Página en construcción (dev.html)
   • alerts          → Mensajes de validación (global)
   • contact         → [PENDIENTE] Página de contacto

   ===================================================== */

const translations = {

  /* =====================================================
     ALERTAS Y VALIDACIONES GLOBALES
     ─────────────────────────────────────────────────────
     Uso: formularios de cualquier página
     HTML: NO — solo texto plano
  ===================================================== */
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
    /*
    ── AGREGAR ALERTA NUEVA ────────────────────────────
    nombreAlerta: {
      es: "Mensaje en español.",
      en: "Message in English."
    },
    ─────────────────────────────────────────────────── */
  },


  /* =====================================================
     ESPAÑOL
  ===================================================== */
  es: {

    /* ─────────────────────────────────────────────────
       NAVBAR
       Archivo: navbar.js (inyectado en todas las páginas)
       Uso HTML: data-i18n="nav.services"
    ───────────────────────────────────────────────── */
    nav: {
      services: "Servicios",
      faqs:     "Preguntas",
      about:    "Nosotros",
      contact:  "Contacto",
      tools:    "Herramientas"
      /*
      ── AGREGAR ENLACE ──────────────────────────────
      nuevoEnlace: "Nombre visible",
      ─────────────────────────────────────────────── */
    },


    /* ─────────────────────────────────────────────────
       FOOTER
       Archivo: footer.js (inyectado en todas las páginas)
       Uso HTML: data-i18n="footer.slogan"
    ───────────────────────────────────────────────── */
    footer: {
      slogan: "Donde lo que piensas, se vuelve solución...",
      mail:   "Correo",
      phone:  "Whatsapp",
      copy:   "Thinkora © 2026",
      author: "Desarrollado y gestionado por Salvador Robles"
    },


    /* ─────────────────────────────────────────────────
       PÁGINA EN DESARROLLO
       Archivo: dev.html
       Uso HTML: data-i18n="dev.title"
    ───────────────────────────────────────────────── */
    dev: {
      title:     "En desarrollo",
      subtitle:  "Esta sección está actualmente en construcción",
      cardTitle: "Estamos creando algo increíble 🚀",
      cardText:  "Esta página forma parte del ecosistema Thinkora. Estamos construyendo una experiencia digital moderna y poderosa.",
      nextTitle: "¿Qué sigue?",
      nextText:  "Nuevos servicios, proyectos y soluciones digitales están en camino.",
      progressLabel: "Progreso"       
    },


    /* ─────────────────────────────────────────────────
       HERO — INDEX
       Archivo: index.html
       Uso JS: translations.es.hero.messages[0]
       Nota: soporta HTML dentro del string (<span>)
    ───────────────────────────────────────────────── */
    hero: {
      messages: [
        'Transformamos tus <span class="highlight">ideas</span> en soluciones digitales modernas, eficientes y a la medida de tu negocio.',
        'Explora nuestros servicios, paquetes y herramientas para tu negocio.',
        'Donde lo que piensas, se vuelve solución...'
      ]
      /*
      ── AGREGAR MENSAJE AL SLIDER ───────────────────
      Agrega un string más al array messages[]:
      'Tu <span class="highlight">nuevo mensaje</span> aquí.'
      ─────────────────────────────────────────────── */
    },


    /* ─────────────────────────────────────────────────
       HERO DE PÁGINAS INTERNAS
       Uso HTML: data-i18n="page.title"
       Nota: subtitle1 soporta <br> y <span class='highlight'>
    ───────────────────────────────────────────────── */
    page: {
      /*
      ── AGREGAR HERO A PÁGINA NUEVA ─────────────────
      Agrega title y subtitle1 y úsalos con data-i18n
      ─────────────────────────────────────────────── */
      title:    "Servicios y Soluciones",
      subtitle1:
        "Encuentra soluciones digitales adaptadas a tu negocio.<br>" +
        "Transforma tus <span class='highlight'>ideas</span> y <span class='highlight'>necesidades</span> en herramientas inteligentes que impulsan tu productividad y crecimiento."
    },


    /* ─────────────────────────────────────────────────
       PÁGINA SERVICIOS — CARDS DE SERVICIOS
       Archivo: servicios.html → sección #services
       Uso HTML:
         data-i18n="services.sectionLabel"
         data-i18n="services.cardHint"
         data-i18n="services.web.title"
         data-i18n="services.web.desc"
    ───────────────────────────────────────────────── */
    services: {
      sectionLabel: "Nuestros Servicios",
      cardHint:     "Toca para ver más",
      /*
      ── AGREGAR CARD DE SERVICIO ─────────────────────
      nombreServicio: {
        title: "Nombre del servicio",
        desc:  "Descripción corta (1–2 líneas)."
      },
      ─────────────────────────────────────────────── */
      web: {
        title: "Desarrollo Web",
        desc:  "Páginas web modernas, responsivas y optimizadas para cualquier dispositivo."
      },
      automation: {
        title: "Automatización",
        desc:  "Sistemas que ahorran tiempo y recursos mediante la integración de procesos digitales."
      },
      apps: {
        title: "Aplicaciones Web",
        desc:  "Aplicaciones personalizadas para satisfacer necesidades específicas de tu negocio."
      },
      consulting: {
        title: "Consultoría",
        desc:  "Asesoría tecnológica para optimizar recursos y mejorar procesos en tu empresa."
      },
      uiux: {
        title: "Diseño UI / UX",
        desc:  "Diseños atractivos y funcionales que garantizan la mejor experiencia al usuario."
      },
      support: {
        title: "Soporte Técnico",
        desc:  "Asistencia continua y soluciones rápidas para mantener tu negocio en marcha."
      }
    },


    /* ─────────────────────────────────────────────────
       PÁGINA SERVICIOS — INTRO SOLUCIONES
       Archivo: servicios.html → antes de #solutions
       Uso HTML: data-i18n="solutionsIntro"
       Nota: soporta <br> y <span class='highlight'>
    ───────────────────────────────────────────────── */
    solutionsIntro:
      "¿Te suena alguno de estos problemas?<br>" +
      "No importa si no ves exactamente lo que necesitas.<br>" +
      "<span class='highlight'>Podemos construirlo contigo.</span>",


    /* ─────────────────────────────────────────────────
       PÁGINA SERVICIOS — CARDS FLIP POR SECTOR
       Archivo: servicios.html → sección #solutions
       Uso HTML (frente):  data-i18n="solutions.sectionLabel"
                           data-i18n="solutions.admin.title"
                           data-i18n="solutions.admin.finance.title"
       Uso HTML (reverso): data-items="solutions.admin.finance.items"
       Nota: items[] se renderizan como <li> automáticamente
    ───────────────────────────────────────────────── */
    solutions: {
      sectionLabel: "Soluciones por Sector",
      /*
      ── AGREGAR SECTOR NUEVO ─────────────────────────
      1. Agrega el bloque aquí dentro de solutions: {}
      2. Replica el mismo bloque en el idioma "en"
      3. En el HTML agrega:
           <h2 data-i18n="solutions.nuevoSector.title"></h2>
           y las cards con data-i18n / data-items

      nuevoSector: {
        title: "Nombre del Sector",
        card1: {
          title: "Título de la card",
          items: ["Ítem 1", "Ítem 2", "Ítem 3"]
        }
      },
      ─────────────────────────────────────────────── */

      /* ── SECTOR: Administración & Negocios ───────── */
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

      /* ── SECTOR: Restaurantes & Comercios ────────── */
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

      /* ── SECTOR: Educación & Escuelas ────────────── */
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

      /* ── SECTOR: Cursos & Infoproductos ──────────── */
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

    }, /* fin solutions */


    /* ─────────────────────────────────────────────────
       PÁGINA HERRAMIENTAS
       Archivo: herramientas.html
       Uso HTML: data-i18n="toolsPage.title"
    ───────────────────────────────────────────────── */
    toolsPage: {
      title: "Herramientas Internas",
      intro:
        "Accede a las herramientas internas de Thinkora.<br>" +
        "Algunas requieren permisos según tu equipo y estado.",

      /* ── Nombres de las cards ────────────────────── */
      cards: {
        /*
        ── AGREGAR HERRAMIENTA ──────────────────────
        nombreHerramienta: "Nombre visible en la card",
        ────────────────────────────────────────────*/
        quote:       "Cotizador",
        viewQuotes:  "Ver Cotizaciones",
        techGen:     "Generar Propuesta Técnica",
        viewTech:    "Ver Propuestas Técnicas",
        contracts:   "Contratos",
        agents:      "Presentación Agentes",
        packages:    "Paquetes",
        portfolio:   "Portafolio",
        createUser:  "Crear Usuario"
      },

      /* ── Descripciones de las cards ──────────────── */
      descriptions: {
        /*
        ── AGREGAR DESCRIPCIÓN ──────────────────────
        nombreHerramienta: "Descripción corta.",
        ────────────────────────────────────────────*/
        quote:      "Genera cotizaciones personalizadas.",
        viewQuotes: "Consulta historial de cotizaciones.",
        techGen:    "Crea propuestas técnicas profesionales.",
        viewTech:   "Consulta propuestas guardadas.",
        contracts:  "Gestión de contratos activos.",
        agents:     "Material para agentes comerciales.",
        packages:   "Paquetes para negocios.",
        projects:   "Acceso a proyectos externos.",
        createUser: "Únete al equipo."
      },

      /* ── Formulario de login ─────────────────────── */
      login: {
        title:           "Acceso requerido",
        id:              "ID",
        password:        "Contraseña",
        confirmPassword: "Confirmar contraseña",
        team:            "Equipo",
        submit:          "Ingresar",
        register:        "Registrar usuario",
        error:           "No tienes permisos para acceder.",
        disabled:        "Enviando solicitud..."
      },

      /* ── Formulario de registro ──────────────────── */
      register: {
        title:           "Unirse al equipo Thinkora",
        name:            "Nombre",
        lastName1:       "Apellido Paterno",
        lastName2:       "Apellido Materno",
        phone:           "Teléfono",
        email:           "Correo",
        password:        "Contraseña",
        confirmPassword: "Confirmar contraseña",
        team:            "Equipo",
        submit:          "Enviar solicitud",
        success:         "Solicitud enviada correctamente. Revisa tu correo."
      },

      /* ── Email de confirmación ───────────────────── */
      email: {
        /*
        ── VARIABLES DE PLANTILLA ──────────────────
        {{name}}  → nombre del usuario
        {{team}}  → equipo seleccionado
        {{email}} → correo del usuario
        ────────────────────────────────────────────*/
        subject: "Solicitud recibida - Thinkora",
        body:
          "Hola {{name}},\n\n" +
          "Hemos recibido tu solicitud para unirte al equipo Thinkora.\n\n" +
          "Equipo: {{team}}\n" +
          "Correo: {{email}}\n\n" +
          "Tu solicitud está en revisión.\n\n" +
          "Thinkora"
      },

      /* ── Modal de registro ───────────────────────── */
      registerModal: {
        title:      "Solicitud de Nuevo Usuario",
        cancel:     "Cancelar",
        selectTeam: "Selecciona equipo",
        close:      "Cerrar"
      }

    }, /* fin toolsPage */


    /* ─────────────────────────────────────────────────
       PÁGINA NOSOTROS
       Archivo: nosotros.html
       Uso HTML: data-i18n="about.title"
    ───────────────────────────────────────────────── */
    about: {
      title:       "Nosotros",
      subtitle:    "Conoce nuestra visión, propósito y enfoque.",
      valuesLabel: "Nuestros Valores",

      /* ── SLIDER HERO (6 slides) ──────────────────────
         Cada slide tiene: badge, heading, body, icon
         Los items del slide 4 son claves independientes
         para que el motor i18n los pueda reemplazar.

         ── MODIFICAR UN SLIDE ──────────────────────────
         Edita el texto del slide correspondiente (s1–s6)
         en AMBOS idiomas (es y en).

         ── AGREGAR SLIDE ───────────────────────────────
         1. Agrega s7: { ... } aquí y en "en"
         2. Copia el bloque HTML de un <div class="slide">
            en nosotros.html y actualiza los data-i18n
      ─────────────────────────────────────────────── */
      slider: {

        /* ── Slide 1: Portada ── */
        s1: {
          logo:   "Thinkora",
          slogan: "Donde lo que piensas, se vuelve solución...",
          main:   "Creamos soluciones digitales que funcionan."
        },

        /* ── Slide 2: Quiénes somos ── */
        s2: {
          badge:   "Quiénes somos",
          heading: "No solo hacemos páginas web...<br><span class='hl'>resolvemos problemas reales.</span>",
          body:    "Somos un equipo especializado en convertir ideas y necesidades en herramientas digitales funcionales, modernas y a la medida."
        },

        /* ── Slide 3: Diferencial ── */
        s3: {
          badge:   "Nuestro diferencial",
          heading: "<span class='hl'>Pensamos antes de construir.</span>",
          body:    "Basamos cada proyecto en un Diagnóstico de Necesidades. Esto evita errores, ahorra tiempo y garantiza que lo que construimos realmente resuelve tu problema."
        },

        /* ── Slide 4: Servicios ── */
        s4: {
          badge:   "Nuestros servicios",
          heading: "Te ayudamos con:",
          item1:   "Páginas web profesionales",
          item2:   "Aplicaciones y sistemas a medida",
          item3:   "Automatización e integración de APIs",
          item4:   "Soluciones con IA y Ciencia de Datos"
        },

        /* ── Slide 5: Público objetivo ── */
        s5: {
          badge:   "Con quién trabajamos",
          heading: "Negocios, empresas, instituciones<br>y <span class='hl'>proyectos personales.</span>",
          body:    "Trabajamos con quienes necesitan soluciones claras, escalables y bien construidas, sin importar el tamaño del proyecto."
        },

        /* ── Slide 6: Resultado ── */
        s6: {
          badge:   "El resultado",
          heading: "Transformamos ideas confusas en<br><span class='hl'>soluciones funcionales.</span>",
          body:    "Cada proyecto que entregamos genera impacto real y medible en el negocio de nuestros clientes."
        }

      }, /* fin slider */

      /*
      ── AGREGAR BLOQUE DE VALORES ────────────────────
      nombreBloque: {
        title: "Título del bloque",
        text:  "Texto descriptivo."
      },
      ─────────────────────────────────────────────── */

      /* ── Bloques de valores ──────────────────────── */
      what: {
        title: "¿Qué es Thinkora?",
        text:  "Thinkora es una plataforma de soluciones digitales enfocada en transformar ideas en herramientas funcionales que generen impacto real."
      },
      purpose: {
        title: "Nuestro Propósito",
        text:  "Ayudar a empresas y emprendedores a optimizar procesos, automatizar tareas y crecer con tecnología estratégica."
      },
      vision: {
        title: "Nuestra Visión",
        text:  "Construir un ecosistema digital que acompañe el crecimiento de nuestros clientes y evolucione con ellos."
      },
      values: {
        title: "Nuestros Valores",
        text:  "Claridad, funcionalidad, innovación práctica, compromiso y crecimiento compartido."
      },
      accompaniment: {
        title: "Acompañamiento",
        text:  "No entregamos solo proyectos. Acompañamos a nuestros clientes en cada etapa."
      },
      human: {
        title: "Capital Humano",
        text:  "Thinkora también impulsa el crecimiento profesional y la incorporación de talento al equipo."
      },
      faq: {
        title: "Preguntas Frecuentes"
      }

    }, /* fin about */


    /* ─────────────────────────────────────────────────
       PREGUNTAS FRECUENTES
       Archivo: nosotros.html + preguntas.html
       Uso HTML: data-i18n="faq.q1" / data-i18n="faq.a1"

       ── AGREGAR PREGUNTA ─────────────────────────────
       1. Incrementa el número: q7, a7, q8, a8...
       2. Agrégala en AMBOS idiomas (es y en)
       3. En nosotros.html copia el bloque .faq-item
          y actualiza los data-i18n
    ───────────────────────────────────────────────── */
    faq: {
      title:    "Preguntas Frecuentes",
      subtitle: "Resuelve dudas sobre Thinkora y nuestras soluciones.",

      q1: "¿Qué es Thinkora?",
      a1: "Thinkora es una plataforma de soluciones digitales enfocada en automatización y desarrollo web a medida.",

      q2: "¿Qué servicios ofrecen?",
      a2: "Desarrollo web, sistemas administrativos, automatización, aplicaciones a medida y soluciones personalizadas.",

      q3: "¿Puedo solicitar una solución personalizada?",
      a3: "Sí. Thinkora desarrolla soluciones adaptadas a cada necesidad. Contáctanos y hacemos un diagnóstico sin costo.",

      q4: "¿Cuánto tiempo tarda un proyecto?",
      a4: "Depende del alcance. Siempre definimos tiempos claros al inicio y trabajamos con un cronograma.",

      q5: "¿Necesito conocimientos técnicos para trabajar con Thinkora?",
      a5: "No. Nos encargamos de todo el proceso técnico. Solo necesitas saber qué problema quieres resolver.",

      q6: "¿Ofrecen soporte después de entregar el proyecto?",
      a6: "Sí. Ofrecemos planes de soporte y mantenimiento para que tus soluciones siempre funcionen correctamente."
    },

      contact: {
        eyebrow:      "Hablemos",
        title:        "Contacto",
        subtitle:     "...",
        whatsappLabel: "WhatsApp",
        whatsappCta:   "Escríbenos ahora",
        emailLabel:    "Correo",
        emailCta:      "Envíanos un mensaje",
        servicesLabel: "¿En qué podemos ayudarte?",
        service1: { title: "Tiendas y Negocios",        desc: "..." },
        service2: { title: "Paquetes Administrativos",   desc: "..." },
        service3: { title: "Automatización",             desc: "..." },
        service4: { title: "Desarrollo de Software",     desc: "..." },
        service5: { title: "Instituciones y Escuelas",   desc: "..." },
        service6: { title: "Proyectos Personalizados",   desc: "..." },
        cta: {
          title:       "¿Listo para <span class='hl'>empezar</span>?",
          body:        "...",
          btnWhatsapp: "Escribir por WhatsApp",
          btnEmail:    "Enviar correo"
        }
      }

    /*
    ── AGREGAR PÁGINA NUEVA ─────────────────────────────
    Al final de este bloque "es: {}" agrega:

    nombrePagina: {
      title:    "Título principal",
      subtitle: "Subtítulo descriptivo.",
      seccion1: {
        title: "...",
        text:  "..."
      },
      lista: {
        title: "...",
        items: ["Ítem 1", "Ítem 2"]
      }
    },

    Luego replica exactamente la misma estructura
    en el bloque "en: {}" con el texto en inglés.
    ─────────────────────────────────────────────────── */

  }, /* fin es */


  /* =====================================================
     ENGLISH
  ===================================================== */
  en: {

    /* ─────────────────────────────────────────────────
       NAVBAR
    ───────────────────────────────────────────────── */
    nav: {
      services: "Services",
      faqs:     "FAQs",
      about:    "About Us",
      contact:  "Contact",
      tools:    "Tools"
    },


    /* ─────────────────────────────────────────────────
       FOOTER
    ───────────────────────────────────────────────── */
    footer: {
      slogan: "Where what you think becomes a solution...",
      mail:   "Email",
      phone:  "Whatsapp",
      copy:   "Thinkora © 2026",
      author: "Developed and managed by Salvador Robles"
    },


    /* ─────────────────────────────────────────────────
       PÁGINA EN DESARROLLO
    ───────────────────────────────────────────────── */
    dev: {
      title:     "Under development",
      subtitle:  "This section is currently under construction",
      cardTitle: "We are building something great 🚀",
      cardText:  "This page is part of the Thinkora ecosystem. We are crafting a modern and powerful digital experience.",
      nextTitle: "What's next?",
      nextText:  "New services, projects and digital solutions are coming soon.",
      progressLabel: "Progress"
    },


    /* ─────────────────────────────────────────────────
       HERO — INDEX
    ───────────────────────────────────────────────── */
    hero: {
      messages: [
        'We transform your <span class="highlight">ideas</span> into modern, efficient digital solutions tailored to your business.',
        'Explore our services, packages, and tools for your business.',
        'Where what you think becomes a solution...'
      ]
    },


    /* ─────────────────────────────────────────────────
       HERO DE PÁGINAS INTERNAS
    ───────────────────────────────────────────────── */
    page: {
      title:    "Services & Solutions",
      subtitle1:
        "Find digital solutions tailored to your business.<br>" +
        "Transform your <span class='highlight'>ideas</span> and <span class='highlight'>needs</span> into smart tools that boost productivity and growth."
    },


    /* ─────────────────────────────────────────────────
       CARDS DE SERVICIOS
    ───────────────────────────────────────────────── */
    services: {
      sectionLabel: "Our Services",
      cardHint:     "Tap to learn more",
      web: {
        title: "Web Development",
        desc:  "Modern, responsive websites optimized for any device."
      },
      automation: {
        title: "Automation",
        desc:  "Systems that save time and resources by integrating digital processes."
      },
      apps: {
        title: "Web Applications",
        desc:  "Custom applications designed for your specific business needs."
      },
      consulting: {
        title: "Consulting",
        desc:  "Technology consulting to optimize resources and improve business processes."
      },
      uiux: {
        title: "UI / UX Design",
        desc:  "Attractive and functional designs that ensure the best user experience."
      },
      support: {
        title: "Technical Support",
        desc:  "Ongoing assistance and fast solutions to keep your business running."
      }
    },


    /* ─────────────────────────────────────────────────
       INTRO SOLUCIONES
    ───────────────────────────────────────────────── */
    solutionsIntro:
      "Does any of this sound familiar?<br>" +
      "Even if you don't see exactly what you need.<br>" +
      "<span class='highlight'>We can build it with you.</span>",


    /* ─────────────────────────────────────────────────
       CARDS FLIP POR SECTOR
    ───────────────────────────────────────────────── */
    solutions: {
      sectionLabel: "Solutions by Sector",

      /* ── SECTOR: Business & Administration ───────── */
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

      /* ── SECTOR: Restaurants & Retail ────────────── */
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

      /* ── SECTOR: Education & Schools ─────────────── */
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

      /* ── SECTOR: Courses & Digital Products ──────── */
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

    }, /* fin solutions */


    /* ─────────────────────────────────────────────────
       PÁGINA HERRAMIENTAS
    ───────────────────────────────────────────────── */
    toolsPage: {
      title: "Internal Tools",
      intro:
        "Access Thinkora internal tools.<br>" +
        "Some require permissions depending on your team and status.",

      cards: {
        quote:       "Quote Generator",
        viewQuotes:  "View Quotes",
        techGen:     "Technical Proposal Generator",
        viewTech:    "View Technical Proposals",
        contracts:   "Contracts",
        agents:      "Agents Presentation",
        packages:    "Packages",
        portfolio:   "Portfolio",
        createUser:  "Create User"
      },

      descriptions: {
        quote:      "Generate custom quotes.",
        viewQuotes: "View quote history.",
        techGen:    "Create professional technical proposals.",
        viewTech:   "View saved proposals.",
        contracts:  "Manage active contracts.",
        agents:     "Material for sales agents.",
        packages:   "Business packages.",
        projects:   "Access external projects.",
        createUser: "Join the team."
      },

      login: {
        title:           "Access Required",
        id:              "ID",
        password:        "Password",
        confirmPassword: "Confirm Password",
        team:            "Team",
        submit:          "Login",
        register:        "Register user",
        error:           "You don't have permission to access.",
        disabled:        "Sending request..."
      },

      register: {
        title:           "Join the Thinkora Team",
        name:            "Name",
        lastName1:       "Last Name",
        lastName2:       "Second Last Name",
        phone:           "Phone",
        email:           "Email",
        password:        "Password",
        confirmPassword: "Confirm Password",
        team:            "Team",
        submit:          "Send request",
        success:         "Request sent successfully. Check your email."
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

      registerModal: {
        title:      "New User Request",
        cancel:     "Cancel",
        selectTeam: "Select team",
        close:      "Close"
      }

    }, /* fin toolsPage */


    /* ─────────────────────────────────────────────────
       PÁGINA NOSOTROS
    ───────────────────────────────────────────────── */
    about: {
      title:       "About Us",
      subtitle:    "Learn about our vision, purpose and approach.",
      valuesLabel: "Our Values",

      /* ── SLIDER HERO (6 slides) ──────────────────── */
      slider: {

        /* ── Slide 1: Cover ── */
        s1: {
          logo:   "Thinkora",
          slogan: "Where what you think becomes a solution...",
          main:   "We build digital solutions that work."
        },

        /* ── Slide 2: Who we are ── */
        s2: {
          badge:   "Who we are",
          heading: "We don't just build websites...<br><span class='hl'>we solve real problems.</span>",
          body:    "We are a specialized team that turns ideas and needs into functional, modern, tailor-made digital tools."
        },

        /* ── Slide 3: Differentiator ── */
        s3: {
          badge:   "Our differentiator",
          heading: "<span class='hl'>We think before we build.</span>",
          body:    "Every project starts with a Needs Diagnosis. This prevents errors, saves time and ensures that what we build actually solves your problem."
        },

        /* ── Slide 4: Services ── */
        s4: {
          badge:   "Our services",
          heading: "We help you with:",
          item1:   "Professional websites",
          item2:   "Custom applications and systems",
          item3:   "Automation and API integration",
          item4:   "AI and Data Science solutions"
        },

        /* ── Slide 5: Target audience ── */
        s5: {
          badge:   "Who we work with",
          heading: "Businesses, companies, institutions<br>and <span class='hl'>personal projects.</span>",
          body:    "We work with those who need clear, scalable and well-built solutions, regardless of project size."
        },

        /* ── Slide 6: Result ── */
        s6: {
          badge:   "The result",
          heading: "We transform confused ideas into<br><span class='hl'>functional solutions.</span>",
          body:    "Every project we deliver generates real, measurable impact on our clients' business."
        }

      }, /* fin slider */

      what: {
        title: "What is Thinkora?",
        text:  "Thinkora is a digital solutions platform focused on transforming ideas into functional tools that generate real impact."
      },
      purpose: {
        title: "Our Purpose",
        text:  "Help businesses optimize processes, automate tasks, and grow through strategic technology."
      },
      vision: {
        title: "Our Vision",
        text:  "Build a digital ecosystem that supports our clients' growth and evolves with them."
      },
      values: {
        title: "Our Values",
        text:  "Clarity, functionality, practical innovation, commitment, and shared growth."
      },
      accompaniment: {
        title: "Support",
        text:  "We don't just deliver projects. We accompany our clients at every stage."
      },
      human: {
        title: "Human Capital",
        text:  "Thinkora promotes professional growth and talent integration into the team."
      },
      faq: {
        title: "Frequently Asked Questions"
      }

    }, /* fin about */


    /* ─────────────────────────────────────────────────
       PREGUNTAS FRECUENTES
    ───────────────────────────────────────────────── */
    faq: {
      title:    "Frequently Asked Questions",
      subtitle: "Find answers about Thinkora and our digital solutions.",

      q1: "What is Thinkora?",
      a1: "Thinkora is a digital solutions platform focused on custom automation and web development.",

      q2: "What services do you offer?",
      a2: "Web development, administrative & automation systems, custom applications, and tailored solutions.",

      q3: "Can I request a custom solution?",
      a3: "Yes. Thinkora builds tailored solutions for each project. Contact us and we will do a free diagnosis.",

      q4: "How long does a project take?",
      a4: "It depends on the scope. We always define clear timeframes at the beginning and work with a schedule.",

      q5: "Do I need technical knowledge to work with Thinkora?",
      a5: "No. We handle the entire technical process. You just need to know what problem you want to solve.",

      q6: "Do you offer support after the project is delivered?",
      a6: "Yes. We offer support and maintenance plans to keep your solutions running smoothly."
    },

   contact: {
     eyebrow:       "Let's talk",
     title:         "Contact",
     subtitle:      "Have a project in mind? Tell us your <span class='highlight'>idea</span> and we'll turn it into a real digital solution.",
     whatsappLabel: "WhatsApp",
     whatsappCta:   "Message us now",
     emailLabel:    "Email",
     emailCta:      "Send us a message",
     servicesLabel: "How can we help you?",
     service1: { title: "Stores & Businesses",      desc: "Sales systems, inventory, quotations and administrative control for your business." },
     service2: { title: "Administrative Packages",  desc: "Comprehensive solutions to manage operations, finances and clients from one place." },
     service3: { title: "Automation",               desc: "We eliminate repetitive tasks with smart workflows using Google Apps Script and APIs." },
     service4: { title: "Software Development",     desc: "Custom web applications and systems, designed exactly for what your project needs." },
     service5: { title: "Institutions & Schools",   desc: "School management, parent communication, digital report cards and academic control." },
     service6: { title: "Custom Projects",          desc: "Didn't find what you were looking for? We build it from scratch for your specific case." },
     cta: {
       title:       "Ready to <span class='hl'>get started</span>?",
       body:        "You don't need to know about technology. Just tell us what problem you want to solve and we'll take care of the rest. The first diagnosis is free.",
       btnWhatsapp: "Message on WhatsApp",
       btnEmail:    "Send an email"
     }
   }

    /*
    ── AGREGAR PÁGINA NUEVA (EN) ────────────────────────
    Misma estructura que en "es", pero en inglés.
    ─────────────────────────────────────────────────── */

  } /* fin en */

}; /* fin translations */


/* =====================================================
   MOTOR DE TRADUCCIÓN
   ─────────────────────────────────────────────────────
   NO modificar esta sección salvo que cambies
   la lógica de renderizado del sistema i18n.
===================================================== */

let currentLang = localStorage.getItem("language") || "es";

/* Obtiene un valor anidado por ruta de puntos
   Ejemplo: t("services.web.title") */
function t(path) {
  return path
    .split(".")
    .reduce((obj, key) => obj?.[key], translations[currentLang]);
}

/* Cambia idioma, guarda en localStorage y re-renderiza */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  applyTranslations(lang);
  renderItems();
  document.documentElement.lang = lang;
}

/* Aplica texto a todos los elementos con data-i18n */
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let text = translations[lang];
    keys.forEach(k => (text = text?.[k]));
    if (!text) return;

    /* Si es un input/textarea usa placeholder, si no innerHTML */
    if (el.placeholder !== undefined && el.tagName !== "DIV" && el.tagName !== "SPAN") {
      el.placeholder = text;
    } else {
      el.innerHTML = text;
    }
  });
}

/* Renderiza arrays de items como <li> en elementos data-items
   Usado en las cards flip de la sección soluciones */
function renderItems() {
  document.querySelectorAll("[data-items]").forEach(el => {
    const keys = el.dataset.items.split(".");
    let items = translations[currentLang];
    keys.forEach(k => (items = items?.[k]));
    if (!Array.isArray(items)) return;
    el.innerHTML = items.map(i => `<li>${i}</li>`).join("");
  });
}

/* Inicializa al cargar el DOM */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  renderItems();
});
