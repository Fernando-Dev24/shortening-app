import React from 'react';
import WebFont from 'webfontloader';
/* Components */
import { Header } from './components/Header';
import { ShortenForm } from './components/ShortenForm';
import { StartedBanner } from './components/StartedBanner';
import { Footer } from './components/Footer';

export const ShorteningApp = () => {
   WebFont.load({
      google: {
         families: ['Poppins:500,700']
      }
   });

   return (
      <main>
         <Header />
         <ShortenForm />
         <StartedBanner />
         <Footer />
      </main>
   );
};