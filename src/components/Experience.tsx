import Section from "./Section";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative border-l border-line">
        {experience.map((job) => (
          <li key={job.company} className="relative pb-4 pl-7 sm:pl-10">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-amber" aria-hidden />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-2xl font-bold">{job.company}</h3>
              <p className="font-mono text-sm text-amber">{job.period}</p>
            </div>
            <p className="mt-1 text-muted">
              {job.role} · {job.type} · {job.location}
            </p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2 md:gap-x-10">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[0.95rem] leading-relaxed text-fg/85">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-muted" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
