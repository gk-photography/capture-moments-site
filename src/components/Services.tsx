import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Image, Calendar, CheckCircle2, Heart, Briefcase, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'The Wedding Day',
    icon: <Heart className="w-8 h-8 text-primary" />,
    price: 'Starting at $1,800',
    description: 'Bespoke coverage of your entire wedding celebration, from sunrise to the late-night dancing.',
    features: ['10-12 Hour Coverage', '600+ Edited Images', 'Engagement Shoot Included', 'Premium Leather Album'],
    accent: 'bg-primary/5 border-primary/20'
  },
  {
    title: 'Portrait Sessions',
    icon: <Users className="w-8 h-8 text-primary" />,
    price: '$350',
    description: 'High-end portraits for individuals, families, or maternity. Focus on personality and light.',
    features: ['2 Hour Session', '30 Retouched Images', 'Location Selection', 'Wardrobe Consultation'],
    accent: 'bg-muted/30 border-border'
  },
  {
    title: 'Event & Gala',
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    price: 'Starting at $600',
    description: 'Professional documentation for corporate events, galas, and private celebrations.',
    features: ['Hourly Rates', 'Next-Day Delivery', 'Unobtrusive Style', 'High-Res Digital Files'],
    accent: 'bg-muted/30 border-border'
  },
  {
    title: 'Commercial & Brand',
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    price: 'Custom Quote',
    description: 'Elevate your brand with professional product, lifestyle, and architectural photography.',
    features: ['Full Commercial Rights', 'Studio Setup Available', 'Batch Editing', 'Brand Storytelling'],
    accent: 'bg-muted/30 border-border'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Services & Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether it's your big day or a professional brand shoot, we provide tailored collections to capture every moment perfectly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${service.accent} hover:shadow-xl transition-all group flex flex-col h-full`}
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-primary font-bold text-xl mb-4">{service.price}</p>
              <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="w-full py-4 text-center bg-foreground text-background font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;