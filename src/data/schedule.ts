export type Milestone = {
  id: string;
  date: string;
  dateLabel: string;
  month: "agosto" | "septiembre" | "octubre" | "noviembre" | "diciembre";
  phase: 1 | 2 | 3 | 4;
  objective: string;
  deliverable: string;
};

export const phases = [
  {
    id: 1 as const,
    title: "Fundamentación",
    range: "Agosto",
    short: "Agosto",
    question: "¿Cómo se sostiene —o se quiebra— el aprendizaje autónomo?",
    focus: "Cómo se aprende, por qué se abandona, y qué delimita el problema.",
  },
  {
    id: 2 as const,
    title: "Experimentación",
    range: "Septiembre",
    short: "Septiembre",
    question: "¿Qué puede hacer un agente de acompañamiento en ese proceso?",
    focus: "Presencia, interacción y memoria mínima: qué puede hacer el agente, no el diseño cerrado.",
  },
  {
    id: 3 as const,
    title: "Diseño del sistema",
    range: "Octubre",
    short: "Octubre",
    question: "¿Cómo se diseña ese acompañamiento sin volver a la lógica de la nota?",
    focus: "Arquitectura, flujo, grafo y pruebas de desempeño —sin calificación.",
  },
  {
    id: 4 as const,
    title: "Prototipo integrado",
    range: "Noviembre – mitad de diciembre",
    short: "Nov – Dic",
    question: "¿Cómo demostrar que sostiene constancia e interiorización?",
    focus: "Prototipo, evidencia acotada de esos dos polos, consolidación y presentación.",
  },
] as const;

export const milestones: Milestone[] = [
  {
    id: "w01",
    date: "2026-08-05",
    dateLabel: "05 Ago",
    month: "agosto",
    phase: 1,
    objective: "Presentar el plan de trabajo.",
    deliverable: "Sitio con estructura inicial del proyecto y cronograma.",
  },
  {
    id: "w02",
    date: "2026-08-12",
    dateLabel: "12 Ago",
    month: "agosto",
    phase: 1,
    objective: "Delimitar el problema y la visión.",
    deliverable: "Sección del problema: motivación, alcance y pregunta de investigación.",
  },
  {
    id: "w03",
    date: "2026-08-19",
    dateLabel: "19 Ago",
    month: "agosto",
    phase: 1,
    objective: "Comprender cómo se sostiene —o se quiebra— el aprendizaje autónomo.",
    deliverable: "Sección de exploración: constancia, abandono e interiorización, con lecturas y reflexiones.",
  },
  {
    id: "w04",
    date: "2026-08-26",
    dateLabel: "26 Ago",
    month: "agosto",
    phase: 1,
    objective: "Ver dónde se quiebra el proceso en las herramientas de hoy.",
    deliverable: "Comparación de cursos, LMS y chatbots: qué entregan y qué no acompañan.",
  },
  {
    id: "w05",
    date: "2026-09-02",
    dateLabel: "02 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Identificar qué no hace aún un agente de acompañamiento.",
    deliverable: "Sección de huecos: presencia, memoria, constancia —oportunidades, no features.",
  },
  {
    id: "w06",
    date: "2026-09-09",
    dateLabel: "09 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Experimentar la presencia: interactuar, no solo responder.",
    deliverable: "Primer experimento interactivo de compañía publicado en la web.",
  },
  {
    id: "w07",
    date: "2026-09-16",
    dateLabel: "16 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Probar qué memoria mínima basta para sentir compañía.",
    deliverable: "Notas y diagrama del modelo del aprendiz (intereses, no historial completo).",
  },
  {
    id: "w08",
    date: "2026-09-23",
    dateLabel: "23 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Probar estrategias de acompañamiento (explicar, andamiar, recuperar).",
    deliverable: "Segundo experimento comparando distintas formas de guiar.",
  },
  {
    id: "w09",
    date: "2026-09-30",
    dateLabel: "30 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Fijar qué puede —y qué no debe— hacer el agente.",
    deliverable: "Principios de acompañamiento de Stitch, aún como hipótesis.",
  },
  {
    id: "w10",
    date: "2026-10-07",
    dateLabel: "07 Oct",
    month: "octubre",
    phase: 3,
    objective: "Diseñar la arquitectura del acompañamiento.",
    deliverable: "Arquitectura navegable: módulos y cómo se sostienen entre sí.",
  },
  {
    id: "w11",
    date: "2026-10-14",
    dateLabel: "14 Oct",
    month: "octubre",
    phase: 3,
    objective: "Diseñar el flujo sin nota: prueba de desempeño → avance en el grafo.",
    deliverable: "Simulación del recorrido de un aprendiz, sin calificación.",
  },
  {
    id: "w12",
    date: "2026-10-21",
    dateLabel: "21 Oct",
    month: "octubre",
    phase: 3,
    objective: "Diseñar la personalización que no toca el núcleo.",
    deliverable: "Propuesta de lenguaje, asociaciones y capa extra sobre el grafo.",
  },
  {
    id: "w13",
    date: "2026-10-28",
    dateLabel: "28 Oct",
    month: "octubre",
    phase: 3,
    objective: "Consolidar el modelo: acompañar sin volver a la lógica de la nota.",
    deliverable: "Primera versión del modelo conceptual en la web.",
  },
  {
    id: "w14",
    date: "2026-11-04",
    dateLabel: "04 Nov",
    month: "noviembre",
    phase: 4,
    objective: "Construir un prototipo que se pueda recorrer.",
    deliverable: "Módulo funcional integrado en el sitio (Stitch Code como vehículo).",
  },
  {
    id: "w15",
    date: "2026-11-11",
    dateLabel: "11 Nov",
    month: "noviembre",
    phase: 4,
    objective: "Refinar el prototipo con lo aprendido en las pruebas.",
    deliverable: "Segunda versión con bitácora de cambios.",
  },
  {
    id: "w16",
    date: "2026-11-18",
    dateLabel: "18 Nov",
    month: "noviembre",
    phase: 4,
    objective: "Observar indicios de constancia e interiorización.",
    deliverable: "Sección de pruebas: qué se sostuvo, qué se pudo usar, qué no.",
  },
  {
    id: "w17",
    date: "2026-11-25",
    dateLabel: "25 Nov",
    month: "noviembre",
    phase: 4,
    objective: "Consolidar la propuesta de acompañamiento.",
    deliverable: "Documento vivo del modelo: lo que el prototipo permite afirmar.",
  },
  {
    id: "w18",
    date: "2026-12-02",
    dateLabel: "02 Dic",
    month: "diciembre",
    phase: 4,
    objective: "Ordenar la evidencia y el trabajo que queda.",
    deliverable: "Resultados sobre constancia e interiorización, y próximos pasos.",
  },
  {
    id: "w19",
    date: "2026-12-09",
    dateLabel: "09 Dic",
    month: "diciembre",
    phase: 4,
    objective: "Ajustes finales.",
    deliverable: "Sitio consolidado para la presentación.",
  },
  {
    id: "w20",
    date: "2026-12-16",
    dateLabel: "16 Dic",
    month: "diciembre",
    phase: 4,
    objective: "Presentar la evidencia del proceso.",
    deliverable: "Plataforma como laboratorio: pregunta, arco del semestre y prototipo.",
  },
];

export const months = [
  { id: "todos" as const, label: "Todo el semestre" },
  { id: "agosto" as const, label: "Agosto" },
  { id: "septiembre" as const, label: "Septiembre" },
  { id: "octubre" as const, label: "Octubre" },
  { id: "noviembre" as const, label: "Noviembre" },
  { id: "diciembre" as const, label: "Diciembre" },
];

export function getCurrentMilestoneId(today = new Date()): string | null {
  const iso = today.toISOString().slice(0, 10);
  let current: Milestone | null = null;

  for (const milestone of milestones) {
    if (milestone.date <= iso) current = milestone;
    else break;
  }

  return current?.id ?? null;
}
