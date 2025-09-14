import React from "react";
import { Heart } from "lucide-react";
import ChapterSample from "../../../assets/ChapterSample.png";

export default function Hero() {
  return (
    <section className="text-center py-16 bg-[url('/attached_assets/linedpaper.png')] bg-repeat">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Cry. Laugh. Repeat.
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Crazy family life. Less filter. More real.
      </p>
      <Heart className="mx-auto text-diary-red mb-8" size={32} />

      <blockquote className="text-xl italic text-diary-purple max-w-2xl mx-auto mb-10">
        "Blended family life, told honestly. It's messy, it's funny, and it
        feels just like home."
      </blockquote>

      <div className="flex justify-center gap-4">
        {/* Read the Books Button */}
        <a
          href="/books"
          className="bg-diary-red text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
        >
          Read the Books →
        </a>

        {/* Free Sample Button */}
        <a
          href={ChapterSample}
          download="BlendedDiaries-Sample.png"
          className="bg-diary-purple text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition"
        >
          Free Sample 🎁
        </a>
      </div>
    </section>
  );
}
