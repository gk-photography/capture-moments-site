import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Wedding Client',
    content: 'GK captured our wedding day more beautifully than we ever could have imagined. Every photo tells a story and brings back the exact emotion of the moment.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Portrait Client',
    content: 'I was always nervous in front of the camera, but GK made me feel so comfortable. The results are the best portraits I have ever had taken of myself.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Emma Williams',
    role: 'Event Organizer',
    content: 'Professional, punctual, and incredibly talented. GK covered our corporate gala and delivered stunning shots that perfectly showcased the atmosphere.',
    avatar: 'https://i.pravatar.cc/150?u=emma',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl shadow-sm border border-border relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;