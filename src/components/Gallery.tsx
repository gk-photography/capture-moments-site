import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const categories = ['All', 'Weddings', 'Portraits', 'Landscape', 'Events'];

const galleryItems = [
  { id: 1, category: 'Weddings', title: 'The Vows', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/wedding-hero-new-3467f768-1779832168545.webp' },
  { id: 2, category: 'Weddings', title: 'Eternal Rings', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/wedding-rings-1d80c48f-1779832167379.webp' },
  { id: 3, category: 'Weddings', title: 'Pure Emotion', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/wedding-emotion-1-98170100-1779832169006.webp' },
  { id: 10, category: 'Weddings', title: 'First Dance', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/wedding-first-dance-745431f5-1779832167755.webp' },
  { id: 11, category: 'Weddings', title: 'The Party', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/wedding-party-dc60f66e-1779832168949.webp' },
  { id: 12, category: 'Weddings', title: 'The Reception', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/wedding-reception-578391bb-1779832168713.webp' },
  { id: 4, category: 'Portraits', title: 'Graceful Light', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/portrait-1-f43fce3c-1779832067350.webp' },
  { id: 5, category: 'Portraits', title: 'Urban Soul', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/portrait-2-16499281-1779832067387.webp' },
  { id: 7, category: 'Landscape', title: 'Mountain Majesty', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/landscape-1-e628fbbe-1779832066856.webp' },
  { id: 8, category: 'Landscape', title: 'Mist Over Water', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/landscape-2-505acdf9-1779832066893.webp' },
  { id: 9, category: 'Events', title: 'Night Rhythms', url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/event-2-3d4ad881-1779832069746.webp' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Artistic Showcase</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-background text-muted-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-muted">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.category}</span>
                        <h3 className="text-white text-xl font-bold">{item.title}</h3>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none focus-visible:outline-none">
                    <div className="relative aspect-[16/9] w-full flex items-center justify-center">
                       <img
                        src={item.url}
                        alt={item.title}
                        className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;