"use client";

import { useState } from "react";
import { ArrowIcon } from "./Icons";

type Props = { email: string; subject: string; body: string };

// Opens a pre-filled compose window in the visitor's webmail, with fallbacks
// for people who use Outlook, a desktop mail app, or just want the address.
export default function EmailActions({ email, subject, body }: Props) {
  const [copied, setCopied] = useState(false);
  const q = (s: string) => encodeURIComponent(s);

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${q(email)}&su=${q(subject)}&body=${q(body)}`;
  const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${q(email)}&subject=${q(subject)}&body=${q(body)}`;
  const mailto = `mailto:${email}?subject=${q(subject)}&body=${q(body)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy my email address:", email);
    }
  };

  const small = "underline decoration-line underline-offset-4 hover:text-fg hover:decoration-amber";

  return (
    <div className="flex flex-col gap-3">
      <a
        href={gmail}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
      >
        Email me <ArrowIcon />
      </a>
      <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-muted">
        <a href={outlook} target="_blank" rel="noopener noreferrer" className={small}>
          Outlook
        </a>
        <a href={mailto} className={small}>
          Mail app
        </a>
        <button type="button" onClick={copy} className={`${small} cursor-pointer`}>
          {copied ? "Copied" : "Copy address"}
        </button>
      </p>
    </div>
  );
}
