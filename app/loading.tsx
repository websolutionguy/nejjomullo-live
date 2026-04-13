'use client';

import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9998] bg-white/80 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        />
        <p className="mt-4 text-primary font-bold animate-pulse">লোড হচ্ছে...</p>
      </div>
    </div>
  );
}
