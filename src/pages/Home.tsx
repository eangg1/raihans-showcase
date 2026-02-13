import { Download, Folder, Mail, User, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 px-6 py-2">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Halo, Saya Raihan Dwi Saputra 👋
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Saya adalah lulusan bisnis daring dan pemasaran yang memiliki pengalaman di bidang operasional, administrasi, manajemen inventaris, serta pelayanan pelanggan. terbiasa bekerja dalam tim, mengelola banyak tugas sekaligus, dan menjaga ketelitian dalam pekerjaan. memiliki kemampuan kepemimpinan, manajemen waktu, serta mampu beradaptasi di lingkungan kerja yang dinamis. terbuka untuk peluang kerja, freelance, dan kolaborasi proyek.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
