import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                {/* Logo blanco o filtro para que se vea en oscuro */}
               <span className="text-2xl font-bold text-white">Mundo Mascotas</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Dedicados al bienestar y la felicidad de tus mascotas. 
              Somos tu aliado de confianza para servicios veterinarios y productos de calidad.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Tienda</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mundo Mascotas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}