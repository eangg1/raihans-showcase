import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotifyLyrics from "./SpotifyLyrics";
import { useRef } from "react";
const audioRef = useRef();

<audio
  ref={audioRef}
  controls
  className="w-full mb-6"
  src={song.audio}
/>



export default function LyricsOverlay({ artist, title, cover, onClose }) {
  const [lyrics, setLyrics] = useState("Loading lyrics...");
  const lyricRef = useRef(null);

  useEffect(() => {
    async function fetchLyrics() {
      try {
        const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
        const data = await res.json();

        if (data.lyrics) {
          setLyrics(data.lyrics);
        } else {
          setLyrics("Lyrics not found.");
        }
      } catch {
        setLyrics("Failed to load lyrics.");
      }
    }

    fetchLyrics();
  }, [artist, title]);

  useEffect(() => {
    if (!lyricRef.current) return;

    let scroll = 0;
    const el = lyricRef.current;

    const interval = setInterval(() => {
      scroll += 1;
      el.scrollTo({
        top: scroll,
        behavior: "smooth",
      });
    }, 120);

    return () => clearInterval(interval);
  }, [lyrics]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={onClose}
        />

        {/* Content */}
        <motion.div
          className="relative w-full max-w-4xl px-6 py-8 text-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white text-xl"
          >
            ✕
          </button>

          {/* Song Info */}
          <div className="text-center mb-6">
            {cover && (
              <img
                src={cover}
                className="w-32 h-32 object-cover rounded-xl mx-auto mb-4 shadow-xl"
              />
            )}

            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-400">{artist}</p>
          </div>

          {/* Player */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-6">
            <iframe
              className="w-full h-56"
              src={`https://www.youtube.com/embed?listType=search&list=${artist} ${title}`}
              allow="autoplay"
            />
          </div>

          {/* Lyrics */}
          <div
            ref={lyricRef}
            className="h-80 overflow-hidden text-center text-lg leading-relaxed text-gray-200"
          >
            <pre className="whitespace-pre-wrap">{lyrics}</pre>
          </div>

          <SpotifyLyrics
            lyrics={song.lyrics}
            audioRef={audioRef}
            />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}