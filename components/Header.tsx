"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { PhoneIcon, MenuIcon, XIcon } from "./Icon";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label="613 HVAC home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/quote"
            className="hidden lg:inline-flex btn-outline-dark px-4 py-2 text-sm"
          >
            Free Quote
          </Link>
          <a
            href={`tel:${site.phone.tel}`}
            className="hidden sm:inline-flex btn-primary px-4 py-2 text-sm"
            aria-label={`Call ${site.phone.display}`}
          >
            <PhoneIcon className="h-4 w-4" />
            <span>{site.phone.display}</span>
          </a>
          <a
            href={`tel:${site.phone.tel}`}
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-white"
            aria-label={`Call ${site.phone.display}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3 text-base font-semibold text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="py-3 text-base font-semibold text-brand"
            >
              Get a Free Quote →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
