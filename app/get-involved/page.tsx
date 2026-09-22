import type { Metadata } from "next";
import Link from "next/link";
import { ForcedConstructionForm } from "@/components/ForcedConstructionForm";

export const metadata: Metadata = {
  title: "Get involved",
};

export default function GetInvolvedPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-serif text-5xl tracking-tight mb-6">
        This only works as a conversation with consequences
      </h1>
      <p className="text-xl text-[#E8B59E] font-light mb-8">
        AICB is a design in public. It needs lawyers, engineers, local
        government people, landholders, and residents who have lived through a
        planning inquiry and still want the next town to be better.
      </p>
      <p className="text-lg text-[#94A3B8] leading-relaxed mb-12">
        Covenant Article 9.6: an objection is incompetent unless it includes a
        specific, feasible alternative that still meets the published envelope.
        Pure negation is struck out. The form below is that rule applied to the
        documents themselves.
      </p>

      <div className="border border-[#E8B59E]/20 rounded-2xl p-8 mb-14">
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
            The working first specification is{" "}
            <Link href="/footprint" className="text-[#E8B59E] hover:underline">
              Tempsford interchange
            </Link>
            . Attack the hectares, the precept split, or the year-one streets —
            with a map that still clears the statutory floor.
          </li>
        </ul>
      </div>

      <h2 className="font-serif text-3xl tracking-tight mb-4">
        Forced Construction package
      </h2>
      <p className="text-[#94A3B8] leading-relaxed mb-8">
        Three fields are required: what is wrong, the replacement, and why the
        replacement still meets the envelope. Anything less is a shrug, and a
        shrug is not a notice.
      </p>

      <ForcedConstructionForm />

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
