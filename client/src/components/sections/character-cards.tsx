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
    color: "diary-green",
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
  const getBorderClass = (color: string) => {
    switch (color) {
      case "diary-purple": return "border-diary-purple";
      case "diary-green": return "border-diary-green";
      case "diary-yellow": return "border-diary-yellow";
      case "diary-red": return "border-diary-red";
      default: return "border-gray-300";
    }
  };

  const getTextClass = (color: string) => {
    switch (color) {
      case "diary-purple": return "text-diary-purple";
      case "diary-green": return "text-diary-green";
      case "diary-yellow": return "text-diary-yellow";
      case "diary-red": return "text-diary-red";
      default: return "text-gray-600";
    }
  };

  return (
    <section className="py-8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-handwritten text-gray-800 mb-3">
            Meet the First Family
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Our world is expanding with new families, new dramas, and new diaries,
            proving there's no one way to be a family but plenty of ways to laugh
            about it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className={`bg-white rounded-lg p-6 shadow-lg border-l-4 ${getBorderClass(character.color)} transform hover:scale-105 transition-transform`}
            >
              <h3 className="font-handwritten text-2xl text-diary-charcoal mb-3">
                {character.name}
              </h3>
              <p className="text-diary-charcoal/80 mb-4">{character.description}</p>
              <div className={getTextClass(character.color)} data-testid={`quote-${character.name.toLowerCase()}`}>
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
