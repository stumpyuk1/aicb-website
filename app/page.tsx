import Link from "next/link";

const inheritances = [
  {
    kicker: "English lineage",
    title: "Charter liberties that can build",
    body: "Royal Charter boroughs, the City of London’s dual franchise, urban development corporations, and garden-city covenants. Not an import. A revival of domestic tools that already know how to hold land and deliver streets.",
  },
  {
    kicker: "Networked Commons",
    title: "Rules that keep power temporary",
    body: "Subsidiarity, sortition juries, liquid delegation, trust audits, and the Forced Construction Rule. Every veto must arrive with a workable alternative. Decisions stay close to the people they bind.",
  },
  {
    kicker: "Living place",
    title: "The Guiting Power social commons",
    body: "A village kept intergenerational by taking homes off the speculative market, pegging rents to local work, and recycling an estate economy into school, hall, fields, and pubs. Delivery without a hollowed-out community.",
  },
];

const mechanisms = [
  {
    n: "01",
    title: "Letters Patent",
    body: "Parliament enables; the Crown grants a 99-year Charter over a defined footprint. Planning under the Town and Country Planning Act is disapplied inside the boundary.",
  },
  {
    n: "02",
    title: "Trust Corporation",
    body: "A Charter Borough Trust Corporation holds the freehold in trust. A High Steward runs delivery against published KPIs and can be removed by the Court.",
  },
  {
    n: "03",
    title: "Mixed franchise + jury",
    body: "Capital stewards, commercial electors, and resident covenant-holders sit on the Court. A sortition Civic Jury takes place-based questions. Voices may be delegated — and revoked.",
  },
  {
    n: "04",
    title: "Covenant, not council tax",
    body: "One Consolidated Municipal Levy. Service failure triggers levy abatement. Neighbours receive a compensatory precept so the borough is not a raid on the adjoining authority.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#0A2533]">
        <img
          src="/banner.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2533] via-[#0A2533]/70 to-[#0A2533]/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <p className="inline-flex items-center gap-3 px-5 py-2 border border-[#E8B59E]/40 rounded-full text-[11px] tracking-[0.28em] text-[#E8B59E] uppercase mb-8">
            A territorial commons
          </p>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.95] max-w-xl">
            Advanced Innovation
            <br />
            Charter Borough
          </h1>
          <p className="mt-8 max-w-xl text-xl md:text-2xl text-[#E8B59E] font-light">
            Where Networked Commons Governance meets ground, streets, and a
            covenant people can live under.
          </p>
          <p className="mt-6 max-w-xl text-lg text-[#94A3B8] leading-relaxed">
            An opt-in chartered enclave that replaces the veto cascade with
            accountable delivery — and refuses to treat a town as only a
            development site.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/model"
              className="px-9 py-4 bg-[#E8B59E] hover:bg-white text-[#0A2533] font-medium rounded-xl text-lg transition-all text-center"
            >
              Read the model
            </Link>
            <Link
              href="/act"
              className="px-9 py-4 border-2 border-[#E8B59E] hover:bg-[#E8B59E]/10 text-[#E8B59E] font-medium rounded-xl text-lg transition-all text-center"
            >
              The enabling Act
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8B59E]/10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl tracking-tight mb-8">The thesis</h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#94A3B8]">
            <p>
              Britain does not mainly lack ideas. It lacks institutions that can
              say yes, finish the work, and remain answerable to the people who
              have to live with the result.
            </p>
            <p>
              Whitehall concentrates fiscal and regulatory power far from
              operational knowledge. Non-departmental bodies, statutory
              consultees, and procedural review have produced a system optimised
              for obstruction. Housing, infrastructure, and civic fabric stall
              inside that cascade.
            </p>
            <p>
              Overnight reconstruction of the centre is not available. Exit and
              institutional competition are. A Charter Borough is a lawful
              sandbox: a liberty with a clock, a covenant, and published
              consequences.
            </p>
            <p className="text-[#E8B59E] italic">
              Networked Commons Governance is the operating system.
              The Charter Borough is the first machine that can run it on
              land.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8B59E]/10 py-24 bg-[#0A2533]/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl tracking-tight mb-4 text-center">
            Three inheritances
          </h2>
          <p className="text-center text-[#E8B59E] mb-14">
            The project is a synthesis, not a slogan
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {inheritances.map((item) => (
              <article
                key={item.title}
                className="p-8 border border-[#E8B59E]/20 rounded-2xl hover:border-[#E8B59E]/40 transition-colors"
              >
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8B59E] mb-4">
                  {item.kicker}
                </p>
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8B59E]/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl tracking-tight mb-12">
            How a borough is stood up
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mechanisms.map((item) => (
              <div key={item.n} className="flex gap-5">
                <div className="text-[#E8B59E] font-serif text-3xl w-14 shrink-0">
                  {item.n}
                </div>
                <div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/model" className="text-[#E8B59E] hover:underline">
              Full governance synthesis →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8B59E]/10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl tracking-tight mb-6">
            Build a place that can last
          </h2>
          <p className="text-lg text-[#94A3B8] mb-10">
            Pattern-book streets. Homes reserved for people who work the place.
            An executive who can be sacked. A jury that cannot merely say no.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pilots"
              className="px-9 py-4 bg-[#E8B59E] hover:bg-white text-[#0A2533] font-medium rounded-xl transition-all"
            >
              Pilot candidates
            </Link>
            <Link
              href="/get-involved"
              className="px-9 py-4 border-2 border-[#E8B59E] text-[#E8B59E] hover:bg-[#E8B59E]/10 font-medium rounded-xl transition-all"
            >
              Join the work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
