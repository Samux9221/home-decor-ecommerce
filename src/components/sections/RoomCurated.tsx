import { MOCK_ROOMS } from '../../lib/data';
import Link from 'next/link';

export default function RoomCurated() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-moss mb-4">Explore por Ambiente</h2>
          <p className="text-charcoal/70 font-light">Não vendemos móveis soltos. Ajudamos a compor espaços que fazem sentido para a sua rotina.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {MOCK_ROOMS.map((room, index) => (
          <Link href={room.link} key={index} className="group relative h-[500px] overflow-hidden block">
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500 z-10" />
            <img 
              src={room.image} 
              alt={room.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-sand text-3xl font-serif mb-2">{room.title}</h3>
              <span className="text-sand/80 text-sm tracking-[0.2em] uppercase border-b border-sand/30 pb-1">Ver coleção</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}