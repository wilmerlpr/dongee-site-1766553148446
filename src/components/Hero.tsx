import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            El cuidado que tu <br/>
            <span className="text-primary">mejor amigo</span> merece
          </h1>
          <p className="text-lg text-gray-600 md:pr-10">
            En Mundo Mascotas ofrecemos servicios veterinarios de primera calidad, 
            spa para consentirlos y los mejores productos del mercado. 
            Tu tranquilidad y su felicidad son nuestra prioridad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#appointment" className="bg-primary hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 flex items-center justify-center gap-2">
              Agendar Cita <ArrowRight size={20} />
            </a>
            <a href="#services" className="bg-white border-2 border-primary text-primary hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors">
              Ver Servicios
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
            alt="Perro feliz"
            className="rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}