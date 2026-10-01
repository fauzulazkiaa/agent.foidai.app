/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { RoiCalculator } from './components/RoiCalculator';
import { TrustSignals } from './components/TrustSignals';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigasi (Navbar): Posisi sticky di atas */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section: Layout split 2 kolom pada desktop */}
        <Hero />

        {/* Grid Fitur (Bento/Feature Cards) */}
        <Features />

        {/* Tabel Harga (Pricing Section): 3 kartu hierarkis sejajar dengan highlight oranye */}
        <Pricing />

        {/* Simulasi Pengembalian Investasi (ROI Calculator) */}
        <RoiCalculator />

        {/* Trust Signals: Keandalan & Spesifikasi Server */}
        <TrustSignals />

        {/* FAQ Section: Layout vertikal accordion dengan garis pembatas tipis */}
        <Faq />
      </main>

      {/* Footer: Multi-kolom, newsletter form, watermark FOID AI raksasa */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/6282247990923?text=Halo%20Foid%20AI,%20saya%20ingin%20konsultasi%20mengenai%20jasa%20setup%20AI%20Agent."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all hover:scale-105 active:scale-95 group"
          title="Chat WhatsApp dengan Foid AI"
        >
          <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
          </div>
          <span className="hidden sm:inline font-semibold">Tanya Teknisi via WA</span>
        </a>
      </aside>
    </div>
  );
}
