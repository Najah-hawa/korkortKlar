<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import emailjs from '@emailjs/browser'
import type { Question, QuestionOption } from '@/types/question'
import {
  allQuestions,
  getQuestionsByCategory, 
  generateQuickTest, 
  generateFullTeoriprov 
} from '@/data/questions'

const route = useRoute()
const router = useRouter()

// --- STATE ---
const questions = ref<Question[]>([])
const currentIndex = ref(0)
const selectedAnswers = ref<Record<string, QuestionOption['id']>>({})
const selectedOptionId = ref<'A' | 'B' | 'C' | 'D' | null>(null)
const isAnswered = ref(false)
const isSaved = ref(false)
const isSendingReport = ref(false)
const isFullTest = ref(false)

// --- TIMER STATE (50 Minuter) ---
const timeLeft = ref(50 * 60) // 3000 sekunder
let timerInterval: number | null = null
// Formatera sekunder till MM:SS
const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const startTimer = () => {
  timerInterval = window.setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      finishTest() // Tiden är slut - avsluta automatiskt
    }
  }, 1000)
}

// Reaktiv variabel för de blandade alternativen i den aktuella frågan
const currentShuffledOptions = ref<QuestionOption[]>([])

// --- HJÄLPFUNKTION FÖR ATT BLANDA ARRAY ---
function shuffleArray<T>(array: T[]): T[] {
  const shuffled: NonNullable<T>[] = [...array] as NonNullable<T>[]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // Use non-null assertion since array is NonNullable<T>[]
    ;[shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

// --- FUNKTION FÖR ATT LADDA OCH BLANDA FRÅGANS ALTERNATIV ---
const loadQuestionState = () => {
  const q = questions.value[currentIndex.value]
  if (q && q.options) {
    // Vi blandar ordningen på alternativen
    currentShuffledOptions.value = shuffleArray(q.options)
    const savedQuestionIds = JSON.parse(localStorage.getItem('korkortklar_saved_questions') || '[]') as string[]
    isSaved.value = savedQuestionIds.includes(q.id)
  } else {
    currentShuffledOptions.value = []
  }
}

// --- INITIALISERING ---
onMounted(() => {
  const typeParam = route.query.type as string
  const categoryParam = route.query.category as string

  if (typeParam === 'full') {
    isFullTest.value = true
    questions.value = generateFullTeoriprov()
    startTimer()
  } else if (typeParam === 'wrong') {
    const wrongQuestionIds = JSON.parse(localStorage.getItem('korkortklar_wrong_questions') || '[]') as string[]
    questions.value = allQuestions.filter(question => wrongQuestionIds.includes(question.id))
  } else if (typeParam === 'saved') {
    const savedQuestionIds = JSON.parse(localStorage.getItem('korkortklar_saved_questions') || '[]') as string[]
    questions.value = allQuestions.filter(question => savedQuestionIds.includes(question.id))
  } else if (typeParam === 'quick') {
    questions.value = generateQuickTest()
  } else if (categoryParam) {
    questions.value = getQuestionsByCategory(categoryParam)
  } else {
    questions.value = generateQuickTest()
  }

  loadQuestionState()
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})

// --- AVSLUTA PROV & BERÄKNA RESULTAT ---
const finishTest = () => {
  if (timerInterval) clearInterval(timerInterval)

  // Räkna antal rätta svar
  let correctCount = 0
  const answers = questions.value.map(question => ({
    questionId: question.id,
    selectedAnswerId: selectedAnswers.value[question.id] ?? null,
    correctAnswerId: question.correctAnswerId
  }))
  questions.value.forEach(q => {
    if (selectedAnswers.value[q.id] === q.correctAnswerId) {
      correctCount++
    }
  })

  localStorage.setItem('korkortklar_last_test_result', JSON.stringify({
    score: correctCount,
    total: questions.value.length,
    passed: correctCount >= 52,
    answers
  }))

  const wrongQuestionIds = JSON.parse(localStorage.getItem('korkortklar_wrong_questions') || '[]') as string[]
  const wrongAnswers = JSON.parse(localStorage.getItem('korkortklar_wrong_answers') || '{}') as Record<string, QuestionOption['id']>
  answers.forEach(answer => {
    if (answer.selectedAnswerId && answer.selectedAnswerId !== answer.correctAnswerId) {
      if (!wrongQuestionIds.includes(answer.questionId)) wrongQuestionIds.push(answer.questionId)
      wrongAnswers[answer.questionId] = answer.selectedAnswerId
    }
  })
  localStorage.setItem('korkortklar_wrong_questions', JSON.stringify(wrongQuestionIds))
  localStorage.setItem('korkortklar_wrong_answers', JSON.stringify(wrongAnswers))

  // Navigera till resultatsidan med poäng och totalt antal
  router.push({
    path: '/resultat',
    query: {
      score: correctCount.toString(),
      total: questions.value.length.toString(),
      passed: (correctCount >= 52).toString()
    }
  })
}

// --- COMPUTED PROPERTIES ---
const currentQuestion = computed(() => questions.value[currentIndex.value] || null)
const correctAnswerId = computed(() => {
  const question = currentQuestion.value as (Question & { correctAnswerId?: QuestionOption['id'] }) | null
  return question?.correctAnswerId ?? null
})
const isCorrect = computed(() => selectedOptionId.value !== null && selectedOptionId.value === correctAnswerId.value)
const progressPercent = computed(() =>
  questions.value.length
    ? ((currentIndex.value + 1) / questions.value.length) * 100
    : 0
)

// --- METODER ---
const nextQuestion = () => {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
    resetQuestionState()
    loadQuestionState() // Blanda alternativen för nästa fråga!
  } else if (isFullTest.value) {
    finishTest()
  } else {
    router.push('/kategorier')
  }
}

const resetQuestionState = () => {
  selectedOptionId.value = null
  isAnswered.value = false
  isSaved.value = false
}

const selectOption = (optionId: QuestionOption['id']) => {
  if (isAnswered.value) return
  selectedOptionId.value = optionId
  if (currentQuestion.value) {
    selectedAnswers.value[currentQuestion.value.id] = optionId
  }
  isAnswered.value = true
}

const toggleSaveQuestion = () => {
  const question = currentQuestion.value
  if (!question) return

  const savedQuestionIds = JSON.parse(localStorage.getItem('korkortklar_saved_questions') || '[]') as string[]
  if (savedQuestionIds.includes(question.id)) {
    localStorage.setItem(
      'korkortklar_saved_questions',
      JSON.stringify(savedQuestionIds.filter(id => id !== question.id))
    )
    isSaved.value = false
  } else {
    savedQuestionIds.push(question.id)
    localStorage.setItem('korkortklar_saved_questions', JSON.stringify(savedQuestionIds))
    isSaved.value = true
  }
}

// --- EMAILJS FELRAPPORTERING ---
const reportError = async () => {
  if (!currentQuestion.value) return

  const userReason = prompt('Beskriv vad som är fel med frågan:')
  if (!userReason || userReason.trim() === '') return

  isSendingReport.value = true

  try {
    await emailjs.send(
      'service_iqe2vh4', // Din Service ID
      'template_fqng5k7', // Ersätt med ditt Template ID från EmailJS
      {
        question_id: currentQuestion.value.id,
        question_text: currentQuestion.value.questionText.sv,
        user_message: userReason,
        to_email: 'najah.hawa@gmail.com'
      },
      'vS87R5Y-IUy2NOqp0' // Ersätt med din Public Key från EmailJS
    )
    alert('Tack! Din felrapport har skickats till e-postadressen.')
  } catch (error) {
    console.error('Kunde inte skicka felrapport:', error)
    alert('Ett fel uppstod när felrapporten skulle skickas. Försök igen.')
  } finally {
    isSendingReport.value = false
  }
}
</script>

<template>
  <!-- HEADER MED TIMER (Visas bara vid skarpt teoriprov) -->
<div v-if="isFullTest" class="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-6">
  <div class="flex items-center gap-2 font-bold text-[#0b2545]">
    <span>⏱️ Återstående tid:</span>
    <span class="text-xl font-black font-mono text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
      {{ formattedTime }}
    </span>
  </div>

  <button 
    @click="finishTest"
    class="bg-red-50 hover:bg-red-100 text-red-700 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all border border-red-200 cursor-pointer"
  >
    🏁 Avsluta provet
  </button>
</div>
  <div class="min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8">
    <div v-if="currentQuestion" class="max-w-4xl mx-auto space-y-6">
      
      <!-- 1. PROGRESS BAR & STATUS -->
      <div class="flex items-center gap-4">
        
        <span class="text-sm font-bold text-[#0b2545] whitespace-nowrap">
          Fråga {{ currentIndex + 1 }} av {{ questions.length }}
        </span>
        <div class="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
          <div 
            class="bg-sky-500 h-full transition-all duration-300 rounded-full"
            :style="{ width: `${progressPercent}%` }"
          ></div>
        </div>
      </div>

      <!-- MAIN QUIZ CARD -->
      <div class="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-8">
        
        <!-- 2. BILD OCH FRÅGA (Anpassas dynamiskt om bild finns eller inte) -->
        <div 
          class="grid gap-8 items-start"
          :class="currentQuestion.image ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'"
        >
          
          <!-- VÄNSTER: BILD (Visas ENDAST om bilden finns) -->
          <div 
            v-if="currentQuestion.image" 
            class="w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 flex items-center justify-center"
          >
            <img 
              :src="currentQuestion.image" 
              :alt="currentQuestion.questionText.sv" 
              class="w-full h-full object-cover"
            />
          </div>

          <!-- HÖGER / FULL BREDD: FRÅGA & SVARSALTERNATIV -->
          <div class="space-y-6">
            
            <!-- Frågerubrik -->
            <h2 class="text-xl sm:text-2xl font-bold text-[#0b2545]">
              {{ currentQuestion.questionText.sv }}
            </h2>

            <!-- SVARSALTERNATIV (A, B, C, D) -->
           <div class="space-y-3">
  <button
    v-for="(option, index) in currentShuffledOptions"
    :key="option.id"
    @click="selectOption(option.id)"
    :disabled="isAnswered"
    class="w-full p-4 rounded-xl border text-left flex items-center justify-between gap-4 transition-all duration-150 text-sm font-semibold cursor-pointer"
    :class="[
      !isAnswered && 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 text-slate-800',
      isAnswered && option.id === currentQuestion.correctAnswerId && 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-bold',
      isAnswered && selectedOptionId === option.id && option.id !== currentQuestion.correctAnswerId && 'border-red-400 bg-red-50/60 text-red-950',
      isAnswered && selectedOptionId !== option.id && option.id !== currentQuestion.correctAnswerId && 'border-slate-100 opacity-50 text-slate-500'
    ]"
  >
    <div class="flex items-center gap-3">
      <!-- عرض الحرف دائماً بترتيب متسلسل A, B, C, D بحسب موقع السطر -->
      <span 
        class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0"
        :class="[
          isAnswered && option.id === currentQuestion.correctAnswerId 
            ? 'bg-emerald-500 text-white' 
            : isAnswered && selectedOptionId === option.id 
              ? 'bg-red-500 text-white' 
              : 'bg-slate-100 text-slate-700'
        ]"
      >
        {{ ['A', 'B', 'C', 'D'][index] }}
      </span>
      <span>{{ option.text.sv }}</span>
    </div>

    <!-- علامات الصح والخطأ بناءً على ID الخيار الأصلي -->
    <span v-if="isAnswered && option.id === currentQuestion.correctAnswerId" class="text-emerald-600 font-bold">✓</span>
    <span v-else-if="isAnswered && selectedOptionId === option.id" class="text-red-500 font-bold">✕</span>
  </button>
</div>

          </div>
        </div>

        <!-- 3. FEEDBACK BOX (VISAS EFTER SVAR) -->
        <div 
          v-if="isAnswered"
          class="p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4"
          :class="isCorrect ? 'bg-emerald-50/60 border-emerald-200/80' : 'bg-red-50/60 border-red-200/80'"
        >
          <div 
            class="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-bold shrink-0 mt-0.5"
            :class="isCorrect ? 'bg-emerald-500' : 'bg-red-500'"
          >
            {{ isCorrect ? '✓' : '✕' }}
          </div>

          <div class="space-y-1.5 flex-1">
            <h3 class="text-base font-bold" :class="isCorrect ? 'text-emerald-900' : 'text-red-900'">
              {{ isCorrect ? 'Rätt!' : 'Fel!' }}
            </h3>
            <p class="text-sm leading-relaxed" :class="isCorrect ? 'text-emerald-800' : 'text-red-800'">
              {{ currentQuestion.explanation.sv }}
            </p>

            <div v-if="currentQuestion.signRefId" class="pt-2">
              <RouterLink 
                :to="`/vagmarken`" 
                class="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b2545] hover:underline"
              >
                <span>Läs mer om vägmärken</span>
                <span>→</span>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- 4. BOTTOM ACTION BAR -->
        <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
          
          <div class="flex items-center gap-6 text-sm font-semibold">
            <!-- Spara frågan -->
            <button 
              @click="toggleSaveQuestion"
              class="flex items-center gap-2 transition-colors hover:text-[#0b2545] cursor-pointer"
              :class="isSaved ? 'text-amber-600 font-bold' : 'text-slate-500'"
            >
              <span>🔖</span>
              <span>{{ isSaved ? 'Sparad' : 'Spara frågan' }}</span>
            </button>

            <!-- Rapportera fel -->
            <button 
              @click="reportError"
              :disabled="isSendingReport"
              class="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors cursor-pointer disabled:opacity-50"
            >
              <span class="text-red-500">⚠️</span>
              <span>{{ isSendingReport ? 'Skickar...' : 'Rapportera fel' }}</span>
            </button>
          </div>

          <!-- Nästa fråga knapp -->
          <button
            @click="nextQuestion"
            :disabled="!isAnswered"
            class="ml-auto flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-bold text-sm px-6 py-3 rounded-full transition-all shadow-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <span>{{ currentIndex < questions.length - 1 ? 'Nästa fråga' : 'Avsluta prov' }}</span>
            <span>→</span>
          </button>

        </div>

      </div>

    </div>

    <!-- Om inga frågor hittades -->
    <div v-else class="max-w-md mx-auto text-center bg-white p-8 rounded-2xl border border-slate-200 space-y-4 my-20">
      <p class="text-slate-500">Laddar frågor eller inga frågor tillgängliga.</p>
      <button 
        @click="router.push('/kategorier')" 
        class="bg-[#0b2545] text-white px-6 py-2.5 rounded-xl font-bold text-sm cursor-pointer"
      >
        Tillbaka till kategorier
      </button>
    </div>
  </div>
</template>