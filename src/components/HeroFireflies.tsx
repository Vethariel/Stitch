import { useCallback, useMemo, useState, type CSSProperties } from "react";

type Firefly = {
  id: number;
  cx: number;
  cy: number;
  delay: string;
};

const COUNT = 20;
const DURATION_S = 3;

const ZONE = {
  minX: 57,
  maxX: 95,
  minY: 27,
  maxY: 70,
};

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function randomPos() {
  return {
    cx: Number(rand(ZONE.minX, ZONE.maxX).toFixed(2)),
    cy: Number(rand(ZONE.minY, ZONE.maxY).toFixed(2)),
  };
}

function createFireflies(): Firefly[] {
  return Array.from({ length: COUNT }, (_, id) => ({
    id,
    ...randomPos(),
    // Stagger within one cycle so they don't teleport together
    delay: `${((id * 0.41) % DURATION_S).toFixed(2)}s`,
  }));
}

export default function HeroFireflies() {
  const [flies, setFlies] = useState<Firefly[]>(createFireflies);
  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const relocate = useCallback((id: number) => {
    if (reduceMotion) return;
    setFlies((prev) =>
      prev.map((fly) => (fly.id === id ? { ...fly, ...randomPos() } : fly)),
    );
  }, [reduceMotion]);

  return (
    <svg
      className="hero-nodes pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffdf5" stopOpacity="1" />
          <stop offset="35%" stopColor="#fff4cc" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffe9a0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {flies.map((fly) => (
        <g
          key={fly.id}
          className="hero-firefly"
          style={
            {
              "--node-delay": fly.delay,
              "--node-dur": `${DURATION_S}s`,
            } as CSSProperties
          }
          onAnimationIteration={() => relocate(fly.id)}
        >
          <circle cx={fly.cx} cy={fly.cy} r="0.9" fill="url(#bulbGlow)" />
          <circle cx={fly.cx} cy={fly.cy} r="0.22" fill="#fffef8" />
        </g>
      ))}
    </svg>
  );
}
