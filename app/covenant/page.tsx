import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Civic Covenant",
  description:
    "Worked draft of the Charter Borough Civic Covenant: service standards, levy remedies, reserved housing, and Forced Construction.",
};

const toc = [
  { id: "art-1", label: "1. Nature and running with the land" },
  { id: "art-2", label: "2. Parties and standing" },
  { id: "art-3", label: "3. Objects" },
  { id: "art-4", label: "4. Service standards" },
  { id: "art-5", label: "5. Levy and abatement" },
  { id: "art-6", label: "6. Streets and Pattern Book" },
  { id: "art-7", label: "7. Amenity Trust stock" },
  { id: "art-8", label: "8. Neighbourliness" },
  { id: "art-9", label: "9. Voice, jury, Forced Construction" },
  { id: "art-10", label: "10. Transparency and audits" },
  { id: "art-11", label: "11. Tribunal and remedies" },
  { id: "art-12", label: "12. Neighbours" },
  { id: "art-13", label: "13. Amendment" },
  { id: "art-14", label: "14. Crown reservation" },
];

const services = [
  {
    name: "Waste and recycling",
    standard:
      "Residual collection twice weekly on adopted streets; recycling and food waste weekly. A missed collection reported before noon is made good within 24 hours.",
  },
  {
    name: "Street lighting",
    standard:
      "Not fewer than 98% of adopted lamps working at any monthly snapshot. A dark lamp reported is restored within five working days, or 48 hours on a primary street.",
  },
  {
    name: "Cleansing",
    standard:
      "Primary streets swept daily before 08:00. Residential streets weekly. Fly-tipped waste on adopted land removed within 48 hours of report.",
  },
  {
    name: "Water and drainage",
    standard:
      "Potable supply and foul drainage meeting the published quality table. Unplanned outage affecting a dwelling longer than six hours triggers a rebate day on the levy.",
  },
  {
    name: "Digital",
    standard:
      "A borough-provided access network with 99.0% monthly uptime measured at the premises interface, excluding force majeure.",
  },
  {
    name: "Public safety patrol",
    standard:
      "Contracted patrol presence on the published beat map. Priority call-out on borough land within twenty minutes between 07:00 and 23:00. This does not displace the constabulary or the Crown Court.",
  },
  {
    name: "Open space",
    standard:
      "Play areas, halls, and adopted greens inspected weekly and kept usable. A closed amenity for more than fourteen days without a published alternative is a service failure.",
  },
];

export default function CovenantPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8B59E] mb-4">
        Working instrument · draft 0.1
      </p>
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        Charter Borough Civic Covenant
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-8">
        The bargain under which land is held, streets are kept, the levy is
        paid, and a veto is only allowed if it builds something in its place.
      </p>
      <p className="text-lg leading-relaxed text-[#94A3B8] mb-6">
        Every conveyance, long lease, and registered tenancy of twelve months
        or more inside a Charter Area takes effect subject to this Covenant.
        It is the municipal constitution of the place — not a residents’
        association handbook, and not a substitute for the criminal law.
      </p>
      <p className="text-sm leading-relaxed text-[#94A3B8] mb-14 border border-[#E8B59E]/20 rounded-2xl p-5">
        Worked draft for public scrutiny. Not executed, not site-specific, and
        not legal advice. Figures (abatement cap, precept shares, inspection
        windows, reserved-stock floor) are taken from the enabling Bill and
        the Guiting pattern so they can be attacked with a replacement number
        rather than a shrug.
      </p>

      <nav className="mb-16 columns-1 sm:columns-2 gap-8 text-sm text-[#94A3B8]">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block mb-2 hover:text-[#E8B59E]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <section className="mb-16">
        <h2 className="font-serif text-2xl mb-4">Parties</h2>
        <ul className="space-y-3 text-[#94A3B8] leading-relaxed">
          <li>
            <span className="text-[#F5F0E8]">The Corporation</span> — the
            Charter Borough Trust Corporation constituted by Letters Patent,
            including the High Steward and officers acting in its name.
          </li>
          <li>
            <span className="text-[#F5F0E8]">Covenant-holders</span> —
            freeholders, long leaseholders, and lawful residential or
            commercial occupiers of twelve months or more.
          </li>
          <li>
            <span className="text-[#F5F0E8]">The Amenity Trust</span> — the
            charitable body endowed under Article 7 to hold the reserved
            housing stock and specified civic buildings.
          </li>
          <li>
            <span className="text-[#F5F0E8]">The Court and the Civic Jury</span>{" "}
            — as constituted under the Charter and the{" "}
            <Link href="/model" className="text-[#E8B59E] hover:underline">
              governance model
            </Link>
            .
          </li>
        </ul>
      </section>

      <article id="art-1" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">
          1. Nature and running with the land
        </h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            1.1 This Covenant is intended to bind the Corporation and every
            successor in title. It runs with each plot. A transfer, underlease,
            or assignment that purports to exclude it is void to that extent.
          </p>
          <p>
            1.2 The Clerk of the Rolls keeps the authoritative register of
            covenant-holders, reserved-stock tenancies, Certificates of
            Conformance, levy accounts, and Tribunal awards. The register is
            public by default, subject only to addresses of Amenity Trust
            tenants where publication would identify a vulnerable household.
          </p>
          <p>
            1.3 Nothing here creates a Crown servant, displaces an indictable
            offence, or grants a power of imprisonment.
          </p>
        </div>
      </article>

      <article id="art-2" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">2. Parties and standing</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            2.1 A covenant-holder may enforce the service standards, levy
            rules, and Pattern Book duties against the Corporation.
          </p>
          <p>
            2.2 The Corporation may enforce street, frontage, and use duties
            against a covenant-holder, after written notice and a cure window
            of not less than fourteen days except where delay would cause
            immediate harm to neighbours or adopted works.
          </p>
          <p>
            2.3 The Amenity Trust has standing on Articles 4 (open space), 7
            (reserved stock), and 8 (civic buildings), and may appear as
            interested party on any levy or Pattern Book matter that would
            shrink the reserved stock or close a named amenity.
          </p>
          <p>
            2.4 A neighbouring local authority has standing only on Article 12
            (precept) and on environmental discharge crossing the Charter
            boundary.
          </p>
        </div>
      </article>

      <article id="art-3" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">3. Objects</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>The Corporation holds the Area on trust to:</p>
          <ul className="space-y-2 pl-1">
            <li>— deliver and keep streets, utilities, and civic fabric to the standards in Article 4;</li>
            <li>— apply the Pattern Book so that a conforming building can start within fourteen business days;</li>
            <li>— keep a reserved housing stock inhabited by people who work the place;</li>
            <li>— publish the levy, the accounts, and the Steward’s KPIs;</li>
            <li>— remit the neighbour precept in full and on time;</li>
            <li>— submit to the Civic Jury and the Arbitral Tribunal.</li>
          </ul>
          <p>
            The objects are cumulative. Land-value uplift that empties the
            reserved stock or starves the amenities is a breach of object,
            even if the accounts are in surplus.
          </p>
        </div>
      </article>

      <article id="art-4" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">4. Service standards</h2>
        <p className="text-[#94A3B8] leading-relaxed mb-6">
          4.1 The Corporation guarantees the following as the first published
          schedule. A later schedule may raise a standard. It may lower one
          only by the amendment path in Article 13.
        </p>
        <div className="space-y-4 mb-6">
          {services.map((row) => (
            <div
              key={row.name}
              className="border border-[#E8B59E]/20 rounded-2xl p-5"
            >
              <h3 className="text-[#F5F0E8] mb-2">{row.name}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{row.standard}</p>
            </div>
          ))}
        </div>
        <p className="text-[#94A3B8] leading-relaxed">
          4.2 Performance against each standard is published monthly on the
          borough platform, with the underlying counts. A quarter in which
          three or more standards are missed is automatically referred to a
          trust audit of the High Steward.
        </p>
      </article>

      <article id="art-5" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">5. Levy and abatement</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            5.1 Council tax and non-domestic rates do not apply inside the
            Area. In their place the Court sets a Consolidated Municipal Levy
            as a single published rate on floor area and use, not later than
            31 January preceding the year.
          </p>
          <p>
            5.2 The levy subsumes municipal security, emergency-response
            integration, highway maintenance, waste, lighting, and amenity
            management. It does not hide a second charge under another name.
          </p>
          <p>
            5.3 If a guaranteed standard in Article 4 fails for more than
            thirty consecutive days in respect of an identifiable street,
            block, or supply zone, affected covenant-holders may apply to the
            Tribunal for:
          </p>
          <ul className="space-y-2">
            <li>— abatement of the levy by up to 40 percent for the period of default and until fourteen days after cure; or</li>
            <li>— escrow of the relevant service slice of the levy until the default is cured.</li>
          </ul>
          <p>
            5.4 Abatement is a remedy for failed delivery, not a bargaining
            chip for a planning disagreement. A Pattern Book dispute is
            heard under Article 6.
          </p>
        </div>
      </article>

      <article id="art-6" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">6. Streets and Pattern Book</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            6.1 Within six months of designation the Corporation ratifies a
            Prescribed Pattern Book: typologies, height envelopes, street-width
            ratios, materials, setbacks, service corridors, soundproofing,
            floor-to-ceiling heights, and open-space quotas.
          </p>
          <p>
            6.2 A proposal that conforms in all material respects may be
            lodged as a Certificate of Conformance. If the Master Architect
            does not issue a written notice of non-conformance specifying the
            particulars of divergence within fourteen business days, the
            Certificate is deemed approved and works may start.
          </p>
          <p>
            6.3 Frontages on adopted streets stay active. Blank ground-floor
            elevations on a primary street, except for substations and
            specified workshops, are a breach.
          </p>
          <p>
            6.4 A covenant-holder must keep the public-facing elevation,
            boundary, and any tree shown on the adopted plan in good order.
            The Corporation may do the work after notice and recover the
            reasonable cost as a levy arrears.
          </p>
        </div>
      </article>

      <article id="art-7" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">7. Amenity Trust stock</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            7.1 On first occupation of each residential phase, not less than
            20 percent of completed dwellings in that phase vest in or are
            leased for 125 years to the Amenity Trust at a peppercorn, funded
            from retained freehold and a first slice of land-value uplift.
          </p>
          <p>
            7.2 Trust dwellings are off the open sales market. They may not be
            assigned for value except to the Trust or to another household
            meeting the same tests. Sub-letting on the visitor market is a
            breach.
          </p>
          <p>
            7.3 Allocation priority, in order: (a) a household already living
            or working inside the Area or an immediately adjoining parish for
            not less than three years; (b) a person employed in the Area in
            land, making, care, teaching, or the Corporation’s own services;
            (c) a household forming for the first time with at least one adult
            under thirty-five who works in the Area. Rents are pegged to a
            published local-wage index, not to market comparables outside the
            Area.
          </p>
          <p>
            7.4 The Trust also holds, or is granted a protective lease of, the
            first school building, the hall, and the adopted playing fields.
            Disposal of any of those assets requires a Civic Jury resolution
            plus a Trust trustee resolution, each passed with a recorded
            alternative under Article 9.
          </p>
        </div>
      </article>

      <article id="art-8" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">8. Neighbourliness</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            8.1 The Covenant is not a speech code and not a morals court. It
            polices what neighbours can hear, see from the street, and step
            in on the pavement.
          </p>
          <p>
            8.2 Quiet hours on residential streets are 23:00 to 07:00, subject
            to licensed premises on a primary street operating within their
            published hours. A pattern of breach after two written warnings
            in twelve months may go to the Tribunal for a fine or, in a
            commercial tenancy, a condition on hours.
          </p>
          <p>
            8.3 Waste, vehicles, and works must stay off the adopted footway
            except under a short written licence from the Borough Engineer.
          </p>
          <p>
            8.4 No covenant-holder may use a dwelling as a visitor-let for
            more than 90 nights in a calendar year without a commercial
            enrolment and the corresponding levy band. Amenity Trust dwellings
            may not be so used at all.
          </p>
        </div>
      </article>

      <article id="art-9" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">
          9. Voice, jury, Forced Construction
        </h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            9.1 Covenant-holders may vote directly on borough platform
            questions or delegate their voice. A delegation is revocable at
            any time and dies with the delegator’s enrolment.
          </p>
          <p>
            9.2 Place-based questions — siting of a works yard, a change to
            the Pattern Book of principle, a reduction of reserved stock, a
            closure of a named amenity, a levy redesign — go to a stratified
            Civic Jury sitting 6–12 months with overlapping terms. Nearby
            streets carry additional weight on siting inside a published
            radius.
          </p>
          <p>
            9.3 Forced Construction. An objection, veto, or proposed change
            is incompetent unless it includes a specific, feasible
            alternative that still meets the published envelope (homes
            delivered, precept paid, reserved-stock floor kept, service
            standards funded). Pure negation is struck out by the Clerk and
            does not stop the clock.
          </p>
          <p>
            9.4 Frivolous alternatives — those without a cost line, a site,
            or an implementation owner — may be rejected by the Jury as
            gaming. The rejection is published with reasons.
          </p>
        </div>
      </article>

      <article id="art-10" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">
          10. Transparency and audits
        </h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            10.1 Court minutes, Jury decisions, Tribunal awards, levy
            calculations, Pattern Book notices, Steward KPIs, and monthly
            service counts are public by default.
          </p>
          <p>
            10.2 The High Steward and each voting class of the Court face a
            public trust audit on the platform at least annually. A score
            below 50 percent triggers a mandatory review, an improvement
            plan with dates, or rotation.
          </p>
          <p>
            10.3 Capture of the platform itself is a Charter-level failure.
            Tools used to count votes or audits must be inspectable. A
            covenant-holder may trigger a platform review if hidden weighting
            or metropolitan capture of a local question is reasonably
            suspected.
          </p>
        </div>
      </article>

      <article id="art-11" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">11. Tribunal and remedies</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            11.1 The Charter Borough Arbitral Tribunal has exclusive
            jurisdiction over this Covenant, Certificates of Conformance, the
            levy, and internal property boundaries, sitting under the
            Arbitration Act 1996. Awards are enforceable as High Court
            judgments.
          </p>
          <p>
            11.2 Available remedies include specific performance, levy
            abatement or escrow under Article 5, a works order with cost
            recovery, a declaration, and (for persistent commercial breach)
            a condition on hours or frontage. The Tribunal cannot invent a
            new planning system.
          </p>
          <p>
            11.3 Ordinary judicial review does not lie against the
            Corporation, the Steward, or the Master Architect except on the
            ground that the body acted wholly outside the Act or the Letters
            Patent.
          </p>
        </div>
      </article>

      <article id="art-12" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">12. Neighbours</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            12.1 Each financial year the Corporation remits to each
            neighbouring local authority 12.5 percent of gross levy revenue
            plus, in the years of first freehold alienation, 10 percent of
            those capital receipts. The money is un-hypothecated.
          </p>
          <p>
            12.2 Harm that crosses the boundary — contamination, water-table
            depletion, measurable nuisance — remains a matter of strict
            liability in tort and private nuisance, backed by the
            Environmental Indemnity Bond held with HM Treasury.
          </p>
          <p>
            12.3 A neighbour authority sits as a non-voting liaison on the
            Court. Liaison is not a veto.
          </p>
        </div>
      </article>

      <article id="art-13" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">13. Amendment</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            13.1 The Court may propose an amendment. A change that lowers a
            service standard, reduces the reserved-stock floor, alters the
            levy formula, or rewrites Forced Construction also requires a
            Civic Jury.
          </p>
          <p>
            13.2 Every proposed amendment must carry its own Forced
            Construction package: what is subtracted, what replaces it, who
            pays, and how a covenant-holder can tell after twelve months
            whether it worked.
          </p>
          <p>
            13.3 Articles 1.3, 9.3, 11.3, and 14 cannot be amended by the
            Court or the Jury. They yield only to statute or to revocation
            of the Charter.
          </p>
        </div>
      </article>

      <article id="art-14" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">14. Crown reservation</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>
            14.1 This Covenant does not derogate from the Crown’s sovereignty,
            the Crown Court, or the reserved national functions.
          </p>
          <p>
            14.2 Systemic insolvency, a national-security breach, or a gross
            and irremediable breach of this Covenant may bring a Crown
            Commissioner and, in the last case, revocation of the Charter and
            re-absorption of the Area into ordinary local-authority
            jurisdiction.
          </p>
          <p>
            14.3 Revocation does not wipe covenant-holder remedies already
            awarded. It does end the planning carve-out.
          </p>
        </div>
      </article>

      <aside className="border-l-4 border-[#E8B59E]/40 pl-6 text-[#94A3B8] leading-relaxed mb-12">
        A later site-specific deed will name the Area, attach the first
        Pattern Book, the first levy table, the first reserved-stock plan,
        and the beat map. Until then this is the worked skeleton against
        which those schedules should be written — and against which
        objections should arrive with a replacement clause.
      </aside>

      <p className="text-[#94A3B8]">
        Read with the{" "}
        <Link href="/act" className="text-[#E8B59E] hover:underline">
          enabling Act
        </Link>
        , the{" "}
        <Link href="/model" className="text-[#E8B59E] hover:underline">
          governance stack
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
