import React, { useState } from 'react';
import { MessageSquare, ArrowRight, Check, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { HostingerVpsGraphic } from './HostingerVpsGraphic';
import { HeroInteractiveArchitecture } from './HeroInteractiveArchitecture';
import { FoidBrainIcon } from './FoidLogo';

export const Hero: React.FC = () => {
  const [showLiveTerminal, setShowLiveTerminal] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-neutral-950 text-white overflow-hidden border-b border-neutral-900">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-orange-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-neutral-900/80 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Kolom Kiri: Headline tebal, teks sub-deskripsi, grup dua tombol */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* The Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 shadow-sm">
              <FoidBrainIcon className="w-4 h-4 text-orange-500 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-neutral-300">
                Layanan Eksklusif dari <strong className="text-white">Foid AI</strong> (foidai.app)
              </span>
            </div>

            {/* Headline Tebal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
              Otomatisasi Bisnis Anda dengan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-orange-500">
                Hermes AI Agent
              </span>
              , Ditenagai oleh Infrastruktur Premium.
            </h1>

            {/* Teks Sub-deskripsi */}
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl">
              Tingkatkan efisiensi tim dengan AI Agent cerdas yang memiliki memori persisten dan custom skills. Berjalan aman secara privat di High-Performance VPS (NVMe & AMD EPYC).
            </p>

            {/* Grup Dua Tombol (Tombol primer oranye, tombol sekunder outline) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Tombol primer oranye */}
              <a
                href="https://wa.me/6282247990923?text=Halo%20Foid%20AI,%20saya%20ingin%20konsultasi%20mengenai%20jasa%20setup%20AI%20Agent."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-white bg-orange-500 hover:bg-orange-600 active:scale-[0.98] rounded-xl shadow-lg shadow-orange-500/25 transition-all text-center cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span>Konsultasi & Pesan via WhatsApp</span>
              </a>

              {/* Tombol sekunder outline */}
              <a
                href="#harga"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white hover:text-orange-400 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-all text-center"
              >
                <span>Lihat Spesifikasi & Paket</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-neutral-400 border-t border-neutral-900">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-neutral-300">99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-neutral-300">AMD EPYC™ Gen 4</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-neutral-300">100% Data Terisolasi</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Visualisasi berupa mockup antarmuka atau panel kode/dashboard */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <HostingerVpsGraphic />

            {/* Live Terminal Drawer Button */}
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowLiveTerminal(!showLiveTerminal)}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-neutral-400 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5 text-orange-400" />
                <span>{showLiveTerminal ? 'Tutup Simulasi Log Agent' : 'Buka Simulasi Log Hermes AI'}</span>
                {showLiveTerminal ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Live Terminal Drawer */}
        {showLiveTerminal && (
          <div className="mt-12 max-w-4xl mx-auto">
            <HeroInteractiveArchitecture />
          </div>
        )}
      </div>
    </section>
  );
};
