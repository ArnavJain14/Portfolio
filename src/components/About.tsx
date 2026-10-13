import Section from "./Section";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-6 text-fg/85 md:grid-cols-2 md:gap-10">
        {profile.about.map((p) => (
          <p key={p.slice(0, 24)} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
