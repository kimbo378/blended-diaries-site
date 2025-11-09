import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reviews = [
  {
    text: "Finally! A book series that gets how bonkers blended families can be. Messy, funny, real.",
    author: "Sarah, Mum of 3",
    color: "diary-yellow",
  },
  {
    text: "My teens actually laughed out loud. That's a win in my book!",
    author: "Mark, Dad & Stepdad",
    color: "diary-purple",
  },
  {
    text: "Honest, warm, and wonderfully British. Felt like reading my own diary!",
    author: "Emma, Teacher",
    color: "diary-red",
  },
  {
    text: "Hilarious, heartfelt, and so relatable. My kids kept saying 'this is literally us!'",
    author: "Jo, Step-mum of 2",
    color: "pink-500",
  },
  {
    text: "This series feels like my own diary got published… only way funnier. My teen and I ended up with separate bookmarks because we kept dipping into it at different times.",
    author: "James, Dad & Step dad",
    color: "diary-yellow",
  },
  {
    text: "I thought I'd just skim a few pages but ended up laughing out loud on the train. People were staring but I didn't care.",
    author: "Sophie, Commuter & Step mum",
    color: "diary-purple",
  },
];

export default function Reviews() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-handwritten text-4xl text-center text-diary-charcoal mb-12">
          What Readers Say
          <Star
            className="inline ml-2 text-diary-yellow"
            size={28}
            fill="currentColor"
          />
        </h2>

        <div ref={elementRef} className="relative flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-yellow-200 p-6 shadow-lg relative w-full max-w-[350px] md:max-w-none
                ${index % 3 === 0 ? "-rotate-2" : index % 3 === 1 ? "rotate-1" : "-rotate-1"}
                hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300
                opacity-0 translate-y-8
                ${isVisible ? 'animate-fade-in-up' : ''}
              `}
              style={{
                backgroundColor: index % 6 === 0 ? '#fef08a' : 
                                 index % 6 === 1 ? '#fbcfe8' :  
                                 index % 6 === 2 ? '#ddd6fe' : 
                                 index % 6 === 3 ? '#fed7aa' : 
                                 index % 6 === 4 ? '#bbf7d0' : 
                                 '#bfdbfe',
                animationDelay: isVisible ? `${index * 150}ms` : '0ms',
                transformOrigin: 'center center',
              }}
            >
              {/* Enhanced sticky note shadow */}
              <div className="absolute inset-0 bg-black/10 transform translate-x-1 translate-y-1 -z-10 rounded-sm"></div>
              
              {/* Folded corner effect */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-black/20 transform rotate-45 translate-x-4 -translate-y-4 rounded-sm"></div>
              
              {/* Tape effect at top */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/40 rounded-sm shadow-sm"></div>
              
              <p className="font-handwritten text-lg text-gray-800 mb-4 leading-relaxed pt-2">
                "{review.text}"
              </p>
              <p className="text-sm text-gray-600 font-handwritten">
                - {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
