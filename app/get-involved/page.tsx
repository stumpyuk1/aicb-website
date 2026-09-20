import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get involved",
};

export default function GetInvolvedPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        This only works as a conversation with consequences
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-12">
        AICB is a design in public. It needs lawyers, engineers, local
        government people, landholders, and residents who have lived through a
        planning inquiry and still want the next town to be better.
      </p>

      <div className="border border-[#E8B59E]/20 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl mb-6">Useful work</h2>
        <ul className="space-y-5 text-[#94A3B8]">
          <li>
            <strong className="text-[#F5F0E8]">Stress-test the Act.</strong>{" "}
            Mark clauses that would fail Commons scrutiny or judicial
            construction, and send the replacement clause.
          </li>
          <li>
            <strong className="text-[#F5F0E8]">Improve the Pattern Book brief.</strong>{" "}
            Typologies that are buildable, insurable, and vernacular — not
            another pattern-language poster.
          </li>
          <li>
            <strong className="text-[#F5F0E8]">Endow the social commons.</strong>{" "}
            How large a reserved housing stock, on what tenancy rules, funded
            from which slice of uplift.
          </li>
          <li>
            <strong className="text-[#F5F0E8]">Name a footprint honestly.</strong>{" "}
            A candidate that meets the statutory tests and can win a regional
            jury, not only a slide deck.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl mb-4">Write</h2>
      <p className="text-[#94A3B8] mb-8 leading-relaxed">
        Early correspondence is being read through the same address as the
        sister project, Networked Commons Governance. Constructive objections
        are welcome. Pure negation is not — bring the alternative.
      </p>
      <a
        href="mailto:networkcommonsgov@gmail.com"
        className="inline-block bg-[#E8B59E] hover:bg-white text-[#0A2533] font-medium px-10 py-4 rounded-xl transition-all text-lg"
      >
        networkcommonsgov@gmail.com
      </a>

      <p className="mt-14 text-sm text-[#94A3B8] leading-relaxed">
        Not a party, not a membership scheme, not a request for your data
        beyond what you choose to put in an email. The NCG constitutional
        writing lives at{" "}
        <a
          href="https://networkedcommonsgovernance.org/"
          className="text-[#E8B59E] hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          networkedcommonsgovernance.org
        </a>
        .
      </p>
    </div>
  );
}
