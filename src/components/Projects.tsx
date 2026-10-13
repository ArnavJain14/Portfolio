import Link from "next/link";
import Section from "./Section";
import Workflow from "./Workflow";
import { ArrowIcon } from "./Icons";
import { projects, qaWorkflow } from "@/data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Projects I've worked on"
      intro="The products and features I've tested at Yatra over four years, newest first."
    >
      <div className="mb-14 rounded-xl border border-line bg-panel-2/40 p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold">How I take a feature to release</h3>
        <p className="mb-5 mt-1 text-sm text-muted">
          The testing lifecycle I follow across projects. The exact activities vary by feature and release.
        </p>
        <Workflow steps={qaWorkflow} />
      </div>

      <ol className="border-t border-line">
        {projects.map((p) => (
          <li key={p.slug} className="border-b border-line">
            <Link
              href={`/projects/${p.slug}`}
              className="group grid gap-x-10 gap-y-3 py-8 md:grid-cols-[11rem_1fr_auto] md:items-start"
            >
              <div>
                <p className="font-mono text-sm text-amber">{p.period}</p>
                <p className="label mt-1.5">{p.category}</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-amber">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">{p.summary}</p>
                {p.workflow && (
                  <div className="mt-4">
                    <Workflow steps={p.workflow} variant="inline" />
                  </div>
                )}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded border border-line px-2 py-0.5 text-xs text-fg/75">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber md:pt-2">
                Case study
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
