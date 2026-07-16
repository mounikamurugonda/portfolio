import type { ReactNode } from "react";
import { Reveal } from "../site/Reveal";

interface ChapterProps {
  number: string;
  marker: string;
  title: string;
  children: ReactNode;
}

export function Chapter({ number, marker, title, children }: ChapterProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 md:grid-cols-12">
        <aside className="hidden md:col-span-2 md:block">
          <div className="sticky top-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink">
              {number}
            </span>
            <div className="mt-4 h-px w-8 bg-ink" />
            <p className="mt-4 whitespace-pre-line text-[11px] uppercase leading-relaxed tracking-wider text-lead">
              {marker}
            </p>
          </div>
        </aside>

        <div className="col-span-1 md:col-span-8 md:col-start-4">
          <Reveal>
            <h3 className="text-balance font-serif text-3xl font-medium leading-tight md:text-5xl">
              {title}
            </h3>
          </Reveal>
          <div className="mt-12 space-y-12 md:mt-16">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="max-w-[52ch] text-pretty text-lg leading-relaxed text-zinc-600">
        {children}
      </p>
    </Reveal>
  );
}
