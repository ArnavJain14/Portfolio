import { profile } from "@/data/profile";
import { LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-4">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-fg">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-fg">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
