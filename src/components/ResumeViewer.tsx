"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { FileIcon } from "./Icons";

const fileName = profile.resume.split("/").pop() ?? "resume.pdf";

// Resume button that opens the PDF in an on-page modal instead of a new tab.
export default function ResumeViewer({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children ?? (
          <>
            <FileIcon /> Resume
          </>
        )}
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${profile.name} resume`}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // Clicking the backdrop (the dialog element itself) closes it.
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className="m-auto h-[92dvh] w-[min(960px,94vw)] max-h-none max-w-none overflow-hidden rounded-2xl border border-line bg-panel p-0 text-fg backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="label text-amber!">Resume</p>
                <p className="truncate font-display text-sm font-semibold">{profile.name}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={profile.resume}
                  download={fileName}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-amber px-3 py-2 text-xs font-semibold text-ink sm:text-sm"
                >
                  <DownloadIcon /> Download
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-semibold transition-colors hover:border-fg/40 sm:inline-flex"
                >
                  Open in new tab
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close resume"
                  className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-panel-2 hover:text-fg"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop and tablet: render the PDF inline. */}
            <iframe
              src={`${profile.resume}#view=FitH`}
              title={`${profile.name} resume`}
              className="hidden min-h-0 w-full flex-1 bg-white md:block"
            />

            {/* Phones mostly can't show PDFs inside a page, so offer the file directly. */}
            <div className="flex flex-1 flex-col items-center justify-center gap-5 p-8 text-center md:hidden">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-amber-dim text-amber">
                <FileIcon className="h-7 w-7" />
              </span>
              <p className="max-w-xs text-sm text-muted">
                Open the PDF to read it full screen, or download a copy.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink"
                >
                  Open resume
                </a>
                <a
                  href={profile.resume}
                  download={fileName}
                  className="rounded-lg border border-line px-5 py-3 text-sm font-semibold"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}
