import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCover from "@/components/ProjectCover";
import Workflow from "@/components/Workflow";
import { ArrowIcon } from "@/components/Icons";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/profile";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project
    ? { title: `${project.title} | ${profile.name}`, description: project.summary }
    : {};
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-6 sm:pt-14">
      <Link href="/#projects" className="text-sm text-muted hover:text-fg">
        ← All projects
      </Link>

      <p className="label mt-10 text-amber!">{project.category}</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-fg/85">{project.summary}</p>

      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-5">
        <div>
          <dt className="label">Company</dt>
          <dd className="mt-1 text-sm">Yatra Online Ltd.</dd>
        </div>
        <div>
          <dt className="label">Timeline</dt>
          <dd className="mt-1 text-sm">{project.period}</dd>
        </div>
        <div>
          <dt className="label">Role</dt>
          <dd className="mt-1 text-sm">QA Engineer</dd>
        </div>
        <div>
          <dt className="label">Tools</dt>
          <dd className="mt-1 text-sm">{project.tools.join(", ")}</dd>
        </div>
      </dl>

      {project.workflow && (
        <section className="mt-10">
          <h2 className="label mb-4">Testing workflow</h2>
          <Workflow steps={project.workflow} />
        </section>
      )}

      {project.cover && (
        <div className="mt-10 overflow-hidden rounded-xl border border-line">
          <ProjectCover type={project.cover} />
        </div>
      )}

      <div className="mt-12 grid gap-10">
        {project.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-2xl font-bold">{s.heading}</h2>
            {s.body && <p className="mt-3 leading-relaxed text-fg/85">{s.body}</p>}
            {s.points && (
              <ul className="mt-4 grid gap-3">
                {s.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed text-fg/85">
                    <span className="mt-3 h-px w-3 shrink-0 bg-amber" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className="group mt-16 flex items-center justify-between gap-4 rounded-xl border border-line bg-panel p-6 transition-colors hover:border-amber/50"
      >
        <div>
          <p className="label">Next project</p>
          <p className="mt-1 font-display text-xl font-bold">{next.title}</p>
        </div>
        <ArrowIcon className="h-5 w-5 text-amber transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
