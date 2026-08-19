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
      "Las metas que facilitan el engagement son de alta complejidad pero alcanzables, y a la vez sencillas de entender: el desafío sostiene el compromiso; la claridad permite orientar el esfuerzo.",
      "Cuatro niveles a los que puede apuntar: tarea, proceso, autorregulación, y self (elogio a la persona). Los tres primeros sostienen el aprendizaje; el nivel self suele ser el más débil.",
      "El feedback es información después de un intento, no un sustituto de la enseñanza cuando no hay base. Elogio, recompensa y castigo están entre las formas menos eficaces: contienen poca información de tarea.",
      "Es efectivo cuando hay una equivocación en el entendimiento (interpretación errónea que se puede corregir). Si el entendimiento no está presente, el feedback poco puede anclarse e incluso puede amenazar; hace falta instrucción, no solo un comentario.",
      "Las recompensas extrínsecas (puntos, premios, contingencias) no equivalen a feedback. Hattie y Timperley recogen evidencia —en particular Deci, Koestner y Ryan (1999)— de que minan la motivación intrínseca y se asocian a un impacto negativo en el desempeño, sobre todo en tareas que de otro modo resultarían interesantes.",
      "Una calificación o un ‘correcto/incorrecto’ sin explicación no llena la brecha entre el estado actual y la meta. El feedback con información sobre la tarea y sobre cómo mejorarla es más valioso que la nota sola; el efecto se pierde si no se procesa y se pasa de inmediato a la siguiente actividad.",
    ],
    reflection: [
      "Implica un conocimiento sobre la manera óptima de manejar el feedback en un proceso de aprendizaje, buscando aumentar la eficacia de lo aprendido: el agente no “da más comentarios”, sino que cubre las tres preguntas y elige el nivel (tarea / proceso / autorregulación) según dónde está la persona.",
      "Las metas del recorrido (nodos, pruebas, secuencias) deben ser exigentes y alcanzables, y formuladas de modo que se entiendan de inmediato: eso es lo que sostiene el engagement, no la recompensa externa.",
      "Si no hay base, Stitch enseña; si hay un malentendido, retroalimenta. No se trata el vacío de comprensión como si fuera un error de detalle.",
      "La postura frente a recompensas extrínsecas apoya no implementar gamificación basada en puntuaciones, rachas u otros contingentes que sustituyen información de tarea por un incentivo externo: ese diseño tensiona el desempeño que Stitch quiere sostener.",
      "Frente a la calificación: una nota no es el mecanismo. En la evaluación del desempeño conviene feedback significativo —qué se hizo, respecto de qué meta, cómo continuar— y no saltar a la siguiente actividad apenas hay un puntaje. El grafo y las pruebas avanzan cuando hay interiorización, no cuando se cierra un ítem.",
    ],
  },
  {
    id: "carless-boud-2018",
    authors: "David Carless; David Boud",
    year: 2018,
    title: "The development of student feedback literacy: enabling uptake of feedback",
    venue: "Assessment & Evaluation in Higher Education, 43(8), 1315–1325",
    type: "Artículo conceptual / marco",
    doi: "10.1080/02602938.2018.1463354",
    citation:
      "Carless, D., & Boud, D. (2018). The development of student feedback literacy: enabling uptake of feedback. Assessment & Evaluation in Higher Education, 43(8), 1315–1325. https://doi.org/10.1080/02602938.2018.1463354",
    relevant: [
      "El cuello de botella no es solo la calidad del comentario del docente: es la capacidad del estudiante de tomarlo. Definen student feedback literacy como las comprensiones, capacidades y disposiciones necesarias para dar sentido a la información y usarla para mejorar el trabajo o las estrategias de aprendizaje.",
      "Cuatro rasgos interrelacionados: apreciar el feedback (entender su rol y verse como agente); formular juicios (juicio evaluativo); gestionar el afecto; y actuar (cerrar el ciclo, no dejar el comentario sin uso).",
      "Esas capacidades no se presuponen: hay que formarlas. Sin herramientas para aprender —y para usar la retroalimentación— el sistema de feedback pierde eficacia.",
      "Los ejemplares no son modelos a copiar: son patrones con los que el aprendiz calibra qué cuenta como calidad y desarrolla un criterio propio.",
      "Un entorno que no amenaza la identidad facilita gestionar el afecto y recibir crítica. El feedback que no se trabaja (comentario aislado, siguiente tarea de inmediato) no produce uptake.",
      "Los entornos digitales / LMS pueden sostener la interacción con ejemplares y el archivo de la retroalimentación a lo largo del tiempo, de modo que no desaparezca al cerrar una actividad.",
    ],
    reflection: [
      "Hace falta formación no solo en torno a la retroalimentación, sino al estudio mismo: aprender a aprender. Para que Stitch sea efectivo se parte de que la persona tenga esas herramientas; si no las tiene, se enseñan de manera progresiva.",
      "El aprendiz es agente de su propia formación. Necesita agencia para actuar sobre la retroalimentación que recibe y, en general, sobre cómo integra el conocimiento. Stitch es un facilitador: no hará todo el trabajo. Se vuelve mejor aprendiz a través de las estrategias y el juicio que él mismo construye.",
      "La gestión del afecto y de las emociones importa: un entorno seguro facilita la recepción de la retroalimentación. Como en Hattie y Timperley, el comentario no puede quedar aislado: es una oportunidad de interiorizar y trabajar las mejoras, no un cierre de ítem.",
      "Los ejemplares valen como patrones para detectar la calidad de un trabajo o una acción —no como modelos a imitar—. En Stitch eso sirve para generar un estándar de calidad interno en el estudiante.",
      "El uso de LMS para interactuar con ejemplares y guardar la retroalimentación es un elemento potencial a tener en cuenta en el diseño: memoria de feedback y de criterios, no solo de la última nota.",
    ],
  },
  {
    id: "dunlosky-et-al-2013",
    authors: "John Dunlosky; Katherine A. Rawson; Elizabeth J. Marsh; Mitchell J. Nathan; Daniel T. Willingham",
    year: 2013,
    title: "Improving students’ learning with effective learning techniques: Promising directions from cognitive and educational psychology",
    venue: "Psychological Science in the Public Interest, 14(1), 4–58",
    type: "Monografía / revisión de técnicas",
    doi: "10.1177/1529100612453266",
    citation:
      "Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques: Promising directions from cognitive and educational psychology. Psychological Science in the Public Interest, 14(1), 4–58. https://doi.org/10.1177/1529100612453266",
    relevant: [
      "Evalúa diez técnicas de estudio que el estudiante puede aplicar por su cuenta. Utilidad alta: practice testing (recuperar) y distributed practice (espaciar). Moderada: interrogación elaborativa, autoexplicación, práctica intercalada. Baja: resumir, subrayar, mnemotecnia keyword, imaginería para texto, releer.",
      "El marco es el estudio tradicional (texto, apuntes, ítems): qué conviene hacer frente al material, no cómo diseñar un tutor, un grafo o un ciclo de aplicación.",
      "Los tests de práctica refuerzan la retención al obligar a recuperar; el beneficio suele verse mejor a demoras largas que en la prueba inmediata.",
      "La práctica distribuida: el mismo contenido, otra vez, tras un intervalo, retiene más que masificar en una sola sesión.",
    ],
    reflection: [
      "Las técnicas están muy ligadas al estudio tradicional. Sirven para saber qué no convertir en método (releer, subrayar) y qué sí refuerza memoria. El modelo de Stitch empieza después de ese marco: no es un estudiante frente a un texto, es un proceso de interiorización y aplicación.",
      "Los tests de práctica son efectivos para reforzar conceptos. A largo plazo ese refuerzo no basta si no hubo interiorización y aplicación: recuperar “qué es X” sostiene el dato, no el saber hacer. Un quiz que cierra el nodo y pasa al siguiente usa bien la técnica y mal el modelo — conocimiento estable e inerte.",
      "La práctica distribuida conviene, pero no como repaso literal de la misma ficha. En Stitch se revisitan conceptos de forma integrada con otros relacionados, para construir un mapa mental de cómo están ligados — no un calendario de flashcards. El nodo reaparece cuando un problema nuevo lo exige junto a sus vecinos.",
    ],
  },
];
