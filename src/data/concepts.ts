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
      "Indicio o señal (cue) que restringe el espacio de búsqueda o orienta la estrategia, sin suministrar por sí misma la solución completa de la tarea; forma puntual de andamiaje.",
  },
  {
    id: "calificacion",
    label: "Calificación",
    cluster: "acto",
    definition:
      "Asignación de un valor numérico o categorial a un desempeño según una escala preestablecida; constituye una forma de evaluación sumativa, no necesariamente informativa para la mejora.",
  },
  {
    id: "evaluacion-formativa",
    label: "Evaluación formativa",
    cluster: "acto",
    definition:
      "Uso de evidencia del aprendizaje durante el proceso —no al final— para orientar el siguiente paso del aprendiz y de quien acompaña; llena la brecha respecto de un criterio, a diferencia de la calificación sumativa.",
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
    id: "habilidad",
    label: "Habilidad",
    cluster: "cognitivo",
    definition:
      "Capacidad adquirida de ejecutar con eficacia una clase de tareas en un dominio, como resultado de la práctica y de la interiorización de procedimientos.",
  },
  {
    id: "pericia",
    label: "Pericia",
    cluster: "cognitivo",
    definition:
      "Nivel avanzado de conocimiento y habilidad en un dominio (expertise): patrones ricos, recuperación fluida y transferencia flexible, frente al desempeño del novato.",
  },
  {
    id: "maestria",
    label: "Maestría",
    cluster: "desempeno",
    definition:
      "Criterio de avance por dominio demostrado (mastery): se progresa cuando hay evidencia de saber hacer, no cuando pasa el tiempo del curso o se obtiene una nota.",
  },
  {
    id: "lagunas-aprendizaje",
    label: "Lagunas de aprendizaje",
    cluster: "cognitivo",
    definition:
      "Ausencias o huecos (gaps) en el conocimiento o la habilidad esperados para una tarea o un nivel; identificables frente a un mapa o criterio, y susceptibles de abordarse con instrucción o práctica.",
  },
  {
    id: "autocontrol",
    label: "Autocontrol",
    cluster: "self",
    definition:
      "Regulación puntual de impulsos, atención o conducta en el momento; pieza de la autorregulación, no el proceso completo de planificar, monitorear y ajustar el aprendizaje.",
  },
  {
    id: "autorregulacion",
    label: "Autorregulación",
    cluster: "self",
    definition:
      "Proceso por el cual el aprendiz planifica, monitorea y ajusta metas, estrategias y esfuerzo a lo largo del tiempo (self-regulated learning); incluye, pero no se reduce a, el autocontrol del momento.",
  },
  {
    id: "seguridad",
    label: "Seguridad",
    cluster: "self",
    definition:
      "Percepción de que el entorno de aprendizaje tolera el error y la incertidumbre sin sanción ni amenaza a la identidad; condición de seguridad psicológica.",
  },
  {
    id: "autoconcepto",
    label: "Autoconcepto",
    cluster: "self",
    definition:
      "Representación cognitiva que la persona se forma de sí misma —en particular de su competencia en un dominio—; se distingue de la autoestima (valoración afectiva global).",
  },
  {
    id: "autoestima",
    label: "Autoestima",
    cluster: "self",
    definition:
      "Valoración afectiva que la persona hace de sí misma como un todo; dimensión del self, distinta del autoconcepto cognitivo y de cualquier juicio puntual sobre una tarea.",
  },
  {
    id: "esfuerzo",
    label: "Esfuerzo",
    cluster: "desempeno",
    definition:
      "Movilización de recursos atencionales y de acción que el aprendiz dedica a una tarea con el fin de alcanzar una meta.",
  },
  {
    id: "persistencia",
    label: "Persistencia",
    cluster: "self",
    definition:
      "Continuidad de la acción hacia una meta a lo largo del tiempo, pese a dificultad, aburrimiento o interrupción; dimensión de la constancia en el aprendizaje.",
  },
  {
    id: "actitud",
    label: "Actitud",
    cluster: "self",
    definition:
      "Disposición relativamente estable hacia el aprendizaje, la tarea o la retroalimentación, que predispone a la aproximación o a la evitación.",
  },
  {
    id: "juicio",
    label: "Juicio",
    cluster: "cognitivo",
    definition:
      "Capacidad de apreciar la calidad de un desempeño o de un producto frente a un criterio (juicio evaluativo), distinguible de la mera recepción de una nota.",
  },
  {
    id: "emocion",
    label: "Emoción",
    cluster: "self",
    definition:
      "Respuesta afectiva ante la tarea, el error o la retroalimentación, que puede facilitar o inhibir su procesamiento y su uso posterior.",
  },
  {
    id: "agencia",
    label: "Agencia",
    cluster: "self",
    definition:
      "Capacidad del aprendiz de actuar con intención sobre su propio proceso formativo, incluyendo el uso de la retroalimentación y la integración del conocimiento.",
  },
  {
    id: "autonomia",
    label: "Autonomía",
    cluster: "self",
    definition:
      "Necesidad psicológica de sentir que la acción es voluntaria y alineada con valores propios (self-determination); no equivale a estudiar sin compañía.",
  },
  {
    id: "competencia",
    label: "Competencia",
    cluster: "self",
    definition:
      "Necesidad psicológica de sentir eficacia y progreso en lo que se hace (self-determination); se distingue de la «competencia» como listado de habilidades del currículum.",
  },
  {
    id: "relacion",
    label: "Relación",
    cluster: "self",
    definition:
      "Necesidad psicológica de vínculo y pertenencia con otros significativos (self-determination); en Stitch, la presencia del compañero responde en parte a esta necesidad.",
  },
  {
    id: "estrategia-aprendizaje",
    label: "Estrategia de aprendizaje",
    cluster: "cognitivo",
    definition:
      "Procedimiento deliberado que el aprendiz emplea para adquirir, organizar, recuperar o aplicar conocimientos y habilidades.",
  },
  {
    id: "ejemplar",
    label: "Ejemplar",
    cluster: "acto",
    definition:
      "Muestra de desempeño o de producto, de calidad variable, empleada para que el aprendiz discierna criterios de calidad; no constituye un modelo a copiar.",
  },
  {
    id: "autoexplicacion",
    label: "Autoexplicación",
    cluster: "cognitivo",
    definition:
      "Práctica de explicar un ejemplo o un paso ligándolo a principios y monitoreando el malentendido, en lugar de copiar el ejemplar; construye mapa interno.",
  },
  {
    id: "integracion-conocimiento",
    label: "Integración de conocimiento",
    cluster: "cognitivo",
    definition:
      "Articulación de ideas entre sí y con el conocimiento previo, de modo que reaparecen ligadas (reencuentro relacional), no como ítems aislados acumulados.",
  },
  {
    id: "comprension",
    label: "Comprensión",
    cluster: "cognitivo",
    definition:
      "Estado y proceso de captar el sentido de un contenido o procedimiento y de construir un modelo coherente que permita interpretarlo y usarlo más allá de la reproducción. El feedback suele ser eficaz ante un malentendido, no ante la ausencia de comprensión.",
  },
  {
    id: "significado",
    label: "Significado",
    cluster: "cognitivo",
    definition:
      "Contenido semántico de un signo, un símbolo o una expresión: lo que dichos elementos designan o evocan, con independencia de si un sujeto particular lo ha captado.",
  },
  {
    id: "informacion",
    label: "Información",
    cluster: "cognitivo",
    definition:
      "Contenido organizado que reduce incertidumbre respecto de un estado de cosas; se distingue del dato por su estructuración y del conocimiento por no exigir aún justificación ni anclaje en un dominio.",
  },
  {
    id: "conocimiento",
    label: "Conocimiento",
    cluster: "cognitivo",
    definition:
      "Conjunto estructurado de proposiciones, conceptos y procedimientos propios de un dominio —contenido epistémico disponible—, independiente de si un sujeto particular lo ha interiorizado.",
  },
  {
    id: "dato",
    label: "Dato",
    cluster: "cognitivo",
    definition:
      "Registro o medida elemental, sin organización ni interpretación por sí mismo.",
  },
  {
    id: "ciclo-retroalimentacion",
    label: "Ciclo de retroalimentación",
    cluster: "acto",
    definition:
      "Secuencia reiterada en la que un desempeño genera información, esta se interpreta y da lugar a una acción que modifica el intento siguiente.",
  },
  {
    id: "participacion",
    label: "Participación",
    cluster: "desempeno",
    definition:
      "Implicación activa del aprendiz en las actividades, en el uso de la retroalimentación y en las decisiones sobre su propio recorrido; metáfora de aprender con otros, no solo «adquirir» contenidos.",
  },
  {
    id: "recuperacion",
    label: "Recuperación",
    cluster: "cognitivo",
    definition:
      "Evocación activa de información o de un procedimiento desde la memoria (retrieval); se distingue de la mera reexposición o relectura. Incluye el recall (traer a la conciencia sin pistas completas) y otras formas de acceso a lo almacenado.",
  },
  {
    id: "conocimiento-previo",
    label: "Conocimiento previo",
    cluster: "cognitivo",
    definition:
      "Conjunto de saberes, patrones y experiencias que el aprendiz ya posee y que sirven de anclaje para interpretar, asociar y subsumir información nueva.",
  },
  {
    id: "ejecucion",
    label: "Ejecución",
    cluster: "desempeno",
    definition:
      "Puesta en acto de un procedimiento o estrategia en una tarea concreta; manifiesta si el conocimiento se ha compilado en habilidad o permanece solo enunciable.",
  },
  {
    id: "analogia",
    label: "Analogía",
    cluster: "cognitivo",
    definition:
      "Mapeo de relaciones de un dominio conocido (base) a un dominio nuevo (meta), de modo que la estructura ya poseída organiza lo que se está aprendiendo.",
  },
  {
    id: "patron",
    label: "Patrón",
    cluster: "cognitivo",
    definition:
      "Estructura o regularidad que organiza elementos y relaciones de una clase de situaciones; permite reconocer, anticipar, clasificar, juzgar calidad y transferir más allá de un caso aislado.",
  },
  {
    id: "transferencia",
    label: "Transferencia de conocimiento",
    cluster: "desempeno",
    definition:
      "Aplicación de lo aprendido en un contexto, formato o dominio distinto de aquel en que se adquirió (knowledge transfer); puede ser cercana (mismo tipo de ejercicio) o lejana (uso real).",
  },
  {
    id: "conocimiento-inerte",
    label: "Conocimiento inerte",
    cluster: "cognitivo",
    definition:
      "Conocimiento que se posee y puede enunciarse, pero no se utiliza de manera espontánea ni eficaz en la resolución de problemas o en la ejecución.",
  },
  {
    id: "conocimiento-declarativo",
    label: "Conocimiento declarativo",
    cluster: "cognitivo",
    definition:
      "Saber qué: hechos, conceptos o reglas que se pueden enunciar; no implica por sí mismo ejecutar con fluidez.",
  },
  {
    id: "conocimiento-procedimental",
    label: "Conocimiento procedimental",
    cluster: "cognitivo",
    definition:
      "Saber cómo: procedimientos compilados en la acción, que se ejecutan con creciente automaticidad a partir de la práctica.",
  },
  {
    id: "interiorizacion",
    label: "Interiorización",
    cluster: "cognitivo",
    definition:
      "Proceso por el cual un contenido o procedimiento pasa de depender de apoyo externo a formar parte del repertorio estable del aprendiz, disponible para comprender y ejecutar.",
  },
  {
    id: "andamiaje",
    label: "Andamiaje",
    cluster: "acto",
    definition:
      "Apoyo temporal que sostiene los elementos de la tarea que aún exceden al aprendiz y se retira a medida que gana competencia (fading).",
  },
  {
    id: "descubrimiento",
    label: "Descubrimiento",
    cluster: "acto",
    definition:
      "Aprendizaje con guía mínima o por indagación abierta; puede sobrecargar al novato si no hay base suficiente —tensión de diseño frente a la instrucción y el andamiaje.",
  },
  {
    id: "practica-distribuida",
    label: "Práctica distribuida",
    cluster: "acto",
    definition:
      "Distribución de episodios de estudio o práctica a lo largo del tiempo (spacing), en lugar de concentrarlos en una sola sesión masiva.",
  },
  {
    id: "intercalado",
    label: "Intercalado",
    cluster: "acto",
    definition:
      "Práctica mezclada de tipos de problemas o conceptos emparentados (interleaving), de modo que el aprendiz debe seleccionar la estrategia y relacionar categorías, no repetir un bloque homogéneo.",
  },
  {
    id: "fluidez",
    label: "Fluidez",
    cluster: "self",
    definition:
      "Sensación subjetiva de facilidad al procesar un material; suele tomarse por error como señal de aprendizaje, cuando puede reflejar solo familiaridad inmediata.",
  },
  {
    id: "dificultad-deseable",
    label: "Dificultad deseable",
    cluster: "acto",
    definition:
      "Condición de práctica que incrementa el esfuerzo cognitivo (recuperar, espaciar, intercalar, generar) y, con ello, la retención y la transferencia a largo plazo, a costa de un desempeño más costoso en el momento.",
  },
  {
    id: "recompensa-extrinseca",
    label: "Recompensa extrínseca",
    cluster: "acto",
    definition:
      "Contingencia externa al aprendizaje de la tarea (puntos, premios, rachas) que contiene poca información de desempeño y puede minar la motivación intrínseca.",
  },
  {
    id: "codificacion",
    label: "Codificación",
    cluster: "cognitivo",
    definition:
      "Proceso de transformar información percibida en una representación susceptible de almacenarse en la memoria; la calidad de la codificación condiciona la recuperación ulterior. Vocabulario fino de memoria; en diseño suele bastar hablar de memoria y recuperación.",
  },
  {
    id: "decodificacion",
    label: "Decodificación",
    cluster: "cognitivo",
    definition:
      "Interpretación de una representación almacenada o de una señal externa para recuperar o reconstruir su significado. Vocabulario fino de memoria; en diseño suele bastar hablar de recuperación y comprensión.",
  },
  {
    id: "motivacion",
    label: "Motivación",
    cluster: "self",
    definition:
      "Fuerza que energiza, dirige y sostiene la conducta hacia una meta de aprendizaje; puede originarse en el interés por la tarea misma o en contingencias externas a ella.",
  },
  {
    id: "motivacion-intrinseca",
    label: "Motivación intrínseca",
    cluster: "self",
    definition:
      "Motivación que surge del interés, la curiosidad o el disfrute de la actividad en sí, sin depender de recompensas o sanciones externas.",
  },
  {
    id: "motivacion-extrinseca",
    label: "Motivación extrínseca",
    cluster: "self",
    definition:
      "Motivación sustentada en consecuencias externas a la tarea (notas, premios, obligación, aprobación); puede coexistir con la intrínseca, pero la recompensa extrínseca mal diseñada tiende a minarla.",
  },
  {
    id: "creencia",
    label: "Creencia",
    cluster: "cognitivo",
    definition:
      "Convicción que se sostiene sin base epistémica suficiente —un «saber» que no está justificado ni contrastado—. Se distingue del conocimiento (contenido estructurado y anclado en un dominio) y puede orientar actitud y persistencia aunque contradiga la evidencia de desempeño.",
  },
  {
    id: "comportamiento",
    label: "Comportamiento",
    cluster: "desempeno",
    definition:
      "Conducta observable del sujeto (behaviour) en un entorno —aproximación, evitación, persistencia, uso de estrategias—; en aprendizaje, se distingue del estado mental que la acompaña y del criterio de desempeño frente a una meta.",
  },
];

/** Vínculos de trabajo: hipótesis de relación, no un mapa cerrado. */
export const conceptEdges: ConceptEdge[] = [
  { from: "instruccion", to: "retroalimentacion", kind: "precede" },
  { from: "instruccion", to: "carga-cognitiva", kind: "impone" },
  { from: "instruccion", to: "descubrimiento", kind: "tensiona" },
  { from: "andamiaje", to: "descubrimiento", kind: "tensiona" },
  { from: "pista", to: "retroalimentacion", kind: "es_tipo" },
  { from: "pista", to: "andamiaje", kind: "es_tipo" },
  { from: "pista", to: "estrategia-aprendizaje", kind: "guia" },
  { from: "error", to: "retroalimentacion", kind: "dispara" },
  { from: "acierto", to: "retroalimentacion", kind: "dispara" },
  { from: "retroalimentacion", to: "metas", kind: "informa" },
  { from: "retroalimentacion", to: "desempeno", kind: "informa" },
  { from: "retroalimentacion", to: "autorregulacion", kind: "informa" },
  { from: "retroalimentacion", to: "autocontrol", kind: "informa" },
  { from: "retroalimentacion", to: "comprension", kind: "informa" },
  { from: "evaluacion-formativa", to: "retroalimentacion", kind: "orienta" },
  { from: "evaluacion-formativa", to: "calificacion", kind: "tensiona" },
  { from: "evaluacion-formativa", to: "ciclo-retroalimentacion", kind: "informa" },
  { from: "calificacion", to: "retroalimentacion", kind: "tensiona" },
  { from: "calificacion", to: "autoestima", kind: "tensiona" },
  { from: "metas", to: "desempeno", kind: "orienta" },
  { from: "desempeno", to: "error", kind: "dispara" },
  { from: "desempeno", to: "acierto", kind: "dispara" },
  { from: "autorregulacion", to: "metas", kind: "regula" },
  { from: "autorregulacion", to: "estrategia-aprendizaje", kind: "regula" },
  { from: "autorregulacion", to: "persistencia", kind: "regula" },
  { from: "autocontrol", to: "autorregulacion", kind: "es_tipo" },
  { from: "autocontrol", to: "comportamiento", kind: "regula" },
  { from: "seguridad", to: "error", kind: "permite" },
  { from: "carga-cognitiva", to: "memoria", kind: "impone" },
  { from: "lagunas-aprendizaje", to: "error", kind: "dispara" },
  { from: "lagunas-aprendizaje", to: "carga-cognitiva", kind: "impone" },
  { from: "lagunas-aprendizaje", to: "conocimiento", kind: "tensiona" },
  { from: "habilidad", to: "desempeno", kind: "orienta" },
  { from: "habilidad", to: "pericia", kind: "precede" },
  { from: "pericia", to: "transferencia", kind: "permite" },
  { from: "maestria", to: "desempeno", kind: "orienta" },
  { from: "maestria", to: "calificacion", kind: "tensiona" },
  { from: "maestria", to: "lagunas-aprendizaje", kind: "informa" },
  { from: "autoconcepto", to: "autoestima", kind: "orienta" },
  { from: "retroalimentacion", to: "autoconcepto", kind: "tensiona" },
  { from: "dato", to: "informacion", kind: "precede" },
  { from: "informacion", to: "conocimiento", kind: "precede" },
  { from: "informacion", to: "significado", kind: "informa" },
  { from: "conocimiento", to: "comprension", kind: "permite" },
  { from: "significado", to: "comprension", kind: "permite" },
  { from: "retroalimentacion", to: "informacion", kind: "es_tipo" },
  { from: "calificacion", to: "dato", kind: "es_tipo" },
  { from: "instruccion", to: "comprension", kind: "orienta" },
  { from: "conocimiento", to: "habilidad", kind: "orienta" },
  { from: "ejemplar", to: "juicio", kind: "guia" },
  { from: "ejemplar", to: "autoexplicacion", kind: "guia" },
  { from: "autoexplicacion", to: "comprension", kind: "orienta" },
  { from: "autoexplicacion", to: "integracion-conocimiento", kind: "informa" },
  { from: "integracion-conocimiento", to: "patron", kind: "orienta" },
  { from: "integracion-conocimiento", to: "transferencia", kind: "permite" },
  { from: "integracion-conocimiento", to: "practica-distribuida", kind: "informa" },
  { from: "juicio", to: "desempeno", kind: "regula" },
  { from: "agencia", to: "estrategia-aprendizaje", kind: "regula" },
  { from: "agencia", to: "retroalimentacion", kind: "permite" },
  { from: "agencia", to: "participacion", kind: "regula" },
  { from: "agencia", to: "autorregulacion", kind: "permite" },
  { from: "emocion", to: "retroalimentacion", kind: "tensiona" },
  { from: "seguridad", to: "emocion", kind: "permite" },
  { from: "actitud", to: "participacion", kind: "orienta" },
  { from: "actitud", to: "agencia", kind: "orienta" },
  { from: "metas", to: "esfuerzo", kind: "orienta" },
  { from: "esfuerzo", to: "desempeno", kind: "orienta" },
  { from: "persistencia", to: "esfuerzo", kind: "orienta" },
  { from: "persistencia", to: "participacion", kind: "permite" },
  { from: "motivacion", to: "persistencia", kind: "orienta" },
  { from: "participacion", to: "ciclo-retroalimentacion", kind: "permite" },
  { from: "retroalimentacion", to: "ciclo-retroalimentacion", kind: "precede" },
  { from: "ciclo-retroalimentacion", to: "desempeno", kind: "informa" },
  { from: "retroalimentacion", to: "estrategia-aprendizaje", kind: "informa" },
  { from: "recuperacion", to: "memoria", kind: "es_tipo" },
  { from: "recuperacion", to: "conocimiento", kind: "informa" },
  { from: "recuperacion", to: "dificultad-deseable", kind: "es_tipo" },
  { from: "conocimiento-previo", to: "analogia", kind: "permite" },
  { from: "conocimiento-previo", to: "patron", kind: "orienta" },
  { from: "conocimiento-previo", to: "comprension", kind: "permite" },
  { from: "conocimiento-previo", to: "integracion-conocimiento", kind: "permite" },
  { from: "analogia", to: "patron", kind: "guia" },
  { from: "analogia", to: "conocimiento-previo", kind: "se_prueba" },
  { from: "patron", to: "transferencia", kind: "permite" },
  { from: "patron", to: "conocimiento", kind: "es_tipo" },
  { from: "patron", to: "juicio", kind: "guia" },
  { from: "ejecucion", to: "desempeno", kind: "es_tipo" },
  { from: "conocimiento-procedimental", to: "ejecucion", kind: "orienta" },
  { from: "conocimiento-declarativo", to: "conocimiento-procedimental", kind: "precede" },
  { from: "conocimiento-declarativo", to: "conocimiento", kind: "es_tipo" },
  { from: "conocimiento-procedimental", to: "conocimiento", kind: "es_tipo" },
  { from: "conocimiento-previo", to: "recuperacion", kind: "permite" },
  { from: "conocimiento-inerte", to: "ejecucion", kind: "tensiona" },
  { from: "practica-distribuida", to: "recuperacion", kind: "informa" },
  { from: "intercalado", to: "transferencia", kind: "permite" },
  { from: "andamiaje", to: "carga-cognitiva", kind: "regula" },
  { from: "recuperacion", to: "interiorizacion", kind: "informa" },
  { from: "ejecucion", to: "juicio", kind: "dispara" },
  { from: "conocimiento-procedimental", to: "habilidad", kind: "precede" },
  { from: "analogia", to: "transferencia", kind: "permite" },
  { from: "conocimiento-declarativo", to: "conocimiento-inerte", kind: "tensiona" },
  { from: "conocimiento-inerte", to: "transferencia", kind: "tensiona" },
  { from: "ejecucion", to: "transferencia", kind: "permite" },
  { from: "interiorizacion", to: "conocimiento-procedimental", kind: "orienta" },
  { from: "interiorizacion", to: "habilidad", kind: "orienta" },
  { from: "andamiaje", to: "instruccion", kind: "es_tipo" },
  { from: "andamiaje", to: "agencia", kind: "orienta" },
  { from: "practica-distribuida", to: "memoria", kind: "orienta" },
  { from: "practica-distribuida", to: "dificultad-deseable", kind: "es_tipo" },
  { from: "intercalado", to: "practica-distribuida", kind: "informa" },
  { from: "intercalado", to: "patron", kind: "guia" },
  { from: "intercalado", to: "dificultad-deseable", kind: "es_tipo" },
  { from: "fluidez", to: "recuperacion", kind: "tensiona" },
  { from: "fluidez", to: "actitud", kind: "informa" },
  { from: "dificultad-deseable", to: "esfuerzo", kind: "impone" },
  { from: "actitud", to: "dificultad-deseable", kind: "permite" },
  { from: "recompensa-extrinseca", to: "retroalimentacion", kind: "tensiona" },
  { from: "recompensa-extrinseca", to: "actitud", kind: "tensiona" },
  { from: "ciclo-retroalimentacion", to: "recuperacion", kind: "informa" },
  { from: "ejemplar", to: "patron", kind: "guia" },
  { from: "transferencia", to: "habilidad", kind: "informa" },
  { from: "comprension", to: "interiorizacion", kind: "precede" },
  { from: "ejecucion", to: "error", kind: "dispara" },
  { from: "recuperacion", to: "ejecucion", kind: "informa" },
  { from: "codificacion", to: "memoria", kind: "precede" },
  { from: "codificacion", to: "informacion", kind: "orienta" },
  { from: "decodificacion", to: "recuperacion", kind: "informa" },
  { from: "decodificacion", to: "significado", kind: "orienta" },
  { from: "pista", to: "decodificacion", kind: "guia" },
  { from: "motivacion", to: "esfuerzo", kind: "orienta" },
  { from: "motivacion", to: "desempeno", kind: "orienta" },
  { from: "motivacion-intrinseca", to: "motivacion", kind: "es_tipo" },
  { from: "motivacion-extrinseca", to: "motivacion", kind: "es_tipo" },
  { from: "recompensa-extrinseca", to: "motivacion-extrinseca", kind: "orienta" },
  { from: "recompensa-extrinseca", to: "motivacion-intrinseca", kind: "tensiona" },
  { from: "motivacion-intrinseca", to: "agencia", kind: "permite" },
  { from: "motivacion-extrinseca", to: "actitud", kind: "informa" },
  { from: "calificacion", to: "motivacion-extrinseca", kind: "orienta" },
  { from: "seguridad", to: "motivacion-intrinseca", kind: "permite" },
  { from: "autonomia", to: "motivacion-intrinseca", kind: "permite" },
  { from: "competencia", to: "motivacion-intrinseca", kind: "permite" },
  { from: "relacion", to: "motivacion-intrinseca", kind: "permite" },
  { from: "autonomia", to: "agencia", kind: "orienta" },
  { from: "competencia", to: "autoconcepto", kind: "informa" },
  { from: "relacion", to: "seguridad", kind: "orienta" },
  { from: "creencia", to: "conocimiento", kind: "tensiona" },
  { from: "creencia", to: "actitud", kind: "orienta" },
  { from: "creencia", to: "autoconcepto", kind: "informa" },
  { from: "creencia", to: "motivacion", kind: "orienta" },
  { from: "creencia", to: "persistencia", kind: "orienta" },
  { from: "retroalimentacion", to: "creencia", kind: "tensiona" },
  { from: "fluidez", to: "creencia", kind: "informa" },
  { from: "desempeno", to: "creencia", kind: "informa" },
  { from: "juicio", to: "creencia", kind: "tensiona" },
  { from: "comportamiento", to: "desempeno", kind: "informa" },
  { from: "actitud", to: "comportamiento", kind: "orienta" },
  { from: "motivacion", to: "comportamiento", kind: "orienta" },
  { from: "persistencia", to: "comportamiento", kind: "orienta" },
];

export function conceptById(id: string) {
  return concepts.find((c) => c.id === id);
}

export function neighborsOf(id: string) {
  return conceptEdges.filter((e) => e.from === id || e.to === id);
}

export const narratives = [
  {
    id: "ciclo",
    label: "Ciclo de feedback",
    blurb: "Meta, intento, información y siguiente paso: cómo se cierra (o se rompe) el ciclo.",
    concepts: [
      "instruccion",
      "andamiaje",
      "pista",
      "retroalimentacion",
      "evaluacion-formativa",
      "ciclo-retroalimentacion",
      "metas",
      "desempeno",
      "ejecucion",
      "error",
      "acierto",
      "calificacion",
      "juicio",
      "ejemplar",
      "participacion",
      "recuperacion",
      "agencia",
      "autorregulacion",
      "comprension",
      "lagunas-aprendizaje",
      "comportamiento",
      "maestria",
    ],
  },
  {
    id: "saber-hacer",
    label: "Saber y aplicar",
    blurb: "Tener el concepto no es ejecutarlo: declarativo, procedimental, inerte, transferencia.",
    concepts: [
      "conocimiento",
      "conocimiento-declarativo",
      "conocimiento-procedimental",
      "conocimiento-inerte",
      "creencia",
      "comprension",
      "interiorizacion",
      "habilidad",
      "pericia",
      "ejecucion",
      "desempeno",
      "comportamiento",
      "transferencia",
      "juicio",
      "ejemplar",
      "autoexplicacion",
      "patron",
      "analogia",
      "lagunas-aprendizaje",
      "maestria",
    ],
  },
  {
    id: "practica",
    label: "Práctica y memoria",
    blurb: "Recuperar, espaciar, intercalar: más esfuerzo, más efecto; la fluidez engaña.",
    concepts: [
      "recuperacion",
      "memoria",
      "codificacion",
      "decodificacion",
      "practica-distribuida",
      "intercalado",
      "dificultad-deseable",
      "esfuerzo",
      "persistencia",
      "fluidez",
      "estrategia-aprendizaje",
      "autoexplicacion",
      "actitud",
      "conocimiento-previo",
      "participacion",
      "carga-cognitiva",
      "recompensa-extrinseca",
      "motivacion",
      "autorregulacion",
    ],
  },
  {
    id: "mapa",
    label: "Asociación y mapa",
    blurb: "Anclar lo nuevo a lo ya conocido y ligar conceptos entre sí — el grafo interno.",
    concepts: [
      "analogia",
      "conocimiento-previo",
      "patron",
      "integracion-conocimiento",
      "autoexplicacion",
      "significado",
      "dato",
      "informacion",
      "conocimiento",
      "ejemplar",
      "intercalado",
      "comprension",
      "andamiaje",
      "lagunas-aprendizaje",
      "pericia",
      "creencia",
    ],
  },
  {
    id: "persona",
    label: "Agencia y entorno",
    blurb: "Postura, afecto y seguridad: el entorno sostiene; el aprendiz sostiene el proceso.",
    concepts: [
      "agencia",
      "autorregulacion",
      "autocontrol",
      "autonomia",
      "competencia",
      "relacion",
      "actitud",
      "emocion",
      "seguridad",
      "autoconcepto",
      "autoestima",
      "esfuerzo",
      "persistencia",
      "participacion",
      "metas",
      "fluidez",
      "motivacion",
      "motivacion-intrinseca",
      "motivacion-extrinseca",
      "recompensa-extrinseca",
      "creencia",
      "comportamiento",
      "andamiaje",
    ],
  },
  {
    id: "stitch",
    label: "Compañero Stitch",
    blurb: "Cómo Stitch interviene: anclar, reencontrar, andamiar y devolver el ciclo al aprendiz.",
    concepts: [
      "analogia",
      "conocimiento-previo",
      "patron",
      "integracion-conocimiento",
      "recuperacion",
      "practica-distribuida",
      "intercalado",
      "andamiaje",
      "descubrimiento",
      "pista",
      "agencia",
      "autorregulacion",
      "autonomia",
      "competencia",
      "relacion",
      "ciclo-retroalimentacion",
      "evaluacion-formativa",
      "retroalimentacion",
      "ejemplar",
      "autoexplicacion",
      "transferencia",
      "conocimiento-inerte",
      "seguridad",
      "dificultad-deseable",
      "comprension",
      "motivacion-intrinseca",
      "recompensa-extrinseca",
      "creencia",
      "persistencia",
      "lagunas-aprendizaje",
      "maestria",
      "comportamiento",
    ],
  },
] as const;

export type NarrativeId = (typeof narratives)[number]["id"];

export function narrativeById(id: NarrativeId) {
  return narratives.find((n) => n.id === id);
}

export function inNarrative(conceptId: string, narrativeId: NarrativeId | "todos") {
  if (narrativeId === "todos") return true;
  const n = narrativeById(narrativeId);
  return n ? (n.concepts as readonly string[]).includes(conceptId) : false;
}

export function narrativesOf(conceptId: string) {
  return narratives.filter((n) =>
    (n.concepts as readonly string[]).includes(conceptId),
  );
}
