import { useMemo, useState } from "react";
import {
  fases,
  faseActual,
  hrefObjeto,
  numeroVia,
  objetoKey,
  objetosEn,
  relacionLabels,
  relacionesEn,
  vias,
  type Relacion,
  type RelacionTipo,
  type Via,
} from "../data/versiones";

const VIEW_W = 980;
const COL_X: Record<Via, number> = { marco: 170, modelo: 490, sistema: 810 };
const NODE_W = 232;
const NODE_H = 34;
const ROW = 46;
const TOP = 104;

const EDGE_STYLE: Record<RelacionTipo, { color: string; dash?: string; idle: number }> = {
  concreta: { color: "#7a3588", idle: 0.28 },
  cubre: { color: "#9a48a8", idle: 0.55 },
  tension: { color: "#ff5c00", dash: "6 4", idle: 0.6 },
  evidencia: { color: "#ff8f40", dash: "3 4", idle: 0.6 },
};

function recorrido(start: string, rels: Relacion[]) {
  const nodes = new Set<string>([start]);
  const edges = new Set<Relacion>();
  const walk = (from: string, forward: boolean) => {
    for (const r of rels) {
      const [src, dst] = forward ? [r.de, r.a] : [r.a, r.de];
      if (src !== from || edges.has(r)) continue;
      edges.add(r);
      nodes.add(dst);
      walk(dst, forward);
    }
  };
  walk(start, true);
  walk(start, false);
  return { nodes, edges };
}

export default function ViasGraph() {
  const [version, setVersion] = useState(faseActual.version);
  const [hover, setHover] = useState<string | null>(null);

  const fase = fases.find((f) => f.version === version) ?? faseActual;
  const esPrimera = fases[0].version === version;

  const { pos, viewH, objs, rels } = useMemo(() => {
    const objs = objetosEn(version);
    const rels = relacionesEn(version);
    const porVia = (via: Via) => objs.filter((o) => o.via === via);
    const maxN = Math.max(...vias.map((v) => porVia(v.id).length), 1);
    const pos: Record<string, { x: number; y: number }> = {};
    for (const v of vias) {
      const lista = porVia(v.id);
      const offset = ((maxN - lista.length) * ROW) / 2;
      lista.forEach((o, i) => {
        pos[objetoKey(o)] = { x: COL_X[v.id], y: TOP + offset + i * ROW + NODE_H / 2 };
      });
    }
    return { pos, viewH: TOP + maxN * ROW + 20, objs, rels };
  }, [version]);

  const activo = useMemo(() => (hover ? recorrido(hover, rels) : null), [hover, rels]);

  const enTension = useMemo(
    () => new Set(rels.filter((r) => r.tipo === "tension").map((r) => r.a)),
    [rels],
  );

  const tiposPresentes = (Object.keys(EDGE_STYLE) as RelacionTipo[]).filter((t) =>
    rels.some((r) => r.tipo === t),
  );

  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
          Versión
        </p>
        {fases.map((f) => (
          <button
            key={f.version}
            type="button"
            onClick={() => setVersion(f.version)}
            aria-pressed={f.version === version}
            className={[
              "font-display text-lg font-semibold transition-colors",
              f.version === version ? "text-signal-ink" : "text-ink-soft hover:text-thread",
            ].join(" ")}
          >
            {f.version}
          </button>
        ))}
        <p className="text-sm text-ink-soft">
          {fase.titulo} · {fase.fecha}
          {fase.version === faseActual.version && " · vigente"}
          {fase.pendientes.length > 0 &&
            ` · pendiente de alinear: ${fase.pendientes.join(", ")}`}
        </p>
      </div>

      <div className="mt-6 w-full overflow-x-auto border border-line bg-paper-deep/40">
        <svg
          viewBox={`0 0 ${VIEW_W} ${viewH}`}
          width={VIEW_W}
          height={viewH}
          className="mx-auto block h-auto w-full min-w-[760px]"
          style={{ aspectRatio: `${VIEW_W} / ${viewH}` }}
          role="group"
          aria-label="Grafo de las tres vías: reglas del marco, aspectos del modelo y piezas del sistema, con sus relaciones."
        >
          <defs>
            {(Object.keys(EDGE_STYLE) as RelacionTipo[]).map((tipo) => (
              <marker
                key={tipo}
                id={`vias-flecha-${tipo}`}
                viewBox="0 0 10 10"
                refX={8}
                refY={5}
                markerWidth={6}
                markerHeight={6}
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={EDGE_STYLE[tipo].color} />
              </marker>
            ))}
          </defs>

          {vias.map((v) => (
            <a key={v.id} href={`/stitch/${v.id}`}>
              <text
                x={COL_X[v.id]}
                y={42}
                textAnchor="middle"
                fill="#22141a"
                fontSize={18}
                fontWeight={600}
                fontFamily="Fraunces Variable, Fraunces, serif"
              >
                {`${v.label} · v${numeroVia(version, v.id)}`}
              </text>
              <text x={COL_X[v.id]} y={62} textAnchor="middle" fill="#5a3e48" fontSize={12}>
                {v.pregunta}
              </text>
            </a>
          ))}

          {rels.map((r) => {
            const a = pos[r.de];
            const b = pos[r.a];
            if (!a || !b) return null;
            const style = EDGE_STYLE[r.tipo];
            const lit = activo?.edges.has(r);
            const x1 = a.x + NODE_W / 2;
            const x2 = b.x - NODE_W / 2 - 5;
            return (
              <path
                key={`${r.de}>${r.a}`}
                d={`M ${x1} ${a.y} C ${x1 + 80} ${a.y}, ${x2 - 80} ${b.y}, ${x2} ${b.y}`}
                fill="none"
                stroke={style.color}
                strokeWidth={lit ? 2.2 : 1.2}
                strokeDasharray={style.dash}
                markerEnd={`url(#vias-flecha-${r.tipo})`}
                opacity={activo ? (lit ? 1 : 0.06) : style.idle}
              >
                {r.nota && <title>{r.nota}</title>}
              </path>
            );
          })}

          {objs.map((o) => {
            const key = objetoKey(o);
            const p = pos[key];
            const lit = !activo || activo.nodes.has(key);
            const isHover = hover === key;
            const tension = enTension.has(key);
            const nuevo = !esPrimera && o.desde === version;
            return (
              <a
                key={key}
                href={hrefObjeto(o)}
                onMouseEnter={() => setHover(key)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(key)}
                onBlur={() => setHover(null)}
                aria-label={`${o.label} — ver detalle`}
              >
                <g opacity={lit ? 1 : 0.3}>
                  <rect
                    x={p.x - NODE_W / 2}
                    y={p.y - NODE_H / 2}
                    width={NODE_W}
                    height={NODE_H}
                    rx={8}
                    fill={
                      isHover
                        ? "color-mix(in oklab, #7a3588 16%, #f7ebe6)"
                        : nuevo
                          ? "color-mix(in oklab, #ff8f40 22%, #f7ebe6)"
                          : "#f7ebe6"
                    }
                    stroke={tension ? "#ff5c00" : "#c4a494"}
                    strokeWidth={isHover ? 2.4 : 1.4}
                  />
                  <text
                    x={p.x}
                    y={p.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#22141a"
                    fontSize={13}
                    fontWeight={600}
                    fontFamily="Fraunces Variable, Fraunces, serif"
                    pointerEvents="none"
                  >
                    {o.label}
                  </text>
                </g>
              </a>
            );
          })}
        </svg>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
        {tiposPresentes.map((tipo) => (
          <span key={tipo} className="flex items-center gap-2">
            <svg width="28" height="8" aria-hidden="true">
              <line
                x1="0"
                y1="4"
                x2="28"
                y2="4"
                stroke={EDGE_STYLE[tipo].color}
                strokeWidth="2"
                strokeDasharray={EDGE_STYLE[tipo].dash}
              />
            </svg>
            {relacionLabels[tipo]}
          </span>
        ))}
        <span className="text-ink-soft/80">
          Cursor sobre un nodo: su recorrido. Clic: su detalle.
        </span>
      </div>
    </div>
  );
}
