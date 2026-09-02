/**
 * Mapa del sistema — entidades, relaciones y escala.
 * Fuente viva para /mapa; documento extendido en docs/mapa-del-sistema.md
 */

export type EntityPhase = "now" | "progressive" | "later" | "agency";

export const phaseLabels: Record<EntityPhase, string> = {
  now: "Ahora",
  progressive: "Progresivo",
  later: "Fase posterior",
  agency: "Polo de agencia",
};

export type SystemEntity = {
  id: string;
  label: string;
  alias?: string;
  role: string;
  hierarchy?: string;
  phase: EntityPhase;
  potency: string;
  summary: string;
  bullets: string[];
  sections?: { title: string; items: string[] }[];
  contrasts?: { not: string; is: string }[];
  note?: string;
  link?: { href: string; label: string };
};

export const systemMapMeta = {
  version: "2026-09-01",
  label: "Foto finish",
  question:
    "¿Cómo diseñar un agente de acompañamiento que sostenga la constancia y la interiorización del aprendizaje autónomo ante motivaciones diversas, sin depender de notas ni de credenciales vacías?",
};

export const hierarchy = [
  { role: "Lo más importante", entity: "Estudiante", meaning: "El sistema existe para sostener su agencia y su aprendizaje." },
  { role: "Elemento central", entity: "Árbol de conocimiento", meaning: "Estructura dominio, progreso y preferencias — eje por donde circula casi todo." },
  { role: "Condiciona el eje", entity: "Contexto", meaning: "Personal o compartido; moldea el árbol y anticipa comunidad." },
  { role: "Presenta el recorrido", entity: "Visor", meaning: "Explicación narrada en tiempo real, ligada al usuario." },
  { role: "Mide el desempeño", entity: "Evaluador", meaning: "Pruebas de poder hacer; sin lógica de nota." },
  { role: "Da sentido aplicado", entity: "Proyecto", meaning: "Reto delimitado donde usar lo aprendido." },
  { role: "Acompaña el recorrido", entity: "Compañero (Stitch)", meaning: "Agente de acompañamiento; marco en /marco." },
] as const;

export const entities: SystemEntity[] = [
  {
    id: "estudiante",
    label: "Estudiante",
    role: "Polo de agencia",
    hierarchy: "Lo más importante",
    phase: "agency",
    potency: "Gestionar su propio aprendizaje.",
    summary:
      "En el mapa aparece como entidad por simetría, pero no es un módulo de software: es el usuario en cuyo nombre se mueve el sistema. El diseño promueve y sostiene su agencia — no «implementa» al estudiante.",
    bullets: [
      "Decide ritmo, metas y qué profundizar.",
      "Guía la narrativa del recorrido; el sistema estructura, no sustituye esa agencia.",
      "Solicita ayuda a Stitch cuando la necesita.",
    ],
    note: "El sistema orbita al usuario; el usuario no es un componente más del diagrama.",
  },
  {
    id: "contexto",
    label: "Contexto",
    role: "Condiciona el eje",
    hierarchy: "Condiciona el eje",
    phase: "progressive",
    potency: "Condicionar qué se enseña, cómo y con qué matices — antes y alrededor del recorrido.",
    summary:
      "Una entidad con dos caras: personal (el propio estudiante) y compartido (cohorte, institución). Moldea la instancia del dominio en el árbol sin reemplazar al estudiante ni a Stitch.",
    bullets: [
      "Contexto personal: origen, idioma, intereses, conocimiento previo, situación vital.",
      "Contexto compartido: currículum acordado, calendario, prioridades del grupo, referentes comunes.",
      "No reemplaza al estudiante ni al compañero; informa al árbol y a Stitch.",
    ],
    sections: [
      {
        title: "Stitch Code — modos de uso",
        items: [
          "Abierto: usuario de habla español; contexto predominantemente personal.",
          "Aula: contexto compartido de cohorte + capa personal; modo de profundización, no sustituto del docente.",
        ],
      },
      {
        title: "Pendiente de investigación",
        items: [
          "Solapamiento entre contexto personal y preferencias del árbol.",
          "Qué datos viven en contexto vs árbol; quién actualiza qué.",
        ],
      },
    ],
  },
  {
    id: "arbol",
    label: "Árbol de conocimiento",
    role: "Elemento central",
    hierarchy: "Elemento central",
    phase: "progressive",
    potency: "Sostener la verdad del dominio y el estado del aprendiz sobre ella.",
    summary:
      "Eje estructural del sistema (no el más importante — ese es el estudiante). Concentra verdad del curso, progreso, preferencias, estructura para el visor y enlace entre unidades en una ruta. Árbol y grafo son connotaciones de la misma entidad, no dos piezas rivales.",
    bullets: [
      "Conocimiento certero del curso — dominio revisado con cuidado, moldeado por el contexto.",
      "Grafo de progreso — qué recorrió esta persona, qué falta, avance por temática.",
      "Preferencias — personalización que vincula contenido con lo propio del aprendiz sin alterar el núcleo certero.",
      "Estructura pedagógica para el visor — secuencia y vecinos conceptuales para narrativa pertinente.",
      "Nodo en ruta — al pasar de unidad en unidad, transfiere previo, preferencias y evidencia.",
    ],
    note: "Desarrollo progresivo: no todas las funciones se implementan a la vez; primero lo mínimo para que Stitch lea dominio y avance.",
  },
  {
    id: "companero",
    label: "Compañero",
    alias: "Stitch",
    role: "Acompaña el recorrido",
    hierarchy: "Acompaña el recorrido",
    phase: "now",
    potency: "Acompañar en el proceso — no decidir por el estudiante.",
    summary:
      "Stitch es el nombre propio del compañero. Sus criterios de diseño — el marco del compañero — están en /marco. No es el visor: uno dialoga; el otro imparte narrativa en construcción.",
    bullets: [
      "Retroalimentación y explicaciones cuando el estudiante las solicita.",
      "Motivación intrínseca — sostenerla, no sustituirla con recompensas externas.",
      "Metacognición — formar en procesos que mejoren el aprendizaje a lo largo de la vida.",
      "Reglas que abogan por el entendimiento, no por terminar el módulo.",
    ],
    contrasts: [
      { not: "Visor (impartición narrada)", is: "Diálogo a pedido del estudiante" },
      { not: "Dueño del currículum", is: "Lee el árbol; no redefine la verdad del curso" },
    ],
    link: { href: "/marco", label: "Marco del compañero" },
  },
  {
    id: "visor",
    label: "Visor",
    role: "Presenta el recorrido",
    hierarchy: "Presenta el recorrido",
    phase: "later",
    potency: "Crear y mostrar contenido explicativo con narrativa ligada al usuario.",
    summary:
      "Casi un video explicativo construido en tiempo real — no un archivo fijo. Materializa lo que el árbol estructura para este momento y esta persona.",
    bullets: [
      "Narrativa que sigue progreso, preferencias y contexto vía el árbol.",
      "Ancla lo nuevo a lo previo; muestra relaciones entre conceptos.",
      "Flujo: árbol → texto (IA) → voz + paquetes de animación → explicación en construcción.",
    ],
    contrasts: [
      { not: "Repositorio de PDFs o lecciones estáticas", is: "Explicación viva al vuelo" },
      { not: "El compañero (diálogo libre)", is: "Medio de impartición narrada y visual" },
      { not: "Dueño del conocimiento certero", is: "Visor de lo que el árbol ordena ahora" },
    ],
    sections: [
      {
        title: "Pendiente",
        items: [
          "Gráficos específicos del dominio (diagramas de código, flujos, estructuras).",
          "Objetos ligados al estudiante o contexto (referentes, metáforas de preferencias).",
        ],
      },
    ],
  },
  {
    id: "evaluador",
    label: "Evaluador",
    role: "Mide el desempeño",
    hierarchy: "Mide el desempeño",
    phase: "later",
    potency: "Armar pruebas enfocadas en el desempeño — poder hacer, no enunciar ni acumular puntos vacíos.",
    summary:
      "El resultado no es una nota: es evidencia que puede abrir avance en el árbol, señalar lagunas o pedir otro ciclo. El estudiante puede recurrir a Stitch en prueba; el criterio satisfactorio exige ayuda mínima.",
    bullets: [
      "Inicio: pruebas que informan conocimientos previos y alimentan el árbol.",
      "Durante el recorrido: nivel de entendimiento por temática.",
      "Frente a metas: evaluar según profundidad y alcance acordados.",
      "Ayuda mínima de Stitch → desempeño logrado; ayuda sustancial → iterar con casos relacionados.",
      "Calibrar dificultad: ni trivial ni bloqueante; exigir reuso, no repetición mecánica.",
    ],
    contrasts: [
      { not: "Calificador con escala numérica", is: "Generador de pruebas de desempeño" },
      { not: "Examen único para todos", is: "Batería pertinente al nivel y meta de esta persona" },
    ],
    note: "Actualiza el árbol con lo que las pruebas revelan. Preguntas abiertas (ayuda mínima, calibración) para otra etapa.",
  },
  {
    id: "proyecto",
    label: "Proyecto",
    role: "Da sentido aplicado",
    hierarchy: "Da sentido aplicado",
    phase: "later",
    potency: "Que lo aprendido contribuya a los intereses de la persona mediante un proyecto educativo.",
    summary:
      "Asocia la meta del estudiante con los contenidos del curso y plantea un reto concreto. Casos base del dominio servirán como moldes para derivar variantes.",
    bullets: [
      "Leer intereses y preferencias (árbol, contexto) y enlazarlos con temáticas del dominio.",
      "Proponer reto delimitado y no trivial — alcance acotado con aplicación genuina.",
      "Mostrar casos de éxito pertinentes a la temática y al interés.",
      "Informar al visor (ejemplos anclados) y al evaluador (pruebas contextualizadas).",
    ],
    contrasts: [
      { not: "Lista genérica del curso", is: "Proyecto ligado a la meta de este estudiante" },
      { not: "Tarea ornamental desconectada", is: "Hilo aplicado que usa contenidos al aprender" },
      { not: "Sustituto del evaluador", is: "Complemento con sentido aplicado" },
    ],
  },
];

export const scaleEntities = [
  {
    id: "unidad",
    label: "Unidad (curso)",
    summary:
      "Instancia del sistema donde conviven las siete entidades sobre un dominio concreto. Stitch Code (modo abierto o aula) es la primera unidad — línea de ingeniería de software.",
  },
  {
    id: "ruta",
    label: "Ruta de aprendizaje",
    summary:
      "Concatenación de unidades. El árbol de salida de una unidad alimenta el entrante de la siguiente: previo, preferencias, evidencia — menos esfuerzo de arranque, anclajes más finos.",
  },
] as const;

export const outOfScope = [
  {
    id: "docente",
    label: "Docente",
    summary: "Mediación humana; puede coexistir con el sistema (p. ej. modo aula). Fuera del alcance de esta línea de investigación.",
  },
  {
    id: "comunidad",
    label: "Comunidad",
    summary: "Aprendizaje entre pares; enlazado al contexto compartido. Horizonte de diseño, no feature central ahora.",
  },
] as const;

export type SystemRelation = {
  id: string;
  from: string;
  to: string;
  label: string;
  description: string;
  dashed?: boolean;
};

export const relations: SystemRelation[] = [
  {
    id: "unidad-ruta",
    from: "unidad",
    to: "ruta",
    label: "Unidad ·· Ruta",
    description:
      "Cada curso es una unidad; la ruta concatena unidades; el árbol de salida enlaza con el de entrada (previo, preferencias, evidencia).",
    dashed: true,
  },
  {
    id: "contexto-arbol",
    from: "contexto",
    to: "arbol",
    label: "Contexto → Árbol",
    description: "Instancia del dominio y marco compartido o personal.",
  },
  {
    id: "arbol-proyecto",
    from: "arbol",
    to: "proyecto",
    label: "Árbol → Proyecto",
    description: "Contenidos, progreso y preferencias definen qué temáticas entran al proyecto y en qué nivel.",
  },
  {
    id: "arbol-visor",
    from: "arbol",
    to: "visor",
    label: "Árbol → Visor",
    description: "Estructura pedagógica para narrativa en tiempo real.",
  },
  {
    id: "arbol-evaluador",
    from: "arbol",
    to: "evaluador",
    label: "Árbol ↔ Evaluador",
    description: "Nivel, previo y metas; evidencia de desempeño por temática.",
  },
  {
    id: "estudiante-proyecto",
    from: "estudiante",
    to: "proyecto",
    label: "Estudiante ↔ Proyecto",
    description: "Meta e intereses; reto aplicado negociable.",
  },
  {
    id: "estudiante-visor",
    from: "estudiante",
    to: "visor",
    label: "Estudiante ↔ Visor",
    description: "Recorrido explicativo ligado al usuario.",
  },
  {
    id: "estudiante-arbol",
    from: "estudiante",
    to: "arbol",
    label: "Estudiante ↔ Árbol",
    description: "El estudiante recorre y guía; el árbol refleja su estado sobre el dominio.",
  },
  {
    id: "estudiante-evaluador",
    from: "estudiante",
    to: "evaluador",
    label: "Estudiante ↔ Evaluador",
    description: "Pruebas iniciales y de avance; iteración si la ayuda del compañero fue sustancial.",
  },
  {
    id: "estudiante-companero",
    from: "estudiante",
    to: "companero",
    label: "Estudiante ↔ Compañero",
    description: "El estudiante pide; Stitch acompaña.",
  },
  {
    id: "companero-arbol",
    from: "companero",
    to: "arbol",
    label: "Compañero ↔ Árbol",
    description: "Lee progreso y dominio; no redefine el currículum.",
  },
  {
    id: "proyecto-visor",
    from: "proyecto",
    to: "visor",
    label: "Proyecto ·· Visor",
    description: "Explicaciones ancladas al proyecto en curso (concepto ↔ reto).",
    dashed: true,
  },
  {
    id: "proyecto-evaluador",
    from: "proyecto",
    to: "evaluador",
    label: "Proyecto ·· Evaluador",
    description: "Pruebas situadas en o hacia el proyecto, no solo ejercicios aislados.",
    dashed: true,
  },
  {
    id: "proyecto-companero",
    from: "proyecto",
    to: "companero",
    label: "Proyecto ·· Compañero",
    description: "Ayuda a destrabar el proyecto sin definirlo por el estudiante.",
    dashed: true,
  },
  {
    id: "contexto-proyecto",
    from: "contexto",
    to: "proyecto",
    label: "Contexto ·· Proyecto",
    description: "Intereses personales y marco de aula moldean alcance y casos de éxito.",
    dashed: true,
  },
  {
    id: "evaluador-companero",
    from: "evaluador",
    to: "companero",
    label: "Evaluador ·· Compañero",
    description: "Ayuda mínima vs iterar con casos relacionados.",
    dashed: true,
  },
  {
    id: "visor-companero",
    from: "visor",
    to: "companero",
    label: "Visor ·· Compañero",
    description: "Impartición narrada vs diálogo a pedido.",
    dashed: true,
  },
];

export const entityById = Object.fromEntries(
  entities.map((e) => [e.id, e]),
) as Record<string, SystemEntity>;

/** Posiciones del diagrama (viewBox 0 0 920 640) */
export const diagramNodes = [
  { id: "ruta-u1", label: "Unidad 1", x: 200, y: 52, kind: "scale" as const },
  { id: "ruta-u2", label: "Unidad 2", x: 460, y: 52, kind: "scale" as const },
  { id: "ruta-u3", label: "Unidad 3", x: 720, y: 52, kind: "scale" as const },
  { id: "contexto", label: "Contexto", x: 120, y: 200, kind: "entity" as const },
  { id: "arbol", label: "Árbol", x: 400, y: 240, kind: "entity" as const, central: true },
  { id: "proyecto", label: "Proyecto", x: 720, y: 160, kind: "entity" as const },
  { id: "visor", label: "Visor", x: 720, y: 280, kind: "entity" as const },
  { id: "evaluador", label: "Evaluador", x: 720, y: 400, kind: "entity" as const },
  { id: "estudiante", label: "Estudiante", x: 160, y: 400, kind: "entity" as const },
  { id: "companero", label: "Stitch", x: 400, y: 480, kind: "entity" as const },
] as const;

export const diagramEdges = [
  { from: "ruta-u1", to: "ruta-u2", dashed: false, label: "árbol ↔ árbol" },
  { from: "ruta-u2", to: "ruta-u3", dashed: false, label: "" },
  { from: "contexto", to: "arbol", dashed: false },
  { from: "arbol", to: "proyecto", dashed: false },
  { from: "arbol", to: "visor", dashed: false },
  { from: "arbol", to: "evaluador", dashed: false },
  { from: "estudiante", to: "arbol", dashed: false },
  { from: "estudiante", to: "proyecto", dashed: false },
  { from: "estudiante", to: "visor", dashed: false },
  { from: "estudiante", to: "companero", dashed: false },
  { from: "evaluador", to: "estudiante", dashed: false },
  { from: "proyecto", to: "visor", dashed: true },
  { from: "proyecto", to: "evaluador", dashed: true },
  { from: "evaluador", to: "companero", dashed: true },
  { from: "companero", to: "arbol", dashed: false },
] as const;

export const implementationLine = {
  title: "Línea de implementación",
  now: "Ingeniería de software: programación, paradigmas, estructuras de datos, algoritmos, principios de ingeniería de software (Stitch Code).",
  horizon: "Abierto a otras ingenierías — p. ej. simulaciones de elementos eléctricos — como futuras unidades con el mismo mapa de entidades.",
};
