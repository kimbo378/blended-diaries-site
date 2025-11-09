import React from "react";
import taylorCover from "@assets/TAYDIGITAL_BOOK_THUMBNAIL_1762708518493.jpg";
import pumpkinCover from "../../assets/pumpkincover.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Books() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <main ref={elementRef} className="flex flex-wrap justify-center gap-10 my-10 mx-auto max-w-[1100px] px-4">
      {/* Taylor's Diary */}
      <a
        href="/taylor"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy Taylor's Diary on Amazon"
        className="no-underline group"
      >
        <article className="bg-white rounded-[20px] shadow-md w-[280px] text-center p-5 flex flex-col items-center 
          transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2
          opacity-0 translate-y-8"
          style={{
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0s forwards' : 'none'
          }}>
          <p className="text-gray-600 font-bold text-sm mb-2.5">
            Now Available - Click to Buy
          </p>
          <div className="w-[220px] h-[320px] rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden mb-4 p-2.5 text-center relative">
            <img
              src={taylorCover}
              alt="Taylor's Diary cover"
              className="w-full h-full object-contain transition-all duration-500 
                group-hover:scale-110 group-hover:brightness-105"
              style={{
                filter: 'drop-shadow(0 0 0px rgba(0, 185, 185, 0))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 185, 185, 0.5))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(0, 185, 185, 0))';
              }}
            />
          </div>
          <h3 className="text-xl font-bold text-diary-teal m-0">Taylor's Diary</h3>
          <p className="mt-1.5 text-[15px] text-black font-medium">
            Diary for teenagers and adults… if you dare
          </p>
        </article>
      </a>

      {/* Pumpkin's Diary */}
      <a
        href="https://mybook.to/PumpkinsDiary"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy Pumpkin's Diary on Amazon"
        className="no-underline group"
      >
        <article className="bg-white rounded-[20px] shadow-md w-[280px] text-center p-5 flex flex-col items-center 
          transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2
          opacity-0 translate-y-8"
          style={{
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s forwards' : 'none'
          }}>
          <p className="text-gray-600 font-bold text-sm mb-2.5">
            Now Available - Click to Buy
          </p>
          <div className="w-[220px] h-[320px] rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden mb-4 p-2.5 text-center">
            <img
              src={pumpkinCover}
              alt="Pumpkin's Diary cover"
              className="w-full h-full object-contain transition-all duration-500 
                group-hover:scale-110 group-hover:brightness-105"
              style={{
                filter: 'drop-shadow(0 0 0px rgba(231, 76, 60, 0))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(231, 76, 60, 0.5))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(231, 76, 60, 0))';
              }}
            />
          </div>
          <h3 className="text-xl font-bold text-diary-teal m-0">Pumpkin's Diary</h3>
          <p className="mt-1.5 text-[15px] text-black font-medium">
            The Dog's Diary, for kids
          </p>
        </article>
      </a>

      {/* Libby's Diary */}
      <article className="bg-white rounded-[20px] shadow-md w-[280px] text-center p-5 flex flex-col items-center 
        transition-all duration-500 opacity-0 translate-y-8"
        style={{
          animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s forwards' : 'none'
        }}>
        <div className="w-[220px] h-[320px] rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden mb-4 p-2.5 text-center">
          <p>Cover coming soon</p>
        </div>
        <h3 className="text-xl font-bold text-diary-teal m-0">Libby's Diary</h3>
        <p className="mt-1.5 text-[15px] text-black font-medium">
          Diary for adults only
        </p>
        <p className="mt-2 text-[15px] text-gray-500">Coming soon</p>
      </article>

      {/* Caleb's Diary */}
      <article className="bg-white rounded-[20px] shadow-md w-[280px] text-center p-5 flex flex-col items-center 
        transition-all duration-500 opacity-0 translate-y-8"
        style={{
          animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s forwards' : 'none'
        }}>
        <div className="w-[220px] h-[320px] rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden mb-4 p-2.5 text-center">
          <p>Cover coming soon</p>
        </div>
        <h3 className="text-xl font-bold text-diary-teal m-0">Caleb's Diary</h3>
        <p className="mt-1.5 text-[15px] text-black font-medium">
          Diary for teenagers and adults… if you dare
        </p>
        <p className="mt-2 text-[15px] text-gray-500">Coming soon</p>
      </article>

      {/* The Blended Diaries: Always Evolving */}
      <article className="bg-white rounded-[20px] shadow-md w-[280px] text-center p-5 flex flex-col items-center 
        transition-all duration-500 opacity-0 translate-y-8"
        style={{
          animation: isVisible ? 'fadeInUp 0.6s ease-out 0.8s forwards' : 'none'
        }}>
        <div className="w-[220px] h-[320px] rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden mb-4 p-2.5 text-center">
          <p>The Blended Diaries: Always Evolving</p>
        </div>
        <h3 className="text-xl font-bold text-diary-teal m-0">More Families Coming Soon</h3>
        <p className="mt-1.5 text-[15px] text-black font-medium">
          Our world's expanding with new families, new dramas, and new diaries,
          proving there's no one way to be a family but plenty of ways to laugh
          about it.
        </p>
        <p className="mt-2 text-[15px] text-gray-500">Stay tuned</p>
      </article>
    </main>
  );
}
