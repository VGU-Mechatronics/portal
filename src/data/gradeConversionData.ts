/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Official VGU German - Vietnamese Grade Conversion Data
 * Based on Article 19 - Evaluation of Examinations
 * Standard German grading scale with official 11 grade steps (Notenstufen):
 * 1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 5.0
 */

export interface GradeItem {
  id: number;
  achievement: string;
  germanGrade: string;
  numericGerman: number;
  vietnameseGrade: string;
  minVn: number;
  maxVn: number;
  classificationDe: string;
  classificationEn: string;
  classificationVn?: string;
  category: 'sehr_gut' | 'gut' | 'befriedigend' | 'ausreichend' | 'nicht_ausreichend';
}

export const GRADE_CONVERSION_DATA: GradeItem[] = [
  // 96 - 100% (Sehr gut / Excellent)
  {
    id: 1,
    achievement: "96 – 100%",
    germanGrade: "1.0",
    numericGerman: 1.0,
    vietnameseGrade: "9.6 – 10",
    minVn: 9.6,
    maxVn: 10.0,
    classificationDe: "Sehr gut",
    classificationEn: "Excellent",
    classificationVn: "Xuất sắc",
    category: "sehr_gut"
  },
  // 91 - 95% (Sehr gut / Excellent)
  {
    id: 2,
    achievement: "91 – 95%",
    germanGrade: "1.3",
    numericGerman: 1.3,
    vietnameseGrade: "9.0 – 9.5",
    minVn: 9.0,
    maxVn: 9.5,
    classificationDe: "Sehr gut",
    classificationEn: "Excellent",
    classificationVn: "Xuất sắc",
    category: "sehr_gut"
  },
  // 86 - 90% (Gut / Good)
  {
    id: 3,
    achievement: "86 – 90%",
    germanGrade: "1.7",
    numericGerman: 1.7,
    vietnameseGrade: "8.5 – 8.9",
    minVn: 8.5,
    maxVn: 8.9,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  // 81 - 85% (Gut / Good)
  {
    id: 4,
    achievement: "81 – 85%",
    germanGrade: "2.0",
    numericGerman: 2.0,
    vietnameseGrade: "8.0 – 8.4",
    minVn: 8.0,
    maxVn: 8.4,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  // 76 - 80% (Gut / Good)
  {
    id: 5,
    achievement: "76 – 80%",
    germanGrade: "2.3",
    numericGerman: 2.3,
    vietnameseGrade: "7.5 – 7.9",
    minVn: 7.5,
    maxVn: 7.9,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  // 71 - 75% (Befriedigend / Satisfactory)
  {
    id: 6,
    achievement: "71 – 75%",
    germanGrade: "2.7",
    numericGerman: 2.7,
    vietnameseGrade: "7.0 – 7.4",
    minVn: 7.0,
    maxVn: 7.4,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  // 66 - 70% (Befriedigend / Satisfactory)
  {
    id: 7,
    achievement: "66 – 70%",
    germanGrade: "3.0",
    numericGerman: 3.0,
    vietnameseGrade: "6.5 – 6.9",
    minVn: 6.5,
    maxVn: 6.9,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  // 61 - 65% (Befriedigend / Satisfactory)
  {
    id: 8,
    achievement: "61 – 65%",
    germanGrade: "3.3",
    numericGerman: 3.3,
    vietnameseGrade: "6.0 – 6.4",
    minVn: 6.0,
    maxVn: 6.4,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  // 55 - 60% (Ausreichend / Sufficient - Pass)
  {
    id: 9,
    achievement: "55 – 60%",
    germanGrade: "3.7",
    numericGerman: 3.7,
    vietnameseGrade: "5.3 – 5.9",
    minVn: 5.3,
    maxVn: 5.9,
    classificationDe: "Ausreichend",
    classificationEn: "Sufficient (Pass)",
    classificationVn: "Đạt",
    category: "ausreichend"
  },
  // 50 - 54% (Ausreichend / Sufficient - Pass)
  {
    id: 10,
    achievement: "50 – 54%",
    germanGrade: "4.0",
    numericGerman: 4.0,
    vietnameseGrade: "5.0 – 5.2",
    minVn: 5.0,
    maxVn: 5.2,
    classificationDe: "Ausreichend",
    classificationEn: "Sufficient (Pass)",
    classificationVn: "Đạt",
    category: "ausreichend"
  },
  // < 50% (Nicht ausreichend / Insufficient - Fail)
  {
    id: 11,
    achievement: "< 50%",
    germanGrade: "5.0",
    numericGerman: 5.0,
    vietnameseGrade: "0.0 – 4.9",
    minVn: 0.0,
    maxVn: 4.9,
    classificationDe: "Nicht ausreichend",
    classificationEn: "Insufficient (Fail)",
    classificationVn: "Không đạt (Trượt)",
    category: "nicht_ausreichend"
  }
];

export const CATEGORY_STYLES = {
  sehr_gut: {
    labelDe: "Sehr gut (1.0, 1.3)",
    labelEn: "Excellent",
    badgeLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeDark: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-500"
  },
  gut: {
    labelDe: "Gut (1.7, 2.0, 2.3)",
    labelEn: "Good",
    badgeLight: "bg-sky-50 text-sky-700 border-sky-200",
    badgeDark: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    dot: "bg-sky-500"
  },
  befriedigend: {
    labelDe: "Befriedigend (2.7, 3.0, 3.3)",
    labelEn: "Satisfactory",
    badgeLight: "bg-amber-50 text-amber-700 border-amber-200",
    badgeDark: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    dot: "bg-amber-500"
  },
  ausreichend: {
    labelDe: "Ausreichend (3.7, 4.0)",
    labelEn: "Sufficient / Pass",
    badgeLight: "bg-orange-50 text-orange-700 border-orange-200",
    badgeDark: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    dot: "bg-orange-500"
  },
  nicht_ausreichend: {
    labelDe: "Nicht ausreichend (5.0)",
    labelEn: "Insufficient / Fail",
    badgeLight: "bg-rose-50 text-rose-700 border-rose-200",
    badgeDark: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    dot: "bg-rose-500"
  }
};
