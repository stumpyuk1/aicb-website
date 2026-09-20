import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Civic Covenant",
  description:
    "Worked draft of the Charter Borough Civic Covenant, including the two-dockets hybrid for jury and officers.",
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
  { id: "art-9", label: "9. Two dockets, jury, Forced Construction" },
  { id: "art-10", label: "10. Transparency and audits" },
  { id: "art-11", label: "11. Tribunal and remedies" },
  { id: "art-12", label: "12. Neighbours" },
  { id: "art-13", label: "13. Amendment" },
  { id: "art-14", label: "14. Crown reservation" },
];

const services = [
  { name: "Waste and recycling", standard: "Residual collection twice weekly on adopted streets; recycling and food waste weekly. A missed collection reported before noon is made good within 24 hours." },
  { name: "Street lighting", standard: "Not fewer than 98% of adopted lamps working at any monthly snapshot. A dark lamp reported is restored within five working days, or 48 hours on a primary street." },
  { name: "Cleansing", standard: "Primary streets swept daily before 08:00. Residential streets weekly. Fly-tipped waste on adopted land removed within 48 hours of report." },
  { name: "Water and drainage", standard: "Potable supply and foul drainage meeting the published quality table. Unplanned outage affecting a dwelling longer than six hours triggers a rebate day on the levy." },
  { name: "Digital", standard: "A borough-provided access network with 99.0% monthly uptime measured at the premises interface, excluding force majeure." },
  { name: "Public safety patrol", standard: "Contracted patrol presence on the published beat map. Priority call-out on borough land within twenty minutes between 07:00 and 23:00. This does not displace the constabulary or the Crown Court." },
  { name: "Open space", standard: "Play areas, halls, and adopted greens inspected weekly and kept usable. A closed amenity for more than fourteen days without a published alternative is a service failure." },
];

export default function CovenantPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[11px] tracking-[0.28em] uppercase text-[#E8B59E] mb-4">Working instrument · draft 0.1</p>
      <h1 className="font-serif text-5xl tracking-tight mb-6">Charter Borough Civic Covenant</h1>
      <p className="text-xl text-[#E8B59E] font-light mb-8">The bargain under which land is held, streets are kept, the levy is paid, and a veto is only allowed if it builds something in its place.</p>
      <p className="text-lg leading-relaxed text-[#94A3B8] mb-6">Every conveyance, long lease, and registered tenancy of twelve months or more inside a Charter Area takes effect subject to this Covenant.</p>
      <p className="text-sm leading-relaxed text-[#94A3B8] mb-14 border border-[#E8B59E]/20 rounded-2xl p-5">Worked draft. Not executed and not legal advice. Figures are here so they can be attacked with a replacement number.</p>
      <nav className="mb-16 columns-1 sm:columns-2 gap-8 text-sm text-[#94A3B8]">
        {toc.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="block mb-2 hover:text-[#E8B59E]">{item.label}</a>
        ))}
      </nav>

      <article id="art-1" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">1. Nature and running with the land</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>1.1 This Covenant binds the Corporation and every successor in title. It runs with each plot.</p>
          <p>1.2 The Clerk of the Rolls keeps the public register of covenant-holders, reserved-stock tenancies, Certificates of Conformance, levy accounts, and Tribunal awards.</p>
          <p>1.3 Nothing here creates a Crown servant, displaces an indictable offence, or grants a power of imprisonment.</p>
        </div>
      </article>

      <article id="art-2" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">2. Parties and standing</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>2.1 A covenant-holder may enforce the service standards, levy rules, and Pattern Book duties against the Corporation.</p>
          <p>2.2 The Corporation may enforce street, frontage, and use duties after written notice and a cure window of not less than fourteen days, except where delay would cause immediate harm.</p>
          <p>2.3 The Amenity Trust has standing on Articles 4, 7 and 8.</p>
          <p>2.4 A neighbouring local authority has standing only on Article 12 and on environmental discharge crossing the boundary.</p>
        </div>
      </article>

      <article id="art-3" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">3. Objects</h2>
        <p className="text-[#94A3B8] leading-relaxed">The Corporation holds the Area on trust to deliver Article 4 standards, apply the Pattern Book on a fourteen-day clock, keep reserved stock inhabited by people who work the place, publish the levy and KPIs, remit the neighbour precept, and submit to the Civic Jury and the Arbitral Tribunal. Uplift that empties the reserved stock is a breach of object.</p>
      </article>

      <article id="art-4" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">4. Service standards</h2>
        <div className="space-y-4 mb-6">
          {services.map((row) => (
            <div key={row.name} className="border border-[#E8B59E]/20 rounded-2xl p-5">
              <h3 className="text-[#F5F0E8] mb-2">{row.name}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{row.standard}</p>
            </div>
          ))}
        </div>
        <p className="text-[#94A3B8] leading-relaxed">4.2 Performance is published monthly. A quarter in which three or more standards are missed is referred to a trust audit of the High Steward.</p>
      </article>

      <article id="art-5" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">5. Levy and abatement</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>5.1 Council tax and non-domestic rates do not apply. The Court sets a Consolidated Municipal Levy on floor area and use by 31 January.</p>
          <p>5.3 If a guaranteed standard fails for more than thirty consecutive days, affected covenant-holders may seek abatement of up to 40 percent or escrow of the service slice until fourteen days after cure.</p>
          <p>5.4 Abatement is for failed delivery, not a planning disagreement.</p>
        </div>
      </article>

      <article id="art-6" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">6. Streets and Pattern Book</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>6.1 Within six months of designation the Corporation ratifies a Prescribed Pattern Book.</p>
          <p>6.2 A proposal that conforms with the <Link href="/pattern-book" className="text-[#E8B59E] hover:underline">Prescribed Pattern Book</Link> may be lodged as a Certificate of Conformance. If the Master Architect does not name the diverging clause within fourteen business days, works may start. The Civic Jury does not sit on that clock.</p>
          <p>6.3 Blank ground-floor elevations on a primary street, except substations and specified workshops, are a breach.</p>
        </div>
      </article>

      <article id="art-7" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">7. Amenity Trust stock</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>7.1 Not less than 20 percent of completed dwellings in each residential phase vest in or are leased for 125 years to the Amenity Trust at a peppercorn.</p>
          <p>7.2 Trust dwellings are off the open sales market. Visitor-letting is a breach.</p>
          <p>7.3 Allocation priority: local households of three years; people employed in land, making, care, teaching, or borough services; first-time households with an adult under thirty-five who works in the Area. Rents follow a local-wage index.</p>
          <p>7.4 Disposal of the first school, hall, or adopted fields needs a Civic Jury resolution and a Trust trustee resolution, each with a recorded alternative under Article 9.</p>
        </div>
      </article>

      <article id="art-8" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">8. Neighbourliness</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>8.2 Quiet hours on residential streets are 23:00 to 07:00.</p>
          <p>8.4 Visitor-lets of more than 90 nights require commercial enrolment. Amenity Trust dwellings may not be so used.</p>
        </div>
      </article>

      <article id="art-9" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">9. Two dockets, jury, Forced Construction</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>9.1 Covenant-holders may vote directly or delegate. A delegation is revocable and dies with enrolment.</p>
          <p>9.2 Two dockets. Place-based questions go to the Civic Jury. Questions of construction, accounts, and award go to named officers and the Arbitral Tribunal. A panel that sits on the other’s clock is acting outside this Covenant.</p>
          <p>9.3 Place-based questions — siting, a Pattern Book change of principle, a reserved-stock cut, a named amenity closure, a levy redesign — go to a stratified Civic Jury sitting 6–12 months with overlapping terms. Nearby streets weigh more on siting. The Jury decides the envelope. It does not stay a Certificate that already conforms.</p>
          <p>9.4 Counsel to the Jury. A professional assessor sits with the Jury and does not vote. The assessor costs each alternative, states whether it meets the envelope, and drafts the published reasons. The Jury still decides. An assessor who substitutes a preference for a costing may be removed by the Court after a published minute.</p>
          <p>9.5 Officers apply the envelope. The Master Architect issues Certificates. The Comptroller keeps the levy and service counts. The Borough Engineer keeps the adopted works. None of them may rewrite a street type or the reserved-stock floor.</p>
          <p>9.6 Forced Construction. An objection is incompetent unless it includes a specific, feasible alternative that still meets the published envelope. Pure negation is struck out by the Clerk and does not stop the clock.</p>
          <p>9.7 Frivolous alternatives may be rejected by the Jury after the assessor’s note. The rejection is published with reasons.</p>
          <p>9.8 Locked clauses. Crown reservation, Forced Construction itself, and the judicial-review carve-out in Article 11 are not Jury questions. They yield only to statute or revocation of the Letters Patent.</p>
        </div>
      </article>

      <article id="art-10" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">10. Transparency and audits</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>10.1 Court minutes, Jury decisions, Tribunal awards, levy calculations, Pattern Book notices, Steward KPIs, and monthly service counts are public by default.</p>
          <p>10.2 An annual trust audit score below 50 percent triggers review, an improvement plan, or rotation.</p>
        </div>
      </article>

      <article id="art-11" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">11. Tribunal and remedies</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>11.1 The Arbitral Tribunal has exclusive jurisdiction over this Covenant, Certificates, the levy, and internal boundaries, sitting under the Arbitration Act 1996.</p>
          <p>11.2 Remedies include specific performance, levy abatement, a works order, and a declaration. The Tribunal cannot invent a new Pattern Book.</p>
          <p>11.3 Ordinary judicial review does not lie except where the body acted wholly outside the Act or the Letters Patent.</p>
        </div>
      </article>

      <article id="art-12" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">12. Neighbours</h2>
        <p className="text-[#94A3B8] leading-relaxed">12.1 Each year the Corporation remits 12.5 percent of gross levy revenue plus, on first freehold alienation, 10 percent of those capital receipts. Cross-boundary harm remains strict liability, backed by the Environmental Indemnity Bond.</p>
      </article>

      <article id="art-13" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">13. Amendment</h2>
        <div className="space-y-4 text-[#94A3B8] leading-relaxed">
          <p>13.1 Lowering a standard, the reserved-stock floor, the levy formula, or Forced Construction needs the Civic Jury as well as the Court.</p>
          <p>13.2 Every amendment carries its own Forced Construction package.</p>
          <p>13.3 Articles 1.3, 9.6, 9.8, 11.3, and 14 cannot be amended by the Court or the Jury.</p>
        </div>
      </article>

      <article id="art-14" className="mb-14 scroll-mt-28">
        <h2 className="font-serif text-3xl mb-4">14. Crown reservation</h2>
        <p className="text-[#94A3B8] leading-relaxed">This Covenant does not derogate from the Crown. Systemic insolvency, a national-security breach, or a gross irremediable breach may bring a Crown Commissioner and, in the last case, revocation.</p>
      </article>

      <p className="text-[#94A3B8]">
        Read with the <Link href="/model#dockets" className="text-[#E8B59E] hover:underline">two dockets</Link>, the <Link href="/pattern-book" className="text-[#E8B59E] hover:underline">Pattern Book</Link>, the <Link href="/act" className="text-[#E8B59E] hover:underline">enabling Act</Link>, and the <Link href="/community" className="text-[#E8B59E] hover:underline">Guiting pattern</Link>.
      </p>
    </div>
  );
}
