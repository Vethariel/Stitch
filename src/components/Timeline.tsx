import { useMemo, useState } from "react";
import {
  getCurrentMilestoneId,
  milestones,
  months,
  phases,
  type Milestone,
} from "../data/schedule";

type MonthFilter = (typeof months)[number]["id"];

function statusOf(milestone: Milestone, currentId: string | null) {
  if (!currentId) return "upcoming" as const;
  const currentIndex = milestones.findIndex((m) => m.id === currentId);
  const index = milestones.findIndex((m) => m.id === milestone.id);
  if (index < currentIndex) return "done" as const;
  if (index === currentIndex) return "current" as const;
  return "upcoming" as const;
}

export default function Timeline() {
  const [filter, setFilter] = useState<MonthFilter>("todos");
  const currentId = useMemo(() => getCurrentMilestoneId(), []);

  const visible = useMemo(
    () =>
      filter === "todos"
        ? milestones
        : milestones.filter((item) => item.month === filter),
    [filter],
  );

  return (
    <div className="space-y-10">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filtrar cronograma por mes"
      >
        {months.map((month) => {
          const active = filter === month.id;
          return (
            <button
              key={month.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(month.id)}
              className={[
                "border px-4 py-2 text-sm font-medium transition-colors duration-200",
                active
                  ? "border-thread bg-thread text-paper"
                  : "border-line bg-transparent text-ink-soft hover:border-thread hover:text-thread",
              ].join(" ")}
            >
              {month.label}
            </button>
          );
        })}
      </div>

      {filter === "todos" && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {phases.map((phase) => (
            <article
              key={phase.id}
              className="border-l-2 border-thread pl-4"
            >
              <p className="font-display text-xs font-semibold tracking-[0.18em] text-thread uppercase">
                Etapa {phase.id}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                {phase.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{phase.range}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft italic">
                {phase.question}
              </p>
            </article>
          ))}
        </div>
      )}

      <ol className="relative space-y-0 border-l border-line ml-3 sm:ml-4">
        {visible.map((milestone, index) => {
          const status = statusOf(milestone, currentId);
          const phase = phases.find((p) => p.id === milestone.phase);

          return (
            <li
              key={milestone.id}
              className="relative pb-10 pl-8 last:pb-0 sm:pl-10"
              style={{
                animation: `fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.03}s both`,
              }}
            >
              <span
                className={[
                  "absolute top-1.5 -left-[5px] size-2.5 rounded-full border-2",
                  status === "current"
                    ? "border-thread bg-thread"
                    : status === "done"
                      ? "border-thread bg-paper"
                      : "border-line bg-paper",
                ].join(" ")}
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <time
                  dateTime={milestone.date}
                  className="font-display text-sm font-semibold tracking-wide text-thread"
                >
                  {milestone.dateLabel}
                </time>
                <span className="text-xs tracking-wide text-ink-soft uppercase">
                  {phase?.title}
                </span>
                {status === "current" && (
                  <span className="text-xs font-semibold tracking-wide text-signal uppercase">
                    Semana actual
                  </span>
                )}
              </div>

              <h3 className="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">
                {milestone.objective}
              </h3>
              <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
                <span className="font-medium text-ink">Entregable: </span>
                {milestone.deliverable}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
