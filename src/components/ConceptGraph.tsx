import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  clusters,
  conceptById,
  conceptEdges,
  concepts,
  inNarrative,
  narratives,
  narrativesOf,
  neighborsOf,
  relationLabels,
  type ClusterId,
  type Concept,
  type NarrativeId,
} from "../data/concepts";

type SimNode = Concept & {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const CLUSTER_COLOR: Record<ClusterId, string> = {
  acto: "#7a3588",
  desempeno: "#ff5c00",
  cognitivo: "#22141a",
  self: "#ff8f40",
};

function seedLayout(
  width: number,
  height: number,
  ids?: readonly string[],
): SimNode[] {
  const pool = ids ? concepts.filter((c) => ids.includes(c.id)) : concepts;
  const cx = width / 2;
  const cy = height / 2;
  const n = Math.max(pool.length, 1);

  // Un solo anillo (con jitter leve): evita el sesgo a las 4 esquinas del seed por cluster.
  const maxR = Math.min(width, height) * 0.36;
  const r = Math.min(maxR, 48 + n * 5.5);

  return pool.map((c, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const jitter = ((i * 17) % 7) - 3;
    return {
      ...c,
      x: cx + Math.cos(angle) * (r + jitter),
      y: cy + Math.sin(angle) * (r + jitter * 0.6),
      vx: 0,
      vy: 0,
    };
  });
}

export default function ConceptGraph() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<SimNode[]>([]);
  const dragId = useRef<string | null>(null);
  const [size, setSize] = useState({ w: 800, h: 560 });
  const [tick, setTick] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<NarrativeId | "todos">("todos");

  const activeIds = useMemo(() => {
    if (filter === "todos") return undefined;
    return narratives.find((n) => n.id === filter)?.concepts;
  }, [filter]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const apply = () => {
      const w = el.clientWidth;
      const h = Math.max(560, Math.min(820, Math.round(w * 0.78)));
      setSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    nodesRef.current = seedLayout(size.w, size.h, activeIds);
    setTick((n) => n + 1);
  }, [size, activeIds]);

  useEffect(() => {
    if (selected && !inNarrative(selected, filter)) setSelected(null);
  }, [filter, selected]);

  useEffect(() => {
    let frame = 0;
    let alive = true;
    const step = () => {
      if (!alive) return;
      const nodes = nodesRef.current;
      const { w, h } = size;
      const n = nodes.length;
      if (!n) {
        frame = requestAnimationFrame(step);
        return;
      }

      const cx = w / 2;
      const cy = h / 2;
      // Escala con n: con ~60 nodos, 4200 fijo empujaba todo a las esquinas.
      const charge = Math.min(3200, 140000 / Math.max(n, 1));
      const spring = n > 40 ? 0.006 : 0.01;
      const rest = n > 40 ? 108 : 132;
      const damp = 0.86;
      const pad = 44;
      const centerPull = n > 40 ? 0.012 : 0.005;
      const wall = 0.08;
      const maxV = 8;
      const maxForce = 14;

      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const a = nodes[i];
          const b = nodes[j];
          let dx = a.x - b.x;
          let dy = a.y - b.y;
          let dist = Math.hypot(dx, dy) || 0.01;
          // Suelo de distancia evita explosiones cuando se solapan.
          const effective = Math.max(dist, 28);
          let force = charge / (effective * effective);
          if (force > maxForce) force = maxForce;
          dx = (dx / dist) * force;
          dy = (dy / dist) * force;
          if (dragId.current !== a.id) {
            a.vx += dx;
            a.vy += dy;
          }
          if (dragId.current !== b.id) {
            b.vx -= dx;
            b.vy -= dy;
          }
        }
      }

      for (const edge of conceptEdges) {
        const a = nodes.find((node) => node.id === edge.from);
        const b = nodes.find((node) => node.id === edge.to);
        if (!a || !b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.01;
        const t = (dist - rest) * spring;
        const fx = (dx / dist) * t;
        const fy = (dy / dist) * t;
        if (dragId.current !== a.id) {
          a.vx += fx;
          a.vy += fy;
        }
        if (dragId.current !== b.id) {
          b.vx -= fx;
          b.vy -= fy;
        }
      }

      let energy = 0;
      for (const node of nodes) {
        if (dragId.current === node.id) {
          node.vx = 0;
          node.vy = 0;
          continue;
        }
        node.vx += (cx - node.x) * centerPull;
        node.vy += (cy - node.y) * centerPull;

        // Paredes blandas: empujan hacia adentro en vez de apilar en el borde.
        if (node.x < pad * 2) node.vx += (pad * 2 - node.x) * wall;
        if (node.x > w - pad * 2) node.vx -= (node.x - (w - pad * 2)) * wall;
        if (node.y < pad * 2) node.vy += (pad * 2 - node.y) * wall;
        if (node.y > h - pad * 2) node.vy -= (node.y - (h - pad * 2)) * wall;

        node.vx *= damp;
        node.vy *= damp;
        const speed = Math.hypot(node.vx, node.vy);
        if (speed > maxV) {
          node.vx = (node.vx / speed) * maxV;
          node.vy = (node.vy / speed) * maxV;
        }

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < pad) {
          node.x = pad;
          node.vx = Math.abs(node.vx) * 0.3;
        } else if (node.x > w - pad) {
          node.x = w - pad;
          node.vx = -Math.abs(node.vx) * 0.3;
        }
        if (node.y < pad) {
          node.y = pad;
          node.vy = Math.abs(node.vy) * 0.3;
        } else if (node.y > h - pad) {
          node.y = h - pad;
          node.vy = -Math.abs(node.vy) * 0.3;
        }

        energy += node.vx * node.vx + node.vy * node.vy;
      }

      if (energy > 0.05 || dragId.current) setTick((t) => t + 1);
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
    };
  }, [size]);

  const nodes = nodesRef.current;
  const nodeIdSet = useMemo(
    () => new Set(nodes.map((n) => n.id)),
    // tick updates when layout/filter changes positions or membership
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tick, filter],
  );
  const visibleEdges = useMemo(() => {
    const seen = new Set<string>();
    return conceptEdges.filter((edge) => {
      if (!nodeIdSet.has(edge.from) || !nodeIdSet.has(edge.to)) return false;
      const key = `${edge.from}>${edge.to}:${edge.kind}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [nodeIdSet]);
  const relatedIds = useMemo(() => {
    if (!selected) return null;
    const ids = new Set<string>([selected]);
    for (const e of neighborsOf(selected)) {
      ids.add(e.from);
      ids.add(e.to);
    }
    return ids;
  }, [selected]);

  const selectedConcept = selected ? conceptById(selected) : null;
  const selectedEdges = selected
    ? neighborsOf(selected).filter((edge) => {
        const other = edge.from === selected ? edge.to : edge.from;
        return inNarrative(other, filter);
      })
    : [];

  const onPointerDown = useCallback(
    (id: string, event: ReactPointerEvent<SVGGElement>) => {
      event.preventDefault();
      dragId.current = id;
      setSelected(id);
      (event.currentTarget as SVGGElement).setPointerCapture(event.pointerId);
    },
    [],
  );

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<SVGSVGElement>) => {
      if (!dragId.current) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const node = nodesRef.current.find((n) => n.id === dragId.current);
      if (!node) return;
      node.x = event.clientX - rect.left;
      node.y = event.clientY - rect.top;
      setTick((t) => t + 1);
    },
    [],
  );

  const onPointerUp = useCallback(() => {
    dragId.current = null;
  }, []);

  const activeNarrative =
    filter === "todos" ? null : narratives.find((n) => n.id === filter);

  return (
    <div className="space-y-10">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filtrar el grafo por narrativa"
      >
        <button
          type="button"
          role="tab"
          aria-selected={filter === "todos"}
          onClick={() => setFilter("todos")}
          className={[
            "border px-4 py-2 text-sm font-medium transition-colors duration-200",
            filter === "todos"
              ? "border-thread bg-thread text-paper"
              : "border-line bg-transparent text-ink-soft hover:border-thread hover:text-thread",
          ].join(" ")}
        >
          Todas
        </button>
        {narratives.map((narrative) => {
          const active = filter === narrative.id;
          return (
            <button
              key={narrative.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(narrative.id)}
              className={[
                "border px-4 py-2 text-sm font-medium transition-colors duration-200",
                active
                  ? "border-thread bg-thread text-paper"
                  : "border-line bg-transparent text-ink-soft hover:border-thread hover:text-thread",
              ].join(" ")}
            >
              {narrative.label}
            </button>
          );
        })}
      </div>
      {activeNarrative ? (
        <p className="-mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {activeNarrative.blurb}
        </p>
      ) : (
        <p className="-mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Vista de todas las relaciones. Elige una narrativa arriba para ver solo
          los conceptos de ese aspecto.
        </p>
      )}

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
        <div
          ref={wrapRef}
          className="overflow-hidden border border-line bg-paper-deep/40"
        >
          <svg
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
            className="block w-full touch-none"
            role="img"
            data-tick={tick}
            aria-label="Grafo de conceptos. Selecciona un nodo para ver sus vínculos."
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            {visibleEdges.map((edge) => {
              const a = nodes.find((n) => n.id === edge.from);
              const b = nodes.find((n) => n.id === edge.to);
              if (!a || !b) return null;
              const hot =
                !relatedIds || (relatedIds.has(a.id) && relatedIds.has(b.id));
              return (
                <line
                  key={`${edge.from}-${edge.to}-${edge.kind}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={hot ? "#7a3588" : "#c9897a"}
                  strokeWidth={hot && selected ? 2 : 1}
                  strokeOpacity={hot ? 0.78 : selected ? 0.12 : 0.42}
                />
              );
            })}
            {nodes.map((node) => {
              const hot = !relatedIds || relatedIds.has(node.id);
              const isSel = selected === node.id;
              const color = CLUSTER_COLOR[node.cluster];
              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer"
                  onPointerDown={(e) => onPointerDown(node.id, e)}
                  opacity={hot ? 1 : 0.18}
                >
                  <circle
                    r={isSel ? 11 : 8}
                    fill={color}
                    stroke={isSel ? "#f7ebe6" : "transparent"}
                    strokeWidth={2}
                  />
                  <text
                    y={22}
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                    fill="#22141a"
                    fontSize={11}
                    fontFamily="Fraunces Variable, Fraunces, serif"
                    fontWeight={isSel ? 600 : 500}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <aside className="border-l border-line pl-0 lg:pl-8">
          {selectedConcept ? (
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
                {clusters.find((c) => c.id === selectedConcept.cluster)?.label}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                {selectedConcept.label}
              </h2>
              <p className="mt-1 font-display text-sm italic text-ink-soft">
                {selectedConcept.en}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {selectedConcept.definition}
              </p>
              {narrativesOf(selectedConcept.id).length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {narrativesOf(selectedConcept.id).map((n) => (
                    <li key={n.id}>
                      <button
                        type="button"
                        onClick={() => setFilter(n.id)}
                        className={[
                          "border px-2.5 py-1 text-xs transition-colors duration-200",
                          filter === n.id
                            ? "border-thread bg-thread text-paper"
                            : "border-line text-ink-soft hover:border-thread hover:text-thread",
                        ].join(" ")}
                      >
                        {n.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <h3 className="mt-8 font-display text-sm font-semibold tracking-wide text-ink uppercase">
                Vínculos
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                {selectedEdges.map((edge) => {
                  const otherId = edge.from === selected ? edge.to : edge.from;
                  const other = conceptById(otherId);
                  const outbound = edge.from === selected;
                  return (
                    <li key={`${edge.from}-${edge.to}-${edge.kind}`}>
                      <button
                        type="button"
                        onClick={() => setSelected(otherId)}
                        className="text-left hover:text-thread"
                      >
                        {outbound ? (
                          <>
                            {selectedConcept.label}{" "}
                            <span className="text-thread">
                              {relationLabels[edge.kind]}
                            </span>{" "}
                            {other?.label}
                          </>
                        ) : (
                          <>
                            {other?.label}{" "}
                            <span className="text-thread">
                              {relationLabels[edge.kind]}
                            </span>{" "}
                            {selectedConcept.label}
                          </>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 text-xs text-ink-soft/80">
                Vínculos de trabajo: se afinarán con lectura. Arrastra nodos para
                acomodar el mapa.
              </p>
            </div>
          ) : (
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
                Narrativas
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                Conceptos y narrativas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Las narrativas agrupan conceptos de un mismo aspecto del
                aprendizaje. El color de cada nodo indica su tipo: acto,
                desempeño, cognitivo o persona.
              </p>
              <ul className="mt-8 space-y-4">
                {narratives.map((narrative) => (
                  <li key={narrative.id}>
                    <button
                      type="button"
                      onClick={() => setFilter(narrative.id)}
                      className="text-left hover:text-thread"
                    >
                      <p className="font-display text-sm font-semibold text-ink">
                        {narrative.label}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">
                        {narrative.blurb}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                {clusters.map((cluster) => (
                  <li
                    key={cluster.id}
                    className="flex items-center gap-2 text-xs text-ink-soft"
                  >
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: CLUSTER_COLOR[cluster.id] }}
                    />
                    {cluster.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <section aria-label="Glosario">
        <h2 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
          Glosario
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concepts
            .filter((c) => inNarrative(c.id, filter))
            .sort((a, b) => a.label.localeCompare(b.label, "es"))
            .map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => setSelected(c.id)}
                  className="text-left"
                >
                  <span className="font-display text-lg font-semibold text-ink hover:text-thread">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block font-display text-sm italic text-ink-soft">
                    {c.en}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                    {c.definition}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
