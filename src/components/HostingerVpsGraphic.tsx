import React, { useState } from 'react';
import { Sparkles, Terminal, Activity, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export const HostingerVpsGraphic: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'KVM 1' | 'KVM 2' | 'KVM 4'>('KVM 4');

  const tierData = {
    'KVM 1': {
      hostname: 'srv102914.hstgr.cloud',
      cpu: '24%',
      memory: '41%',
      incoming: '48.2 Mb/s',
      outgoing: '92.5 Mb/s',
      vcpu: '1 vCPU AMD EPYC',
    },
    'KVM 2': {
      hostname: 'srv284910.hstgr.cloud',
      cpu: '36%',
      memory: '28%',
      incoming: '85.4 Mb/s',
      outgoing: '184.2 Mb/s',
      vcpu: '2 vCPU AMD EPYC',
    },
    'KVM 4': {
      hostname: 'srv476737.hstgr.cloud',
      cpu: '45%',
      memory: '32%',
      incoming: '124.8 Mb/s',
      outgoing: '312.4 Mb/s',
      vcpu: '4 vCPU AMD EPYC',
    },
  };

  const current = tierData[activeTier];

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Background Accent Lines */}
      <div className="absolute -top-5 -left-5 w-28 h-28 border-t-2 border-l-2 border-orange-500/50 rounded-tl-2xl pointer-events-none z-0" />
      <div className="absolute -bottom-5 -right-5 w-28 h-28 border-b-2 border-r-2 border-orange-500/50 rounded-br-2xl pointer-events-none z-0" />

      {/* Floating Top-Right Badge: AMD EPYC (From image.png) */}
      <div className="absolute -top-5 right-4 z-20">
        <div className="px-4 py-2.5 rounded-xl bg-neutral-900/95 border border-neutral-700 shadow-xl shadow-black/80 backdrop-blur-md flex items-center gap-3 hover:border-orange-500 transition-colors">
          {/* AMD Logo Vector */}
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M4 4H10V10H4V4Z" fill="#FFFFFF" />
              <path d="M14 4H20V10H14V4Z" fill="#FFFFFF" />
              <path d="M14 14H20V20H14V14Z" fill="#FFFFFF" />
              <path d="M4 14L10 14L10 20L4 20Z" fill="#FF5A00" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-black tracking-wider text-white font-sans leading-none">
              AMD
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-orange-400 leading-tight">
              EPYC
            </span>
          </div>
        </div>
      </div>

      {/* Floating Right-Edge Badge: Sparkles / AI Assistant (From image.png) */}
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
        <div className="w-11 h-11 rounded-xl bg-neutral-900/95 border border-neutral-700 shadow-xl shadow-black/80 backdrop-blur-md flex items-center justify-center text-white hover:border-orange-500 transition-colors">
          <Sparkles className="w-5 h-5 text-orange-400 fill-orange-400/20 animate-pulse" />
        </div>
      </div>

      {/* Main Hostinger VPS Dashboard Container */}
      <div className="relative z-10 rounded-xl bg-neutral-900/80 border border-neutral-800 p-5 sm:p-6 shadow-2xl backdrop-blur-xl text-white">
        {/* Row 1: Server Header (Ubuntu Logo + Hostname + KVM + Running) */}
        <div className="p-3.5 rounded-lg bg-neutral-950/70 border border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Ubuntu Emblem */}
            <div className="w-9 h-9 rounded-lg bg-[#dd4814] flex items-center justify-center shadow-md shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="12" cy="6" r="2" fill="white" />
                <circle cx="6.8" cy="15" r="2" fill="white" />
                <circle cx="17.2" cy="15" r="2" fill="white" />
              </svg>
            </div>

            <div>
              <div className="text-sm sm:text-base font-bold text-white font-mono tracking-tight flex items-center gap-2">
                <span>{current.hostname}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-neutral-400 font-medium">{activeTier}</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Running
                </span>
              </div>
            </div>
          </div>

          {/* Quick Tier Switcher */}
          <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800 text-[11px] font-mono">
            {(['KVM 1', 'KVM 2', 'KVM 4'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTier(t)}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  activeTier === t ? 'bg-orange-500 text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: OS & Application Stack Icons Strip */}
        <div className="mt-3 p-3 rounded-lg bg-neutral-950/50 border border-neutral-800 flex items-center justify-between px-4 sm:px-6 overflow-x-auto text-neutral-400">
          <div className="w-6 h-6 flex items-center justify-center hover:text-white transition-colors" title="AlmaLinux / Rocky OS">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="w-6 h-6 flex items-center justify-center hover:text-white transition-colors" title="REST API & Webhooks">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current" fill="none" strokeWidth="1.8">
              <circle cx="5" cy="12" r="3" />
              <circle cx="19" cy="6" r="3" />
              <circle cx="19" cy="18" r="3" />
              <path d="M8 12h5l3-4m-3 4l3 4" />
            </svg>
          </div>

          <div className="w-6 h-6 flex items-center justify-center hover:text-white transition-colors" title="Cloud Clustering">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current" fill="none" strokeWidth="1.8">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>

          <div className="w-6 h-6 flex items-center justify-center hover:text-white transition-colors" title="Docker Container Engine">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <rect x="5" y="7" width="2" height="2" />
              <rect x="8" y="7" width="2" height="2" />
              <rect x="11" y="7" width="2" height="2" />
              <rect x="8" y="4" width="2" height="2" />
              <rect x="11" y="4" width="2" height="2" />
              <rect x="14" y="7" width="2" height="2" />
              <path d="M21 11c-.5-.5-1.5-.5-2 0-.5-1-1.5-1.5-2.5-1.5H3c-.5 2 0 6 3 8 4 2 11 2 14-2 .5-1 .5-2 1-3.5.5-.3.8-.7 1-1Z" />
            </svg>
          </div>

          <div className="w-6 h-6 flex items-center justify-center font-bold font-mono text-sm hover:text-white transition-colors" title="cPanel / CyberPanel">
            cP
          </div>

          <div className="w-6 h-6 flex items-center justify-center hover:text-white transition-colors" title="Debian GNU/Linux">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current" fill="none" strokeWidth="1.8">
              <path d="M12 3a9 9 0 0 0-9 9c0 3 1.5 5.5 3.8 7 .5.3 1.2.2 1.4-.3.2-.5.1-1.1-.3-1.4A6.8 6.8 0 0 1 5 12a7 7 0 1 1 10.7 5.9c-.4.3-.5.9-.2 1.4.3.4.9.6 1.4.3A9 9 0 0 0 12 3Z" />
            </svg>
          </div>

          <div className="w-6 h-6 flex items-center justify-center hover:text-orange-400 transition-colors" title="Hermes AI Agent Core">
            <Sparkles className="w-4 h-4 text-orange-400" />
          </div>

          <div className="text-neutral-600 font-bold tracking-widest text-xs">
            •••
          </div>
        </div>

        {/* Row 3: Metrics 2-Column Grid (CPU 45% & Memory 32%) */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* CPU Usage Card */}
          <div className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="font-medium">CPU usage</span>
              <Activity className="w-3.5 h-3.5 text-orange-400" />
            </div>

            <div className="flex items-baseline justify-between mt-1.5">
              <span className="text-2xl font-bold text-white font-mono">
                {current.cpu}
              </span>
              <span className="text-[11px] text-neutral-400 font-mono">
                {current.vcpu}
              </span>
            </div>

            {/* Sparkline Graphic with Orange Glow */}
            <div className="mt-1.5 h-9 w-full">
              <svg viewBox="0 0 160 40" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="cpuOrangeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF5A00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF5A00" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 32 Q 20 28, 40 30 T 80 18 T 120 22 T 160 12 L 160 40 L 0 40 Z"
                  fill="url(#cpuOrangeGrad)"
                />
                <path
                  d="M0 32 Q 20 28, 40 30 T 80 18 T 120 22 T 160 12"
                  fill="none"
                  stroke="#FF5A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="160" cy="12" r="3" fill="#ffffff" />
              </svg>
            </div>
          </div>

          {/* Memory Usage Card */}
          <div className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="font-medium">Memory usage</span>
              <Activity className="w-3.5 h-3.5 text-orange-400" />
            </div>

            <div className="flex items-baseline justify-between mt-1.5">
              <span className="text-2xl font-bold text-white font-mono">
                {current.memory}
              </span>
              <span className="text-[11px] text-emerald-400 font-mono">
                DDR5 ECC RAM
              </span>
            </div>

            {/* Sparkline Graphic */}
            <div className="mt-1.5 h-9 w-full">
              <svg viewBox="0 0 160 40" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="memOrangeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF5A00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF5A00" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 28 Q 25 35, 50 25 T 100 28 T 130 18 T 160 15 L 160 40 L 0 40 Z"
                  fill="url(#memOrangeGrad)"
                />
                <path
                  d="M0 28 Q 25 35, 50 25 T 100 28 T 130 18 T 160 15"
                  fill="none"
                  stroke="#FF5A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="160" cy="15" r="3" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 4: Network Traffic */}
        <div className="mt-3 p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 grid grid-cols-2 gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-emerald-500/20 text-emerald-400">
              <ArrowDownLeft className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[11px] text-neutral-400 block font-sans">Incoming traffic</span>
              <span className="font-bold text-white">{current.incoming}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-orange-500/20 text-orange-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[11px] text-neutral-400 block font-sans">Outgoing traffic</span>
              <span className="font-bold text-white">{current.outgoing}</span>
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <Terminal className="w-3 h-3 text-orange-400" />
            hermes-daemon active (pid 1409)
          </span>
          <span className="text-neutral-400">
            Hostinger KVM Infrastructure
          </span>
        </div>
      </div>
    </div>
  );
};
