import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';

const productsData: Product[] = [
  {
    id: 1,
    name: 'Alimento Premium Adulto',
    price: 125000,
    category: 'Nutrición',
    image: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Juguete Mordedor Resistente',
    price: 35000,
    category: 'Juguetes',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Cama Ortopédica',
    price: 180000,
    category: 'Descanso',
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Shampoo Hipoalergénico',
    price: 45000,
    category: 'Higiene',
    image: 'https://images.unsplash.com/photo-1632297129590-41078b479e00?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Products() {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Productos Destacados</h2>
            <p className="text-gray-600">Lo mejor para consentir a tu peludo.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors">
            Ver todo el catálogo
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-primary shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
                <div className="mt-auto flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-gray-100 hover:bg-secondary hover:text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-sm active:scale-95"
                    aria-label="Agregar al carrito"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="#" className="text-primary font-bold">Ver todo el catálogo &rarr;</a>
        </div>
      </div>
    </section>
  );
}