import { ArrowDown, ArrowRight, Gift } from "lucide-react";
import { Link } from "wouter";
import { StickyNoteButton } from "@/components/ui/sticky-note-button";

export default function Hero() {
  return (
    <section className="relative py-12 sm:py-20 margin-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl sm:text-6xl lg:text-7xl text-diary-charcoal mb-4">
            Chaos. Love. Repeat.
          </h2>
          <p className="text-xl sm:text-2xl text-diary-charcoal/80 font-light max-w-2xl mx-auto mb-8">
            Blended family life. Less Pinterest. More real.
          </p>
          
          {/* Doodle Arrow */}
          <div className="text-center mb-8">
            <ArrowDown className="text-3xl doodle-arrow mx-auto" size={32} />
          </div>
        </div>
        
        {/* Book Collage Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Featured book cover mockup */}
          <div className="polaroid mx-auto">
            <img
              src="/attached_assets/Screenshot 2025-09-13 121227.png"
              alt="The Blended Diaries Book Cover"
              className="w-full h-64 object-cover"
            />
            <div className="tape absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
          
          {/* Tagline and description */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-6">
            <p className="font-handwritten text-2xl sm:text-3xl text-diary-purple">
              "A diary series that makes blended family chaos feel normal. You will laugh. You might cry. You will definitely nod."
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/books">
                <StickyNoteButton color="red" className="text-lg px-6 py-3">
                  Read the Books <ArrowRight className="ml-2" size={16} />
                </StickyNoteButton>
              </Link>
              <Link href="/freebies">
                <StickyNoteButton color="purple" className="text-lg px-6 py-3">
                  Free Sample <Gift className="ml-2" size={16} />
                </StickyNoteButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scattered doodles */}
      <div className="absolute top-20 left-10 text-diary-yellow text-2xl transform rotate-12">
        ⭐
      </div>
      <div className="absolute top-40 right-20 text-diary-red text-xl transform -rotate-12">
        ❤️
      </div>
    </section>
  );
}
