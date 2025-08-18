import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-diary-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-handwritten text-2xl mb-4">The Blended Diaries</h3>
            <p className="text-gray-300 mb-4">
              Honest, funny diaries about the beautiful chaos of blended family life.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-diary-red hover:text-diary-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-diary-red hover:text-diary-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-diary-red hover:text-diary-yellow transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-handwritten text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/books" className="text-gray-300 hover:text-diary-yellow transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-diary-yellow transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/freebies" className="text-gray-300 hover:text-diary-yellow transition-colors">
                  Freebies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-diary-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-handwritten text-xl mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-diary-yellow transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon KDP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-diary-yellow transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Etsy Shop
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-diary-yellow transition-colors">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © 2024 The Blended Diaries. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/legal" className="text-gray-400 hover:text-diary-yellow text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal" className="text-gray-400 hover:text-diary-yellow text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
