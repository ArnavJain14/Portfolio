import Section from "./Section";
import { certifications, education } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & certifications">
      <ul className="grid gap-4">
        {education.map((e) => (
          <li
            key={e.school}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-xl border border-line bg-panel p-6"
          >
            <div>
              <h3 className="font-display text-xl font-bold">{e.degree}</h3>
              <p className="mt-1 text-muted">
                {e.school} · {e.detail}
              </p>
            </div>
            <p className="font-mono text-sm text-amber">{e.period}</p>
          </li>
        ))}
      </ul>

      <h3 className="label mb-3 mt-10">Certifications</h3>
      <ul className="border-t border-line">
        {certifications.map((c) => (
          <li
            key={c.name}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4"
          >
            <p>
              <span className="font-medium">{c.name}</span>
              <span className="text-muted"> · {c.issuer}</span>
            </p>
            <p className="font-mono text-sm text-muted">{c.date}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
