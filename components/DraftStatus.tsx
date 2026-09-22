type Change = {
  version: string;
  date: string;
  note: string;
};

type DraftStatusProps = {
  instrument: string;
  version: string;
  published: string;
  locked: string[];
  log: Change[];
};

export function DraftStatus({
  instrument,
  version,
  published,
  locked,
  log,
}: DraftStatusProps) {
  return (
    <aside className="mb-14 border border-[#E8B59E]/20 rounded-2xl overflow-hidden">
      <div className="px-5 py-4 border-b border-[#E8B59E]/15 grid sm:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8B59E] mb-1">
            Draft
          </p>
          <p className="text-[#F5F0E8]">{version}</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8B59E] mb-1">
            Published
          </p>
          <p className="text-[#F5F0E8]">{published}</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8B59E] mb-1">
            Status
          </p>
          <p className="text-[#F5F0E8]">Working instrument · not enacted</p>
        </div>
      </div>
      <div className="px-5 py-4 border-b border-[#E8B59E]/15">
        <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8B59E] mb-3">
          Locked in this {instrument}
        </p>
        <p className="text-xs text-[#94A3B8] mb-3 leading-relaxed">
          These clauses do not move by Court or Jury amendment. They yield only
          to statute or revocation of the Letters Patent. Everything else is
          open if the replacement still builds.
        </p>
        <ul className="space-y-2 text-sm text-[#94A3B8]">
          {locked.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#E8B59E] shrink-0">§</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-5 py-4">
        <p className="text-[11px] tracking-[0.22em] uppercase text-[#E8B59E] mb-3">
          Changelog
        </p>
        <ol className="space-y-3">
          {log.map((row) => (
            <li key={row.version} className="text-sm leading-relaxed">
              <span className="text-[#F5F0E8]">{row.version}</span>
              <span className="text-[#E8B59E]"> · {row.date}</span>
              <p className="text-[#94A3B8] mt-1">{row.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
