import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { FoidLogo } from './FoidLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fitur Utama', href: '#fitur' },
    { label: 'Spesifikasi & Harga', href: '#harga' },
    { label: 'Kalkulator ROI', href: '#kalkulator-roi' },
    { label: 'Infrastruktur', href: '#infrastruktur' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 shadow-xl shadow-black/40 py-3.5'
          : 'bg-neutral-950/60 backdrop-blur-sm py-4 border-b border-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Resmi FOID AI di Kiri */}
          <a
            href="https://foidai.app"
            className="group transition-opacity"
            title="Foid AI (foidai.app)"
          >
            <FoidLogo iconSize="w-8 h-8" textSize="text-xl" showDomain={true} />
          </a>

          {/* Tautan Menu di Tengah */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-orange-500 decoration-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tombol Call to Action (CTA) Oranye di Kanan */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6282247990923?text=Halo%20Foid%20AI,%20saya%20ingin%20konsultasi%20mengenai%20jasa%20setup%20AI%20Agent."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 active:scale-[0.98] rounded-xl shadow-lg shadow-orange-500/25 transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Konsultasi WA</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white lg:hidden rounded-lg hover:bg-neutral-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-2 border-t border-neutral-800 bg-neutral-900 rounded-xl p-4 shadow-2xl">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-800">
                <a
                  href="https://wa.me/6282247990923?text=Halo%20Foid%20AI,%20saya%20ingin%20konsultasi%20mengenai%20jasa%20setup%20AI%20Agent."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-xl shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Tim via WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
