import React, { useState } from 'react';
import { Cpu, ShieldCheck, Database, Wrench, CheckCircle, Code2, Server, ArrowRight } from 'lucide-react';

interface SkillExample {
  title: string;
  filename: string;
  trigger: string;
  action: string;
}

const skillExamples: SkillExample[] = [
  {
    title: 'CRM Lead Qualification',
    filename: 'crm_qualification.md',
    trigger: 'Inbound chat Telegram / WhatsApp Webhook',
    action: 'Filter prospek berdasarkan budget, klasifikasikan tier, lalu simpan ke database CRM internal.',
  },
  {
    title: 'Automated Invoice Reconciliation',
    filename: 'invoice_check.md',
    trigger: 'Perintah di Slack #finance-bot',
    action: 'Kueri status pembayaran ke Payment Gateway via REST API dan update status transaksi.',
  },
  {
    title: 'Scheduled Cron Recap',
    filename: 'cron_recap.md',
    trigger: 'Linux crontab (Pukul 21:00 WIB)',
    action: 'Tarik log penjualan harian dari SQLite, generate PDF ringkasan, kirim ke email eksekutif.',
  },
];

export const Features: React.FC = () => {
  const [activeSkillIdx, setActiveSkillIdx] = useState(0);
  const activeSkill = skillExamples[activeSkillIdx];

  return (
    <section id="fitur" className="py-20 sm:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <p className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">
            Inovasi AI & Infrastruktur
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Kenapa Memilih Jasa Setup Foid AI?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Kami menggabungkan kapabilitas Hermes AI Agent yang adaptif dengan performa hardware Hostinger VPS enterprise untuk memberikan otomatisasi tanpa kompromi.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1: Hermes Agent Berbasis Skill (col-span-12 lg:col-span-7) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-xl bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Hermes Agent Berbasis Skill
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                AI yang tidak hanya menjawab, tapi mengeksekusi tugas spesifik bisnis Anda melalui integrasi API. Kustomisasi alur kerja menggunakan file skill Markdown modular.
              </p>

              {/* Interactive Skill Showcase */}
              <div className="mt-6 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-neutral-800">
                  <span className="font-mono flex items-center gap-1.5 text-orange-400 font-semibold">
                    <Code2 className="w-4 h-4" />
                    /workspace/skills/
                  </span>
                  <div className="flex gap-1.5">
                    {skillExamples.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveSkillIdx(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          activeSkillIdx === i ? 'bg-orange-500 w-6' : 'bg-neutral-700'
                        }`}
                        aria-label={`Skill example ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-white text-sm">
                      {activeSkill.title}
                    </span>
                    <span className="text-[11px] font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 font-semibold">
                      {activeSkill.filename}
                    </span>
                  </div>
                  <div className="text-xs space-y-1.5 text-neutral-300">
                    <p>
                      <strong className="text-neutral-400">Trigger:</strong> {activeSkill.trigger}
                    </p>
                    <p>
                      <strong className="text-neutral-400">Aksi Otomatis:</strong> {activeSkill.action}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>Mendukung Webhook, Python & REST API</span>
              <span className="text-orange-500 font-bold">
                Custom Skill Setup Included
              </span>
            </div>
          </div>

          {/* Card 2: 100% Data Privacy (Terisolasi) (col-span-12 lg:col-span-5) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-xl bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                100% Data Privacy (Terisolasi)
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                AI berjalan di VPS privat milik Anda. Tidak ada data perusahaan yang bocor ke pihak ketiga atau digunakan untuk melatih model publik.
              </p>

              {/* Privacy Architecture Checklist */}
              <div className="mt-6 space-y-2.5">
                {[
                  'Private KVM Virtualization Container',
                  'Dedicated IP & Custom Firewall Rules',
                  'Data pelanggan tersimpan di volume privat',
                  'Full Root SSH access ada di tangan Anda',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-500">
              Keamanan setara infrastruktur internal enterprise
            </div>
          </div>

          {/* Card 3: Infrastruktur Kelas Enterprise (col-span-12 lg:col-span-5) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-xl bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Infrastruktur Kelas Enterprise
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Didukung oleh teknologi partner (Hostinger). Kami menggunakan prosesor AMD EPYC terdepan industri dan penyimpanan NVMe SSD untuk respon AI super cepat.
              </p>

              {/* Hardware stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center">
                  <div className="text-lg font-bold text-white font-mono">AMD EPYC™</div>
                  <div className="text-xs text-neutral-400 mt-0.5 font-medium">High Clock Frequency</div>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center">
                  <div className="text-lg font-bold text-orange-400 font-mono">NVMe SSD</div>
                  <div className="text-xs text-neutral-400 mt-0.5 font-medium">Hingga 3,800 MB/s</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                <Server className="w-3.5 h-3.5 text-orange-500" />
                Hostinger VPS Network
              </span>
              <span className="text-emerald-400 font-bold font-mono">99.99% SLA Uptime</span>
            </div>
          </div>

          {/* Card 4: Memori Jangka Panjang (col-span-12 lg:col-span-7) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-xl bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Memori Jangka Panjang (Persistent SQLite)
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Agent mengingat percakapan sebelumnya menggunakan database SQLite internal, menciptakan interaksi yang berkelanjutan tanpa kehilangan konteks pelanggan Anda.
              </p>

              {/* Memory visual comparison */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300">
                  <div className="font-bold text-rose-400 mb-1">AI Chatbot Standar:</div>
                  <p className="text-neutral-400 leading-normal">
                    Lupa konteks setelah sesi berakhir. User harus berulang kali menginput nama, pesanan, dan preferensi bisnis.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-orange-500/30 text-white">
                  <div className="font-bold text-orange-400 mb-1">Hermes AI di Foid AI:</div>
                  <p className="text-neutral-300 leading-normal">
                    Tersimpan permanen di SQLite. Agent otomatis mengenali pelanggan lama, nomor pesanan, dan riwayat instruksi.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>Kueri cepat di level mikrodetik</span>
              <a
                href="#harga"
                className="text-orange-500 hover:text-orange-400 font-bold inline-flex items-center gap-1 transition-colors"
              >
                Pilih Paket Sesuai Kebutuhan <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
