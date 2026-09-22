import type { Metadata } from "next";
import Link from "next/link";
import { DraftStatus } from "@/components/DraftStatus";

export const metadata: Metadata = {
  title: "The Act",
};

const parts = [
  {
    part: "Parts 1–2",
    title: "Designation",
    points: [
      "Short title: Modern Royal Charters and Strategic Enterprise Act.",
      "Extent: England and Wales.",
      "A Charter Area is created by Letters Patent on the advice of the Secretary of State, confirmed by affirmative resolution in the Commons.",
      "Minimum 500 hectares of brownfield, under-used corridor, or designated growth land.",
      "Initial term of ninety-nine years, renewable on petition to the Crown.",
      "The Trust Corporation is not a Crown servant; it holds assets in trust for the Charter objects.",
    ],
  },
  {
    part: "Part 3",
    title: "Officers and franchise",
    points: [
      "High Steward appointed by the Court on a fixed term of at least five years, on published performance metrics.",
      "Court of Assistants: 4 capital, 3 commercial, 3 residential, plus non-voting neighbouring liaison.",
      "Commercial roll: occupiers with five or more local employees; votes weighted by payroll bands, capped at 15% for any group.",
      "Residential roll: parliamentary electors who hold freehold, leasehold, or a tenancy of at least twelve months.",
    ],
  },
  {
    part: "Part 4",
    title: "Planning carve-out",
    points: [
      "TCPA 1990, Planning and Compulsory Purchase Act 2004, and CIL regulations disapplied inside the Area.",
      "A Prescribed Pattern Book is ratified within six months: typologies, heights, materials, setbacks, open space.",
      "A Certificate of Conformance is deemed approved if the Master Architect does not particularise a divergence within fourteen business days.",
      "Statutory consultee duties to Natural England, the Environment Agency, Historic England, and National Highways are disapplied.",
      "In their place: an Environmental Indemnity Bond of at least £50 million in escrow with HM Treasury, plus strict liability in tort and private nuisance for harm outside the Area.",
    ],
  },
  {
    part: "Part 5",
    title: "Covenant and levy",
    points: [
      "Every conveyance and long tenancy takes effect subject to the Civic Covenant: service standards, aesthetic and behavioural covenants, specific-performance remedies.",
      "Thirty days of failed standards: covenant-holders may seek up to 40% levy abatement or escrow of fees.",
      "Council tax and non-domestic rates are disapplied. A single Consolidated Municipal Levy is set on floor area and use.",
      "Neighbouring authorities receive 12.5% of gross annual levy revenue and 10% of initial capital receipts from freehold alienation — un-hypothecated.",
    ],
  },
  {
    part: "Part 6",
    title: "Tribunal and reservation",
    points: [
      "A Charter Borough Arbitral Tribunal has exclusive jurisdiction over covenants, conformance notices, the levy, and internal property disputes.",
      "Awards are enforceable as High Court judgments. Ordinary judicial review is confined to action wholly outside the Act or Letters Patent.",
      "The Crown retains sovereignty, the Crown Court retains indictable crime, and defence and intelligence powers are untouched.",
      "Systemic insolvency, a national-security breach, or a gross irremediable covenant failure can bring a Crown Commissioner and, in the last case, revocation of the Charter.",
    ],
  },
];

export default function ActPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8B59E] mb-4">
        Legal mechanism · draft 0.1
      </p>
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        An Act to enable the Borough
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-8">
        Draft working title: the Modern Royal Charters and Strategic Enterprise
        Act.
      </p>
      <p className="text-lg leading-relaxed text-[#94A3B8] mb-8">
        The Bill is a single primary statute. It does not rewrite local
        government for the whole country. It authorises His Majesty, on
        ministerial advice and after an affirmative Commons vote, to grant a
        Royal Charter over a named footprint — and it specifies what that
        Charter may lawfully take over, what it must pay its neighbours, and
        how the Crown can take it back.
      </p>

      <DraftStatus
        instrument="Bill"
        version="0.1"
        published="20 September 2026"
        locked={[
          "Designation only by Letters Patent after an affirmative Commons vote",
          "The Trust Corporation is not a Crown servant",
          "Fourteen-day Certificate of Conformance clock",
          "Environmental Indemnity Bond and strict liability for harm outside the Area",
          "Neighbour precept: 12.5% of levy and 10% of first freehold alienation",
          "Tribunal exclusive on internal disputes; ordinary JR only for action wholly outside the Act or Letters Patent",
          "Crown reservation, Crown Court on indictment, and revocation",
        ]}
        log={[
          {
            version: "0.1",
            date: "20 September 2026",
            note: "First public précis of the enabling Bill. Six parts. Figures are published so they can be attacked with a replacement number.",
          },
        ]}
      />

      <div className="space-y-12">
        {parts.map((block) => (
          <section key={block.part}>
            <p className="text-[#E8B59E] text-sm mb-1">{block.part}</p>
            <h2 className="font-serif text-3xl mb-4">{block.title}</h2>
            <ul className="space-y-3 text-[#94A3B8]">
              {block.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-[#E8B59E] mt-1">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <aside className="mt-16 border-l-4 border-[#E8B59E]/40 pl-6 text-[#94A3B8] leading-relaxed">
        This page is a public précis of a working draft, not enacted law and
        not legal advice. The Forced Construction Rule applies here too:
        objections to a clause should arrive with a replacement clause that
        still lets a borough be designated, built, lived in, and — if it fails —
        re-absorbed.
      </aside>

      <p className="mt-12 text-[#94A3B8]">
        The Bill requires a Civic Covenant. The worked draft is here:{" "}
        <Link href="/covenant" className="text-[#E8B59E] hover:underline">
          Charter Borough Civic Covenant
        </Link>
        .
      </p>
      <p className="mt-4">
        <Link href="/model" className="text-[#E8B59E] hover:underline">
          ← Back to the governance model
        </Link>
      </p>
    </div>
  );
}
