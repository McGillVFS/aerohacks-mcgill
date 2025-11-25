import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 255, 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated glows */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Flying Drone Animation */}
        <motion.div
          className="mb-8 relative h-32"
          initial={{ x: -200, opacity: 0 }}
          animate={{ 
            x: progress * 6 - 200,
            y: [0, -10, 0],
            opacity: progress < 95 ? 1 : 0
          }}
          transition={{
            x: { duration: 0.5, ease: "easeOut" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.3 }
          }}
        >
          <svg
            viewBox="0 0 120 120"
            className="w-24 h-24 md:w-32 md:h-32"
          >
            <defs>
              <g id="propeller-red">
                <ellipse cx="0" cy="-8" rx="2.5" ry="8" fill="#FF4444" opacity="0.7" />
                <ellipse cx="0" cy="8" rx="2.5" ry="8" fill="#FF4444" opacity="0.7" />
                <ellipse cx="-8" cy="0" rx="8" ry="2.5" fill="#FF4444" opacity="0.5" />
                <ellipse cx="8" cy="0" rx="8" ry="2.5" fill="#FF4444" opacity="0.5" />
                <circle cx="0" cy="0" r="3" fill="#CC0000" />
              </g>
              <g id="propeller-blue">
                <ellipse cx="0" cy="-8" rx="2.5" ry="8" fill="#0000FF" opacity="0.7" />
                <ellipse cx="0" cy="8" rx="2.5" ry="8" fill="#0000FF" opacity="0.7" />
                <ellipse cx="-8" cy="0" rx="8" ry="2.5" fill="#0000FF" opacity="0.5" />
                <ellipse cx="8" cy="0" rx="8" ry="2.5" fill="#0000FF" opacity="0.5" />
                <circle cx="0" cy="0" r="3" fill="#0000CC" />
              </g>
            </defs>
            
            {/* Drone body */}
            <circle cx="60" cy="60" r="8" fill="#FF4444" />
            
            {/* Arms */}
            <line x1="60" y1="60" x2="30" y2="30" stroke="#0000FF" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="60" x2="90" y2="30" stroke="#FF4444" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="60" x2="30" y2="90" stroke="#0000FF" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="60" x2="90" y2="90" stroke="#FF4444" strokeWidth="3" strokeLinecap="round" />
            
            {/* Propellers */}
            <g transform="translate(30, 30)">
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              >
                <use href="#propeller-blue" />
              </motion.g>
            </g>
            
            <g transform="translate(90, 30)">
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              >
                <use href="#propeller-red" />
              </motion.g>
            </g>
            
            <g transform="translate(30, 90)">
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              >
                <use href="#propeller-blue" />
              </motion.g>
            </g>
            
            <g transform="translate(90, 90)">
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              >
                <use href="#propeller-red" />
              </motion.g>
            </g>
          </svg>
        </motion.div>

        {/* Logo appears at the end */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: progress > 95 ? 1 : 0,
            scale: progress > 95 ? 1 : 0.8
          }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/d5650c898_unblurimageai_Copie_de_aero_3.jpg"
            alt="McGill AeroHacks"
            className="w-48 md:w-64 mx-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-xl border-2 border-blue-500/50 rounded h-3 overflow-hidden shadow-lg shadow-blue-500/30">
            <motion.div
              className="h-full bg-gradient-to-r from-red-600 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p 
            className="text-sm text-red-500 mt-3 font-bold font-mono uppercase tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {progress < 100 ? "Taking flight..." : "Ready!"}
          </motion.p>
        </div>
      </div>
    </div>
  );
}