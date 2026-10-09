import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, OFFICIAL_PHONE } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Inquiry Popover */}
      {showPopup && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-[#0B1B3D] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold">Pathfinder Admissions</h4>
                <p className="text-[10px] text-blue-200">Online & Ready to Help</p>
              </div>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-slate-300 hover:text-white p-1 rounded-md"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-2.5 text-xs">
            <p className="text-slate-600">
              Hi there! How can we assist you today? Choose an inquiry topic:
            </p>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.fullStack)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 text-slate-800 transition-colors"
            >
              <span className="font-medium">Full Stack with AI Tools</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0066FF]" />
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.manualTesting)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 text-slate-800 transition-colors"
            >
              <span className="font-medium">Manual Software Testing</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0066FF]" />
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.internship)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 text-slate-800 transition-colors"
            >
              <span className="font-medium">Internship Opportunity</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0066FF]" />
            </a>
          </div>

          <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 text-[10px] text-slate-400 text-center">
            Official line: {OFFICIAL_PHONE}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {!showPopup && (
          <span className="hidden sm:inline-block bg-white px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-md border border-slate-200/80 pointer-events-none animate-pulse">
            Need guidance? Chat on WhatsApp
          </span>
        )}

        <button
          onClick={() => setShowPopup(!showPopup)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 focus:outline-hidden focus:ring-4 focus:ring-emerald-200 cursor-pointer"
          aria-label="Toggle WhatsApp Inquiry Options"
        >
          <MessageSquare className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
