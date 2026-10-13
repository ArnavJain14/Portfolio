import Section from "./Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Skills and tools">
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="bg-panel p-6">
            <h3 className="font-display text-lg font-bold">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-md bg-panel-2 px-2.5 py-1 text-sm text-fg/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
