import React from "react";
import { Heart } from "lucide-react";
import ChapterSample from "../../../assets/ChapterSample.png";
import taylorCover from "../../../assets/taylorcover.png";

export default function Hero() {
  return (
    <section className="py-16 bg-[url('/attached_assets/linedpaper.png')] bg-repeat">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Book Cover */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Purple tape pieces */}
              <div className="absolute -top-6 -left-4 w-16 h-8 bg-purple-600 opacity-80 transform rotate-12 z-10 rounded-sm shadow-md"></div>
              <div className="absolute -top-6 -right-4 w-16 h-8 bg-purple-600 opacity-80 transform -rotate-12 z-10 rounded-sm shadow-md"></div>
              <div className="absolute -bottom-6 -left-4 w-16 h-8 bg-purple-600 opacity-80 transform -rotate-12 z-10 rounded-sm shadow-md"></div>
              <div className="absolute -bottom-6 -right-4 w-16 h-8 bg-purple-600 opacity-80 transform rotate-12 z-10 rounded-sm shadow-md"></div>
              
              {/* Book cover image - taped on at an angle */}
              <img
                src={taylorCover}
                alt="The Blended Diaries Book Cover"
                className="h-96 w-auto object-cover rounded-lg shadow-xl transform -rotate-3"
                data-testid="img-book-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 font-handwritten">
              Chaos. Love. Repeat.
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Blended family life. Less Pinterest. More real.
            </p>
            <Heart className="mx-auto lg:mx-0 text-diary-red mb-8" size={32} />

            <blockquote className="text-xl italic text-diary-purple mb-10">
              "A diary series that makes blended family chaos feel normal. You will laugh. You might cry. You will definitely nod."
            </blockquote>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Read the Books Button */}
              <a
                href="/books"
                className="bg-diary-red text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
                data-testid="button-read-books"
              >
                Read the Books →
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
