import Link from "next/link";
import { PhoneIcon, ChatIcon, ClipboardIcon } from "./Icon";
import { site } from "@/lib/site";

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-black/10 bg-white shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.18)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${site.phone.tel}`}
        className="flex items-center justify-center gap-2 bg-accent py-4 text-sm font-bold text-white active:bg-accent-600"
        aria-label={`Call ${site.phone.display}`}
      >
        <PhoneIcon className="h-5 w-5" /> Call
      </a>
      <a
        href={`sms:${site.sms.tel}`}
        className="flex items-center justify-center gap-2 bg-brand py-4 text-sm font-bold text-white active:bg-brand-800"
        aria-label={`Text ${site.sms.display}`}
      >
        <ChatIcon className="h-5 w-5" /> Text
      </a>
      <Link
        href="/quote"
        className="flex items-center justify-center gap-2 bg-ink py-4 text-sm font-bold text-white active:bg-slate-800"
        aria-label="Request a free quote"
      >
        <ClipboardIcon className="h-5 w-5" /> Quote
      </Link>
    </div>
  );
}
