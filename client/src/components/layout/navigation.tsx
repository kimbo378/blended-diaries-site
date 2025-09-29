import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Instagram, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Blended Diaries logo (1) (2)_1759152924243.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home", color: "text-teal-500 hover:text-teal-600" },
    { href: "/books", label: "Books", color: "text-black hover:text-gray-700" },
    { href: "/about", label: "About", color: "text-teal-500 hover:text-teal-600" },
    { href: "/freebies", label: "Freebies", color: "text-black hover:text-gray-700" },
    { href: "/contact", label: "Contact", color: "text-teal-500 hover:text-teal-600" },
  ];

  return (
    <nav className="relative z-50 bg-diary-cream sticky top-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block py-4">
          <div className="flex justify-between items-end relative">
            {/* Left: Site Title */}
            <div className="flex-1">
              <Link href="/" className="group">
                <h1 className="font-handwritten text-4xl sm:text-5xl text-black group-hover:text-gray-700 transition-colors font-bold">
                  The Blended Diaries
                </h1>
              </Link>
            </div>
            
            {/* Center: Logo */}
            <div className="absolute left-[48%] top-2 transform -translate-x-1/2 z-10">
              <Link href="/">
                <img
                  src={logoImage}
                  alt="The Blended Diaries Logo"
                  className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Right: Desktop Menu */}
            <div className="flex-1 flex justify-end">
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
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3 mt-2">
            <a
              href="mailto:hello@theblendeddiaries.com"
              className="text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2.5 shadow-md"
              aria-label="Email"
              data-testid="link-nav-social-email"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://tiktok.com/@blendeddiaries"
              target="_blank"
              rel="noopener noreferrer"
              className="text-diary-pink hover:text-diary-pink/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2.5 shadow-md"
              aria-label="TikTok"
              data-testid="link-nav-social-tiktok"
            >
              <Music2 size={24} />
            </a>

            <a
              href="https://www.instagram.com/blendeddiaries/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2.5 shadow-md"
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
              <h1 className="font-handwritten text-3xl text-black group-hover:text-gray-700 transition-colors font-bold">
                The Blended Diaries
              </h1>
            </Link>
            
            <div className="flex items-center space-x-3 mt-2">
              <a
                href="mailto:hello@theblendeddiaries.com"
                className="text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2 shadow-md"
                aria-label="Email"
                data-testid="link-nav-social-email-mobile"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://tiktok.com/@blendeddiaries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-diary-pink hover:text-diary-pink/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2 shadow-md"
                aria-label="TikTok"
                data-testid="link-nav-social-tiktok-mobile"
              >
                <Music2 size={20} />
              </a>

              <a
                href="https://www.instagram.com/blendeddiaries/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-2 shadow-md"
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
