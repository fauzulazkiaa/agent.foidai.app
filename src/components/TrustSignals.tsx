import React from 'react';
import { ShieldAlert, RefreshCw, Activity, Server, Lock, Cpu } from 'lucide-react';

export const TrustSignals: React.FC = () => {
  const trustItems = [
    {
      icon: Activity,
      title: 'Uptime 99.99% Dijamin',
      description: 'Server AI Anda selalu online berkat infrastruktur global yang tangguh dan redundansi jaringan Hostinger VPS.',
      badge: '99.99% SLA',
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: ShieldAlert,
      title: 'Perlindungan DDoS',
      description: 'Dilengkapi mitigasi anti-DDoS bawaan untuk melindungi trafik AI dan API endpoint Anda dari serangan berbahaya.',
      badge: 'L3 / L4 Mitigation',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-500/10 border-orange-500/20',
    },
    {
      icon: RefreshCw,
      title: 'Pencadangan Otomatis',
      description: 'Snapshot mingguan memastikan pengaturan AI, custom skills, dan memori klien tetap aman serta siap dipulihkan kapan saja.',
      badge: 'Weekly Snapshots',
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="infrastruktur" className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">
            Keandalan Tingkat Enterprise
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Fitur Tambahan Server & Jaminan Keamanan
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Didukung jaringan data center internasional Hostinger VPS dengan arsitektur komputasi modern.
          </p>
        </div>

        {/* 3 Horizontal Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} border flex items-center justify-center ${item.iconColor} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-300 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Supplementary Spec Band */}
        <div className="mt-10 p-5 rounded-xl bg-neutral-900/30 border border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-neutral-300">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-orange-500" />
            <span>Dedicated Container KVM (Kernel-based Virtual Machine)</span>
          </div>
          <span className="hidden md:inline text-neutral-700">|</span>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>AMD EPYC™ Gen 4 High Core Clock</span>
          </div>
          <span className="hidden md:inline text-neutral-700">|</span>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-orange-400" />
            <span>Full Root Access & SSH Key Pair</span>
          </div>
        </div>
      </div>
    </section>
  );
};
