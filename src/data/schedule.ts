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
    question: "¿Cómo aprende realmente una persona?",
    focus: "Marco conceptual, aprendizaje autónomo y panorama de IA en educación.",
  },
  {
    id: 2 as const,
    title: "Experimentación",
    range: "Septiembre",
    question: "¿Qué puede hacer la IA para ayudar durante ese proceso?",
    focus: "Prototipos pequeños, interacción, modelo del aprendiz y principios de diseño.",
  },
  {
    id: 3 as const,
    title: "Diseño del sistema",
    range: "Octubre",
    question: "¿Cómo debe diseñarse un tutor inteligente?",
    focus: "Arquitectura, flujo de aprendizaje, personalización y modelo conceptual.",
  },
  {
    id: 4 as const,
    title: "Prototipo integrado",
    range: "Noviembre – mitad de diciembre",
    question: "¿Cómo demostrar que ese tutor funciona?",
    focus: "Construcción, evaluación preliminar, consolidación y presentación final.",
  },
] as const;

export const milestones: Milestone[] = [
  {
    id: "w01",
    date: "2026-08-05",
    dateLabel: "05 Ago",
    month: "agosto",
    phase: 1,
    objective: "Presentación del plan de trabajo.",
    deliverable: "Sitio web con estructura inicial del proyecto y cronograma.",
  },
  {
    id: "w02",
    date: "2026-08-12",
    dateLabel: "12 Ago",
    month: "agosto",
    phase: 1,
    objective: "Delimitar el problema y la visión del proyecto.",
    deliverable: "Sección «¿Qué problema quiero resolver?» con motivación, alcance y preguntas.",
  },
  {
    id: "w03",
    date: "2026-08-19",
    dateLabel: "19 Ago",
    month: "agosto",
    phase: 1,
    objective: "Comprender cómo ocurre el aprendizaje.",
    deliverable: "Sección «Explorando el aprendizaje» con ideas, artículos y reflexiones.",
  },
  {
    id: "w04",
    date: "2026-08-26",
    dateLabel: "26 Ago",
    month: "agosto",
    phase: 1,
    objective: "Analizar el panorama de IA aplicada a educación.",
    deliverable: "Estado del arte interactivo comparando plataformas y enfoques.",
  },
  {
    id: "w05",
    date: "2026-09-02",
    dateLabel: "02 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Identificar oportunidades de innovación.",
    deliverable: "Sección «¿Qué falta hoy?» con hipótesis y oportunidades detectadas.",
  },
  {
    id: "w06",
    date: "2026-09-09",
    dateLabel: "09 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Experimentar con formas de interacción entre IA y estudiante.",
    deliverable: "Primer experimento interactivo publicado en la web.",
  },
  {
    id: "w07",
    date: "2026-09-16",
    dateLabel: "16 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Investigar cómo representar el estado del estudiante.",
    deliverable: "Página sobre el modelo del aprendiz, con diagramas e ideas iniciales.",
  },
  {
    id: "w08",
    date: "2026-09-23",
    dateLabel: "23 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Experimentar con estrategias de explicación y acompañamiento.",
    deliverable: "Segundo experimento funcional comparando distintas estrategias.",
  },
  {
    id: "w09",
    date: "2026-09-30",
    dateLabel: "30 Sep",
    month: "septiembre",
    phase: 2,
    objective: "Definir principios de diseño del sistema.",
    deliverable: "Sección «Principios de Stitch» con las decisiones consolidadas.",
  },
  {
    id: "w10",
    date: "2026-10-07",
    dateLabel: "07 Oct",
    month: "octubre",
    phase: 3,
    objective: "Diseñar la arquitectura general.",
    deliverable: "Arquitectura navegable del sistema con explicación de cada módulo.",
  },
  {
    id: "w11",
    date: "2026-10-14",
    dateLabel: "14 Oct",
    month: "octubre",
    phase: 3,
    objective: "Diseñar el flujo completo de aprendizaje.",
    deliverable: "Simulación interactiva del recorrido de un estudiante.",
  },
  {
    id: "w12",
    date: "2026-10-21",
    dateLabel: "21 Oct",
    month: "octubre",
    phase: 3,
    objective: "Diseñar mecanismos de personalización.",
    deliverable: "Propuesta visual del motor de adaptación y toma de decisiones.",
  },
  {
    id: "w13",
    date: "2026-10-28",
    dateLabel: "28 Oct",
    month: "octubre",
    phase: 3,
    objective: "Consolidar el modelo conceptual.",
    deliverable: "Primera versión completa de la documentación técnica en la web.",
  },
  {
    id: "w14",
    date: "2026-11-04",
    dateLabel: "04 Nov",
    month: "noviembre",
    phase: 4,
    objective: "Construir un prototipo funcional basado en la arquitectura.",
    deliverable: "Módulo funcional integrado dentro del sitio.",
  },
  {
    id: "w15",
    date: "2026-11-11",
    dateLabel: "11 Nov",
    month: "noviembre",
    phase: 4,
    objective: "Refinar el prototipo con base en los aprendizajes.",
    deliverable: "Segunda versión del prototipo con bitácora de mejoras.",
  },
  {
    id: "w16",
    date: "2026-11-18",
    dateLabel: "18 Nov",
    month: "noviembre",
    phase: 4,
    objective: "Evaluar el comportamiento del sistema.",
    deliverable: "Sección de pruebas y observaciones de la experimentación.",
  },
  {
    id: "w17",
    date: "2026-11-25",
    dateLabel: "25 Nov",
    month: "noviembre",
    phase: 4,
    objective: "Consolidar la propuesta metodológica.",
    deliverable: "Documento vivo del modelo educativo propuesto.",
  },
  {
    id: "w18",
    date: "2026-12-02",
    dateLabel: "02 Dic",
    month: "diciembre",
    phase: 4,
    objective: "Organizar resultados y proyectar el trabajo futuro.",
    deliverable: "Sección de resultados alcanzados y próximos pasos.",
  },
  {
    id: "w19",
    date: "2026-12-09",
    dateLabel: "09 Dic",
    month: "diciembre",
    phase: 4,
    objective: "Ajustes finales.",
    deliverable: "Sitio consolidado y preparado para presentación.",
  },
  {
    id: "w20",
    date: "2026-12-16",
    dateLabel: "16 Dic",
    month: "diciembre",
    phase: 4,
    objective: "Presentación final.",
    deliverable: "Plataforma como evidencia del proceso y demostración del prototipo.",
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
