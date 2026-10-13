import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-32 sm:px-6">
      <p className="font-mono text-sm text-fail">404 Not Found</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold">This page doesn&apos;t exist.</h1>
      <p className="mt-4 text-muted">The link may be out of date.</p>
      <Link href="/" className="mt-8 inline-block text-amber underline underline-offset-4">
        Go to the home page
      </Link>
    </div>
  );
}
