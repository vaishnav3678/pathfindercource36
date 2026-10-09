import React, { useState, useEffect } from 'react';
import { PathfinderLogo } from './Logo';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'internship', label: 'Internship' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E5EAF2] shadow-sm py-2.5'
          : 'bg-white/95 backdrop-blur-xs border-b border-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Brand Zone with Original Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5 cursor-pointer text-left"
            aria-label="Pathfinder Home"
          >
            <PathfinderLogo size="sm" showWordmark={true} />
          </button>

          {/* Nav Links with Smooth Underline Animation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#667085]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 hover:text-[#102A56] cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm group ${
                    isActive ? 'text-[#102A56] font-bold' : ''
                  }`}
                >
                  {link.label}
                  {/* Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('courses')}
              className="px-5 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#102A56] hover:bg-[#183a75] rounded-xl transition-all shadow-xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Explore Courses
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center p-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg"
              aria-label="WhatsApp Inquiry"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-[#E5EAF2] hover:bg-[#F6F8FC] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5EAF2] bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-[#2563EB] font-bold'
                    : 'text-[#172033] hover:bg-[#F6F8FC]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-[#E5EAF2] flex flex-col gap-2.5">
              <button
                onClick={() => handleLinkClick('courses')}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#102A56] hover:bg-[#183a75] rounded-xl transition-colors cursor-pointer"
              >
                Explore Courses
              </button>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
