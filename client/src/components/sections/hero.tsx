import React from "react";
import { Heart, Star } from "lucide-react";

// ✅ Correct relative paths (your assets folder is at client/assets)
import ChapterSample from "../../../assets/ChapterSample.png";
import taylorCover from "../../../assets/taylorcover.png";

export default function Hero() {
  return (
    <section className="py-20 relative z-10 bg-[url('/attached_assets/linedpaper.png')] bg-repeat">
      {/* Decorative doodles */}
      <Star
        className="absolute top-8 left-8 text-diary-yellow transform rotate-12 z-20 hidden sm:block"
        size={24}
      />
      <Heart
        className="absolute top-12 right-16 text-diary-red transform -rotate-12 z-20 hidden md:block"
        size={18}
      />
      <Star
        className="absolute top-32 right-8 text-diary-purple transform rotate-45 z-20 hidden sm:block"
        size={18}
      />
      <Heart
        className="absolute bottom-32 left-12 text-diary-red transform rotate-12 z-20 hidden md:block"
        size={22}
      />
      <Star
        className="absolute bottom-16 right-32 text-diary-yellow transform -rotate-12 z-20 hidden lg:block"
        size={20}
      />

      {/* Hero content container */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left side - Book Cover */}
        <div className="flex justify-center lg:justify-center pt-4">
          <div className="relative">
            <img
              src={taylorCover}
              alt="The Blended Diaries Book Cover"
              className="
                max-w-[220px] sm:max-w-[280px] lg:max-w-sm
                h-auto mx-auto lg:mx-0
                rounded-lg shadow-xl transform -rotate-3
              "
              data-testid="img-book-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center lg:text-left">
          <h1
            className="
              whitespace-nowrap
              text-3xl sm:text-5xl lg:text-6xl
              font-bold mb-4 text-gray-800 font-handwritten
            "
          >
            The <span className="text-diary-teal">Blended</span> Diaries
          </h1>

          <p className="text-xl lg:text-2xl text-gray-800 mb-4">
            Blended family life. Less Pinterest. More real.
          </p>

          <blockquote className="text-xl lg:text-2xl italic text-diary-purple mb-8 mt-6">
            "Because when your family feels like a circus, you might as well
            enjoy the show."
          </blockquote>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="/books"
              className="bg-diary-red text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition text-center"
              data-testid="button-read-books"
            >
              Read the Books
            </a>
            <a
              href={ChapterSample}
              download="BlendedDiaries-Sample.png"
              className="bg-diary-purple text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition text-center"
              data-testid="button-free-sample"
            >
              Free Sample 📒
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
