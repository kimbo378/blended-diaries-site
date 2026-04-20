import React from "react";
import taylorCover from "@assets/revisedcroppedtaylorcover_1776663460286.png";
import pumpkinCover from "../../assets/pumpkincover.png";
import libbyCover from "@assets/LIBBYPaperback_cover99_1776246144743.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface BookCardProps {
  cover: string;
  alt: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  glowColor: string;
  delay: string;
  isVisible: boolean;
  href?: string;
}

function BookCard({ cover, alt, title, subtitle, badge, badgeColor, glowColor, delay, isVisible, href }: BookCardProps) {
  const content = (
    <article
      className="group relative w-[240px] flex flex-col items-center cursor-pointer select-none opacity-0 translate-y-8"
      style={{ animation: isVisible ? `fadeInUp 0.6s ease-out ${delay} forwards` : 'none' }}
    >
      {/* Badge */}
      <span className={`absolute top-3 left-3 z-20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md ${badgeColor}`}>
        {badge}
      </span>

      {/* Cover image container — no background, just the image */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg"
        style={{ aspectRatio: '2/3' }}>
        <img
          src={cover}
          alt={alt}
          className="w-full h-full object-cover rounded-2xl transition-all duration-500
            group-hover:scale-105 group-hover:brightness-110"
        />

        {/* Shine sweep on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
          bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none" />

        {/* Glow border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 28px 6px ${glowColor}` }}
        />
      </div>

      {/* Text below cover */}
      <div className="mt-3 text-center px-1">
        <h3 className="font-handwritten text-xl font-bold text-diary-teal leading-tight">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>

      {/* Clickable arrow pulse — only if linked */}
      {href && (
        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <span className="text-xs font-bold text-white bg-diary-teal px-3 py-1 rounded-full shadow">
            Buy Now →
          </span>
        </div>
      )}
    </article>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">
        {content}
      </a>
    );
  }

  return content;
}

export default function Books() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <main
      ref={elementRef}
      className="flex flex-wrap justify-center gap-10 my-12 mx-auto max-w-[1200px] px-4"
    >
      {/* Taylor's Diary — not yet live, no link */}
      <BookCard
        cover={taylorCover}
        alt="Taylor's Diary cover"
        title="Taylor's Diary"
        subtitle="Diary for teenagers and adults… if you dare"
        badge="Coming Soon"
        badgeColor="bg-diary-teal"
        glowColor="rgba(0, 185, 185, 0.45)"
        delay="0s"
        isVisible={isVisible}
      />

      {/* Pumpkin's Diary */}
      <BookCard
        cover={pumpkinCover}
        alt="Pumpkin's Diary cover"
        title="Pumpkin's Diary"
        subtitle="The Dog's Diary, for kids"
        badge="Available Now"
        badgeColor="bg-orange-500"
        glowColor="rgba(231, 76, 60, 0.45)"
        delay="0.15s"
        isVisible={isVisible}
        href="https://mybook.to/PumpkinsDiary"
      />

      {/* Libby's Diary — now live */}
      <BookCard
        cover={libbyCover}
        alt="Libby's Diary cover"
        title="Libby's Diary"
        subtitle="Diary for adults only"
        badge="Available Now"
        badgeColor="bg-pink-500"
        glowColor="rgba(236, 72, 153, 0.45)"
        delay="0.3s"
        isVisible={isVisible}
        href="https://amzn.eu/d/00ejvcm5"
      />

      {/* Caleb's Diary — coming soon */}
      <article
        className="group relative w-[240px] flex flex-col items-center opacity-0 translate-y-8"
        style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.45s forwards' : 'none' }}
      >
        <span className="absolute top-3 left-3 z-20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md bg-gray-400">
          Coming Soon
        </span>
        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
          style={{ aspectRatio: '2/3' }}
        >
          <div className="text-center px-6">
            <p className="font-handwritten text-2xl text-gray-400 leading-snug">Caleb's Diary</p>
            <p className="text-sm text-gray-400 mt-2">Cover coming soon…</p>
          </div>
        </div>
        <div className="mt-3 text-center px-1">
          <h3 className="font-handwritten text-xl font-bold text-diary-teal leading-tight">Caleb's Diary</h3>
          <p className="text-sm text-gray-600 mt-1">Diary for teenagers and adults… if you dare</p>
        </div>
      </article>

      {/* More Coming Soon */}
      <article
        className="group relative w-[240px] flex flex-col items-center opacity-0 translate-y-8"
        style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s forwards' : 'none' }}
      >
        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-teal-50 to-purple-50 flex items-center justify-center"
          style={{ aspectRatio: '2/3' }}
        >
          <div className="text-center px-6">
            <p className="text-4xl mb-3">📖✨</p>
            <p className="font-handwritten text-xl text-diary-teal leading-snug">More families coming soon</p>
            <p className="text-sm text-gray-500 mt-2">New dramas, new diaries, new chaos</p>
          </div>
        </div>
        <div className="mt-3 text-center px-1">
          <h3 className="font-handwritten text-xl font-bold text-diary-teal leading-tight">More Families</h3>
          <p className="text-sm text-gray-600 mt-1">Stay tuned — the world is expanding</p>
        </div>
      </article>
    </main>
  );
}
