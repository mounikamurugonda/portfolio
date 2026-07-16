import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlate } from "@/components/site/ImagePlate";
import { Chapter, Prose } from "@/components/case-study/Chapter";

import screenHistory from "@/assets/case-study/screens/01-history.png";
import screenCleanup from "@/assets/case-study/screens/02-cleanup.png";
import screenColumns from "@/assets/case-study/screens/03-column-mapping.png";
import screenAccounts from "@/assets/case-study/screens/04-account-mapping.png";
import screenValidation from "@/assets/case-study/screens/05-validation.png";

import sketchWizard from "@/assets/case-study/sketch-wizard.jpg";
import sketchCleanup from "@/assets/case-study/sketch-cleanup.png";
import sketchMapping from "@/assets/case-study/sketch-mapping.jpg";
import sketchValidation from "@/assets/case-study/sketch-validation.jpg";

export const Route = createFileRoute("/work/c-cloud-b")({
  head: () => ({
    meta: [
      {
        title:
          "Complyia™ · Data Foundation — Case Study · Mounika Murugonda",
      },
      {
        name: "description",
        content:
          "Leading the six-step Data Foundation wizard for Complyia™ — an intelligent tax-compliance platform. End-to-end: domain discovery, UX planning, frontend architecture, AI-assisted mapping, and cell-by-cell validation, shipped to production.",
      },
      {
        property: "og:title",
        content: "Complyia™ · Data Foundation — Case Study",
      },
      {
        property: "og:description",
        content:
          "Six steps, one trusted ledger. Leading an end-to-end feature at a tax-compliance product startup.",
      },
      { property: "og:image", content: screenHistory },
      { name: "twitter:image", content: screenHistory },
    ],
  }),
  component: CaseStudy,
});

const META = [
  { label: "Product", value: "Complyia™ — Tax Compliance Platform" },
  { label: "Surface", value: "Data Foundation (Import Wizard)" },
  { label: "Role", value: "Lead Frontend Engineer · UX" },
  { label: "Team", value: "3 Engineers · 1 PM · Me (Lead)" },
  { label: "Year", value: "2024 → ongoing" },
  { label: "Stage", value: "Product startup · B2B SaaS" },
];

const STACK = [
  { h: "Core", items: ["React 18", "TypeScript", "Vite", "Nx Monorepo", "Micro-Frontends (Module Federation)"] },
  { h: "UI & Design System", items: ["Tailwind CSS", "ShadCN UI", "Radix UI", "Storybook", "AG Grid Enterprise"] },
  { h: "State & Forms", items: ["Zustand", "TanStack Query", "React Hook Form", "Zod"] },
  { h: "AI, Auth & Quality", items: ["LLM integration (mapping & validation)", "Azure MSAL", "Playwright", "Vitest", "Jest"] },
];

const STEPS = [
  {
    n: "01",
    name: "File Import",
    one: "Pick a file, name the run.",
    detail:
      "Sniff the schema. Classify as Ledger or Entity. Stamp a run ID so every later artefact traces back here.",
  },
  {
    n: "02",
    name: "Data Cleanup",
    one: "Transform rows without writing code.",
    detail:
      "A pipeline of operators (Trim, Cast, Split, Replace, Regex). Each operator is a node the analyst can re-order, disable, or AI-suggest.",
  },
  {
    n: "03",
    name: "Column Mapping",
    one: "Match the client's columns to our 14 standard columns.",
    detail:
      "Drag-and-drop with AI pre-fill. Required columns glow red until filled. Secondary columns hidden behind a toggle to reduce noise.",
  },
  {
    n: "04",
    name: "Account Mapping",
    one: "Reconcile local Chart of Accounts to the system COA.",
    detail:
      "AI proposes a match with a confidence score. Anything under threshold gets flagged 'Needs Review' — never silently mapped.",
  },
  {
    n: "05",
    name: "Validation",
    one: "Validate cell by cell before anything pollutes the warehouse.",
    detail:
      "Completeness, balance, and sanity rules run against every cell, not just every row — each failing cell is addressable and explained. A persistent legend at the bottom shows the shape of the problem at a glance.",
  },
  {
    n: "06",
    name: "Final Review",
    one: "One screen, one decision: publish or send back.",
    detail:
      "Counts of Submitted, Pending, Duplicates, Failed, Successful. Three resolution toggles (Ignore Failed, Ignore Duplicates, Overwrite). Submit is the only blue button on the page.",
  },
];

const RULES = [
  {
    cls: "Completeness",
    example: "Account Code present on every row.",
    severity: "Failed",
  },
  {
    cls: "Balance",
    example: "Sum of Debits equals Sum of Credits per period.",
    severity: "Failed",
  },
  {
    cls: "Referential",
    example: "Every Entity ID resolves to a known legal entity.",
    severity: "Failed",
  },
  {
    cls: "Sanity",
    example: "Period within open fiscal year; FX rate within ±15% of close.",
    severity: "Warning",
  },
  {
    cls: "Duplicate",
    example: "Same (Entity, Period, Account, Amount) tuple seen twice.",
    severity: "Duplicate",
  },
];

const PROCESS = [
  {
    n: "01",
    name: "Domain & requirements",
    body: "The founder and a tax partner own the business logic: how a Trial Balance is structured, why APAC and EU formats differ, what a failed validation costs at filing time. With the PM, I turn those conversations into a spec the team can build against — jobs-to-be-done, personas, rules-engine inputs, non-goals.",
  },
  {
    n: "02",
    name: "UX planning",
    body: "I planned the end-to-end flow before any code: quick sketches and wireframes of the whole wizard, reviewed in short loops with the founder and PM. Cheap to throw away, fast to converge — the six-step structure survived because it was pressure-tested on paper first.",
  },
  {
    n: "03",
    name: "Architecture & design system",
    body: "As frontend lead I set the technical foundation: an Nx monorepo with micro-frontends, a ShadCN/Radix component library documented in Storybook, AG Grid for the data-heavy surfaces, and clear state boundaries — Zustand for UI state, TanStack Query for server state.",
  },
  {
    n: "04",
    name: "Build & ship with the team",
    body: "Three engineers, a PM, and me — leading and coding. I built core modules myself (mapping, validation), reviewed everything, and layered the AI features on top: LLM-assisted column and row mapping and validation suggestions, always behind an explicit human accept.",
  },
];

const OUTCOMES = [
  {
    metric: "Faster",
    label: "What took days of manual spreadsheet work now finishes in hours, in one guided flow.",
  },
  {
    metric: "Smarter",
    label: "AI suggests the column and account mappings — the analyst just reviews and accepts.",
  },
  {
    metric: "Safer",
    label: "Nothing is imported silently. Every change is visible, reviewable, and reversible before submit.",
  },
  {
    metric: "Simpler",
    label: "One wizard replaced six separate tools and spreadsheets.",
  },
];

function CaseStudy() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="fixed inset-0 z-50 paper-grain" />
      <Nav />

      {/* HERO */}
      <header className="relative pt-32 md:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-lead">
              Case Study · 2024
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 text-balance font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">
              Six steps,
              <br />
              one trusted ledger.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600">
              Complyia's Data Foundation turns a messy client trial balance into
              a clean, validated ledger ready for tax filing — in six steps a
              tax manager can run alone, without an engineer in the room. I led
              this feature end to end: UX planning, frontend architecture, the
              build itself, and the AI layer for mapping and validation.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 md:mt-24">
          <ImagePlate
            src={screenHistory}
            alt="Data Foundation history screen showing prior imports with status pills and pie chart summaries"
            caption="The home of Data Foundation. Every import is a row. Every row tells you whether it is safe to file on."
            aspect="aspect-[16/9]"
            fit="contain"
            bg="bg-white"
            frame="Data Foundation / History — Desktop"
          />
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-y-8 border-t border-rule px-6 py-10 md:grid-cols-6 md:gap-8">
          {META.map((m) => (
            <Reveal key={m.label}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
                  {m.label}
                </p>
                <p className="mt-2 text-sm leading-snug">{m.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </header>

      {/* 01 — DOMAIN */}
      <Chapter
        number="01"
        marker={"The\nDomain"}
        title="Meet Complyia™ — your intelligent partner in tax compliance."
      >
        <Prose>
          Complyia™ is a powerful, user-centric tax platform built to simplify
          complexity — from filing returns to managing audits. Whether you're
          an individual, a business owner, or a tax professional, Complyia
          adapts to your needs with precision and ease. It started as a product
          startup in 2024, and Data Foundation is the module everything else
          stands on.
        </Prose>
        <Prose>
          Before any model, dashboard, or filing happens, the platform has to
          take a client's raw Trial Balance — often a 50,000-row Excel exported
          from SAP, Oracle, or someone's laptop — and prove it is complete,
          balanced, and mapped to the system's standard chart of accounts. A
          tax filing is only as good as the ledger underneath it.
        </Prose>
        <Prose>
          The old way was an analyst, a spreadsheet, three browser tabs, and a
          weekend. The new way had to be a wizard a Senior Tax Manager could
          run on Monday morning with coffee in one hand.
        </Prose>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              h: "Who it's for",
              p: "Senior Tax Managers, Transfer-Pricing analysts, and compliance teams at accounting firms. Deeply Excel-fluent, seasoned professionals — and allergic to surprises.",
            },
            {
              h: "What's at stake",
              p: "Filings, audits, board-reported numbers. A silent error here is a public-company restatement later.",
            },
            {
              h: "What 'done' meant",
              p: "Six visible steps. Every AI decision reviewable. Nothing imported until a human says ship.",
            },
          ].map((c) => (
            <Reveal key={c.h}>
              <div className="border border-rule p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
                  {c.h}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {c.p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* 02 — HOW I LED IT */}
      <Chapter
        number="02"
        marker={"How I\nled it"}
        title="One owner from requirement to release: plan the UX, set the architecture, build with the team."
      >
        <Prose>
          Complyia is a startup — no research department, no handoffs between a
          design team and an engineering team. As the frontend lead (a team of
          three engineers and a PM alongside me), I owned the flow end to end:
          domain conversations became UX plans, UX plans became architecture,
          and architecture became shipped modules. The loop is intentionally
          short and intentionally cheap.
        </Prose>

        <div className="grid gap-px bg-rule md:grid-cols-2">
          {PROCESS.map((s) => (
            <Reveal key={s.n}>
              <div className="bg-paper p-8">
                <p className="font-serif text-2xl text-lead">{s.n}</p>
                <h4 className="mt-3 font-serif text-xl">{s.name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <ImagePlate
          src={sketchWizard}
          alt="Hand-drawn flow sketch of the Data Foundation wizard — New Import, Wizard, Row Mapping, Data Cleanup, Output Columns"
          caption="Foundation flow. New Import → Wizard → Row Mapping → Data Cleanup → Output Columns. The end-to-end UX planned before a single line of code."
          aspect="aspect-[16/9]"
          fit="contain"
          bg="bg-white"
          frame="Pre-plan / Data Foundation Flow — Sketch"
        />

        <h4 className="font-serif text-2xl">The tech stack</h4>
        <div className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((g) => (
            <Reveal key={g.h}>
              <div className="h-full bg-paper p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
                  {g.h}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-700">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* 03 — THE 6 STEPS */}
      <Chapter
        number="03"
        marker={"The\nWizard"}
        title="Six steps. Each one is a job a tax manager already knows how to do."
      >
        <Prose>
          Every step has the same shape: a stepper at the top, the action in
          the middle, Previous / Next on the right. The stepper is the
          contract — at any point the user knows where they are, what's
          behind them, and what's still owed.
        </Prose>

        <div className="space-y-4">
          {STEPS.map((s) => (
            <Reveal key={s.n}>
              <div className="grid grid-cols-12 gap-4 border-t border-rule py-6">
                <div className="col-span-2 font-serif text-2xl text-lead md:col-span-1">
                  {s.n}
                </div>
                <div className="col-span-10 md:col-span-3">
                  <h4 className="font-serif text-xl leading-tight">{s.name}</h4>
                  <p className="mt-2 text-[13px] italic text-lead">{s.one}</p>
                </div>
                <p className="col-span-12 text-sm leading-relaxed text-zinc-700 md:col-span-8">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* 04 — CLEANUP */}
      <Chapter
        number="04"
        marker={"Step 02\nData Cleanup"}
        title="A no-code pipeline that still feels like Excel."
      >
        <Prose>
          Tax analysts already think in operations — trim, split, cast, regex.
          We didn't invent a new mental model; we just gave their existing one
          a UI. Each transform is a card. Cards stack into a named pipeline.
          The pipeline can be re-run, paused, re-ordered, or asked of the AI.
        </Prose>
        <div className="grid gap-6">
          <ImagePlate
            src={sketchCleanup}
            alt="Whiteboard sketch of the Data Cleanup pipeline pre-plan with stepper, operators, and pipeline flow"
            caption="The pre-plan. Pipeline operators sketched on a whiteboard before any UI was built."
            aspect="aspect-[9/16]"
            fit="contain"
            bg="bg-white"
            frame="Pre-plan / Data Cleanup Pipeline — Sketch"
          />
          <ImagePlate
            src={screenCleanup}
            alt="Cleanup step showing a Transform pipeline panel and a live data preview table"
            caption="The build. Left: the pipeline (one operator visible — 'Trim Both on Entity ID'). Right: the live preview of the result. The success toast confirms every save."
            aspect="aspect-[16/9]"
            fit="contain"
            bg="bg-white"
            frame="Step 02 / Data Cleanup — Desktop"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              h: "Why a pipeline, not a button",
              p: "One-shot cleanup hides what changed. A pipeline is auditable: every cell mutation has an operator behind it, and the operator can be inspected, disabled, or removed without losing the rest.",
            },
            {
              h: "Where the AI sits",
              p: "Add Transform has an AI affordance that suggests the next operator based on the column you're looking at. It never runs without an explicit 'Add'.",
            },
          ].map((c) => (
            <Reveal key={c.h}>
              <div className="border border-rule p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
                  {c.h}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {c.p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* 05 — COLUMN MAPPING */}
      <Chapter
        number="05"
        marker={"Step 03\nColumn Mapping"}
        title="14 required columns. The client never has them named correctly."
      >
        <Prose>
          Every client exports their ledger with their own column names —
          "Acc_Cd", "GL Account", "Konto". Complyia needs them mapped to a
          single internal schema before anything else can happen. The mapping
          itself is boring; the cost of getting it wrong is not.
        </Prose>
        <div className="grid gap-6 md:grid-cols-2">
          <ImagePlate
            src={sketchMapping}
            alt="Hand-drawn sketch of the column mapping screen with input columns on the left and standard columns on the right"
            caption="The sketch. Input chips on the left, standard slots on the right. Asterisks for required fields. -web references"
            aspect="aspect-[16/10]"
            fit="contain"
            bg="bg-[#fbf6ec]"
          />
          <ImagePlate
            src={screenColumns}
            alt="Final column mapping screen with drag and drop and an AI mapping action"
            caption="The build. Required columns glow red until filled. 'Run AI Mapping' is a verb, not a magic spell."
            aspect="aspect-[16/10]"
            fit="contain"
            bg="bg-white"
            frame="Step 03 / Column Mapping — Desktop"
          />
        </div>
        <Prose>
          A small thing that mattered: the red glow on the Ledger Name slot is
          the same red used by Validation later. The user learns the language
          of the system once, then re-uses it.
        </Prose>
      </Chapter>

      {/* 06 — ACCOUNT MAPPING */}
      <Chapter
        number="06"
        marker={"Step 04\nAccount Mapping"}
        title="AI does the first 90%. The human owns the last 10%."
      >
        <Prose>
          The Chart of Accounts mapping is where AI earns its keep. Thousands
          of local account codes need to land on a handful of system accounts.
          The model proposes; the analyst disposes.
        </Prose>
        <ImagePlate
          src={screenAccounts}
          alt="Account Mapping screen showing local accounts mapped to system accounts with confidence scores"
          caption="Every row carries a confidence score and an explicit 'Needs Review' flag. Low confidence is loud, not buried."
          aspect="aspect-[16/9]"
          fit="contain"
          bg="bg-white"
          frame="Step 04 / Account Mapping — Desktop"
        />
        <div className="grid gap-px bg-rule md:grid-cols-3">
          {[
            {
              h: "Confidence is a number, not a vibe",
              p: "We show the percentage. Under 60% always trips 'Needs Review'. The threshold is tunable per tenant.",
            },
            {
              h: "Source is always attributed",
              p: "AI, Rule, or Manual. If something looks wrong six months later, an auditor can see exactly who proposed it.",
            },
            {
              h: "Bulk-accept is gated",
              p: "Save Mapping is red, deliberate, and never the default. Accidental sign-off should be hard.",
            },
          ].map((c) => (
            <Reveal key={c.h}>
              <div className="bg-paper p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
                  {c.h}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {c.p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* 07 — VALIDATION */}
      <Chapter
        number="07"
        marker={"Step 05\nValidation"}
        title="The screen that decides whether the filing is safe."
      >
        <Prose>
          Validation is the heart of the wizard — and it works cell by cell,
          not just row by row. Every cell is run through the rules engine, so a
          failure points at the exact value that broke, with the reason
          attached. The output is not a popup — it is the table itself,
          coloured in place, with a permanent legend at the bottom so the
          analyst always knows how big the problem is.
        </Prose>
        <ImagePlate
          src={sketchValidation}
          alt="Pencil sketch of the validation screen showing Status pills and a bottom legend"
          caption="Sketch — the legend lives at the bottom of the viewport, always visible while scrolling."
          aspect="aspect-[16/9]"
          fit="contain"
          bg="bg-[#fbf6ec]"
        />
        <ImagePlate
          src={screenValidation}
          alt="Validation step showing a table of failed rows with a totals legend along the bottom"
          caption="Build. 36 rows failed, 0 successful, 0 duplicates. The Submit button stays disabled until the user picks a resolution path."
          aspect="aspect-[16/9]"
          fit="contain"
          bg="bg-white"
          frame="Step 05 / Validation — Desktop"
        />

        <h4 className="font-serif text-2xl">The rules engine, by class</h4>
        <div className="overflow-x-auto border border-rule">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-paper">
              <tr className="border-b border-rule text-[10px] uppercase tracking-[0.2em] text-lead">
                <th className="px-4 py-3 font-medium">Class</th>
                <th className="px-4 py-3 font-medium">Example rule</th>
                <th className="px-4 py-3 font-medium">Surfaced as</th>
              </tr>
            </thead>
            <tbody>
              {RULES.map((r) => (
                <tr key={r.cls} className="border-b border-rule last:border-0">
                  <td className="px-4 py-4 font-medium">{r.cls}</td>
                  <td className="px-4 py-4 text-zinc-700">{r.example}</td>
                  <td className="px-4 py-4 text-zinc-700">{r.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              h: "Anomalies as a sibling tab",
              p: "Failed rows are deterministic. Anomalies are statistical (outliers, unusual postings). Same screen, different lens.",
            },
            {
              h: "Three resolution paths",
              p: "Ignore Failed, Ignore Duplicates, Overwrite Duplicates. The user picks the path; the system never decides for them.",
            },
            {
              h: "Submit is one click",
              p: "After resolution, Submit takes the validated ledger downstream. The whole wizard collapses into a single irreversible action.",
            },
          ].map((c) => (
            <Reveal key={c.h}>
              <div className="border border-rule p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
                  {c.h}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {c.p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* 08 — OUTCOMES */}
      <section className="relative border-t border-rule py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
              08 · Outcomes
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-6 max-w-4xl text-balance font-serif text-4xl font-medium leading-tight md:text-6xl">
              What changed after the wizard shipped.
            </h3>
          </Reveal>

          <div className="mt-16 grid gap-px bg-rule md:grid-cols-4">
            {OUTCOMES.map((o) => (
              <Reveal key={o.label}>
                <div className="bg-paper p-8">
                  <p className="font-serif text-5xl font-medium md:text-6xl">
                    {o.metric}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                    {o.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
                  What I'd do differently
                </p>
                <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-zinc-700">
                  Ship the Anomalies tab in v1, not v2. Tax managers asked for
                  it within the first week. Treating "weird but legal" as a
                  first-class state would have saved a release cycle.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
                  What survived contact with users
                </p>
                <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-zinc-700">
                  The six-step stepper, the bottom legend on Validation, and
                  the rule that AI never writes without a human accept. Those
                  three are now load-bearing across the rest of Complyia.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="border-t border-rule py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-lead">
              Next
            </p>
            <h4 className="mt-3 font-serif text-3xl md:text-4xl">
              Back to selected work
            </h4>
          </div>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 self-start border-b border-ink pb-1 text-sm md:self-end"
          >
            <motion.span whileHover={{ x: -4 }} transition={{ duration: 0.3 }}>
              ←
            </motion.span>
            Index
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
