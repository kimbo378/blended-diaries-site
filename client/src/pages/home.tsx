import Hero from "@/components/sections/hero";
import CharacterCards from "@/components/sections/character-cards";
import Reviews from "@/components/sections/reviews";
import Confetti from "@/components/ui/confetti";

export default function Home() {
  return (
    <div className="bg-[url('/attached_assets/linedpaper.png')] bg-repeat min-h-screen">
      <Confetti />
      <Hero />
      <CharacterCards />
      <Reviews />
    </div>
  );
}
