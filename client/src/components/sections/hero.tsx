import React from "react";
import { Heart, Star } from "lucide-react";
import ChapterSample from "../../../assets/ChapterSample.png";
import taylorCover from "../../../assets/taylorcover.png";

export default function Hero() {
  return (
    <section className="py-20 relative z-10">
      {/* Decorative doodles */}
      <Star className="absolute top-8 left-8 text-diary-yellow transform rotate-12 z-20" size={24} />
      <Heart className="absolute top-12 right-16 text-diary-red transform -rotate-12 z-20" size={20} />
      <Star className="absolute top-32 right-8 text-diary-purple transform rotate-45 z-20" size={18} />
      <Heart className="absolute bottom-32 left-12 text-diary-red transform rotate-12 z-20" size={22} />
      <Star className="absolute bottom-16 right-32 text-diary-yellow transform -rotate-12 z-20" size={20} />
      {/* Small stars above book area */}
      <Star className="absolute top-16 left-20 text-diary-yellow transform rotate-12 z-20" size={12} />
      <Star className="absolute top-24 left-40 text-diary-purple transform -rotate-12 z-20" size={10} />
      <Star className="absolute top-12 left-56 text-diary-red transform rotate-45 z-20" size={14} />
      <Star className="absolute top-36 left-24 text-diary-yellow transform rotate-45 z-20" size={8} />
      <Star className="absolute top-20 left-64 text-diary-purple transform -rotate-45 z-20" size={10} />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Book Cover */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              {/* Book cover image - smaller and positioned left */}
              <img
                src={taylorCover}
                alt="The Blended Diaries Book Cover"
                className="h-[26rem] w-auto object-cover rounded-lg shadow-xl transform -rotate-3"
                data-testid="img-book-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left lg:pt-2">
            <h1 className="text-6xl lg:text-7xl font-bold mb-4 text-gray-800 font-handwritten">
              Chaos. Love. Repeat.
            </h1>
            <div className="relative mb-8">
              <p className="text-xl lg:text-2xl text-gray-600 mb-4 text-center lg:text-left">
                Blended family life. Less Pinterest. More real.
              </p>
              <div className="flex justify-center mt-6">
                <Heart className="text-diary-red" size={28} />
              </div>
            </div>

            <blockquote className="text-2xl lg:text-3xl italic text-diary-purple mb-8">
              "A diary series that makes blended family chaos feel normal. You will laugh. You might cry. You will definitely nod."
            </blockquote>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Read the Books Button */}
              <a
                href="/books"
                className="bg-diary-red text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
                data-testid="button-read-books"
              >
                Read the Books
              </a>

              {/* Free Sample Button */}
              <a
                href={ChapterSample}
                download="BlendedDiaries-Sample.png"
                className="bg-diary-purple text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition"
                data-testid="button-free-sample"
              >
                Free Sample 🎁
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
