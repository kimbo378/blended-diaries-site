import Hero from "@/components/sections/hero";
import CharacterCards from "@/components/sections/character-cards";
import Reviews from "@/components/sections/reviews";

export default function Home() {
  return (
    <div className="bg-[url('/attached_assets/linedpaper.png')] bg-repeat min-h-screen">
      <Hero />
      <CharacterCards />
      <Reviews />
    </div>
  );
}
