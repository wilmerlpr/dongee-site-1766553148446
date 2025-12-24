import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contáctanos</h2>
            <p className="text-gray-600 mb-8">
              ¿Tienes alguna duda o quieres agendar una cita? Déjanos tus datos y te responderemos lo antes posible.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tu teléfono" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-lg transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="text-gray-300">Calle 123 # 45-67, Bogotá, Colombia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Llámanos</h4>
                  <p className="text-gray-300">+57 300 123 4567</p>
                  <p className="text-gray-300">+57 (601) 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Escríbenos</h4>
                  <p className="text-gray-300">contacto@mundomascotas.co</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horario</h4>
                  <p className="text-gray-300">Lunes a Sábado: 8:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">Domingos: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}