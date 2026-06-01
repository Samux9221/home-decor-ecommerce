'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Search, Menu, User, Heart, X, ArrowRight } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { useCartStore } from '@/store/useCartStore';

// --- ESTRUTURA DE DADOS DO MENU ---
const NAV_CATEGORIES = [
  {
    name: 'Mobiliário',
    href: '/colecoes/mobiliario',
    featuredText: 'Design atemporal para o seu lar.',
    subcategories: [
      { name: 'Sofás e Poltronas', href: '/colecoes/mobiliario/sofas' },
      { name: 'Mesas e Cadeiras', href: '/colecoes/mobiliario/mesas' },
      { name: 'Camas e Cabeceiras', href: '/colecoes/mobiliario/camas' },
      { name: 'Armários e Estantes', href: '/colecoes/mobiliario/arrumacao' },
    ]
  },
  {
    name: 'Iluminação',
    href: '/colecoes/iluminacao',
    featuredText: 'A luz certa muda tudo.',
    subcategories: [
      { name: 'Candeeiros de Teto', href: '/colecoes/iluminacao/teto' },
      { name: 'Candeeiros de Mesa', href: '/colecoes/iluminacao/mesa' },
      { name: 'Candeeiros de Pé', href: '/colecoes/iluminacao/pe' },
      { name: 'Apliques de Parede', href: '/colecoes/iluminacao/parede' },
    ]
  },
  {
    name: 'Têxteis',
    href: '/colecoes/texteis',
    featuredText: 'Conforto que se sente na pele.',
    subcategories: [
      { name: 'Tapetes e Carpetes', href: '/colecoes/texteis/tapetes' },
      { name: 'Almofadas e Mantas', href: '/colecoes/texteis/almofadas' },
      { name: 'Roupa de Cama', href: '/colecoes/texteis/cama' },
      { name: 'Toalhas de Banho', href: '/colecoes/texteis/banho' },
    ]
  },
  {
    name: 'Decoração',
    href: '/colecoes/decoracao',
    featuredText: 'Os detalhes que contam a sua história.',
    subcategories: [
      { name: 'Vasos e Plantas', href: '/colecoes/decoracao/vasos' },
      { name: 'Quadros e Espelhos', href: '/colecoes/decoracao/parede' },
      { name: 'Velas e Difusores', href: '/colecoes/decoracao/aromas' },
      { name: 'Objetos Decorativos', href: '/colecoes/decoracao/objetos' },
    ]
  }
];

export default function Header() {
  const router = useRouter();
  const { openCart } = useUIStore();
  const { items, cartTotal } = useCartStore();
  
  // Estados Locais
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Pode ser movido para o useUIStore no futuro

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/busca?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F6] border-b border-[#2C332A]/10 transition-all duration-300">
      
      {/* 1. Announcement Bar */}
      <div className="w-full bg-[#3A4D39] text-[#F9F8F6] text-[11px] md:text-xs py-2 text-center font-medium tracking-widest uppercase">
        Frete grátis em compras acima de 150€ | Use o cupão BEMVINDO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* 2. Main Header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Esquerda: Menu Mobile & Busca Desktop */}
          <div className="flex-1 flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#2C332A] hover:text-[#3A4D39] transition-colors"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
            </button>
            
            {/* Sistema de Busca Interativo */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center animate-in fade-in slide-in-from-left-4 duration-300">
                  <input
                    type="text"
                    autoFocus
                    placeholder="O que procura?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-b border-[#3A4D39] px-2 py-1 outline-none text-sm w-48 text-[#2C332A] placeholder-[#2C332A]/50"
                  />
                  <button type="button" onClick={() => setIsSearchOpen(false)} className="ml-2 text-[#2C332A]/50 hover:text-[#2C332A]">
                    <X size={16} />
                  </button>
                </form>
              ) : (
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-2 text-[#2C332A]/70 hover:text-[#3A4D39] transition-colors group"
                >
                  <Search strokeWidth={1.5} size={20} />
                  <span className="text-sm border-b border-transparent group-hover:border-[#3A4D39]/30 transition-all">
                    Buscar...
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Centro: Logo Boutique */}
          <Link href="/" className="flex-1 text-center font-serif text-2xl md:text-3xl tracking-widest text-[#2C332A] font-medium">
            LUMIÈRE
          </Link>

          {/* Direita: Ações do Usuário */}
          <div className="flex-1 flex items-center justify-end gap-5 md:gap-7">
            <Link href="/conta" className="hidden md:block text-[#2C332A] hover:text-[#3A4D39] transition-colors" aria-label="Minha Conta">
              <User strokeWidth={1.5} size={22} />
            </Link>
            <Link href="/wishlist" className="hidden md:block text-[#2C332A] hover:text-[#3A4D39] transition-colors" aria-label="Favoritos">
              <Heart strokeWidth={1.5} size={22} />
            </Link>
            <button onClick={openCart} className="text-[#2C332A] hover:text-[#3A4D39] transition-colors relative flex items-center gap-3 group">
              <div className="relative">
                <ShoppingBag strokeWidth={1.5} size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#3A4D39] text-[#F9F8F6] text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden md:block text-sm font-medium">
                {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(cartTotal())}
              </span>
            </button>
          </div>
        </div>

        {/* 3. Category Navigation (Desktop com Mega Menu em CSS) */}
        {/* 3. Category Navigation (Desktop com Mega Menu animado) */}
        <nav className="hidden md:flex items-center justify-center space-x-10 h-14 border-t border-[#2C332A]/5 relative">
          
          {/* Link Simples (Novidades) */}
          <Link href="/colecoes/novidades" className="group h-full flex items-center">
            <span className="relative text-sm font-medium text-[#2C332A]/80 group-hover:text-[#3A4D39] transition-colors tracking-wide">
              Novidades
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#3A4D39] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </span>
          </Link>

          {/* Links com Mega Menu */}
          {NAV_CATEGORIES.map((category) => (
            <div key={category.name} className="group h-full flex items-center">
              <Link 
                href={category.href}
                className="relative text-sm font-medium text-[#2C332A]/80 group-hover:text-[#3A4D39] transition-colors tracking-wide flex items-center h-full"
              >
                <span className="relative">
                  {category.name}
                  {/* Linha que se mantém visível enquanto o mega menu estiver aberto */}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#3A4D39] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </span>
              </Link>

              {/* Mega Menu Card */}
              <div className="absolute top-14 left-0 w-full bg-[#F9F8F6] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border-t border-[#2C332A]/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out origin-top z-40 transform group-hover:translate-y-0 translate-y-2">
                <div className="max-w-5xl mx-auto px-8 py-10 flex gap-16">
                  
                  {/* Lista de Subcategorias */}
                  <div className="w-1/3">
                    <h3 className="text-lg font-serif text-[#3A4D39] mb-6">{category.name}</h3>
                    <ul className="space-y-4">
                      {category.subcategories.map((sub) => (
                        <li key={sub.name}>
                          {/* Efeito de hover nas subcategorias também */}
                          <Link 
                            href={sub.href}
                            className="group/sub text-sm text-[#2C332A]/70 hover:text-[#3A4D39] transition-all inline-block"
                          >
                            <span className="relative">
                              {sub.name}
                              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#3A4D39] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/sub:scale-x-100"></span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Área de Destaque Promocional */}
                  <div className="flex-1 bg-[#3A4D39]/5 rounded-sm p-8 flex flex-col justify-center items-start border border-[#3A4D39]/10">
                    <span className="text-[10px] uppercase tracking-widest text-[#3A4D39] font-bold mb-2">Coleção Exclusiva</span>
                    <h4 className="text-2xl font-serif text-[#2C332A] mb-4 w-2/3 leading-tight">
                      {category.featuredText}
                    </h4>
                    <Link 
                      href={category.href}
                      className="group/btn text-sm font-medium text-[#3A4D39] flex items-center gap-2 hover:gap-3 transition-all relative"
                    >
                      Explorar coleção completa 
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* Link Simples (Sale) */}
          <Link href="/ofertas" className="group h-full flex items-center">
            <span className="relative text-sm font-medium text-[#8F9779] group-hover:text-[#3A4D39] transition-colors tracking-wide">
              Sale
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#3A4D39] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </span>
          </Link>
        </nav>
      </div>

      {/* Menu Mobile Overlay (Opcional, mas deixa a estrutura pronta) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[104px] left-0 w-full h-[calc(100vh-104px)] bg-[#F9F8F6] border-t border-[#2C332A]/10 p-6 overflow-y-auto animate-in slide-in-from-top-2">
          {/* Conteúdo do Menu Mobile viria aqui (chamando o componente <MobileMenu /> se desejar) */}
          <div className="text-center text-[#2C332A]/50 text-sm mt-10">Menu Mobile em construção...</div>
        </div>
      )}
    </header>
  );
}