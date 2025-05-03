
import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Performetrica</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Agenzia specializzata in strategie data-driven per aumentare le performance 
              del tuo business. Meta Partner ufficiale e esperti in lead generation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              >
                f
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                i
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                in
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.performetrica.it/chi-siamo" className="text-gray-400 hover:text-white transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="https://www.performetrica.it/servizi" className="text-gray-400 hover:text-white transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="https://www.performetrica.it/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.performetrica.it/casi-studio" className="text-gray-400 hover:text-white transition-colors">
                  Casi Studio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+391234567890" className="text-gray-400 hover:text-white transition-colors">
                  +39 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:info@performetrica.it" className="text-gray-400 hover:text-white transition-colors">
                  info@performetrica.it
                </a>
              </li>
              <li className="flex items-start">
                <MessageSquare className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  Via esempio, 123<br />
                  00100 Roma, Italia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Performetrica. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Termini e Condizioni</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
