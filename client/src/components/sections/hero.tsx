import React from "react";
import { Heart, Star } from "lucide-react";
import ChapterSample from "../../../assets/ChapterSample.png";
import taylorCover from "../../../assets/taylorcover.png";

export default function Hero() {
  return (
    <section className="py-16 relative">
      {/* Decorative doodles */}
      <Star className="absolute top-8 left-8 text-diary-yellow transform rotate-12" size={20} />
      <Heart className="absolute top-12 right-16 text-diary-red transform -rotate-12" size={16} />
      <Star className="absolute top-32 right-8 text-diary-purple transform rotate-45" size={14} />
      <Heart className="absolute bottom-32 left-12 text-diary-red transform rotate-12" size={18} />
      <Star className="absolute bottom-16 right-32 text-diary-yellow transform -rotate-12" size={16} />
      <Heart className="absolute top-64 left-32 text-diary-red transform rotate-45" size={14} />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Book Cover */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              {/* Book cover image - smaller and positioned left */}
              <img
                src={taylorCover}
                alt="The Blended Diaries Book Cover"
                className="h-96 w-auto object-cover rounded-lg shadow-xl transform -rotate-3"
                data-testid="img-book-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left lg:pt-2">
            <h1 className="text-5xl font-bold mb-2 text-gray-800 font-handwritten">
              Chaos. Love. Repeat.
            </h1>
            <div className="relative mb-8">
              <p className="text-lg text-gray-600 mb-2 text-center lg:text-left">
                Blended family life. Less Pinterest. More real.
              </p>
              <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-40 lg:transform-none top-6">
                <Heart className="text-diary-red" size={32} />
              </div>
            </div>

            <blockquote className="text-xl italic text-diary-purple mb-8">
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
