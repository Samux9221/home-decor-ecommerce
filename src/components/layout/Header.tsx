'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu, Zap, Tag, LayoutGrid } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { useCartStore } from '@/store/useCartStore';

export default function Header() {
  const { openCart } = useUIStore();
  const { items, cartTotal } = useCartStore();
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-20 py-3 md:py-0 gap-3 md:gap-8">

          {/* Topo Mobile e Logo Desktop */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center md:hidden">
              <button className="text-white hover:text-moss transition-colors">
                <Menu strokeWidth={1.5} size={28} />
              </button>
            </div>

            <Link href="/" className="font-serif text-2xl tracking-wide text-white font-medium">
              LUMIÈRE
            </Link>

            <div className="flex items-center md:hidden">
               <button onClick={openCart} className="text-white relative">
                <ShoppingBag strokeWidth={1.5} size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-moss text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Barra de Pesquisa Gigante */}
          <div className="flex-1 w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="O que procura para a sua casa?"
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 py-2.5 rounded-sm focus:outline-none focus:border-moss focus:ring-1 focus:ring-moss transition-all"
            />
            <button className="absolute right-0 top-0 bottom-0 px-5 bg-moss hover:bg-moss-dark text-white rounded-r-sm transition-colors flex items-center justify-center">
              <Search strokeWidth={2} size={20} />
            </button>
          </div>

          {/* Ações e Carrinho Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={openCart} className="flex items-center gap-3 text-white hover:text-moss transition-colors group">
              <div className="relative">
                <ShoppingBag strokeWidth={1.5} size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-wider text-white/50">O seu carrinho</span>
                <span className="text-sm font-medium">{new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(cartTotal())}</span>
              </div>
            </button>
          </div>

        </div>

        {/* Links Rápidos de Conversão (Abaixo da pesquisa em Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 pb-2 overflow-x-auto no-scrollbar">
          <Link href="/colecoes" className="flex items-center gap-1 text-xs font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap">
            <LayoutGrid size={14} /> Categorias
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/ofertas" className="flex items-center gap-1 text-xs font-medium text-moss hover:text-moss-light transition-colors whitespace-nowrap">
            <Zap size={14} className="fill-moss" /> Ofertas Relâmpago
          </Link>
          <Link href="/cupoes" className="flex items-center gap-1 text-xs font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap">
            <Tag size={14} /> Cupões de Desconto
          </Link>
          <Link href="/top-vendas" className="text-xs font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap">
            Top Vendas
          </Link>
        </nav>
      </div>
    </header>
  );
}