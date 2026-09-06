/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Official VGU German - Vietnamese Grade Conversion Data
 * Based on Article 19 - Evaluation of Examinations
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
    achievement: "96 - 100%",
    germanGrade: "1.0",
    numericGerman: 1.0,
    vietnameseGrade: "9.9 – 10",
    minVn: 9.9,
    maxVn: 10.0,
    classificationDe: "Sehr gut",
    classificationEn: "Excellent",
    classificationVn: "Xuất sắc",
    category: "sehr_gut"
  },
  {
    id: 2,
    achievement: "96 - 100%",
    germanGrade: "1.1",
    numericGerman: 1.1,
    vietnameseGrade: "9.7 – 9.8",
    minVn: 9.7,
    maxVn: 9.8,
    classificationDe: "Sehr gut",
    classificationEn: "Excellent",
    classificationVn: "Xuất sắc",
    category: "sehr_gut"
  },
  {
    id: 3,
    achievement: "96 - 100%",
    germanGrade: "1.2",
    numericGerman: 1.2,
    vietnameseGrade: "9.6",
    minVn: 9.6,
    maxVn: 9.6,
    classificationDe: "Sehr gut",
    classificationEn: "Excellent",
    classificationVn: "Xuất sắc",
    category: "sehr_gut"
  },

  // 91 - 95% (Sehr gut / Excellent)
  {
    id: 4,
    achievement: "91 - 95%",
    germanGrade: "1.3",
    numericGerman: 1.3,
    vietnameseGrade: "9.4 – 9.5",
    minVn: 9.4,
    maxVn: 9.5,
    classificationDe: "Sehr gut",
    classificationEn: "Excellent",
    classificationVn: "Xuất sắc",
    category: "sehr_gut"
  },
  {
    id: 5,
    achievement: "91 - 95%",
    germanGrade: "1.4",
    numericGerman: 1.4,
    vietnameseGrade: "9.2 – 9.3",
    minVn: 9.2,
    maxVn: 9.3,
    classificationDe: "Sehr gut",
    classificationEn: "Excellent",
    classificationVn: "Xuất sắc",
    category: "sehr_gut"
  },
  {
    id: 6,
    achievement: "91 - 95%",
    germanGrade: "1.5",
    numericGerman: 1.5,
    vietnameseGrade: "9.0 – 9.1",
    minVn: 9.0,
    maxVn: 9.1,
    classificationDe: "Sehr gut",
    classificationEn: "Excellent",
    classificationVn: "Xuất sắc",
    category: "sehr_gut"
  },

  // 86 - 90% (Gut / Good)
  {
    id: 7,
    achievement: "86 - 90%",
    germanGrade: "1.6",
    numericGerman: 1.6,
    vietnameseGrade: "8.9",
    minVn: 8.9,
    maxVn: 8.9,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  {
    id: 8,
    achievement: "86 - 90%",
    germanGrade: "1.7",
    numericGerman: 1.7,
    vietnameseGrade: "8.7 – 8.8",
    minVn: 8.7,
    maxVn: 8.8,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  {
    id: 9,
    achievement: "86 - 90%",
    germanGrade: "1.8",
    numericGerman: 1.8,
    vietnameseGrade: "8.5 – 8.6",
    minVn: 8.5,
    maxVn: 8.6,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },

  // 81 - 85% (Gut / Good)
  {
    id: 10,
    achievement: "81 - 85%",
    germanGrade: "1.9",
    numericGerman: 1.9,
    vietnameseGrade: "8.4",
    minVn: 8.4,
    maxVn: 8.4,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  {
    id: 11,
    achievement: "81 - 85%",
    germanGrade: "2.0",
    numericGerman: 2.0,
    vietnameseGrade: "8.2 – 8.3",
    minVn: 8.2,
    maxVn: 8.3,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  {
    id: 12,
    achievement: "81 - 85%",
    germanGrade: "2.1",
    numericGerman: 2.1,
    vietnameseGrade: "8.0 – 8.1",
    minVn: 8.0,
    maxVn: 8.1,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },

  // 76 - 80% (Gut / Good)
  {
    id: 13,
    achievement: "76 - 80%",
    germanGrade: "2.2",
    numericGerman: 2.2,
    vietnameseGrade: "7.8 – 7.9",
    minVn: 7.8,
    maxVn: 7.9,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  {
    id: 14,
    achievement: "76 - 80%",
    germanGrade: "2.3",
    numericGerman: 2.3,
    vietnameseGrade: "7.6 – 7.7",
    minVn: 7.6,
    maxVn: 7.7,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  {
    id: 15,
    achievement: "76 - 80%",
    germanGrade: "2.4",
    numericGerman: 2.4,
    vietnameseGrade: "7.5",
    minVn: 7.5,
    maxVn: 7.5,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },
  {
    id: 16,
    achievement: "76 - 80%",
    germanGrade: "2.5",
    numericGerman: 2.5,
    vietnameseGrade: "7.4",
    minVn: 7.4,
    maxVn: 7.4,
    classificationDe: "Gut",
    classificationEn: "Good",
    classificationVn: "Giỏi",
    category: "gut"
  },

  // 71 - 75% (Befriedigend / Satisfactory)
  {
    id: 17,
    achievement: "71 - 75%",
    germanGrade: "2.6",
    numericGerman: 2.6,
    vietnameseGrade: "7.2 – 7.3",
    minVn: 7.2,
    maxVn: 7.3,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  {
    id: 18,
    achievement: "71 - 75%",
    germanGrade: "2.7",
    numericGerman: 2.7,
    vietnameseGrade: "7.0 – 7.1",
    minVn: 7.0,
    maxVn: 7.1,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  {
    id: 19,
    achievement: "71 - 75%",
    germanGrade: "2.8",
    numericGerman: 2.8,
    vietnameseGrade: "6.9",
    minVn: 6.9,
    maxVn: 6.9,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },

  // 66 - 70% (Befriedigend / Satisfactory)
  {
    id: 20,
    achievement: "66 - 70%",
    germanGrade: "2.9",
    numericGerman: 2.9,
    vietnameseGrade: "6.7 – 6.8",
    minVn: 6.7,
    maxVn: 6.8,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  {
    id: 21,
    achievement: "66 - 70%",
    germanGrade: "3.0",
    numericGerman: 3.0,
    vietnameseGrade: "6.5 – 6.6",
    minVn: 6.5,
    maxVn: 6.6,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  {
    id: 22,
    achievement: "66 - 70%",
    germanGrade: "3.1",
    numericGerman: 3.1,
    vietnameseGrade: "6.4",
    minVn: 6.4,
    maxVn: 6.4,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  {
    id: 23,
    achievement: "66 - 70%",
    germanGrade: "3.2",
    numericGerman: 3.2,
    vietnameseGrade: "6.3",
    minVn: 6.3,
    maxVn: 6.3,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },

  // 61 - 65% (Befriedigend / Satisfactory)
  {
    id: 24,
    achievement: "61 - 65%",
    germanGrade: "3.3",
    numericGerman: 3.3,
    vietnameseGrade: "6.1 – 6.2",
    minVn: 6.1,
    maxVn: 6.2,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  {
    id: 25,
    achievement: "61 - 65%",
    germanGrade: "3.4",
    numericGerman: 3.4,
    vietnameseGrade: "5.9 – 6.0",
    minVn: 5.9,
    maxVn: 6.0,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },
  {
    id: 26,
    achievement: "61 - 65%",
    germanGrade: "3.5",
    numericGerman: 3.5,
    vietnameseGrade: "5.8",
    minVn: 5.8,
    maxVn: 5.8,
    classificationDe: "Befriedigend",
    classificationEn: "Satisfactory",
    classificationVn: "Khá",
    category: "befriedigend"
  },

  // 55 - 60% (Ausreichend / Sufficient - Pass)
  {
    id: 27,
    achievement: "55 - 60%",
    germanGrade: "3.6",
    numericGerman: 3.6,
    vietnameseGrade: "5.6 – 5.7",
    minVn: 5.6,
    maxVn: 5.7,
    classificationDe: "Ausreichend",
    classificationEn: "Sufficient (Pass)",
    classificationVn: "Đạt",
    category: "ausreichend"
  },
  {
    id: 28,
    achievement: "55 - 60%",
    germanGrade: "3.7",
    numericGerman: 3.7,
    vietnameseGrade: "5.4 – 5.5",
    minVn: 5.4,
    maxVn: 5.5,
    classificationDe: "Ausreichend",
    classificationEn: "Sufficient (Pass)",
    classificationVn: "Đạt",
    category: "ausreichend"
  },
  {
    id: 29,
    achievement: "55 - 60%",
    germanGrade: "3.8",
    numericGerman: 3.8,
    vietnameseGrade: "5.3",
    minVn: 5.3,
    maxVn: 5.3,
    classificationDe: "Ausreichend",
    classificationEn: "Sufficient (Pass)",
    classificationVn: "Đạt",
    category: "ausreichend"
  },

  // 50 - 54% (Ausreichend / Sufficient - Pass)
  {
    id: 30,
    achievement: "50 - 54%",
    germanGrade: "3.9",
    numericGerman: 3.9,
    vietnameseGrade: "5.1 – 5.2",
    minVn: 5.1,
    maxVn: 5.2,
    classificationDe: "Ausreichend",
    classificationEn: "Sufficient (Pass)",
    classificationVn: "Đạt",
    category: "ausreichend"
  },
  {
    id: 31,
    achievement: "50 - 54%",
    germanGrade: "4.0",
    numericGerman: 4.0,
    vietnameseGrade: "5.0",
    minVn: 5.0,
    maxVn: 5.0,
    classificationDe: "Ausreichend",
    classificationEn: "Sufficient (Pass)",
    classificationVn: "Đạt",
    category: "ausreichend"
  },

  // < 50% (Nicht ausreichend / Insufficient - Fail)
  {
    id: 32,
    achievement: "< 50%",
    germanGrade: "5.0",
    numericGerman: 5.0,
    vietnameseGrade: "4.0",
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
    labelDe: "Sehr gut (1.0 – 1.5)",
    labelEn: "Excellent",
    badgeLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeDark: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-500"
  },
  gut: {
    labelDe: "Gut (1.6 – 2.5)",
    labelEn: "Good",
    badgeLight: "bg-sky-50 text-sky-700 border-sky-200",
    badgeDark: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    dot: "bg-sky-500"
  },
  befriedigend: {
    labelDe: "Befriedigend (2.6 – 3.5)",
    labelEn: "Satisfactory",
    badgeLight: "bg-amber-50 text-amber-700 border-amber-200",
    badgeDark: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    dot: "bg-amber-500"
  },
  ausreichend: {
    labelDe: "Ausreichend (3.6 – 4.0)",
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
