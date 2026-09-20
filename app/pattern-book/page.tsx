import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pattern Book",
  description:
    "Worked brief for the Charter Borough Prescribed Pattern Book: street types, typologies, materials, and the fourteen-day conformance rule.",
};

const streets = [
  {
    name: "Primary street",
    width: "18–22 m building-to-building",
    height: "4 storeys + set-back mansard",
    note: "Active ground floor. Shops, workshops, surgeries, and halls. Continuous frontage. Servicing from the rear or a side lane.",
  },
  {
    name: "Residential street",
    width: "12–16 m building-to-building",
    height: "2–3 storeys + habitable attic",
    note: "Terraces or short perimeter sides. Front doors on the street. Small front area or rail, garden behind.",
  },
  {
    name: "Mews or lane",
    width: "8–10 m",
    height: "2 storeys",
    note: "Workshops, small dwellings, and rear access. Shared surface. No through heavy goods.",
  },
  {
    name: "Green or close",
    width: "Building line set to the adopted plan",
    height: "As the facing street type",
    note: "Play, trees, and the hall. Cars stay off the green. A closed green for more than fourteen days is a Covenant failure.",
  },
];

const types = [
  {
    name: "T1 · Terrace house",
    plot: "Frontage 4.5–6.0 m. Depth 9–12 m of private garden behind.",
    envelope:
      "Two or three storeys plus attic within the eaves line of the street. Party walls. Ridge parallel to the street unless the adopted plan shows a gable.",
    use: "One household, or a house plus a single workroom on the ground floor with its own street door.",
  },
  {
    name: "T2 · Perimeter block",
    plot: "A full street block with a shared courtyard. No tower on a podium.",
    envelope:
      "Three to five storeys. The fifth storey is set back not less than 2 m from the street wall. Courtyard receives daylight on the December solstice at courtyard floor.",
    use: "Stacked flats and maisonettes. Ground floor on a primary street is commercial or civic. Amenity Trust dwellings are mixed through the block, not grouped as a separate wing.",
  },
  {
    name: "T3 · Workshop-house",
    plot: "Frontage 5.5–8.0 m on a primary street or mews.",
    envelope:
      "Two or three storeys. Ground floor 3.2 m clear to soffit. Wide door or folding front for making, repair, or sale.",
    use: "Work on the ground floor; dwelling above for the same household or a Trust tenancy. Not a dark warehouse with a flat bolted on.",
  },
  {
    name: "T4 · Civic room",
    plot: "Hall, first school, chapel, or surgery on a green or primary street.",
    envelope:
      "Height may exceed the facing street by one storey if the extra height is a single public room, not extra flats.",
    use: "Public or charitable. Disposal locked by Covenant Article 7.4.",
  },
];

const materials = [
  "Wall: local brick, local stone, or lime-rendered masonry as the Master Architect’s first material note for that Charter Area. A later area may name a different vernacular. It may not name a generic panel system as the default wall.",
  "Timber: structural or cladding mass-timber is permitted where it meets the fire and moisture table. It must still read as a building with openings, not as a crate.",
  "Roof: pitched tile, slate, or metal standing-seam on a pitch of not less than 35 degrees, or a hidden pitch behind a parapet on T2 only.",
  "Openings: taller than they are wide on street elevations, with a revealed depth of not less than 100 mm. Floor-to-ceiling glass as the majority of a street wall is non-conforming.",
  "Colour: a published palette of not more than eight external colours plus unpainted masonry. Fluorescent coatings and large applied graphics on a street wall are non-conforming.",
];

const insides = [
  "Habitable rooms: 2.5 m clear floor-to-ceiling. 2.3 m is allowed only in a storey within the roof.",
  "Primary-street ground floor: 3.2 m clear.",
  "Party walls and floors between dwellings: the published sound table, tested on the first plot of each type.",
  "Every dwelling of two bedrooms or more has private outdoor space — a garden, a gallery, or a balcony of not less than 5 m² that is not a corridor.",
  "Open space: not less than 15 percent of each residential block, counting courtyard, play, and adopted green, not counting car park.",
];

const refused = [
  "A slab podium with a tower, or any building whose street wall is less than 60 percent of its greatest height.",
  "A surface car park or a blank service deck on a primary-street frontage.",
  "A blank ground-floor elevation longer than 8 m on a primary street, except a substation or a specified workshop door.",
  "A dwelling whose only outdoor space is a corridor or a lightwell.",
  "Curtain walling as the majority of any street elevation.",
  "A typology that is not T1–T4 and has not been added to the Book by the Article 13 path.",
  "A visitor-let layout that would breach Covenant Article 8.4 by design (lock-boxes, hotel corridors, no private outdoor space).",
];

export default function PatternBookPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8B59E] mb-4">
        Working instrument · draft 0.1
      </p>
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        Prescribed Pattern Book
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-8">
        The drawings against which a building is allowed to start in fourteen
        business days — or is sent back with particulars, not a vibe.
      </p>
      <p className="text-lg leading-relaxed text-[#94A3B8] mb-6">
        The enabling Act requires a Pattern Book within six months of
        designation. This brief is the first public skeleton: street types,
        four typologies, materials, interiors, and a refusal list. A
        site-specific book will name the brick, the stone, and the first
        blocks. It should not invent a fifth way of avoiding a street.
      </p>
      <p className="text-sm leading-relaxed text-[#94A3B8] mb-14 border border-[#E8B59E]/20 rounded-2xl p-5">
        Worked draft. Not a planning permission and not an adopted code.
        Dimensions are here so they can be replaced with better ones. A
        proposal that only says “more variety” or “less height” without a
        replacement envelope is not an amendment. It is an objection without
        Forced Construction.
      </p>

      <section className="mb-16">
        <h2 className="font-serif text-3xl mb-4">The fourteen-day rule</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            A person proposing development that conforms in all material
            respects with this Book lodges a Certificate of Conformance with
            the Master Architect: drawings of the street wall, the plan, the
            materials, and a statement that the plot sits on an adopted
            street type.
          </p>
          <p>
            If the Master Architect does not issue a written notice of
            non-conformance specifying the particulars of divergence within
            fourteen business days, the Certificate is deemed approved and
            works may start. Silence is consent. A late aesthetic preference
            is not a notice.
          </p>
          <p>
            A notice must name the clause. “Out of keeping” is not a clause.
            Challenges go to the{" "}
            <Link href="/covenant#art-11" className="text-[#E8B59E] hover:underline">
              Arbitral Tribunal
            </Link>
            , not to a new committee.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl mb-6">Street types</h2>
        <p className="text-[#94A3B8] leading-relaxed mb-8">
          Every plot is on one adopted street type. Height follows the
          street, not the ambition of the plot. Mixed types on one frontage
          are a new street, and a new street is a Civic Jury question.
        </p>
        <div className="space-y-4">
          {streets.map((row) => (
            <article
              key={row.name}
              className="border border-[#E8B59E]/20 rounded-2xl p-6"
            >
              <h3 className="text-xl mb-3">{row.name}</h3>
              <p className="text-[#E8B59E] text-sm mb-2">
                {row.width} · {row.height}
              </p>
              <p className="text-[#94A3B8] leading-relaxed">{row.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl mb-6">Typologies</h2>
        <p className="text-[#94A3B8] leading-relaxed mb-8">
          Four types cover a walkable borough that can still make things.
          Guiting kept cottages by modernising the inside and leaving the
          street face. The same rule, at block scale: change the services,
          do not invent a new kind of object.
        </p>
        <div className="space-y-4">
          {types.map((row) => (
            <article
              key={row.name}
              className="border border-[#E8B59E]/20 rounded-2xl p-6"
            >
              <h3 className="font-serif text-2xl mb-3">{row.name}</h3>
              <p className="text-[#94A3B8] leading-relaxed mb-2">
                <span className="text-[#E8B59E]">Plot. </span>
                {row.plot}
              </p>
              <p className="text-[#94A3B8] leading-relaxed mb-2">
                <span className="text-[#E8B59E]">Envelope. </span>
                {row.envelope}
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                <span className="text-[#E8B59E]">Use. </span>
                {row.use}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl mb-4">Materials</h2>
        <ul className="space-y-3 text-[#94A3B8] leading-relaxed">
          {materials.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#E8B59E] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl mb-4">Inside the building</h2>
        <ul className="space-y-3 text-[#94A3B8] leading-relaxed">
          {insides.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#E8B59E] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl mb-4">
          Refused without a Jury
        </h2>
        <p className="text-[#94A3B8] leading-relaxed mb-6">
          These are particulars of non-conformance. They do not need a
          policy debate. They need a different drawing, or an amendment of
          the Book under Forced Construction.
        </p>
        <ul className="space-y-3 text-[#94A3B8] leading-relaxed">
          {refused.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#E8B59E] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl mb-4">Cars, bins, and pipes</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            Parking for a T1 house is on-plot at the rear or in a mews, not
            in a front hardstanding that eats the street wall. A T2 block
            may have a single undercroft access from a lane; the undercroft
            may not become the elevation.
          </p>
          <p>
            Bins are collected from a designated point that is not the
            primary footway. Service corridors required by the Act sit in
            the adopted plan, not as an afterthought across a neighbour’s
            garden.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl mb-4">Changing the Book</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            Raising a standard (quieter floors, deeper reveals, more Trust
            dwellings in a block) can be done by the Court with the Master
            Architect.
          </p>
          <p>
            Lowering a height cap, adding a fifth typology, or shrinking the
            open-space quota is a change of principle. It needs the Civic
            Jury and a Forced Construction package: the replacement envelope,
            the homes still delivered, the street type still held.
          </p>
          <p>
            “Let the market decide the form” is not a package. It is a
            request to stop having a Book.
          </p>
        </div>
      </section>

      <aside className="border-l-4 border-[#E8B59E]/40 pl-6 text-[#94A3B8] leading-relaxed mb-12">
        The first ratified Book for a named Area will add: a material note
        tied to local geology, dimensioned street sections, a block plan for
        phase one, and test plots for T1–T4. Until then this brief is what
        “by-right” is supposed to mean.
      </aside>

      <p className="text-[#94A3B8]">
        Read with{" "}
        <Link href="/covenant#art-6" className="text-[#E8B59E] hover:underline">
          Covenant Article 6
        </Link>
        , the{" "}
        <Link href="/act" className="text-[#E8B59E] hover:underline">
          enabling Act
        </Link>
        , and the{" "}
        <Link href="/community" className="text-[#E8B59E] hover:underline">
          Guiting pattern
        </Link>
        .
      </p>
    </div>
  );
}
