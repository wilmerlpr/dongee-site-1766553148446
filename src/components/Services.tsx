import React from 'react';
import { Stethoscope, Scissors, HeartPulse, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Consulta Veterinaria',
    description: 'Diagnóstico preciso y tratamiento con equipos de última tecnología para la salud integral de tu mascota.',
    icon: <Stethoscope size={40} className="text-primary" />
  },
  {
    title: 'Peluquería & Spa',
    description: 'Baños medicados, cortes de raza, limpieza dental y todo lo necesario para que luzcan hermosos.',
    icon: <Scissors size={40} className="text-secondary" />
  },
  {
    title: 'Vacunación y Control',
    description: 'Mantén al día el esquema de vacunación y desparasitación para prevenir enfermedades.',
    icon: <ShieldCheck size={40} className="text-green-500" />
  },
  {
    title: 'Urgencias 24/7',
    description: 'Estamos disponibles en todo momento para atender cualquier emergencia que se presente.',
    icon: <HeartPulse size={40} className="text-red-500" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos un cuidado integral para tus mascotas con profesionales apasionados y expertos en salud animal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}