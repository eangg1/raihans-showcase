import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { musicData } from "../../data/musicData";
import SongPreview from "./SongPreview";

export default function ArtistSongs() {
  const { id } = useParams();
  const artist = musicData.find((a) => a.id === id);

  if (!artist)
    return (
      <div className="text-center text-red-500 text-lg py-10">
        😢 Artist not found.{" "}
        <Link to="/music" className="underline">
          Back to list
        </Link>
      </div>
    );

  return (
    <div className="text-gray-900 dark:text-gray-100 px-8 sm:px-12 lg:px-20 py-8">
     <Link
      to="/music"
      className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 border border-blue-400/60 px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
    >
      Back to Artists
    </Link>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center my-6"
      >
        <img
          src={artist.image}
          alt={artist.name}
          className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
        />
        <h1 className="text-3xl font-bold">{artist.name}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          My Top 5 Songs from {artist.name}
        </p>
      </motion.div>

      <div className="space-y-4">
        {artist.songs.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-100 dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 w-full">
              <span className="text-blue-500 font-bold w-6">{index + 1}</span>
              <img
                src={song.cover || artist.cover}
                alt={song.title}
                className="w-14 h-14 object-cover rounded-lg shadow-md"
              />
              <div>
                <p className="font-semibold">{song.title}</p>
                <p className="text-xs text-gray-500">
                  {artist.name} • {song.album ?? artist.genre}
                </p>
              </div>
            </div>

            {/* ✅ Kirim album untuk hasil iTunes yang lebih akurat */}
            <SongPreview
              artist={artist.name}
              title={song.title}
              album={song.album}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
