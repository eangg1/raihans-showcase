import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SpotifyLyrics({ lyrics, audioRef }) {

  const lines = lyrics.split("\n");

  const [currentLine, setCurrentLine] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {

    const interval = setInterval(() => {

      if (!audioRef.current) return;

      const time = audioRef.current.currentTime;

      const index = Math.floor(time / 4);

      if (index < lines.length) {
        setCurrentLine(index);
      }

    }, 200);

    return () => clearInterval(interval);

  }, [audioRef, lines.length]);

  useEffect(() => {

    const el =
      containerRef.current?.children[currentLine];

    if (el) {

      el.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }

  }, [currentLine]);

  return (

    <div
      ref={containerRef}
      className="h-[420px] overflow-hidden text-center space-y-6"
    >

      {lines.map((line, index) => (

        <motion.p
          key={index}
          animate={{
            opacity:
              index === currentLine ? 1 : 0.25,
            scale:
              index === currentLine ? 1.25 : 1,
            y:
              index === currentLine ? 0 : 10
          }}
          transition={{ duration: 0.35 }}
          className="text-xl font-semibold"
        >

          {line}

        </motion.p>

      ))}

    </div>
  );
}