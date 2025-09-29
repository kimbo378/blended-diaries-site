import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Instagram, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Blended Diaries logo (1) (2)_1759152924243.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/about", label: "About" },
    { href: "/freebies", label: "Freebies" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="relative z-50 bg-diary-cream sticky top-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group -ml-4">
            <img 
              src={logoImage} 
              alt="The Blended Diaries Logo" 
              className="w-12 h-12 object-contain" 
            />
            <h1 className="font-handwritten text-4xl sm:text-5xl text-diary-charcoal group-hover:text-diary-red transition-colors">
              The Blended Diaries
            </h1>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center space-x-6 mb-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-diary-red transition-colors font-medium ${
                    location === item.href ? "text-diary-red" : "text-diary-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Social Media Icons - positioned under menu */}
            <div className="flex items-center space-x-3">
              <a
                href="mailto:hello@theblendeddiaries.com"
                className="text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-1.5 shadow-md"
                aria-label="Email"
                data-testid="link-nav-social-email"
              >
                <Mail size={16} />
              </a>
              
              <a
                href="https://tiktok.com/@blendeddiaries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-diary-pink hover:text-diary-pink/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-1.5 shadow-md"
                aria-label="TikTok"
                data-testid="link-nav-social-tiktok"
              >
                <Music2 size={16} />
              </a>
              
              <a
                href="https://www.instagram.com/blendeddiaries/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-diary-cream/90 backdrop-blur-sm rounded-full p-1.5 shadow-md"
                aria-label="Instagram"
                data-testid="link-nav-social-instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
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
                    location === item.href ? "text-diary-red" : "text-diary-charcoal"
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