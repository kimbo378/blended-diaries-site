import React from "react";
import { Heart, Star } from "lucide-react";
import ChapterSample from "../../../assets/ChapterSample.png";
import taylorCover from "@assets/PAPERBACK_Taylor_DiariesCOVER_1776245932604.jpg";
import pumpkinCover from "../../../assets/pumpkincover.png";
import libbyCover from "@assets/LIBBYPaperback_cover99_1776246144743.jpg";

export default function Hero() {
  return (
    <section className="relative z-10 bg-[url('/attached_assets/linedpaper.png')] bg-repeat">

      {/* ── Subtle floating accents — kept small & out of the way ── */}
      <Star className="absolute top-6 left-6 text-diary-yellow rotate-12 z-20 hidden lg:block animate-float opacity-60" size={20} />
      <Heart className="absolute top-8 right-8 text-diary-red -rotate-12 z-20 hidden lg:block animate-float-delayed opacity-60" size={16} />
      <Star className="absolute bottom-10 right-10 text-diary-purple rotate-45 z-20 hidden lg:block animate-float opacity-60" size={16} />

      {/* ── Copy block ── */}
      <div className="max-w-3xl mx-auto pt-12 pb-10 px-6 text-center">

        <p className="font-handwritten text-diary-teal text-base sm:text-lg tracking-wide mb-4 animate-fade-in">
          ✏️ A book series unlike anything you've read before
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug mb-5 animate-fade-in-delayed">
          Funny, honest and painfully{" "}
          <span className="text-diary-teal">relatable</span> diaries about
          stepfamily life —{" "}
          <span className="text-diary-red">told through the eyes of the people living it.</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-500 italic max-w-xl mx-auto animate-fade-in-delayed-2">
          Sarcastic teens, overwhelmed mums and an unimpressed family dog.
          Real stories that are as funny as they are true.
        </p>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-xs mx-auto border-t border-dashed border-gray-300 mb-10" />

      {/* ── Three books in a clean, even row ── */}
      <div className="max-w-4xl mx-auto px-6 pb-2">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 items-start">

          {/* Taylor — coming soon, no link */}
          <div className="group flex flex-col items-center gap-3">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: '2/3' }}>
              <span className="absolute top-2 left-2 z-10 bg-diary-teal text-white
                text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                Coming Soon
              </span>
              <img src={taylorCover} alt="Taylor's Diary"
                className="w-full h-full object-cover transition-all duration-500
                  group-hover:scale-105 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>
            <div className="text-center">
              <p className="font-handwritten text-diary-teal font-bold text-base leading-tight">Taylor's Diary</p>
              <p className="text-xs text-gray-500 mt-0.5">For teens & adults</p>
            </div>
          </div>

          {/* Pumpkin — available, linked */}
          <a href="https://mybook.to/PumpkinsDiary" target="_blank" rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 no-underline">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl"
              style={{ aspectRatio: '2/3' }}>
              <span className="absolute top-2 left-2 z-10 bg-orange-500 text-white
                text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                Available Now
              </span>
              <img src={pumpkinCover} alt="Pumpkin's Diary"
                className="w-full h-full object-cover transition-all duration-500
                  group-hover:scale-105 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 2px rgba(249,115,22,0.6)' }} />
            </div>
            <div className="text-center">
              <p className="font-handwritten text-orange-500 font-bold text-base leading-tight">Pumpkin's Diary</p>
              <p className="text-xs text-gray-500 mt-0.5">For kids</p>
              <p className="text-xs font-bold text-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Buy Now →
              </p>
            </div>
          </a>

          {/* Libby — available, linked */}
          <a href="https://amzn.eu/d/00ejvcm5" target="_blank" rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 no-underline">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: '2/3' }}>
              <span className="absolute top-2 left-2 z-10 bg-pink-500 text-white
                text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                Available Now
              </span>
              <img src={libbyCover} alt="Libby's Diary"
                className="w-full h-full object-cover transition-all duration-500
                  group-hover:scale-105 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 2px rgba(236,72,153,0.6)' }} />
            </div>
            <div className="text-center">
              <p className="font-handwritten text-pink-500 font-bold text-base leading-tight">Libby's Diary</p>
              <p className="text-xs text-gray-500 mt-0.5">For adults</p>
              <p className="text-xs font-bold text-pink-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Buy Now →
              </p>
            </div>
          </a>

        </div>
      </div>

      {/* ── CTA buttons ── */}
      <div className="max-w-sm mx-auto px-6 pt-10 pb-14 flex flex-col sm:flex-row justify-center gap-4">
        <a href="/books"
          className="bg-diary-red text-white px-6 py-3 rounded-xl shadow font-bold text-sm
            hover:bg-red-600 hover:scale-105 hover:shadow-xl active:scale-95
            transition-all duration-300 text-center relative overflow-hidden group"
          data-testid="button-read-books">
          <span className="relative z-10">📚 See All Books</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </a>
        <a href={ChapterSample} download="BlendedDiaries-Sample.png"
          className="bg-diary-purple text-white px-6 py-3 rounded-xl shadow font-bold text-sm
            hover:bg-purple-600 hover:scale-105 hover:shadow-xl active:scale-95
            transition-all duration-300 text-center relative overflow-hidden group"
          data-testid="button-free-sample">
          <span className="relative z-10">Free Sample 📒</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </a>
      </div>

    </section>
  );
}
