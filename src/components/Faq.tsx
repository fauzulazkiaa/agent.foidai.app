import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FaqItem } from '../types';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Apakah saya butuh keahlian coding?',
      answer:
        'Tidak sama sekali. Tim teknis Foid AI yang akan menangani seluruh proses instalasi server VPS, Docker, sistem operasi Linux, hingga integrasi bot platform (Slack / Telegram). Anda dan tim tinggal memakai AI Agent yang sudah siap pakai.',
    },
    {
      question: 'Siapa yang membayar tagihan API (OpenAI / Anthropic / Gemini)?',
      answer:
        'Biaya layanan Foid AI mencakup infrastruktur VPS berkecepatan tinggi, setup Docker, sistem memori persisten SQLite, dan maintenance teknis. Tagihan token API LLM akan dihubungkan langsung ke akun API key milik Anda sendiri agar pemakaian 100% transparan dan Anda bisa membatasi limit biaya harian/bulanan sesuai anggaran.',
    },
    {
      question: 'Apakah data bisnis dan percakapan saya aman?',
      answer:
        'Sangat aman. Hermes Agent di-deploy di dalam container terisolasi pada VPS Hostinger privat milik Anda. Seluruh riwayat memori percakapan disimpan secara lokal menggunakan database internal (SQLite) di storage NVMe Anda. Data tidak pernah dibagikan ke pihak ketiga atau digunakan untuk melatih model publik.',
    },
    {
      question: 'Berapa lama proses setup hingga AI Agent siap digunakan?',
      answer:
        'Estimasi pengerjaan adalah 24 hingga 48 jam kerja setelah kami mengonfirmasi alur kerja, token bot Telegram/Slack, serta instruksi custom skills yang Anda inginkan.',
    },
    {
      question: 'Bisakah saya upgrade spesifikasi VPS jika kebutuhan bisnis bertambah?',
      answer:
        'Tentu saja. Karena kami menggunakan Hostinger VPS KVM dengan virtualisasi dinamis, Anda dapat melakukan upgrade dari KVM 1 ke KVM 2 atau KVM 4 kapan saja tanpa perlu membangun ulang konfigurasi AI Agent Anda dari awal.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tanya Jawab
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Segala hal yang perlu Anda ketahui tentang implementasi Hermes AI Agent di Hostinger VPS privat.
          </p>
        </div>

        {/* Accordion List: Layout vertikal dipisahkan oleh garis pembatas horizontal tipis (garis bawah) */}
        <div className="border-t border-neutral-800 divide-y divide-neutral-800">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-2 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-orange-400' : 'text-white group-hover:text-neutral-200'
                  }`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-orange-500 text-white' : 'bg-neutral-900 text-neutral-400 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-3 text-neutral-400 text-xs sm:text-sm leading-relaxed pr-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-white text-base sm:text-lg">
              Masih punya pertanyaan spesifik?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Konsultasikan alur kerja bisnis Anda langsung dengan teknisi Foid AI.
            </p>
          </div>
          <a
            href="https://wa.me/6282247990923?text=Halo%20Foid%20AI,%20saya%20punya%20pertanyaan%20spesifik%20mengenai%20setup%20Hermes%20Agent."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-md shrink-0 transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
