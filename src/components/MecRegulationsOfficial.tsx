/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Component: Official HAW Hamburg - VGU Examination & Study Regulations (B.Sc. Mechatronics)
 * Full content extracted from the official Examination and Study Regulations document (2026).
 * Curriculum/module table excluded as per user specification.
 */

import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  BookOpen,
  Calendar,
  Clock,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Award,
  Users,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  ExternalLink,
  GraduationCap,
  Scale,
  Ban,
  Building2,
  CheckSquare,
  History,
  XCircle,
  FileCheck2,
  Lock,
  Compass
} from 'lucide-react';

interface MecRegulationsOfficialProps {
  darkMode: boolean;
  searchQuery?: string;
}

export default function MecRegulationsOfficial({ darkMode, searchQuery = '' }: MecRegulationsOfficialProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'section-study-structure': true,
    'section-retakes-failure': true,
    'section-bachelor-thesis': true,
    'section-attendance-courses': true,
  });
  const [localQuery, setLocalQuery] = useState<string>('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const expandAll = () => {
    setExpandedSections({
      'section-study-structure': true,
      'section-advising': true,
      'section-modules-progression': true,
      'section-practical-module': true,
      'section-attendance-courses': true,
      'section-credit-recognition': true,
      'section-exam-registration': true,
      'section-exam-formats': true,
      'section-online-exams': true,
      'section-bachelor-thesis': true,
      'section-grading-system': true,
      'section-retakes-failure': true,
      'section-absence-cheating': true,
      'section-overall-degree-mark': true,
      'section-appeals-records': true,
    });
  };

  const collapseAll = () => {
    setExpandedSections({});
  };

  const effectiveQuery = (localQuery || searchQuery).trim().toLowerCase();

  const categories = [
    { id: 'all', label: 'All Regulations' },
    { id: 'progression', label: 'Progression & Prerequisites (§3, §7, §8)' },
    { id: 'attendance', label: 'Attendance & Courses (§9, §10)' },
    { id: 'exams', label: 'Exam Formats & Withdrawal (§12, §13, §15)' },
    { id: 'grading', label: 'Grading & Degree Mark (§19, §29)' },
    { id: 'retakes', label: 'Retakes & Failure (§20, §21, §22, §27)' },
    { id: 'thesis', label: 'Bachelor Thesis (§16)' },
    { id: 'appeals', label: 'Appeals & Advising (§6, §23, §26)' },
  ];

  return (
    <div className="space-y-6" id="official-regulations-container">
      {/* Official Header Badge */}
      <div className={`p-6 rounded-2xl border transition-all relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-orange-950/20 border-slate-800' 
          : 'bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20 border-slate-200 shadow-sm'
      }`}>
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-amber-500" />
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pl-2">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-orange-500/10 text-orange-500 border border-orange-500/20">
                Official Regulations • 2026
              </span>
              <span className={`text-[10px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                HAW Hamburg & Vietnamese-German University (VGU)
              </span>
            </div>
            <h1 className={`text-lg md:text-xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Examination and Study Regulations for B.Sc. in Mechatronics
            </h1>
            <p className={`text-xs md:text-sm mt-1 max-w-3xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Official academic governance framework pursuant to Section 108(1) and Section 91(2)(1) of the Hamburg Higher Education Act (HmbHG).
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <div className={`px-3 py-2 rounded-xl border flex items-center gap-2 ${
              darkMode ? 'bg-slate-950/50 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span><strong>3.5 Years</strong> (7 Semesters)</span>
            </div>
            <div className={`px-3 py-2 rounded-xl border flex items-center gap-2 ${
              darkMode ? 'bg-slate-950/50 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <Award className="w-3.5 h-3.5 text-emerald-500" />
              <span><strong>210 ECTS</strong> (B.Sc.)</span>
            </div>
            <div className={`px-3 py-2 rounded-xl border flex items-center gap-2 ${
              darkMode ? 'bg-slate-950/50 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              <span><strong>100% English</strong> (§4)</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-5 pt-5 border-t border-slate-200/80 dark:border-slate-800 text-xs">
          <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/30 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
            <div className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">Exam Retakes</div>
            <div className={`text-xs font-extrabold mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Max 4 Attempts</div>
            <div className="text-[10px] text-slate-400">3 retakes max (§20(2))</div>
          </div>

          <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/30 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
            <div className="text-[10px] text-rose-500 font-bold uppercase tracking-wider">Attendance</div>
            <div className={`text-xs font-extrabold mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>&ge; 80% Mandatory</div>
            <div className="text-[10px] text-slate-400">Lab, Seminar, Tutorial (§9)</div>
          </div>

          <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/30 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
            <div className="text-[10px] text-sky-500 font-bold uppercase tracking-wider">Exam Withdrawal</div>
            <div className={`text-xs font-extrabold mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>&le; 3 Days Before</div>
            <div className="text-[10px] text-slate-400">Calendar days limit (§12(2))</div>
          </div>

          <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/30 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
            <div className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Thesis Entry</div>
            <div className={`text-xs font-extrabold mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>&ge; 180 ECTS</div>
            <div className="text-[10px] text-slate-400">12 weeks + Colloquium (§16)</div>
          </div>

          <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/30 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
            <div className="text-[10px] text-purple-500 font-bold uppercase tracking-wider">Placement (Main)</div>
            <div className={`text-xs font-extrabold mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>14 Weeks (15 CP)</div>
            <div className="text-[10px] text-slate-400">Pass M1-M12 first (§8)</div>
          </div>

          <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-950/30 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
            <div className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Overall Mark</div>
            <div className={`text-xs font-extrabold mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>80% Mods + 20% Thesis</div>
            <div className="text-[10px] text-slate-400">Truncated to 2 decimals (§29)</div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-xs'
                  : darkMode
                  ? 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={expandAll}
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
              darkMode ? 'border-slate-800 text-slate-400 hover:text-white' : 'border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
              darkMode ? 'border-slate-800 text-slate-400 hover:text-white' : 'border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* ARTICLES CONTAINER */}
      <div className="space-y-4">

        {/* 1. STUDY STRUCTURE, ACADEMIC DEGREE & DURATION (§1 - §5) */}
        {(selectedCategory === 'all' || selectedCategory === 'progression') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-study-structure')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-blue-500">§ 1, § 2, § 3, § 4, § 5</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Degree Objectives, Structure & Standard Duration of Study
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-study-structure'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-study-structure'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <h4 className={`font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      <Award className="w-4 h-4 text-orange-500" />
                      Awarded Degree & Language
                    </h4>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li><strong>Academic Degree:</strong> Bachelor of Science (B.Sc.) in Mechatronics awarded by Hamburg University of Applied Sciences (HAW Hamburg) at VGU (§5).</li>
                      <li><strong>Language:</strong> The language of instruction and examination is 100% <strong>English</strong> (§4).</li>
                      <li><strong>Objectives (§2):</strong> Qualify graduates for professional engineering practice with problem-solving competence across mechanical, electrical, and IT systems.</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <h4 className={`font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      <Calendar className="w-4 h-4 text-blue-500" />
                      Duration & Credit Allocation
                    </h4>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li><strong>Standard Duration:</strong> 3.5 years (seven semesters) of full-time study (§3(1)).</li>
                      <li><strong>Total Workload:</strong> 210 ECTS credit points (§3(2)). 1 ECTS = 30 hours student workload; 30 ECTS per semester, 60 ECTS per academic year (§7(2)).</li>
                      <li><strong>Progression Phases:</strong> Theoretical and application core curriculum &rarr; practice-oriented specialization (final 3 semesters) &rarr; Bachelor's Thesis in 7th semester (§3(3)).</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2. ACADEMIC ADVISING & TIMELINES (§6) */}
        {(selectedCategory === 'all' || selectedCategory === 'appeals') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-advising')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}>
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-500">§ 6</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-rose-500/10 text-rose-500 border border-rose-500/20">Critical: Exmatriculation Risk</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Subject-Specific Academic Advising & Study Extension Notice
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-advising'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-advising'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3 text-xs leading-relaxed">
                <div className={`p-4 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/15 text-rose-200' : 'bg-rose-50/50 text-rose-900'}`}>
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-rose-600 dark:text-rose-400 font-bold mb-1">
                        Mandatory Counselling for Exceeding Standard Study Duration (§6(2))
                      </strong>
                      Students who have exceeded the standard period of study (7 semesters) must attend a subject-specific counselling session within <strong>two semesters</strong> of the end of the standard period (i.e. by Semester 9), unless they have already registered for all outstanding examinations or their Bachelor's thesis.
                      <p className="mt-1.5 font-semibold text-rose-700 dark:text-rose-300">
                        Students who fail to attend this mandatory academic advisory session shall be legally de-registered (exmatriculated) in accordance with the provisions of the Hamburg Higher Education Act (HmbHG).
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'} text-slate-600 dark:text-slate-400`}>
                  <strong>First Semester Advising (§6(3)):</strong> Students are expected to attend an orientation and subject-specific academic advisory session during the first semester of their Bachelor's program to understand study options, curriculum requirements, and examination procedures.
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. MODULE PREREQUISITES & PROGRESSION GATEWAYS (§7) */}
        {(selectedCategory === 'all' || selectedCategory === 'progression') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-modules-progression')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-600'}`}>
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-orange-500">§ 7(6), § 7(7), § 7(8), § 7(9)</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Gatekeeper Milestones</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Module Prerequisites, Specialization Thresholds & 3rd Year Gatekeeper
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-modules-progression'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-modules-progression'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Gatekeeper: Year 3 Modules */}
                  <div className={`p-4 rounded-xl border relative ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <div className="text-orange-500 font-bold uppercase text-[10px] mb-1 font-mono">§ 7(9) Gatekeeper Rule</div>
                    <h4 className={`font-bold text-sm mb-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Admission to 3rd-Year Modules (M25 &ndash; M44)
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Successful completion of all first-year modules (<strong>M1 to M12</strong>) is a mandatory prerequisite for participation in courses and admission to examinations for third-year modules (M25 to M44).
                    </p>
                    <div className="mt-2 text-[11px] text-amber-600 dark:text-amber-400 bg-amber-500/10 p-2 rounded-lg border border-amber-500/15">
                      <em>Exception:</em> In justified cases upon written petition, students who have achieved at least <strong>50 ECTS</strong> from Year 1 may be granted conditional admission by the Examination Board.
                    </div>
                  </div>

                  {/* Laboratory Prerequisite */}
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <div className="text-blue-500 font-bold uppercase text-[10px] mb-1 font-mono">§ 7(6) Lab Prerequisite</div>
                    <h4 className={`font-bold text-sm mb-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Laboratory Course Unit Requirement
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Admission to examinations for modules with practical laboratory units (including <strong>M3 to M5, M7 to M9, M11 to M17, M19 to M26, M30 to M41, and M44</strong>) is strictly conditional upon having passed the relevant laboratory course unit or coursework (SL).
                    </p>
                  </div>

                  {/* Specialization & Electives */}
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <div className="text-emerald-500 font-bold uppercase text-[10px] mb-1 font-mono">§ 7(7) & § 7(8) Electives</div>
                    <h4 className={`font-bold text-sm mb-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Specialization Designation & Integrations
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong>Integration Subjects (Sem 5):</strong> 6 ECTS across at least 2 interdisciplinary subjects (§7(7)).
                      <br /><br />
                      <strong>Specialization (Sem 6):</strong> 5 modules (25 ECTS). A chosen specialization (Robotics, Dynamics of Drive Systems, or Automotive/Aerospace) is <strong>only listed on the final transcript if at least 4 modules</strong> from that specialization have been completed (§7(8)).
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. PRACTICAL MODULE / MAIN PLACEMENT (§8) */}
        {(selectedCategory === 'all' || selectedCategory === 'progression') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-practical-module')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-purple-500">§ 8</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-purple-500/10 text-purple-500 border border-purple-500/20">14 Weeks • 15 ECTS</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Practical Module (Main Industrial Placement) Regulations
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-practical-module'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-practical-module'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="block text-slate-900 dark:text-white font-bold mb-1">Duration & Credits (§8(1))</strong>
                    Comprises a <strong>14-week practical placement</strong> in an engineering role relevant to mechatronics, accompanied by a colloquium course. Total value: <strong>15 ECTS</strong> credit points.
                  </div>
                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="block text-slate-900 dark:text-white font-bold mb-1">Prerequisite (§8(2))</strong>
                    The practical module may <strong>only be commenced once modules M1 to M12</strong> of the first year of study have been successfully completed.
                  </div>
                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="block text-slate-900 dark:text-white font-bold mb-1">Assessment (§8(3))</strong>
                    Completed by means of an academic assignment in the form of an <strong>oral presentation and report</strong>. Graded as Pass / Fail (SL).
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. COURSE TYPES & COMPULSORY ATTENDANCE (§9, §10) */}
        {(selectedCategory === 'all' || selectedCategory === 'attendance') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-attendance-courses')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-600'}`}>
                  <CheckSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-rose-500">§ 9, § 10</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-rose-500/10 text-rose-500 border border-rose-500/20">Attendance &ge; 80% Mandatory</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Types of Courses & Mandatory Attendance Requirement
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-attendance-courses'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-attendance-courses'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs leading-relaxed">
                {/* 80% Rule Alert */}
                <div className={`p-4 rounded-xl border border-rose-500/30 ${darkMode ? 'bg-rose-950/15 text-rose-200' : 'bg-rose-50/50 text-rose-900'}`}>
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-rose-600 dark:text-rose-400 font-bold mb-1">
                        Compulsory Attendance Requirement (§9(2), §9(3))
                      </strong>
                      Attendance is <strong>strictly compulsory</strong> for the following three course types:
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-2 font-semibold text-center">
                        <div className="p-2 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-rose-400/30">1. Seminar (S)</div>
                        <div className="p-2 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-rose-400/30">2. Laboratory practical (Prak)</div>
                        <div className="p-2 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-rose-400/30">3. Tutorial (Üb)</div>
                      </div>
                      The attendance requirement is met <strong>only if the student has attended at least 80% of the weekly semester hours</strong> for the respective course. Failure to achieve 80% attendance disqualifies the student from exam admission.
                    </div>
                  </div>
                </div>

                {/* Course Types Definition */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-slate-900 dark:text-white font-bold">Seminar-based teaching (SeU)</strong>
                    <p className="text-slate-500 mt-1">Combines lecture presentations with interactive student feedback and active participation.</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-slate-900 dark:text-white font-bold">Laboratory Practical (Prak)</strong>
                    <p className="text-slate-500 mt-1">Hands-on experimentation individually or in groups under instructor guidance to deepen technical design skills.</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-slate-900 dark:text-white font-bold">Small-Group Project (SGP)</strong>
                    <p className="text-slate-500 mt-1">Teams of 3 to 5 students independently tackling interdisciplinary problems relevant to industry.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6. EXAM REGISTRATION & 3-DAY WITHDRAWAL RULE (§12) */}
        {(selectedCategory === 'all' || selectedCategory === 'exams') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-exam-registration')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-sky-500/10 text-sky-400' : 'bg-sky-50 text-sky-600'}`}>
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-sky-500">§ 12</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-sky-500/10 text-sky-500 border border-sky-500/20">Withdrawal &le; 3 Days Before Exam</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Examination Registration & Mandatory Withdrawal Deadlines
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-exam-registration'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-exam-registration'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <h4 className={`font-bold mb-1.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Mandatory Registration Requirement (§12(1))
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Participation in any examination requires students to formally register for it. Registration also constitutes an application for admission. Students may not sit an examination if they have not registered or have not been admitted.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border border-sky-500/30 ${darkMode ? 'bg-sky-950/20' : 'bg-sky-50/50'}`}>
                    <h4 className={`font-bold mb-1.5 text-sky-600 dark:text-sky-400`}>
                      3-Day Withdrawal Deadline (§12(2), §12(4))
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      The official withdrawal deadline ends <strong>no later than three calendar days before the examination date</strong>. Once this deadline expires, examination registration becomes legally binding. Withdrawing after the deadline is only permitted on substantiated medical grounds under §21.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 7. EXAMINATION TYPES & ONLINE EXAM RESTRICTIONS (§13, §14, §15) */}
        {(selectedCategory === 'all' || selectedCategory === 'exams') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-exam-formats')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-indigo-500">§ 13, § 14, § 15</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">8 Assessment Formats</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Types of Examinations & Online Testing Restrictions
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-exam-formats'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-exam-formats'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-indigo-500 block font-mono">1. Written Exam (K)</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Duration: <strong>60 to 240 minutes</strong>. Supervised independent test in written or electronic form.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-indigo-500 block font-mono">2. Term Paper (H)</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Duration: <strong>1 to 12 weeks</strong>. Completed without supervision; declaration of independent authorship required.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-indigo-500 block font-mono">3. Oral Exam (M)</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Duration: <strong>15 to 45 minutes</strong> per candidate. Individual or group up to 3 candidates; official minutes taken.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-indigo-500 block font-mono">4. Presentation (R)</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Oral talk (<strong>15 to 45 mins</strong>) + written summary. Maximum preparation time: 6 weeks.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-indigo-500 block font-mono">5. Certificate (T)</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Fulfillment of laboratory reports / practical exercises within the semester deadline.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-indigo-500 block font-mono">6. Project Work (PJ)</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Interdisciplinary engineering task, completed within <strong>max 6 months</strong> + presentation (15-45 mins).</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-indigo-500 block font-mono">7. Design Project (KN)</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Written design assessment demonstrating technical design skills. Maximum timeframe: <strong>3 months</strong>.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-indigo-500 block font-mono">8. Portfolio (PP)</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Combination of <strong>2 to 10 assessment elements</strong> across at least 2 formats. If failed, retaken in its entirety.</p>
                  </div>
                </div>

                {/* Online Exam Restriction Warning */}
                <div className={`p-3.5 rounded-xl border border-amber-500/30 ${darkMode ? 'bg-amber-950/20 text-amber-200' : 'bg-amber-50/50 text-amber-900'}`}>
                  <strong className="block font-bold mb-1">Online Examination Policy (§15)</strong>
                  Only oral examinations, presentations, or oral portfolio components may be conducted online via video conference. <strong>Written examinations may NOT be conducted online!</strong> During online exams, video camera and microphone must remain switched on for the entire duration. Recording of video or audio is strictly prohibited.
                </div>
              </div>
            )}
          </div>
        )}

        {/* 8. GRADING SCALE & EVALUATION SYSTEM (§19) */}
        {(selectedCategory === 'all' || selectedCategory === 'grading') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-grading-system')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-500">§ 19</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Pass Grade &ge; 4.0</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Assessment and Grading of Academic and Examination Performance
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-grading-system'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-grading-system'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'}`}>
                    <div className="text-base font-extrabold font-mono">1.0 &ndash; 1.5</div>
                    <div className="font-bold mt-1 text-xs">Very Good</div>
                    <div className="text-[10px] opacity-80 mt-0.5">Outstanding</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-blue-950/20 border-blue-800/40 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
                    <div className="text-base font-extrabold font-mono">1.6 &ndash; 2.5</div>
                    <div className="font-bold mt-1 text-xs">Good</div>
                    <div className="text-[10px] opacity-80 mt-0.5">Above average</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-amber-950/20 border-amber-800/40 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
                    <div className="text-base font-extrabold font-mono">2.6 &ndash; 3.5</div>
                    <div className="font-bold mt-1 text-xs">Satisfactory</div>
                    <div className="text-[10px] opacity-80 mt-0.5">Meets average</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-sky-950/20 border-sky-800/40 text-sky-300' : 'bg-sky-50 border-sky-200 text-sky-900'}`}>
                    <div className="text-base font-extrabold font-mono">3.6 &ndash; 4.0</div>
                    <div className="font-bold mt-1 text-xs">Pass</div>
                    <div className="text-[10px] opacity-80 mt-0.5">Minimum pass</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-rose-950/20 border-rose-800/40 text-rose-300' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                    <div className="text-base font-extrabold font-mono">5.0</div>
                    <div className="font-bold mt-1 text-xs">Unsatisfactory</div>
                    <div className="text-[10px] opacity-80 mt-0.5">Fail</div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900 text-slate-400' : 'bg-slate-50/60 border-slate-200/80 text-slate-600'}`}>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li><strong>Nuanced Marks:</strong> Marks may be adjusted in steps of ±0.3: <strong>1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 5.0</strong>. Marks of 0.7, 4.3, 4.7, and 5.3 are strictly not permitted (§19(5)).</li>
                    <li><strong>Passing Threshold:</strong> An examination is passed if it receives a mark of <strong>at least 4.0</strong>. Coursework (SL) is graded as Pass / Fail.</li>
                    <li><strong>Marking Deadline:</strong> Examination and coursework achievements must be assessed within <strong>eight weeks</strong> (§19(3)).</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 9. RETAKE EXAMINATIONS & FINAL FAILURE (§20, §27) */}
        {(selectedCategory === 'all' || selectedCategory === 'retakes') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-retakes-failure')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-600'}`}>
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-rose-500">§ 20, § 27</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-rose-500/10 text-rose-500 border border-rose-500/20">Max 4 Attempts Total</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Examination Retake Policy & Definitive Academic Failure
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-retakes-failure'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-retakes-failure'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* § 20(2) Attempts Quota */}
                  <div className={`p-4 rounded-xl border border-amber-500/30 ${darkMode ? 'bg-amber-950/15' : 'bg-amber-50/50'}`}>
                    <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 font-bold mb-2">
                      <RotateCcw className="w-4 h-4" />
                      <h4>Total Attempts Limit: 4 Attempts (§20(2))</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Any examination or course component that has not been passed may be <strong>retaken three times, giving a total of four attempts</strong> (1 first sitting + up to 3 retakes).
                    </p>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      <strong>No Retake for Passed Modules (§20(1)):</strong> Passed examinations or coursework may not be retaken under any circumstances to improve the grade.
                    </p>
                  </div>

                  {/* § 27 Definitive Failure */}
                  <div className={`p-4 rounded-xl border border-rose-500/40 ${darkMode ? 'bg-rose-950/20 text-rose-200' : 'bg-rose-50/60 text-rose-900'}`}>
                    <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400 font-bold mb-2">
                      <Ban className="w-4 h-4" />
                      <h4>Definitive Failure & Dismissal (§27)</h4>
                    </div>
                    <p className="leading-relaxed">
                      If all 4 opportunities to retake an examination have been exhausted without success, the examination is deemed to have been <strong>definitively failed</strong>.
                    </p>
                    <p className="mt-2 font-bold text-rose-700 dark:text-rose-300">
                      If an examination for a compulsory module or the Bachelor's thesis is definitively failed, the student may not continue their studies and is permanently dismissed from the degree program.
                    </p>
                  </div>
                </div>

                {/* Additional Retake Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-slate-900 dark:text-white font-bold">Retake Scheduling (§20(3))</strong>
                    <p className="text-slate-500 mt-1">Offered at least once each semester. Must be retaken by the end of the following academic year at latest.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-slate-900 dark:text-white font-bold">Elective Switching (§20(5))</strong>
                    <p className="text-slate-500 mt-1">Failed attempts in an elective module are not counted if a student switches to a different elective module.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-slate-900 dark:text-white font-bold">Thesis Retake (§20(4))</strong>
                    <p className="text-slate-500 mt-1">A failed Bachelor's thesis may be retaken <strong>only once</strong> with a newly assigned topic (within ~3 months).</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 10. ABSENCE, CHEATING & COMPENSATION (§21, §22, §23, §24) */}
        {(selectedCategory === 'all' || selectedCategory === 'retakes' || selectedCategory === 'appeals') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-absence-cheating')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600'}`}>
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-red-500">§ 21, § 22, § 23, § 24</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Absence, Medical Certificates, Cheating Penalties & Accommodations
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-absence-cheating'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-absence-cheating'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <h4 className={`font-bold mb-1.5 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      <XCircle className="w-4 h-4 text-rose-500" />
                      Absence & Medical Excuse (§21)
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Unexcused absence or unauthorized withdrawal after an exam has started results in an automatic grade of <strong>5.0 (unsatisfactory)</strong>. In the event of illness, a valid medical certificate specifying medical impairment and doctor's prognosis must be submitted without delay.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <h4 className={`font-bold mb-1.5 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      <AlertTriangle className="w-4 h-4 text-rose-500" />
                      Cheating & Breaches of Order (§22)
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Attempting to influence results by deception or unauthorized aids results in automatic grade <strong>5.0 (fail)</strong>. Exam room disruptions after warning result in immediate exclusion and grade 5.0. Retrospective discovery can result in degree invalidation up to 5 years later (§31).
                    </p>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900 text-slate-400' : 'bg-slate-50/60 border-slate-200/80 text-slate-600'}`}>
                  <strong>Disadvantage Compensation & Maternity Protection (§23, §24):</strong> Students with disabilities, chronic illness, or parenting/caring responsibilities may apply for compensatory measures (e.g. extended exam time or special equipment). Pregnant/nursing students are protected under the Maternity Protection Act (MuSchG).
                </div>
              </div>
            )}
          </div>
        )}

        {/* 11. BACHELOR'S THESIS & FINAL COLLOQUIUM (§16) */}
        {(selectedCategory === 'all' || selectedCategory === 'thesis') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-bachelor-thesis')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-500">§ 16</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">15 ECTS Total • 180 ECTS Required</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Bachelor's Thesis & Final Colloquium Regulations
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-bachelor-thesis'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-bachelor-thesis'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-emerald-500 block font-mono">Admission Prerequisite</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Must have earned at least <strong>180 ECTS credit points</strong> (§16(2)). Written application to the Chair of Examination Board.</p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-emerald-500 block font-mono">Duration & Deadline</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400"><strong>12-week</strong> working timeframe (§16(5)). Maximum <strong>6 weeks extension</strong> granted for medical illness or good cause (§16(7)).</p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-emerald-500 block font-mono">Supervisors & Examiners</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Assessed by <strong>2 examiners</strong>. First examiner must be a university lecturer at HAW Hamburg or VGU (§16(4)). Written in English (§16(3)).</p>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <strong className="text-emerald-500 block font-mono">Defense Colloquium</strong>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Oral defense held within <strong>10 weeks</strong> of submission (§16(1)). Module M46 consists of 12 CP thesis + 3 CP colloquium (weight 3/15) (§16(9)).</p>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900 text-slate-400' : 'bg-slate-50/60 border-slate-200/80 text-slate-600'}`}>
                  <strong>Submission & Declaration (§16(6)):</strong> Must be submitted in writing (single copy) and electronically. Students must submit a signed affirmation on oath stating that the thesis was written independently without external assistance and using only cited sources.
                </div>
              </div>
            )}
          </div>
        )}

        {/* 12. OVERALL DEGREE MARK CALCULATION (§29, §30) */}
        {(selectedCategory === 'all' || selectedCategory === 'grading') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-overall-degree-mark')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}>
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-500">§ 29, § 30</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">80% Modules + 20% Thesis</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Overall Mark Calculation for the Bachelor's Examination & Degree Conferral
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-overall-degree-mark'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-overall-degree-mark'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs leading-relaxed">
                {/* Formula Box */}
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                  <h4 className={`font-bold mb-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Overall Mark Formula (§29(1))
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
                    <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold">
                      <strong>80% Component Mark:</strong> Derived from module marks weighted in accordance with the weighting factors (G) in the curriculum.
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <strong>20% Component Mark:</strong> The mark awarded for Module M46 (Bachelor's Thesis + Final Defense Colloquium).
                    </div>
                  </div>
                  <p className="text-slate-500 mt-2">
                    <em>Precision Rule:</em> The calculated overall mark is <strong>truncated to the second decimal place without rounding</strong> (e.g., 1.509 becomes 1.50).
                  </p>
                </div>

                {/* Latin/German Classifications */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono">
                  <div className="p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <div className="font-extrabold">&le; 1.50</div>
                    <div className="text-[11px] font-bold">Very Good (Sehr gut)</div>
                  </div>
                  <div className="p-2.5 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <div className="font-extrabold">1.51 &ndash; 2.50</div>
                    <div className="text-[11px] font-bold">Good (Gut)</div>
                  </div>
                  <div className="p-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <div className="font-extrabold">2.51 &ndash; 3.50</div>
                    <div className="text-[11px] font-bold">Satisfactory (Befriedigend)</div>
                  </div>
                  <div className="p-2.5 rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    <div className="font-extrabold">3.51 &ndash; 4.00</div>
                    <div className="text-[11px] font-bold">Pass (Ausreichend)</div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900 text-slate-400' : 'bg-slate-50/60 border-slate-200/80 text-slate-600'}`}>
                  <strong>Certificate & Diploma Supplement (§30):</strong> Issued in German with an official English translation and ECTS Diploma Supplement within <strong>four weeks</strong> of successful completion.
                </div>
              </div>
            )}
          </div>
        )}

        {/* 13. APPEALS, RECORDS & EXAMINATION BOARD (§17, §18, §25, §26) */}
        {(selectedCategory === 'all' || selectedCategory === 'appeals') && (
          <div className={`rounded-2xl border transition-all overflow-hidden ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={() => toggleSection('section-appeals-records')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-slate-700/30 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500">§ 17, § 25, § 26</span>
                  </div>
                  <h3 className={`text-sm md:text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Examination Board, Inspection of Records & Appeals Procedure
                  </h3>
                </div>
              </div>
              <div className="text-slate-400">
                {expandedSections['section-appeals-records'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {expandedSections['section-appeals-records'] && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <h4 className={`font-bold mb-1.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Access to Examination Records (§25)
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Students have the legal right, upon application to the Chair of the Examination Board, to inspect their examination files, including marked written papers, examiners' reports, and oral minutes.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/60 border-slate-200/80'}`}>
                    <h4 className={`font-bold mb-1.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Appeals Procedure (§26)
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Appeals against examination decisions must be lodged in writing with the Chair of the Examination Board within <strong>one month</strong> of notification. If not upheld in full, appeals are referred to the official Appeals Committee of HAW Hamburg.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
