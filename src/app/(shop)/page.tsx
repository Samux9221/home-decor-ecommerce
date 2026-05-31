import Hero from "../../components/sections/Hero";
import RoomCurated from "../../components/sections/RoomCurated";
import ProductShowcase from "../../components/sections/ProductShowcase";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <RoomCurated />
      <ProductShowcase />
    </main>
  );
}