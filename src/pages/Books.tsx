import { books } from "../data/books";
import { useNavigate } from "react-router-dom";

type Book = {
  title: string;
  author: string;
  genre: string;
  year: number | string;
  pages: number | string;
  cover: string;
  description: string;
  isMystery?: boolean; // ← tambahkan ini
};

export default function Books() {
  const navigate = useNavigate();

  const allBooks: Book[] = [
    ...books,
    {
      title: "?",
      author: "",
      genre: "Segera Hadir",
      year: "-",
      pages: "-",
      cover: "https://media-public.canva.com/t6AXo/MAEyaLt6AXo/1/tl.png",
      description: "Temukan kisah baru di halaman selanjutnya...",
      isMystery: true,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        8 Books To Get To Know Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-6 py-6">
        {allBooks.map((book, index) => (
          <div
            key={book.title + index}
            className="book-card w-64 h-96 perspective cursor-pointer group"
          >
            <div className="book-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* DEPAN */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 bg-black/60 text-white w-full p-3 text-center">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                </div>
              </div>

              {/* BELAKANG */}
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl p-5 text-center rotate-y-180 backface-hidden shadow-xl flex flex-col justify-center items-center">
                {!book.isMystery ? (
                  <>
                    <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                      {book.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-3">
                      {book.genre}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                      Tahun Terbit:{" "}
                      <span className="font-medium">{book.year}</span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Total Halaman:{" "}
                      <span className="font-medium">{book.pages}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      “{book.description}”
                    </p>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => window.location.href = "/NextPage/index.html"}
                      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-10 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                    >
                      ?
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
