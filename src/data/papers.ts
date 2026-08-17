export type Paper = {
  id: string;
  authors: string;
  year: number;
  title: string;
  venue: string;
  type: string;
  doi: string;
  citation: string;
  relevant: string[];
  reflection: string[];
};

export const papers: Paper[] = [
  {
    id: "hattie-timperley-2007",
    authors: "John Hattie; Helen Timperley",
    year: 2007,
    title: "The Power of Feedback",
    venue: "Review of Educational Research, 77(1), 81–112",
    type: "Revisión + modelo conceptual",
    doi: "10.3102/003465430298487",
    citation:
      "Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81–112. https://doi.org/10.3102/003465430298487",
    relevant: [
      "Más que el meta-análisis (el feedback puede ser muy potente, pero también contraproducente), el paper deja un modelo de cómo debe contemplarse el feedback.",
      "Tres preguntas que el feedback tiene que ayudar a responder: Where am I going? (meta) · How am I going? (progreso) · Where to next? (siguiente paso).",
      "Cuatro niveles a los que puede apuntar: tarea, proceso, autorregulación, y self (elogio a la persona). Los tres primeros sostienen el aprendizaje; el nivel self suele ser el más débil.",
      "El feedback es información después de un intento, no un sustituto de la enseñanza cuando no hay base. Elogio, recompensa y castigo están entre las formas menos eficaces: contienen poca información de tarea.",
      "Las recompensas extrínsecas (puntos, premios, contingencias) no equivalen a feedback. Hattie y Timperley recogen evidencia —en particular Deci, Koestner y Ryan (1999)— de que minan la motivación intrínseca y se asocian a un impacto negativo en el desempeño, sobre todo en tareas que de otro modo resultarían interesantes.",
      "Una calificación o un ‘correcto/incorrecto’ sin explicación no llena la brecha entre el estado actual y la meta. El feedback con información sobre la tarea y sobre cómo mejorarla es más valioso que la nota sola; el efecto se pierde si no se procesa y se pasa de inmediato a la siguiente actividad.",
    ],
    reflection: [
      "Implica un conocimiento sobre la manera óptima de manejar el feedback en un proceso de aprendizaje, buscando aumentar la eficacia de lo aprendido: el agente no “da más comentarios”, sino que cubre las tres preguntas y elige el nivel (tarea / proceso / autorregulación) según dónde está la persona.",
      "La postura frente a recompensas extrínsecas apoya no implementar gamificación basada en puntuaciones, rachas u otros contingentes que sustituyen información de tarea por un incentivo externo: ese diseño tensiona el desempeño que Stitch quiere sostener.",
      "Frente a la calificación: una nota no es el mecanismo. En la evaluación del desempeño conviene feedback significativo —qué se hizo, respecto de qué meta, cómo continuar— y no saltar a la siguiente actividad apenas hay un puntaje. El grafo y las pruebas avanzan cuando hay interiorización, no cuando se cierra un ítem.",
    ],
  },
];
