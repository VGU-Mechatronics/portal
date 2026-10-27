/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Component: Official Examination & Academic Regulations (HAW Hamburg & VGU)
 * Built strictly and faithfully from the official 4-page decree:
 * /assets/aistudio/MEC_-_Regulations_6ffccfc0.pdf
 * Degree: Bachelor of Science (B.Sc.) in Mechatronics
 * Redesigned: Concise, high-impact visual infographics and interactive widgets without verbatim text walls.
 * Reorganized: Sections 7, 9, 10 clustered directly together under Part II (Examination Code),
 * preceded by chronological academic progression milestones (Sections 1 - 7).
 */

import React, { useState } from 'react';
import {
  GraduationCap,
  Clock,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Award,
  ChevronDown,
  ChevronUp,
  Download,
  ShieldAlert,
  AlertCircle,
  CheckSquare,
  Sparkles,
  Layers,
  ArrowRight,
  Stethoscope,
  Briefcase,
  FileCheck,
  Scale,
  Lock,
  Unlock,
  XCircle,
  Calendar,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import GradeConversionTable from './GradeConversionTable';

interface MecRegulationsOfficialProps {
  darkMode: boolean;
  searchQuery?: string;
}

export default function MecRegulationsOfficial({ darkMode, searchQuery = '' }: MecRegulationsOfficialProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showGradeConversion, setShowGradeConversion] = useState<boolean>(false);

  // Expanded accordion sections state - ordered logically
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'section-study-structure': true,
    'section-m1-m12-gatekeeper': true,
    'section-sem5-integration': true,
    'section-sem6-electives': true,
    'section-sem7-practical': true,
    'section-bachelor-thesis': true,
    'section-exam-registration': true,
    'section-attendance-rules': true,
    'section-retakes-attempts': true,
    'section-absence-21': true,
  });

  const pdfUrl = '/assets/aistudio/PSO_Mechatronics__B.Sc.__54813d7f.pdf';

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const effectiveQuery = searchQuery.trim().toLowerCase();

  // Logically ordered categories with Examination & Conduct rules clustered together
  const categories = [
    { id: 'all', label: 'All Regulations' },
    { id: 'structure', label: '1. Duration & Degree (210 CP)' },
    { id: 'gatekeeper', label: '2. M1–M12 Gatekeeper' },
    { id: 'sem5', label: '3. Sem 5: Integration Subjects' },
    { id: 'sem6', label: '4. Sem 6: Electives & Tracks' },
    { id: 'sem7', label: '5. Sem 7: Practical Module' },
    { id: 'thesis', label: '6. Thesis & Colloquium (M46)' },
    { id: 'registration', label: '7. Exam Registration & Withdrawal' },
    { id: 'attendance', label: '8. 80% Attendance Policy' },
    { id: 'retakes', label: '9. Retakes & Attempt Limits' },
    { id: 'absence', label: '10. Absence & Medical Protocol' },
  ];

  const matchesSearch = (text: string) => {
    if (!effectiveQuery) return true;
    return text.toLowerCase().includes(effectiveQuery);
  };

  return (
    <div className="space-y-6" id="official-regulations-container">
      {/* Official Header Banner */}
      <div className={`p-6 sm:p-7 rounded-3xl border transition-all relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-orange-950/40 border-slate-800 shadow-xl'
          : 'bg-gradient-to-br from-white via-orange-50/40 to-slate-50 border-slate-200/90 shadow-sm'
      }`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-orange-500 text-white shadow-xs flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                HAW Hamburg &amp; VGU
              </span>
              <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border ${
                darkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}>
                Bachelor of Science (B.Sc.) in Mechatronics
              </span>
              <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border ${
                darkMode ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}>
                Official Examination &amp; Study Regulations (PSO 2026)
              </span>
            </div>

            <h1 className={`text-xl sm:text-2xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Academic &amp; Examination Regulations Summary
            </h1>
            <p className={`text-xs sm:text-sm max-w-3xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Key rules and criteria extracted directly from the official Examination and Study Regulations decree.
            </p>

            {/* High-Impact Key Numbers Dashboard */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className={`p-2.5 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-700/80' : 'bg-white border-orange-100 shadow-xs'
              }`}>
                <div className="flex items-center gap-1.5 text-orange-500 font-bold text-[10px] uppercase tracking-wider mb-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Duration</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black tracking-tight text-orange-600 dark:text-orange-400">3.5</span>
                  <span className="text-xs font-bold text-slate-500">Years (7 Sems)</span>
                </div>
              </div>

              <div className={`p-2.5 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-700/80' : 'bg-white border-amber-100 shadow-xs'
              }`}>
                <div className="flex items-center gap-1.5 text-amber-500 font-bold text-[10px] uppercase tracking-wider mb-0.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Total Credits</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black tracking-tight text-amber-600 dark:text-amber-400">210</span>
                  <span className="text-xs font-bold text-slate-500">CP</span>
                </div>
              </div>

              <div className={`p-2.5 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-700/80' : 'bg-white border-emerald-100 shadow-xs'
              }`}>
                <div className="flex items-center gap-1.5 text-emerald-500 font-bold text-[10px] uppercase tracking-wider mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Attendance</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black tracking-tight text-emerald-600 dark:text-emerald-400">&ge; 80%</span>
                  <span className="text-xs font-bold text-slate-500">Required</span>
                </div>
              </div>

              <div className={`p-2.5 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-700/80' : 'bg-white border-rose-100 shadow-xs'
              }`}>
                <div className="flex items-center gap-1.5 text-rose-500 font-bold text-[10px] uppercase tracking-wider mb-0.5">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Exam Attempts</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black tracking-tight text-rose-600 dark:text-rose-400">Max 4</span>
                  <span className="text-xs font-bold text-slate-500">(1 + 3 Resits)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {/* Action Button: View Regulation Document via Google Drive */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="https://drive.google.com/file/d/1LR8xRWrSVclKdevOM1EJMm6GMObrYxRq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Regulation Document</span>
            </a>
          </div>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-thin">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all flex-shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-orange-500 text-white font-bold shadow-xs'
                : darkMode
                  ? 'bg-slate-800/80 hover:bg-slate-850 text-slate-300 border border-slate-700/60'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 10 VISUAL REGULATION SECTIONS (ORGANIZED LOGICALLY)                        */}
      {/* ========================================================================= */}
      <div className="space-y-5">

        {/* ------------------------------------------------------------------------- */}
        {/* GROUP HEADER 1: Academic Milestones & Degree Progression (Sections 1 - 6)  */}
        {/* ------------------------------------------------------------------------- */}
        {selectedCategory === 'all' && !effectiveQuery && (
          <div className="flex items-center gap-3 pt-1">
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              Part I: Academic Progression &amp; Degree Milestones (Sections 1 &ndash; 6)
            </span>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 1: Standard Duration of Study, Credit Points & Single Degree      */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'structure') && matchesSearch('standard duration study 210 credit points 3.5 years 7 semesters b.sc. haw hamburg single degree english') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-study-structure">
            <button
              onClick={() => toggleSection('section-study-structure')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-xs">
                  1
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Standard Duration of Study, Credit Points &amp; Single Degree
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    3.5 Years (7 Semesters) &bull; 210 CP Workload &bull; B.Sc. HAW Hamburg &bull; English Medium
                  </p>
                </div>
              </div>
              {expandedSections['section-study-structure'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-study-structure'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 1 Key Highlight Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Degree Awarded</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">B.Sc.</span>
                      <span className="text-xs font-semibold text-slate-500">HAW Hamburg</span>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Duration</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-orange-600 dark:text-orange-400">3.5</span>
                      <span className="text-xs font-semibold text-slate-500">Years</span>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Total Workload</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-amber-600 dark:text-amber-400">210</span>
                      <span className="text-xs font-semibold text-slate-500">CP</span>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Study Semesters</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">7</span>
                      <span className="text-xs font-semibold text-slate-500">Semesters</span>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Medium of Study</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
                      <span className="text-xs font-semibold text-slate-500">English</span>
                    </div>
                  </div>
                </div>

                {/* Visual Study Journey Timeline */}
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 block mb-3">
                    Curriculum Architecture &amp; Timeline (7 Semesters)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className={`p-3 rounded-lg border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">Semesters 1 &ndash; 4</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold">Foundation</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Theoretical and application-oriented core curriculum. Covers foundational engineering modules (M1&ndash;M12).
                      </p>
                    </div>

                    <div className={`p-3 rounded-lg border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">Semesters 5 &ndash; 6</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">Specialisation</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Practice-oriented specialisation phase. Sem 5 Integration Subjects (6 CP) and Sem 6 Compulsory-Elective tracks (25 CP).
                      </p>
                    </div>

                    <div className={`p-3 rounded-lg border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">Semester 7</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">Capstone &amp; Placement</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        14-week practical industrial placement (15 CP) alongside Bachelor&rsquo;s Thesis &amp; Defense Colloquium (15 CP).
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 2: Progression Gatekeeper — Modules M1 to M12 Requirement         */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'gatekeeper') && matchesSearch('m1 to m12 prerequisite participation admission third-year modules m25 m44 practical module first year gatekeeper') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-m1-m12-gatekeeper">
            <button
              onClick={() => toggleSection('section-m1-m12-gatekeeper')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Progression Gatekeeper: Modules M1 to M12 Prerequisite
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Must pass all 12 first-year modules before taking Year 3 modules (M25&ndash;M44) or starting Sem 7 Practical Module
                  </p>
                </div>
              </div>
              {expandedSections['section-m1-m12-gatekeeper'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-m1-m12-gatekeeper'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Condition => Result Progression Flow Bars */}
                <div className="space-y-3">
                  {/* Flow Bar 1: Year 3 Progression */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    darkMode 
                      ? 'bg-slate-950/50 border-slate-800' 
                      : 'bg-slate-50/80 border-slate-200'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                      {/* Condition */}
                      <div className="flex items-center gap-3 md:w-[46%] min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-500/20">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              PREREQUISITE
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500">Year 1 Modules</span>
                          </div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                            Pass Modules M1 &ndash; M12
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Successfully complete all 12 first-year foundation modules (60 CP)
                          </p>
                        </div>
                      </div>

                      {/* Arrow / Action Divider */}
                      <div className="flex items-center justify-center gap-1.5 py-1 px-3 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs shrink-0 self-start md:self-auto">
                        <span>Unlocks</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>

                      {/* Result */}
                      <div className="flex items-center gap-3 md:w-[46%] min-w-0 md:justify-end md:text-right">
                        <div className="min-w-0 order-2 md:order-1">
                          <div className="flex items-center md:justify-end gap-1.5">
                            <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">Year 3 Progression</span>
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                              OUTCOME
                            </span>
                          </div>
                          <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                            Progression to Year 3 (Modules M25 &ndash; M44)
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Admitted to attend courses and sit examinations for third-year modules
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0 border border-indigo-500/20 order-1 md:order-2">
                          <Unlock className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Bar 2: Industrial Placement Clearance */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    darkMode 
                      ? 'bg-slate-950/50 border-slate-800' 
                      : 'bg-slate-50/80 border-slate-200'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                      {/* Condition */}
                      <div className="flex items-center gap-3 md:w-[46%] min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-500/20">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              PREREQUISITE
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500">Year 1 Modules</span>
                          </div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                            Pass Modules M1 &ndash; M12
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Zero backlog in Year 1 foundation curriculum
                          </p>
                        </div>
                      </div>

                      {/* Arrow / Action Divider */}
                      <div className="flex items-center justify-center gap-1.5 py-1 px-3 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs shrink-0 self-start md:self-auto">
                        <span>Eligible for</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>

                      {/* Result */}
                      <div className="flex items-center gap-3 md:w-[46%] min-w-0 md:justify-end md:text-right">
                        <div className="min-w-0 order-2 md:order-1">
                          <div className="flex items-center md:justify-end gap-1.5">
                            <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">Practical Training</span>
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                              CLEARANCE
                            </span>
                          </div>
                          <div className="text-sm font-bold text-amber-600 dark:text-amber-400 mt-1">
                            Register Industrial Placement (Semester 7)
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Authorized to commence the 14-week practical module in industry (15 CP)
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold shrink-0 border border-amber-500/20 order-1 md:order-2">
                          <Briefcase className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 4: Fifth Semester — Integration Subjects (6 CP & Forfeiture Rule)  */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'sem5') && matchesSearch('fifth semester integration subjects soft skills forfeited 6 credit points six cp') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-sem5-integration">
            <button
              onClick={() => toggleSection('section-sem5-integration')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Fifth Semester: Integration Subjects Module &amp; Strict Forfeiture Rule
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Exactly 6 CP across &ge;2 subjects &bull; Any excess credits beyond 6 CP are strictly forfeited
                  </p>
                </div>
              </div>
              {expandedSections['section-sem5-integration'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-sem5-integration'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 4 Key Highlight Metrics */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Credit Cap</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">6.0</span>
                      <span className="text-xs font-semibold text-slate-500">CP Exact</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Course Breadth</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">&ge; 2</span>
                      <span className="text-xs font-semibold text-slate-500">Subjects</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Surplus Rollover</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-rose-600 dark:text-rose-400">0.0</span>
                      <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">CP (Forfeited)</span>
                    </div>
                  </div>
                </div>

                {/* Visual Rule Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center gap-2 mb-2 text-indigo-500 font-bold">
                      <Layers className="w-4 h-4" />
                      <span>Module Purpose</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                      <li>&bull; Acquire interdisciplinary skills and key competencies (soft skills).</li>
                      <li>&bull; Explore subjects at curriculum boundaries offered by VGU and/or HAW Hamburg.</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center gap-2 mb-2 text-emerald-500 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Passing Criteria</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                      <li>&bull; Complete exactly <strong>6 Credit Points (CP)</strong>.</li>
                      <li>&bull; Must be distributed across <strong>at least two (&ge;2) subjects</strong>.</li>
                      <li>&bull; Subjects are announced online or on notice boards.</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border border-rose-500/40 ${darkMode ? 'bg-rose-950/20 text-rose-300' : 'bg-rose-50 text-rose-800'}`}>
                    <div className="flex items-center gap-2 mb-2 font-bold text-rose-600 dark:text-rose-400">
                      <AlertCircle className="w-4 h-4" />
                      <span>Forfeiture Clause</span>
                    </div>
                    <p className="leading-relaxed">
                      <strong>Zero Excess Rollover:</strong> Any credits earned in excess of 6 CP will be <em>completely forfeited</em> and cannot be transferred or counted toward graduation.
                    </p>
                  </div>
                </div>

                {/* Visual Formula Comparison Card */}
                <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50/80 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                      Valid Example
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Subject A (3 CP) + Subject B (3 CP) = <strong>6 CP total across 2 subjects &rarr; Fully Accredited</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 pt-2 sm:pt-0 sm:pl-4">
                    <span className="px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold">
                      Excess Example
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Subject A (4 CP) + Subject B (4 CP) = 8 CP &rarr; <strong>6 CP accepted, 2 CP strictly forfeited</strong>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 4: Sixth Semester — Compulsory-Elective Modules & Specialisation  */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'sem6') && matchesSearch('sixth semester compulsory elective modules 25 cp specialisation transcript four modules surplus section 29 haw hamburg') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-sem6-electives">
            <button
              onClick={() => toggleSection('section-sem6-electives')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold text-xs">
                  4
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Sixth Semester: Compulsory-Elective Modules &amp; Specialisation Endorsement
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    5 Modules &times; 5 CP = 25 CP &bull; Specialisation on transcript if &ge;4 modules in track &bull; Max 2 external &bull; Max 3 surplus (Section 29)
                  </p>
                </div>
              </div>
              {expandedSections['section-sem6-electives'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-sem6-electives'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 4 Two-Column Layout: Core Electives & External/Surplus Modules */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Column 1: Core Electives, Specialisation & Overall Mark */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Total Electives</span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">25</span>
                          <span className="text-xs font-semibold text-slate-500">CP (5 &times; 5 CP)</span>
                        </div>
                      </div>

                      <div className={`p-3 rounded-xl border border-emerald-500/30 ${darkMode ? 'bg-emerald-950/20' : 'bg-emerald-50/60'}`}>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Specialisation On Transcript</span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">&ge; 4</span>
                          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Modules (20 CP)</span>
                        </div>
                      </div>
                    </div>

                    {/* Clause 1: Elective Choice & Specialisation Rule */}
                    <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 font-bold text-cyan-600 dark:text-cyan-400">
                          <Layers className="w-4 h-4" />
                          <span>1. Elective Options &amp; Specialisation</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold">5 Modules (25 CP)</span>
                      </div>
                      <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                        <li>&bull; Students must successfully complete <strong>five modules, each worth 5 CP</strong>, from the compulsory-elective catalogue.</li>
                        <li>&bull; <strong>Track Selection:</strong> Option of selecting all modules from a single specialisation or from different specialisations.</li>
                        <li>&bull; <strong className="text-emerald-600 dark:text-emerald-400">Transcript Endorsement:</strong> The relevant specialisation will <em>only</em> be listed on the transcript if <strong>at least four (&ge;4) modules</strong> from that specialisation have been successfully completed.</li>
                      </ul>
                    </div>

                    {/* Clause 3: Selection of 5 Modules for Overall Mark */}
                    <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400">
                          <FileCheck className="w-4 h-4" />
                          <span>3. Overall Mark Specification (&gt; 5 Modules)</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">5 Modules for Mark</span>
                      </div>
                      <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                        <li>&bull; If examination and coursework have been completed in <strong>more than five modules</strong>, the student must specify which five compulsory-elective modules are to be included in the calculation of the overall mark.</li>
                        <li>&bull; <strong className="text-indigo-600 dark:text-indigo-400">Binding Deadline:</strong> Must specify these five modules <strong>no later than upon submission of the Bachelor&rsquo;s thesis</strong>.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: External Study & Surplus Regulations */}
                  <div className="space-y-3">
                    {/* Metric: External HEI Limit */}
                    <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">External HEI Limit</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black text-purple-600 dark:text-purple-400">Max 2</span>
                        <span className="text-xs font-semibold text-slate-500">Modules (HAW / HEI)</span>
                      </div>
                    </div>

                    {/* Clause 2: External Modules Recognition (Directly under External HEI Limit) */}
                    <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 font-bold text-purple-600 dark:text-purple-400">
                          <ExternalLink className="w-4 h-4" />
                          <span>2. External Modules (HAW / Other HEIs)</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">Max 2 Modules</span>
                      </div>
                      <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                        <li>&bull; Examination and coursework may be undertaken in <strong>up to two other, academically relevant compulsory-choice modules</strong> from the Bachelor&rsquo;s programme offered by HAW Hamburg or another higher education institution (HEI).</li>
                        <li>&bull; <strong className="text-purple-600 dark:text-purple-400">Mandatory Application:</strong> An application for recognition of the examination and coursework in these modules must be submitted to the <strong>Chair of the Examination Board at the start of the course</strong>.</li>
                      </ul>
                    </div>

                    {/* Metric: Surplus on Transcript */}
                    <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Surplus on Transcript</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black text-amber-600 dark:text-amber-400">Max 3</span>
                        <span className="text-xs font-semibold text-slate-500">Modules (Section 29)</span>
                      </div>
                    </div>

                    {/* Clause 4: Surplus Modules on Transcript (Section 29) */}
                    <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400">
                          <Award className="w-4 h-4" />
                          <span>4. Surplus Modules on Transcript (Section 29)</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">Max 3 Additional</span>
                      </div>
                      <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                        <li>&bull; Up to <strong>three surplus modules</strong> may, upon application, be included on the transcript as additional modules.</li>
                        <li>&bull; <strong className="text-amber-600 dark:text-amber-400">Statutory Exclusion:</strong> In accordance with <strong>Section 29</strong>, surplus modules will <em>not</em> be included in the calculation of the overall mark.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 6: Seventh Semester — Practical Module (15 CP & 14-Week Placement) */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'sem7') && matchesSearch('seventh semester practical module 15 credit points 14-week industrial placement presentation') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-sem7-practical">
            <button
              onClick={() => toggleSection('section-sem7-practical')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xs">
                  5
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Seventh Semester: Practical Module (15 CP &amp; 14-Week Industrial Placement)
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    14-week industrial placement in engineering role + accompanying course &bull; Assessed via presentation
                  </p>
                </div>
              </div>
              {expandedSections['section-sem7-practical'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-sem7-practical'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 6 Key Highlight Metrics */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Internship Duration</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-amber-600 dark:text-amber-400">14</span>
                      <span className="text-xs font-semibold text-slate-500">Weeks Full-time</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Credit Points</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-orange-600 dark:text-orange-400">15</span>
                      <span className="text-xs font-semibold text-slate-500">CP</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Assessment Mode</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">1</span>
                      <span className="text-xs font-semibold text-slate-500">Presentation</span>
                    </div>
                  </div>
                </div>

                {/* 3 Pillars Visual Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center gap-2 mb-2 text-amber-500 font-bold">
                      <Briefcase className="w-4 h-4" />
                      <span>Duration &amp; Value</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                      <li>&bull; <strong>14-week industrial placement</strong> in an engineering role.</li>
                      <li>&bull; Includes an accompanying academic course.</li>
                      <li>&bull; Worth <strong>15 Credit Points (CP)</strong>.</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/70'}`}>
                    <div className="flex items-center gap-2 mb-2 font-bold text-rose-600 dark:text-rose-400">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Mandatory Prerequisite</span>
                    </div>
                    <ul className="space-y-1.5 text-rose-700 dark:text-rose-300">
                      <li>&bull; May <strong>only be commenced</strong> once modules M1 to M12 of Year 1 are passed.</li>
                      <li>&bull; No internship commencement allowed with Year 1 backlog.</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center gap-2 mb-2 text-orange-500 font-bold">
                      <FileCheck className="w-4 h-4" />
                      <span>Assessment &amp; Evidence</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                      <li>&bull; Concluded via an <strong>academic presentation</strong>.</li>
                      <li>&bull; Evidence of completion submitted to practical module coordinator.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 7: Bachelor's Thesis with Final Colloquium (Module M46)           */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'thesis') && matchesSearch('bachelor thesis final colloquium module m46 180 credit points english 12 cp 3 cp 10 weeks 6 weeks 8 weeks unsatisfactory retake once new topic') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-bachelor-thesis">
            <button
              onClick={() => toggleSection('section-bachelor-thesis')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-xs">
                  6
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Bachelor&rsquo;s Thesis with Final Colloquium (Module M46)
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    180 CP Prerequisite &bull; 15 CP Total (12 CP Written + 3 CP Defense) &bull; English &bull; 10-Week Defense Window
                  </p>
                </div>
              </div>
              {expandedSections['section-bachelor-thesis'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-bachelor-thesis'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 7 Key Highlight Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                  <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Admission Gate</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-orange-600 dark:text-orange-400">&ge; 180</span>
                      <span className="text-[11px] font-semibold text-slate-500">CP</span>
                    </div>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Total Module</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-orange-600 dark:text-orange-400">15</span>
                      <span className="text-[11px] font-semibold text-slate-500">CP (12+3)</span>
                    </div>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Defense Window</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">&le; 10</span>
                      <span className="text-[11px] font-semibold text-slate-500">Weeks</span>
                    </div>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Max Extension</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-amber-600 dark:text-amber-400">6</span>
                      <span className="text-[11px] font-semibold text-slate-500">Weeks</span>
                    </div>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Grading Period</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-purple-600 dark:text-purple-400">&le; 8</span>
                      <span className="text-[11px] font-semibold text-slate-500">Weeks</span>
                    </div>
                  </div>
                  <div className={`p-2.5 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Fail Retake</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-rose-600 dark:text-rose-400">1</span>
                      <span className="text-[11px] font-semibold text-rose-600 dark:text-rose-400">New Topic</span>
                    </div>
                  </div>
                </div>

                {/* 6 Key Rules Visual Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 block mb-1">Admission Prerequisite</span>
                    <strong className="block text-slate-900 dark:text-white mb-1">&ge; 180 Credit Points</strong>
                    <p className="text-slate-500 dark:text-slate-400">
                      Admission may only be applied for once you have successfully earned at least 180 CP.
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 block mb-1">Credit Allocation</span>
                    <strong className="block text-slate-900 dark:text-white mb-1">12 CP Written + 3 CP Colloquium</strong>
                    <p className="text-slate-500 dark:text-slate-400">
                      Total 15 CP. The final colloquium consists of an oral presentation followed by academic discussion.
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 block mb-1">Colloquium Timeline</span>
                    <strong className="block text-slate-900 dark:text-white mb-1">Within 10 Weeks of Submission</strong>
                    <p className="text-slate-500 dark:text-slate-400">
                      Colloquium defense must take place no later than 10 weeks after submitting the written thesis.
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-500 block mb-1">Supervisors &amp; Language</span>
                    <strong className="block text-slate-900 dark:text-white mb-1">2 Examiners &bull; English Only</strong>
                    <p className="text-slate-500 dark:text-slate-400">
                      First examiner must be an authorised lecturer at HAW Hamburg or VGU. Written and defended in English.
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 block mb-1">Extension &amp; Grading</span>
                    <strong className="block text-slate-900 dark:text-white mb-1">Max 6-Wk Extension &bull; 8-Wk Grading</strong>
                    <p className="text-slate-500 dark:text-slate-400">
                      Extension granted by Chair for good cause before deadline. Graded within 8 weeks of submission.
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/70'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">Thesis Retake Rule</span>
                    <strong className="block text-rose-800 dark:text-rose-200 mb-1">Retake Once with New Topic</strong>
                    <p className="text-rose-700/80 dark:text-rose-300/80">
                      If graded 5.0, may be retaken once with a new topic (issued within 3 months). A second retake requires rare Exam Board approval.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* GROUP HEADER 2: Examination Code, Attendance & Absence (Secs 7 - 10)       */}
        {/* User Request: Clustered directly adjacent to each other                    */}
        {/* ------------------------------------------------------------------------- */}
        {selectedCategory === 'all' && !effectiveQuery && (
          <div className="flex items-center gap-3 pt-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              Part II: Examination Code, Attendance &amp; Absence Protocol (Sections 7 &ndash; 10)
            </span>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 7: Registration for and Withdrawal from Examinations              */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'registration') && matchesSearch('registration withdrawal examinations binding deadline admitted sit examination') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-exam-registration">
            <button
              onClick={() => toggleSection('section-exam-registration')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xs">
                  7
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Registration for and Withdrawal from Examinations
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Mandatory registration for both Final &amp; Retake exams &bull; Binding after withdrawal deadline
                  </p>
                </div>
              </div>
              {expandedSections['section-exam-registration'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-exam-registration'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 7 Key Highlight Metrics */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Prior Registration</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-purple-600 dark:text-purple-400">100%</span>
                      <span className="text-xs font-semibold text-slate-500">Mandatory</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Legal Status</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-amber-600 dark:text-amber-400">Binding</span>
                      <span className="text-xs font-semibold text-slate-500">After Deadline</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Unregistered Sit</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-rose-600 dark:text-rose-400">0%</span>
                      <span className="text-xs font-semibold text-rose-700 dark:text-rose-300">Strictly Barred</span>
                    </div>
                  </div>
                </div>

                {/* 3 Step Visual Progression Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-purple-500 font-bold">
                        <FileCheck className="w-4 h-4" />
                        <span>Step 1: Mandatory Registration</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">
                        Final &amp; Retake
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Sitting any exam requires prior registration &mdash; strictly required for both <strong>final examinations (Final Exam)</strong> and <strong>repeat/retake examinations (Retake Exam)</strong>. Registration also constitutes your formal application for admission to that exam.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center gap-2 mb-2 text-amber-500 font-bold">
                      <Calendar className="w-4 h-4" />
                      <span>Step 2: Withdrawal Deadline</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      You can modify or withdraw your registration freely before the official deadline. Once the deadline passes, registration is <strong>legally binding</strong>.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/70'}`}>
                    <div className="flex items-center gap-2 mb-2 font-bold text-rose-600 dark:text-rose-400">
                      <XCircle className="w-4 h-4" />
                      <span>Step 3: Sitting Prohibition</span>
                    </div>
                    <p className="text-rose-800 dark:text-rose-200 leading-relaxed">
                      Students who have not registered or have not been admitted are <strong>strictly barred</strong> from sitting the examination.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 8: Compulsory Attendance Policy (80% Weekly Semester Hours)        */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'attendance') && matchesSearch('attendance compulsory 80 per cent seminar laboratory course exercise lab ex section 7(5)') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-attendance-rules">
            <button
              onClick={() => toggleSection('section-attendance-rules')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs">
                  8
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Compulsory Attendance Policy (80% Weekly Semester Hours)
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Mandatory for Seminar (S), Laboratory course (Prak) &amp; Exercise (&Uuml;b) &bull; Debarred from examination if attendance &lt; 80%
                  </p>
                </div>
              </div>
              {expandedSections['section-attendance-rules'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-attendance-rules'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 8 Key Highlight Metrics */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className={`p-3 rounded-xl border border-emerald-500/30 ${darkMode ? 'bg-emerald-950/20' : 'bg-emerald-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Min Attendance</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">&ge; 80%</span>
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Semester Hours</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Max Missed Rate</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-rose-600 dark:text-rose-400">&le; 20%</span>
                      <span className="text-xs font-semibold text-rose-700 dark:text-rose-300">Total Hours</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Applicable Types</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-orange-600 dark:text-orange-400">3</span>
                      <span className="text-xs font-semibold text-slate-500">Seminar, Prak, &Uuml;b</span>
                    </div>
                  </div>
                </div>

                {/* 3 Course Types Visual Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="font-bold text-slate-900 dark:text-white block mb-2">Mandatory Course Types</span>
                    <ol className="space-y-2 text-slate-700 dark:text-slate-200 text-xs font-semibold list-none">
                      <li className="flex items-baseline gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400">1.</span>
                        <span>Seminar (S),</span>
                      </li>
                      <li className="flex items-baseline gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400">2.</span>
                        <span>Laboratory course (Prak) and</span>
                      </li>
                      <li className="flex items-baseline gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400">3.</span>
                        <span>Exercise (&Uuml;b),</span>
                      </li>
                    </ol>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="font-bold text-slate-900 dark:text-white block mb-2">Threshold &amp; Modality</span>
                    <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                      <li>&bull; Minimum threshold: <strong>&ge; 80% of weekly semester hours</strong>.</li>
                      <li>&bull; In-person attendance is the general standard.</li>
                      <li>&bull; Supported by LMS / video platforms where applicable.</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/70'}`}>
                    <span className="font-bold text-rose-700 dark:text-rose-300 block mb-2">Failure Consequence</span>
                    <p className="text-rose-800 dark:text-rose-200 leading-relaxed">
                      Falling below 80% means failing the course prerequisite: you are <strong>barred from sitting the exam</strong> and will have to repeat the course.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 9: Retaking Examinations (Attempt Limits & 4 Attempts Total)       */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'retakes') && matchesSearch('retaking examinations passed cannot retaken unpassed three times four attempts definitively failed end of following academic year') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-retakes-attempts">
            <button
              onClick={() => toggleSection('section-retakes-attempts')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-xs">
                  9
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Retaking Examinations: Attempt Limits &amp; Definitively Failed Status
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Passed exams cannot be retaken &bull; Max 3 retakes (4 total attempts) &bull; Definitively failed if all attempts exhausted
                  </p>
                </div>
              </div>
              {expandedSections['section-retakes-attempts'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-retakes-attempts'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 9 Key Highlight Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className={`p-3 rounded-xl border border-red-500/30 ${darkMode ? 'bg-red-950/20' : 'bg-red-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block">Total Attempts</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-red-600 dark:text-red-400">Max 4</span>
                      <span className="text-xs font-semibold text-red-700 dark:text-red-300">1 Regular + 3 Resits</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Passed Exam Retake</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-orange-600 dark:text-orange-400">0</span>
                      <span className="text-xs font-semibold text-slate-500">Not Allowed (Final)</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Resit Window</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-amber-600 dark:text-amber-400">&le; 1</span>
                      <span className="text-xs font-semibold text-slate-500">Academic Year</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Exhaustion Penalty</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-rose-600 dark:text-rose-400">Final</span>
                      <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">Dismissal</span>
                    </div>
                  </div>
                </div>

                {/* 4 Attempts Visual Ladder */}
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50/80 border-slate-200'}`}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-red-500" />
                    <span>Examination Attempt Progression (Max 4 Total Attempts)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                    <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-orange-500">Attempt 1</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-500 font-semibold">Regular Exam</span>
                      </div>
                      <p className="text-[11px] text-slate-500">First formal attempt in regular semester session.</p>
                    </div>

                    <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-amber-500">Attempt 2</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 font-semibold">1st Resit</span>
                      </div>
                      <p className="text-[11px] text-slate-500">First retake opportunity if Attempt 1 was unpassed.</p>
                    </div>

                    <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-orange-500">Attempt 3</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-500 font-semibold">2nd Resit</span>
                      </div>
                      <p className="text-[11px] text-slate-500">Second retake opportunity.</p>
                    </div>

                    <div className={`p-3.5 rounded-xl border border-rose-500/40 ${darkMode ? 'bg-rose-950/20 text-rose-300' : 'bg-rose-50 text-rose-800'}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-rose-600 dark:text-rose-400">Attempt 4</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-600 font-bold">Final Resit 3</span>
                      </div>
                      <p className="text-[11px] text-rose-700 dark:text-rose-300 font-semibold">
                        Last chance. If failed &rarr; definitively failed (Permanent Academic Dismissal).
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2 Important Distinctions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <strong className="block text-slate-900 dark:text-white mb-1">
                      No Retakes for Passed Modules
                    </strong>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Any passed examination or thesis is final. Students <strong>cannot retake passed examinations to improve grades</strong>.
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <strong className="block text-slate-900 dark:text-white mb-1">
                      Resit Timing Standard
                    </strong>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      At least 1 exam opportunity is offered each semester. Resits must take place by the end of the following academic year at latest.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 10: Absence and Withdrawal from Examinations                      */}
        {/* ------------------------------------------------------------------------- */}
        {(selectedCategory === 'all' || selectedCategory === 'absence') && matchesSearch('absence withdrawal medical certificate illness unsatisfactory 5.0 without delay substantiated deemed not to have taken place') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`} id="section-absence-21">
            <button
              onClick={() => toggleSection('section-absence-21')}
              className={`w-full px-5 py-4 flex items-center justify-between text-left border-b transition-colors ${
                darkMode ? 'border-slate-800 hover:bg-slate-850/50' : 'border-slate-100 hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-xs">
                  10
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Absence and Withdrawal from Examinations
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Unexcused absence = 5.0 Failed (burns attempt) &bull; Substantiated medical certificate = attempt deemed NOT taken
                  </p>
                </div>
              </div>
              {expandedSections['section-absence-21'] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections['section-absence-21'] && (
              <div className="p-5 sm:p-6 space-y-4">
                {/* Section 10 Key Highlight Metrics */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className={`p-3 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/20' : 'bg-rose-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Unexcused Absence</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-rose-600 dark:text-rose-400">Grade 5.0</span>
                      <span className="text-xs font-semibold text-rose-700 dark:text-rose-300">Burns 1 Attempt</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border border-emerald-500/30 ${darkMode ? 'bg-emerald-950/20' : 'bg-emerald-50/60'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Medical Certificate</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">0 Attempts</span>
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Deemed Not Taken</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Notification Window</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-black text-orange-600 dark:text-orange-400">Immediate</span>
                      <span className="text-xs font-semibold text-slate-500">Without Delay</span>
                    </div>
                  </div>
                </div>

                {/* 3 Outcome Scenarios Visual Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className={`p-4 rounded-xl border border-rose-500/40 ${
                    darkMode ? 'bg-rose-950/20 text-rose-300' : 'bg-rose-50 text-rose-800'
                  }`}>
                    <div className="flex items-center gap-2 mb-2 text-rose-600 dark:text-rose-400 font-bold">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Case A: Unexcused Absence</span>
                    </div>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                      <li>&bull; Misses exam without good cause.</li>
                      <li>&bull; Leaves exam after starting.</li>
                      <li>&bull; Fails to submit within deadline.</li>
                      <li className="pt-1 font-bold text-rose-700 dark:text-rose-300">
                        &rarr; Result: Graded 5.0 (Unsatisfactory) and counts as an exam attempt!
                      </li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center gap-2 mb-2 text-orange-500 font-bold">
                      <Stethoscope className="w-4 h-4" />
                      <span>Case B: Illness &amp; Medical Proof</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      <li>&bull; Notify Chair of Exam Board <strong>without delay</strong>.</li>
                      <li>&bull; Submit in writing or electronically.</li>
                      <li>&bull; In event of illness: <strong>valid medical certificate required</strong>.</li>
                      <li>&bull; Medical cause must substantiate inability to sit.</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border border-emerald-500/30 ${
                    darkMode ? 'bg-emerald-950/20 text-emerald-300' : 'bg-emerald-50 text-emerald-800'
                  }`}>
                    <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Case C: Approved Outcome</span>
                    </div>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                      <li>&bull; If substantiated cause is approved:</li>
                      <li className="font-bold text-emerald-700 dark:text-emerald-300">
                        &bull; Attempt deemed NOT to have taken place (does not count towards attempt limit).
                      </li>
                      <li>&bull; No 5.0 grade recorded on transcript.</li>
                      <li>&bull; Eligible to register for next exam session.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* APPENDIX: German - Vietnamese Grade Conversion Table                      */}
      {/* ========================================================================= */}
      <div className={`p-5 sm:p-6 rounded-2xl border transition-all ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
      }`} id="section-grade-conversion-table">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Appendix: German &ndash; Vietnamese Grade Conversion Scale
              </h3>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Linear scale calibration between German marks (1.0 &ndash; 5.0) and Vietnamese marks (10.0 &ndash; 0.0)
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowGradeConversion(!showGradeConversion)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 ${
              showGradeConversion
                ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
                : darkMode
                  ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {showGradeConversion ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            <span>{showGradeConversion ? 'Hide Conversion Scale' : 'View Grade Conversion Table'}</span>
          </button>
        </div>

        {showGradeConversion && (
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <GradeConversionTable darkMode={darkMode} searchQuery={effectiveQuery} />
          </div>
        )}
      </div>
    </div>
  );
}
