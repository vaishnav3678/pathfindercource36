import React from 'react';
import { PathfinderLogo } from './Logo';
import {
  Code,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  FolderKanban,
  Check,
  Compass,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      title: 'Learn by Building',
      desc: 'Coding isn’t learned through passive theory. You write real code from Day 1, constructing functional features and production components.',
      icon: Code,
    },
    {
      title: 'Understand Before Copying',
      desc: 'We focus on programming mental models, data flow, and architecture so you understand the "why" before writing or adopting solutions.',
      icon: Lightbulb,
    },
    {
      title: 'Use AI Responsibly',
      desc: 'Master AI-assisted coding tools like ChatGPT to accelerate learning, generate tests, and troubleshoot errors—without creating blind dependencies.',
      icon: Sparkles,
    },
    {
      title: 'Test Before Deploying',
      desc: 'Great software is reliable software. We integrate software testing principles, test scenarios, and bug reporting directly into your workflow.',
      icon: ShieldCheck,
    },
    {
      title: 'Build a Professional Portfolio',
      desc: 'Graduate with tangible, deployed web applications and cleanly documented GitHub repositories that showcase real-world competence.',
      icon: FolderKanban,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F6F8FC] border-y border-[#E5EAF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#2563EB] mb-3">
            <span>ABOUT PATHFINDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A56] tracking-tight">
            Practical IT Education for the Modern Era
          </h2>
          <p className="mt-4 text-base text-[#667085] leading-relaxed">
            Pathfinder bridges the gap between academic theory and real-world software
            engineering through mentorship, guided practical training, and rigorous project development.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 5 Core Principles */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-[#102A56] mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#2563EB]" />
              <span>Our 5 Engineering Principles</span>
            </h3>

            <div className="space-y-3.5">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5EAF2] hover:border-blue-300 transition-all duration-200 shadow-xs flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] group-hover:bg-[#102A56] group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#102A56] mb-1">
                        {idx + 1}. {p.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Polished Visual Composition with Original Logo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-[#E5EAF2] shadow-xl relative">
              {/* Logo Presentation in Official Form */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-[#E5EAF2]">
                <div className="p-3 bg-white rounded-2xl border border-slate-100 shadow-xs mb-4">
                  <PathfinderLogo size="xl" />
                </div>
                <h4 className="text-lg font-bold text-[#102A56] tracking-wide">
                  PATHFINDER IT TRAINING INSTITUTE
                </h4>
                <p className="text-xs text-[#2563EB] font-semibold mt-1">
                  Learn • Build • Test • Deploy • Grow
                </p>
              </div>

              {/* Institute Pillars Box */}
              <div className="mt-6 space-y-3 text-xs text-[#172033]">
                <div className="p-3 rounded-xl bg-[#F6F8FC] border border-[#E5EAF2] flex items-center justify-between">
                  <span className="font-medium text-[#667085]">Training Mode:</span>
                  <span className="font-bold text-[#102A56]">Online Guided Batches</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F6F8FC] border border-[#E5EAF2] flex items-center justify-between">
                  <span className="font-medium text-[#667085]">Learning Style:</span>
                  <span className="font-bold text-[#102A56]">100% Practical & Projects</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F6F8FC] border border-[#E5EAF2] flex items-center justify-between">
                  <span className="font-medium text-[#667085]">Quality Focus:</span>
                  <span className="font-bold text-[#102A56]">STLC & Defect Reporting</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F6F8FC] border border-[#E5EAF2] flex items-center justify-between">
                  <span className="font-medium text-[#667085]">Internship Track:</span>
                  <span className="font-bold text-[#2563EB]">Optional Hands-On Available</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5EAF2] text-[11px] text-[#667085] text-center leading-normal">
                Authentic technical training with structured mentorship and clear deliverables.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
