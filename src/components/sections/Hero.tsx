import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-[90vh] w-full pt-20"> {/* pt-20 compensa a navbar fixa */}
      <div className="absolute inset-0 w-full h-full p-4 md:p-8">
        <div className="relative w-full h-full rounded-sm md:rounded-2xl overflow-hidden bg-[#2C332A]">
          {/* Imagem de Fundo (Exemplo do Unsplash) */}
          <Image 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
            alt="Ambiente decorado com móveis de design"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:px-32">
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <span className="text-[#F9F8F6] text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-6 block">
                Nova Coleção Outono/Inverno
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#F9F8F6] leading-[1.1] mb-8">
                A arte de viver <br className="hidden md:block" />
                <span className="italic text-white/90">bem e com propósito.</span>
              </h1>
              <Link 
                href="/colecoes/novidades"
                className="inline-flex items-center gap-3 bg-[#F9F8F6] text-[#2C332A] px-8 py-4 text-sm font-medium hover:bg-[#3A4D39] hover:text-[#F9F8F6] transition-all duration-500 group"
              >
                Explorar a Coleção
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}