import { useState } from "react";
import { films } from "../data/films";
import { motion, AnimatePresence } from "framer-motion";


export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState<typeof films[0] | null>(null);

  // pisahkan berdasarkan kategori sederhana
  const movies = films.filter(
    (f) => !f.duration.toLowerCase().includes("episode")
  );
  const series = films.filter((f) =>
    f.duration.toLowerCase().includes("episode")
  );

  return (
    <div className="px-6 py-10 space-y-20">
      {/* ======= MOVIES ======= */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">🎬 Movies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {movies.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFilm(film)}
              className="group w-64 cursor-pointer rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-80">
                <img
                  src={film.cover}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {film.genre.join(", ")} • {film.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======= SERIES ======= */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">📺 Series</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {series.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFilm(film)}
              className="group w-64 cursor-pointer rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-80">
                <img
                  src={film.cover}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {film.genre.join(", ")} • {film.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======= POPUP DETAIL ======= */}
      <AnimatePresence>
        {selectedFilm && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFilm(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden grid md:grid-cols-2"
            >
              {/* KIRI - COVER */}
              <div className="relative flex items-center justify-center">
                <img
                  src={selectedFilm.cover}
                  alt={selectedFilm.title}
                  className="w-full h-[620px] object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => setSelectedFilm(null)}
                    className="bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
                  >
                    ✕
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-2 text-sm rounded-tr-lg">
                  ⭐ {selectedFilm.rating} / 10
                </div>
              </div>


              {/* KANAN - DETAIL */}
              <div className="p-6 flex flex-col justify-center">
                <h1 className="text-2xl font-bold mb-2">
                  {selectedFilm.title}{" "}
                  <span className="text-gray-500 text-lg">
                    ({selectedFilm.year})
                  </span>
                </h1>
                <p className="text-gray-500 text-sm mb-2">
                  🎞️ {selectedFilm.genre.join(", ")} • ⏱️ {selectedFilm.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {selectedFilm.description}
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  🎬 Directed by{" "}
                  <span className="italic text-blue-500">
                    {selectedFilm.director}
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
