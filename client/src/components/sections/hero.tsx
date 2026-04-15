import React from "react";
import { Heart, Star } from "lucide-react";
import ChapterSample from "../../../assets/ChapterSample.png";
import taylorCover from "@assets/PAPERBACK_Taylor_DiariesCOVER_1776245932604.jpg";
import pumpkinCover from "../../../assets/pumpkincover.png";
import libbyCover from "@assets/LIBBYPaperback_cover99_1776246144743.jpg";

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[url('/attached_assets/linedpaper.png')] bg-repeat">

      {/* ── Floating doodle accents ── */}
      <Star className="absolute top-6 left-6 text-diary-yellow rotate-12 z-20 hidden sm:block animate-float" size={26} />
      <Heart className="absolute top-10 right-10 text-diary-red -rotate-12 z-20 hidden md:block animate-float-delayed" size={20} />
      <Star className="absolute top-36 right-6 text-diary-purple rotate-45 z-20 hidden sm:block animate-float" size={16} />
      <Heart className="absolute bottom-24 left-10 text-diary-red rotate-12 z-20 hidden md:block animate-float-delayed" size={22} />
      <Star className="absolute bottom-12 right-28 text-diary-yellow -rotate-12 z-20 hidden lg:block animate-float" size={18} />
      <Heart className="absolute top-1/2 left-4 text-pink-400 rotate-6 z-20 hidden xl:block animate-float" size={14} />

      {/* ── Headline copy ── */}
      <div className="max-w-4xl mx-auto pt-14 pb-6 px-6 text-center">
        <p className="font-handwritten text-diary-teal text-lg sm:text-xl tracking-wide mb-2 animate-fade-in">
          ✏️ A book series unlike anything you've read before
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4 animate-fade-in-delayed">
          Funny, honest and painfully{" "}
          <span className="text-diary-teal font-handwritten">relatable</span>{" "}
          diaries about stepfamily life,{" "}
          <br className="hidden sm:block" />
          told through the eyes of the{" "}
          <span className="text-diary-red font-handwritten">people living it.</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 italic max-w-2xl mx-auto animate-fade-in-delayed-2">
          Sarcastic teens, overwhelmed mums and an unimpressed family dog —
          real stories that are as funny as they are true.
        </p>
      </div>

      {/* ── Three books ── */}
      <div className="max-w-5xl mx-auto px-6 pb-4">
        <div className="flex items-end justify-center gap-4 sm:gap-8">

          {/* Taylor — left, tilted left, slightly lower */}
          <div className="relative group flex-shrink-0 w-[150px] sm:w-[190px] lg:w-[210px]
            -rotate-3 hover:rotate-0 hover:scale-105 hover:-translate-y-3
            transition-all duration-500 ease-out cursor-default"
            style={{ marginBottom: '0px' }}>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20
              bg-diary-teal text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow whitespace-nowrap">
              Coming Soon
            </span>
            <div className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ aspectRatio: '2/3' }}>
              <img src={taylorCover} alt="Taylor's Diary"
                className="w-full h-full object-cover transition-all duration-500
                  group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 24px 6px rgba(0,185,185,0.4)' }} />
            </div>
            <p className="text-center font-handwritten text-diary-teal text-sm mt-2 font-bold">Taylor's Diary</p>
          </div>

          {/* Pumpkin — centre, raised up, biggest */}
          <a href="https://mybook.to/PumpkinsDiary" target="_blank" rel="noopener noreferrer"
            className="relative group flex-shrink-0 w-[170px] sm:w-[215px] lg:w-[240px]
              -translate-y-6 hover:-translate-y-10 hover:scale-105
              transition-all duration-500 ease-out no-underline">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20
              bg-orange-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow whitespace-nowrap">
              Available Now ★
            </span>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: '2/3' }}>
              <img src={pumpkinCover} alt="Pumpkin's Diary"
                className="w-full h-full object-cover transition-all duration-500
                  group-hover:brightness-110 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 28px 8px rgba(231,76,60,0.45)' }} />
            </div>
            <p className="text-center font-handwritten text-orange-500 text-sm mt-2 font-bold">Pumpkin's Diary</p>
            <div className="flex justify-center mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-xs font-bold text-white bg-orange-500 px-3 py-0.5 rounded-full">Buy Now →</span>
            </div>
          </a>

          {/* Libby — right, tilted right, slightly lower */}
          <a href="https://amzn.eu/d/00ejvcm5" target="_blank" rel="noopener noreferrer"
            className="relative group flex-shrink-0 w-[150px] sm:w-[190px] lg:w-[210px]
              rotate-3 hover:rotate-0 hover:scale-105 hover:-translate-y-3
              transition-all duration-500 ease-out no-underline">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20
              bg-pink-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow whitespace-nowrap">
              Available Now ★
            </span>
            <div className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ aspectRatio: '2/3' }}>
              <img src={libbyCover} alt="Libby's Diary"
                className="w-full h-full object-cover transition-all duration-500
                  group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 24px 6px rgba(236,72,153,0.45)' }} />
            </div>
            <p className="text-center font-handwritten text-pink-500 text-sm mt-2 font-bold">Libby's Diary</p>
            <div className="flex justify-center mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-xs font-bold text-white bg-pink-500 px-3 py-0.5 rounded-full">Buy Now →</span>
            </div>
          </a>
        </div>
      </div>

      {/* ── Quote + CTAs ── */}
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-16 text-center">
        <blockquote className="text-lg sm:text-xl italic text-diary-purple mb-8 animate-fade-in-delayed-2">
          "Because when your family feels like a circus, you might as well enjoy the show."
        </blockquote>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delayed-3">
          <a href="/books"
            className="bg-diary-red text-white px-7 py-3 rounded-xl shadow-lg
              hover:bg-red-600 transition-all duration-300 text-center font-bold
              hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group"
            data-testid="button-read-books">
            <span className="relative z-10">📚 See All Books</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          <a href={ChapterSample} download="BlendedDiaries-Sample.png"
            className="bg-diary-purple text-white px-7 py-3 rounded-xl shadow-lg
              hover:bg-purple-600 transition-all duration-300 text-center font-bold
              hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group"
            data-testid="button-free-sample">
            <span className="relative z-10">Free Sample 📒</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
