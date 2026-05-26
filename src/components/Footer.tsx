import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <Camera className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold tracking-tighter">GK PHOTOGRAPHY</span>
            </a>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              A boutique photography studio dedicated to capturing the raw beauty of human emotions and the breathtaking wonders of nature.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Portrait Photography</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wedding Photography</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Event Photography</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Nature Photography</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Commercial Shoots</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GK Photography. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for Visual Artistry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;