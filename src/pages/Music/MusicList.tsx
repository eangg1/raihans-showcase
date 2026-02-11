import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { musicData } from "../../data/musicData";


export default function MusicList() {
  return (
    <div className="text-gray-900 dark:text-gray-100 sm:px-12 lg:px-20 px-6 py-6">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        My Top Artists
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {musicData.map((artist, index) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            <Link
              to={`/music/${artist.id}`}
              className="group block rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 hover:shadow-2xl hover:scale-[1.03] transform transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={artist.cover}
                  alt={`${artist.name} Cover`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ filter: "brightness(0.8)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                  <span className="text-white text-sm font-semibold tracking-wide">
                    View Songs
                  </span>
                </div>
              </div>

              {/* 👤 Artist Info */}
              <div className="p-4 text-center">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-2 border-white shadow-md"
                />
                <h2 className="text-lg font-semibold group-hover:text-blue-500 transition-colors duration-300">
                  {artist.name}
                </h2>
                <p className="text-sm text-gray-500">{artist.genre}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
