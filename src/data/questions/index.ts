import type { Question } from '@/types/question'
import { vagmarkenQuestions } from './vagmarken'
import {parkeringTillstandQuestions} from './trafikregler_parkering'
// نقوم باستيراد بقية الملفات هنا عند إنشائها (trafikregler, miljo, etc.)

// 1. تجميع بنك الأسئلة الشامل
export const allQuestions: Question[] = [
  ...vagmarkenQuestions,
  ...parkeringTillstandQuestions
  // ...miljoQuestions
]

// 2. دالة خلط العناصر عشوائياً (Fisher-Yates Shuffle)
export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}

// 3. جلب أسئلة قسم معين (عند الاختيار من صفحة Kategorier)
export function getQuestionsByCategory(categoryId: string, limit = 15): Question[] {
  const filtered = allQuestions.filter(q => q.categoryId === categoryId)
  return shuffleArray(filtered).slice(0, limit)
}

// 4. توليد اختبار شامل بنسب متوازنة (Teoriprov - 65 سؤال)
export function generateFullTeoriprov(): Question[] {
  const vagmarken = shuffleArray(vagmarkenQuestions).slice(0, 20)
  // const trafikregler = shuffleArray(trafikreglerQuestions).slice(0, 25);
  // const miljo = shuffleArray(miljoQuestions).slice(0, 10);
  
  const combined = [
    ...vagmarken,
    ...parkeringTillstandQuestions
    // ...miljoQuestions
  ]

  return shuffleArray(combined)
}

// 5. توليد اختبار سريع (Snabbtest - 10 أسئلة عشوائية)
export function generateQuickTest(): Question[] {
  return shuffleArray(allQuestions).slice(0, 10)
}