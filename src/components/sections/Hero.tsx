import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo com Overlay sutil para garantir a leitura */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-charcoal/40"></div>
      </div>

      {/* Conteúdo focado no propósito e na história */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
        <span className="text-sand/90 text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-6">
          Muito mais do que móveis
        </span>
        
        <h1 className="text-5xl md:text-7xl font-serif text-sand mb-6 leading-tight">
          O propósito de <br className="hidden md:block" /> morar bem
        </h1>
        
        <p className="text-lg md:text-xl text-sand/90 mb-10 max-w-2xl font-light">
          Cada peça da nossa coleção carrega uma história. Transforme seus ambientes em espaços de conexão, conforto e significado.
        </p>
        
        <Link 
          href="/colecoes" 
          className="bg-moss hover:bg-moss-dark text-sand px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
        >
          Descobrir Histórias
        </Link>
      </div>
    </section>
  );
}