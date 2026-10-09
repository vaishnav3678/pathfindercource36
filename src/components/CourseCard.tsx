import React, { useRef, useState, useEffect } from 'react';
import { Course } from '../types';
import {
  Clock,
  Laptop,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  BookOpen,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface CourseCardProps {
  course: Course;
  onViewCurriculum: (course: Course) => void;
  featured?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onViewCurriculum,
  featured = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(!window.matchMedia('(pointer: fine)').matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate relative percentages from -1 to 1
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;

    // Max 3.5 degrees rotation for subtle, high-end feel
    const rotateX = -py * 3.5;
    const rotateY = px * 3.5;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-5px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered
          ? 'transform 0.12s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out'
          : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease-out, border-color 0.4s ease-out',
      }}
      className={`relative rounded-2xl bg-white border flex flex-col justify-between overflow-hidden interactive-card ${
        featured
          ? 'border-blue-200/90 shadow-lg shadow-blue-900/5'
          : 'border-[#E5EAF2] shadow-sm'
      } ${
        isHovered
          ? 'border-blue-400/80 shadow-2xl shadow-blue-900/10'
          : ''
      }`}
    >
      {/* Top Accent Gradient Bar for Featured */}
      {featured && (
        <div className="h-1.5 w-full bg-gradient-to-r from-[#102A56] via-[#2563EB] to-[#38BDF8]" />
      )}

      {/* Card Content Area */}
      <div className="p-7 sm:p-8 flex-1 flex flex-col">
        {/* Header Tags */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span
            className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
              featured
                ? 'bg-blue-50 text-[#2563EB] border border-blue-200/60'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {course.badge}
          </span>

          <span className="text-xs font-semibold text-[#667085] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            {course.curriculum.length} Modules
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-[#102A56] tracking-tight mb-3">
          {course.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#667085] leading-relaxed mb-6">
          {course.shortDescription}
        </p>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#F6F8FC] rounded-xl border border-[#E5EAF2] text-xs mb-6">
          <div>
            <span className="text-[#667085] block text-[11px] font-medium">Duration</span>
            <span className="font-bold text-[#172033] flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
              {course.duration}
            </span>
          </div>

          <div>
            <span className="text-[#667085] block text-[11px] font-medium">Mode</span>
            <span className="font-bold text-[#172033] flex items-center gap-1 mt-0.5">
              <Laptop className="w-3.5 h-3.5 text-[#2563EB]" />
              {course.mode}
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <span className="text-[#667085] block text-[11px] font-medium">Program Fee</span>
            <span className="font-extrabold text-[#102A56] text-sm mt-0.5 block">
              {course.feeDisplay}
            </span>
          </div>
        </div>

        {/* Highlights List */}
        <div className="space-y-2.5 mb-6 flex-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#102A56] block mb-2">
            Key Modules & Focus:
          </span>
          {course.highlights.slice(0, 5).map((hl, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#172033]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{hl}</span>
            </div>
          ))}
        </div>

        {/* Optional Internship Pill */}
        {course.internshipAvailable && (
          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200/60 text-xs text-[#172033] flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Optional Practical Internship: <strong>Available</strong></span>
            </div>
            {course.internshipFee && (
              <span className="font-bold text-[#2563EB]">
                +₹{course.internshipFee.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Action Buttons */}
      <div className="p-7 sm:p-8 pt-0 border-t border-[#E5EAF2] bg-[#F6F8FC]/50">
        <div className="pt-5 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onViewCurriculum(course)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs md:text-sm font-semibold text-white bg-[#102A56] hover:bg-[#183a75] rounded-xl transition-all duration-200 shadow-xs cursor-pointer group"
          >
            <BookOpen className="w-4 h-4 text-blue-200" />
            <span>View Curriculum</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href={getWhatsAppUrl(course.inquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs md:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 rounded-xl transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
