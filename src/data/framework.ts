/**
 * Marco Stitch + modelo asociado (borrador).
 * Versión canónica en código; snapshot markdown en docs/marco/.
 */

export const frameworkMeta = {
  version: "0.1.0",
  date: "2026-08-26",
  label: "Borrador 0.1",
  status: "borrador" as const,
  snapshotPath: "docs/marco/v0.1.md",
  note:
    "El marco dice qué debe valer. El modelo dice cómo se concreta. Ambos son semilla: se corrigen con lectura y prototipo.",
};

export type FrameworkSource =
  | "problema"
  | "nrc-2000"
  | "hattie-timperley-2007"
  | "carless-boud-2018"
  | "dunlosky-et-al-2013";

export type FrameworkRule = {
  id: string;
  title: string;
  /** Qué debe valer (marco). */
  rule: string;
  sources: FrameworkSource[];
  /** Cómo se concreta (modelo) — borrador. */
  model: {
    summary: string;
    pieces: string[];
  };
};

export const sourceLabels: Record<FrameworkSource, string> = {
  problema: "Problema / hipótesis",
  "nrc-2000": "NRC How people learn (2000)",
  "hattie-timperley-2007": "Hattie y Timperley (2007)",
  "carless-boud-2018": "Carless y Boud (2018)",
  "dunlosky-et-al-2013": "Dunlosky et al. (2013)",
};

export const frameworkQuestion =
  "¿Cómo diseñar un agente de acompañamiento que sostenga la constancia y la interiorización del aprendizaje autónomo ante motivaciones diversas, sin depender de notas ni de credenciales vacías?";

export const frameworkStance = {
  marco:
    "Criterios y límites para diseñar acompañamiento del aprendizaje autónomo asistido por IA: qué cuenta como progreso, qué no se negocia y qué queda fuera de alcance.",
  modelo:
    "Mecanismos y piezas que concretan cada regla (grafo, ciclo de feedback, compañero, pruebas, narrativa). Aún borrador: se afinan con lectura y Stitch Code.",
  relacion:
    "Una regla del marco compone un componente del diseño; un componente exige respaldo del marco. Si el prototipo falla, a veces se ajusta el modelo; a veces se afila la regla.",
};

/** Alcance que el marco asume en esta versión. */
export const frameworkScope = {
  includes: [
    "Dominios técnicos; primer laboratorio: programación (Stitch Code).",
    "Quien quiere dominar la técnica y quien está obligado a aprenderla.",
    "Acompañamiento que sostiene constancia e interiorización —no sustituye al docente.",
    "Criterio de avance sin nota ni credencial vacía.",
    "Énfasis práctico + preguntas del agente para entendimiento y brechas.",
  ],
  excludes: [
    "Plataforma de certificados / LMS completo.",
    "Evaluación masiva.",
    "Agente asistente general de vida.",
    "Comunidad de aprendizaje como producto ahora (horizonte).",
    "Coronación de «experto» como objetivo de producto; se prefiere novato logrado.",
  ],
};

export const frameworkRules: FrameworkRule[] = [
  {
    id: "progreso-sin-nota",
    title: "Progreso sin nota vacía",
    rule:
      "El avance se gana con evidencia de poder hacer frente a un criterio acordado, no con calificación ni credencial vacía.",
    sources: ["problema", "hattie-timperley-2007", "nrc-2000"],
    model: {
      summary:
        "Grafo (mapa de conocimiento) y árbol (progreso) alineados; atajos solo tras prueba de desempeño.",
      pieces: [
        "Nodos del grafo = verdad del dominio; árbol = recorrido visible.",
        "Prueba de desempeño acordada con el usuario antes de abrir avance.",
        "Feedback de tarea/proceso/autorregulación; evitar nota sola o correcto/incorrecto sin siguiente paso.",
      ],
    },
  },
  {
    id: "aplicabilidad",
    title: "Aplicabilidad antes que memorización",
    rule:
      "El criterio de buen uso es poder aplicar en situaciones nuevas (transferencia), no enunciar el concepto. La profundidad puede variar según la meta, pero no se cierra un tramo por fluidez superficial.",
    sources: ["problema", "nrc-2000", "dunlosky-et-al-2013"],
    model: {
      summary:
        "Problemas de reuso, condicionalización y multi-contexto; recuperación al servicio de usar, no de repasar fichas.",
      pieces: [
        "Preguntas «¿en qué situación usarías esto?» / «aquí aplica / aquí no».",
        "Ejemplos anclados a lo previo y variaciones de contexto.",
        "Reencuentro en el grafo cuando un problema nuevo exige vecinos relacionados —no calendario de flashcards.",
        "Vigilancia de transferencia negativa: la narrativa no empuja a reutilizar sin filtro un patrón previo.",
      ],
    },
  },
  {
    id: "previo-y-errores",
    title: "Conocimiento previo e ideas erróneas",
    rule:
      "Nadie llega en blanco. Hay que mapear lo que ya se sabe y detectar ideas erróneas a lo largo de la formación, no solo al inicio.",
    sources: ["nrc-2000", "problema"],
    model: {
      summary:
        "Diagnóstico conversacional continuo + modelo de dificultades típicas del dominio técnico.",
      pieces: [
        "Fase inicial: mapa de lo conocido, asociaciones y lagunas aparentes.",
        "Durante el recorrido: preguntas que comprueban anclaje conceptual, no solo «ya se vio el tema».",
        "Biblioteca de ideas erróneas / errores frecuentes en Stitch Code.",
        "Anclajes culturales y de interés como parte del conocimiento previo (sin tocar el núcleo).",
      ],
    },
  },
  {
    id: "organizacion-patrones",
    title: "Organización mental y patrones",
    rule:
      "El aprendizaje debe dejar relaciones y patrones recuperables (principios, no trucos sueltos), sin pretender coronar expertise.",
    sources: ["nrc-2000"],
    model: {
      summary:
        "Grafo como espejo del modelo mental; explicación orientada a la idea grande; selectividad de qué se trae a cada problema.",
      pieces: [
        "Integración de conocimiento: nodos ligados, no ítems acumulados.",
        "El agente empuja al principio detrás del ejercicio.",
        "El compañero trae un subconjunto relevante al problema actual —no vuelca todo el mapa.",
        "Andamiaje y pistas liberan atención para usar, no solo para recordar.",
      ],
    },
  },
  {
    id: "ciclo-feedback",
    title: "Ciclo de feedback con uptake",
    rule:
      "La retroalimentación debe ayudar a responder dónde voy, cómo voy y qué sigue, y el aprendiz debe poder tomarla y actuar. Sin base, se enseña; con malentendido, se retroalimenta.",
    sources: ["hattie-timperley-2007", "carless-boud-2018", "nrc-2000"],
    model: {
      summary:
        "Ciclo intento → información → interpretación → siguiente acción; formación progresiva de juicio y uso del feedback.",
      pieces: [
        "Tres preguntas explícitas en el acompañamiento.",
        "Niveles tarea / proceso / autorregulación; evitar elogio vacío a la persona.",
        "Práctica + conversación como evaluación formativa.",
        "Ejemplares como patrones de calidad, no modelos a copiar.",
        "No saltar al siguiente nodo apenas hay un puntaje o un acierto mecánico.",
      ],
    },
  },
  {
    id: "metacognicion-agencia",
    title: "Metacognición y agencia",
    rule:
      "El usuario guía la narrativa; el marco estructura. Hay que estimar y pulir la capacidad de monitorear el propio aprendizaje. Stitch es guía, no garantía de éxito.",
    sources: ["nrc-2000", "carless-boud-2018", "problema"],
    model: {
      summary:
        "Diagnóstico metacognitivo inicial; estrategias según dominio; postura de novato logrado.",
      pieces: [
        "Fase inicial: estado metacognitivo y cuánto se puede llevar hacia mayor agencia.",
        "Preguntas de monitoreo («¿esto que sé sirve aquí? ¿qué asumo?»).",
        "Lagunas visibles en el grafo; la persona decide con información, no solo el sistema.",
        "No coronar «experto»; progreso sin cierre identitario.",
      ],
    },
  },
  {
    id: "compania-memoria",
    title: "Compañía con memoria mínima",
    rule:
      "La presencia que sostiene constancia no exige historial completo. Privacidad primero; memoria selectiva de lo que basta para sentir acompañamiento.",
    sources: ["problema"],
    model: {
      summary:
        "Intereses, preferencias y plantillas de personalidad; pregunta abierta sobre el mínimo de memoria.",
      pieces: [
        "Perfil de intereses y tono —no log completo de conversación como producto.",
        "Personalización del lenguaje sin alterar el núcleo del dominio.",
        "Presencia interactiva orientada a ritmo y retorno, no solo Q&A.",
      ],
    },
  },
  {
    id: "espacio-seguro",
    title: "Espacio seguro y motivación",
    rule:
      "Errar está permitido. No se sostiene el aprendizaje con recompensa extrínseca que sustituye información de tarea, ni con vigilancia que amenaza la identidad.",
    sources: ["problema", "hattie-timperley-2007", "nrc-2000", "carless-boud-2018"],
    model: {
      summary:
        "Conversación sin prisa; pruebas acordadas; sin gamificación de puntos/rachas como motor.",
      pieces: [
        "Clima conversacional que tolera el error.",
        "Concepciones de inteligencia: el diseño no castiga el intento.",
        "Motivación alineada a interés y utilidad percibida; no puntos que minen lo intrínseco.",
        "Confianza que desincentiva la trampa más que el proctoring.",
      ],
    },
  },
  {
    id: "alcance-practico",
    title: "Alcance práctico del laboratorio",
    rule:
      "No hay método mágico de enseñanza. Stitch se acota a habilidades técnicas con énfasis práctico; la comunidad de aprendizaje queda como horizonte.",
    sources: ["nrc-2000", "problema"],
    model: {
      summary:
        "Stitch Code como vehículo: práctica + diálogo; sin pretender LMS ni transformación vital como feature.",
      pieces: [
        "Tareas prácticas como vía principal; teoría al servicio del hacer.",
        "Agente pregunta para asegurar entendimiento y atajar brechas.",
        "Transformación vital y comunidad: horizonte, no entregable del semestre.",
      ],
    },
  },
];

export const frameworkVersions = [
  {
    version: "0.1.0",
    date: "2026-08-26",
    summary:
      "Primer borrador: reglas desde hipótesis del problema y lecturas fichadas (NRC caps. 1–3, Hattie, Carless, Dunlosky); modelo asociado por regla.",
    snapshot: "docs/marco/v0.1.md",
  },
] as const;
