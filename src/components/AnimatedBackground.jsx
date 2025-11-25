import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Scanning radar effect */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border-2 border-red-500/10"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full border-2 border-blue-500/10"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 5,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}