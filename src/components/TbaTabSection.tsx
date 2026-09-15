import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Mail, AlertCircle, Sparkles } from 'lucide-react';

interface UpcomingItem {
  title: string;
  desc: string;
  tag: string;
}

interface TbaTabSectionProps {
  title: string;
  icon: React.ReactNode;
  badgeLabel?: string;
  headline: string;
  description: string;
  upcomingItems: UpcomingItem[];
  contactEmail?: string;
  contactDepartment?: string;
  draftContent?: React.ReactNode;
  darkMode: boolean;
  sectionId?: string;
}

export const TbaTabSection: React.FC<TbaTabSectionProps> = ({
  title,
  icon,
  badgeLabel = 'To Be Announced (TBA)',
  headline,
  description,
  upcomingItems,
  contactEmail = 'academic.coordinator.mec@vgu.edu.vn',
  contactDepartment = 'MEC Academic Coordination Office & ASA',
  draftContent,
  darkMode,
  sectionId
}) => {
  const [showDraft, setShowDraft] = useState(false);

  return (
    <div className="space-y-6" id={sectionId}>
      {/* Primary TBA Hero Notice Card */}
      <div 
        className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
          darkMode 
            ? 'bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/80 border-slate-800 shadow-xl' 
            : 'bg-gradient-to-b from-amber-50/40 via-white to-white border-slate-200/90 shadow-sm'
        }`}
      >
        {/* Decorative Top Amber Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400" />

        <div className="p-6 sm:p-8 md:p-10">
          <div className="max-w-3xl">
            {/* Top Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                <span>{badgeLabel}</span>
              </span>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                darkMode ? 'bg-slate-800/80 text-slate-400 border-slate-700/60' : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}>
                Academic Year 2025 – 2026
              </span>
            </div>

            {/* Title with Icon */}
            <div className="flex items-start sm:items-center gap-3.5 mb-3">
              <div className={`p-2.5 rounded-xl border flex-shrink-0 ${
                darkMode 
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/25 shadow-[0_0_15px_rgba(245,158,11,0.15)]' 
                  : 'bg-amber-100/70 text-amber-700 border-amber-200 shadow-xs'
              }`}>
                {icon}
              </div>
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {title}
              </h1>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {description}
            </p>

            {/* Quick Status Notice */}
            <div className={`p-4 rounded-xl border flex items-start gap-3 mb-6 ${
              darkMode 
                ? 'bg-amber-950/20 border-amber-800/40 text-amber-200/90' 
                : 'bg-amber-50/80 border-amber-200/80 text-amber-900'
            }`}>
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-bold">{headline}</span> Official guidelines, procedural templates, and registration workflows are being coordinated with the German partner university and VGU boards. Once approved, all forms and submission portals will be published here.
              </div>
            </div>

            {/* Contact / Inquiries Callout */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className={`font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Inquiries & Urgent Support:
              </span>
              <a 
                href={`mailto:${contactEmail}`} 
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition-all ${
                  darkMode 
                    ? 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-xs'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>{contactEmail}</span>
              </a>
              <span className={`text-[11px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                ({contactDepartment})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Modules / Policies Scheduled for Announcement */}
      {upcomingItems.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 className={`text-sm font-extrabold uppercase tracking-wider ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Scheduled Topics in this Section
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingItems.map((item, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-200 ${
                  darkMode 
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {item.tag}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional Collapsible Draft / Working Notes Section */}
      {draftContent && (
        <div className="pt-2">
          <div className={`rounded-2xl border transition-all ${
            darkMode ? 'bg-slate-900/20 border-slate-800/60' : 'bg-slate-50/60 border-slate-200'
          }`}>
            <button
              type="button"
              onClick={() => setShowDraft(!showDraft)}
              className={`w-full p-4 flex items-center justify-between text-xs font-bold transition-colors cursor-pointer ${
                darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                <span>{showDraft ? 'Hide Reference Draft Content' : 'View Working Draft / Previous Reference Documents'}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Internal Preview
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {showDraft ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {showDraft && (
              <div className="p-4 sm:p-6 border-t border-slate-200/60 dark:border-slate-850">
                <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs">
                  <strong>Notice:</strong> The content below is the preliminary working draft / previous archive retained for reference while the official release is being finalized.
                </div>
                {draftContent}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
