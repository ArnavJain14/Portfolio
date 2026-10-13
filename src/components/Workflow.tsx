import { ArrowIcon } from "./Icons";

type Props = {
  steps: string[];
  // "chart" draws numbered boxes; "inline" is a compact chain for list rows.
  variant?: "chart" | "inline";
};

// Testing workflow drawn as a flowchart. The last step is the release gate, so it's highlighted.
export default function Workflow({ steps, variant = "chart" }: Props) {
  if (variant === "inline") {
    return (
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-[11px] text-muted" aria-label="Workflow">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>→</span>}
            <span className={i === steps.length - 1 ? "text-pass" : undefined}>{s}</span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid gap-2 sm:flex sm:items-stretch sm:gap-0" aria-label="Workflow">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s} className="flex flex-col items-stretch sm:flex-1 sm:flex-row sm:items-center">
            <div
              className={`flex h-full flex-1 flex-col justify-center gap-1 rounded-lg border px-3.5 py-3 ${
                last ? "border-pass/40 bg-pass/10" : "border-line bg-panel"
              }`}
            >
              <span className={`font-mono text-[11px] ${last ? "text-pass" : "text-amber"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium leading-snug">{s}</span>
            </div>
            {!last && (
              <span className="flex justify-center py-0.5 text-muted sm:px-1.5 sm:py-0" aria-hidden>
                <ArrowIcon className="h-3.5 w-3.5 rotate-90 sm:rotate-0" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
