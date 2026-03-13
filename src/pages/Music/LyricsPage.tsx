import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LyricsPage() {
  const { artist, title } = useParams();
  const [lyrics, setLyrics] = useState("Loading lyrics...");

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
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-900 dark:text-gray-100">
      <Link
        to="/music"
        className="text-blue-500 underline mb-4 inline-block"
      >
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-2">{decodeURIComponent(title)}</h1>
      <p className="text-gray-500 mb-6">{decodeURIComponent(artist)}</p>

      {/* Music Player */}
      <iframe
        className="w-full h-64 mb-6 rounded-xl"
        src={`https://www.youtube.com/embed?listType=search&list=${artist} ${title}`}
        allow="autoplay"
      />

      {/* Lyrics */}
      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
        {lyrics}
      </pre>
    </div>
  );
}