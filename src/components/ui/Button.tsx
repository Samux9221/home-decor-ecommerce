import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  className = '', 
  variant = 'default', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  // Estilos base de um botão moderno: cantos arredondados, transição suave, centralizado
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full whitespace-nowrap";
  
  // Variantes de estilo (o "outline" é o que chamamos na página de coleções)
  const variants = {
    default: "bg-foreground text-background hover:bg-foreground/90",
    outline: "border border-foreground/20 text-foreground hover:bg-foreground/5",
    ghost: "text-foreground hover:bg-foreground/5",
  };

  // Tamanhos
  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}