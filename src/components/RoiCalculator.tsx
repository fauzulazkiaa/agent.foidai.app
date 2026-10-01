import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [staffCount, setStaffCount] = useState<number>(3);
  const [avgSalary, setAvgSalary] = useState<number>(4500000);
  const [automationPct, setAutomationPct] = useState<number>(50);

  // Calculations
  const monthlyLaborCost = staffCount * avgSalary;
  const yearlyLaborCost = monthlyLaborCost * 12;
  
  // Hours saved (assume 160 working hours/month/person)
  const hoursSpentPerMonth = staffCount * 160;
  const hoursSavedPerMonth = Math.round(hoursSpentPerMonth * (automationPct / 100));

  // Annual savings from repetitive task automation
  const annualSavings = Math.round(yearlyLaborCost * (automationPct / 100));

  // Benchmark package: Business Workflow (Rp 5.000.000 / year)
  const foidAiAnnualCost = 5000000;
  const netSavings = Math.max(0, annualSavings - foidAiAnnualCost);
  const roiMultiplier = ((annualSavings / foidAiAnnualCost)).toFixed(1);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const dynamicWaText = encodeURIComponent(
    `Halo Foid AI, saya telah menghitung simulasi ROI untuk ${staffCount} staf dengan estimasi penghematan ${formatRupiah(annualSavings)}/tahun. Saya ingin konsultasi implementasi Hermes Agent untuk tim saya.`
  );

  return (
    <section id="kalkulator-roi" className="py-20 sm:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Simulasi Pengembalian Investasi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Berapa Banyak Waktu dan Biaya yang Anda Hemat?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Menggunakan staf admin harian memakan biaya jutaan per bulan. Dengan investasi mulai dari Rp 5 Juta/Tahun bersama Foid AI, Hermes Agent menangani tugas berulang 24/7 tanpa henti.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-5xl mx-auto rounded-xl bg-neutral-900/50 border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Sesuaikan Parameter Operasional Tim Anda
              </h3>

              {/* Slider 1: Jumlah Staf */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="staff-range" className="text-xs sm:text-sm font-semibold text-neutral-300">
                    Jumlah Staf Admin / CS / Operasional:
                  </label>
                  <span className="font-mono text-base font-bold text-white bg-neutral-900 px-3 py-1 rounded-lg border border-neutral-700">
                    {staffCount} Orang
                  </span>
                </div>
                <input
                  id="staff-range"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={staffCount}
                  onChange={(e) => setStaffCount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-medium">
                  <span>1 Orang</span>
                  <span>10 Orang</span>
                  <span>20 Orang</span>
                </div>
              </div>

              {/* Slider 2: Gaji Rata-rata */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="salary-range" className="text-xs sm:text-sm font-semibold text-neutral-300">
                    Rata-rata Gaji per Bulan per Staf:
                  </label>
                  <span className="font-mono text-base font-bold text-orange-400 bg-neutral-900 px-3 py-1 rounded-lg border border-neutral-700">
                    {formatRupiah(avgSalary)}
                  </span>
                </div>
                <input
                  id="salary-range"
                  type="range"
                  min="2500000"
                  max="12000000"
                  step="500000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-medium">
                  <span>Rp 2,5 Juta</span>
                  <span>Rp 7 Juta</span>
                  <span>Rp 12 Juta</span>
                </div>
              </div>

              {/* Slider 3: % Tugas Berulang */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="automation-range" className="text-xs sm:text-sm font-semibold text-neutral-300">
                    Porsi Tugas Berulang yang Diotomatisasi:
                  </label>
                  <span className="font-mono text-base font-bold text-emerald-400 bg-neutral-900 px-3 py-1 rounded-lg border border-neutral-700">
                    {automationPct}% Waktu
                  </span>
                </div>
                <input
                  id="automation-range"
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={automationPct}
                  onChange={(e) => setAutomationPct(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-medium">
                  <span>20% (Ringan)</span>
                  <span>50% (Sedang)</span>
                  <span>80% (Intensif)</span>
                </div>
              </div>
            </div>

            {/* Right Display: ROI Metrics Card */}
            <div className="lg:col-span-5 rounded-xl bg-neutral-900 border border-neutral-800 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  Hasil Estimasi Penghematan
                </span>
                
                <div className="mt-3">
                  <span className="text-xs text-neutral-400 font-medium">Nilai Penghematan / Tahun:</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-orange-400 tracking-tight font-mono mt-1">
                    {formatRupiah(annualSavings)}
                  </div>
                </div>

                {/* Sub Metrics */}
                <div className="mt-6 pt-5 border-t border-neutral-800 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-neutral-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                      Waktu Dihemat:
                    </span>
                    <span className="text-lg font-bold text-white font-mono mt-0.5 block">
                      ~{hoursSavedPerMonth} Jam
                    </span>
                    <span className="text-[11px] text-neutral-500">per bulan</span>
                  </div>

                  <div>
                    <span className="text-xs text-neutral-400 flex items-center gap-1 font-medium">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      Estimasi ROI:
                    </span>
                    <span className="text-lg font-bold text-emerald-400 font-mono mt-0.5 block">
                      {roiMultiplier}x Lipat
                    </span>
                    <span className="text-[11px] text-neutral-500">vs biaya Foid AI</span>
                  </div>
                </div>

                {/* Comparative Visual Bar */}
                <div className="mt-6 p-3.5 rounded-lg bg-neutral-950 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Biaya Manual Setahun:</span>
                    <span className="font-mono text-neutral-200">{formatRupiah(yearlyLaborCost)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-orange-400 font-bold">
                    <span>Investasi Foid AI (Business):</span>
                    <span className="font-mono">Rp 5.000.000/thn</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden flex">
                    <div className="bg-neutral-600 h-full" style={{ width: `${Math.min(100, (5000000 / yearlyLaborCost) * 100)}%` }}></div>
                    <div className="bg-orange-500 h-full flex-1"></div>
                  </div>
                  <div className="text-[11px] text-neutral-400 text-right">
                    Net profit efisiensi: <strong className="text-white">{formatRupiah(netSavings)}</strong>
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="mt-6 pt-5 border-t border-neutral-800">
                <a
                  href={`https://wa.me/6282247990923?text=${dynamicWaText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 active:scale-[0.98] rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Klaim Efisiensi Ini via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
