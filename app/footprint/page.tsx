import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First footprint",
  description:
    "Worked specification for a first Charter Borough at the Tempsford East West Rail / East Coast Main Line interchange. Not a designation.",
};

const facts = [
  { label: "Working name", value: "Tempsford Charter Borough" },
  { label: "Status", value: "Working specification · draft 0.1 · not designated" },
  { label: "Statutory floor", value: "500 hectares of brownfield, under-used corridor, or designated growth land" },
  { label: "Working area", value: "1,200 hectares (about 2,965 acres) around the proposed interchange" },
  { label: "Developable (indicative)", value: "920 hectares, with 280 hectares held as strategic open space and flood management" },
  { label: "Existing parish", value: "Tempsford village remains outside the Charter objects as a swallowed settlement" },
];

const neighbours = [
  {
    name: "Central Bedfordshire Council",
    role: "Host authority. The parish of Tempsford sits here. Receives the largest precept share on shared-boundary length.",
  },
  {
    name: "Bedford Borough Council",
    role: "Western neighbour. A1 / Bedford approaches and existing urban services. Precept, not annexation.",
  },
  {
    name: "Huntingdonshire District Council",
    role: "North-eastern neighbour across the county line. The point of the Charter is that one envelope can sit on that line.",
  },
  {
    name: "Cambridgeshire and Peterborough Combined Authority",
    role: "Regional counterpart for skills and some transport. Not a precept recipient unless it is the billing authority.",
  },
];

const blocks = [
  {
    title: "What the Town and Country Planning Act is already doing here",
    body: [
      "Tempsford is the intersection the growth corridor keeps naming and the planning system keeps deferring. A new East West Rail station is proposed where the line would meet the East Coast Main Line. Government new-town work has treated the area as a 40,000-home opportunity. Compact-town studies have drawn a 1,200-hectare heart with about 25,000 dwellings on 500 net residential hectares at roughly 50 dwellings per hectare.",
      "None of that is a Charter. It is the existing machine: a local plan that put the strategic decision off to a later review; an infrastructure body still consulting on alignment; statutory consultees on flood, habitat, heritage, and trunk roads; and judicial review waiting behind each of those clocks. Capital can option land. It cannot buy a yes.",
      "A Charter Borough does not invent the site. It changes the procedure on a defined footprint so that a Pattern Book street can start on a fourteen-day clock, while harm that crosses the fence stays strict liability and the neighbour is paid.",
    ],
  },
];

const yearOne = [
  {
    type: "T1 terrace",
    where: "Residential streets within a ten-minute walk of the interchange.",
    what: "4.5–6.0 m frontage, 2–3 storeys plus attic, front door on the street, garden behind. First reserved-stock houses live here, not in a separate estate.",
  },
  {
    type: "T2 perimeter block",
    where: "The station square and the primary street that meets it.",
    what: "3–5 storeys, fifth set back. Ground floor shops, surgeries, workshops. Mixed open-market and Amenity Trust dwellings above. No podium tower.",
  },
  {
    type: "T3 workshop-house",
    where: "Mews and the first making street, off the primary frontage.",
    what: "Ground floor 3.2 m clear for work; dwelling above. Servicing from the lane, not the square.",
  },
  {
    type: "T4 civic room",
    where: "One hall and the first school site, locked by Covenant Article 7.4.",
    what: "Public or charitable use. Disposal needs a Jury resolution and a Trust resolution, each with a recorded alternative.",
  },
];

const national = [
  "Crown sovereignty and Letters Patent revocation",
  "Indictable crime, the constabulary, and the Crown Court",
  "Defence, borders, currency, and intelligence",
  "East West Rail and the East Coast Main Line as national railway works",
  "National habitat, water, and waste duties — the consultee clock is disapplied, the harm rule is not",
];

export default function FootprintPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8B59E] mb-4">
        First footprint · draft 0.1
      </p>
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        Tempsford interchange
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-6 max-w-3xl">
        A worked Charter Area at the proposed East West Rail / East Coast Main
        Line crossing — large enough to meet the Act, small enough to be a town
        rather than a slogan.
      </p>
      <p className="text-lg text-[#94A3B8] leading-relaxed mb-12 max-w-3xl">
        This is not a designation, a land bid, or a claim on the existing
        village. Figures are here so they can be attacked with a replacement
        number. A better first footprint must still clear the 500-hectare floor,
        name its neighbours, and carry a Forced Construction package.
      </p>

      <dl className="grid sm:grid-cols-2 gap-px bg-[#E8B59E]/15 border border-[#E8B59E]/20 rounded-2xl overflow-hidden mb-16">
        {facts.map((row) => (
          <div key={row.label} className="bg-[#0A2533] p-6">
            <dt className="text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2">
              {row.label}
            </dt>
            <dd className="text-[#F5F0E8] leading-relaxed">{row.value}</dd>
          </div>
        ))}
      </dl>

      {blocks.map((block) => (
        <section key={block.title} className="mb-16">
          <h2 className="font-serif text-3xl tracking-tight mb-6">{block.title}</h2>
          <div className="space-y-5 text-[#94A3B8] leading-relaxed">
            {block.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="mb-16">
        <h2 className="font-serif text-3xl tracking-tight mb-4">Neighbours</h2>
        <p className="text-[#94A3B8] leading-relaxed mb-8">
          The Charter remits 12.5 percent of gross levy revenue every year, plus
          10 percent of first freehold-alienation receipts, un-hypothecated. The
          working split is by length of shared boundary, published with the levy.
          A neighbour authority has standing on Article 12 and on environmental
          discharge that crosses the line. It does not sit as a second sovereign.
        </p>
        <div className="space-y-4">
          {neighbours.map((n) => (
            <article
              key={n.name}
              className="p-6 border border-[#E8B59E]/20 rounded-2xl"
            >
              <h3 className="text-lg mb-2">{n.name}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{n.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl tracking-tight mb-4">
          Precept maths — a worked example, not a forecast
        </h2>
        <p className="text-[#94A3B8] leading-relaxed mb-6">
          Replace every number. The point is the formula, not the year-one guess.
        </p>
        <div className="border border-[#E8B59E]/20 rounded-2xl overflow-hidden text-sm">
          <table className="w-full">
            <tbody className="text-[#94A3B8]">
              <tr className="border-b border-[#E8B59E]/15">
                <td className="p-4 text-[#E8B59E]">Gross Consolidated Municipal Levy, illustrative year</td>
                <td className="p-4 text-right text-[#F5F0E8]">£20,000,000</td>
              </tr>
              <tr className="border-b border-[#E8B59E]/15">
                <td className="p-4 text-[#E8B59E]">Neighbour precept at 12.5%</td>
                <td className="p-4 text-right text-[#F5F0E8]">£2,500,000</td>
              </tr>
              <tr className="border-b border-[#E8B59E]/15">
                <td className="p-4 text-[#E8B59E]">Worked split: Central Bedfordshire 55%</td>
                <td className="p-4 text-right text-[#F5F0E8]">£1,375,000</td>
              </tr>
              <tr className="border-b border-[#E8B59E]/15">
                <td className="p-4 text-[#E8B59E]">Bedford Borough 25%</td>
                <td className="p-4 text-right text-[#F5F0E8]">£625,000</td>
              </tr>
              <tr className="border-b border-[#E8B59E]/15">
                <td className="p-4 text-[#E8B59E]">Huntingdonshire 20%</td>
                <td className="p-4 text-right text-[#F5F0E8]">£500,000</td>
              </tr>
              <tr>
                <td className="p-4 text-[#E8B59E]">First alienation slice at 10% of £40m receipts</td>
                <td className="p-4 text-right text-[#F5F0E8]">£4,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[#94A3B8] leading-relaxed">
          Council tax and non-domestic rates do not apply inside the Area. The
          levy is set on floor area and use. If three service standards fail for a
          quarter, the High Steward faces a trust audit. Thirty days of a failed
          guaranteed standard can abate the levy by up to 40 percent for those
          affected.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl tracking-tight mb-4">
          What the Pattern Book would permit in year one
        </h2>
        <p className="text-[#94A3B8] leading-relaxed mb-8">
          Not a masterplan of 40,000 dwellings. A first phase that can be built
          under the fourteen-day Certificate of Conformance: streets that already
          exist in the Book, a reserved-stock floor of 20 percent, and no new
          typology without a Jury.
        </p>
        <div className="space-y-4">
          {yearOne.map((row) => (
            <article
              key={row.type}
              className="p-6 border border-[#E8B59E]/20 rounded-2xl"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2">
                {row.type}
              </p>
              <h3 className="text-lg mb-2">{row.where}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{row.what}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[#94A3B8] leading-relaxed">
          Refused without a Jury: podium towers, blank primary frontages longer
          than eight metres, curtain-walled street elevations, visitor-let layouts
          designed as hotels. Cars sit on-plot to the rear or in a single T2
          undercroft that is not the elevation. A conforming Certificate is not a
          Civic Jury question.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl tracking-tight mb-4">
          What stays national
        </h2>
        <ul className="space-y-3 text-[#94A3B8]">
          {national.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#E8B59E]">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#94A3B8] leading-relaxed">
          The Environmental Indemnity Bond (working floor: £50 million with the
          Treasury) and strict liability in tort back harm that leaves the Area.
          Disapplying the consultee duty is not a licence to concrete a river.
        </p>
      </section>

      <section className="mb-16 p-8 border border-[#E8B59E]/30 rounded-2xl">
        <h2 className="font-serif text-2xl mb-4">How to attack this page</h2>
        <p className="text-[#94A3B8] leading-relaxed mb-6">
          Pure negation is incompetent. If Tempsford is the wrong first
          footprint, name another that still meets the statutory floor, pays its
          neighbours, keeps reserved stock, and can take a Pattern Book street in
          year one. If 1,200 hectares is too large or too small, send the
          replacement map and the precept split that still funds the host.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/get-involved"
            className="px-8 py-3 bg-[#E8B59E] hover:bg-white text-[#0A2533] font-medium rounded-xl text-center"
          >
            File a Forced Construction package
          </Link>
          <Link
            href="/pilots"
            className="px-8 py-3 border border-[#E8B59E] text-[#E8B59E] hover:bg-[#E8B59E]/10 rounded-xl text-center"
          >
            Other candidates
          </Link>
        </div>
      </section>

      <p className="text-sm text-[#94A3B8] leading-relaxed">
        Read with the{" "}
        <Link href="/act" className="text-[#E8B59E] hover:underline">
          enabling Act
        </Link>
        , the{" "}
        <Link href="/covenant" className="text-[#E8B59E] hover:underline">
          Civic Covenant
        </Link>
        , the{" "}
        <Link href="/pattern-book" className="text-[#E8B59E] hover:underline">
          Pattern Book
        </Link>
        , and{" "}
        <Link href="/not-this" className="text-[#E8B59E] hover:underline">
          what this is not
        </Link>
        . Published numbers on homes and land in the corridor come from government
        new-town work and public compact-town studies; they are cited as the
        existing debate, not as AICB commitments.
      </p>
    </div>
  );
}
