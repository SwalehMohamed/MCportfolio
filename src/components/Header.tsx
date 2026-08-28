import { useEffect, useState } from 'react';
import { Menu, X, Monitor } from 'lucide-react';
import { navItems } from '@/config/content';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onEnterExhibition: () => void;
}

export function Header({ currentRoute, onNavigate, onEnterExhibition }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentRoute]);

  const handleNav = (route: string) => {
    onNavigate(route);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-950/95 backdrop-blur-md shadow-lg shadow-primary-950/20'
          : 'bg-primary-950/70 backdrop-blur-sm'
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden border-b border-white/10 lg:block">
        <div className="container-app flex h-9 items-center justify-between text-xs text-white/60">
          <span className="font-medium tracking-wide">
            MOMBASA COUNTY GOVERNMENT &middot; DIGITAL TRANSFORMATION SUB-DEPARTMENT
          </span>
          <button
            onClick={onEnterExhibition}
            className="flex items-center gap-1.5 text-white/60 transition-colors hover:text-accent-300"
          >
            <Monitor className="h-3.5 w-3.5" />
            Exhibition Mode
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-app flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home page"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 ring-1 ring-white/20">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" className="text-accent-300" />
              <circle cx="12" cy="12" r="3" className="text-secondary-400" fill="currentColor" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold leading-tight text-white">Mombasa County</div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-white/50">
              Digital Transformation
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.route === '/'
                ? currentRoute === '/'
                : currentRoute === item.route || currentRoute.startsWith(item.route + '/');
            return (
              <button
                key={item.route}
                onClick={() => handleNav(item.route)}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-400" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-primary-950 lg:hidden">
          <div className="container-app flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const isActive =
                item.route === '/'
                  ? currentRoute === '/'
                  : currentRoute === item.route || currentRoute.startsWith(item.route + '/');
              return (
                <button
                  key={item.route}
                  onClick={() => handleNav(item.route)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                onEnterExhibition();
                setMobileOpen(false);
              }}
              className="mt-2 flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 text-left text-sm font-medium text-accent-300 transition-colors hover:bg-white/10"
            >
              <Monitor className="h-4 w-4" />
              Exhibition Mode
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
