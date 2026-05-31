// src/lib/data.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  story: string; // Foco no propósito do item
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Poltrona Bouclé',
    price: 3200.00,
    category: 'Sala de Estar',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop',
    story: 'Desenhada para ser o seu refúgio particular após um longo dia.'
  },
  {
    id: '2',
    name: 'Mesa de Centro Orgânica',
    price: 1850.00,
    category: 'Sala de Estar',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop',
    story: 'Madeira maciça esculpida para trazer a natureza para o centro das suas conversas.'
  },
  {
    id: '3',
    name: 'Luminária Pendente Gota',
    price: 890.00,
    category: 'Iluminação',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=1000&auto=format&fit=crop',
    story: 'Luz suave e difusa que transforma a atmosfera de qualquer jantar.'
  },
  {
    id: '4',
    name: 'Vaso de Cerâmica Crua',
    price: 340.00,
    category: 'Decoração',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
    story: 'Moldado à mão. A imperfeição intencional que traz alma ao ambiente.'
  }
];

export const MOCK_ROOMS = [
  {
    title: 'Estar & Conexão',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1000&auto=format&fit=crop',
    link: '/colecoes/sala'
  },
  {
    title: 'Refúgio Particular',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop',
    link: '/colecoes/quarto'
  }
];