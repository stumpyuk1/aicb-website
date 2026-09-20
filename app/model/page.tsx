import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Model",
};

const layers = [
  {
    title: "Crown in Parliament",
    detail:
      "Sovereignty is not pretended away. An enabling Act authorises Letters Patent. Defence, borders, currency, and indictable crime remain national. The Meta-Commons functions enumerated in the NCG Charter stay thin and listed.",
  },
  {
    title: "Charter Borough Trust Corporation",
    detail:
      "A statutory corporation with perpetual succession holds land, rights, and revenues in trust for the Charter objects. It is not a Crown servant. Freehold is retained; long building leases are granted.",
  },
  {
    title: "High Steward",
    detail:
      "Fixed-term chief executive and accounting officer. Appoints a Borough Engineer, Master Architect, Comptroller of Public Safety, and Clerk of the Rolls. Judged on infrastructure milestones, land-value preservation, solvency, and civic satisfaction — then rotated or removed.",
  },
  {
    title: "Court of Assistants",
    detail:
      "Four seats from long-term capital, three from the commercial franchise, three from the residential franchise, plus non-voting neighbouring-authority liaison. Appoints the Steward, sets the levy, ratifies the Pattern Book.",
  },
  {
    title: "Civic Jury and liquid voice",
    detail:
      "A stratified sortition panel — urban and rural, overlapping 6–12 month terms — decides the envelope: Pattern Book amendments of principle, major siting, reserved-stock cuts, amenity closures, levy redesign. A non-voting assessor sits with it to cost alternatives. Residents vote directly or delegate, revocably. Nearby voices weigh more on local siting.",
  },
  {
    title: "Amenity Trust",
    detail:
      "A Guiting-style foundation takes a defined stock of dwellings off the open sales market, prioritises local workers and young households, pegs rents to local wages, and recycles estate or commercial surplus into school, hall, fields, and shops.",
  },
];

const rules = [
  {
    title: "Subsidiarity",
    body: "Decisions are taken at the smallest level capable of effective action. The borough does the work a borough can do. The centre keeps only what must be common.",
  },
  {
    title: "Forced Construction",
    body: "Pure negation is prohibited. An objection to a Pattern Book plot, a levy line, or a siting proposal must carry a specific, feasible alternative that still meets the published envelope.",
  },
  {
    title: "Skin in the game",
    body: "Capital that stays, employers who hire locally, and covenant-holders who live there all have a vote. Power that cannot be hurt by failure is not invited to govern.",
  },
  {
    title: "Temporary office",
    body: "Stewards, jurors, and Assistants hold time-limited mandates. Trust audits on the borough platform: falling below a published threshold triggers review, rotation, or an improvement plan.",
  },
  {
    title: "Via negativa",
    body: "Improvement is first subtraction. Automatic sunsets on borough regulations. One in, two out. Chesterton’s Fence before a working rule is pulled down.",
  },
  {
    title: "Public by default",
    body: "Deliberations, awards of the Arbitral Tribunal, levy calculations, and delivery KPIs are published. Capture hides in unread procedure; this design refuses unread procedure.",
  },
];

const dockets = [
  {
    title: "The Jury decides the envelope",
    body: "Street type, typology list, reserved-stock floor, amenity closures, levy redesign. Sortition, overlapping terms, nearby streets weighted on siting. If the panel is wrong, the street pays — and can tell within a year.",
  },
  {
    title: "Officers apply the envelope",
    body: "Fourteen-day Certificates of Conformance, levy accounts, service counts, works orders. Named officer, published KPI, removable. A Jury that stays a conforming Certificate is a planning committee.",
  },
  {
    title: "The Tribunal enforces both",
    body: "Specific performance, levy abatement, “name the clause.” It cannot invent a new Pattern Book. A late aesthetic preference is not a notice of non-conformance.",
  },
  {
    title: "Counsel to the Jury does not vote",
    body: "A professional assessor costs each Forced Construction package, says when it misses the envelope, and writes the reasons. The Jury still decides. The assessor stops a shrug becoming policy.",
  },
];

const offices = [
  { name: "Steward", role: "Delivers" },
  { name: "Court", role: "Appoints and sets levy" },
  { name: "Jury", role: "Sets the envelope" },
  { name: "Trust", role: "Holds reserved stock" },
];

function Arrow() {
  return (
    <div className="flex justify-center py-2 text-[#E8B59E]/70 text-lg" aria-hidden>
      ↓
    </div>
  );
}

export default function ModelPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8B59E] mb-4">
        Governance synthesis
      </p>
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        How the borough is governed
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-12">
        AICB supplies the legal body and the land. Networked Commons Governance
        supplies the rules that stop that body becoming another captured
        machine.
      </p>

      <figure id="diagram" className="mb-16 scroll-mt-28">
        <div className="border border-[#E8B59E]/25 rounded-2xl p-5 sm:p-7 bg-[#0A2533]">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8B59E] mb-5">
            The stack at a glance
          </p>

          <div className="rounded-xl border border-[#E8B59E]/40 bg-[#E8B59E]/10 px-4 py-4 text-center">
            <p className="font-serif text-xl">Crown in Parliament</p>
            <p className="text-sm text-[#94A3B8] mt-1">
              Enabling Act · Letters Patent · reserved national functions
            </p>
          </div>

          <Arrow />

          <div className="rounded-xl border border-[#E8B59E]/50 bg-[#E8B59E]/15 px-4 py-4 text-center">
            <p className="font-serif text-xl">Charter Borough Trust Corporation</p>
            <p className="text-sm text-[#94A3B8] mt-1">
              Holds the land in trust · not a Crown servant
            </p>
          </div>

          <Arrow />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {offices.map((office) => (
              <div
                key={office.name}
                className="rounded-xl border border-[#E8B59E]/30 px-3 py-4 text-center"
              >
                <p className="font-serif text-lg">{office.name}</p>
                <p className="text-xs text-[#94A3B8] mt-1 leading-snug">
                  {office.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        <figcaption className="mt-4 text-sm text-[#94A3B8] leading-relaxed">
          The Crown authorises. The Corporation holds. Four offices then split
          the work: the Steward delivers, the Court appoints and taxes, the
          Jury sets the envelope, the Trust keeps the reserved stock. The{" "}
          <Link href="#dockets" className="text-[#E8B59E] hover:underline">
            two dockets
          </Link>{" "}
          stop any one of them sitting on another’s clock.
        </figcaption>
      </figure>

      <div className="space-y-6 text-lg leading-relaxed text-[#94A3B8] mb-16">
        <p>
          The original Charter Borough design is strong on delivery: a
          professional executive, a City-of-London-style dual franchise,
          by-right Pattern Book development, land-value capture, and an
          arbitral tribunal instead of a judicial-review cascade.
        </p>
        <p>
          What it still needed — and what NCG supplies — is a civic layer that
          cannot be colonised by the executive or by the largest commercial
          voter. Sortition, liquid delegation, Forced Construction, and public
          trust audits are that layer.
        </p>
        <p>
          What both still needed — and what Guiting Power supplies — is a
          social commons that keeps the place inhabited by the people who work
          it, rather than emptied into a second-home or commuter shell after
          the first uplift.
        </p>
      </div>

      <h2 className="font-serif text-3xl mb-8">The stack</h2>
      <ol className="space-y-8 mb-20">
        {layers.map((layer, i) => (
          <li key={layer.title} className="border-l-2 border-[#E8B59E]/30 pl-6">
            <p className="text-[#E8B59E] text-sm mb-1">Layer {i + 1}</p>
            <h3 className="text-2xl mb-2">{layer.title}</h3>
            <p className="text-[#94A3B8] leading-relaxed">{layer.detail}</p>
          </li>
        ))}
      </ol>

      <h2 id="dockets" className="font-serif text-3xl mb-4 scroll-mt-28">
        The two dockets
      </h2>
      <p className="text-[#94A3B8] leading-relaxed mb-8">
        Sortition and professional office are not rival churches. They are
        two clocks. Fold them together and you either capture the borough
        or let it make unworkable decisions. The test: if this panel is
        wrong, who pays, and can they tell within a year?
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {dockets.map((item) => (
          <article
            key={item.title}
            className="p-6 border border-[#E8B59E]/20 rounded-2xl"
          >
            <h3 className="text-xl mb-3">{item.title}</h3>
            <p className="text-[#94A3B8] leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
      <p className="text-[#94A3B8] leading-relaxed mb-20">
        Locked clauses — Crown reservation, Forced Construction, and the
        judicial-review carve-out — are not Jury questions. They yield to
        statute or revocation. Written into{" "}
        <Link href="/covenant#art-9" className="text-[#E8B59E] hover:underline">
          Covenant Article 9
        </Link>
        .
      </p>

      <h2 className="font-serif text-3xl mb-8">Standing rules</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {rules.map((rule) => (
          <article
            key={rule.title}
            className="p-6 border border-[#E8B59E]/20 rounded-2xl"
          >
            <h3 className="text-xl mb-3">{rule.title}</h3>
            <p className="text-[#94A3B8] leading-relaxed">{rule.body}</p>
          </article>
        ))}
      </div>

      <div className="border border-[#E8B59E]/20 rounded-2xl p-8">
        <h2 className="font-serif text-2xl mb-4">What this is not</h2>
        <ul className="space-y-3 text-[#94A3B8]">
          <li>Not a secession. The Crown’s sovereignty and the criminal law remain intact.</li>
          <li>Not a company town. Residents hold a franchise and a covenant with remedies.</li>
          <li>Not a consultative forum. Juries decide the envelope; officers apply it; both can be removed.</li>
          <li>Not a lawyers’ republic. The Tribunal names clauses. It does not rewrite the Book.</li>
          <li>
            Not a national overnight replacement. It is an opt-in pilot that
            neighbouring authorities are paid to tolerate, then copy if it
            works.
          </li>
        </ul>
      </div>

      <p className="mt-12 text-[#94A3B8]">
        Read the{" "}
        <Link href="/covenant" className="text-[#E8B59E] hover:underline">
          Civic Covenant
        </Link>
        , the{" "}
        <Link href="/pattern-book" className="text-[#E8B59E] hover:underline">
          Pattern Book
        </Link>
        , the{" "}
        <Link href="/act" className="text-[#E8B59E] hover:underline">
          enabling Act
        </Link>
        , and the{" "}
        <a
          href="https://networkedcommonsgovernance.org/wiki/charter"
          className="text-[#E8B59E] hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          NCG Charter
        </a>
        .
      </p>
    </div>
  );
}
