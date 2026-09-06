/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Component: German - Vietnamese Grade Conversion Table (Article 19)
 */

import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Search, 
  CheckCircle2, 
  Scale, 
  BookOpen, 
  Sparkles, 
  RotateCcw 
} from 'lucide-react';
import { 
  GRADE_CONVERSION_DATA, 
  CATEGORY_STYLES, 
  GradeItem 
} from '../data/gradeConversionData';

interface GradeConversionTableProps {
  darkMode: boolean;
  searchQuery?: string;
}

export default function GradeConversionTable({ darkMode, searchQuery = '' }: GradeConversionTableProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [localSearch, setLocalSearch] = useState<string>('');
  const [converterGermanInput, setConverterGermanInput] = useState<string>('');
  const [converterVnInput, setConverterVnInput] = useState<string>('');

  // Effective search query combining portal global search and local search
  const effectiveQuery = (localSearch || searchQuery).trim().toLowerCase();

  // Quick lookup calculator logic
  const conversionResult = useMemo(() => {
    if (converterGermanInput.trim()) {
      const parsed = parseFloat(converterGermanInput.replace(',', '.'));
      if (!isNaN(parsed)) {
        // Find nearest or exact match
        let bestMatch: GradeItem | null = null;
        let minDiff = Infinity;
        for (const item of GRADE_CONVERSION_DATA) {
          const diff = Math.abs(item.numericGerman - parsed);
          if (diff < minDiff) {
            minDiff = diff;
            bestMatch = item;
          }
        }
        return { type: 'german', input: parsed, match: bestMatch };
      }
    }

    if (converterVnInput.trim()) {
      const parsedVn = parseFloat(converterVnInput.replace(',', '.'));
      if (!isNaN(parsedVn)) {
        let bestMatch: GradeItem | null = null;
        for (const item of GRADE_CONVERSION_DATA) {
          if (parsedVn >= item.minVn && parsedVn <= item.maxVn) {
            bestMatch = item;
            break;
          }
        }
        if (!bestMatch) {
          if (parsedVn < 5.0) {
            bestMatch = GRADE_CONVERSION_DATA[GRADE_CONVERSION_DATA.length - 1]; // 5.0 fail
          } else if (parsedVn >= 10.0) {
            bestMatch = GRADE_CONVERSION_DATA[0]; // 1.0
          }
        }
        return { type: 'vietnam', input: parsedVn, match: bestMatch };
      }
    }

    return null;
  }, [converterGermanInput, converterVnInput]);

  // Filtered rows for the table
  const filteredRows = useMemo(() => {
    return GRADE_CONVERSION_DATA.filter((item) => {
      // Category filter
      if (filterCategory !== 'all' && item.category !== filterCategory) {
        return false;
      }
      // Text search
      if (effectiveQuery) {
        const text = `${item.achievement} ${item.germanGrade} ${item.vietnameseGrade} ${item.classificationDe} ${item.classificationEn}`.toLowerCase();
        return text.includes(effectiveQuery);
      }
      return true;
    });
  }, [filterCategory, effectiveQuery]);

  // Split into left and right columns like the official paper format
  const leftColumnRows = useMemo(() => {
    return filteredRows.filter(item => item.id <= 18);
  }, [filteredRows]);

  const rightColumnRows = useMemo(() => {
    return filteredRows.filter(item => item.id > 18);
  }, [filteredRows]);

  const resetConverter = () => {
    setConverterGermanInput('');
    setConverterVnInput('');
  };

  return (
    <div 
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        darkMode 
          ? 'bg-slate-900/50 border-slate-800 shadow-xl backdrop-blur-md' 
          : 'bg-white border-slate-200 shadow-md'
      }`}
      id="section-grade-conversion-table"
    >
      {/* 1. Header Banner */}
      <div className={`p-5 sm:p-6 border-b ${
        darkMode 
          ? 'border-slate-800 bg-gradient-to-r from-orange-950/30 via-slate-900/50 to-slate-900/30' 
          : 'border-slate-100 bg-gradient-to-r from-orange-50/70 via-white to-orange-50/30'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20 flex-shrink-0 mt-0.5">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase rounded bg-orange-500/10 text-orange-500 border border-orange-500/20">
                  Article 19 · Regulations
                </span>
                <span className={`text-[11px] font-mono font-bold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  VGU – HAW Hamburg Examination Regulations
                </span>
              </div>
              <h3 className={`text-base sm:text-lg font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                German – Vietnamese Grade Conversion Scale
              </h3>
              <p className={`text-xs mt-1 leading-relaxed max-w-2xl ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Examinations are evaluated based on the German and/or Vietnamese grading scales through linear calibration against academic achievement percentage.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center flex-wrap">
            <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-2 ${
              darkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Passing Grade: <strong>&le; 4.0 German</strong> / <strong>&ge; 5.0 Vietnamese</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Quick Converter & Search */}
      <div className={`p-4 sm:p-5 border-b ${
        darkMode ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/50'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Quick Calculator inputs */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500">
                <Calculator className="w-4 h-4" />
              </div>
              <span className={`text-xs font-bold whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                Quick Converter:
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="German grade (e.g. 1.3)"
                  value={converterGermanInput}
                  onChange={(e) => {
                    setConverterGermanInput(e.target.value);
                    if (e.target.value) setConverterVnInput('');
                  }}
                  className={`w-full text-xs font-mono px-3 py-2 rounded-xl border outline-none transition-all ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-700 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30' 
                      : 'bg-white border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30'
                  }`}
                  id="converter-german-input"
                />
              </div>

              <span className={`text-xs font-mono font-bold ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                or
              </span>

              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Vietnamese grade (e.g. 8.5)"
                  value={converterVnInput}
                  onChange={(e) => {
                    setConverterVnInput(e.target.value);
                    if (e.target.value) setConverterGermanInput('');
                  }}
                  className={`w-full text-xs font-mono px-3 py-2 rounded-xl border outline-none transition-all ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-700 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30' 
                      : 'bg-white border-slate-200 text-slate-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30'
                  }`}
                  id="converter-vn-input"
                />
              </div>

              {(converterGermanInput || converterVnInput) && (
                <button
                  onClick={resetConverter}
                  title="Reset converter"
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    darkMode 
                      ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' 
                      : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Local Search input */}
          <div className="lg:col-span-4 relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by achievement % or grade..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className={`w-full text-xs pl-8.5 pr-3 py-2 rounded-xl border outline-none transition-all ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-orange-500' 
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-orange-500'
              }`}
              id="filter-grade-table-input"
            />
          </div>
        </div>

        {/* Quick Result Popup Banner */}
        {conversionResult && conversionResult.match && (
          <div className={`mt-3.5 p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn ${
            conversionResult.match.category === 'nicht_ausreichend'
              ? darkMode ? 'bg-rose-950/20 border-rose-900/40 text-rose-300' : 'bg-rose-50 border-rose-200 text-rose-800'
              : darkMode ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-semibold">Lookup Result: </span>
                <span className="font-bold font-mono text-sm mx-1">
                  German: {conversionResult.match.germanGrade}
                </span>
                <span className="mx-1">⇔</span>
                <span className="font-bold font-mono text-sm mx-1">
                  Vietnamese: {conversionResult.match.vietnameseGrade}
                </span>
                <span className="mx-1.5 opacity-60">|</span>
                <span>Achievement: <strong>{conversionResult.match.achievement}</strong></span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border ${
                CATEGORY_STYLES[conversionResult.match.category][darkMode ? 'badgeDark' : 'badgeLight']
              }`}>
                {conversionResult.match.classificationDe} · {conversionResult.match.classificationEn}
              </span>
            </div>
          </div>
        )}

        {/* Classification Filter Pills */}
        <div className="flex items-center gap-1.5 mt-3.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all whitespace-nowrap cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-orange-500 text-white shadow-xs'
                : darkMode 
                  ? 'bg-slate-800/70 text-slate-300 hover:bg-slate-800' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Grades ({GRADE_CONVERSION_DATA.length})
          </button>

          {Object.entries(CATEGORY_STYLES).map(([key, style]) => {
            const count = GRADE_CONVERSION_DATA.filter(i => i.category === key).length;
            const isSelected = filterCategory === key;
            return (
              <button
                key={key}
                onClick={() => setFilterCategory(key)}
                className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer border ${
                  isSelected
                    ? 'bg-orange-500 text-white border-orange-500'
                    : darkMode 
                      ? `${style.badgeDark} hover:opacity-80` 
                      : `${style.badgeLight} hover:opacity-80`
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                <span>{style.labelDe} · {style.labelEn} ({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Side-by-side Official Conversion Table */}
      <div className="p-4 sm:p-6">
        {filteredRows.length === 0 ? (
          <div className="p-8 text-center">
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No grading scale entries found matching &ldquo;{effectiveQuery}&rdquo;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Table Part 1 (Left Half: 1.0 - 2.7) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Part 1: Grades 1.0 – 2.7 (Excellent & Good)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/10 text-orange-500">
                  {leftColumnRows.length} grade levels
                </span>
              </div>

              <div className={`rounded-xl border overflow-hidden ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className={`border-b ${
                      darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      <th className="py-2.5 px-3 font-bold font-mono">Achievement (%)</th>
                      <th className="py-2.5 px-3 font-bold font-mono text-center">German Scale</th>
                      <th className="py-2.5 px-3 font-bold font-mono text-center">Vietnamese Scale</th>
                      <th className="py-2.5 px-3 font-bold font-mono hidden sm:table-cell text-right">Classification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
                    {leftColumnRows.map((row) => {
                      const isHighlighted = conversionResult?.match?.id === row.id;
                      return (
                        <tr 
                          key={row.id}
                          className={`transition-colors ${
                            isHighlighted
                              ? darkMode ? 'bg-orange-500/20 text-white font-bold' : 'bg-orange-100/70 text-slate-900 font-bold'
                              : darkMode ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50'
                          }`}
                        >
                          <td className="py-2 px-3 font-mono font-medium whitespace-nowrap">
                            {row.achievement}
                          </td>
                          <td className="py-2 px-3 font-mono font-extrabold text-center text-sm text-orange-500">
                            {row.germanGrade}
                          </td>
                          <td className="py-2 px-3 font-mono font-bold text-center">
                            {row.vietnameseGrade}
                          </td>
                          <td className="py-2 px-3 text-right hidden sm:table-cell">
                            <span className={`px-2 py-0.5 text-[9.5px] font-mono font-bold rounded border ${
                              CATEGORY_STYLES[row.category][darkMode ? 'badgeDark' : 'badgeLight']
                            }`}>
                              {row.classificationDe} ({row.classificationEn})
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Part 2 (Right Half: 2.8 - 5.0) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Part 2: Grades 2.8 – 5.0 (Satisfactory, Pass & Fail)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/10 text-orange-500">
                  {rightColumnRows.length} grade levels
                </span>
              </div>

              <div className={`rounded-xl border overflow-hidden ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className={`border-b ${
                      darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      <th className="py-2.5 px-3 font-bold font-mono">Achievement (%)</th>
                      <th className="py-2.5 px-3 font-bold font-mono text-center">German Scale</th>
                      <th className="py-2.5 px-3 font-bold font-mono text-center">Vietnamese Scale</th>
                      <th className="py-2.5 px-3 font-bold font-mono hidden sm:table-cell text-right">Classification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
                    {rightColumnRows.map((row) => {
                      const isHighlighted = conversionResult?.match?.id === row.id;
                      const isFailed = row.category === 'nicht_ausreichend';
                      return (
                        <tr 
                          key={row.id}
                          className={`transition-colors ${
                            isHighlighted
                              ? darkMode ? 'bg-orange-500/20 text-white font-bold' : 'bg-orange-100/70 text-slate-900 font-bold'
                              : isFailed
                                ? darkMode ? 'bg-rose-950/15 text-rose-300' : 'bg-rose-50/50 text-rose-800'
                                : darkMode ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50'
                          }`}
                        >
                          <td className="py-2 px-3 font-mono font-medium whitespace-nowrap">
                            {row.achievement}
                          </td>
                          <td className={`py-2 px-3 font-mono font-extrabold text-center text-sm ${
                            isFailed ? 'text-rose-500' : 'text-orange-500'
                          }`}>
                            {row.germanGrade}
                          </td>
                          <td className={`py-2 px-3 font-mono font-bold text-center ${
                            isFailed ? 'text-rose-500' : ''
                          }`}>
                            {row.vietnameseGrade}
                          </td>
                          <td className="py-2 px-3 text-right hidden sm:table-cell">
                            <span className={`px-2 py-0.5 text-[9.5px] font-mono font-bold rounded border ${
                              CATEGORY_STYLES[row.category][darkMode ? 'badgeDark' : 'badgeLight']
                            }`}>
                              {row.classificationDe} ({row.classificationEn})
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 4. Footnote & Regulatory Remarks */}
        <div className={`mt-5 p-4 rounded-xl border text-xs leading-relaxed ${
          darkMode 
            ? 'bg-slate-950/30 border-slate-800/70 text-slate-400' 
            : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <div className="flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Key Examination Regulations (VGU – HAW Hamburg Code):
              </p>
              <ul className="list-disc pl-4 space-y-1 text-[11.5px]">
                <li>
                  <strong>Passing Grade (Pass):</strong> Students must achieve a grade of <strong>&le; 4.0 on the German scale</strong> (equivalent to <strong>&ge; 5.0 on the Vietnamese scale</strong>, and at least 50% academic achievement) to successfully complete a course.
                </li>
                <li>
                  <strong>Failing Grade (Fail):</strong> A grade of <strong>5.0 (German)</strong> / <strong>4.0 (Vietnamese)</strong> corresponds to academic performance below 50%. Students are required to register for an official retake examination or course repetition according to Faculty regulations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
