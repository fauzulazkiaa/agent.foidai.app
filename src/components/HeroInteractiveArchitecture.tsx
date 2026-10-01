import React, { useState } from 'react';
import { Server, Database, Cpu, CheckCircle2, Play, Zap, Terminal, ShieldCheck, HardDrive } from 'lucide-react';

interface SimulationScenario {
  id: string;
  name: string;
  channel: string;
  prompt: string;
  skill: string;
  logs: string[];
  response: string;
  memoryKey: string;
}

const scenarios: SimulationScenario[] = [
  {
    id: 'leads',
    name: 'Kualifikasi Prospek',
    channel: 'Telegram Webhook',
    prompt: '"Halo, saya butuh sistem CRM terintegrasi untuk 50 tim sales kami. Budget sekitar 20-30 juta."',
    skill: 'lead_qualification.md',
    memoryKey: 'crm_leads_session_881',
    logs: [
      '[Hermes-Kernel] Webhook payload parsed from Telegram Bot API',
      '[Skill-Loader] Executing custom skill: /workspace/skills/lead_qualification.md',
      '[SQLite-Memory] Fetching persistent history from /data/hermes_memory.db (0.8ms)',
      '[Hardware] AMD EPYC 7763 2.45GHz · Thread 04 active · NVMe Write 450 MB/s',
      '[Reasoning] High-intent prospect detected: Tier Enterprise (50 seats)',
      '[Action] Auto-logging lead to Google Sheets & notifying Sales Director',
    ],
    response: '✅ Prospek Terkualifikasi: Kategori High-Value ($Enterprise). Notifikasi instan terkirim ke Telegram Tim Sales & tercatat di database lokal.',
  },
  {
    id: 'support',
    name: 'Customer Support 24/7',
    channel: 'Slack Workspace',
    prompt: '"Tolong cek status pesanan invoice #INV-9821 atas nama PT Surya Nusantara."',
    skill: 'invoice_lookup.md',
    memoryKey: 'user_ctx_pt_surya',
    logs: [
      '[Hermes-Kernel] Event message received in #billing-support channel',
      '[Skill-Loader] Mounting skill: /workspace/skills/invoice_lookup.md',
      '[SQLite-Memory] Retrieved previous transaction reference from local SQLite DB',
      '[Hardware] Hostinger VPS KVM Container · RAM Usage: 1.2GB/8GB',
      '[Action] Verified payment status: LUNAS · Kurir: SiCepat (Resi 0029104)',
    ],
    response: '🤖 Hermes Agent: "Invoice #INV-9821 telah lunas. Paket telah diserahkan ke ekspedisi SiCepat (No Resi: 0029104) pukul 14:10 WIB."',
  },
  {
    id: 'reporting',
    name: 'Scheduled Cron Recap',
    channel: 'Linux Cron Daemon',
    prompt: 'Trigger: Setiap hari pukul 20:00 WIB (Automated Task)',
    skill: 'daily_sales_recap.md',
    memoryKey: 'daily_aggregate_2026',
    logs: [
      '[Systemd-Cron] Executing scheduled agent routine: /scripts/recap.sh',
      '[Skill-Loader] Executing /skills/daily_sales_recap.md with JSON aggregator',
      '[SQLite-Memory] Aggregating 1,420 transaction records from local SQLite partition',
      '[Hardware] NVMe PCIe 4.0 Read speed 3,800 MB/s · Zero network lag',
      '[Action] Summary formatted in Markdown & dispatched to Owner Private Group',
    ],
    response: '📊 Rekapitulasi Otomatis: 1,420 transaksi hari ini terverifikasi. PDF report terkirim ke grup manajemen tanpa intervensi manusia.',
  },
];

export const HeroInteractiveArchitecture: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('leads');
  const current = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <div className="w-full rounded-xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-neutral-400 ml-2 font-medium">
            hermes-agent@hostinger-vps:~/production
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Agent Online
          </span>
          <span className="text-neutral-600 hidden sm:inline">·</span>
          <span className="text-neutral-400 font-mono hidden sm:inline">AMD EPYC™ 2 vCPU</span>
        </div>
      </div>

      {/* Scenario Selector Pills */}
      <div className="px-4 sm:px-6 pt-3.5 pb-3 bg-neutral-950/80 border-b border-neutral-800/80 flex flex-wrap items-center gap-2">
        <span className="text-xs text-neutral-400 mr-2 flex items-center gap-1">
          <Play className="w-3.5 h-3.5 text-orange-500" />
          Pilih Simulasi Alur:
        </span>
        {scenarios.map((sc) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => setActiveScenarioId(sc.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeScenarioId === sc.id
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
            }`}
          >
            <span>{sc.name}</span>
          </button>
        ))}
      </div>

      {/* Main Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
        {/* Left Column: Visual Architecture Pipeline */}
        <div className="lg:col-span-6 p-4 sm:p-6 space-y-4 bg-neutral-950/50">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
            <span>Arsitektur Sistem Terisolasi</span>
            <span className="text-orange-400 font-mono lowercase">100% Private VPS</span>
          </div>

          {/* Node 1: Input Channel */}
          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 mt-0.5 border border-orange-500/20">
              <Zap className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">1. Input Inbound ({current.channel})</span>
                <span className="text-[11px] font-mono text-emerald-400">Webhook OK</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 italic line-clamp-2">
                {current.prompt}
              </p>
            </div>
          </div>

          {/* Connector Down */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-4 bg-orange-500/60"></div>
          </div>

          {/* Node 2: Hermes Agent Core + Skills */}
          <div className="p-3.5 rounded-lg bg-neutral-900 border border-orange-500/40 shadow-inner">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-orange-500 text-white mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">2. Hermes AI Engine</span>
                  <span className="text-[11px] font-mono text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">
                    {current.skill}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 mt-1">
                  Menganalisis intent & mengeksekusi custom skill tanpa halusinasi.
                </p>
              </div>
            </div>
          </div>

          {/* Connector Down */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-4 bg-emerald-500/60"></div>
          </div>

          {/* Node 3: Persistent SQLite & VPS Host */}
          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20">
              <Database className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">3. Memori Lokal (SQLite) & Hardware</span>
                <span className="text-[11px] font-mono text-neutral-500">Zero Leak</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Konteks riwayat tersimpan permanen di NVMe SSD privat Hostinger VPS.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Execution Logs & Output */}
        <div className="lg:col-span-6 p-4 sm:p-6 bg-neutral-950 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-orange-400" />
                Execution Log Trace
              </span>
              <span className="text-[11px] font-mono text-neutral-600">latency: 4.2ms</span>
            </div>

            {/* Terminal lines */}
            <div className="mt-3 space-y-2 font-mono text-[11px] sm:text-xs">
              {current.logs.map((log, idx) => (
                <div key={idx} className="text-neutral-300 flex items-start gap-2">
                  <span className="text-orange-500 select-none">&gt;</span>
                  <span className={log.includes('Hardware') ? 'text-amber-400' : log.includes('Action') ? 'text-emerald-400' : 'text-neutral-300'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Result Output Card */}
          <div className="mt-4 p-3.5 rounded-lg bg-neutral-900 border border-orange-500/30">
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Hasil Eksekusi Agent</span>
            </div>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              {current.response}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Specs Strip */}
      <div className="px-4 py-3 bg-neutral-900 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <Server className="w-3.5 h-3.5 text-orange-400" />
            Hostinger KVM VPS
          </span>
          <span className="flex items-center gap-1.5 text-neutral-300">
            <HardDrive className="w-3.5 h-3.5 text-neutral-400" />
            Pure NVMe Storage
          </span>
          <span className="flex items-center gap-1.5 text-neutral-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            100% Data Terisolasi
          </span>
        </div>
        <span className="text-[11px] text-orange-400/80 font-mono">
          Ready to deploy in ~24 Jam
        </span>
      </div>
    </div>
  );
};
