import { Folder } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 px-6 py-2">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center">

        <div className="max-w-3xl mx-auto text-center">

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Hi there 👋
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            this page is a small personal space where I share notes about the movies, books, and songs that accompany my daily life. a place to capture stories, impressions, and little moments of inspiration — from great films and meaningful reads to the music I enjoy while working or unwinding.

          </p>

          {/* BUTTON TO PORTFOLIO */}
          <a
            href="/portfolio"
            className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-xl
              bg-black text-white dark:bg-white dark:text-black
              font-medium
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg hover:scale-105
              active:scale-95
            "
          >
            <Folder size={18} />
            lihat portofolio
          </a>

        </div>

      </section>
    </main>
  );
}
