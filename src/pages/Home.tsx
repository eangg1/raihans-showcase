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

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/public/assets/CV-RAIHAN-DWI-SAPUTRA.pdf"
                download
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
              >
                <Download size={16} />
                download cv
              </a>

              <a
                href="/Projects"
                className="flex items-center gap-2 px-5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Folder size={16} />
                view projects
              </a>

             <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=raihands.j@gmail.com&su=Kontak%20dari%20Website&body=Halo%20saya%20ingin%20menghubungi%20anda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Mail size={16} />
              kontak saya
            </a>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/projects/profile.jpg"
              alt="profile"
              className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
