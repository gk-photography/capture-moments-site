import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/photographer-profile-bc348979-1779832067050.webp"
                alt="Photographer Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-8 border-l-8 border-primary/20 rounded-tl-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-8 border-r-8 border-primary/20 rounded-br-3xl z-0" />
            
            <div className="absolute -bottom-6 left-6 bg-white p-6 shadow-xl rounded-xl z-20 hidden md:block border border-border">
              <p className="text-primary font-bold text-2xl">500+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Weddings Captured</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">The Soul Behind the Lens</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">Meet GK: Your Wedding & Lifestyle Specialist</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                My name is GK, and I've spent the last decade chasing the perfect light and the most genuine smiles. While I started as a landscape photographer, my heart truly found its home in the whirlwind of emotions that is a wedding day.
              </p>
              <p>
                I specialize in "Wedding Shoots and Many More"—including intimate portraits, corporate events, and breathtaking nature photography. My style is a blend of editorial elegance and candid photojournalism.
              </p>
              <p>
                Whether you're planning a grand celebration or a quiet elopement, I am here to ensure that every moment is preserved with the dignity and artistry it deserves. I don't just capture how it looked; I capture how it <em>felt</em>.
              </p>
            </div>
            
            <div className="flex gap-8 mt-12">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground">12</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Countries Shot</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground">100%</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Happy Couples</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground">48h</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Sneak Peek</span>
               </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-12"
            >
              <a href="#contact" className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:shadow-primary/30 transition-all">
                Book Your Story
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;