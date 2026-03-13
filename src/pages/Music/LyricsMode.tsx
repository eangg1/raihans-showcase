import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function LyricMode() {
  const { artist, title } = useParams();
  const [lyrics, setLyrics] = useState("Loading lyrics...");
  const lyricRef = useRef(null);

  const decodedArtist = decodeURIComponent(artist);
  const decodedTitle = decodeURIComponent(title);

  useEffect(() => {
    async function fetchLyrics() {
      try {
        const res = await fetch(
          `https://api.lyrics.ovh/v1/${decodedArtist}/${decodedTitle}`
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
  }, [decodedArtist, decodedTitle]);

  useEffect(() => {
    if (!lyricRef.current) return;

    const el = lyricRef.current;

    let scroll = 0;

    const interval = setInterval(() => {
      scroll += 1;
      el.scrollTo({
        top: scroll,
        behavior: "smooth",
      });
    }, 150);

    return () => clearInterval(interval);
  }, [lyrics]);

  return (
    <div className="min-h-screen relative overflow-hidden text-white">

      {/* Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-10">

        <Link
          to="/music"
          className="text-sm text-gray-300 hover:text-white"
        >
          ← Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6"
        >
          <h1 className="text-4xl font-bold">{decodedTitle}</h1>
          <p className="text-gray-400 mt-2">{decodedArtist}</p>
        </motion.div>

        {/* Player */}
        <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64"
            src={`https://www.youtube.com/embed?listType=search&list=${decodedArtist} ${decodedTitle}`}
            allow="autoplay"
          />
        </div>

        {/* Lyrics */}
        <div
          ref={lyricRef}
          className="mt-10 h-80 overflow-hidden text-center text-lg leading-relaxed text-gray-200"
        >
          <pre className="whitespace-pre-wrap">
            {lyrics}
          </pre>
        </div>
      </div>
    </div>
  );
}