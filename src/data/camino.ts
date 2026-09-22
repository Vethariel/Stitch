/**
 * Camino — origen (Stitch Code) → aspectos de Stitch → norte.
 * Los temas del compañero viven en companionThemes.ts; aquí el arco del viaje.
 */

import { companionThemes } from "./companionThemes";

export const caminoMeta = {
  version: "2026-09-21",
  label: "Camino",
  blurb:
    "Parte de Stitch Code (laboratorio real: Woven + Hilo), pasa por Stitch y los aspectos a pulir, y apunta a un norte fijo. El origen ya existe; el camino es cómo se afila el acompañamiento hacia ese destino — con el marco como criterio de qué debe valer.",
};

export const caminoOrigin = {
  id: "origen",
  label: "Stitch Code",
  short: "Origen",
  title: "Stitch Code — el laboratorio que ya existe",
  body: "El origen del camino no es un esquema vacío: es Stitch Code, un entorno ya construido (repo hermano) para quien enfrenta programación por primera vez. La premisa es leer, entender y diagnosticar antes de «escribir más código». La metáfora es el tejido; el tutor conversacional se llama Hilo; el lenguaje de la plataforma es Woven. Eso es el punto de partida — concreto, usable, incompleto respecto al norte de esta investigación.",
  bullets: [
    "Woven: lenguaje propio (convergencia Python / Java / C++), gramática ANTLR4, intérprete en el navegador (Pyodide), traductor a esos tres lenguajes, linter y traza paso a paso.",
    "Hilo: tutor con Gemini (opcional) — planes de estudio, ejercicios, explicación con pistas progresivas, tutorial guiado; la IA guía y pregunta, no reemplaza el razonamiento.",
    "Editor con modos texto / bloques / verboso; panel de enunciado, traducciones y logros; ~274 tests Python y ~65 de frontend.",
    "Aún falta (entre otras): persistencia rica del plan, herramientas de runtime más profundas para Hilo, edición verbosa completa — y, frente a este research log, el marco de acompañamiento Stitch (constancia, interiorización, progreso vivido) todavía no está cerrado sobre ese laboratorio.",
  ],
  repoNote: "Código en el repositorio StitchCode (hermano de este sitio).",
};

export const caminoCenter = {
  id: "stitch",
  label: "Stitch",
  short: "Compañero",
  title: "Stitch — el compañero en el camino",
  body: "En el centro del camino está el acompañamiento que esta investigación diseña — Stitch — tomando como origen el laboratorio Stitch Code (Hilo + Woven). Alrededor, los aspectos a pulir (lenguaje, motivación, memoria, agencia…). Se trabajan de forma iterativa: cada tema tiene un lado pedagógico y uno técnico.",
  bullets: [
    "Stitch Code ya opera como entorno; Stitch es el marco del compañero que se quiere sostener con más rigor (constancia, interiorización, progreso vivido).",
    "Hilo es el tutor del laboratorio; Stitch nombra el diseño de acompañamiento que se afila en este research log (/marco).",
    "Clic en un aspecto → indagar y pulir; el norte no se mueve.",
  ],
};

export const caminoNorth = {
  id: "norte",
  label: "Norte",
  short: "Destino",
  title: "El destino no cambia; el viaje sí",
  body: "Da igual el dominio o cuántas iteraciones lleve Stitch Code: el norte es el mismo. Que lo aprendido quede y sirva — con sentido, no con progreso fingido.",
  principles: [
    {
      title: "Interiorizar y aplicar",
      text: "Que queden conocimiento y habilidades listos para problemas que importan — no solo terminar el módulo.",
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
      title: "Sentido, no trámite",
      text: "Aprendizaje que puede ser gratificante porque se usa y se interioriza — sin nota vacía ni credencial que finge dominio.",
    },
  ],
};

export { companionThemes };
