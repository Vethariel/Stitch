import { useEffect, useMemo, useState } from "react";
import {
  caminoCenter,
  caminoMeta,
  caminoNorth,
  caminoOrigin,
  companionThemes,
} from "../data/camino";
import { themeById, type CompanionTheme } from "../data/companionThemes";
import { ruleLinksForTheme } from "../data/marcoCaminoBridge";

const VIEW_W = 980;
const VIEW_H = 620;

const ORIGIN = { x: 110, y: 310 };
const STITCH = { x: 490, y: 310 };
const NORTH = { x: 870, y: 310 };

type Panel =
  | { kind: "origen" }
  | { kind: "stitch" }
  | { kind: "norte" }
  | { kind: "theme"; id: string };

function shortLabel(label: string) {
  const before = label.split("/")[0]?.trim() ?? label;
  return before.length > 16 ? `${before.slice(0, 14)}…` : before;
}

function themePositions() {
  const n = companionThemes.length;
  const rx = 210;
  const ry = 195;
  return companionThemes.map((t, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    return {
      id: t.id,
      label: t.label,
      short: shortLabel(t.label),
      x: STITCH.x + Math.cos(angle) * rx,
      y: STITCH.y + Math.sin(angle) * ry,
    };
  });
}

function panelFromHash(): Panel | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash.startsWith("aspecto-")) return null;
  const id = hash.slice("aspecto-".length);
  if (!themeById(id)) return null;
  return { kind: "theme", id };
}

export default function CaminoDiagram() {
  const [panel, setPanel] = useState<Panel>({ kind: "stitch" });
  const themes = useMemo(() => themePositions(), []);

  useEffect(() => {
    const apply = () => {
      const fromHash = panelFromHash();
      if (fromHash) setPanel(fromHash);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const openTheme = (id: string) => {
    setPanel({ kind: "theme", id });
    if (typeof window !== "undefined") {
      const next = `#aspecto-${id}`;
      if (window.location.hash !== next) {
        window.history.replaceState(null, "", next);
      }
    }
  };

  const theme: CompanionTheme | undefined =
    panel.kind === "theme" ? themeById(panel.id) : undefined;

  const marcoLinks = theme ? ruleLinksForTheme(theme.id) : [];

  const selectedThemeId = panel.kind === "theme" ? panel.id : null;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.85fr)]">
      <div className="min-h-[360px] w-full overflow-x-auto border border-line bg-paper-deep/40">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          width={VIEW_W}
          height={VIEW_H}
          className="mx-auto block h-auto w-full max-w-full"
          style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
          role="img"
          aria-label="Camino: origen Stitch Code, Stitch y aspectos a pulir, norte con principios."
        >
          {/* Path backbone */}
          <line
            x1={ORIGIN.x + 56}
            y1={ORIGIN.y}
            x2={STITCH.x - 64}
            y2={STITCH.y}
            stroke="#c4a494"
            strokeWidth={2}
            strokeDasharray="6 5"
          />
          <line
            x1={STITCH.x + 64}
            y1={STITCH.y}
            x2={NORTH.x - 48}
            y2={NORTH.y}
            stroke="#c4a494"
            strokeWidth={2}
            strokeDasharray="6 5"
          />
          <text
            x={(ORIGIN.x + STITCH.x) / 2}
            y={ORIGIN.y - 28}
            textAnchor="middle"
            fill="#5a3e48"
            fontSize={10}
            fontFamily="Fraunces Variable, Fraunces, serif"
          >
            iterar
          </text>
          <text
            x={(STITCH.x + NORTH.x) / 2}
            y={NORTH.y - 28}
            textAnchor="middle"
            fill="#5a3e48"
            fontSize={10}
            fontFamily="Fraunces Variable, Fraunces, serif"
          >
            rumbo fijo
          </text>

          {/* Theme spokes */}
          {themes.map((t) => {
            const lit = !selectedThemeId || selectedThemeId === t.id;
            return (
              <line
                key={`spoke-${t.id}`}
                x1={STITCH.x}
                y1={STITCH.y}
                x2={t.x}
                y2={t.y}
                stroke={
                  lit && selectedThemeId ? "#7a3588" : "#d4b4a4"
                }
                strokeWidth={lit && selectedThemeId ? 2 : 1}
                opacity={lit ? 0.9 : 0.2}
              />
            );
          })}

          {/* Theme nodes */}
          {themes.map((t) => {
            const isSel = selectedThemeId === t.id;
            const lit = !selectedThemeId || isSel;
            const w = 118;
            const h = 36;
            return (
              <g
                key={t.id}
                opacity={lit ? 1 : 0.25}
                className="cursor-pointer"
                onClick={() => openTheme(t.id)}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter" || ev.key === " ") {
                    ev.preventDefault();
                    openTheme(t.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSel}
                aria-label={`Aspecto ${t.label}`}
              >
                <rect
                  x={t.x - w / 2}
                  y={t.y - h / 2}
                  width={w}
                  height={h}
                  rx={8}
                  fill={
                    isSel
                      ? "color-mix(in oklab, #ff5c00 16%, #f7ebe6)"
                      : "#f7ebe6"
                  }
                  stroke={isSel ? "#ff5c00" : "#c4a494"}
                  strokeWidth={isSel ? 2.5 : 1.5}
                />
                <text
                  x={t.x}
                  y={t.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#22141a"
                  fontSize={11}
                  fontWeight={600}
                  fontFamily="Fraunces Variable, Fraunces, serif"
                  pointerEvents="none"
                >
                  {t.short}
                </text>
              </g>
            );
          })}

          {/* Origin */}
          <g
            className="cursor-pointer"
            onClick={() => setPanel({ kind: "origen" })}
            onKeyDown={(ev) => {
              if (ev.key === "Enter" || ev.key === " ") {
                ev.preventDefault();
                setPanel({ kind: "origen" });
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Origen: Stitch Code — Woven y Hilo"
          >
            <rect
              x={ORIGIN.x - 72}
              y={ORIGIN.y - 28}
              width={144}
              height={56}
              rx={10}
              fill={
                panel.kind === "origen"
                  ? "color-mix(in oklab, #ff8f40 18%, #f7ebe6)"
                  : "#f7ebe6"
              }
              stroke={panel.kind === "origen" ? "#ff5c00" : "#c4a494"}
              strokeWidth={panel.kind === "origen" ? 2.5 : 1.5}
            />
            <text
              x={ORIGIN.x}
              y={ORIGIN.y - 4}
              textAnchor="middle"
              fill="#22141a"
              fontSize={12}
              fontWeight={600}
              fontFamily="Fraunces Variable, Fraunces, serif"
              pointerEvents="none"
            >
              Stitch Code
            </text>
            <text
              x={ORIGIN.x}
              y={ORIGIN.y + 14}
              textAnchor="middle"
              fill="#5a3e48"
              fontSize={10}
              pointerEvents="none"
            >
              Woven · Hilo
            </text>
          </g>

          {/* Stitch center */}
          <g
            className="cursor-pointer"
            onClick={() => setPanel({ kind: "stitch" })}
            onKeyDown={(ev) => {
              if (ev.key === "Enter" || ev.key === " ") {
                ev.preventDefault();
                setPanel({ kind: "stitch" });
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Stitch, compañero — centro del camino"
          >
            <rect
              x={STITCH.x - 58}
              y={STITCH.y - 30}
              width={116}
              height={60}
              rx={12}
              fill="color-mix(in oklab, #7a3588 18%, #f7ebe6)"
              stroke="#7a3588"
              strokeWidth={2.5}
            />
            <text
              x={STITCH.x}
              y={STITCH.y - 2}
              textAnchor="middle"
              fill="#22141a"
              fontSize={14}
              fontWeight={600}
              fontFamily="Fraunces Variable, Fraunces, serif"
              pointerEvents="none"
            >
              Stitch
            </text>
            <text
              x={STITCH.x}
              y={STITCH.y + 16}
              textAnchor="middle"
              fill="#5a3e48"
              fontSize={10}
              pointerEvents="none"
            >
              compañero
            </text>
          </g>

          {/* North */}
          <g
            className="cursor-pointer"
            onClick={() => setPanel({ kind: "norte" })}
            onKeyDown={(ev) => {
              if (ev.key === "Enter" || ev.key === " ") {
                ev.preventDefault();
                setPanel({ kind: "norte" });
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Norte: destino del camino"
          >
            <rect
              x={NORTH.x - 52}
              y={NORTH.y - 28}
              width={104}
              height={56}
              rx={10}
              fill={
                panel.kind === "norte"
                  ? "color-mix(in oklab, #7a3588 14%, #f7ebe6)"
                  : "#f7ebe6"
              }
              stroke={panel.kind === "norte" ? "#7a3588" : "#c4a494"}
              strokeWidth={panel.kind === "norte" ? 2.5 : 1.5}
            />
            <text
              x={NORTH.x}
              y={NORTH.y - 4}
              textAnchor="middle"
              fill="#22141a"
              fontSize={13}
              fontWeight={600}
              fontFamily="Fraunces Variable, Fraunces, serif"
              pointerEvents="none"
            >
              Norte
            </text>
            <text
              x={NORTH.x}
              y={NORTH.y + 14}
              textAnchor="middle"
              fill="#5a3e48"
              fontSize={10}
              pointerEvents="none"
            >
              destino
            </text>
          </g>
        </svg>
      </div>

      <aside className="border-l border-line pl-0 lg:pl-8">
        {panel.kind === "origen" && (
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
              Origen
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              {caminoOrigin.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {caminoOrigin.body}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
              {caminoOrigin.bullets.map((b) => (
                <li
                  key={b}
                  className="border-l-2 border-line pl-3"
                >
                  {b}
                </li>
              ))}
            </ul>
            {caminoOrigin.repoNote && (
              <p className="mt-6 text-sm text-ink-soft italic">
                {caminoOrigin.repoNote}
              </p>
            )}
          </div>
        )}

        {panel.kind === "stitch" && (
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
              Camino · {caminoMeta.label}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              {caminoCenter.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {caminoCenter.body}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
              {caminoCenter.bullets.map((b) => (
                <li
                  key={b}
                  className="border-l-2 border-thread/40 pl-3"
                >
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft italic">
              {companionThemes.length} aspectos alrededor — se pulen en el
              camino; el norte no se mueve.
            </p>
            <p className="mt-4">
              <a
                href="/marco"
                className="text-sm text-thread underline decoration-thread/40 underline-offset-4 hover:text-thread-dim"
              >
                Marco del compañero →
              </a>
            </p>
          </div>
        )}

        {panel.kind === "norte" && (
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
              Destino
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              {caminoNorth.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {caminoNorth.body}
            </p>
            <div className="mt-8 space-y-6">
              {caminoNorth.principles.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8">
              <a
                href="/#norte"
                className="text-sm text-thread underline decoration-thread/40 underline-offset-4 hover:text-thread-dim"
              >
                Norte en la home →
              </a>
            </p>
          </div>
        )}

        {theme && (
          <div id={`aspecto-${theme.id}`}>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
              Aspecto a pulir
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
            {marcoLinks.length > 0 && (
              <div className="mt-8 border-t border-line pt-8">
                <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
                  Marco · reglas
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {marcoLinks.map((r) => (
                    <li key={r.id}>
                      <a
                        href={r.href}
                        className="text-thread underline decoration-thread/40 underline-offset-4 hover:text-thread-dim"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setPanel({ kind: "stitch" });
                if (typeof window !== "undefined") {
                  window.history.replaceState(null, "", window.location.pathname);
                }
              }}
              className="mt-8 text-sm text-thread underline decoration-thread/40 underline-offset-4 hover:text-thread-dim"
            >
              Volver a Stitch
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
