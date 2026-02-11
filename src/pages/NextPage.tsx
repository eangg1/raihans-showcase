import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "I don't even know if you'll ever read this.",
  "",
  "but if u do. i just want to know, i still think about you sometimes.",
  "",
  'we both tried. we both cared, but the universe just never gave us enough space to become "us"',
  "",
  "i just wonder if we had met at a different point in life, would the ending have been different?",
  "",
  "anyway, i hope ur doing okay, even though we're not in each other's lives anymore.",
];

const NextPage: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [audio] = useState<HTMLAudioElement>(
    () =>
      new Audio(
        "https://cdn.pixabay.com/download/audio/2023/02/03/audio_cadcdadfa2.mp3?filename=about-you-instrumental-13614.mp3"
      )
  );

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[i]]);
      i++;
      if (i === lines.length) clearInterval(interval);
    }, 2000);

    audio.volume = 0.4;
    audio.loop = true;
    audio.play().catch(() => {});
    return () => {
      audio.pause();
      audio.currentTime = 0;
      clearInterval(interval);
    };
  }, [started, audio]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#f7f3e9] text-gray-800 p-6 relative overflow-hidden">
      {/* Background kertas binder */}
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/x2kPz2z/binder-paper-texture.jpg')] bg-cover bg-center opacity-30 pointer-events-none"></div>

      {/* Konten */}
      {!started ? (
        <motion.div
          className="relative z-10 bg-[#fffef9]/80 backdrop-blur-sm border-[3px] border-[#e0d9cf] rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.2)] max-w-lg w-full p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-2xl md:text-3xl font-[serif] text-gray-700 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
          >
            “i hope you read this, even if it's too late.”
          </motion.p>

          <motion.button
            onClick={() => setStarted(true)}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Read It →
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="relative z-10 bg-[#fffef9]/70 backdrop-blur-sm border-[3px] border-[#e0d9cf] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.2)] max-w-2xl w-full p-10 font-[serif]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {visibleLines.map((line, index) => (
            <motion.p
              key={index}
              className="text-lg md:text-xl mb-3 leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NextPage;
