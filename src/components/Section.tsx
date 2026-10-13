type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="label text-amber!">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-muted">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
