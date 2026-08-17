export const clusters = [
  {
    id: "acto",
    label: "Acto de enseñanza",
    blurb: "Intervenciones dirigidas a orientar o evaluar el aprendizaje.",
  },
  {
    id: "desempeno",
    label: "Desempeño",
    blurb: "Ejecución observable respecto de una meta o criterio.",
  },
  {
    id: "cognitivo",
    label: "Cognitivo",
    blurb: "Recursos y operaciones mentales implicados en el aprendizaje.",
  },
  {
    id: "self",
    label: "Persona",
    blurb: "Regulación, autoconcepto y afecto del aprendiz.",
  },
] as const;

export type ClusterId = (typeof clusters)[number]["id"];

export type Concept = {
  id: string;
  label: string;
  cluster: ClusterId;
  definition: string;
};

export type RelationKind =
  | "precede"
  | "informa"
  | "dispara"
  | "es_tipo"
  | "regula"
  | "orienta"
  | "impone"
  | "permite"
  | "tensiona"
  | "guia"
  | "se_prueba";

export const relationLabels: Record<RelationKind, string> = {
  precede: "precede",
  informa: "informa",
  dispara: "dispara",
  es_tipo: "es un tipo de",
  regula: "regula",
  orienta: "orienta",
  impone: "impone",
  permite: "permite",
  tensiona: "tensiona",
  guia: "guía",
  se_prueba: "se pone a prueba en",
};

export type ConceptEdge = {
  from: string;
  to: string;
  kind: RelationKind;
};

export const concepts: Concept[] = [
  {
    id: "instruccion",
    label: "Instrucción",
    cluster: "acto",
    definition:
      "Conjunto de acciones mediante las cuales se presenta información, se modela un procedimiento o se guía la actividad del aprendiz a fin de facilitar la adquisición de conocimientos o habilidades.",
  },
  {
    id: "retroalimentacion",
    label: "Retroalimentación",
    cluster: "acto",
    definition:
      "Información proporcionada a un aprendiz acerca de su desempeño o comprensión, en relación con una meta o un criterio, con el propósito de reducir la brecha entre el estado actual y el estado deseado.",
  },
  {
    id: "pista",
    label: "Pista",
    cluster: "acto",
    definition:
      "Indicio o señal (cue) que restringe el espacio de búsqueda o orienta la estrategia, sin suministrar por sí misma la solución completa de la tarea.",
  },
  {
    id: "calificacion",
    label: "Calificación",
    cluster: "acto",
    definition:
      "Asignación de un valor numérico o categorial a un desempeño según una escala preestablecida; constituye una forma de evaluación sumativa, no necesariamente informativa para la mejora.",
  },
  {
    id: "metas",
    label: "Metas",
    cluster: "desempeno",
    definition:
      "Estados o resultados de aprendizaje que se pretenden alcanzar y que sirven de referente para orientar la acción, el monitoreo y la evaluación.",
  },
  {
    id: "desempeno",
    label: "Desempeño",
    cluster: "desempeno",
    definition:
      "Ejecución observable de una tarea o procedimiento, mediante la cual se manifiesta el grado de dominio alcanzado respecto de un criterio.",
  },
  {
    id: "error",
    label: "Error",
    cluster: "desempeno",
    definition:
      "Desviación de una respuesta o de un procedimiento respecto del criterio de corrección o de la meta establecida.",
  },
  {
    id: "acierto",
    label: "Acierto",
    cluster: "desempeno",
    definition:
      "Respuesta o ejecución que satisface el criterio de corrección o la meta establecida para la tarea.",
  },
  {
    id: "capacidad-cognitiva",
    label: "Capacidad cognitiva",
    cluster: "cognitivo",
    definition:
      "Conjunto de recursos intelectuales disponibles para percibir, procesar, almacenar y utilizar información en la resolución de tareas de aprendizaje.",
  },
  {
    id: "carga-cognitiva",
    label: "Carga cognitiva",
    cluster: "cognitivo",
    definition:
      "Demanda impuesta a la memoria de trabajo por los elementos de una tarea, de la instrucción o del entorno, en un momento dado.",
  },
  {
    id: "memoria",
    label: "Memoria",
    cluster: "cognitivo",
    definition:
      "Función cognitiva de codificación, almacenamiento y recuperación de información, tanto a corto plazo (memoria de trabajo) como a largo plazo.",
  },
  {
    id: "proceso-mental",
    label: "Proceso mental",
    cluster: "cognitivo",
    definition:
      "Operación cognitiva implicada en el aprendizaje —por ejemplo, atender, interpretar, elaborar, ensayar o monitorear— que media entre la instrucción y el desempeño.",
  },
  {
    id: "habilidad",
    label: "Habilidad",
    cluster: "cognitivo",
    definition:
      "Capacidad adquirida de ejecutar con eficacia una clase de tareas en un dominio, como resultado de la práctica y de la interiorización de procedimientos.",
  },
  {
    id: "deficiencias-aprendizaje",
    label: "Deficiencias de aprendizaje",
    cluster: "cognitivo",
    definition:
      "Lagunas, dificultades o patrones persistentes que impiden o retrasan la adquisición, consolidación o transferencia de conocimientos y habilidades.",
  },
  {
    id: "hipotesis",
    label: "Hipótesis",
    cluster: "cognitivo",
    definition:
      "Proposición tentativa, formulada por el aprendiz o por quien investiga, que explica un fenómeno y es susceptible de contrastación mediante evidencia o desempeño.",
  },
  {
    id: "autocontrol",
    label: "Autocontrol",
    cluster: "self",
    definition:
      "Regulación que el aprendiz ejerce sobre su propia conducta, atención y estrategias (autorregulación), a fin de persistir y ajustar el proceso hacia una meta.",
  },
  {
    id: "seguridad",
    label: "Seguridad",
    cluster: "self",
    definition:
      "Percepción de que el entorno de aprendizaje tolera el error y la incertidumbre sin sanción ni amenaza a la identidad; condición de seguridad psicológica.",
  },
  {
    id: "concepto-propio",
    label: "Concepto propio",
    cluster: "self",
    definition:
      "Representación que el aprendiz se forma de sí mismo —en particular de su competencia en un dominio (autoconcepto)—, distinguible de la valoración afectiva de esa representación.",
  },
  {
    id: "autoestima",
    label: "Autoestima",
    cluster: "self",
    definition:
      "Valoración afectiva global que el sujeto hace de sí mismo; en contextos educativos, se distingue del autoconcepto y no equivale a información sobre la tarea.",
  },
];

/** Vínculos de trabajo: hipótesis de relación, no un mapa cerrado. */
export const conceptEdges: ConceptEdge[] = [
  { from: "instruccion", to: "retroalimentacion", kind: "precede" },
  { from: "instruccion", to: "carga-cognitiva", kind: "impone" },
  { from: "pista", to: "retroalimentacion", kind: "es_tipo" },
  { from: "pista", to: "proceso-mental", kind: "guia" },
  { from: "error", to: "retroalimentacion", kind: "dispara" },
  { from: "acierto", to: "retroalimentacion", kind: "dispara" },
  { from: "retroalimentacion", to: "metas", kind: "informa" },
  { from: "retroalimentacion", to: "desempeno", kind: "informa" },
  { from: "retroalimentacion", to: "autocontrol", kind: "informa" },
  { from: "calificacion", to: "retroalimentacion", kind: "tensiona" },
  { from: "calificacion", to: "autoestima", kind: "tensiona" },
  { from: "metas", to: "desempeno", kind: "orienta" },
  { from: "desempeno", to: "error", kind: "dispara" },
  { from: "desempeno", to: "acierto", kind: "dispara" },
  { from: "autocontrol", to: "metas", kind: "regula" },
  { from: "autocontrol", to: "desempeno", kind: "regula" },
  { from: "seguridad", to: "error", kind: "permite" },
  { from: "carga-cognitiva", to: "capacidad-cognitiva", kind: "tensiona" },
  { from: "carga-cognitiva", to: "memoria", kind: "impone" },
  { from: "proceso-mental", to: "memoria", kind: "regula" },
  { from: "proceso-mental", to: "hipotesis", kind: "guia" },
  { from: "hipotesis", to: "error", kind: "se_prueba" },
  { from: "deficiencias-aprendizaje", to: "error", kind: "dispara" },
  { from: "deficiencias-aprendizaje", to: "carga-cognitiva", kind: "impone" },
  { from: "habilidad", to: "desempeno", kind: "orienta" },
  { from: "concepto-propio", to: "autoestima", kind: "orienta" },
  { from: "retroalimentacion", to: "concepto-propio", kind: "tensiona" },
];

export function conceptById(id: string) {
  return concepts.find((c) => c.id === id);
}

export function neighborsOf(id: string) {
  return conceptEdges.filter((e) => e.from === id || e.to === id);
}
