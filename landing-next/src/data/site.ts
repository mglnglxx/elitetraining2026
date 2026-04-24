export type CourseItem = {
  title: string;
  href: string;
};

export type ProgramItem = {
  title: string;
  description: string;
  href: string;
};

export type SectorPage = {
  slug: string;
  shortLabel: string;
  menuLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  overview: string;
  accent: string;
  accentSoft: string;
  badgeImages: string[];
  sectorIndexHref: string;
  sections: Array<{
    title: string;
    courses: CourseItem[];
  }>;
  programs: ProgramItem[];
  enterprisePitch: string;
};

export const primaryPhone = "+57 317 436 3697";
export const enterprisePhone = "+57 316 466 1007";
export const whatsappLink = "https://wa.me/573174363697";
export const contactLink = "https://hidrocarburos.com.co/contacto/";

export const routeOptions = [
  {
    value: "equipo",
    label: "Capacitar a mi equipo",
    eyebrow: "Para empresas",
    description:
      "Formación cerrada o in-company. Definimos formato, fechas y participantes según tu operación."
  },
  {
    value: "medida",
    label: "Diseñar un programa a la medida",
    eyebrow: "A la medida",
    description:
      "Estructuramos contenido por roles, brechas y alcance. Temario, etapas y entregables propios."
  },
  {
    value: "profesional",
    label: "Tomar un curso individual",
    eyebrow: "Para profesionales",
    description:
      "Te orientamos hacia el curso o programa indicado para tu perfil, agenda y objetivo."
  }
];

export const clientLogos = [
  "acrep.png",
  "andespetroleum.png",
  "axa.png",
  "carec.png",
  "colgas.png",
  "colmena.png",
  "eegsa.png",
  "frontera.png",
  "hocol.png",
  "isa.png",
  "ocensa.png",
  "parex.png",
  "pcr.png",
  "puertosantamarta.png",
  "repsol.png",
  "sura.png",
  "trelec.png",
  "vanti.png"
];

export const sectors: SectorPage[] = [
  {
    slug: "capacitacion-oil-gas-produccion-pozos",
    shortLabel: "Oil & Gas",
    menuLabel: "Producción, pozos y operaciones Oil & Gas",
    metaTitle: "Capacitación Oil & Gas: Producción, Perforación y Pozos | Elite Training",
    metaDescription:
      "Cursos especializados en producción de hidrocarburos, perforación, completamiento de pozos, levantamiento artificial y facilidades de producción.",
    heroTitle: "Capacitación técnica para operaciones de producción, pozos y facilidades de superficie.",
    heroDescription:
      "Formación en producción, facilidades de superficie, levantamiento artificial, perforación, completamiento y evaluación de yacimientos.",
    overview:
      "Ideal para equipos que operan, diseñan o supervisan procesos en producción de hidrocarburos, perforación, workover y gestión de yacimientos.",
    accent: "#2D3670",
    accentSoft: "#D97706",
    badgeImages: [
      "/assets/insignias/oil1.png",
      "/assets/insignias/oil2.png",
      "/assets/insignias/oil3.png"
    ],
    sectorIndexHref: "https://hidrocarburos.com.co/producto-categoria/sectores/oil-and-gas/",
    sections: [
      {
        title: "Producción y facilidades",
        courses: [
          {
            title: "Manejo y Tratamiento de Crudo en Campos Petroleros",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/manejo-y-tratamiento-de-crudo-en-campos-petroleros/"
          },
          {
            title: "Manejo, Tratamiento e Inyección de Aguas Coproducidas en Campos Petroleros",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/manejo-tratamiento-e-inyeccion-de-aguas-coproducidas-en-campos-petroleros/"
          },
          {
            title: "Medición de Hidrocarburos Líquidos",
            href: "https://hidrocarburos.com.co/producto/medicion-de-hidrocarburos-liquidos/"
          }
        ]
      },
      {
        title: "Ingeniería de producción",
        courses: [
          {
            title: "Sistemas de Bombeo Mecánico y de Cavidad Progresiva – PCP",
            href: "https://hidrocarburos.com.co/producto/sistemas-de-bombeo-mecanico-y-de-cavidad-progresiva-pcp/"
          },
          {
            title: "Interpretación de Registros de Producción con Emeraude",
            href: "https://hidrocarburos.com.co/producto/interpretacion-de-registros-de-produccion-con-emeraude/"
          },
          {
            title: "Sistema de Levantamiento Artificial por Bombeo Electrosumergible – ESP",
            href: "https://hidrocarburos.com.co/producto/sistema-de-levantamiento-artificial-por-bombeo-electrosumergible-esp/"
          },
          {
            title: "Optimización de la Producción Mediante Análisis Nodal",
            href: "https://hidrocarburos.com.co/producto/optimizacion-de-la-produccion-mediante-analisis-nodal/"
          },
          {
            title: "Sistemas de Levantamiento Artificial – Nivel 1",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/sistemas-de-levantamiento-artificial-nivel-1/"
          },
          {
            title: "Sistemas de Levantamiento Artificial – Nivel 2",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/sistemas-de-levantamiento-artificial-nivel-2/"
          }
        ]
      },
      {
        title: "Perforación y pozos",
        courses: [
          {
            title: "Perforación y Completamiento de Pozos",
            href: "https://hidrocarburos.com.co/producto/perforacion-y-completamiento-de-pozos/"
          },
          {
            title: "Rig Inspection – Inspección de Taladros de Perforación y Workover",
            href: "https://hidrocarburos.com.co/producto/rig-inspection-inspeccion-de-taladros-de-perforacion-y-workover/"
          },
          {
            title: "Cementación Primaria de Pozos – Nivel 1",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/cementacion-primaria-de-pozos-nivel-1/"
          }
        ]
      },
      {
        title: "Yacimientos y petrofísica",
        courses: [
          {
            title: "Open Hole Well Logging & Formation Evaluation",
            href: "https://hidrocarburos.com.co/producto/open-hole-well-logging-formation-evaluation-interpretacion-de-registros-de-pozo-en-hueco-abierto-para-la-evaluacion-petrofisica-de-formaciones/"
          },
          {
            title: "Interpretación de Pruebas de Presión de Yacimientos",
            href: "https://hidrocarburos.com.co/producto/interpretacion-de-pruebas-de-presion-de-yacimientos-pressure-transient-analysis/"
          },
          {
            title: "Operación de Plantas de Inyección de Agua y Métodos de Recobro Mejorado",
            href: "https://hidrocarburos.com.co/producto/operacion-de-plantas-de-inyeccion-de-agua-y-metodos-de-recobro-mejorado/"
          }
        ]
      },
      {
        title: "Gestión ambiental",
        courses: [
          {
            title: "Biorremediación de Derrames y Desechos de Origen Petrolero",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/biorremediacion-de-derrames-y-desechos-de-origen-petrolero/"
          },
          {
            title: "Derrames de Hidrocarburos en Tierra y Pequeños Ríos – Control y Tratamiento",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/derrames-de-hidrocarburos-en-tierra-y-pequenos-rios-control-y-tratamiento/"
          },
          {
            title: "Manejo de Pasivos Ambientales Petroleros y Tratamiento de Piscinas",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/manejo-de-pasivos-ambientales-petroleros-y-tratamiento-de-piscinas/"
          },
          {
            title: "Gestión Ambiental en Exploración y Producción de Hidrocarburos Offshore",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/gestion-ambiental-en-exploracion-y-produccion-de-hidrocarburos-offshore/"
          }
        ]
      }
    ],
    programs: [
      {
        title: "Programa Profesional en Facilidades de Producción de Hidrocarburos",
        description:
          "Formación integral en diseño, operación y optimización de facilidades de superficie para producción de hidrocarburos.",
        href: "https://campusvirtual.hidrocarburos.com.co/stm-course-bundles/programa-profesional-en-facilidades-de-produccion-de-hidrocarburos/"
      },
      {
        title: "Programa Profesional en Gestión Ambiental Petrolera",
        description:
          "Programa especializado en gestión ambiental para operaciones de exploración y producción de hidrocarburos.",
        href: "https://campusvirtual.hidrocarburos.com.co/stm-course-bundles/programa-profesional-en-gestion-ambiental-petrolera/"
      }
    ],
    enterprisePitch:
      "Si necesitas formar personal de producción, facilidades, workover o ingeniería de yacimientos, podemos proponer una ruta cerrada para equipos operativos, técnicos o supervisores."
  },
  {
    slug: "capacitacion-seguridad-riesgos-procesos-psm",
    shortLabel: "Seguridad y Riesgos",
    menuLabel: "Seguridad de procesos y gestión de riesgos",
    metaTitle: "Capacitación Seguridad de Procesos y Gestión de Riesgos (PSM) | Elite Training",
    metaDescription:
      "Formación en seguridad de procesos, análisis de riesgos, PSM, HAZOP, investigación de incidentes y seguridad eléctrica para la industria.",
    heroTitle: "Capacitación en seguridad de procesos, análisis de riesgos y cumplimiento técnico.",
    heroDescription:
      "Formaciones especializadas en Seguridad de Procesos y Gestión de Riesgos Industriales. Metodologías de gestión de riesgos de procesos, seguridad eléctrica, áreas clasificadas, investigación de incidentes y control de riesgos en el factor humano.",
    overview:
      "Ruta pensada para operaciones críticas que requieren fortalecer PSM, análisis de riesgos, seguridad eléctrica y capacidades de investigación técnica.",
    accent: "#2D3670",
    accentSoft: "#EB9716",
    badgeImages: [
      "/assets/insignias/seguridad1.png",
      "/assets/insignias/seguridad2.png",
      "/assets/insignias/seguridad3.png"
    ],
    sectorIndexHref: "https://hidrocarburos.com.co/producto-categoria/sectores/seguridad-riesgos/",
    sections: [
      {
        title: "Seguridad de procesos",
        courses: [
          {
            title: "Gestión de la Seguridad de Procesos Basada en Riesgos",
            href: "https://hidrocarburos.com.co/producto/gestion-de-la-seguridad-de-procesos-basada-en-riesgos/"
          },
          {
            title: "Auditoría a Programas de Seguridad de Procesos-PSM",
            href: "https://hidrocarburos.com.co/producto/auditoria-a-programas-de-seguridad-de-procesos-psm/"
          },
          {
            title: "Gestión del Cambio – Management of Change (MOC)",
            href: "https://hidrocarburos.com.co/producto/gestion-del-cambio-management-of-change-moc/"
          }
        ]
      },
      {
        title: "Análisis de riesgos",
        courses: [
          {
            title: "Programa Líder PHA Gestión de Riesgos de Proceso HAZOP-LOPA",
            href: "https://hidrocarburos.com.co/producto/programa-lider-pha-gestion-de-riesgos-de-proceso-hazop-lopa/"
          },
          {
            title: "HAZOP: Análisis de Riesgos y Operabilidad",
            href: "https://hidrocarburos.com.co/producto/hazop-analisis-de-riesgos-y-operabilidad-presencial/"
          },
          {
            title: "Gerencia de los Riesgos Integrales con BowTie",
            href: "https://hidrocarburos.com.co/producto/gerencia-de-los-riesgos-integrales-con-bowtie-online/"
          }
        ]
      },
      {
        title: "Seguridad eléctrica",
        courses: [
          {
            title: "Seguridad Eléctrica en Lugares de Trabajo, Acorde al Marco Legal y la NFPA 70E",
            href: "https://hidrocarburos.com.co/producto/seguridad-electrica-en-lugares-de-trabajo-acorde-al-marco-legal-y-nfpa-70e/"
          },
          {
            title: "LOTO – Bloqueo y Etiquetado (Lock Out-Tag Out)",
            href: "https://hidrocarburos.com.co/producto/loto-bloqueo-y-etiquetado-lock-out-tag-out/"
          },
          {
            title: "Clasificación de Áreas Eléctricas Peligrosas",
            href: "https://hidrocarburos.com.co/producto/clasificacion-areas-peligrosas-electricas-basado-nfpa-497-api-500-api-505/"
          }
        ]
      },
      {
        title: "Investigación y factor humano",
        courses: [
          {
            title: "Investigación de Accidentes en la Seguridad de Procesos",
            href: "https://hidrocarburos.com.co/producto/investigacion-de-accidentes-en-la-seguridad-de-procesos/"
          },
          {
            title: "Gestión del Error Humano en la Seguridad de Procesos",
            href: "https://hidrocarburos.com.co/producto/gestion-del-error-humano-en-la-seguridad-de-procesos/"
          }
        ]
      }
    ],
    programs: [
      {
        title: "Programa Profesional en Seguridad de Procesos y Gestión del Riesgo",
        description:
          "Formación integral en PSM, análisis de riesgos (HAZOP, LOPA, BowTie) y gestión de cambios. Preparación para auditorías y cumplimiento normativo.",
        href: "https://hidrocarburos.com.co/producto/programa-profesional-en-seguridad-de-procesos-y-gestion-del-riesgo/"
      },
      {
        title: "Programa Profesional en Seguridad Eléctrica",
        description:
          "Formación en NFPA 70E, NFPA 70B, clasificación de áreas peligrosas y LOTO. 70 horas de formación especializada.",
        href: "https://hidrocarburos.com.co/producto/programa-profesional-en-seguridad-electrica/"
      }
    ],
    enterprisePitch:
      "Podemos estructurar rutas de formación para PSM, HAZOP, seguridad eléctrica y análisis de riesgos según roles HSE, operaciones, integridad o mantenimiento."
  },
  {
    slug: "capacitacion-integridad-equipos-inspeccion-api",
    shortLabel: "Integridad y Equipos",
    menuLabel: "Integridad mecánica, inspección API y equipos",
    metaTitle: "Capacitación Integridad Mecánica, Inspección API y Equipos Industriales | Elite Training",
    metaDescription:
      "Formación en integridad mecánica, inspección basada en riesgo, códigos API/ASME, equipos rotativos y protección catódica.",
    heroTitle: "Capacitación en integridad mecánica, inspección API/ASME y confiabilidad de equipos.",
    heroDescription:
      "Formación en integridad mecánica, inspección basada en riesgo, códigos API/ASME, equipos rotativos y protección catódica.",
    overview:
      "Área diseñada para profesionales que gestionan integridad, corrosión, equipos rotativos, recipientes, tuberías, calderas y cumplimiento de códigos.",
    accent: "#2D3670",
    accentSoft: "#95C11F",
    badgeImages: [
      "/assets/insignias/integridad1.png",
      "/assets/insignias/integridad2.png",
      "/assets/insignias/integridad3.png"
    ],
    sectorIndexHref:
      "https://hidrocarburos.com.co/producto-categoria/sectores/integridad-mecanica-e-inspeccion-api/",
    sections: [
      {
        title: "Integridad mecánica",
        courses: [
          {
            title: "Aptitud para el Servicio – Fitness for Services – API 579",
            href: "https://hidrocarburos.com.co/producto/aptitud-para-el-servicio-fitness-for-services-api-579/"
          },
          {
            title: "Inspección Basada en Riesgo (RBI) – Acorde con API 580-581",
            href: "https://hidrocarburos.com.co/producto/inspeccion-basada-en-riesgo-rbi-acorde-con-api-580-581/"
          },
          {
            title: "Gestión de Integridad de Oleoductos y Gasoductos acorde a ASME B31.8s y API 1160",
            href: "https://hidrocarburos.com.co/producto/gestion-de-integridad-de-oleoductos-y-gasoductos-acorde-a-asme-b31-8s-y-api-1160-online/"
          },
          {
            title: "Análisis de Fallas y Mecanismos de Daño según API 571",
            href: "https://hidrocarburos.com.co/producto/analisis-de-fallas-y-mecanismos-de-dano-en-la-industria-del-petroleo-y-gas-segun-api-571/"
          }
        ]
      },
      {
        title: "Inspección y códigos",
        courses: [
          {
            title: "Gerencia del Precomisionamiento, Comisionamiento y Puesta en Marcha",
            href: "https://hidrocarburos.com.co/producto/gerencia-del-precomisionamiento-comisionamiento-y-puesta-en-marcha-de-proyectos-y-plantas-industriales/"
          },
          {
            title: "Inspección de Tanques Soldados de Acero según API 653",
            href: "https://hidrocarburos.com.co/producto/inspeccion-y-reconstruccion-de-tanques-soldados-de-acero-segun-api-653/"
          },
          {
            title: "Código ASME Secc VIII Div 1 – Diseño y construcción de recipientes a presión",
            href: "https://hidrocarburos.com.co/producto/codigo-asme-secc-viii-div-1-diseno-y-construccion-de-recipientes-a-presion-online/"
          },
          {
            title: "Diseño, fabricación, examinación y pruebas de Gasoductos, según ASME B31.8",
            href: "https://hidrocarburos.com.co/producto/diseno-fabricacion-examinacion-y-pruebas-gasoductos-segun-asme-b31-8/"
          }
        ]
      },
      {
        title: "Equipos rotativos",
        courses: [
          {
            title: "Operación y Mantenimiento de Bombas Centrífugas y Reciprocantes",
            href: "https://hidrocarburos.com.co/producto/operacion-y-mantenimiento-de-bombas-centrifugas-y-reciprocantes/"
          },
          {
            title: "Operación y Funcionamiento de Turbinas a Gas",
            href: "https://hidrocarburos.com.co/producto/operacion-y-funcionamiento-de-turbinas-a-gas/"
          },
          {
            title: "Operación y Control de Calderas y Turbinas a Vapor",
            href: "https://hidrocarburos.com.co/producto/operacion-y-control-de-calderas-y-turbinas-a-vapor/"
          },
          {
            title: "Inspección, Reparación y Mantenimiento de Válvulas según API 576",
            href: "https://hidrocarburos.com.co/producto/inspeccion-reparacion-y-mantenimiento-de-valvulas-y-dispositivos-de-seguridad-segun-api-576/"
          },
          {
            title: "Generadores Eléctricos: Funcionamiento, Operación y Mantenimiento",
            href: "https://hidrocarburos.com.co/producto/generadores-electricos-funcionamiento-operacion-mantenimiento/"
          },
          {
            title: "Calderas Industriales",
            href: "https://hidrocarburos.com.co/?s=calderas&post_type=product"
          }
        ]
      },
      {
        title: "Protección catódica y corrosión",
        courses: [
          {
            title: "Corrosión: Identificación, Evaluación y Control",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/corrosion-identificacion-evaluacion-y-control/"
          },
          {
            title: "Protección Catódica Galvánica de Activos Enterrados",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/proteccion-catodica-galvanica-de-activos-enterrados/"
          },
          {
            title: "Protección Catódica con Corriente Impresa",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/proteccion-catodica-con-corriente-impresa/"
          },
          {
            title: "ASME PCC-1 Fundamentos de Uniones Apernadas",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/asme-pcc-1-fundamentos-de-uniones-apernadas/"
          }
        ]
      }
    ],
    programs: [
      {
        title: "Programa Profesional en Gestión de la Integridad Mecánica",
        description:
          "Formación integral en metodologías de integridad, inspección y evaluación de equipos estáticos y dinámicos.",
        href: "https://hidrocarburos.com.co/producto/programa-profesional-en-gestion-de-la-integridad-mecanica-en-gasoductos-oleoductos-y-equipos-de-proceso/"
      },
      {
        title: "Programa Profesional en Operación, Control y Mantenimiento de Calderas",
        description:
          "Especialización en operación, control y mantenimiento de calderas industriales.",
        href: "https://hidrocarburos.com.co/producto/programa-profesional-en-operacion-control-y-mantenimiento-de-calderas/"
      },
      {
        title: "Programa Experto en Sistemas de Protección Catódica",
        description:
          "120 horas · E-learning. Formación integral en corrosión, protección catódica galvánica y con corriente impresa.",
        href: "https://campusvirtual.hidrocarburos.com.co/stm-course-bundles/programa-experto-en-sistemas-de-proteccion-catodica"
      }
    ],
    enterprisePitch:
      "Si tu operación requiere fortalecer integridad, RBI, códigos API/ASME, corrosión o mantenimiento especializado de equipos, podemos organizar una ruta por rol y nivel."
  },
  {
    slug: "capacitacion-gestion-activos-mantenimiento-confiabilidad",
    shortLabel: "Activos y Mantenimiento",
    menuLabel: "Gestión de activos, mantenimiento y confiabilidad",
    metaTitle: "Capacitación Gestión de Activos, Mantenimiento y Confiabilidad | Elite Training",
    metaDescription:
      "Formación especializada en gestión del mantenimiento, ingeniería de confiabilidad y gestión de activos. Partner exclusivo de The Woodhouse Partnership.",
    heroTitle: "Capacitación en mantenimiento, confiabilidad y gestión de activos para decisiones más estratégicas.",
    heroDescription:
      "Del mantenimiento reactivo a la gestión estratégica. Formación especializada en gestión del mantenimiento, ingeniería de confiabilidad y gestión de activos. Partner exclusivo de The Woodhouse Partnership.",
    overview:
      "Para líderes y profesionales de mantenimiento, confiabilidad y asset management que buscan mejorar ejecución, costos, indicadores y madurez de gestión.",
    accent: "#2D3670",
    accentSoft: "#009FE3",
    badgeImages: [
      "/assets/insignias/mantenimiento1.png",
      "/assets/insignias/mantenimiento2.png",
      "/assets/insignias/mantenimiento3.png"
    ],
    sectorIndexHref:
      "https://hidrocarburos.com.co/producto-categoria/sectores/gestion-de-activos-mantenimiento-y-confiabilidad/",
    sections: [
      {
        title: "Gestión del mantenimiento",
        courses: [
          {
            title: "Planificación, Programación y Control de Costos del Mantenimiento",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/planificacion-programacion-y-control-de-costos-del-mantenimiento/"
          },
          {
            title: "Gestión de Costos y Presupuestos del Mantenimiento",
            href: "https://hidrocarburos.com.co/producto/gestion-de-costos-y-presupuestos-del-mantenimiento/"
          },
          {
            title: "Gerencia del Mantenimiento",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/gerencia-del-mantenimiento/"
          },
          {
            title: "Gestión y Optimización de Inventarios para Mantenimiento",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/gestion-y-optimizacion-de-inventarios-para-mantenimiento/"
          }
        ]
      },
      {
        title: "Confiabilidad",
        courses: [
          {
            title: "Fundamentos de Ingeniería de Confiabilidad y de Activos Físicos",
            href: "https://hidrocarburos.com.co/producto/fundamentos-de-ingenieria-de-confiabilidad-y-de-activos-fisicos/"
          },
          {
            title: "Técnicas de Análisis de Causa Raíz",
            href: "https://hidrocarburos.com.co/producto/tecnicas-de-analisis-de-causa-raiz-y-eliminacion-de-causas-raices-de-riesgos/"
          },
          {
            title: "Mantenimiento Centrado en Confiabilidad – RCM",
            href: "https://hidrocarburos.com.co/producto/mantenimiento-centrado-en-confiabilidad-rcm/"
          },
          {
            title: "Análisis de Modos de Fallas y Efectos (FMEA – FMECA)",
            href: "https://hidrocarburos.com.co/producto/analisis-de-modos-de-fallas-y-efectos-fmea-fmeca/"
          }
        ]
      },
      {
        title: "Gestión de activos",
        courses: [
          {
            title: "Gestión del Costo de Ciclo de Vida de los Activos",
            href: "https://hidrocarburos.com.co/producto/gestion-del-costo-de-ciclo-de-vida-de-los-activos/"
          },
          {
            title: "Actualización de Normas ISO 55000:2024 y su impacto en la Gestión de Activos",
            href: "https://hidrocarburos.com.co/producto/actualizacion-de-normas-iso-55000-2024-y-su-impacto-en-la-gestion-de-activos/"
          }
        ]
      }
    ],
    programs: [
      {
        title: "Programa Profesional en Gestión Estratégica del Mantenimiento",
        description:
          "96 horas · E-learning. Planificación, costos, inventarios y evaluación del desempeño del mantenimiento.",
        href: "https://campusvirtual.hidrocarburos.com.co/stm-course-bundles/programa-profesional-en-gestion-estrategica-del-mantenimiento"
      },
      {
        title: "Programa Especialista en Gestión Estratégica del Mantenimiento",
        description:
          "112 horas · E-learning. Gerencia, planificación, costos, inventarios e indicadores de gestión.",
        href: "https://campusvirtual.hidrocarburos.com.co/stm-course-bundles/programa-especialista-en-gestion-estrategica-del-mantenimiento/"
      },
      {
        title: "Programa Especialista en Gestión de Activos",
        description:
          "60 horas · Online en vivo. Partner TWPL. Preparación para el examen IAM Certificate.",
        href: "https://hidrocarburos.com.co/producto/programa-especialista-en-gestion-de-activos/"
      },
      {
        title: "Programa Experto en Gestión de Activos",
        description:
          "60 horas · Online en vivo. Nivel avanzado para certificación IAM Diploma.",
        href: "https://hidrocarburos.com.co/producto/programa-experto-en-gestion-de-activos/"
      },
      {
        title: "Programa Especialista en Confiabilidad y Gestión de Activos Industriales",
        description:
          "104 horas · Online en vivo. Formación completa en confiabilidad y preparación para certificación CMRP.",
        href: "https://hidrocarburos.com.co/producto/programa-especialista-en-confiabilidad-y-gestion-de-activos-industriales/"
      }
    ],
    enterprisePitch:
      "También podemos apoyar programas cerrados para mantenimiento, confiabilidad y gestión de activos con enfoque en costos, desempeño y certificaciones de referencia."
  },
  {
    slug: "capacitacion-gas-natural-glp-energia",
    shortLabel: "Gas y Energía",
    menuLabel: "Gas natural, GLP y energía",
    metaTitle: "Capacitación Gas Natural, GLP y Energía | Elite Training",
    metaDescription:
      "Formación especializada en tecnologías del gas natural, LNG, GNC, GLP, operación de equipos, medición y regulación del sector.",
    heroTitle: "Capacitación técnica en gas natural, GLP, medición, procesos y regulación sectorial.",
    heroDescription:
      "Formación especializada en tecnologías del gas natural, LNG, GNC, GLP, operación de equipos, medición y regulación del sector.",
    overview:
      "Área pensada para operadores, ingenieros y equipos comerciales o técnicos vinculados a transporte, medición, procesamiento y uso industrial del gas.",
    accent: "#2D3670",
    accentSoft: "#00A19A",
    badgeImages: [
      "/assets/insignias/glp1.png",
      "/assets/insignias/glp2.png",
      "/assets/insignias/glp3.png"
    ],
    sectorIndexHref: "https://hidrocarburos.com.co/producto-categoria/sectores/gas-natural-glp-y-energia/",
    sections: [
      {
        title: "Tecnologías del gas",
        courses: [
          {
            title: "Tecnologías del Gas Natural",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/tecnologias-del-gas-natural/"
          },
          {
            title: "Introducción a las Tecnologías del LNG",
            href: "https://hidrocarburos.com.co/producto/introduccion-a-las-tecnologias-del-lng/"
          }
        ]
      },
      {
        title: "Operación y procesos",
        courses: [
          {
            title: "Tratamiento y Manejo de Gas Natural",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/tratamiento-y-manejo-de-gas-natural/"
          },
          {
            title: "Compresión de Gas Natural",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/compresion-de-gas-natural/"
          },
          {
            title: "Medición de Gas Natural",
            href: "https://hidrocarburos.com.co/producto/medicion-de-gas-natural/"
          }
        ]
      },
      {
        title: "Mercados de gas",
        courses: [
          {
            title: "Regulación, Contratos, Mercados y Comercialización de Gas Natural en Colombia",
            href: "https://hidrocarburos.com.co/producto/regulacion-contratos-mercados-y-comercializacion-de-gas-natural-en-colombia/"
          }
        ]
      },
      {
        title: "Gas Licuado del Petróleo - GLP",
        courses: [
          {
            title: "Seguridad en el Manejo y la Operación del Gas Licuado del Petróleo – GLP",
            href: "https://hidrocarburos.com.co/producto/seguridad-en-el-manejo-y-la-operacion-del-gas-licuado-del-petroleo-glp-online/"
          },
          {
            title: "Diseño de Instalaciones de Gas Licuado del Petróleo – GLP",
            href: "https://hidrocarburos.com.co/producto/diseno-de-instalaciones-de-gas-licuado-del-petroleo-glp/"
          }
        ]
      }
    ],
    programs: [
      {
        title: "Programa Profesional en Procesos y Tecnologías del Gas Natural",
        description:
          "Formación completa en tecnologías del gas, LNG, tratamiento, medición y compresión. Incluye 5 módulos especializados.",
        href: "https://hidrocarburos.com.co/producto/programa-profesional-en-procesos-y-tecnologias-del-gas-natural/"
      }
    ],
    enterprisePitch:
      "Si tu organización requiere fortalecer competencias en medición, operación, GLP o regulación del gas, podemos proponer una ruta cerrada por perfiles técnicos y comerciales."
  },
  {
    slug: "capacitacion-habilidades-directivas-industria",
    shortLabel: "Habilidades Directivas",
    menuLabel: "Habilidades directivas para la industria",
    metaTitle: "Capacitación Habilidades Directivas para la Industria | Elite Training",
    metaDescription:
      "Formación en gestión de proyectos, análisis de costos, toma de decisiones basadas en riesgo, gestión del cambio y comunicación técnica.",
    heroTitle: "Capacitación para líderes técnicos que deben coordinar, comunicar y decidir con criterio.",
    heroDescription:
      "Formación en gestión de proyectos, análisis de costos, toma de decisiones basadas en riesgo, gestión del cambio y comunicación técnica para líderes de ingeniería.",
    overview:
      "Ruta pensada para jefaturas, coordinadores y profesionales que necesitan combinar criterio técnico con gestión, comunicación y liderazgo.",
    accent: "#2D3670",
    accentSoft: "#EB9716",
    badgeImages: [
      "/assets/insignias/habilidades1.png",
      "/assets/insignias/habilidades2.png",
      "/assets/insignias/habilidades3.png"
    ],
    sectorIndexHref: "https://hidrocarburos.com.co/producto-categoria/sectores/habilidades-directivas/",
    sections: [
      {
        title: "Gestión y estrategia",
        courses: [
          {
            title: "Gestión de Proyectos para Ingenieros",
            href: "https://hidrocarburos.com.co/producto/gestion-de-proyectos-para-ingenieros/"
          },
          {
            title: "Toma de Decisiones Basadas en Riesgo",
            href: "https://hidrocarburos.com.co/producto/la-toma-de-decisiones-basadas-en-riesgo-y-su-impacto-en-el-negocio/"
          },
          {
            title: "Análisis y Gestión de Costos en Proyectos",
            href: "https://hidrocarburos.com.co/producto/analisis-y-gestion-de-costos-en-proyectos/"
          }
        ]
      },
      {
        title: "Liderazgo y organización",
        courses: [
          {
            title: "Redacción de Informes Técnicos para Ingenieros y Profesionales Afines",
            href: "https://campusvirtual.hidrocarburos.com.co/cursos/redaccion-de-informes-tecnicos-para-ingenieros-y-profesionales-afines/"
          },
          {
            title: "Habilidades Básicas para la Formación de Formadores",
            href: "https://hidrocarburos.com.co/producto/habilidades-basicas-para-la-formacion-de-formadores/"
          }
        ]
      }
    ],
    programs: [],
    enterprisePitch:
      "También podemos diseñar rutas para jefes, coordinadores y líderes técnicos que necesitan fortalecer gestión, comunicación y toma de decisiones."
  }
];

export const sectorImages: Record<string, string> = {
  "capacitacion-oil-gas-produccion-pozos": "/assets/img/sector-oil-gas.jpg",
  "capacitacion-seguridad-riesgos-procesos-psm": "/assets/img/sector-seguridad.jpg",
  "capacitacion-integridad-equipos-inspeccion-api": "/assets/img/sector-integridad.jpg",
  "capacitacion-gestion-activos-mantenimiento-confiabilidad": "/assets/img/sector-mantenimiento.jpg",
  "capacitacion-gas-natural-glp-energia": "/assets/img/sector-gas.jpg",
  "capacitacion-habilidades-directivas-industria": "/assets/img/sector-habilidades.jpg"
};

export const sectorCards = sectors.map((sector) => ({
  slug: sector.slug,
  shortLabel: sector.shortLabel,
  menuLabel: sector.menuLabel,
  overview: sector.overview,
  accent: sector.accent,
  accentSoft: sector.accentSoft,
  badge: sector.badgeImages[0],
  image: sectorImages[sector.slug]
}));
