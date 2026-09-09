import { useMemo, useState } from "react";
import {
  companionThemes,
  themeById,
  type CompanionTheme,
} from "../data/companionThemes";

const CENTER = { id: "companero", label: "Stitch", x: 420, y: 300 };
const VIEW_W = 840;
const VIEW_H = 600;

type LayoutNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  kind: "center" | "theme";
  short?: string;
};

function shortLabel(label: string) {
  const before = label.split("/")[0]?.trim() ?? label;
  return before.length > 18 ? `${before.slice(0, 16)}…` : before;
}

function themeLayout(): LayoutNode[] {
  const n = companionThemes.length;
  const cx = CENTER.x;
  const cy = CENTER.y;
  const rx = 290;
  const ry = 220;
  const themes: LayoutNode[] = companionThemes.map((t, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    return {
      id: t.id,
      label: t.label,
      short: shortLabel(t.label),
      x: cx + Math.cos(angle) * rx,
      y: cy + Math.sin(angle) * ry,
      kind: "theme" as const,
    };
  });
  return [
    { id: CENTER.id, label: CENTER.label, x: cx, y: cy, kind: "center" },
    ...themes,
  ];
}

export default function SystemMapDiagram() {
  const [selected, setSelected] = useState<string | null>(null);
  const nodes = useMemo(() => themeLayout(), []);
  const nodeMap = useMemo(
    () => Object.fromEntries(nodes.map((n) => [n.id, n])),
    [nodes],
  );

  const theme: CompanionTheme | undefined = selected
    ? themeById(selected)
    : undefined;

  const pick = (id: string) => {
    if (id === CENTER.id) {
      setSelected(null);
      return;
    }
    setSelected((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
      <div className="min-h-[360px] w-full overflow-x-auto border border-line bg-paper-deep/40">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          width={VIEW_W}
          height={VIEW_H}
          className="mx-auto block h-auto w-full max-w-full"
          style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
          role="img"
          aria-label="Mapa del compañero Stitch y sus temas. Haz clic en un tema para ver el lado pedagógico y el técnico."
        >
          {companionThemes.map((t) => {
            const from = nodeMap[CENTER.id];
            const to = nodeMap[t.id];
            if (!from || !to) return null;
            const lit = !selected || selected === t.id;
            return (
              <line
                key={`e-${t.id}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={lit && selected ? "#7a3588" : "#d4b4a4"}
                strokeWidth={lit && selected ? 2 : 1.25}
                opacity={lit ? 1 : 0.22}
              />
            );
          })}

          {nodes.map((n) => {
            const isCenter = n.kind === "center";
            const isSel = selected === n.id;
            const lit = !selected || selected === n.id || isCenter;
            const w = isCenter ? 112 : 128;
            const h = isCenter ? 48 : 40;
            const x = n.x - w / 2;
            const y = n.y - h / 2;
            const fill = isCenter
              ? isSel || !selected
                ? "color-mix(in oklab, #7a3588 18%, #f7ebe6)"
                : "color-mix(in oklab, #7a3588 10%, #f7ebe6)"
              : isSel
                ? "color-mix(in oklab, #ff5c00 16%, #f7ebe6)"
                : "#f7ebe6";
            const stroke = isCenter
              ? "#7a3588"
              : isSel
                ? "#ff5c00"
                : "#c4a494";

            return (
              <g
                key={n.id}
                opacity={lit ? 1 : 0.28}
                className="cursor-pointer"
                onClick={() => pick(n.id)}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter" || ev.key === " ") {
                    ev.preventDefault();
                    pick(n.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isCenter ? undefined : isSel}
                aria-label={
                  isCenter
                    ? "Stitch, compañero — centro del mapa"
                    : `Tema ${n.label}`
                }
              >
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx={isCenter ? 10 : 8}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isSel || isCenter ? 2.5 : 1.5}
                />
                <text
                  x={n.x}
                  y={n.y + (isCenter ? 1 : 0)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#22141a"
                  fontSize={12}
                  fontWeight={600}
                  fontFamily="Fraunces Variable, Fraunces, serif"
                  pointerEvents="none"
                >
                  {isCenter ? n.label : (n.short ?? n.label)}
                </text>
                {isCenter && (
                  <text
                    x={n.x}
                    y={n.y + h / 2 + 14}
                    textAnchor="middle"
                    fill="#5a3e48"
                    fontSize={9}
                    pointerEvents="none"
                  >
                    compañero
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <aside className="border-l border-line pl-0 lg:pl-8">
        {theme ? (
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
              Compañero · tema
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              {theme.label}
            </h2>

            <div className="mt-8">
              <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
                Pedagógico
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {theme.pedagogical}
              </p>
            </div>

            <div className="mt-8 border-t border-line pt-8">
              <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
                Técnico
              </h3>
              <p className="mt-1 text-xs tracking-wide text-ink-soft uppercase">
                Hipótesis (postura evidenciada)
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {theme.technical}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-8 text-sm text-thread underline decoration-thread/40 underline-offset-4 hover:text-thread-dim"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
              Compañero
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              Stitch
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Haz clic en un tema conectado para ver el lado pedagógico (qué
              indagar) y el técnico (hipótesis de operacionalización).
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft italic">
              {companionThemes.length} temas · otras entidades después
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
