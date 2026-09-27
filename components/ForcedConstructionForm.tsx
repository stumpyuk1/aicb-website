"use client";

import { useMemo, useState } from "react";

const instruments = [
  { id: "act", label: "Enabling Act" },
  { id: "covenant", label: "Civic Covenant" },
  { id: "pattern-book", label: "Pattern Book" },
  { id: "footprint", label: "First footprint (Tempsford)" },
  { id: "levy", label: "Levy or precept" },
  { id: "other", label: "Other published rule" },
] as const;

const MAIL = "networkcommonsgov@gmail.com";
const MIN = 20;

function fieldOk(value: string) {
  return value.trim().length >= MIN;
}

export function ForcedConstructionForm() {
  const [instrument, setInstrument] = useState<(typeof instruments)[number]["id"]>("footprint");
  const [clause, setClause] = useState("");
  const [wrong, setWrong] = useState("");
  const [replacement, setReplacement] = useState("");
  const [envelope, setEnvelope] = useState("");
  const [from, setFrom] = useState("");
  const [copied, setCopied] = useState(false);

  const ready =
    fieldOk(wrong) && fieldOk(replacement) && fieldOk(envelope);

  const instrumentLabel =
    instruments.find((item) => item.id === instrument)?.label ?? instrument;

  const subject = `Forced Construction — ${instrumentLabel}`;

  const body = useMemo(() => {
    return [
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
  }, [instrumentLabel, clause, wrong, replacement, envelope, from]);

  const mailHref = useMemo(() => {
    return `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [subject, body]);

  async function copyPackage() {
    const text = `To: ${MAIL}\nSubject: ${subject}\n\n${body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  const fieldClass =
    "w-full bg-[#0A2533] border border-[#E8B59E]/30 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder:text-[#94A3B8]/60";
  const labelClass =
    "block text-[11px] tracking-[0.2em] uppercase text-[#E8B59E] mb-2";

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="border border-[#E8B59E]/20 rounded-2xl p-8 space-y-6"
    >
      <div>
        <label htmlFor="instrument" className={labelClass}>
          Instrument under attack
        </label>
        <select
          id="instrument"
          value={instrument}
          onChange={(e) => setInstrument(e.target.value as typeof instrument)}
          className={fieldClass}
        >
          {instruments.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="clause" className={labelClass}>
          Clause, article, or passage (optional)
        </label>
        <input
          id="clause"
          value={clause}
          onChange={(e) => setClause(e.target.value)}
          placeholder="e.g. Covenant 9.6, Pattern Book T2 height, footprint 1,200 ha"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="wrong" className={labelClass}>
          What is wrong
        </label>
        <textarea
          id="wrong"
          required
          rows={5}
          value={wrong}
          onChange={(e) => setWrong(e.target.value)}
          placeholder="Name the failure. Not a mood. A clause, a number, or a siting claim that cannot survive scrutiny."
          className={fieldClass}
        />
        <p className="mt-1 text-xs text-[#94A3B8]">{wrong.trim().length}/{MIN} characters minimum</p>
      </div>

      <div>
        <label htmlFor="replacement" className={labelClass}>
          Specific, feasible alternative
        </label>
        <textarea
          id="replacement"
          required
          rows={6}
          value={replacement}
          onChange={(e) => setReplacement(e.target.value)}
          placeholder="Write the replacement clause, map, typology, or precept split. If we cannot build it, it is not an alternative."
          className={fieldClass}
        />
        <p className="mt-1 text-xs text-[#94A3B8]">{replacement.trim().length}/{MIN} characters minimum</p>
      </div>

      <div>
        <label htmlFor="envelope" className={labelClass}>
          Why it still meets the published envelope
        </label>
        <textarea
          id="envelope"
          required
          rows={5}
          value={envelope}
          onChange={(e) => setEnvelope(e.target.value)}
          placeholder="Reserved-stock floor, Forced Construction itself, neighbour precept, fourteen-day clock, Crown reservation — which of these still hold, and how."
          className={fieldClass}
        />
        <p className="mt-1 text-xs text-[#94A3B8]">{envelope.trim().length}/{MIN} characters minimum</p>
      </div>

      <div>
        <label htmlFor="from" className={labelClass}>
          Name or office (optional)
        </label>
        <input
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Only what you choose to put in an email"
          className={fieldClass}
        />
      </div>

      <p className="text-sm text-[#94A3B8] leading-relaxed">
        The button opens your mail client to {MAIL} with the three fields
        filled. If no mail client is installed, copy the package and paste it.
        A package missing an alternative is struck out, as Covenant 9.6 requires
        of an objection.
      </p>

      {!ready && (
        <p className="text-sm text-[#E8B59E]">
          Fill the three required fields (at least {MIN} characters each) before
          the mail link will open.
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {ready ? (
          <a
            href={mailHref}
            className="inline-flex px-8 py-3 rounded-xl font-medium bg-[#E8B59E] text-[#0A2533] hover:bg-white transition-all"
          >
            Open Forced Construction email
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="px-8 py-3 rounded-xl font-medium bg-[#E8B59E] text-[#0A2533] opacity-40 cursor-not-allowed"
          >
            Open Forced Construction email
          </button>
        )}
        <button
          type="button"
          onClick={copyPackage}
          disabled={!ready}
          className="px-6 py-3 rounded-xl font-medium border border-[#E8B59E]/40 text-[#E8B59E] hover:bg-[#E8B59E]/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {copied ? "Copied" : "Copy package"}
        </button>
      </div>
    </form>
  );
}
