import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    totalPrice 
  } = useCart();

  // Formateador de moneda
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      {/* Overlay oscuro */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b flex justify-between items-center bg-gray-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-primary" />
              <h2 className="text-xl font-bold text-gray-900">Tu Carrito</h2>
            </div>
            <button 
              onClick={toggleCart}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                  <ShoppingBag size={40} className="text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
                <button 
                  onClick={toggleCart}
                  className="text-primary font-semibold hover:underline"
                >
                  Volver a la tienda
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
                    <p className="text-primary font-bold mt-1">{formatPrice(item.price)}</p>
                    
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 px-2 hover:bg-gray-100 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 px-2 hover:bg-gray-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t bg-gray-50 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <button className="w-full bg-primary hover:bg-sky-600 text-white py-4 rounded-xl font-bold shadow-lg transition-all transform active:scale-95">
                Proceder al Pago
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}