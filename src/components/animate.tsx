// src/components/AnimatedImage.tsx
import { motion } from "framer-motion";

export default function AnimatedImage() {
  return (
    <motion.div
      className="mt-6 md:mt-0 flex justify-center"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-3)] to-[var(--accent-2)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <motion.img
          src="/Kabbya.png"
          alt="Profile"
          className="w-40 sm:w-48 md:w-80 rounded-full relative ring-2 ring-[var(--accent-3)]/40"
          style={{ objectFit: "cover" }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
