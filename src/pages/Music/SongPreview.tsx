import { useEffect, useState } from "react";

interface SongPreviewProps {
  artist: string;
  title: string;
  album?: string;
}

interface iTunesResult {
  previewUrl?: string;
  artworkUrl100?: string;
  trackName?: string;
  collectionName?: string;
  artistName?: string;
}

export default function SongPreview({ artist, title, album }: SongPreviewProps) {
  const [preview, setPreview] = useState<iTunesResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const query = encodeURIComponent(`${artist} ${album ?? ""} ${title}`);
        const res = await fetch(
          `https://itunes.apple.com/search?term=${query}&entity=song&limit=10`
        );
        const data = await res.json();

        // 🔍 Filter hasil yang paling relevan
        const matched =
          data.results.find(
            (r: iTunesResult) =>
              r.artistName?.toLowerCase().includes(artist.toLowerCase()) &&
              r.trackName?.toLowerCase().includes(title.toLowerCase())
          ) || data.results[0];

        if (matched) {
          setPreview({
            previewUrl: matched.previewUrl,
            artworkUrl100: matched.artworkUrl100,
            trackName: matched.trackName,
            artistName: matched.artistName,
            collectionName: matched.collectionName,
          });
        }
      } catch (err) {
        console.error("❌ Failed to fetch preview:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [artist, title, album]);

  if (loading) return <span className="text-xs text-gray-400">Loading...</span>;

  if (!preview?.previewUrl)
    return <span className="text-xs text-gray-500 italic">No preview</span>;

  return (
    <div className="flex gap-3 items-center">
  <SongPreview
    artist={artist.name}
    title={song.title}
    album={song.album}
  />

  <button
    onClick={() =>
      setLyricSong({
        artist: artist.name,
        title: song.title,
        cover: song.cover || artist.cover
      })
    }
    className="text-xs bg-purple-500 text-white px-3 py-1 rounded-full hover:bg-purple-600 transition"
  >
    Lyric Mode
  </button>
</div>
  );
  {lyricSong && (
  <LyricsOverlay
    artist={lyricSong.artist}
    title={lyricSong.title}
    cover={lyricSong.cover}
    onClose={() => setLyricSong(null)}
  />
)}
}
