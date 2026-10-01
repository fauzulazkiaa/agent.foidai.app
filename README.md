# Foid AI - Setup Hermes AI Agent on VPS (Landing Page)

Landing page resmi untuk **Foid AI** (`foidai.app`), penyedia jasa setup AI Agent berbasis Hermes di High-Performance VPS (AMD EPYC & NVMe SSD).

---

## 🚀 Panduan Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi penuh agar dapat langsung diakses melalui **GitHub Pages** (baik via sub-domain `username.github.io/repo` maupun custom domain `foidai.app`).

### Langkah 1: Push Kode ke GitHub
Pastikan repositori Anda telah di-push ke GitHub di branch `main` atau `master`:
```bash
git add .
git commit -m "feat: landing page foid ai with github pages support"
git push origin main
```

### Langkah 2: Aktifkan GitHub Actions di Repositori
1. Buka repositori Anda di GitHub.
2. Masuk ke tab **Settings** > **Pages** (di sidebar kiri).
3. Pada bagian **Build and deployment**:
   - Pilih **Source**: `GitHub Actions`.
4. Otomatis workflow `.github/workflows/deploy.yml` akan berjalan setiap kali Anda melakukan push ke branch `main`.

### Langkah 3: Custom Domain (Opsional: `foidai.app`)
File `public/CNAME` telah disediakan dengan isi `foidai.app`.
Jika Anda ingin menghubungkan domain sendiri:
1. Di **Settings** > **Pages** > **Custom domain**, masukkan `foidai.app`.
2. Centang **Enforce HTTPS**.
3. Di DNS provider domain Anda (Cloudflare, Namecheap, Niagahoster, dll.), arahkan DNS:
   - **Type A**:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Type CNAME** (untuk subdomain seperti `www`): `<username>.github.io`.

---

## 🛠️ Perintah Pengembangan Lokal

```bash
# Instalasi dependensi
npm install

# Menjalankan dev server di port 3000
npm run dev

# Membangun bundle produksi (output di folder /dist)
npm run build

# Menjalankan preview hasil build lokal
npm run preview
```

---

## ⚙️ Fitur & Spesifikasi Landing Page
- **Dark Mode Modern**: Menggunakan palet `bg-neutral-950` dengan aksen oranye cerah (`#FF5A00`).
- **Logo Resmi FOID**: Vektor emblem sirkuit otak (*neural network*) + tipografi tegas FOID.
- **Hero Dashboard Hostinger**: Replikasi panel server VPS Hostinger (AMD EPYC, KVM 4, CPU 45%, Memory 32%).
- **Bento Grid Fitur**: Penjelasan fitur Hermes AI Agent, isolasi data privat, memori persisten SQLite, dan AMD EPYC NVMe.
- **Tabel Harga 3 Paket**: Starter Automation, Business Workflow (*Paling Populer* dengan highlight oranye), dan Enterprise Agent.
- **Kalkulator Simulasi ROI Interaktif**: Slider dinamis untuk menghitung penghematan biaya & jam kerja.
- **FAQ Accordion & Footer**: Newsletter form, kontak WhatsApp resmi (`0822-4799-0923`), dan watermark brand.
