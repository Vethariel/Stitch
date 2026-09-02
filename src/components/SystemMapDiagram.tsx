import { useMemo, useState } from "react";
import {
  diagramEdges,
  diagramNodes,
  entityById,
  phaseLabels,
  relations,
  type SystemEntity,
} from "../data/systemMap";

const PHASE_COLOR: Record<string, string> = {
  now: "#7a3588",
  progressive: "#ff5c00",
  later: "#5a3e48",
  agency: "#ff8f40",
};

const NODE_W = 108;
const NODE_H = 40;
const CENTRAL_W = 124;
const CENTRAL_H = 44;
const SCALE_W = 88;
const SCALE_H = 32;

function nodeSize(id: string) {
  if (id.startsWith("ruta-")) return { w: SCALE_W, h: SCALE_H };
  if (id === "arbol") return { w: CENTRAL_W, h: CENTRAL_H };
  return { w: NODE_W, h: NODE_H };
}

function nodeHref(id: string): string | null {
  if (id.startsWith("ruta-")) return "#escala";
  return `#${id}`;
}

function edgePath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  if (dx > dy * 1.2) {
    return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  }
  return `M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}`;
}

function anchorPoint(
  from: { x: number; y: number; id: string },
  to: { x: number; y: number },
) {
  const { w, h } = nodeSize(from.id);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x: from.x + (dx / len) * (w / 2 + 2),
    y: from.y + (dy / len) * (h / 2 + 2),
  };
}

type Props = {
  onSelect?: (id: string | null) => void;
};

export default function SystemMapDiagram({ onSelect }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const nodeMap = useMemo(
    () => Object.fromEntries(diagramNodes.map((n) => [n.id, n])),
    [],
  );

  const relatedIds = useMemo(() => {
    if (!active) return new Set<string>();
    const ids = new Set<string>([active]);
    for (const e of diagramEdges) {
      if (e.from === active) ids.add(e.to);
      if (e.to === active) ids.add(e.from);
    }
    for (const r of relations) {
      if (r.from === active) ids.add(r.to);
      if (r.to === active) ids.add(r.from);
    }
    return ids;
  }, [active]);

  const pick = (id: string) => {
    const next = active === id ? null : id;
    setActive(next);
    onSelect?.(next);
  };

  const phaseOf = (id: string): string | undefined => {
    if (id.startsWith("ruta-")) return undefined;
    return entityById[id]?.phase;
  };

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-xl border border-line bg-paper-deep/40 p-3 sm:p-5">
        <svg
          viewBox="0 0 920 560"
          className="mx-auto w-full min-w-[640px] max-w-[920px]"
          role="img"
          aria-label="Diagrama del mapa del sistema: entidades dentro de una unidad y ruta de aprendizaje"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#b8909c" />
            </marker>
            <marker
              id="arrow-active"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#7a3588" />
            </marker>
          </defs>

          <rect
            x="48"
            y="108"
            width="824"
            height="420"
            rx="12"
            fill="none"
            stroke="#e4c4b4"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <text
            x="64"
            y="128"
            className="fill-ink-soft text-[11px] font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Dentro de una unidad (curso)
          </text>

          <rect
            x="120"
            y="16"
            width="680"
            height="56"
            rx="10"
            fill="color-mix(in oklab, #7a3588 6%, #f7ebe6)"
            stroke="#e4c4b4"
            strokeWidth="1"
          />
          <text
            x="136"
            y="36"
            className="fill-ink-soft text-[11px] font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ruta de aprendizaje
          </text>

          {diagramEdges.map((e, i) => {
            const from = nodeMap[e.from];
            const to = nodeMap[e.to];
            if (!from || !to) return null;
            const a = anchorPoint(from, to);
            const b = anchorPoint(to, from);
            const lit =
              !active ||
              relatedIds.has(e.from) ||
              relatedIds.has(e.to);
            return (
              <path
                key={i}
                d={edgePath(a.x, a.y, b.x, b.y)}
                fill="none"
                stroke={lit && active ? "#7a3588" : "#d4b4a4"}
                strokeWidth={lit && active ? 2 : 1.25}
                strokeDasharray={e.dashed ? "5 4" : undefined}
                markerEnd={
                  lit && active ? "url(#arrow-active)" : "url(#arrow)"
                }
                opacity={lit ? 1 : 0.28}
              />
            );
          })}

          {diagramNodes.map((n) => {
            const { w, h } = nodeSize(n.id);
            const x = n.x - w / 2;
            const y = n.y - h / 2;
            const phase = phaseOf(n.id);
            const entityId = n.id.startsWith("ruta-") ? null : n.id;
            const lit = !active || relatedIds.has(n.id);
            const isActive = active === n.id;
            const fill =
              phase && PHASE_COLOR[phase]
                ? `color-mix(in oklab, ${PHASE_COLOR[phase]} ${isActive ? 22 : 12}%, #f7ebe6)`
                : isActive
                  ? "color-mix(in oklab, #7a3588 14%, #f7ebe6)"
                  : "#f7ebe6";
            const stroke = isActive
              ? "#7a3588"
              : phase
                ? PHASE_COLOR[phase]
                : "#c4a494";
            const href = nodeHref(n.id);
            const g = (
              <g
                key={n.id}
                opacity={lit ? 1 : 0.35}
                className="cursor-pointer"
                onClick={() => entityId && pick(entityId)}
                onKeyDown={(ev) => {
                  if (entityId && (ev.key === "Enter" || ev.key === " ")) {
                    ev.preventDefault();
                    pick(entityId);
                  }
                }}
                role={entityId ? "button" : undefined}
                tabIndex={entityId ? 0 : undefined}
                aria-pressed={entityId ? isActive : undefined}
              >
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx={n.kind === "scale" ? 6 : 8}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isActive ? 2.5 : 1.5}
                />
                <text
                  x={n.x}
                  y={n.y + (n.id === "arbol" ? 1 : 0)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-ink text-[12px] font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                  pointerEvents="none"
                >
                  {n.label}
                </text>
                {n.central && (
                  <text
                    x={n.x}
                    y={n.y + h / 2 + 14}
                    textAnchor="middle"
                    className="fill-ink-soft text-[9px]"
                    pointerEvents="none"
                  >
                    eje central
                  </text>
                )}
              </g>
            );
            if (href) {
              return (
                <a key={n.id} href={href} className="outline-none">
                  {g}
                </a>
              );
            }
            return g;
          })}
        </svg>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-soft">
        {(Object.entries(phaseLabels) as [SystemEntity["phase"], string][]).map(
          ([key, label]) => (
            <span key={key} className="inline-flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: PHASE_COLOR[key] }}
              />
              {label}
            </span>
          ),
        )}
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-0 w-5 border-t border-dashed border-line" />
          Relación indirecta
        </span>
      </div>

      {active && entityById[active] && (
        <div className="rounded-lg border border-thread/30 bg-paper-deep/50 px-4 py-3 text-sm text-ink-soft">
          <span className="font-display font-semibold text-ink">
            {entityById[active].label}
            {entityById[active].alias
              ? ` (${entityById[active].alias})`
              : ""}
          </span>
          <span className="mx-2 text-line">·</span>
          {entityById[active].summary}
        </div>
      )}
    </div>
  );
}
