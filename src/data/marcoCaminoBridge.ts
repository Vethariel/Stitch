/**
 * Cruce marco ↔ camino.
 * Reglas del marco (qué debe valer) ↔ aspectos del camino (qué se pula en Stitch).
 */

import { companionThemes } from "./companionThemes";
import { frameworkRules } from "./framework";

/** Regla del marco → aspectos del camino que la operacionalizan / indagan. */
export const ruleToThemes: Record<string, string[]> = {
  "progreso-sin-nota": ["narrativa", "entendimiento-retroalimentacion", "rol"],
  aplicabilidad: ["agencia", "metacognicion", "entendimiento-retroalimentacion"],
  "previo-y-errores": ["entendimiento-retroalimentacion", "lenguaje"],
  "organizacion-patrones": ["narrativa", "entendimiento-retroalimentacion"],
  "ciclo-feedback": ["entendimiento-retroalimentacion", "agencia"],
  "metacognicion-agencia": ["metacognicion", "agencia"],
  "compania-memoria": ["memoria", "lenguaje", "emocion-motivacion"],
  "espacio-seguro": ["emocion-motivacion", "motivaciones-diversas", "rol"],
  "alcance-practico": ["rol", "agencia"],
};

/** Aspecto del camino → reglas del marco que lo respaldan. */
export const themeToRules: Record<string, string[]> = (() => {
  const out: Record<string, string[]> = {};
  for (const [ruleId, themeIds] of Object.entries(ruleToThemes)) {
    for (const tid of themeIds) {
      if (!out[tid]) out[tid] = [];
      out[tid].push(ruleId);
    }
  }
  return out;
})();

export function themeLinksForRule(ruleId: string) {
  const ids = ruleToThemes[ruleId] ?? [];
  return ids
    .map((id) => companionThemes.find((t) => t.id === id))
    .filter(Boolean)
    .map((t) => ({ id: t!.id, label: t!.label, href: `/camino#aspecto-${t!.id}` }));
}

export function ruleLinksForTheme(themeId: string) {
  const ids = themeToRules[themeId] ?? [];
  return ids
    .map((id) => frameworkRules.find((r) => r.id === id))
    .filter(Boolean)
    .map((r) => ({ id: r!.id, label: r!.title, href: `/marco#${r!.id}` }));
}

export const bridgeNote =
  "El marco dice qué debe valer el compañero. El camino muestra desde dónde se parte (Stitch Code) y qué aspectos se pulen hacia el norte. Cada regla apunta a aspectos; cada aspecto exige respaldo en el marco.";
