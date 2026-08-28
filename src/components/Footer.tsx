import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import { navItems } from '@/config/content';
import { siteConfig } from '@/config/site';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Main footer */}
      <div className="container-app py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 ring-1 ring-white/20">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" className="text-accent-300" />
                  <circle cx="12" cy="12" r="3" className="text-secondary-400" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold">Mombasa County Government</div>
                <div className="text-xs text-white/50">Digital Transformation Sub-Department</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Harnessing technology, data and innovation to transform government processes, strengthen
              accountability and improve service delivery for the people of Mombasa.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate('/solutions')}
                className="btn-secondary !py-2.5"
              >
                Explore Our Solutions
              </button>
              <button
                onClick={() => onNavigate('/brochure')}
                className="btn-ghost !py-2.5 border border-white/20 hover:bg-white/10"
              >
                Digital Brochure
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => onNavigate(item.route)}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.contact.website}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Mombasa County Government &middot; Digital Transformation Sub-Department
          </p>
          <p className="text-xs text-white/40">
            Transforming Government. Empowering People. Building a Smarter Mombasa.
          </p>
        </div>
      </div>
    </footer>
  );
}
