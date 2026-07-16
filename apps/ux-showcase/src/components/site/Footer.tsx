export function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 bg-zinc-50/40 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl italic">Mounika Murugonda</p>
          <p className="mt-1 text-sm text-lead">Senior Frontend Engineer · UX Focused</p>
        </div>
        <div className="flex gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-lead">
          <a className="hover:text-ink transition-colors" href="mailto:iammounikamurugonda@gmail.com">
            Email
          </a>
          <a
            className="hover:text-ink transition-colors"
            href="https://www.linkedin.com/in/murugondamounika"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-ink transition-colors"
            href="https://mounikamurugonda.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-6 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
        © {new Date().getFullYear()} Mounika Murugonda — Typeset in Newsreader & Inter
      </p>
    </footer>
  );
}
