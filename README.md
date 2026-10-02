# Foid AI - Setup Hermes AI Agent on VPS (Landing Page)

Landing page resmi untuk **Foid AI** (`foidai.app`), penyedia jasa setup AI Agent berbasis Hermes di High-Performance VPS (AMD EPYC & NVMe SSD).

---

## ⚠️ Kenapa Landing Page Belum Tampil di GitHub Pages?

Jika halaman GitHub Pages Anda masih menampilkan **404 Not Found** atau **halaman kosong/belum muncul**, berikut adalah penyebab dan solusinya:

### 1. Pengaturan "Source" di GitHub Masih Belum Diaktifkan
Secara default, GitHub Pages **TIDAK aktif** secara otomatis sampai Anda mengaktifkannya di pengaturan repositori:
1. Buka repositori Anda di browser GitHub (`https://github.com/<username>/<repo-name>`).
2. Klik tab **Settings** (ikon gerigi di atas).
3. Di menu sidebar kiri, klik **Pages**.
4. Di bagian **Build and deployment**:
   - Cari dropdown **Source**.
   - Ubah dari *Deploy from a branch* menjadi **GitHub Actions**.
5. Buka tab **Actions** di repositori Anda. Anda akan melihat alur kerja **"Deploy to GitHub Pages"** sedang berjalan. Tunggu sekitar 1 menit hingga statusnya berubah menjadi hijau (centang ✅).
6. Link landing page Anda akan langsung aktif dan bisa dibuka!

---

### 2. Cara Alternatif (Deploy Cepat via Terminal dengan 1 Perintah)
Jika Anda tidak ingin menggunakan GitHub Actions, kami telah memasang tool `gh-pages`:
1. Di terminal lokal proyek Anda, jalankan perintah:
   ```bash
   npm run deploy
   ```
2. Perintah ini akan otomatis mem-build proyek dan mengirim hasilnya ke branch `gh-pages`.
3. Di **Settings** > **Pages**, pilih **Source: Deploy from a branch**, lalu pilih branch **gh-pages** dan folder **/ (root)**.

---

## 🚀 Langkah Deploy dari Awal ke GitHub

Jika Anda baru mengekspor kode ini dari Google AI Studio:

```bash
# 1. Inisialisasi Git
git init
git add .
git commit -m "feat: initial landing page foid ai"

# 2. Hubungkan ke repositori GitHub Anda
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git

# 3. Push kode
git push -u origin main
```

---

## 🌐 Menghubungkan Custom Domain (`foidai.app`)

Secara default project ini sekarang deploy ke URL GitHub Pages repository:
`https://fauzulazkiaa.github.io/agent.foidai.app/`.

Jika ingin memakai custom domain `foidai.app`, buat file `public/CNAME` berisi domain tersebut lalu:
1. Di repositori GitHub: **Settings** > **Pages** > **Custom domain** > masukkan `foidai.app`.
2. Centang **Enforce HTTPS**.
3. Di panel DNS penyedia domain Anda, arahkan DNS:
   - **Type A**:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Type CNAME** (untuk subdomain `www`): `<username>.github.io`.

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
