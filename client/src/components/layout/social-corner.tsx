import React from "react";
import { Mail, Instagram, Music2 } from "lucide-react";

export default function SocialCorner() {
  return (
    <div className="hidden md:flex justify-end items-center space-x-4 absolute top-16 right-4 z-40">
      {/* Email icon */}
      <a
        href="mailto:hello@theblendeddiaries.com"
        className="text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
        aria-label="Email"
        data-testid="link-corner-social-email"
      >
        <Mail size={20} />
      </a>
      
      {/* TikTok icon */}
      <a
        href="https://tiktok.com/@blendeddiaries"
        target="_blank"
        rel="noopener noreferrer"
        className="text-diary-pink hover:text-diary-pink/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
        aria-label="TikTok"
        data-testid="link-corner-social-tiktok"
      >
        <Music2 size={20} />
      </a>
      
      {/* Instagram icon */}
      <a
        href="https://www.instagram.com/blendeddiaries/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
        aria-label="Instagram"
        data-testid="link-corner-social-instagram"
      >
        <Instagram size={20} />
      </a>
    </div>
  );
}