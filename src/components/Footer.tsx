import React, { useState } from 'react';
import { MessageSquare, ExternalLink, ShieldCheck, X, Send, Check } from 'lucide-react';
import { FoidLogo, FoidBrainIcon } from './FoidLogo';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-black text-neutral-400 text-xs sm:text-sm border-t border-neutral-900 overflow-hidden">
      {/* Background Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 z-10">
        {/* Newsletter Section */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Langganan Buletin Foid AI
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400">
              Dapatkan pembaruan rilis custom skills Hermes, panduan otomasi bisnis, dan tips optimasi Hostinger VPS setiap bulan.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex-1 max-w-md">
            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>Terima kasih! Anda telah terdaftar di buletin Foid AI.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Masukkan email bisnis Anda..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Langganan</span>
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Multi-Column Structural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <FoidLogo iconSize="w-10 h-10" textSize="text-2xl" showDomain={true} />
              <span className="text-xs text-neutral-500 font-medium block mt-1">
                by Fdesign Indonesia
              </span>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Penyedia jasa setup, integrasi, dan pemeliharaan Hermes AI Agent profesional di VPS berkinerja tinggi. Berikan bisnis Anda keunggulan otomatisasi mandiri 24/7 dengan privasi data terlindungi.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Infrastruktur server didukung oleh jaringan Hostinger VPS.</span>
            </div>
          </div>

          {/* Produk & Solusi */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Produk & Solusi</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#fitur" className="hover:text-white transition-colors">
                  Hermes Agent Berbasis Skill
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-white transition-colors">
                  Paket KVM 1, KVM 2 & KVM 4
                </a>
              </li>
              <li>
                <a href="#kalkulator-roi" className="hover:text-white transition-colors">
                  Kalkulator Simulasi ROI
                </a>
              </li>
              <li>
                <a href="#infrastruktur" className="hover:text-white transition-colors">
                  Spesifikasi AMD EPYC & NVMe
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Tanya Jawab
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Legalitas */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Kontak & Legalitas</h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href="https://wa.me/6282247990923?text=Halo%20Foid%20AI,%20saya%20ingin%20konsultasi%20mengenai%20jasa%20setup%20AI%20Agent."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-bold group"
              >
                <MessageSquare className="w-4 h-4 text-orange-500 fill-orange-500/20" />
                <span>WhatsApp: 0822-4799-0923</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href="https://foidai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Domain Resmi: <strong className="text-white">foidai.app</strong>
              </a>

              <div className="pt-2 flex flex-col gap-1.5 text-xs text-neutral-500">
                <button
                  type="button"
                  onClick={() => setActiveModal('terms')}
                  className="text-left hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Syarat & Ketentuan Layanan
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="text-left hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Kebijakan Privasi Data
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-14 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Foid AI (by Fdesign Indonesia). Seluruh hak cipta dilindungi.</p>
          <p className="text-neutral-500">
            Infrastruktur server didukung oleh jaringan Hostinger VPS.
          </p>
        </div>

        {/* Teks Logo Berukuran Sangat Besar (Efek Watermark) di Latar Belakang Paling Bawah */}
        <div className="relative mt-12 select-none pointer-events-none overflow-hidden flex items-center justify-center gap-3 sm:gap-6 opacity-35">
          <FoidBrainIcon className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 text-neutral-800 shrink-0" />
          <span className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter text-neutral-800 leading-none">
            FOID
          </span>
        </div>
      </div>

      {/* Modal Dialog for Terms / Privacy */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8 shadow-2xl text-white relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'terms' ? (
              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <h3 className="text-xl font-bold text-white">Syarat & Ketentuan Layanan</h3>
                <p>
                  1. <strong>Cakupan Layanan:</strong> Foid AI menyediakan konfigurasi teknis sistem Hermes AI Agent, penyediaan virtual private server (Hostinger VPS), setup Docker container, konfigurasi memori persisten SQLite, dan penyambungan bot (Slack/Telegram).
                </p>
                <p>
                  2. <strong>Akun API Model LLM:</strong> Biaya token API pihak ketiga (seperti OpenAI, Anthropic, Google Gemini) menjadi kewajiban dan tagihan langsung ke akun API milik klien.
                </p>
                <p>
                  3. <strong>Waktu Pengerjaan:</strong> Pengerjaan standar dilakukan dalam waktu 24-48 jam kerja setelah konfirmasi kebutuhan dan pemberian akses token bot oleh klien.
                </p>
                <p>
                  4. <strong>Dukungan Teknis:</strong> Paket Business dan Enterprise mencakup prioritas bantuan teknis bila terjadi kendala pada server VPS maupun konfigurasi alur kerja AI.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <h3 className="text-xl font-bold text-white">Kebijakan Privasi Data</h3>
                <p>
                  1. <strong>Isolasi Data:</strong> Setiap AI Agent dideploy pada Virtual Private Server (VPS) yang terisolasi dengan KVM virtualization. Tidak ada data percakapan yang dicampur antar klien.
                </p>
                <p>
                  2. <strong>Memori Lokal:</strong> Riwayat percakapan dan konteks pelanggan disimpan di database SQLite internal yang berada di storage NVMe milik klien secara privat.
                </p>
                <p>
                  3. <strong>Tanpa Pelatihan Model:</strong> Data obrolan, kontak leads, dan instruksi bisnis Anda tidak pernah digunakan untuk melatih model AI publik mana pun.
                </p>
                <p>
                  4. <strong>Kunci Enkripsi & Akses:</strong> Klien pada paket tertentu memegang Full Root SSH Access ke VPS mereka sendiri dan berhak mencabut kredensial kapan saja.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-neutral-800 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold"
              >
                Tutup Dokumen
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
