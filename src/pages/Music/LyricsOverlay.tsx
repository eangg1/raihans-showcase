import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotifyLyrics from "./SpotifyLyrics";

export default function LyricsOverlay({
  artist,
  title,
  cover,
  audio,
  onClose
}) {

  const audioRef = useRef(null);
  const [lyrics, setLyrics] = useState("Loading lyrics...");
  const [bgColor, setBgColor] = useState("#000");

  useEffect(() => {
    async function fetchLyrics() {
      try {
        const res = await fetch(
          `https://api.lyrics.ovh/v1/${artist}/${title}`
        );

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

  return (
    <AnimatePresence>

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          background: `linear-gradient(180deg, ${bgColor}, #000)`
        }}
      >

        {/* blur background */}
        <div className="absolute inset-0 backdrop-blur-3xl" />

        <motion.div
          className="relative w-full max-w-3xl px-8 py-8 text-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >

          {/* close button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-2xl hover:scale-110 transition"
          >
            ✕
          </button>

          {/* cover */}
          {cover && (
            <img
              src={cover}
              className="w-40 h-40 object-cover rounded-xl mx-auto mb-6 shadow-xl"
            />
          )}

          {/* title */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              {title}
            </h1>

            <p className="text-gray-300">
              {artist}
            </p>

          </div>

          {/* audio player */}
          {audio && (
            <audio
              ref={audioRef}
              controls
              src={audio}
              className="w-full mb-8"
            />
          )}

          {/* lyrics */}
          <SpotifyLyrics
            lyrics={lyrics}
            audioRef={audioRef}
          />

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}