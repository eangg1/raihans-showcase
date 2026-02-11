import { useParams, useNavigate } from "react-router-dom";
import { films } from "../data/films";

export default function FilmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const film = films.find((f) => f.id === id);

  if (!film) {
    return (
      <div className="p-10 text-center text-gray-500 dark:text-gray-400">
        Film tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline flex items-center gap-1"
      >
        ← Kembali
      </button>

      <div className="grid md:grid-cols-3 gap-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Poster */}
        <div className="relative">
          <img
            src={film.cover}
            alt={film.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black/70 text-white px-4 py-2 text-sm">
            ⭐ {film.rating} / 10
          </div>
        </div>

        {/* Detail */}
        <div className="md:col-span-2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-3">
            {film.title}
            <span className="text-gray-500 text-lg ml-2">({film.year})</span>
          </h1>

          <p className="text-gray-500 text-sm mb-3">
            🎞️ {film.genre.join(", ")} • ⏱️ {film.duration}
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {film.description}
          </p>

          <p className="text-gray-800 dark:text-gray-200 font-medium">
            🎬 Directed by{" "}
            <span className="italic text-blue-500">{film.director}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
