
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Performetrica</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Vantaggi</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonianze</a>
          <a href="#process" className="text-gray-700 hover:text-primary transition-colors">Come Lavoriamo</a>
          <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
        </div>
        
        <div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-medium"
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({behavior: 'smooth'})}
          >
            Contattaci
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
