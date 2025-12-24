import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const logoUrl = "https://mundomascotas.co/cdn/shop/files/Copia_de_iconos.png?v=1715631943&width=500";

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Citas', href: '#appointment' },
    { name: 'Productos', href: '#products' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 flex items-center">
              <img className="h-12 w-auto" src={logoUrl} alt="Mundo Mascotas" />
              <span className="ml-3 text-xl font-bold text-gray-800 hidden sm:block">Mundo Mascotas</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleCart}
              className="relative bg-secondary hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              <span>Tienda</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleCart}
              className="relative text-gray-600 hover:text-primary"
            >
              <ShoppingBag size={26} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}