import Link from "next/link";
import Logo from "./Logo";
import { PhoneIcon, ChatIcon, MapPinIcon } from "./Icon";
import { site, services, areasServed } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-page section-tight">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-white/75">
              {site.tagline}. Furnace, AC and hot water service for homes across Ottawa and surrounding communities.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`tel:${site.phone.tel}`} className="flex items-center gap-2 font-semibold text-white hover:text-accent-300">
                <PhoneIcon className="h-4 w-4 text-accent-300" /> {site.phone.display}
              </a>
              <a href={`sms:${site.sms.tel}`} className="flex items-center gap-2 text-white/80 hover:text-white">
                <ChatIcon className="h-4 w-4 text-accent-300" /> Text us
              </a>
              <p className="flex items-center gap-2 text-white/80">
                <MapPinIcon className="h-4 w-4 text-accent-300" /> {site.address.display}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-300">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/85 hover:text-white">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-white/85 hover:text-white">
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-300">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-white/85 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-white/85 hover:text-white">Contact</Link></li>
              <li><Link href="/quote" className="text-white/85 hover:text-white">Free Quote</Link></li>
              <li><a href={`mailto:${site.email}`} className="text-white/85 hover:text-white">{site.email}</a></li>
            </ul>
            <h4 className="mt-6 text-sm font-bold uppercase tracking-widest text-accent-300">Hours</h4>
            <ul className="mt-4 space-y-1 text-sm text-white/85">
              {site.hours.weekly.map((h) => (
                <li key={h.day}><span className="font-semibold text-white">{h.day}</span> · {h.hours}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-300">Service Area</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-white/85">
              {areasServed.slice(0, 12).map((a) => (
                <li key={a}>{a.split(" (")[0]}</li>
              ))}
            </ul>
            <h4 className="mt-6 text-sm font-bold uppercase tracking-widest text-accent-300">Licensed</h4>
            <ul className="mt-3 space-y-1 text-xs text-white/75">
              {site.licenses.map((l) => (
                <li key={l}>• {l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Serving Ottawa &amp; surrounding areas · {site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
