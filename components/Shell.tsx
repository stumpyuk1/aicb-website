"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/model", label: "The Model" },
  { href: "/act", label: "The Act" },
  { href: "/community", label: "Community" },
  { href: "/pilots", label: "Pilots" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A2533] text-[#F5F0E8]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A2533]/95 backdrop-blur-md border-b border-[#E8B59E]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E8B59E]/50 text-[#E8B59E] font-serif text-sm">
              A
            </span>
            <span className="font-serif text-[15px] tracking-tight leading-tight">
              Advanced Innovation
              <br className="hidden sm:block" /> Charter Borough
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-[#E8B59E]"
                    : "hover:text-[#E8B59E] transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://networkedcommonsgovernance.org/"
              className="hover:text-[#E8B59E] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              NCG
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/get-involved"
              className="px-5 py-2 bg-[#E8B59E] hover:bg-white text-[#0A2533] font-medium rounded-full text-sm whitespace-nowrap transition-all"
            >
              Get involved
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-2xl text-[#E8B59E]"
              aria-label="Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-[#E8B59E]/20 py-5 px-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#E8B59E]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://networkedcommonsgovernance.org/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E8B59E]"
            >
              Networked Commons Governance
            </a>
          </div>
        )}
      </nav>

      <main className="pt-[72px]">{children}</main>

      <footer className="border-t border-[#E8B59E]/10 py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-sm text-[#94A3B8]">
          <div>
            <p className="font-serif text-[#F5F0E8] text-lg mb-3">AICB</p>
            <p>
              A chartered territorial commons for Britain. Not a party. An
              institutional design that can be piloted, audited, and copied.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/model" className="hover:text-[#E8B59E]">
              Synthesised governance
            </Link>
            <Link href="/act" className="hover:text-[#E8B59E]">
              Enabling Act
            </Link>
            <Link href="/community" className="hover:text-[#E8B59E]">
              Guiting Power model
            </Link>
            <Link href="/pilots" className="hover:text-[#E8B59E]">
              Pilot candidates
            </Link>
          </div>
          <div>
            <p>
              Sister project:{" "}
              <a
                href="https://networkedcommonsgovernance.org/"
                className="text-[#E8B59E] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Networked Commons Governance
              </a>
            </p>
            <p className="mt-4">
              Power is held in trust, for a term, under a covenant — not
              captured by procedure.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
