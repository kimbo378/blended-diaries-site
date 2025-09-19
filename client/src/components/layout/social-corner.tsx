import React from "react";
import { Mail, Instagram, Music2 } from "lucide-react";

export default function SocialCorner() {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
      <a
        href="mailto:hello@theblendeddiaries.com"
        className="text-gray-700 hover:text-diary-red transition-colors"
        aria-label="Email"
        data-testid="link-corner-social-email"
      >
        <Mail size={28} />
      </a>
      <a
        href="https://tiktok.com/@blendeddiaries"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-diary-purple transition-colors"
        aria-label="TikTok"
        data-testid="link-corner-social-tiktok"
      >
        <Music2 size={28} />
      </a>
      <a
        href="https://www.instagram.com/blendeddiaries/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-diary-red transition-colors"
        aria-label="Instagram"
        data-testid="link-corner-social-instagram"
      >
        <Instagram size={28} />
      </a>
    </div>
  );
}