/**
 * Temas del compañero (Stitch) — fuente viva para /mapa.
 * Documento: docs/mapa-del-sistema.md
 */

export const companionMeta = {
  version: "2026-09-09",
  label: "Compañero",
  question:
    "¿Cómo diseñar un agente de acompañamiento que sostenga la constancia y la interiorización del aprendizaje autónomo ante motivaciones diversas, sin depender de notas ni de credenciales vacías?",
  thread:
    "Nivel de lenguaje cercano (no invasivo) → vínculo → motivación intrínseca → constancia.",
};

export type CompanionTheme = {
  id: string;
  label: string;
  pedagogical: string;
  technical: string;
};

/** Temas conectados a Stitch; al clic se muestra pedagógica + técnica. */
export const companionThemes: CompanionTheme[] = [
  {
    id: "lenguaje",
    label: "Lenguaje",
    pedagogical:
      "Antes de personalizar, hay que aclarar qué forma de lenguaje favorece la comunicación y qué efectos tiene. Apropiar mal el contexto social del estudiante produce rechazo; un registro cercano pero no invasivo puede ayudar a vincular. ¿Cómo emplear niveles de lenguaje y asociaciones del estudiante sin tergiversar la información del dominio?",
    technical:
      "El agente ajusta nivel de lenguaje y asociaciones del estudiante (cercano, no invasivo). Tope duro: no alterar la verdad del dominio. Si la personalización exige tergiversar —o produce rechazo por apropiación errónea del contexto—, se prioriza fidelidad y un registro menos invasivo.",
  },
  {
    id: "emocion-motivacion",
    label: "Emoción / motivación intrínseca",
    pedagogical:
      "Un lenguaje cercano (no invasivo) busca un vínculo que sostenga el aprendizaje en el tiempo; sin ese sostén, la constancia se quiebra. Pero un compañero que “entra” demasiado en lo personal deja de ser educativo y se vuelve invasivo o cuasi-terapéutico. ¿Cómo construir motivación intrínseca que sostenga la constancia, y hasta dónde puede llegar ese acompañamiento sin invadir la vida personal ni asumir un rol de psicología?",
    technical:
      "El vínculo se construye por un nivel de lenguaje cercano (no invasivo) y por presencia educativa (ritmo, retorno, clima de error permitido), no por consejo de vida ni intervención psicológica. El efecto buscado es constancia vía motivación intrínseca.",
  },
  {
    id: "motivaciones-diversas",
    label: "Motivaciones diversas",
    pedagogical:
      "No todos llegan igual: quien quiere dominar la técnica y quien está obligado a aprenderla necesitan acompañamientos distintos. Si el agente trata a todos igual, o solo refuerza la motivación extrínseca (obligación, nota, premio), no construye el hábito que Stitch busca. ¿Qué implica el tipo de motivación predominante para el acompañamiento, y cómo se gestiona desde ahí la construcción de motivación intrínseca?",
    technical:
      "El agente detecta o asume un tipo predominante (p. ej. interés fuerte vs. obligación) y ajusta tono, exigencia y tipo de sostén; en todos los casos el horizonte es construir motivación intrínseca, no sostener solo la extrínseca.",
  },
  {
    id: "entendimiento-retroalimentacion",
    label: "Entendimiento / retroalimentación",
    pedagogical:
      "Sin una lectura del estado del estudiante, el feedback es genérico: no distingue laguna, idea errónea ni malentendido puntual. La idea es que el compañero primero compruebe qué se entendió, y luego elija cómo explicar —con estrategias previstas según el perfil, no improvisando cada turno. ¿Qué cuenta como evidencia de entendimiento, laguna o idea errónea, y qué tipo de retroalimentación corresponde según ese perfil?",
    technical:
      "Primero se obtiene una lectura del entendimiento (lagunas, ideas erróneas, malentendidos); luego se elige una estrategia de un repertorio definido según el perfil — no improvisación libre en cada turno.",
  },
  {
    id: "narrativa",
    label: "Narrativa",
    pedagogical:
      "Hay un temario y rutas sugeridas, no una secuencia única. El estudiante puede desviarse o necesitar un tema “posterior” antes, porque encaja con lo que ya sabe; el riesgo es perder el hilo curricular o volver al plan a la fuerza. ¿Cuándo permitir un desvío, cuándo adelantar un tema por cercanía con la experiencia previa, y cómo reentrar al temario sin que el paso sea forzoso?",
    technical:
      "Temario + rutas sugeridas como grafo, no lista rígida. Desvío permitido; reentrada al plan sin salto forzoso; adelantar un tema posterior es válido cuando la experiencia previa lo hace más efectivo.",
  },
  {
    id: "memoria",
    label: "Memoria",
    pedagogical:
      "Para que el estudiante sienta que hay compañía de un encuentro a otro, el compañero necesita recordar algo. ¿Qué es lo mínimo que debe recordar (y qué no debe guardar) para sostener esa continuidad sin comprometer la privacidad?",
    technical:
      "Solo se guarda lo mínimo para continuidad entre encuentros (p. ej. intereses, preferencias, estado del recorrido); no el historial completo de conversación. Privacidad primero.",
  },
  {
    id: "agencia",
    label: "Agencia",
    pedagogical:
      "El compañero existe para acompañar, no para hacer el trabajo por el estudiante. Demasiada ayuda quita agencia; poca ayuda deja solo al novato. ¿Hasta dónde ayudar sin sustituir al estudiante, y cómo retirar el apoyo (pista → andamiaje → explicación) a medida que aumenta el entendimiento?",
    technical:
      "Ayuda graduada (pista → andamiaje → explicación) con retirada progresiva (*fading*); el compañero no resuelve por el estudiante.",
  },
  {
    id: "metacognicion",
    label: "Metacognición",
    pedagogical:
      "Muchos estudiantes no traen experiencia en armar estrategias para monitorear su propio progreso (qué saben, qué falta, qué conviene hacer después). Si el compañero solo “ayuda en la tarea”, no forma esa capacidad; si impone un sistema rígido de autoevaluación, puede chocar con la agencia y con el horizonte de aprendiz de por vida. ¿Cómo enseñar a hacer seguimiento del propio aprendizaje a quien no ha practicado esas estrategias, sin sustituir su juicio ni reducir el acompañamiento a checklist?",
    technical:
      "Se modelan y practican estrategias de monitoreo (qué sé, qué falta, qué sigue) de forma progresiva y situada en el dominio; el compañero andamia la metacognición al inicio y la retira para que el estudiante la interne — coherente con agencia y con la postura de aprendiz de por vida, no con un protocolo rígido de autoevaluación.",
  },
  {
    id: "rol",
    label: "Rol",
    pedagogical:
      "Un agente conversacional puede desbordarse: aconsejar la vida, juzgar, sustituir al docente o motivar con puntos y rachas. Stitch necesita un borde claro de lo que no hace. ¿Qué queda fuera del rol del compañero, y cómo se reconoce ese límite en la práctica?",
    technical:
      "Filtros / rechazo explícito de acciones fuera de rol: asesor de vida, juez, sustituto del docente, gamificación por puntos/rachas como motor.",
  },
];

export function themeById(id: string) {
  return companionThemes.find((t) => t.id === id);
}
