import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Instagram, Music2, Home, BookOpen, Heart, Gift, MessageCircle, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Blended Diaries logo (1) (2)_1759152924243.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { 
      href: "/", 
      label: "Home", 
      icon: Home,
      color: "text-teal-500 hover:text-teal-600"
    },
    { 
      href: "/books", 
      label: "Books", 
      icon: BookOpen,
      color: "text-black hover:text-gray-700"
    },
    { 
      href: "/about", 
      label: "About", 
      icon: Heart,
      color: "text-teal-500 hover:text-teal-600"
    },
    { 
      href: "/freebies", 
      label: "Freebies", 
      icon: Gift,
      color: "text-black hover:text-gray-700"
    },
    { 
      href: "/blog", 
      label: "Blog", 
      icon: Newspaper,
      color: "text-black hover:text-gray-700"
    },
    { 
      href: "/contact", 
      label: "Contact", 
      icon: MessageCircle,
      color: "text-teal-500 hover:text-teal-600"
    },
  ];

  return (
    <nav className="relative z-50 bg-diary-cream sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block py-6">
          {/* Top row: Title on left, Logo center, Social on right */}
          <div className="flex items-center justify-between mb-4">
            {/* Left: Site Title */}
            <div className="flex-1">
              <h1 className="font-handwritten text-4xl sm:text-5xl font-bold">
                <span className="text-teal-500">The </span>
                <span className="text-black">Blended</span>
                <span className="text-teal-500"> Diaries</span>
              </h1>
            </div>
            
            {/* Center: Logo - bigger and prominent */}
            <div className="flex-shrink-0 mx-8">
              <img
                src={logoImage}
                alt="The Blended Diaries Logo"
                className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right: Social Media Icons */}
            <div className="flex-1 flex justify-end">
              <div className="flex items-center space-x-3">
                <a
                  href="mailto:hello@theblendeddiaries.com"
                  className="text-diary-purple hover:text-diary-purple/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-3 shadow-md"
                  aria-label="Email"
                  data-testid="link-nav-social-email"
                >
                  <Mail size={32} />
                </a>

                <a
                  href="https://tiktok.com/@blendeddiaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-diary-pink hover:text-diary-pink/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-3 shadow-md"
                  aria-label="TikTok"
                  data-testid="link-nav-social-tiktok"
                >
                  <Music2 size={32} />
                </a>

                <a
                  href="https://www.instagram.com/blendeddiaries/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-diary-yellow hover:text-diary-yellow/80 transition-all duration-300 hover:scale-110 bg-black rounded-full p-3 shadow-md"
                  aria-label="Instagram"
                  data-testid="link-nav-social-instagram"
                >
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row: Centered Navigation */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    <div 
                      className={`
                        group relative px-3 py-2 rounded-xl
                        transition-all duration-300
                        hover:scale-105 hover:-rotate-1
                        active:scale-95
                        cursor-pointer
                        ${isActive ? 'bg-teal-500/10' : 'hover:bg-gray-100'}
                      `}
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon 
                          size={20} 
                          className={`${item.color.split(' ')[0]} group-hover:animate-bounce`}
                        />
                        <span className={`
                          font-handwritten text-xl font-bold ${
                            isActive ? item.color.split(' ')[0] : item.color
                          }
                          group-hover:scale-105 transition-transform
                        `}>
                          {item.label}
                        </span>
                      </div>
                      
                      {/* Decorative underline on hover */}
                      <div className={`
                        absolute -bottom-0.5 left-1/2 -translate-x-1/2
                        h-0.5 w-0 ${item.color.split(' ')[0].replace('text-', 'bg-')}
                        rounded-full
                        transition-all duration-300
                        group-hover:w-3/4
                      `} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex justify-between items-center py-4 md:hidden">
          <div className="flex flex-col">
            <h1 className="font-handwritten text-2xl sm:text-3xl font-bold whitespace-nowrap">
              <span className="text-teal-500">The </span>
              <span className="text-black">Blended</span>
              <span className="text-teal-500"> Diaries</span>
            </h1>
            
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
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-diary-lines">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-nav-mobile-${item.label.toLowerCase()}`}
                  >
                    <div 
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-xl
                        transition-all duration-300
                        active:scale-95
                        ${isActive ? 'bg-teal-500/10' : 'hover:bg-gray-100'}
                      `}
                    >
                      <Icon size={24} className={item.color.split(' ')[0]} />
                      <span className={`font-handwritten text-xl font-bold ${
                        isActive ? item.color.split(' ')[0] : item.color
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
