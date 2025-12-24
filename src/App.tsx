import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AppointmentBooking from './components/AppointmentBooking';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';
import IntercomChat from './components/IntercomChat';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 relative">
        <Navbar />
        <CartSidebar />
        <main>
          <Hero />
          <Services />
          <AppointmentBooking />
          <Products />
          <Contact />
        </main>
        <Footer />
        
        {/* Botones Flotantes */}
        <WhatsAppButton />
        <IntercomChat />
      </div>
    </CartProvider>
  );
}

export default App;