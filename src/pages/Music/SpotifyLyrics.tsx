import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function parseLRC(lrc) {
  const lines = lrc.split("\n");

  return lines
    .map((line) => {
      const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);

      if (!match) return null;

      const min = parseInt(match[1]);
      const sec = parseFloat(match[2]);

      return {
        time: min * 60 + sec,
        text: match[3].trim(),
      };
    })
    .filter(Boolean);
}

export default function SpotifyLyrics({ lyrics, audioRef }) {
  const [currentLine, setCurrentLine] = useState(0);
  const parsedLyrics = parseLRC(lyrics);
  const containerRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;

    const interval = setInterval(() => {
      const time = audio.currentTime;

      for (let i = 0; i < parsedLyrics.length; i++) {
        if (
          time >= parsedLyrics[i].time &&
          (i === parsedLyrics.length - 1 ||
            time < parsedLyrics[i + 1].time)
        ) {
          setCurrentLine(i);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [parsedLyrics, audioRef]);

  useEffect(() => {
    const el = containerRef.current?.children[currentLine];

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentLine]);

  return (
    <div
      ref={containerRef}
      className="h-96 overflow-hidden text-center text-xl font-medium space-y-4"
    >
      {parsedLyrics.map((line, index) => (
        <motion.p
          key={index}
          animate={{
            opacity: index === currentLine ? 1 : 0.3,
            scale: index === currentLine ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="text-white"
        >
          {line.text}
        </motion.p>
      ))}
    </div>
  );
}