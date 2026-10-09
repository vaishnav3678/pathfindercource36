import React, { useState } from 'react';
import {
  Check,
  MessageSquare,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Briefcase,
  GitPullRequest,
  FileCode,
  Users,
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const InternshipSection: React.FC = () => {
  const [includeInternship, setIncludeInternship] = useState<boolean>(true);

  const courseBaseFee = 5999;
  const internshipFee = 3000;
  const totalFee = includeInternship ? courseBaseFee + internshipFee : courseBaseFee;

  const dynamicWhatsAppMsg = includeInternship
    ? 'Hello Pathfinder, I am interested in enrolling in the Full Stack Development with AI Tools course WITH the optional 1-month internship (Total ₹8,999). Please guide me with the enrollment procedure.'
    : 'Hello Pathfinder, I am interested in enrolling in the Full Stack Development with AI Tools training program (Fee ₹5,999). Please guide me with the enrollment procedure.';

  const internshipPillars = [
    {
      title: 'Practical Project Activities',
      desc: 'Work on structured milestones, building features and fixing real-world defects.',
      icon: FileCode,
    },
    {
      title: 'Industry Development Workflow',
      desc: 'Learn professional Git branching, code reviews, PR etiquette, and environment config.',
      icon: GitPullRequest,
    },
    {
      title: 'Technical Documentation',
      desc: 'Guidance on writing architecture notes, API specs, and QA bug reports.',
      icon: ShieldCheck,
    },
    {
      title: 'Mentored Guidance',
      desc: 'Get direct feedback on implementation structure, testing rigor, and code quality.',
      icon: Users,
    },
  ];

  return (
    <section id="internship" className="py-20 md:py-28 bg-[#F6F8FC] border-y border-[#E5EAF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#2563EB] mb-3">
            <span>TRANSPARENT PRICING & INTERNSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A56] tracking-tight">
            Take Your Learning Beyond the Classroom
          </h2>
          <p className="mt-4 text-base text-[#667085] leading-relaxed">
            Students interested in additional practical exposure can enquire about the optional
            internship associated with the training program. Clear pricing with zero hidden charges.
          </p>
        </div>

        {/* Interactive Pricing Summary Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E5EAF2] shadow-xl overflow-hidden mb-12">
          {/* Top Toggle Bar */}
          <div className="bg-[#F6F8FC] p-4 sm:p-6 border-b border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#667085]">
                Plan Selection
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#102A56]">
                Compare Training Options
              </h3>
            </div>

            {/* Segmented Control */}
            <div className="inline-flex p-1 bg-white rounded-xl border border-[#E5EAF2] shadow-xs">
              <button
                type="button"
                onClick={() => setIncludeInternship(false)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  !includeInternship
                    ? 'bg-[#102A56] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#172033]'
                }`}
              >
                Training Only (₹5,999)
              </button>
              <button
                type="button"
                onClick={() => setIncludeInternship(true)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  includeInternship
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#2563EB]'
                }`}
              >
                <span>Training + Internship (₹8,999)</span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="p-6 sm:p-10 grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: What is Included */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                  Full Stack Development with AI Tools
                </span>
                <h4 className="text-2xl font-extrabold text-[#102A56] mt-1">
                  Program Investment & Features
                </h4>
              </div>

              <div className="space-y-3.5 text-sm text-[#172033]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>
                    <strong>1-Month Practical Training:</strong> Full 8-Module curriculum covering HTML, CSS, React, Node.js, Express, Databases & Testing.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>
                    <strong>AI Developer Tooling:</strong> Hands-on ChatGPT workflows, prompt patterns, AI debugging and documentation.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>
                    <strong>Project Deliverables:</strong> Portfolio website + Full Stack interactive application with deployment.
                  </span>
                </div>

                {/* Optional Internship Pill */}
                <div
                  className={`flex items-start gap-3 p-3.5 rounded-xl transition-all ${
                    includeInternship
                      ? 'bg-blue-50 border border-blue-200 text-[#172033] font-medium'
                      : 'text-slate-400 opacity-60'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      includeInternship
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                  </div>
                  <span>
                    <strong>Optional Practical Internship:</strong> Real-world guided project work, team development rituals, review cycles and technical documentation guidance.
                    {!includeInternship && ' (Click above toggle to add)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Transparent Price Breakdown */}
            <div className="lg:col-span-5 bg-[#F6F8FC] rounded-2xl p-6 border border-[#E5EAF2] flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                  Transparent Fee Breakdown
                </span>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-[#E5EAF2]">
                    <span className="text-[#667085] font-medium">Full Stack Course:</span>
                    <span className="font-bold text-[#172033]">₹5,999</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-[#E5EAF2]">
                    <span className="text-[#667085] font-medium">Optional Internship:</span>
                    <span
                      className={`font-bold ${
                        includeInternship ? 'text-[#2563EB]' : 'text-slate-400'
                      }`}
                    >
                      {includeInternship ? '+₹3,000' : 'Not Selected (₹0)'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-bold text-[#102A56]">Total Investment:</span>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-[#102A56] block">
                        ₹{totalFee.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-[#667085] block">
                        One-time training fee
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5EAF2] space-y-3">
                <a
                  href={getWhatsAppUrl(dynamicWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <div className="text-[11px] text-[#667085] text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Direct discussion with training counselors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Note */}
          <div className="px-6 sm:px-10 py-4 bg-[#F6F8FC] border-t border-[#E5EAF2] text-xs text-[#667085] flex items-start sm:items-center gap-2.5">
            <HelpCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5 sm:mt-0" />
            <p className="italic">
              “Course curriculum, internship activities, deliverables and applicable terms will
              be explained before enrollment.”
            </p>
          </div>
        </div>

        {/* 4 Internship Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {internshipPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E5EAF2] hover:border-blue-300 transition-colors shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#102A56] mb-1.5">{p.title}</h4>
                <p className="text-xs text-[#667085] leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
