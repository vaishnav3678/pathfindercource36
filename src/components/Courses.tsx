import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { Course } from '../types';
import { CourseCard } from './CourseCard';
import { CourseDetails } from './CourseDetails';

interface CoursesProps {
  onSelectInternship?: () => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectInternship }) => {
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#2563EB] mb-3">
            <span>CAREER PATHWAYS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A56] tracking-tight">
            Choose Your Learning Path
          </h2>
          <p className="mt-4 text-base text-[#667085] leading-relaxed">
            Build practical skills with structured learning, AI-assisted development and hands-on projects.
          </p>
        </div>

        {/* 2 Featured Course Cards with 3D Tilt and Lift */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {COURSES.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              featured={course.id === 'full-stack-ai'}
              onViewCurriculum={(c) => setActiveCourseModal(c)}
            />
          ))}
        </div>

        {/* Detailed Curriculum Modal */}
        <CourseDetails
          course={activeCourseModal}
          onClose={() => setActiveCourseModal(null)}
          onSelectInternship={onSelectInternship}
        />
      </div>
    </section>
  );
};
