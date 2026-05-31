'use client'; 

import { useUIStore } from '../../store/useUIStore';
import { useCartStore } from '../../store/useCartStore';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore();
  const { items, removeItem, cartTotal } = useCartStore();

  return (
    <>
      {/* Overlay escuro com blur (fundo) */}
      <div 
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Painel do Carrinho (desliza da direita) */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-sand shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cabeçalho do Carrinho */}
        <div className="flex items-center justify-between p-6 border-b border-moss/10">
          <h2 className="font-serif text-2xl text-charcoal flex items-center gap-2">
            <ShoppingBag size={24} strokeWidth={1.5} className="text-moss" />
            O seu espaço
          </h2>
          <button 
            onClick={closeCart}
            className="text-charcoal/60 hover:text-moss transition-colors p-2"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Lista de Produtos */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-charcoal/50 space-y-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-light tracking-wide">O seu carrinho está vazio.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-center group">
                <div className="w-20 h-24 bg-sand-dark overflow-hidden flex-shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-charcoal font-medium text-sm">{item.product.name}</h3>
                  <p className="text-charcoal/60 text-xs mt-1">Qtd: {item.quantity}</p>
                  <span className="text-moss font-medium mt-2 text-sm">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.product.price)}
                  </span>
                </div>
                <button 
                  onClick={() => removeItem(item.product.id)}
                  className="text-charcoal/40 hover:text-red-500 transition-colors p-2 opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={18} strokeWidth={1.5} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Rodapé do Carrinho */}
        {items.length > 0 && (
          <div className="p-6 border-t border-moss/10 bg-sand/80 backdrop-blur-md">
            <div className="flex justify-between items-center mb-6">
              <span className="text-charcoal font-medium">Subtotal</span>
              <span className="font-serif text-xl text-moss">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal())}
              </span>
            </div>
            <p className="text-xs text-charcoal/50 mb-6 font-light">
              Os custos de envio e impostos serão calculados no checkout.
            </p>
            <button className="w-full bg-moss hover:bg-moss-dark text-white py-4 text-sm tracking-[0.2em] uppercase transition-colors">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}