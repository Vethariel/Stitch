/** Fases del semestre (usadas en /problema). El plan semanal anterior queda en el historial de git. */
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
