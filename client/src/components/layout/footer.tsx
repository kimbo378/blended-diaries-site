import { Mail, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subscribe Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="text-white font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-gray-300 mb-4">
            Get free samples & updates straight to your inbox.
          </p>
          <form
            action="https://app.kit.com/forms/8555422/subscriptions"
            method="post"
            className="flex w-full max-w-md gap-2 flex-col sm:flex-row"
          >
            <input type="hidden" name="success_url" value="https://theblendeddiaries.com/thanks" />
            <input
              type="email"
              name="email_address"
              placeholder="Enter your email"
              className="flex-1 min-h-[48px] h-12 rounded-md px-3 py-3 text-black text-base"
              data-testid="input-subscribe-email"
              required
            />
            <button
              type="submit"
              className="min-h-[48px] h-12 px-4 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition text-base font-medium"
              data-testid="button-subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Icons - Matching Header Style */}
        <div className="flex items-center justify-center space-x-3 mt-6 mb-6">
          <a
            href="mailto:hello@theblendeddiaries.com"
            className="text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2.5 shadow-md"
            aria-label="Email"
            data-testid="link-footer-social-email"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://tiktok.com/@blendeddiaries"
            target="_blank"
            rel="noopener noreferrer"
            className="text-diary-pink hover:text-diary-pink/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2.5 shadow-md"
            aria-label="TikTok"
            data-testid="link-footer-social-tiktok"
          >
            <Music2 size={24} />
          </a>

          <a
            href="https://www.instagram.com/blendeddiaries/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2.5 shadow-md"
            aria-label="Instagram"
            data-testid="link-footer-social-instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} The Blended Diaries. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
