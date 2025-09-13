import { ArrowDown, ArrowRight, Gift } from "lucide-react";
import { Link } from "wouter";
import { StickyNoteButton } from "@/components/ui/sticky-note-button";
import BookCover from "../../../../attached_assets/taylorcover.png";

export default function Hero() {
  return (
    <section className="relative py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl sm:text-6xl lg:text-7xl text-diary-charcoal/80 font-light">
            Cry. Laugh. Repeat.
          </h2>
          <p className="text-xl sm:text-2xl text-diary-charcoal/80 font-light mt-4">
            Blended family life. Less Filter. More real.
          </p>
        </div>

        {/* Doodle Arrow */}
        <div className="text-center mb-8">
          <ArrowDown className="text-3xl doodle-arrow mx-auto" size={32} />
        </div>

        {/* Book + Tagline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 items-center">
          {/* Featured book cover mockup */}
          <div className="polaroid mx-auto">
            <img
              src={BookCover}
              alt="The Blended Diaries Book Cover"
              className="polaroid mx-auto w-full h-64 object-cover"
            />
            <div className="tape absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>

          {/* Tagline and description */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-6">
            <p className="font-handwritten text-2xl sm:text-3xl text-diary-purple">
              "Blended family life, told honestly. It’s messy, it’s funny, and
              it feels just like home."
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
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

      {/* Scattered doodles */}
      <div className="absolute top-20 left-10 text-diary-yellow text-2xl transform -rotate-12">
        ★
      </div>
      <div className="absolute top-40 right-20 text-diary-red text-xl transform rotate-12">
        ❤
      </div>
    </section>
  );
}
