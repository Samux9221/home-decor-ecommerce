'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { useCartStore } from '@/store/useCartStore';

export default function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore();
  const { items, removeItem, updateQuantity, cartTotal } = useCartStore();

  const total = cartTotal();
  const freeShippingThreshold = 150;
  const progress = Math.min((total / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = freeShippingThreshold - total;
  const achievedFreeShipping = total >= freeShippingThreshold;

  // Bloquear o scroll da página quando o carrinho estiver aberto
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay com Blur mais profundo e transição suave */}
      <div 
        className="fixed inset-0 z-[60] bg-[#1A1F18]/60 backdrop-blur-md transition-all duration-500 animate-in fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-[#F9F8F6] shadow-[rgba(0,0,0,0.15)_0px_0px_40px] flex flex-col animate-in slide-in-from-right duration-500 ease-out sm:border-l border-[#2C332A]/5">
        
        {/* HEADER */}
        <div className="px-8 py-6 flex items-center justify-between bg-gradient-to-b from-white/50 to-transparent">
          <h2 className="font-serif text-2xl text-[#2C332A] flex items-baseline gap-2">
            Carrinho 
            <span className="text-sm font-sans text-[#2C332A]/50 font-medium bg-[#3A4D39]/10 px-2 py-0.5 rounded-full">
              {items.length} {items.length === 1 ? 'item' : 'itens'}
            </span>
          </h2>
          <button 
            onClick={closeCart} 
            className="p-2 -mr-2 text-[#2C332A]/40 hover:text-[#2C332A] hover:bg-white/80 transition-all duration-300 rounded-full group"
            aria-label="Fechar carrinho"
          >
            <X strokeWidth={1.5} size={22} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* PROGRESSO FRETE GRÁTIS */}
        {items.length > 0 && (
          <div className="px-8 pb-4 relative z-10">
            <div className={`p-4 rounded-lg border transition-colors duration-500 ${achievedFreeShipping ? 'bg-[#3A4D39]/5 border-[#3A4D39]/20' : 'bg-white/60 border-white'}`}>
              <div className="flex justify-between items-end mb-2">
                <p className="text-xs text-[#2C332A]/80 font-medium flex items-center gap-1.5">
                  {achievedFreeShipping ? (
                    <span className="text-[#3A4D39] flex items-center gap-1.5 animate-in fade-in zoom-in duration-300">
                      <CheckCircle2 size={16} strokeWidth={2} />
                      Frete expresso gratuito desbloqueado!
                    </span>
                  ) : (
                    <>
                      Faltam <strong className="text-[#3A4D39] text-sm">{new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(remainingForFreeShipping)}</strong> para frete grátis
                    </>
                  )}
                </p>
              </div>
              <div className="w-full bg-[#2C332A]/10 h-1.5 rounded-full overflow-hidden relative">
                <div 
                  className={`absolute top-0 left-0 h-full transition-all duration-700 ease-out rounded-full ${achievedFreeShipping ? 'bg-[#3A4D39]' : 'bg-[#8F9779]'}`}
                  style={{ width: `${progress}%` }}
                />
                {/* Efeito de brilho percorrendo a barra quando cheia */}
                {achievedFreeShipping && (
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="w-1/2 h-full bg-white/40 skew-x-[45deg] animate-[shimmer_2s_infinite_ease-in-out] translate-x-[-150%]" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CONTEÚDO / ITENS */}
        <div className="flex-1 overflow-y-auto px-8 py-2 custom-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#3A4D39]/10 to-transparent flex items-center justify-center text-[#3A4D39] relative">
                <div className="absolute inset-2 border border-[#3A4D39]/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                <ShoppingBag strokeWidth={1} size={36} className="relative z-10" />
              </div>
              <div>
                <p className="text-xl font-serif text-[#2C332A] mb-2">Seu carrinho aguarda</p>
                <p className="text-sm text-[#2C332A]/60 max-w-[200px] mx-auto leading-relaxed">
                  Adicione peças de design para transformar o seu espaço.
                </p>
              </div>
              <button 
                onClick={closeCart}
                className="mt-4 border-b border-[#3A4D39] text-[#3A4D39] pb-1 text-sm font-medium hover:tracking-widest transition-all duration-300"
              >
                Explorar Coleções
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item, index) => (
                <li 
                  key={item.id} 
                  className="flex gap-5 group/item animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Imagem do Produto com Animação */}
                  <div className="w-24 h-28 relative bg-[#F4F3F0] overflow-hidden rounded-sm flex-shrink-0">
                    <Image 
                      src={item.image || '/placeholder-image.jpg'} 
                      alt={item.name} 
                      fill 
                      className="object-cover object-center group-hover/item:scale-110 transition-transform duration-700 ease-out mix-blend-multiply"
                    />
                  </div>

                  {/* Detalhes do Produto */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <h3 className="text-sm font-medium text-[#2C332A] leading-tight line-clamp-2 group-hover/item:text-[#3A4D39] transition-colors">
                          {item.name}
                        </h3>
                        {item.color && <p className="text-[11px] uppercase tracking-wider text-[#2C332A]/50 mt-1.5">{item.color}</p>}
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-auto pt-4">
                      {/* Controle de Quantidade Refinado */}
                      <div className="flex items-center bg-white border border-[#2C332A]/10 rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#2C332A]/40 hover:text-[#3A4D39] hover:bg-[#3A4D39]/5 transition-colors disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span className="w-6 text-center text-xs font-medium text-[#2C332A]">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#2C332A]/40 hover:text-[#3A4D39] hover:bg-[#3A4D39]/5 transition-colors"
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-semibold text-[#2C332A]">
                          {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(item.price)}
                        </p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-[10px] uppercase tracking-wider text-[#2C332A]/40 hover:text-red-500 transition-colors mt-1"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* FOOTER DO CARRINHO - ÁREA DE VALORES */}
        {items.length > 0 && (
          <div className="border-t border-[#2C332A]/10 bg-white px-8 py-6 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] relative z-20">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm text-[#2C332A]/70">
                <span>Subtotal</span>
                <span>{new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(total)}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-[#2C332A]/70">
                <span>Frete</span>
                <span className={achievedFreeShipping ? 'text-[#3A4D39] font-medium' : ''}>
                  {achievedFreeShipping ? 'Grátis' : 'Calculado no checkout'}
                </span>
              </div>
              
              <div className="pt-3 border-t border-[#2C332A]/5 flex justify-between items-end">
                <span className="text-sm text-[#2C332A] font-medium uppercase tracking-wider">Total</span>
                <span className="font-serif text-2xl text-[#3A4D39]">
                  {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(total)}
                </span>
              </div>
            </div>
            
            <Link 
              href="/checkout"
              onClick={closeCart}
              className="relative overflow-hidden w-full bg-[#3A4D39] text-[#F9F8F6] py-4 text-sm font-medium hover:bg-[#2C332A] transition-colors duration-300 flex items-center justify-center gap-3 group"
            >
              <span className="relative z-10 tracking-wide">Finalizar Compra Segura</span>
              <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Efeito de brilho (shine) no hover do botão */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1s]" />
            </Link>
          </div>
        )}
      </div>

      {/* Adicione este CSS globalmente ou no seu globals.css para as animações personalizadas */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
        @keyframes shine {
          100% { left: 125%; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(44, 51, 42, 0.1);
          border-radius: 20px;
        }
      `}} />
    </>
  );
}