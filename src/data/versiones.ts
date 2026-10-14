/**
 * Versionado de las tres vías (marco · modelo · sistema).
 * Fuente: versiones.json — se actualiza a mano con cada commit que cambie una vía.
 * Objetos y relaciones llevan `desde` (y `hasta` si se retiran) para reconstruir cualquier versión.
 */

import data from "./versiones.json";

export type Via = "marco" | "modelo" | "sistema";

export type Fase = {
  version: string;
  fecha: string;
  titulo: string;
  nota: string;
  pendientes: Via[];
};

export type ViaVersion = {
  via: Via;
  n: number;
  desde: string;
  fecha: string;
  titulo: string;
  resumen: string;
  referencia?: string;
};

export type Objeto = {
  via: Via;
  id: string;
  label: string;
  desde: string;
  hasta?: string;
};

export type RelacionTipo = "concreta" | "cubre" | "tension" | "evidencia";

export type Relacion = {
  de: string;
  a: string;
  tipo: RelacionTipo;
  desde: string;
  hasta?: string;
  nota?: string;
};

export const vias: { id: Via; label: string; pregunta: string; definicion: string }[] = [
  {
    id: "marco",
    label: "Marco",
    pregunta: "¿Qué debe valer?",
    definicion:
      "Criterios y límites del compañero: qué cuenta como progreso, qué no se negocia y qué queda fuera de alcance.",
  },
  {
    id: "modelo",
    label: "Modelo",
    pregunta: "¿Cómo se concreta?",
    definicion:
      "Los aspectos del compañero y los mecanismos que llevan cada regla a la práctica. Se afinan con lectura y prueba.",
  },
  {
    id: "sistema",
    label: "Sistema",
    pregunta: "¿Cómo se acopla?",
    definicion:
      "El compañero como anexo: se acopla a cualquier sistema que exponga ciertas herramientas y le deje un espacio en la interfaz. Stitch Code es el primer anfitrión.",
  },
];

export const relacionLabels: Record<RelacionTipo, string> = {
  concreta: "se concreta en",
  cubre: "lo cubre hoy",
  tension: "en tensión",
  evidencia: "evidencia que motivó",
};

export const versionadoReglas = {
  formato:
    "La versión es marco.modelo.sistema; cada dígito cuenta las versiones de su vía y no se reinicia.",
  cascada:
    "Si cambia el marco, modelo y sistema quedan pendientes de alinearse; si cambia el modelo, queda pendiente el sistema; si cambia el sistema, nadie.",
  historial:
    "Una versión cerrada no se edita: las correcciones entran como versión nueva.",
};

export const fases = data.fases as Fase[];
export const viaVersiones = data.vias as ViaVersion[];
export const objetos = data.objetos as Objeto[];
export const relaciones = data.relaciones as Relacion[];

export const faseActual: Fase = fases[fases.length - 1];

const faseIndex = (version: string) => fases.findIndex((f) => f.version === version);

function vigenteEn(item: { desde: string; hasta?: string }, version: string) {
  const i = faseIndex(version);
  if (faseIndex(item.desde) > i) return false;
  return item.hasta ? faseIndex(item.hasta) > i : true;
}

export const objetoKey = (o: Pick<Objeto, "via" | "id">) => `${o.via}:${o.id}`;

export function objetosEn(version: string) {
  return objetos.filter((o) => vigenteEn(o, version));
}

export function relacionesEn(version: string) {
  return relaciones.filter((r) => vigenteEn(r, version));
}

/** Número de versión de una vía en una fase (marco.modelo.sistema). */
export function numeroVia(version: string, via: Via) {
  const [marco, modelo, sistema] = version.split(".").map(Number);
  return { marco, modelo, sistema }[via];
}

export function viaVigente(via: Via) {
  return viaVersiones.filter((v) => v.via === via).sort((a, b) => b.n - a.n)[0];
}

/** Objetos vigentes de una vía, en el orden del grafo. */
export function objetosDeVia(via: Via) {
  return objetosEn(faseActual.version).filter((o) => o.via === via);
}

export function anclaObjeto(o: Pick<Objeto, "via" | "id">) {
  const prefix = { marco: "regla", modelo: "aspecto", sistema: "componente" }[o.via];
  return `${prefix}-${o.id}`;
}

export function hrefObjeto(o: Pick<Objeto, "via" | "id">) {
  return `/stitch/${o.via}#${anclaObjeto(o)}`;
}

/** Cómo se lee una relación desde cada extremo. */
const relacionSentido: Record<RelacionTipo, { sale: string; llega: string }> = {
  concreta: { sale: "se concreta en", llega: "concreta" },
  cubre: { sale: "lo cubre", llega: "cubre" },
  tension: { sale: "en tensión con", llega: "en tensión con" },
  evidencia: { sale: "evidencia para", llega: "motivado por" },
};

export type Conexion = {
  via: Via;
  label: string;
  href: string;
  tipo: RelacionTipo;
  frase: string;
  nota?: string;
};

/** Relaciones vigentes de un objeto, leídas desde él y ordenadas por vía. */
export function conexionesDe(via: Via, id: string): Conexion[] {
  const key = objetoKey({ via, id });
  const vigentes = objetosEn(faseActual.version);
  const ordenVia = (v: Via) => vias.findIndex((x) => x.id === v);
  const ordenObjeto = (o: Objeto) => vigentes.indexOf(o);
  return relacionesEn(faseActual.version)
    .flatMap((r) => {
      const sale = r.de === key;
      if (!sale && r.a !== key) return [];
      const otro = vigentes.find((o) => objetoKey(o) === (sale ? r.a : r.de));
      return otro ? [{ r, sale, otro }] : [];
    })
    .sort((a, b) => ordenVia(a.otro.via) - ordenVia(b.otro.via) || ordenObjeto(a.otro) - ordenObjeto(b.otro))
    .map(({ r, sale, otro }) => ({
      via: otro.via,
      label: otro.label,
      href: hrefObjeto(otro),
      tipo: r.tipo,
      frase: relacionSentido[r.tipo][sale ? "sale" : "llega"],
      nota: r.nota,
    }));
}
