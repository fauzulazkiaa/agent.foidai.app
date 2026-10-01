import React, { useState } from 'react';
import { CheckCircle, MessageSquare, Zap, Server } from 'lucide-react';
import { PricingTier } from '../types';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  const tiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Starter Automation',
      idealFor: 'Ideal untuk Tim Kecil',
      yearlyPrice: 2900000,
      monthlyPrice: 250000,
      monthlySetupFee: 500000,
      yearlySavingsNote: 'Bebas Biaya Setup!',
      serverSpecs: {
        kvmTier: 'KVM 1',
        vcpu: '1 vCPU Core',
        ram: '4 GB RAM',
        storage: '50 GB NVMe Disk Space',
        bandwidth: '1 TB Bandwidth',
        networkSpeed: '300 Mb/s Network Speed',
        rootAccess: false,
      },
      aiFeatures: [
        '1 Integrasi Platform (Telegram atau Slack)',
        'Base Skills Configuration',
        'Konfigurasi Memori Lokal (SQLite)',
        'Prompt Tuning Khusus Bisnis',
        'Setup Container Docker di Hostinger VPS',
      ],
      securityFeatures: [
        'Bandwidth 1 TB & Kecepatan 300 Mb/s',
        'Perlindungan DDoS Bawaan',
        'Panduan Penggunaan Lengkap',
      ],
      waText: 'Halo Foid AI, saya tertarik menggunakan Jasa Setup AI Agent untuk paket Starter Automation.',
    },
    {
      id: 'business',
      name: 'Business Workflow',
      popular: true,
      badge: 'Paling Populer',
      idealFor: 'Pilihan Utama UKM & Perusahaan Berkembang',
      yearlyPrice: 5000000,
      monthlyPrice: 450000,
      monthlySetupFee: 1500000,
      yearlySavingsNote: 'Bebas Biaya Setup & Hemat 15%!',
      serverSpecs: {
        kvmTier: 'KVM 2',
        vcpu: '2 vCPU AMD EPYC™',
        ram: '8 GB RAM',
        storage: '100 GB NVMe Disk Space',
        bandwidth: '2 TB Bandwidth',
        networkSpeed: '300 Mb/s Network Speed',
        rootAccess: true,
      },
      aiFeatures: [
        '2 Integrasi Platform Simultan',
        'Custom Skills (Markdown Modular)',
        'Long-term Memory (Episodic Context)',
        'Scheduled Automation (Linux Cron Jobs)',
        'Integrasi Database / Google Sheets API',
      ],
      securityFeatures: [
        'Bandwidth 2 TB & Full Root Access',
        'Automated Snapshot Backups Mingguan',
        'Prioritas Bantuan Teknis 30 Hari',
      ],
      waText: 'Halo Foid AI, saya tertarik menggunakan Jasa Setup AI Agent untuk paket Business Workflow.',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Agent',
      idealFor: 'Untuk Korporasi dengan Alur Kerja Kompleks',
      yearlyPrice: 10000000,
      monthlyPrice: 900000,
      monthlySetupFee: 3000000,
      yearlySavingsNote: 'Solusi Lengkap & Bebas Setup Rp 3 Juta',
      serverSpecs: {
        kvmTier: 'KVM 4',
        vcpu: '4 vCPU AMD EPYC™',
        ram: '16 GB RAM',
        storage: '200 GB NVMe Disk Space',
        bandwidth: '4 TB Bandwidth',
        networkSpeed: '300 Mb/s Network Speed',
        rootAccess: true,
      },
      aiFeatures: [
        'Integrasi GitHub / Webhook / Internal CRM',
        'Alur Kerja Internal Kompleks & Multi-Step Logic',
        'Multi-model API Support (OpenAI / Claude / Gemini)',
        'Custom Skill Development Khusus SOP Perusahaan',
        'Dedicated IP Address Eksklusif',
      ],
      securityFeatures: [
        'AI Firewall Setup & Port Hardening',
        'Snapshot Backups Otomatis Berkala',
        'Dedicated Account Manager & SLA Support',
      ],
      waText: 'Halo Foid AI, saya mewakili perusahaan dan tertarik dengan Jasa Setup AI Agent paket Enterprise.',
    },
  ];

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="harga" className="py-20 sm:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">
            Pilihan Paket Fleksibel
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Harga & Spesifikasi Paket
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Dapatkan AI Agent pribadi yang berjalan 24/7 di VPS berkecepatan tinggi. Pilih paket tahunan untuk menikmati bebas biaya setup.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-neutral-800">
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Bayar Tahunan</span>
              <span className="text-[11px] font-extrabold text-white bg-black/30 px-2 py-0.5 rounded-md">
                Bebas Setup
              </span>
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Bayar Bulanan
            </button>
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {tiers.map((tier) => {
            const isPopular = tier.popular;
            const waHref = `https://wa.me/6282247990923?text=${encodeURIComponent(tier.waText)}`;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-xl transition-all duration-300 ${
                  isPopular
                    ? 'border-2 border-orange-500 shadow-2xl shadow-orange-500/10 bg-neutral-900/80 lg:-translate-y-2 z-10'
                    : 'border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700'
                } p-6 sm:p-8`}
              >
                {/* Popular Top Ribbon (Kartu Tengah Wajib Highlight Oranye) */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-black text-white bg-orange-500 shadow-md uppercase tracking-wider">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Title & Ideal For */}
                  <div className="border-b border-neutral-800 pb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      {tier.idealFor}
                    </p>

                    {/* Price Block */}
                    <div className="mt-5">
                      {billingCycle === 'yearly' ? (
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                              {formatRupiah(tier.yearlyPrice)}
                            </span>
                            <span className="text-xs text-neutral-400 font-semibold">/ Tahun</span>
                          </div>
                          <p className="mt-2 text-xs font-bold text-orange-400 flex items-center gap-1">
                            {tier.yearlySavingsNote}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                              {formatRupiah(tier.monthlyPrice)}
                            </span>
                            <span className="text-xs text-neutral-400 font-semibold">/ Bulan</span>
                          </div>
                          <p className="mt-2 text-xs font-semibold text-neutral-400">
                            + Biaya Setup {formatRupiah(tier.monthlySetupFee)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Server Specification Highlight */}
                  <div className="py-5 border-b border-neutral-800">
                    <div className="flex items-center justify-between text-xs font-bold text-neutral-300 uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1.5 text-orange-400">
                        <Server className="w-4 h-4" />
                        Spesifikasi Server
                      </span>
                      <span className="font-mono text-white bg-neutral-800 px-2 py-0.5 rounded text-xs font-bold">
                        {tier.serverSpecs.kvmTier}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-neutral-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                        <span><strong>vCPU:</strong> {tier.serverSpecs.vcpu}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                        <span><strong>RAM:</strong> {tier.serverSpecs.ram}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                        <span><strong>Penyimpanan:</strong> {tier.serverSpecs.storage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                        <span><strong>Jaringan:</strong> {tier.serverSpecs.bandwidth}</span>
                      </div>
                    </div>
                  </div>

                  {/* AI & Integration Features List */}
                  <div className="py-5">
                    <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-orange-500" />
                      Fitur Hermes AI & Layanan
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                      {tier.aiFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}

                      {tier.securityFeatures && tier.securityFeatures.map((sec, j) => (
                        <li key={`sec-${j}`} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{sec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tombol CTA: Solid Oranye untuk kartu populer, Outline untuk dua kartu sisi */}
                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isPopular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5'
                        : 'border border-neutral-700 hover:border-orange-500 bg-neutral-800/40 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>Pesan {tier.name.split(' ')[0]} via WA</span>
                  </a>
                  <p className="text-center text-[11px] text-neutral-500 mt-2">
                    Bebas repot, setup selesai dalam 24 jam kerja
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* API Transparency Note */}
        <div className="mt-14 p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm text-neutral-400">
          <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 shrink-0 font-bold border border-orange-500/20">
            💡 Info
          </div>
          <div>
            <strong className="text-white">Transparansi Tagihan Token API:</strong> Biaya layanan Foid AI mencakup seluruh konfigurasi, instalasi server Hostinger VPS, dan pemeliharaan alur kerja. Tagihan pemakaian token model LLM (OpenAI, Anthropic, Gemini) langsung terhubung ke akun API Anda agar kontrol batas harian dan anggaran 100% di tangan Anda.
          </div>
        </div>
      </div>
    </section>
  );
};
