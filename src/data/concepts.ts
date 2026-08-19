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
  {
    id: "esfuerzo",
    label: "Esfuerzo",
    cluster: "desempeno",
    definition:
      "Movilización persistente de recursos atencionales y de acción que el aprendiz dedica a una tarea con el fin de alcanzar una meta.",
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
    id: "comprension",
    label: "Comprensión",
    cluster: "cognitivo",
    definition:
      "Construcción de un modelo coherente de un contenido o procedimiento, que permite interpretarlo y utilizarlo más allá de la reproducción.",
  },
  {
    id: "significado",
    label: "Significado",
    cluster: "cognitivo",
    definition:
      "Relación que el aprendiz establece entre un contenido y un marco de referencia propio o disciplinar, mediante la cual dicho contenido adquiere sentido.",
  },
  {
    id: "informacion",
    label: "Información",
    cluster: "cognitivo",
    definition:
      "Datos organizados y contextualizados que reducen incertidumbre respecto de una tarea, un criterio o un estado de comprensión.",
  },
  {
    id: "conocimiento",
    label: "Conocimiento",
    cluster: "cognitivo",
    definition:
      "Información interiorizada y estructurada de la que el aprendiz puede disponer para comprender y actuar en un dominio.",
  },
  {
    id: "dato",
    label: "Dato",
    cluster: "cognitivo",
    definition:
      "Registro elemental desprovisto por sí mismo de criterio o de interpretación pedagógica.",
  },
  {
    id: "pensamiento",
    label: "Pensamiento",
    cluster: "cognitivo",
    definition:
      "Actividad cognitiva de elaborar, relacionar o evaluar representaciones; media entre la información recibida y el conocimiento construido.",
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
      "Implicación activa del aprendiz en las actividades, en el uso de la retroalimentación y en las decisiones sobre su propio recorrido.",
  },
  {
    id: "recuperacion",
    label: "Recuperación",
    cluster: "cognitivo",
    definition:
      "Evocación activa de información o de un procedimiento desde la memoria (recall), sin tener el material a la vista; se distingue de la mera reexposición o relectura.",
  },
  {
    id: "conocimiento-previo",
    label: "Conocimiento previo",
    cluster: "cognitivo",
    definition:
      "Conjunto de saberes, esquemas y experiencias que el aprendiz ya posee y que sirven de anclaje para interpretar, asociar y subsumir información nueva.",
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
    id: "esquema",
    label: "Esquema",
    cluster: "cognitivo",
    definition:
      "Estructura de conocimiento que organiza elementos y relaciones de una clase de situaciones, permitiendo reconocer, inferir y transferir más allá de un ejemplar aislado.",
  },
  {
    id: "transferencia",
    label: "Transferencia",
    cluster: "desempeno",
    definition:
      "Aplicación de lo aprendido en un contexto, formato o dominio distinto de aquel en que se adquirió; puede ser cercana (mismo tipo de ejercicio) o lejana (uso real).",
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
      "Saber enunciable acerca de hechos, conceptos o reglas («saber qué»); no implica por sí mismo la ejecución fluida de un procedimiento.",
  },
  {
    id: "conocimiento-procedimental",
    label: "Conocimiento procedimental",
    cluster: "cognitivo",
    definition:
      "Saber compilado en la acción («saber cómo»): procedimientos que se ejecutan con creciente automaticidad a partir de la práctica.",
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
  { from: "dato", to: "informacion", kind: "precede" },
  { from: "informacion", to: "conocimiento", kind: "precede" },
  { from: "conocimiento", to: "comprension", kind: "precede" },
  { from: "comprension", to: "significado", kind: "orienta" },
  { from: "retroalimentacion", to: "informacion", kind: "es_tipo" },
  { from: "calificacion", to: "dato", kind: "es_tipo" },
  { from: "pensamiento", to: "proceso-mental", kind: "es_tipo" },
  { from: "pensamiento", to: "conocimiento", kind: "orienta" },
  { from: "instruccion", to: "comprension", kind: "orienta" },
  { from: "conocimiento", to: "habilidad", kind: "orienta" },
  { from: "ejemplar", to: "juicio", kind: "guia" },
  { from: "juicio", to: "desempeno", kind: "regula" },
  { from: "agencia", to: "estrategia-aprendizaje", kind: "regula" },
  { from: "agencia", to: "retroalimentacion", kind: "permite" },
  { from: "agencia", to: "participacion", kind: "regula" },
  { from: "emocion", to: "retroalimentacion", kind: "tensiona" },
  { from: "seguridad", to: "emocion", kind: "permite" },
  { from: "actitud", to: "participacion", kind: "orienta" },
  { from: "actitud", to: "agencia", kind: "orienta" },
  { from: "metas", to: "esfuerzo", kind: "orienta" },
  { from: "esfuerzo", to: "desempeno", kind: "orienta" },
  { from: "participacion", to: "ciclo-retroalimentacion", kind: "permite" },
  { from: "retroalimentacion", to: "ciclo-retroalimentacion", kind: "precede" },
  { from: "ciclo-retroalimentacion", to: "desempeno", kind: "informa" },
  { from: "estrategia-aprendizaje", to: "proceso-mental", kind: "regula" },
  { from: "retroalimentacion", to: "estrategia-aprendizaje", kind: "informa" },
  { from: "autocontrol", to: "estrategia-aprendizaje", kind: "regula" },
  { from: "recuperacion", to: "memoria", kind: "es_tipo" },
  { from: "recuperacion", to: "conocimiento", kind: "informa" },
  { from: "recuperacion", to: "dificultad-deseable", kind: "es_tipo" },
  { from: "conocimiento-previo", to: "analogia", kind: "permite" },
  { from: "conocimiento-previo", to: "esquema", kind: "orienta" },
  { from: "conocimiento-previo", to: "comprension", kind: "permite" },
  { from: "analogia", to: "esquema", kind: "guia" },
  { from: "analogia", to: "conocimiento-previo", kind: "se_prueba" },
  { from: "esquema", to: "transferencia", kind: "permite" },
  { from: "ejecucion", to: "desempeno", kind: "es_tipo" },
  { from: "conocimiento-procedimental", to: "ejecucion", kind: "orienta" },
  { from: "conocimiento-declarativo", to: "conocimiento-procedimental", kind: "precede" },
  { from: "conocimiento-declarativo", to: "conocimiento", kind: "es_tipo" },
  { from: "conocimiento-procedimental", to: "conocimiento", kind: "es_tipo" },
  { from: "esquema", to: "conocimiento", kind: "es_tipo" },
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
  { from: "pista", to: "andamiaje", kind: "es_tipo" },
  { from: "practica-distribuida", to: "memoria", kind: "orienta" },
  { from: "practica-distribuida", to: "dificultad-deseable", kind: "es_tipo" },
  { from: "intercalado", to: "practica-distribuida", kind: "informa" },
  { from: "intercalado", to: "esquema", kind: "guia" },
  { from: "intercalado", to: "dificultad-deseable", kind: "es_tipo" },
  { from: "fluidez", to: "recuperacion", kind: "tensiona" },
  { from: "fluidez", to: "actitud", kind: "informa" },
  { from: "dificultad-deseable", to: "esfuerzo", kind: "impone" },
  { from: "actitud", to: "dificultad-deseable", kind: "permite" },
  { from: "recompensa-extrinseca", to: "retroalimentacion", kind: "tensiona" },
  { from: "recompensa-extrinseca", to: "actitud", kind: "tensiona" },
  { from: "ciclo-retroalimentacion", to: "recuperacion", kind: "informa" },
  { from: "ejemplar", to: "esquema", kind: "guia" },
  { from: "hipotesis", to: "esquema", kind: "orienta" },
  { from: "transferencia", to: "habilidad", kind: "informa" },
  { from: "comprension", to: "interiorizacion", kind: "precede" },
  { from: "ejecucion", to: "error", kind: "dispara" },
  { from: "recuperacion", to: "ejecucion", kind: "informa" },
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
      "comprension",
      "interiorizacion",
      "habilidad",
      "ejecucion",
      "desempeno",
      "transferencia",
      "juicio",
      "ejemplar",
      "analogia",
    ],
  },
  {
    id: "practica",
    label: "Práctica y memoria",
    blurb: "Recuperar, espaciar, intercalar: más esfuerzo, más efecto; la fluidez engaña.",
    concepts: [
      "recuperacion",
      "memoria",
      "practica-distribuida",
      "intercalado",
      "dificultad-deseable",
      "esfuerzo",
      "fluidez",
      "estrategia-aprendizaje",
      "actitud",
      "conocimiento-previo",
      "participacion",
      "carga-cognitiva",
      "recompensa-extrinseca",
    ],
  },
  {
    id: "mapa",
    label: "Asociación y mapa",
    blurb: "Anclar lo nuevo a lo ya conocido y ligar conceptos entre sí — el grafo interno.",
    concepts: [
      "analogia",
      "conocimiento-previo",
      "esquema",
      "significado",
      "hipotesis",
      "pensamiento",
      "ejemplar",
      "intercalado",
      "comprension",
      "informacion",
      "conocimiento",
      "dato",
      "andamiaje",
    ],
  },
  {
    id: "persona",
    label: "Agencia y entorno",
    blurb: "Postura, afecto y seguridad: el entorno sostiene; el aprendiz sostiene el proceso.",
    concepts: [
      "agencia",
      "actitud",
      "emocion",
      "seguridad",
      "autocontrol",
      "concepto-propio",
      "autoestima",
      "esfuerzo",
      "participacion",
      "metas",
      "fluidez",
      "recompensa-extrinseca",
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
      "esquema",
      "recuperacion",
      "practica-distribuida",
      "intercalado",
      "andamiaje",
      "pista",
      "agencia",
      "ciclo-retroalimentacion",
      "retroalimentacion",
      "ejemplar",
      "transferencia",
      "conocimiento-inerte",
      "seguridad",
      "dificultad-deseable",
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
