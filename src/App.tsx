import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Courses } from './components/Courses';
import { InternshipSection } from './components/InternshipSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy for active navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'internship', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#172033] selection:bg-blue-100 selection:text-[#102A56] flex flex-col antialiased">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Premium Floating Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Redesigned Hero Section with Code Studio Preview & Cursor Glow */}
        <Hero
          onExploreCourses={() => scrollToSection('courses')}
          onChatWhatsApp={() => {}}
        />

        {/* 2. About Section: 2-Column with 5 Core Principles */}
        <AboutSection />

        {/* 3. Courses Section with 3D Tilt Cards & Full Curriculum Modal */}
        <Courses onSelectInternship={() => scrollToSection('internship')} />

        {/* 4. Internship Section & Interactive Fee Summary */}
        <InternshipSection />

        {/* 5. Contact Form with Validated WhatsApp Dispatch */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
