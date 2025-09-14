import React from "react";
import { Mail, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Subscribe */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-gray-300 mb-4">
            Get free samples & updates straight to your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md text-black"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black px-4 py-2 rounded-r-md hover:bg-yellow-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/books" className="hover:underline">
                Books
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/freebies" className="hover:underline">
                Freebies
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Shop */}
        <div className="flex flex-col items-end text-right">
          <h3 className="text-white font-semibold text-lg mb-4">Shop</h3>
          <a
            href="https://amazon.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-yellow-400 transition"
          >
            <span>🛒</span>
            <span>Buy on Amazon</span>
          </a>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="mailto:hello@theblendeddiaries.com"
            className="hover:text-yellow-400"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://tiktok.com/@blendeddiaries"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <Music2 size={20} />
          </a>
          <a
            href="https://instagram.com/blendeddiaries"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 The Blended Diaries. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
