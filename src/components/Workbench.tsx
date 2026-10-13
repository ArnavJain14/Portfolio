import Section from "./Section";
import { workbench } from "@/data/workbench";

export default function Workbench() {
  return (
    <Section
      id="workbench"
      eyebrow="On the Workbench"
      title="What I'm building now"
      intro="Work in progress. It moves to Projects once it's finished."
    >
      <div className="grid gap-6">
        {workbench.map((w) => {
          const done = w.steps.filter((s) => s.done).length;
          return (
            <article key={w.title} className="overflow-hidden rounded-xl border border-line bg-panel">
              <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_20rem]">
                <div className="min-w-0">
                  <p className="inline-flex items-center gap-2 rounded-full bg-amber-dim px-3 py-1 font-mono text-xs text-amber">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                    </span>
                    {w.status}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{w.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{w.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {w.tags.map((t) => (
                      <li key={t} className="rounded border border-line px-2 py-0.5 text-xs text-fg/75">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* test-run style progress */}
                <div className="min-w-0 rounded-lg border border-line bg-ink font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-muted">
                    <span>coverage</span>
                    <span>
                      <span className="text-pass">{done}</span> / {w.steps.length}
                    </span>
                  </div>
                  <ol>
                    {w.steps.map((s) => (
                      <li
                        key={s.name}
                        className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 last:border-0"
                      >
                        <span className={s.done ? "text-fg" : "text-muted"}>{s.name}</span>
                        {s.done ? (
                          <span className="text-pass">✓ passing</span>
                        ) : (
                          <span className="text-amber">◌ building</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="grid border-t border-line md:grid-cols-2">
                {[
                  ["Built so far", w.built, "bg-pass"],
                  ["Up next", w.next, "bg-amber"],
                ].map(([heading, points, dot]) => (
                  <div
                    key={heading as string}
                    className="border-line p-6 first:border-b sm:p-8 md:first:border-b-0 md:first:border-r"
                  >
                    <h4 className="label">{heading as string}</h4>
                    <ul className="mt-4 grid gap-3">
                      {(points as string[]).map((pt) => (
                        <li key={pt} className="flex gap-3 text-[0.95rem] leading-relaxed text-fg/85">
                          <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} aria-hidden />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
