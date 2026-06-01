import Link from 'next/link';

// Componentes de Ícones Customizados mantendo o padrão do Lucide
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="22" x2="12" y2="11"></line>
    <path d="M16 8a4 4 0 1 0-8 0c0 2 1 3.5 1 3.5s-.5 1-1 2.5c-.3 1 1 3 1 3"></path>
    <path d="M12 22a10 10 0 1 1 10-10"></path>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3A4D39] text-[#F9F8F6] pt-20 pb-8 mt-auto border-t border-[#2C332A]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="font-serif text-3xl tracking-widest text-[#F9F8F6] font-medium mb-6">
              LUMIÈRE
            </Link>
            <p className="text-[#F9F8F6]/70 text-sm leading-relaxed mb-8 max-w-sm">
              Elevando o conceito de morar bem. Curadoria de mobiliário e decoração com design atemporal, materiais nobres e produção sustentável.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-[#F9F8F6]/60 hover:text-[#F9F8F6] transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-[#F9F8F6]/60 hover:text-[#F9F8F6] transition-colors" aria-label="Pinterest">
                <PinterestIcon />
              </a>
              <a href="#" className="text-[#F9F8F6]/60 hover:text-[#F9F8F6] transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="text-[#F9F8F6]/60 hover:text-[#F9F8F6] transition-colors" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#8F9779]">Nossas Coleções</h4>
            <ul className="space-y-4">
              {['Mobiliário', 'Iluminação', 'Têxteis', 'Decoração', 'Novidades', 'Sale'].map((item) => (
                <li key={item}>
                  <Link href={`/colecoes/${item.toLowerCase()}`} className="text-[#F9F8F6]/70 hover:text-[#F9F8F6] hover:translate-x-1 transition-all inline-block text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#8F9779]">Atendimento</h4>
            <ul className="space-y-4">
              {['Contato', 'FAQ', 'Trocas e Devoluções', 'Acompanhe seu Pedido', 'Guia de Cuidados'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#F9F8F6]/70 hover:text-[#F9F8F6] hover:translate-x-1 transition-all inline-block text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#8F9779]">Fale Conosco</h4>
            <div className="text-[#F9F8F6]/70 text-sm space-y-3 mb-8">
              <p>Segunda a Sexta, 9h às 18h</p>
              <p>
                <a href="mailto:hello@lumiere.com" className="hover:text-[#F9F8F6] border-b border-transparent hover:border-[#F9F8F6] transition-all">hello@lumiere.com</a>
              </p>
              <p>
                <a href="tel:+351912345678" className="hover:text-[#F9F8F6] transition-colors">+351 912 345 678</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-[#F9F8F6]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F9F8F6]/50 text-xs">
            &copy; {currentYear} Lumière Design. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/termos" className="text-[#F9F8F6]/50 hover:text-[#F9F8F6] transition-colors text-xs">
              Termos de Serviço
            </Link>
            <Link href="/privacidade" className="text-[#F9F8F6]/50 hover:text-[#F9F8F6] transition-colors text-xs">
              Política de Privacidade
            </Link>
            <Link href="/cookies" className="text-[#F9F8F6]/50 hover:text-[#F9F8F6] transition-colors text-xs">
              Política de Cookies
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}