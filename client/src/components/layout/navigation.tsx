import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Instagram, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Blended Diaries logo (1) (2)_1759152924243.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home", color: "text-gray-400 hover:text-gray-500" },
    { href: "/books", label: "Books", color: "text-gray-400 hover:text-gray-500" },
    { href: "/about", label: "About", color: "text-gray-400 hover:text-gray-500" },
    { href: "/freebies", label: "Freebies", color: "text-gray-400 hover:text-gray-500" },
    { href: "/contact", label: "Contact", color: "text-gray-400 hover:text-gray-500" },
  ];

  return (
    <nav className="relative z-50 bg-diary-cream sticky top-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:gap-1 py-4">
          {/* Row 1, Col 1: Site Title */}
          <div className="row-start-1 col-start-1 flex items-center">
            <Link href="/" className="group">
              <h1 className="font-handwritten text-4xl sm:text-5xl text-teal-600 group-hover:text-teal-700 transition-colors font-bold">
                The Blended Diaries
              </h1>
            </Link>
          </div>
          
          {/* Row 1, Col 2: Logo */}
          <div className="row-start-1 col-start-2 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link href="/" className="">
              <img
                src={logoImage}
                alt="The Blended Diaries Logo"
                className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Row 1, Col 3: Desktop Menu */}
          <div className="row-start-1 col-start-3 flex items-center justify-end pr-4">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors font-bold text-lg ${
                    location === item.href ? item.color.split(' ')[0] : item.color
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2, Col 1: Social Media Icons */}
          <div className="row-start-2 col-start-1 flex items-center space-x-3">
            <a
              href="mailto:hello@theblendeddiaries.com"
              className="text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2.5 shadow-md"
              aria-label="Email"
              data-testid="link-nav-social-email"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://tiktok.com/@blendeddiaries"
              target="_blank"
              rel="noopener noreferrer"
              className="text-diary-pink hover:text-diary-pink/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2.5 shadow-md"
              aria-label="TikTok"
              data-testid="link-nav-social-tiktok"
            >
              <Music2 size={24} />
            </a>

            <a
              href="https://www.instagram.com/blendeddiaries/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2.5 shadow-md"
              aria-label="Instagram"
              data-testid="link-nav-social-instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Layout - fallback to flex */}
        <div className="flex justify-between items-center py-4 md:hidden">
          <div className="flex flex-col">
            <Link href="/" className="group">
              <h1 className="font-handwritten text-3xl text-teal-600 group-hover:text-teal-700 transition-colors font-bold">
                The Blended Diaries
              </h1>
            </Link>
            
            <div className="flex items-center space-x-3 mt-2">
              <a
                href="mailto:hello@theblendeddiaries.com"
                className="text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2 shadow-md"
                aria-label="Email"
                data-testid="link-nav-social-email-mobile"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://tiktok.com/@blendeddiaries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-diary-pink hover:text-diary-pink/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2 shadow-md"
                aria-label="TikTok"
                data-testid="link-nav-social-tiktok-mobile"
              >
                <Music2 size={20} />
              </a>

              <a
                href="https://www.instagram.com/blendeddiaries/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-2 shadow-md"
                aria-label="Instagram"
                data-testid="link-nav-social-instagram-mobile"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <Link href="/" className="">
            <img
              src={logoImage}
              alt="The Blended Diaries Logo"
              className="w-16 h-16 object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-diary-charcoal hover:text-diary-red"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-diary-lines">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-diary-red transition-colors font-medium ${
                    location === item.href
                      ? "text-diary-red"
                      : "text-diary-charcoal"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
