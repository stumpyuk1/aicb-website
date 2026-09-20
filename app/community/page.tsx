import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community",
};

const pillars = [
  {
    title: "Restore the fabric, keep the face",
    body: "Cottages at Guiting were modernised from the inside — plumbing, kitchens, heat — while stone, openings, and roofs stayed. A Charter Borough Pattern Book should do the same at street scale: by-right typologies that look as if they belong, not as if they were dropped from a catalogue.",
  },
  {
    title: "Take a core stock off the open market",
    body: "The Trust pulled houses out of speculative sale. Tenancies favoured people of the parish and adjacent parishes, land-workers, local trades, and young households. Rents followed local wages, not visitor demand. Without an equivalent reserved stock, land-value capture simply exports the original community.",
  },
  {
    title: "A circular local economy",
    body: "Guiting Manor Farms — some two thousand acres — funded the houses and the conservation. A Borough Amenity Trust should be endowed from retained freehold, ground rent, and a first slice of uplift, then run productive land, workshops, or utilities that recycle surplus into the civic core.",
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8B59E] mb-4">
        Social commons
      </p>
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        Guiting Power as the living pattern
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-10">
        A borough that only delivers units has already failed. The test is
        whether working-age households can still inhabit it in twenty years.
      </p>

      <div className="space-y-6 text-lg leading-relaxed text-[#94A3B8] mb-16">
        <p>
          Guiting Power, in the Cotswolds, was not saved by a planning policy.
          It was saved by people who bought the broken pieces and then refused
          to treat them as assets first.
        </p>
        <p>
          In the 1930s Moya Davidson began acquiring condemned cottages so they
          would remain available to farm workers. In 1958 Raymond Cochrane
          bought the Guiting Manor Estate. The Guiting Manor Trust followed in
          1960; in 1976–77, as second homes and commuting priced agricultural
          labour out of the hills, Cochrane converted the arrangement into a
          permanent charity: the Guiting Manor Amenity Trust.
        </p>
        <p>
          The Trust still owns roughly half the village’s dwellings — more than
          seventy homes — and around two thousand acres of farmland. Surrounding
          parishes became weekend country. Guiting kept a working-age
          population, a school building, playing fields, a hall, a post office,
          and two pubs.
        </p>
      </div>

      <h2 className="font-serif text-3xl mb-8">Three pillars, translated</h2>
      <div className="space-y-6 mb-16">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="p-8 border border-[#E8B59E]/20 rounded-2xl"
          >
            <h3 className="text-2xl mb-3">{pillar.title}</h3>
            <p className="text-[#94A3B8] leading-relaxed">{pillar.body}</p>
          </article>
        ))}
      </div>

      <h2 className="font-serif text-3xl mb-6">What the Trust also kept</h2>
      <ul className="space-y-3 text-[#94A3B8] mb-16">
        <li className="flex gap-3">
          <span className="text-[#E8B59E] mt-1">•</span>
          <span>
            The village school, bought when the county intended to close and
            sell it, then leased back — now early-years education rather than a
            conversion.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#E8B59E] mt-1">•</span>
          <span>
            Playing fields, play space, the hall, and support for the remaining
            everyday businesses.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#E8B59E] mt-1">•</span>
          <span>
            A cultural life that was not an afterthought: Cochrane helped found
            the Guiting Music Festival in 1970.
          </span>
        </li>
      </ul>

      <div className="border-l-4 border-[#E8B59E]/40 pl-6 text-lg text-[#94A3B8] leading-relaxed mb-12">
        In the Charter Borough the Amenity Trust is not a decorative
        foundation sitting beside the development corporation. It is a
        constitutional organ: it holds the reserved housing, sits as an
        observer on amenity questions before the Civic Jury, and has standing
        at the Arbitral Tribunal when covenanted social purpose is breached.
        Those duties are written into{" "}
        <Link href="/covenant#art-7" className="text-[#E8B59E] hover:underline">
          Article 7 of the Civic Covenant
        </Link>
        .
      </div>

      <p className="text-sm text-[#94A3B8]">
        Further reading on the living original:{" "}
        <a
          href="https://www.guitingmanoramenitytrust.co.uk"
          className="text-[#E8B59E] hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Guiting Manor Amenity Trust
        </a>
        .
      </p>

      <p className="mt-10">
        <Link href="/pilots" className="text-[#E8B59E] hover:underline">
          Where this could be tried at borough scale →
        </Link>
      </p>
    </div>
  );
}
