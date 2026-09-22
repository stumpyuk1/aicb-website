import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilots",
};

const pilots = [
  {
    name: "Thames Estuary / Ebbsfleet Basin",
    profile: "Post-industrial brownfield with maritime and rail connections.",
    cluster:
      "Off-site modular construction, freeport logistics, clean energy.",
    why: "Relieves London housing pressure without opening a green-belt political war. A Pattern Book of dense, walkable terraces can be proven next to existing infrastructure.",
  },
  {
    name: "East–West Rail mid-corridor",
    profile: "Greenfield and brownfield junctions on the Oxford–Cambridge arc.",
    cluster: "Life sciences, deep tech, frontier bio-engineering.",
    why: "Capital is already circling the arc and dying in county-boundary planning friction. A single Charter Area can straddle that friction and still remit a precept to each neighbour.",
    featured: true,
  },
  {
    name: "Teesworks / Humber Marine Haven",
    profile: "Heavy industrial coast and deep water.",
    cluster:
      "Small modular reactors, green hydrogen, advanced metallurgical plant.",
    why: "Pairs an existing freeport with a residential and civic borough so manufacturing is not a shift-pattern enclave with no town attached.",
  },
];

const phases = [
  {
    phase: "Phase 1 · months 1–12",
    title: "Statutory enabling",
    items: [
      "Draft and socialise the Modern Royal Charters and Strategic Enterprise Bill.",
      "Hold the first footprint at the 1,200-hectare Tempsford working spec, or replace it with a Forced Construction package that still meets the 500-hectare floor.",
      "Open conversations with pension capital, sovereign partners, and anchor employers who will accept a Civic Covenant.",
    ],
  },
  {
    phase: "Phase 2 · months 13–24",
    title: "Charter and groundworks",
    items: [
      "Letters Patent constitute the Trust Corporation.",
      "Land assembly and transfer of planning functions.",
      "Ratify the Pattern Book, Civic Covenant, and Amenity Trust endowment rules.",
    ],
  },
  {
    phase: "Phase 3 · months 25–60",
    title: "Core delivery",
    items: [
      "First infrastructure: energy, water, waste, digital.",
      "First streets under T1–T4 and the anchor commercial frontage at the interchange.",
      "Court of Assistants, Civic Jury, and Arbitral Tribunal go live.",
    ],
  },
  {
    phase: "Phase 4 · month 61 onward",
    title: "Endowment and copies",
    items: [
      "Corporation moves onto self-funding ground rent and levy.",
      "Trust audits published. Failures trigger rotation, not a new layer of procedure.",
      "Second and third boroughs only after the first has been stress-tested — antifragility before scale.",
    ],
  },
];

export default function PilotsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8B59E] mb-4">
        Deployment
      </p>
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        Pilot candidates and roadmap
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-8 max-w-3xl">
        The first borough should be a place where the planning system is
        already the binding constraint — not a picturesque parish asked to
        host an experiment it did not invite.
      </p>

      <aside className="p-8 border border-[#E8B59E]/40 rounded-2xl mb-14">
        <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8B59E] mb-3">
          Worked first specification
        </p>
        <h2 className="font-serif text-3xl mb-4">Tempsford interchange</h2>
        <p className="text-[#94A3B8] leading-relaxed mb-6">
          1,200 hectares at the proposed East West Rail / East Coast Main Line
          crossing. Neighbours named. Precept formula written. Year-one streets
          limited to T1–T4. Not designated — specified so it can be attacked.
        </p>
        <Link
          href="/footprint"
          className="text-[#E8B59E] hover:underline"
        >
          Read the first-footprint page →
        </Link>
      </aside>

      <p className="text-lg text-[#94A3B8] leading-relaxed mb-16 max-w-3xl">
        These three footprints remain working candidates from the founding brief.
        None is designated. Designation requires the Act, an affirmative
        Commons vote, and a Charter that a Civic Jury in the receiving region
        can live with.
      </p>

      <div className="space-y-6 mb-20">
        {pilots.map((pilot) => (
          <article
            key={pilot.name}
            className="p-8 border border-[#E8B59E]/20 rounded-2xl"
          >
            <h2 className="font-serif text-2xl mb-3">{pilot.name}</h2>
            <dl className="grid md:grid-cols-3 gap-6 text-sm text-[#94A3B8]">
              <div>
                <dt className="text-[#E8B59E] uppercase tracking-wider text-[11px] mb-2">
                  Site
                </dt>
                <dd>{pilot.profile}</dd>
              </div>
              <div>
                <dt className="text-[#E8B59E] uppercase tracking-wider text-[11px] mb-2">
                  Cluster
                </dt>
                <dd>{pilot.cluster}</dd>
              </div>
              <div>
                <dt className="text-[#E8B59E] uppercase tracking-wider text-[11px] mb-2">
                  Why here
                </dt>
                <dd>{pilot.why}</dd>
              </div>
            </dl>
            {"featured" in pilot && pilot.featured ? (
              <p className="mt-6 text-sm">
                <Link href="/footprint" className="text-[#E8B59E] hover:underline">
                  Worked specification →
                </Link>
              </p>
            ) : null}
          </article>
        ))}
      </div>

      <h2 className="font-serif text-3xl mb-8">Phased implementation</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {phases.map((block) => (
          <article
            key={block.phase}
            className="p-7 border border-[#E8B59E]/20 rounded-2xl"
          >
            <p className="text-[#E8B59E] text-sm mb-2">{block.phase}</p>
            <h3 className="text-xl mb-4">{block.title}</h3>
            <ul className="space-y-2 text-[#94A3B8]">
              {block.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p>
        <Link href="/get-involved" className="text-[#E8B59E] hover:underline">
          If you hold land, capital, or a regional brief — file a package →
        </Link>
      </p>
    </div>
  );
}
