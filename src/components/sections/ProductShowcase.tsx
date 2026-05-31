import { MOCK_PRODUCTS } from '../../lib/data';
import ProductCard from '../product/ProductCard';

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-sand-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <span className="text-moss text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Nossa Seleção</span>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Peças com Propósito</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border border-moss text-moss hover:bg-moss hover:text-white px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
}