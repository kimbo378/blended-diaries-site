import React from "react";
import { Mail, Instagram, Music2 } from "lucide-react";

export default function SocialCorner() {
  return (
    <>
      {/* Email icon - left position */}
      <a
        href="mailto:hello@theblendeddiaries.com"
        className="fixed top-11 left-[47%] transform -translate-x-16 z-50 text-diary-red hover:text-diary-red/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        aria-label="Email"
        data-testid="link-corner-social-email"
      >
        <Mail size={28} />
      </a>
      
      {/* TikTok icon - center position */}
      <a
        href="https://tiktok.com/@blendeddiaries"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-11 left-[47%] transform -translate-x-1/2 z-50 text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        aria-label="TikTok"
        data-testid="link-corner-social-tiktok"
      >
        <Music2 size={28} />
      </a>
      
      {/* Instagram icon - right position */}
      <a
        href="https://www.instagram.com/blendeddiaries/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-11 left-[47%] transform translate-x-4 z-50 text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        aria-label="Instagram"
        data-testid="link-corner-social-instagram"
      >
        <Instagram size={28} />
      </a>
    </>
  );
}