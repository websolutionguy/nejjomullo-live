'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1639941798780-04529d362f9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'আধুনিক কৃষিতে বিনিয়োগ করুন',
    subtitle: 'আপনার সম্পদ এবং পৃথিবী কি একসাথে বৃদ্ধি করতে প্রস্তুত? হাজার হাজার বিনিয়োগকারীদের সাথে যোগ দিন।',
    cta: 'বিনিয়োগ শুরু করুন',
  },
  {
    image: 'https://images.unsplash.com/photo-1558289282-647de9fdf608?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'কৃষকের মুখে হাসি ফোটান',
    subtitle: 'সরাসরি কৃষকের সাথে যুক্ত হয়ে তাদের উৎপাদিত পণ্যে বিনিয়োগ করুন এবং নিশ্চিত লাভ পান।',
    cta: 'প্রকল্পগুলো দেখুন',
  },
  {
    image: 'https://images.unsplash.com/photo-1696371269688-99fb137d154f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'বিশুদ্ধ পণ্যের নিশ্চয়তা',
    subtitle: 'আমাদের নিজস্ব খামারে উৎপাদিত ১০০% প্রাকৃতিক এবং বিশুদ্ধ পণ্য সরাসরি আপনার দুয়ারে।',
    cta: 'পণ্য কিনুন',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ 
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
            <motion.div
              key={`content-${current}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/projects">
                  <button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20 cursor-pointer">
                    {slides[current].cta}
                  </button>
                </Link>
                <Link href="/about">
                  <button className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all cursor-pointer">
                    আরও জানুন
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-primary hover:border-primary transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-primary hover:border-primary transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? 'bg-primary w-10' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
