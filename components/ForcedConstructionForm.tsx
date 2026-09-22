"use client";

import { FormEvent, useMemo, useState } from "react";

const instruments = [
  { id: "act", label: "Enabling Act" },
  { id: "covenant", label: "Civic Covenant" },
  { id: "pattern-book", label: "Pattern Book" },
  { id: "footprint", label: "First footprint (Tempsford)" },
  { id: "levy", label: "Levy or precept" },
  { id: "other", label: "Other published rule" },
] as const;

export function ForcedConstructionForm() {
  const [instrument, setInstrument] = useState<(typeof instruments)[number]["id"]>("footprint");
  const [clause, setClause] = useState("");
  const [wrong, setWrong] = useState("");
  const [replacement, setReplacement] = useState("");
  const [envelope, setEnvelope] = useState("");
  const [from, setFrom] = useState("");

  const ready =
    wrong.trim().length > 20 &&
    replacement.trim().length > 20 &&
    envelope.trim().length > 20;

  const mail = useMemo(() => {
    const instrumentLabel =
      instruments.find((item) => item.id === instrument)?.label ?? instrument;
    const subject = `Forced Construction — ${instrumentLabel}`;
    const body = [
      `Instrument: ${instrumentLabel}`,
      clause.trim() ? `Clause or passage: ${clause.trim()}` : null,
      "",
      "What is wrong",
      wrong.trim(),
      "",
      "Replacement that still meets the envelope",
      replacement.trim(),
      "",
      "Why it still meets the published envelope",
      envelope.trim(),
      "",
      from.trim() ? `From: ${from.trim()}` : "From: (not given)",
    ]
      .filter((line) => line !== null)
      .join("\n");
    return `mailto:networkcommonsgov@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [instrument, clause, wrong, replacement, envelope, from]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!ready) return;
    window.location.href = mail;
  }

  return (
    <form onSubmit={onSubmit} className="border border-[#E8B59E]/20 rounded-2xl p-8 space-y-6">
      <div>
        <label htmlFor="instrument" className="block text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2">
          Instrument under attack
        </label>
        <select
          id="instrument"
          value={instrument}
          onChange={(e) => setInstrument(e.target.value as typeof instrument)}
          className="w-full bg-[#0A2533] border border-[#E8B59E]/30 rounded-xl px-4 py-3 text-[#F5F0E8]"
        >
          {instruments.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="clause" className="block text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2">
          Clause, article, or passage (optional)
        </label>
        <input
          id="clause"
          value={clause}
          onChange={(e) => setClause(e.target.value)}
          placeholder="e.g. Covenant 9.6, Pattern Book T2 height, footprint 1,200 ha"
          className="w-full bg-[#0A2533] border border-[#E8B59E]/30 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder:text-[#94A3B8]/60"
        />
      </div>

      <div>
        <label htmlFor="wrong" className="block text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2">
          What is wrong
        </label>
        <textarea
          id="wrong"
          required
          rows={5}
          value={wrong}
          onChange={(e) => setWrong(e.target.value)}
          placeholder="Name the failure. Not a mood. A clause, a number, or a siting claim that cannot survive scrutiny."
          className="w-full bg-[#0A2533] border border-[#E8B59E]/30 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder:text-[#94A3B8]/60"
        />
      </div>

      <div>
        <label htmlFor="replacement" className="block text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2">
          Specific, feasible alternative
        </label>
        <textarea
          id="replacement"
          required
          rows={6}
          value={replacement}
          onChange={(e) => setReplacement(e.target.value)}
          placeholder="Write the replacement clause, map, typology, or precept split. If we cannot build it, it is not an alternative."
          className="w-full bg-[#0A2533] border border-[#E8B59E]/30 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder:text-[#94A3B8]/60"
        />
      </div>

      <div>
        <label htmlFor="envelope" className="block text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2">
          Why it still meets the published envelope
        </label>
        <textarea
          id="envelope"
          required
          rows={5}
          value={envelope}
          onChange={(e) => setEnvelope(e.target.value)}
          placeholder="Reserved-stock floor, Forced Construction itself, neighbour precept, fourteen-day clock, Crown reservation — which of these still hold, and how."
          className="w-full bg-[#0A2533] border border-[#E8B59E]/30 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder:text-[#94A3B8]/60"
        />
      </div>

      <div>
        <label htmlFor="from" className="block text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2">
          Name or office (optional)
        </label>
        <input
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Only what you choose to put in an email"
          className="w-full bg-[#0A2533] border border-[#E8B59E]/30 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder:text-[#94A3B8]/60"
        />
      </div>

      <p className="text-sm text-[#94A3B8] leading-relaxed">
        Submit opens your mail client to networkcommonsgov@gmail.com with the
        three fields filled. A package missing an alternative is struck out, as
        Covenant 9.6 requires of an objection.
      </p>

      <button
        type="submit"
        disabled={!ready}
        className="px-8 py-3 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-[#E8B59E] text-[#0A2533] hover:bg-white"
      >
        Open Forced Construction email
      </button>
    </form>
  );
}
