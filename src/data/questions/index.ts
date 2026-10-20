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
// 5. Generator för skarpt teoriprov (65 frågor med rätt fördelning)
export function generateFullTeoriprov(): Question[] {
  // Dela upp frågorna utifrån kategorier
  const rulesAndSigns = shuffle(
    allQuestions.filter(q => q.categoryId === 'trafikregler' || q.categoryId === 'vagmarken')
  )
  const safety = shuffle(
    allQuestions.filter(q => q.categoryId === 'trafiksakerhet')
  )
  const vehicle = shuffle(
    allQuestions.filter(q => q.categoryId === 'fordonskannedom')
  )
  const environment = shuffle(
    allQuestions.filter(q => q.categoryId === 'miljo')
  )
  const personal = shuffle(
    allQuestions.filter(q => q.categoryId === 'personliga')
  )

  // Välj ut frågor enligt Trafikverkets ungefärliga viktning
  const selected: Question[] = [
    ...rulesAndSigns.slice(0, 25),
    ...safety.slice(0, 20),
    ...vehicle.slice(0, 10),
    ...environment.slice(0, 6),
    ...personal.slice(0, 4)
  ]

  // Om vi har färre än 65 frågor i databasen just nu, 
  // blandar vi helt enkelt ALLA frågor som finns tillgängliga (upp till 65 st)
  if (selected.length < 65) {
    return shuffle(allQuestions).slice(0, 65)
  }

  return shuffle(selected)
}
// 5. توليد اختبار سريع (Snabbtest - 10 أسئلة عشوائية)
export function generateQuickTest(): Question[] {
  return shuffleArray(allQuestions).slice(0, 10)
}

function shuffle<T>(array: T[]): T[] {
  return shuffleArray(array)
}
