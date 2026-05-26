import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import WeddingExperience from './components/WeddingExperience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WeddingExperience />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;