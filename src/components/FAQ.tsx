
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Come si svolge la consulenza iniziale?",
    answer: "La consulenza iniziale è gratuita e si svolge online o presso la nostra sede. Durante l'incontro analizziamo il tuo progetto, ascoltiamo le tue esigenze e definiamo gli obiettivi. Successivamente, elaboriamo una proposta personalizzata con strategie, budget e tempistiche."
  },
  {
    question: "Qual è il budget minimo per iniziare a lavorare insieme?",
    answer: "Il budget varia in base agli obiettivi, al settore e alla competitività del mercato. Per progetti di advertising su Meta, consigliamo un budget minimo di €1.500/mese per ottenere risultati significativi. Per progetti di consulenza e strategia, valutiamo caso per caso."
  },
  {
    question: "Quanto tempo ci vuole per vedere i primi risultati?",
    answer: "I primi risultati sono generalmente visibili dopo 2-4 settimane dall'avvio delle campagne. Questo periodo serve per raccogliere dati sufficienti, testare diverse soluzioni e ottimizzare le strategie. Risultati più consolidati si ottengono dopo 2-3 mesi di attività."
  },
  {
    question: "Come monitorate i risultati e con che frequenza riceverò report?",
    answer: "Utilizziamo piattaforme di analytics avanzate per monitorare costantemente le performance. Forniamo report settimanali con i principali KPI e un report mensile dettagliato con analisi approfondite, insights e suggerimenti strategici. Tutti i report sono personalizzabili in base alle tue esigenze."
  },
  {
    question: "Posso interrompere la collaborazione se non sono soddisfatto?",
    answer: "Sì, lavoriamo con contratti mensili o trimestrali rinnovabili. Non ci sono penali per l'interruzione del servizio al termine del periodo contrattuale. La nostra priorità è la tua soddisfazione e i risultati tangibili per il tuo business."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Domande frequenti</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rispondiamo alle domande più comuni sul nostro modo di lavorare.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
