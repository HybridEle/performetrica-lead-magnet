
import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Il metodo Performetrica</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un processo strutturato e personalizzato per portare il tuo business al successo digitale.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-xl mb-6 mx-auto md:mx-0">1</div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Analisi e Obiettivi</h3>
              <p className="text-gray-600">
                Analizziamo il tuo progetto, il mercato di riferimento e definiamo insieme obiettivi misurabili e realistici.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Audit completo dei canali digitali</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Analisi competitor</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Definizione KPI e obiettivi</span>
                </li>
              </ul>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-full text-white flex items-center justify-center font-bold text-xl mb-6 mx-auto md:mx-0">2</div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Strategia Data-Driven</h3>
              <p className="text-gray-600">
                Sviluppiamo una strategia personalizzata basata sui dati raccolti, adattata al tuo settore e ai tuoi obiettivi.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Creazione strategia personalizzata</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Segmentazione audience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Piano media e budget allocation</span>
                </li>
              </ul>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold text-xl mb-6 mx-auto md:mx-0">3</div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Implementazione e Ottimizzazione</h3>
              <p className="text-gray-600">
                Mettiamo in pratica la strategia, monitoriamo costantemente i risultati e ottimizziamo per massimizzare il ROI.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Implementazione campagne</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Monitoraggio e ottimizzazione continua</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Report dettagliati dei risultati</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
