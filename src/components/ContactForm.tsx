import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  AlertCircle,
  Building2,
  Clock,
  ArrowRight,
  Send,
  CheckCircle,
} from 'lucide-react';
import {
  OFFICIAL_PHONE,
  buildContactFormWhatsAppMessage,
  openWhatsApp,
} from '../utils/whatsapp';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    courseInterested: 'Full Stack Development with AI Tools',
    internshipRequired: 'Yes',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedPreview, setSubmittedPreview] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid name (at least 2 letters).';
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else if (cleanPhone.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required.';
    } else if (!emailRegex.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const message = buildContactFormWhatsAppMessage(formData);
    setSubmittedPreview(message);
    openWhatsApp(message);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#E5EAF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#2563EB] mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A56] tracking-tight">
            Connect with Pathfinder Admissions
          </h2>
          <p className="mt-4 text-base text-[#667085] leading-relaxed">
            Have questions about upcoming batches, syllabus details or the optional internship?
            Submit your details below to open a direct WhatsApp inquiry.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F6F8FC] rounded-3xl p-7 sm:p-8 border border-[#E5EAF2] shadow-sm">
              <h3 className="text-lg font-bold text-[#102A56] mb-6">
                Pathfinder Training Institute
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5EAF2] text-[#2563EB] flex items-center justify-center shrink-0 shadow-xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667085] font-medium block">Institute Focus</span>
                    <span className="text-base font-bold text-[#102A56]">Pathfinder</span>
                    <p className="text-xs text-[#667085] mt-0.5">
                      Career-Oriented IT Training & Practical Mentorship
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5EAF2] text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667085] font-medium block">Official Inquiry Number</span>
                    <a
                      href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-[#172033] hover:text-[#2563EB] transition-colors"
                    >
                      {OFFICIAL_PHONE}
                    </a>
                    <p className="text-xs text-[#667085] mt-0.5">
                      Direct line for admissions & student counseling
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5EAF2] text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667085] font-medium block">WhatsApp Inquiry</span>
                    <span className="text-sm font-bold text-emerald-700">Available Daily</span>
                    <p className="text-xs text-[#667085] mt-0.5">
                      Fast response for curriculum, syllabus, and schedules
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5EAF2] text-[#102A56] flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667085] font-medium block">Counseling Hours</span>
                    <span className="text-sm font-semibold text-[#172033]">
                      Monday – Saturday (10:00 AM – 7:00 PM IST)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Notice */}
            <div className="p-6 bg-blue-50/70 border border-blue-200/80 rounded-2xl text-xs text-[#172033]">
              <h4 className="font-bold text-[#102A56] text-sm mb-1">
                How WhatsApp Inquiry Works
              </h4>
              <p className="text-[#667085] leading-relaxed">
                When you click submit, your formatted inquiry will open in WhatsApp on your device.
                You can review the details and press <strong>Send</strong> in WhatsApp to start chatting
                with our admissions counselor.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5EAF2] shadow-xl">
              <h3 className="text-xl font-bold text-[#102A56] mb-1">
                Course Inquiry Form
              </h3>
              <p className="text-xs text-[#667085] mb-6">
                Fill in your details below to dispatch your inquiry directly via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#172033] mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-colors bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5EAF2]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Mobile & Email Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="mobileNumber" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="mobileNumber"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, mobileNumber: e.target.value });
                        if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                      }}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-colors bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                        errors.mobileNumber ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5EAF2]'
                      }`}
                    />
                    {errors.mobileNumber && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.mobileNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="emailAddress" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      value={formData.emailAddress}
                      onChange={(e) => {
                        setFormData({ ...formData, emailAddress: e.target.value });
                        if (errors.emailAddress) setErrors({ ...errors, emailAddress: '' });
                      }}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-colors bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                        errors.emailAddress ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5EAF2]'
                      }`}
                    />
                    {errors.emailAddress && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.emailAddress}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Course Selection & Internship Preference */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Course Interested In */}
                  <div>
                    <label htmlFor="courseInterested" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Course Interested In
                    </label>
                    <select
                      id="courseInterested"
                      value={formData.courseInterested}
                      onChange={(e) =>
                        setFormData({ ...formData, courseInterested: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E5EAF2] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                    >
                      <option value="Full Stack Development with AI Tools">
                        Full Stack Development with AI Tools (₹5,999)
                      </option>
                      <option value="Manual Software Testing">
                        Manual Software Testing (Course Details)
                      </option>
                      <option value="General Course Guidance">
                        General Course Guidance / Both Courses
                      </option>
                    </select>
                  </div>

                  {/* Internship Required */}
                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      Internship Required?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, internshipRequired: 'Yes' })}
                        className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          formData.internshipRequired === 'Yes'
                            ? 'bg-blue-50 border-[#2563EB] text-[#2563EB]'
                            : 'border-[#E5EAF2] text-[#667085] hover:bg-[#F6F8FC]'
                        }`}
                      >
                        Yes (+₹3,000)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, internshipRequired: 'No' })}
                        className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          formData.internshipRequired === 'No'
                            ? 'bg-slate-100 border-slate-400 text-[#172033]'
                            : 'border-[#E5EAF2] text-[#667085] hover:bg-[#F6F8FC]'
                        }`}
                      >
                        No / Unsure
                      </button>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#172033] mb-1.5">
                    Your Message / Specific Question (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your educational background or questions..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E5EAF2] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] text-[#172033]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="text-[11px] text-[#667085] text-center leading-normal pt-1">
                  Clicking this button will open WhatsApp with your formatted inquiry. You can review
                  the details and press <strong>Send</strong> in WhatsApp to initiate contact with Pathfinder.
                </div>

                {/* Preview Banner */}
                {submittedPreview && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Opened!</span>
                    </div>
                    <p className="text-[11px] text-emerald-800">
                      If WhatsApp did not open automatically, please click below to resend your message:
                    </p>
                    <button
                      type="button"
                      onClick={() => openWhatsApp(submittedPreview)}
                      className="mt-2 text-xs font-bold text-emerald-700 underline hover:text-emerald-900 cursor-pointer"
                    >
                      Click here to re-open WhatsApp
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
