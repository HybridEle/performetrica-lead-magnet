
import React from 'react';
import { Star } from 'lucide-react';

const testimonialData = [
  {
    name: "Marco Rossi",
    company: "E-commerce Italia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format",
    text: "Grazie a Performetrica abbiamo aumentato il nostro ROAS del 320% in soli 3 mesi. Il loro approccio data-driven ha trasformato la nostra strategia digitale.",
    stars: 5,
    result: "+320% ROAS",
  },
  {
    name: "Giulia Bianchi",
    company: "Moda Boutique",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format",
    text: "Incredibile la differenza dopo aver iniziato a lavorare con Performetrica. Il nostro traffico è aumentato del 250% e le conversioni del 180%.",
    stars: 5,
    result: "+180% Conversioni",
  },
  {
    name: "Alessandro Verdi",
    company: "Tech Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format",
    text: "La loro expertise con Meta Ads ci ha permesso di ridurre il costo di acquisizione cliente del 40%, aumentando contemporaneamente la qualità dei lead.",
    stars: 5,
    result: "-40% CAC",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cosa dicono di noi i nostri clienti</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Abbiamo aiutato decine di aziende a migliorare le loro performance digitali.
            Ecco alcuni dei risultati ottenuti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative"
            >
              <div className="absolute -top-4 right-8 bg-blue-600 text-white font-bold py-1 px-4 rounded-full text-sm">
                {testimonial.result}
              </div>
              
              <div className="flex mb-4 text-yellow-400">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
