import { Heart, Star, Music2, Lock } from "lucide-react";
import logoImage from "@assets/Blended Diaries logo (1) (2)_1759152924243.png";
import { Link } from "wouter";

export default function Subscribed() {
  return (
    <div className="min-h-screen bg-[url('/attached_assets/linedpaper.png')] bg-repeat">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={logoImage}
              alt="The Blended Diaries Logo"
              className="w-32 h-32 object-contain"
              data-testid="img-logo"
            />
          </div>

          {/* Hand-drawn doodle banner */}
          <div className="relative h-16 mb-8 overflow-hidden">
            {/* Scattered doodles across the top in a playful line */}
            <Star
              className="absolute top-2 left-[5%] text-diary-purple transform rotate-12"
              size={20}
              strokeWidth={2.5}
            />
            <div className="absolute top-4 left-[12%] flex items-center">
              <Heart className="text-diary-red transform -rotate-6" size={18} strokeWidth={2.5} />
              <Lock className="text-diary-red transform rotate-12 -ml-2 mt-1" size={12} strokeWidth={2.5} />
            </div>
            <Music2
              className="absolute top-1 left-[22%] text-diary-purple transform rotate-[-20deg]"
              size={22}
              strokeWidth={2.5}
            />
            <Star
              className="absolute top-5 left-[32%] text-diary-yellow transform rotate-45"
              size={16}
              strokeWidth={2.5}
            />
            <div className="absolute top-2 left-[42%]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                <path d="M2 12 Q 6 8, 10 12 T 18 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <Heart
              className="absolute top-4 left-[52%] text-diary-red transform rotate-15"
              size={19}
              strokeWidth={2.5}
            />
            <Star
              className="absolute top-1 left-[62%] text-diary-purple transform -rotate-12"
              size={18}
              strokeWidth={2.5}
            />
            <Music2
              className="absolute top-5 left-[72%] text-black transform rotate-30"
              size={20}
              strokeWidth={2.5}
            />
            <div className="absolute top-3 left-[82%] flex items-center">
              <Heart className="text-diary-red transform rotate-6" size={17} strokeWidth={2.5} />
              <Lock className="text-diary-red transform -rotate-12 -ml-2 mt-1" size={11} strokeWidth={2.5} />
            </div>
            <Star
              className="absolute top-2 left-[92%] text-diary-yellow transform rotate-[-30deg]"
              size={21}
              strokeWidth={2.5}
            />
          </div>

          {/* Main content */}
          <div className="bg-white/80 rounded-xl shadow-lg p-8 sm:p-12 text-center border-4 border-dashed border-diary-purple">
            <h1 className="font-handwritten text-3xl sm:text-4xl lg:text-5xl text-black mb-6">
              💜 You're officially part of the family!
            </h1>

            <div className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              <p className="mb-4">
                Welcome to The Blended Diaries. You're not just subscribed, you're now part of our blended family crew.
              </p>
              
              <p className="mb-2">From here on, you'll get:</p>
              <ul className="text-left list-none space-y-2 mb-4">
                <li>✨ Exclusive freebies to make family life easier</li>
                <li>✨ Survival tips straight from the chaos</li>
                <li>✨ Sneak peeks and behind the scenes fun</li>
              </ul>

              <p>
                We're so glad you've joined us. Pull up a chair, make yourself at home, and let's enjoy the madness together.
              </p>
            </div>

            {/* Back to Homepage button */}
            <Link 
              href="/"
              className="inline-block bg-diary-purple text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition font-semibold text-lg"
              data-testid="button-back-home"
            >
              Back to Homepage
            </Link>
          </div>

          {/* Bottom decorative doodles */}
          <div className="flex justify-center gap-6 mt-8">
            <Heart className="text-diary-red transform rotate-12" size={24} strokeWidth={2.5} />
            <Star className="text-diary-yellow transform -rotate-12" size={24} strokeWidth={2.5} />
            <Heart className="text-diary-purple transform rotate-[-15deg]" size={24} strokeWidth={2.5} />
          </div>
        </div>
      </section>
    </div>
  );
}
