import React, { useEffect, useState } from 'react';
import { Course } from '../types';
import {
  X,
  Clock,
  Laptop,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Layers,
  Sparkles,
  GitBranch,
  Cloud,
  Check,
  MessageSquare,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface CourseDetailsProps {
  course: Course | null;
  onClose: () => void;
  onSelectInternship?: () => void;
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({
  course,
  onClose,
  onSelectInternship,
}) => {
  const [expandedModuleId, setExpandedModuleId] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'curriculum' | 'projects' | 'tools'>('curriculum');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (course) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  const toggleModule = (id: number) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  const isFullStack = course.id === 'full-stack-ai';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-detail-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Modal Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E5EAF2] overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 bg-[#102A56] text-white flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full">
                {course.badge || 'Course Details'}
              </span>
              <span className="text-xs text-blue-300">·</span>
              <span className="text-xs text-blue-200 font-medium">Pathfinder Training Institute</span>
            </div>
            <h2 id="course-detail-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {course.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Overview & Pricing Ribbon */}
        <div className="bg-[#F6F8FC] border-b border-[#E5EAF2] px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs shrink-0">
          <div className="flex flex-wrap items-center gap-6 text-[#172033] font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2563EB]" />
              <strong>Duration:</strong> {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-[#2563EB]" />
              <strong>Mode:</strong> {course.mode}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#2563EB]" />
              <strong>Curriculum:</strong> {course.curriculum.length} Modules
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#667085] font-medium">Program Fee:</span>
            <span className="text-base font-extrabold text-[#102A56]">
              {course.feeDisplay}
            </span>
          </div>
        </div>

        {/* Tab Switcher if Full Stack */}
        {isFullStack && (
          <div className="flex border-b border-[#E5EAF2] px-6 sm:px-8 bg-white shrink-0">
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'curriculum'
                  ? 'border-[#2563EB] text-[#2563EB]'
                  : 'border-transparent text-[#667085] hover:text-[#172033]'
              }`}
            >
              8-Module Curriculum
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'projects'
                  ? 'border-[#2563EB] text-[#2563EB]'
                  : 'border-transparent text-[#667085] hover:text-[#172033]'
              }`}
            >
              Practical Projects
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'tools'
                  ? 'border-[#2563EB] text-[#2563EB]'
                  : 'border-transparent text-[#667085] hover:text-[#172033]'
              }`}
            >
              AI & Testing Tools
            </button>
          </div>
        )}

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Tab 1: Module-wise Curriculum Accordion */}
          {activeTab === 'curriculum' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#667085] mb-2">
                  Program Overview
                </h3>
                <p className="text-sm text-[#172033] leading-relaxed">
                  {course.fullDescription}
                </p>
              </div>

              {/* Optional Internship Banner */}
              {course.internshipAvailable && (
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#102A56]">
                        Optional 1-Month Practical Internship
                      </h4>
                      <p className="text-xs text-[#667085] mt-0.5">
                        {course.internshipFee
                          ? `Available for an additional ₹${course.internshipFee.toLocaleString('en-IN')}. Focuses on real development workflows, pull requests, and technical deliverables.`
                          : 'Hands-on practical exposure. Inquire with counselors for current batch availability.'}
                      </p>
                    </div>
                  </div>

                  {course.internshipFee && (
                    <div className="text-right shrink-0">
                      <span className="text-xs text-[#667085] block">Internship Fee</span>
                      <span className="text-sm font-extrabold text-[#2563EB]">
                        +₹{course.internshipFee.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Module Accordion List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#102A56]">
                    Curriculum Breakdown ({course.curriculum.length} Modules)
                  </h3>
                  <span className="text-xs text-[#667085]">
                    Click any module to view topics
                  </span>
                </div>

                <div className="space-y-2.5">
                  {course.curriculum.map((module) => {
                    const isExpanded = expandedModuleId === module.id;
                    return (
                      <div
                        key={module.id}
                        className="border border-[#E5EAF2] rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => toggleModule(module.id)}
                          className="w-full px-4 py-3.5 bg-[#F6F8FC] hover:bg-slate-100/90 flex items-center justify-between text-left transition-colors cursor-pointer"
                          aria-expanded={isExpanded}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-md bg-white border border-[#E5EAF2] text-xs font-bold text-[#102A56] flex items-center justify-center shrink-0">
                              {module.id}
                            </span>
                            <div>
                              <h4 className="text-sm font-bold text-[#102A56]">
                                {module.title}
                              </h4>
                              <p className="text-xs text-[#667085] font-medium">
                                {module.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="text-[#667085]">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="px-5 py-4 bg-white border-t border-[#E5EAF2]">
                            <ul className="grid sm:grid-cols-2 gap-2.5 text-xs text-[#172033]">
                              {module.topics.map((t, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Practical Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#102A56] mb-1">
                  Practical Portfolio Projects
                </h3>
                <p className="text-xs text-[#667085]">
                  Every student builds and deploys two comprehensive projects to showcase to employers.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#F6F8FC] border border-[#E5EAF2]">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center mb-3">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#102A56] mb-1">
                    Project 1: Responsive Personal Portfolio
                  </h4>
                  <p className="text-xs text-[#667085] leading-relaxed mb-3">
                    Built with HTML5, CSS3, modern Flexbox/Grid, and responsive JavaScript. Includes contact forms, resume downloads, and live domain deployment.
                  </p>
                  <div className="text-[11px] font-semibold text-[#2563EB]">
                    Focus: UI precision & responsive design
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F6F8FC] border border-[#E5EAF2]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#102A56] mb-1">
                    Project 2: Full Stack Database Application
                  </h4>
                  <p className="text-xs text-[#667085] leading-relaxed mb-3">
                    Full CRUD application with React frontend, Node/Express backend REST APIs, MongoDB or PostgreSQL persistence, and manual testing verification.
                  </p>
                  <div className="text-[11px] font-semibold text-emerald-600">
                    Focus: End-to-end integration & QA validation
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: AI Tools & Testing */}
          {activeTab === 'tools' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#102A56] mb-1">
                  AI-Assisted Coding & Software Testing
                </h3>
                <p className="text-xs text-[#667085]">
                  Learn the tools modern engineering teams use to ship high-quality code faster.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F6F8FC] border border-[#E5EAF2]">
                  <Sparkles className="w-5 h-5 text-[#2563EB] mb-2" />
                  <h5 className="font-bold text-[#102A56] mb-1">AI Tools for Developers</h5>
                  <p className="text-[#667085] leading-relaxed">
                    Prompting ChatGPT for code review, debugging errors, generating regex, and creating API documentation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F6F8FC] border border-[#E5EAF2]">
                  <GitBranch className="w-5 h-5 text-[#2563EB] mb-2" />
                  <h5 className="font-bold text-[#102A56] mb-1">Git & GitHub Workflow</h5>
                  <p className="text-[#667085] leading-relaxed">
                    Repository management, branch creation, pull request etiquette, merge conflict resolution, and env security.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F6F8FC] border border-[#E5EAF2]">
                  <Cloud className="w-5 h-5 text-[#2563EB] mb-2" />
                  <h5 className="font-bold text-[#102A56] mb-1">Live Cloud Deployment</h5>
                  <p className="text-[#667085] leading-relaxed">
                    Deploying frontend and backend projects to modern cloud platforms (Vercel, Render) with real URLs.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 sm:px-8 py-4 bg-[#F6F8FC] border-t border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-[#667085] text-center sm:text-left">
            Have questions about the curriculum? Our counselors are available on WhatsApp.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-[#172033] bg-white border border-[#E5EAF2] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={getWhatsAppUrl(course.inquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
