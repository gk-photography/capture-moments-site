import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/wedding-hero-new-3467f768-1779832168545.webp"
          alt="Photography Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="uppercase tracking-[0.3em] text-sm font-light mb-4 block">Capturing Your Legacy</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
            GK PHOTOGRAPHY
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light mb-10">
            Specializing in Wedding Shoots, Portraits, and Lifestyle Photography. 
            Documenting life's most beautiful chapters with artistic precision.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 w-full md:w-auto"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto"
            >
              Book Your Date
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white opacity-60"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;