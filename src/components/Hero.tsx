import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowIcon, FileIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        {profile.available && (
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-xs font-medium text-fg">
            <span className="h-1.5 w-1.5 rounded-full bg-pass" />
            Open to QA and QA Automation roles
          </p>
        )}

        <h1 className="mt-7 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-amber">
          {profile.roles.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              {i > 0 && <span className="text-line">/</span>}
              {r}
            </span>
          ))}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            See my projects <ArrowIcon />
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-fg/40"
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-fg/40"
          >
            <FileIcon /> Resume
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
          {[
            ["Experience", "4 years"],
            ["Current", "Yatra Online"],
            ["Based in", "Gurugram"],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink px-4 py-3.5">
              <dt className="label">{k}</dt>
              <dd className="mt-1 font-display text-base font-semibold sm:text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
