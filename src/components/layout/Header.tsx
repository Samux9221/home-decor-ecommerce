'use client';

import Link from 'next/link';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';
import { useCartStore } from '../../store/useCartStore';

export default function Header() {
  const { openCart } = useUIStore();
  const { items } = useCartStore();
  
  // Calcula o total de itens (somando as quantidades)
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand/80 backdrop-blur-md border-b border-moss/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center md:hidden">
            <button className="text-charcoal hover:text-moss transition-colors">
              <Menu strokeWidth={1.5} size={28} />
            </button>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:relative left-0 pointer-events-none md:pointer-events-auto">
            <Link href="/" className="font-serif text-2xl tracking-wide text-moss font-medium pointer-events-auto">
              LUMIÈRE
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/colecoes" className="text-sm font-medium text-charcoal/80 hover:text-moss transition-colors">Ambientes</Link>
            <Link href="/colecoes" className="text-sm font-medium text-charcoal/80 hover:text-moss transition-colors">Móveis</Link>
            <Link href="/colecoes" className="text-sm font-medium text-charcoal/80 hover:text-moss transition-colors">Decoração</Link>
            <Link href="#" className="text-sm font-medium text-charcoal/80 hover:text-moss transition-colors">Nossa História</Link>
          </nav>

          <div className="flex items-center space-x-5">
            <button className="hidden md:block text-charcoal hover:text-moss transition-colors">
              <Search strokeWidth={1.5} size={22} />
            </button>
            <button className="hidden md:block text-charcoal hover:text-moss transition-colors">
              <User strokeWidth={1.5} size={22} />
            </button>
            {/* Botão do Carrinho integrado com o Zustand */}
            <button 
              onClick={openCart}
              className="text-charcoal hover:text-moss transition-colors relative"
            >
              <ShoppingBag strokeWidth={1.5} size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-moss text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}