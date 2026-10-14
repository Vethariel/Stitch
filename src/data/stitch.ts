/**
 * Páginas /stitch — problema reducido, norte y contenido de la vía del sistema.
 * Marco y modelo viven en framework.ts y companionThemes.ts; el versionado en versiones.json.
 */

export const stitchMeta = {
  label: "Stitch",
  blurb:
    "El compañero de aprendizaje autónomo que investiga este proyecto: qué ataca, hacia dónde va y en qué estado están sus tres vías —marco, modelo y sistema.",
};

export const stitchProblema = {
  resumen:
    "Las personas abandonan el aprendizaje técnico —con motivación propia o por obligación— porque hay demasiada información y muy poco acompañamiento para sostener la constancia, en sistemas que premian el certificado y no lo que de verdad queda.",
  ataca: [
    {
      title: "Información sin red",
      text: "Cursos, LMS y chatbots entregan contenido o respuestas, pero casi ninguno acompaña cuando la motivación baja.",
    },
    {
      title: "Constancia tratada como rasgo",
      text: "Se asume que «el que quiere, puede» y casi nada se diseña para sostener el ritmo.",
    },
    {
      title: "Credenciales en lugar de uso",
      text: "Se premia haber pasado, no poder hacer: lo aprendido queda enunciable pero no se usa.",
    },
    {
      title: "Progreso que no se siente",
      text: "El avance es opaco o simulado: no se ve qué ya se sabe ni qué falta, y aprender se vuelve trámite.",
    },
  ],
};

export const stitchNorte = {
  title: "El destino no cambia; el viaje sí",
  body: "Da igual el dominio o cuántas versiones lleven las vías: el norte es el mismo. Que lo aprendido quede y sirva — con sentido, no con progreso fingido.",
  principles: [
    {
      title: "Interiorizar y aplicar",
      text: "Que queden conocimiento y habilidades listos para problemas que importan: poder hacer, no terminar el módulo ni juntar una nota o credencial que finge dominio.",
    },
    {
      title: "Habilidades de aprendiz",
      text: "Monitorear, asociar, transferir, sostener el ritmo: mejores formas de aprender a lo largo de la vida.",
    },
    {
      title: "Progreso vivido",
      text: "Narrativa del aprendizaje con huella emocional — decisión de diseño rigurosa, no gamificación barata. Se siente vivido, no simulado.",
    },
    {
      title: "Sentido propio",
      text: "Lo aprendido se conecta con lo que la persona quiere o necesita; incluso quien llega por obligación encuentra por qué le importa, y por eso aprender deja de ser trámite.",
    },
  ],
};

export const stitchSistema = {
  title: "El compañero como anexo",
  body: "Stitch no es una plataforma propia: es un anexo que se acopla a un sistema anfitrión. Basta con que el anfitrión exponga ciertas herramientas y le deje un espacio en su interfaz para que el compañero pueda usarlas. Stitch Code (Woven + Hilo) es el primer anfitrión y el punto de partida.",
  anfitrion: "Stitch Code",
  hallazgos: "docs/stitch-code-hallazgos.md",
};

export type SistemaGrupo = "anexo" | "herramienta" | "interfaz";

export const sistemaGrupos: Record<SistemaGrupo, string> = {
  anexo: "Lo que aporta el anexo",
  herramienta: "Herramientas que expone el anfitrión",
  interfaz: "Espacio que deja la interfaz",
};

export type SistemaComponente = {
  id: string;
  grupo: SistemaGrupo;
  que: string;
  /** Cómo se ve hoy en el primer anfitrión. */
  hoy: string;
};

/** Piezas del sistema; el orden y las etiquetas viven en versiones.json. */
export const stitchComponentes: SistemaComponente[] = [
  {
    id: "planes",
    grupo: "anexo",
    que: "Arma secuencias de actividades con lo que el anfitrión ofrece, y las cierra con una reflexión.",
    hoy: "Hilo arma planes de 4 a 8 actividades: aprendizaje, ejercicio libre, corrección o relleno y reflexión.",
  },
  {
    id: "ayuda-graduada",
    grupo: "anexo",
    que: "Decide cuánta ayuda dar: pregunta orientadora, pista, explicación y, al final, solución guiada.",
    hoy: "Cuatro niveles por problema; no entrega código antes del cuarto.",
  },
  {
    id: "logros",
    grupo: "anexo",
    que: "Describe lo que el estudiante ya domina, no lo que completó.",
    hoy: "Un logro por tema; un filtro borra frases como «completaste el ejercicio».",
  },
  {
    id: "perfil",
    grupo: "anexo",
    que: "Tono, estilo y objetivos con los que el compañero se dirige a cada estudiante.",
    hoy: "Se eligen al entrar (amigable, formal, motivador o paciente; paso a paso, analogías, directo o conceptual) y se envían en cada turno.",
  },
  {
    id: "memoria",
    grupo: "anexo",
    que: "Lo que el compañero recuerda de un encuentro a otro para que haya continuidad.",
    hoy: "El navegador guarda perfil, logros y tutorial; chat, plan e intentos se pierden al cerrar.",
  },
  {
    id: "presencia",
    grupo: "anexo",
    que: "Cómo se muestra el compañero dentro del anfitrión: su figura y su expresión emocional.",
    hoy: "Sprite de Hilo con 16 expresiones que elige el modelo de lenguaje en cada fragmento.",
  },
  {
    id: "actividades",
    grupo: "herramienta",
    que: "El anfitrión deja cargar una actividad propuesta por el compañero y comprobar si quedó resuelta.",
    hoy: "Ejercicios con líneas bloqueadas y enunciado alineado; el ejercicio libre no tiene verificación determinista.",
  },
  {
    id: "errores-legibles",
    grupo: "herramienta",
    que: "Los errores del estudiante llegan en una forma que el compañero puede leer y explicar.",
    hoy: "Un error principal con ejemplo mínimo y mensajes para quien viene de otro lenguaje («en Woven no existe def»).",
  },
  {
    id: "ejecucion-observable",
    grupo: "herramienta",
    que: "El compañero puede seguir paso a paso lo que pasa con el trabajo del estudiante y señalarlo.",
    hoy: "Traza línea a línea con variables, consola acumulada y grafo de estructuras.",
  },
  {
    id: "vistas",
    grupo: "herramienta",
    que: "El mismo contenido en más de una forma, para ajustar el nivel de lenguaje.",
    hoy: "Woven en texto, bloques y lenguaje natural, con traducción a Python, Java y C++.",
  },
  {
    id: "espacio-companero",
    grupo: "interfaz",
    que: "Un lugar fijo donde el compañero conversa y aparece sin tapar el trabajo, y desde donde puede resaltar partes de la pantalla.",
    hoy: "El chat de Hilo con su sprite, y el resaltado de líneas en el editor.",
  },
];

export const repoDocUrl = (path: string) =>
  `https://github.com/Vethariel/Stitch/blob/main/${path}`;
