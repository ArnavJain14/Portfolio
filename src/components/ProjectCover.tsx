import type { Project } from "@/data/projects";

// Small drawings built from real parts of each project, used as card covers.
export default function ProjectCover({ type }: { type: NonNullable<Project["cover"]> }) {
  return (
    <div className="flex w-full items-center justify-center bg-panel-2 px-5 py-10 font-mono text-[11px] sm:text-xs">
      {type === "defect" && <Defect />}
    </div>
  );
}

function Defect() {
  const stages = ["Found", "Release held", "Fixed", "Released"];
  return (
    <div className="w-full max-w-sm rounded-md border border-line bg-ink p-4">
      <div className="flex items-center justify-between">
        <span className="text-muted">B2C-SME · Checkout</span>
        <span className="rounded-full bg-fail/15 px-2 py-0.5 text-fail">Blocker</span>
      </div>
      <p className="mt-3 font-body text-sm text-fg">Mandatory GST field blocks checkout</p>
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {stages.map((s, i) => (
          <span
            key={s}
            className={`rounded px-2 py-1 ${
              i === stages.length - 1
                ? "bg-pass/15 text-pass"
                : i === 1
                  ? "bg-amber-dim text-amber"
                  : "bg-panel text-muted"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
