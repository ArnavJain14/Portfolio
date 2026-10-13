"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon } from "./Icons";
import { profile } from "@/data/profile";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#workbench", label: "Workbench" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#product", label: "Product" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-ink/90 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div
        className="absolute left-0 top-0 h-0.5 w-full origin-left bg-amber"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-md bg-amber font-mono text-xs font-bold text-ink">
            {profile.initials}
          </span>
          <span className="font-display text-sm font-semibold">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line px-5 pb-4 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 text-fg last:border-0"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
