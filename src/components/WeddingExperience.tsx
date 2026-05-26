import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, Sparkles, Camera } from 'lucide-react';

const WeddingExperience = () => {
  const points = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotional Connection",
      description: "We don't just take photos; we capture the feelings, the tears, and the silent promises."
    },
    {
      icon: <Stars className="w-6 h-6" />,
      title: "Storytelling Approach",
      description: "Your wedding is a narrative. We document it from the first nervous glance to the last dance."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Artistic Detail",
      description: "The lace, the rings, the lighting—every detail is treated as a work of art."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Unobtrusive Presence",
      description: "We work quietly in the background, capturing candid moments as they naturally unfold."
    }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="uppercase tracking-widest text-sm font-semibold opacity-70 mb-4 block">The Wedding Specialist</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Creating Timeless Legacies of Your Special Day
            </h2>
            <p className="text-lg opacity-80 mb-12 leading-relaxed">
              At GK Photography, we believe your wedding is more than an event—it's the beginning of a new legacy. Our mission is to preserve the magic, the joy, and the profound love of your celebration through a lens of artistic excellence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{point.title}</h4>
                    <p className="text-sm opacity-70 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e516120-7b77-49ce-af8e-f3123b8040e1/wedding-hero-new-3467f768-1779832168545.webp" 
                alt="Breathtaking Wedding Scene" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingExperience;