import { Zap, Package, Star, Clock, LayoutGrid, Tag, Archive, Home } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-sand pt-32 md:pt-40 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Grelha Principal Clara - Foco em Utilidades */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[400px]">
          
          {/* Banner Principal Claro */}
          <Link href="/ofertas" className="lg:col-span-2 relative w-full h-[250px] lg:h-full overflow-hidden group rounded-sm border border-moss/10 bg-white">
            <div className="absolute inset-0 bg-gradient-to-r from-sand/95 via-sand/80 to-transparent z-10"></div>
            {/* Imagem focada em prateleiras e decoração leve */}
            <img 
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop" 
              alt="Prateleiras e Decoração" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 z-20 flex flex-col gap-3">
              <span className="bg-moss text-white text-[10px] font-bold px-3 py-1 w-max uppercase tracking-widest rounded-sm">Casa Organizada</span>
              <h2 className="text-3xl md:text-5xl font-serif text-charcoal leading-tight">
                Pequenos detalhes, <br/>grande diferença.
              </h2>
              <p className="text-charcoal/70 text-sm max-w-xs mt-1">
                Prateleiras, enfeites e utilidades que dão vida ao seu espaço.
              </p>
              <button className="mt-2 bg-charcoal text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-moss transition-colors w-max rounded-sm shadow-md">
                Ver Utilidades
              </button>
            </div>
          </Link>

          {/* Gatilhos de Conversão */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 h-full">
            <Link href="/organizacao" className="relative w-full h-full overflow-hidden group rounded-sm min-h-[120px] border border-moss/10 bg-white">
              <div className="absolute inset-0 bg-moss/95 z-10"></div>
              {/* Imagem de potes/organização */}
              <img src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=500&auto=format&fit=crop" alt="Organização" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4">
                <Archive className="text-sand mb-3" size={28} strokeWidth={1.5} />
                <h3 className="text-white font-medium text-lg tracking-wide">Kits de Organização</h3>
                <p className="text-white/80 text-xs mt-1">Tudo no seu devido lugar</p>
              </div>
            </Link>

            <Link href="/lancamentos" className="relative w-full h-full overflow-hidden group rounded-sm min-h-[120px] border border-moss/10 bg-white">
              <div className="absolute inset-0 bg-sand/90 z-10"></div>
              <img src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=500&auto=format&fit=crop" alt="Enfeites" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-10" />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4">
                <Home className="text-moss mb-3" size={28} strokeWidth={1.5} />
                <h3 className="text-charcoal font-medium text-lg tracking-wide">Novos Enfeites</h3>
                <p className="text-charcoal/60 text-xs mt-1">Toques finais para a casa</p>
              </div>
            </Link>
          </div>

        </div>

        {/* Quick Links (Focados no Nicho Real) */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 py-8 border-b border-moss/10 mt-2">
          {[
            { icon: Zap, label: 'Ofertas' },
            { icon: Archive, label: 'Prateleiras' },
            { icon: Home, label: 'Enfeites' },
            { icon: Star, label: 'Mais Vendidos' },
            { icon: Package, label: 'Kits' },
            { icon: Clock, label: 'Última Hora' },
            { icon: LayoutGrid, label: 'Tudo' },
            { icon: Tag, label: 'Cupons' },
          ].map((item, i) => (
            <Link key={i} href="#" className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-white border border-moss/10 flex items-center justify-center group-hover:bg-moss group-hover:border-moss transition-all shadow-sm">
                <item.icon size={22} strokeWidth={1.5} className="text-moss group-hover:text-white transition-colors" />
              </div>
              <span className="text-[11px] font-medium text-charcoal/70 group-hover:text-moss text-center uppercase tracking-wider">{item.label}</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}