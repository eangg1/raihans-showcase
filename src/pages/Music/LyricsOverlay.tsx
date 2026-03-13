import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotifyLyrics from "./SpotifyLyrics";

export default function LyricsOverlay({ artist, title, cover, onClose }) {

  const [lyrics, setLyrics] = useState("Loading lyrics...");
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    async function fetchLyrics() {

      try {

        const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
        const data = await res.json();

        if (data.lyrics) setLyrics(data.lyrics);
        else setLyrics("Lyrics not found");

      } catch {
        setLyrics("Failed to load lyrics");
      }

    }

    fetchLyrics();

  }, [artist, title]);

  const togglePlay = () => {

    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);

  };

  return (
    <AnimatePresence>

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden">

          {cover && (
            <img
              src={cover}
              className="w-full h-full object-cover blur-3xl scale-125 opacity-40"
            />
          )}

          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

        </div>

        {/* Glass Panel */}
        <motion.div
          className="relative w-full max-w-4xl px-10 py-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-2xl hover:scale-110 transition"
          >
            ✕
          </button>

          {/* Song Info */}
          <div className="text-center mb-10">

            {cover && (
              <motion.img
                src={cover}
                className="w-40 h-40 rounded-2xl mx-auto mb-4 shadow-2xl"
                animate={{ scale: playing ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-300">{artist}</p>

          </div>

          {/* Audio */}
          <audio ref={audioRef} />

          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/20 rounded-full mb-8 overflow-hidden">

            <motion.div
              className="h-full bg-green-400"
              animate={{ width: playing ? "100%" : "0%" }}
              transition={{ duration: 180 }}
            />

          </div>

          {/* Lyrics */}
          <SpotifyLyrics
            lyrics={lyrics}
            audioRef={audioRef}
          />

          {/* Play Button */}
          <div className="flex justify-center mt-10">

            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              {playing ? "❚❚" : "▶"}
            </button>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}