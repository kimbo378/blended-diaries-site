import { Quote } from "lucide-react";

const characters = [
  {
    name: "Taylor",
    description: "Teen with sarcasm for breakfast. Mum's new girlfriend. New siblings. New mess.",
    quote: "This is fine. Everything is fine.",
    color: "diary-purple",
  },
  {
    name: "Caleb",
    description: "Same house. Different brain. Deadpan commentary included.",
    quote: "That's... interesting.",
    color: "green-500",
  },
  {
    name: "Libby",
    description: "Mum. Ringmaster. Trying her best. Powered by tea.",
    quote: "Has anyone seen my sanity?",
    color: "diary-yellow",
  },
  {
    name: "Pumpkin",
    description: "Small scruffy dog. Big opinions. Zero personal space.",
    quote: "Woof. (Obviously.)",
    color: "diary-red",
  },
];

export default function CharacterCards() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-handwritten text-4xl sm:text-5xl text-center text-diary-charcoal mb-12">
          Meet the Family
          <span className="ml-4 text-diary-yellow">🐾</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className={`bg-white rounded-lg p-6 shadow-lg border-l-4 border-${character.color} transform hover:scale-105 transition-transform`}
            >
              <h3 className="font-handwritten text-2xl text-diary-charcoal mb-3">
                {character.name}
              </h3>
              <p className="text-diary-charcoal/80 mb-4">{character.description}</p>
              <div className={`text-${character.color}`}>
                <Quote className="inline mr-2" size={16} />
                <span className="font-handwritten">{character.quote}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
