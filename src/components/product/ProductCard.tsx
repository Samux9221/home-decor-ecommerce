// src/components/product/ProductCard.tsx
import { Product } from '../../lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col gap-4 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-dark w-full">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {/* Botão de adicionar ao carrinho (aparece no hover) */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-sand/90 backdrop-blur-md text-charcoal py-3 text-sm tracking-widest uppercase hover:bg-moss hover:text-white transition-colors">
            Adicionar
          </button>
        </div>
      </div>
      
      <div className="flex flex-col space-y-1 px-1">
        <h3 className="font-serif text-lg text-charcoal">{product.name}</h3>
        <p className="text-sm text-charcoal/60 font-light">{product.story}</p>
        <span className="text-moss font-medium mt-2">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
        </span>
      </div>
    </div>
  );
}