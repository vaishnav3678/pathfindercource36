import React from 'react';
import { PathfinderLogo } from './Logo';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import {
  OFFICIAL_PHONE,
  getWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E5EAF2] text-[#667085] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E5EAF2]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate('home')}>
              <PathfinderLogo size="md" showWordmark={true} />
            </div>

            <p className="text-xs text-[#667085] leading-relaxed max-w-sm">
              Pathfinder IT Training Institute provides career-oriented technical education,
              hands-on development mentorship, software testing fundamentals, and practical
              internship exposure.
            </p>

            <div className="pt-2 text-xs font-semibold text-[#102A56]">
              <span className="text-[#2563EB]">Tagline:</span> Learn • Build • Test • Deploy • Grow
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A56]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#667085] font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('internship')}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Internship
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A56]">
              Course Offerings
            </h4>
            <ul className="space-y-2 text-xs text-[#667085]">
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="text-left hover:text-[#2563EB] transition-colors cursor-pointer font-medium"
                >
                  Full Stack Development with AI Tools
                  <span className="block text-[11px] text-[#667085]">1 Month · ₹5,999</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="text-left hover:text-[#2563EB] transition-colors cursor-pointer font-medium"
                >
                  Manual Software Testing
                  <span className="block text-[11px] text-[#667085]">SDLC, STLC & Bug Reporting</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('internship')}
                  className="text-left hover:text-[#2563EB] transition-colors cursor-pointer font-medium"
                >
                  Optional Practical Internship
                  <span className="block text-[11px] text-[#667085]">Guided Project Work · ₹3,000</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A56]">
              Admissions Desk
            </h4>
            <div className="space-y-2.5 text-xs text-[#667085]">
              <div>
                <span className="block text-[#667085] text-[11px]">Direct Phone:</span>
                <a
                  href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
                  className="font-bold text-[#102A56] hover:text-[#2563EB] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{OFFICIAL_PHONE}</span>
                </a>
              </div>

              <div>
                <span className="block text-[#667085] text-[11px]">WhatsApp Desk:</span>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors mt-0.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#667085] leading-normal">
                Online training batches with interactive live guidance and documentation.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085]">
          <p>© {currentYear} PATHFINDER. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Learn • Build • Test • Deploy • Grow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
