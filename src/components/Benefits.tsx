
import React from 'react';
import { Calendar, Check, FileText, Info } from "lucide-react";

const benefitsList = [
  {
    title: "Meta Partner Ufficiale",
    description: "Competenza certificata e accesso prioritario a strumenti avanzati per massimizzare le tue campagne pubblicitarie.",
    icon: <Info className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Analisi Dati Avanzata",
    description: "Utilizziamo i dati per prendere decisioni strategiche che portano a risultati misurabili e concreti.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Ottimizzazione Continua",
    description: "Monitoriamo costantemente le performance delle tue campagne per massimizzare il ritorno sull'investimento.",
    icon: <Check className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Soluzioni Personalizzate",
    description: "Creiamo strategie su misura per e-commerce e generazione di lead adattate al tuo settore di mercato.",
    icon: <Calendar className="w-10 h-10 text-blue-600" />,
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Perché scegliere Performetrica?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ci distinguiamo per un approccio basato su dati, esperienza certificata e risultati concreti.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow 
                        hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
