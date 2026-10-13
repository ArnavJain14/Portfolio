import Section from "./Section";
import { profile } from "@/data/profile";
import EmailActions from "./EmailActions";

// Contact card styled as a boarding pass, since all my work is in travel booking.
export default function Contact() {
  const [last, ...first] = profile.name.split(" ").reverse();

  const fields = [
    { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
    { k: "Phone", v: profile.phone, href: `tel:${profile.phoneHref}` },
    { k: "LinkedIn", v: "arnav-jain-06764b19b", href: profile.linkedin, external: true },
    { k: "Location", v: profile.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      intro="I'm looking for QA Engineer and QA Automation roles. Email is the quickest way to reach me."
    >
      <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel md:flex-row">
        {/* main part of the pass */}
        <div className="min-w-0 flex-1 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="label text-amber!">Boarding pass</p>
            <p className="font-mono text-xs text-muted">Class: Full time</p>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="label">From</p>
              <p className="font-display text-4xl font-extrabold sm:text-5xl">GGN</p>
              <p className="text-xs text-muted">Gurugram</p>
            </div>
            <div className="mb-5 h-px flex-1 border-t border-dashed border-muted/50" aria-hidden />
            <div className="text-right">
              <p className="label">To</p>
              <p className="font-display text-4xl font-extrabold text-amber sm:text-5xl">
                YOU
              </p>
              <p className="text-xs text-muted">Your QA team</p>
            </div>
          </div>

          <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            <div>
              <dt className="label">Passenger</dt>
              <dd className="mt-1 font-mono text-sm uppercase">
                {last} / {first.reverse().join(" ")}
              </dd>
            </div>
            <div>
              <dt className="label">Seat</dt>
              <dd className="mt-1 font-mono text-sm">QA Engineer</dd>
            </div>
            {fields.map((f) => (
              <div key={f.k} className="min-w-0">
                <dt className="label">{f.k}</dt>
                <dd className="mt-1 break-words font-mono text-sm">
                  {f.href ? (
                    <a
                      href={f.href}
                      {...(f.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="underline decoration-line underline-offset-4 hover:decoration-amber"
                    >
                      {f.v}
                    </a>
                  ) : (
                    f.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* tear-off stub */}
        <div className="flex flex-col justify-between gap-6 border-t-2 border-dashed border-line p-6 sm:p-8 md:w-64 md:border-l-2 md:border-t-0">
          <div>
            <p className="label">Status</p>
            <p className="mt-1 font-display text-xl font-bold text-pass">
              {profile.available ? "Available" : "Not looking"}
            </p>
            <p className="label mt-5">Gate</p>
            <p className="mt-1 font-mono text-sm">Your inbox</p>
          </div>
          <div
            className="h-14 w-full opacity-70"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--color-fg) 0 2px, transparent 2px 4px, var(--color-fg) 4px 5px, transparent 5px 9px, var(--color-fg) 9px 12px, transparent 12px 14px)",
            }}
            aria-hidden
          />
          <EmailActions
            email={profile.email}
            subject="Opportunity for Arnav Jain"
            body={"Hi Arnav,\n\nI came across your portfolio and would like to talk about a role.\n\n"}
          />
        </div>
      </div>
    </Section>
  );
}
