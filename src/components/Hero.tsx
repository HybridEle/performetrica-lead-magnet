
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Aumenta le <span className="text-gradient">performance</span> del tuo Business con strategie data-driven
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700">
              Scopri come Performetrica genera risultati concreti e misurabili per il tuo progetto.
            </p>
            
            <div className="py-4">
              <Button 
                className="cta-button group"
                size="lg"
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({behavior: 'smooth'})}
              >
                Richiedi una consulenza gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center gap-3 pt-4">
              <p className="text-sm text-gray-600 font-medium">Meta Partner Ufficiale</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">f</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">i</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fadeIn animate-delay-200">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-80"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full blur-xl opacity-80"></div>
              
              <div className="relative bg-white rounded-xl shadow-xl p-6 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 rounded-lg mb-4"></div>
                
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-20 bg-blue-100 rounded-lg"></div>
                  <div className="h-20 bg-purple-100 rounded-lg"></div>
                  <div className="h-20 bg-indigo-100 rounded-lg"></div>
                </div>
                
                <div className="mt-6 border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 w-12 bg-green-500 rounded"></div>
                  </div>
                  
                  <div className="mt-2 h-10 bg-blue-50 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
