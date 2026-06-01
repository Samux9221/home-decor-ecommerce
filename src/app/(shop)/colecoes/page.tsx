import React from 'react';
import Link from 'next/link';
// Importação do seu ProductCard existente (ajustado para o layout clean)
import ProductCard from '../../../components/product/ProductCard'; 
import { Button } from '../../../components/ui/Button'; 

// Mock de dados - Substituir pela chamada à sua API/Banco de Dados
const catalogProducts = [
  { id: '1', name: 'Poltrona Lounge', price: 2150.00, slug: 'poltrona-lounge', category: 'Sala' },
  { id: '2', name: 'Mesa de Jantar Carvalho', price: 4300.00, slug: 'mesa-jantar', category: 'Sala' },
  { id: '3', name: 'Luminária de Teto Minimal', price: 890.00, slug: 'luminaria-teto', category: 'Iluminação' },
  { id: '4', name: 'Vaso Orgânico', price: 240.00, slug: 'vaso-organico', category: 'Decoração' },
  { id: '5', name: 'Cadeira Office', price: 1250.00, slug: 'cadeira-office', category: 'Escritório' },
  { id: '6', name: 'Mesa Lateral Concreto', price: 680.00, slug: 'mesa-lateral', category: 'Sala' },
];

export default function ColecoesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Cabeçalho da Página */}
      <section className="pt-24 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
          Coleção Completa
        </h1>
        <p className="text-foreground/60 text-lg max-w-2xl">
          Navegue por todas as nossas peças. Design funcional e estética atemporal para cada canto do seu projeto.
        </p>
      </section>

      {/* Barra de Filtros e Ordenação (Sticky) */}
      <div className="sticky top-0 z-20 bg-background/90 backdrop-blur-md border-b border-foreground/5">
        <div className="flex items-center justify-between py-4 px-6 md:px-12 max-w-[1600px] mx-auto">
          {/* Categorias Rápidas */}
          <div className="hidden md:flex items-center gap-8 overflow-x-auto no-scrollbar">
            {['Todos', 'Sala', 'Quarto', 'Iluminação', 'Decoração'].map((cat) => (
              <button 
                key={cat}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Botões de Ação: Filtros Avançados e Ordenação */}
          <div className="flex items-center gap-4 ml-auto">
            <button className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span>Ordenar por</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Aqui entra a chamada para abrir o componente Sheet.tsx para filtros avançados */}
            <Button variant="outline" className="text-sm border-foreground/20 rounded-full px-6">
              Filtros
            </Button>
          </div>
        </div>
      </div>

      {/* Grid de Produtos Nível Apple: Foco total na imagem, sem distrações */}
      <section className="px-6 md:px-12 py-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
          {catalogProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}