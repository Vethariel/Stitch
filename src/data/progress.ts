/**
 * Progreso real del Proyecto Stitch — hechos ya ocurridos.
 * Se actualiza a mano a partir del trabajo y del historial git (no es un plan semanal).
 */

export const progressMeta = {
  updated: "2026-10-14",
  note: "Hechos verificables en el sitio y en git. No es un cronograma de intenciones.",
};

export type ProgressEntry = {
  id: string;
  date: string;
  dateLabel: string;
  title: string;
  facts: string[];
  links?: { href: string; label: string }[];
  commit?: string;
};

/** Avances ya registrados (orden cronológico inverso en la página). */
export const progressLog: ProgressEntry[] = [
  {
    id: "2026-10-14-pagina-stitch-versionado",
    date: "2026-10-14",
    dateLabel: "14 Oct",
    title: "Página Stitch, versionado de las tres vías y norte afinado",
    facts: [
      "Marco y Camino dejan de ser páginas: el compañero vive en /stitch (problema reducido, norte y tres vías) con subpáginas /stitch/marco, /stitch/modelo y /stitch/sistema.",
      "Grafo de tres columnas: reglas del marco → aspectos del modelo → piezas del sistema, con las tensiones marcadas; cada nodo lleva a su objeto en la subpágina de su vía.",
      "Subpáginas simples y con el mismo formato: cada objeto con su descripción y, al final, sus conexiones por vía (Marco, Modelo, Sistema) con una nota breve de la relación.",
      "Evidencia por vía: el marco pide literatura (enlaza a /lecturas), el modelo pide fuentes técnicas de implementación y el sistema se respalda en el código. Lo que falta queda marcado como pendiente.",
      "El sistema se piensa como anexo: se acopla a cualquier anfitrión que exponga ciertas herramientas y le deje un espacio en la interfaz. Stitch Code es el primer anfitrión.",
      "Norte afinado: «Interiorizar y aplicar» absorbe el rechazo a la nota y la credencial vacías, y el cuarto principio pasa a «Sentido propio» (por qué le importa a cada persona).",
      "Home reorientado a quien llega de fuera: el hero dice qué es Stitch y qué hace, y la sección larga del norte se reemplaza por «En pocas palabras» (qué ataca, qué hace, hacia dónde va y qué no es); el norte completo queda en /stitch.",
      "Versión marco.modelo.sistema con cascada: si cambia el marco, modelo y sistema quedan pendientes de alinearse. Objetos y relaciones versionados en src/data/versiones.json.",
      "Línea base 1.1.1: marco 0.1, modelo con los aspectos del compañero y el sistema como anexo, leído sobre Stitch Code.",
    ],
    links: [
      { href: "/#que-es", label: "Home" },
      { href: "/stitch#norte", label: "Norte" },
      { href: "/stitch#vias", label: "Tres vías" },
      { href: "/stitch/marco", label: "Marco" },
      { href: "/stitch/sistema", label: "Sistema" },
    ],
  },
  {
    id: "2026-09-28-stitch-code-hallazgos",
    date: "2026-09-28",
    dateLabel: "28 Sep",
    title: "Destripe de Stitch Code",
    facts: [
      "Análisis del laboratorio en docs/stitch-code-hallazgos.md: ideas iniciales, evolución del prototipo, piezas, cruce con los aspectos del compañero.",
      "Tensiones frente al marco: ayuda que sube por insistencia, dominio con un solo ejercicio, sin memoria entre sesiones, sin evaluación con usuarios.",
      "Limpieza: fuera Timeline, systemMap y redirecciones; README actualizado.",
    ],
    links: [{ href: "/stitch/sistema", label: "Sistema" }],
    commit: "3195a8a",
  },
  {
    id: "2026-09-21-norte-camino-progreso",
    date: "2026-09-21",
    dateLabel: "21 Sep",
    title: "Norte, Camino, Progreso y cruce con el marco",
    facts: [
      "Home reescrita: norte (interiorizar, aplicar, progreso vivido, narrativa), origen personal, estado honesto — sin promesas fantasma.",
      "Pregunta de investigación: conocimiento y habilidades aplicables; aprendizaje con sentido; progreso vivido —no simulado.",
      "Cronograma → Progreso: esta página cuenta hechos, no el plan semanal.",
      "Mapa → Camino: origen = Stitch Code (Woven + Hilo) → aspectos de Stitch → norte fijo.",
      "Marco ↔ camino cruzados: cada regla apunta a aspectos; cada aspecto enlaza a reglas del marco.",
      "Problema y marco alineados: Stitch = compañero; /marco = marco del acompañamiento.",
    ],
    links: [
      { href: "/", label: "Inicio" },
      { href: "/stitch", label: "Stitch" },
      { href: "/problema", label: "Problema" },
    ],
  },
  {
    id: "2026-09-09-mapa-companero",
    date: "2026-09-09",
    dateLabel: "09 Sep",
    title: "Mapa centrado en el compañero + Vocabulario",
    facts: [
      "El mapa del sistema pasó a enfocarse en Stitch como compañero: temas con lado pedagógico y lado técnico.",
      "«Grafo» se renombró a «Vocabulario» (/vocabulario) — el grafo de conceptos sigue siendo el glosario del proyecto.",
      "Quedó documentado un hilo del compañero: lenguaje cercano → vínculo → motivación intrínseca → constancia.",
    ],
    links: [
      { href: "/stitch/modelo", label: "Aspectos" },
      { href: "/vocabulario", label: "Vocabulario" },
    ],
    commit: "b1e568d",
  },
  {
    id: "2026-09-01-mapa",
    date: "2026-09-01",
    dateLabel: "01 Sep",
    title: "Mapa del sistema en el sitio (luego Camino)",
    facts: [
      "Se publicó /mapa y el documento docs/mapa-del-sistema.md (visión del sistema, entidades, alcance).",
      "Más adelante la página de navegación pasa a «Camino»: origen Stitch Code → aspectos de Stitch → norte.",
    ],
    links: [{ href: "/stitch", label: "Stitch" }],
    commit: "42569a3",
  },
  {
    id: "2026-08-26-marco",
    date: "2026-08-26",
    dateLabel: "26 Ago",
    title: "Marco del compañero (v0.1)",
    facts: [
      "Primera versión del marco y modelo en código (framework.ts) + snapshot docs/marco/v0.1.md.",
      "Página /marco: criterios de acompañamiento (qué debe valer) y cómo se concreta.",
      "Lecturas ampliadas (How People Learn) y conceptos de misconceptions, condicionalización y expertise adaptativa en el vocabulario.",
    ],
    links: [
      { href: "/stitch/marco", label: "Marco" },
      { href: "/lecturas", label: "Lecturas" },
    ],
    commit: "774980d",
  },
  {
    id: "2026-08-17-26-literatura",
    date: "2026-08-26",
    dateLabel: "17–26 Ago",
    title: "Literatura y vocabulario vivo",
    facts: [
      "Inventario de papers y página /lecturas.",
      "Grafo de conceptos (ahora Vocabulario) con narrativas filtrables.",
      "Lista de lectura de aprendizaje y lecturas sobre MOOCs / LMS / chatbots frente al acompañamiento.",
      "Traducciones EN en conceptos y refinamiento del grafo (layout, física de nodos).",
    ],
    links: [
      { href: "/lecturas", label: "Lecturas" },
      { href: "/vocabulario", label: "Vocabulario" },
    ],
    commit: "e60271e…774980d",
  },
  {
    id: "2026-08-10-19-problema",
    date: "2026-08-19",
    dateLabel: "10–19 Ago",
    title: "Problema y pregunta de investigación",
    facts: [
      "Sección /problema: motivaciones, fallas del modelo actual, hipótesis, recorte de alcance.",
      "Cierre de semana 2 documentado (docs/semana-02-problema.md).",
      "Guía de búsqueda de fuentes para la revisión de literatura.",
      "Pregunta de investigación afilada hacia el agente de acompañamiento (constancia e interiorización).",
    ],
    links: [{ href: "/problema", label: "Problema" }],
    commit: "f6f0853…8426d76",
  },
  {
    id: "2026-08-06-laboratorio",
    date: "2026-08-06",
    dateLabel: "06 Ago",
    title: "Laboratorio web en marcha",
    facts: [
      "Repositorio Astro + React + Tailwind; sitio desplegable (GitHub Pages / CNAME).",
      "Home, layout, hero y primera estructura del research log.",
      "Plan semanal inicial (luego se separa de «progreso» como hechos reales).",
    ],
    links: [{ href: "/", label: "Inicio" }],
    commit: "77a77ee",
  },
];

/**
 * Trabajo local aún no consolidado en un commit.
 * Vacío cuando todo lo reciente ya está en progressLog (p. ej. tras el commit del día).
 */
export const inProgress: {
  title: string;
  asOf: string;
  facts: string[];
} | null = null;

export const nowSummary = {
  title: "Dónde estamos ahora",
  body: "Hay problema, la página del compañero con sus tres vías (marco, modelo y sistema) en la versión 1.1.1, el análisis de Stitch Code, lecturas, vocabulario y esta página de hechos. El sistema se piensa como anexo acoplable; Stitch Code (Woven + Hilo) es su primer anfitrión y el modelo todavía no se prueba sobre él.",
};
