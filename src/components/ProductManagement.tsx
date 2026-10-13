import Section from "./Section";
import { pmCourse, pmIntro, pmProjects, pmSkills } from "@/data/pm";

export default function ProductManagement() {
  return (
    <Section id="product" eyebrow="Product Management" title="PM coursework & case studies" intro={pmIntro}>
      <div className="mb-6 grid gap-6 rounded-xl border border-amber/40 bg-amber-dim p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <p className="label text-amber!">Programme</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">{pmCourse.name}</h3>
          <p className="mt-2 text-fg/85">
            <span className="font-semibold">{pmCourse.institute}</span>
            <span className="text-muted"> · {pmCourse.instituteFull}</span>
          </p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {pmCourse.topics.map((t) => (
              <li key={t} className="rounded-md bg-ink/60 px-2.5 py-1 text-sm text-fg/85">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <p className="font-mono text-xs text-muted md:max-w-[12rem] md:text-right">
          Coursework and case studies, not professional PM employment
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {pmProjects.map((p) => (
          <article key={p.title} className="flex flex-col gap-3 rounded-xl border border-line bg-panel p-6">
            <p className="label text-amber!">{p.kind}</p>
            <h3 className="font-display text-xl font-bold">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {p.tags.map((t) => (
                <li key={t} className="rounded border border-line px-2 py-0.5 text-xs text-fg/75">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <dl className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-3">
        {pmSkills.map((s) => (
          <div key={s.group}>
            <dt className="font-display font-bold">{s.group}</dt>
            <dd className="mt-3 flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <span key={item} className="rounded-md bg-panel-2 px-2.5 py-1 text-sm text-fg/85">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
