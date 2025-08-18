import Hero from "@/components/sections/hero";
import CharacterCards from "@/components/sections/character-cards";
import Reviews from "@/components/sections/reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <CharacterCards />
      <Reviews />
    </div>
  );
}
