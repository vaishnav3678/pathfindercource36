import React, { useRef, useState, useEffect } from 'react';
import { PathfinderLogo } from './Logo';
import { MagneticButton } from './MagneticButton';
import {
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Terminal,
  Play,
  Check,
  ShieldCheck,
  Layers,
  Cpu,
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface HeroProps {
  onExploreCourses: () => void;
  onChatWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onChatWhatsApp }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Active code snippet tab state
  const [activeTab, setActiveTab] = useState<'react' | 'backend' | 'test'>('react');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setGlowPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovered(true));
      container.addEventListener('mouseleave', () => setIsHovered(false));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovered(true));
        container.removeEventListener('mouseleave', () => setIsHovered(false));
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white"
    >
      {/* Subtle Cursor Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 -z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(650px circle at ${glowPos.x}px ${glowPos.y}px, rgba(37, 99, 235, 0.05), transparent 70%)`,
        }}
      />

      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] -z-20"
        style={{
          backgroundImage: `radial-gradient(#102A56 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Value Prop & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small Eyebrow text */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F6F8FC] border border-[#E5EAF2] text-xs font-bold text-[#102A56] tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>PATHFINDER IT TRAINING</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#102A56] tracking-tight leading-[1.12] mb-6 text-balance">
              Learn Skills.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#102A56] via-[#2563EB] to-[#0284C7]">
                Build Projects.
              </span>{' '}
              Launch Your IT Career.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl mb-8">
              Master Full Stack Development, AI-assisted coding and software testing through
              practical, project-based training designed for aspiring developers.
            </p>

            {/* Primary & Secondary CTAs with Magnetic Effect */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <MagneticButton
                onClick={onExploreCourses}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#102A56] hover:bg-[#183a75] rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onChatWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-300/80 rounded-xl transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* 3 Concise Highlights below buttons */}
            <div className="w-full pt-6 border-t border-[#E5EAF2] grid sm:grid-cols-3 gap-4 text-xs font-semibold text-[#172033]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Practical Project-Based Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>AI-Assisted Development</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Development & Testing Skills</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Developer Workstation Composition */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-2xl -z-10" />

            {/* Outer Interactive Container */}
            <div className="w-full max-w-lg bg-white rounded-2xl border border-[#E5EAF2] shadow-2xl shadow-slate-900/10 overflow-hidden">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#102A56] text-white flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 ml-2">
                    pathfinder-workspace
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Build: Ready</span>
                </div>
              </div>

              {/* Code Snippet Tabs */}
              <div className="flex bg-[#0B1B3D]/95 px-3 pt-2 text-xs font-mono border-b border-white/10 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('react')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'react'
                      ? 'bg-slate-900 text-blue-300 font-bold border-t-2 border-[#2563EB]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  App.tsx
                </button>
                <button
                  onClick={() => setActiveTab('backend')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'backend'
                      ? 'bg-slate-900 text-blue-300 font-bold border-t-2 border-[#2563EB]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  api/routes.ts
                </button>
                <button
                  onClick={() => setActiveTab('test')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'test'
                      ? 'bg-slate-900 text-blue-300 font-bold border-t-2 border-[#2563EB]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  test_runner.qa
                </button>
              </div>

              {/* Code Display Area */}
              <div className="bg-[#0A1324] p-5 font-mono text-xs leading-relaxed text-slate-300 min-h-[170px]">
                {activeTab === 'react' && (
                  <div>
                    <p className="text-slate-500">// 01. React Frontend with AI Hook</p>
                    <p>
                      <span className="text-purple-400">import</span> React, &#123;{' '}
                      <span className="text-amber-300">useState</span> &#125;{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-emerald-400">'react'</span>;
                    </p>
                    <p className="mt-1">
                      <span className="text-blue-400">export function</span>{' '}
                      <span className="text-yellow-300">ProjectStudio</span>() &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-400">const</span> [state, setState] ={' '}
                      <span className="text-yellow-300">useState</span>(&#123;{' '}
                      <span className="text-blue-300">status</span>:{' '}
                      <span className="text-emerald-400">'deployed'</span> &#125;);
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">return</span> &lt;
                      <span className="text-blue-300">PathfinderApp</span> workflow=
                      <span className="text-emerald-400">"Learn • Build • Test • Deploy"</span> /&gt;;
                    </p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === 'backend' && (
                  <div>
                    <p className="text-slate-500">// 02. Node.js & Express REST API</p>
                    <p>
                      <span className="text-purple-400">import</span> express{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-emerald-400">'express'</span>;
                    </p>
                    <p className="mt-1">
                      <span className="text-blue-400">const</span> router ={' '}
                      <span className="text-yellow-300">express.Router</span>();
                    </p>
                    <p>
                      router.<span className="text-blue-300">post</span>(
                      <span className="text-emerald-400">'/api/enroll'</span>,{' '}
                      <span className="text-purple-400">async</span> (req, res) =&gt; &#123;
                    </p>
                    <p className="pl-4 text-slate-400">
                      <span className="text-purple-400">const</span> candidate ={' '}
                      <span className="text-purple-400">await</span> DB.save(req.body);
                    </p>
                    <p className="pl-4 text-emerald-400">
                      res.status(200).json(&#123; ok: true, batch: "Active" &#125;);
                    </p>
                    <p>&#125;);</p>
                  </div>
                )}

                {activeTab === 'test' && (
                  <div>
                    <p className="text-slate-500">// 03. Software Testing & Quality Assurance</p>
                    <p className="text-emerald-400">✓ STLC: Requirement traceability verified</p>
                    <p className="text-emerald-400">✓ Test Scenarios: 12 functional cases passing</p>
                    <p className="text-emerald-400">✓ Smoke & Sanity execution: 0 blocking defects</p>
                    <p className="text-emerald-400">✓ API status codes: 200 OK responses confirmed</p>
                    <p className="text-blue-300 mt-1">&gt; Readiness verification: Ready for Deployment</p>
                  </div>
                )}
              </div>

              {/* Floating Live Verification Cards */}
              <div className="p-4 bg-white border-t border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#102A56] block">
                      Live Project Execution
                    </span>
                    <span className="text-[11px] text-[#667085]">
                      Frontend + Backend + QA Validation
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#102A56] bg-[#F6F8FC] px-3 py-1.5 rounded-lg border border-[#E5EAF2]">
                  <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>AI-Assisted Workflow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
