
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Process />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
