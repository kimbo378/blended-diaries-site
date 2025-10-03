import { Mail, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 max-w-7xl mx-auto px-6">
        {/* Subscribe */}
        <div className="md:col-span-6 flex flex-col items-start text-left">
          <h3 className="text-white font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-gray-300 mb-4">
            Get free samples & updates straight to your inbox.
          </p>
          <form
            action="https://app.kit.com/forms/8555422/subscriptions"
            method="post"
            target="_blank"
            className="flex w-full gap-2 flex-col sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                height: "45px",
                padding: "8px 12px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />

            <button
              type="submit"
              className="h-12 px-4 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition"
              data-testid="button-subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 md:pl-6 flex flex-col items-start text-left">
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/books" className="hover:text-white transition-colors">
                Books
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="/freebies"
                className="hover:text-white transition-colors"
              >
                Freebies
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Shop */}
        <div className="md:col-span-3 flex flex-col items-start text-left">
          <h3 className="text-white font-semibold text-lg mb-4">Shop</h3>
          <a
            href="https://amazon.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition"
            data-testid="link-amazon"
          >
            <span>🛒</span>
            <span>Buy on Amazon</span>
          </a>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 max-w-7xl mx-auto px-6">
          <div className="flex gap-4">
            <a
              href="mailto:hello@theblendeddiaries.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
              data-testid="link-social-email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://tiktok.com/@blendeddiaries"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="TikTok"
              data-testid="link-social-tiktok"
            >
              <Music2 size={20} />
            </a>
            <a
              href="https://www.instagram.com/blendeddiaries/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
              data-testid="link-social-instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-white text-sm">
            © 2025 The Blended Diaries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
