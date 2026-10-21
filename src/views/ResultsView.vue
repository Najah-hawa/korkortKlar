<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { QuestionOption } from '@/types/question'
import { allQuestions } from '@/data/questions'

const router = useRouter()

type StoredTestResult = {
  score: number
  total: number
  passed: boolean
  answers: {
    questionId: string
    selectedAnswerId: QuestionOption['id'] | null
    correctAnswerId: QuestionOption['id']
  }[]
}

// Aktik flik: 'fel' (Felbesvarade) eller 'sparade' (Bokmärkta/Sparade)
const activeTab = ref<'fel' | 'sparade'>('fel')

// Tillstånd för ID:n som sparats i localStorage
const wrongQuestionIds = ref<string[]>([])
const savedQuestionIds = ref<string[]>([])
const wrongAnswers = ref<Record<string, QuestionOption['id']>>({})
const latestTest = ref<StoredTestResult | null>(null)

// Ladda sparade data från LocalStorage vid start
onMounted(() => {
  const wrong = localStorage.getItem('korkortklar_wrong_questions')
  if (wrong) {
    wrongQuestionIds.value = JSON.parse(wrong)
  }

  const saved = localStorage.getItem('korkortklar_saved_questions')
  if (saved) {
    savedQuestionIds.value = JSON.parse(saved)
  }

  const answers = localStorage.getItem('korkortklar_wrong_answers')
  if (answers) {
    wrongAnswers.value = JSON.parse(answers)
  }

  const result = localStorage.getItem('korkortklar_last_test_result')
  if (result) {
    latestTest.value = JSON.parse(result)
  }
})

// Hämta hela fråga-objekt baserat på sparade ID:n
const wrongQuestions = computed(() => 
  allQuestions.filter(q => wrongQuestionIds.value.includes(q.id))
)

const savedQuestions = computed(() => 
  allQuestions.filter(q => savedQuestionIds.value.includes(q.id))
)

const latestTestAnswers = computed(() => {
  if (!latestTest.value) return []

  return latestTest.value.answers.flatMap(answer => {
    const question = allQuestions.find(item => item.id === answer.questionId)
    return question ? [{ ...answer, question }] : []
  })
})

// Navigeringshjälp
const startPracticeWrong = () => {
  router.push({ path: '/quiz', query: { type: 'wrong' } })
}

const startPracticeSaved = () => {
  router.push({ path: '/quiz', query: { type: 'saved' } })
}

const removeSavedQuestion = (questionId: string) => {
  savedQuestionIds.value = savedQuestionIds.value.filter(id => id !== questionId)
  localStorage.setItem('korkortklar_saved_questions', JSON.stringify(savedQuestionIds.value))
}

const startFullTest = () => {
  router.push({ path: '/quiz', query: { type: 'full' } })
}

const goToCategories = () => {
  router.push('/kategorier')
}
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-8">

      <section v-if="latestTest" class="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-xl font-black text-[#0b2545]">Senaste provresultatet</h2>
            <p class="text-sm text-slate-600">
              {{ latestTest.passed ? 'Godkänt' : 'Underkänt' }} · {{ latestTest.score }} av {{ latestTest.total }} rätt
            </p>
          </div>
          <span class="text-2xl font-black text-[#0b2545]">
            {{ latestTest.total ? Math.round((latestTest.score / latestTest.total) * 100) : 0 }}%
          </span>
        </div>

        <details>
          <summary class="cursor-pointer text-sm font-bold text-[#0b2545]">
            Visa dina svar
          </summary>
          <div class="mt-4 space-y-3">
            <article
              v-for="(item, index) in latestTestAnswers"
              :key="item.questionId"
              class="rounded-xl border border-slate-200 p-4 space-y-1"
            >
              <p class="text-sm font-bold text-[#0b2545]">
                {{ index + 1 }}. {{ item.question.questionText.sv }}
              </p>
              <p class="text-sm" :class="item.selectedAnswerId === item.correctAnswerId ? 'text-emerald-700' : 'text-red-700'">
                Ditt svar:
                {{ item.selectedAnswerId
                  ? item.question.options.find(option => option.id === item.selectedAnswerId)?.text.sv
                  : 'Ej besvarad' }}
              </p>
              <p class="text-sm text-emerald-700">
                Rätt svar:
                {{ item.question.options.find(option => option.id === item.correctAnswerId)?.text.sv }}
              </p>
            </article>
          </div>
        </details>
      </section>
      
      <!-- RUBRIK OCH FLIKAR -->
      <div class="space-y-4 text-center sm:text-left">
        <h1 class="text-3xl font-black text-[#0b2545]">
          Repetition & Sparade frågor
        </h1>
        <p class="text-slate-600 text-sm">
          Här samlas alla frågor du har svarat fel på samt de frågor du själv har bokmärkt under dina övningar.
        </p>

        <!-- FLIKVÄLJARE (TABS) -->
        <div class="flex border-b border-slate-200 pt-4 gap-6">
          <button
            @click="activeTab = 'fel'"
            class="pb-3 text-sm font-extrabold transition-all border-b-2 cursor-pointer flex items-center gap-2"
            :class="[
              activeTab === 'fel'
                ? 'border-[#0b2545] text-[#0b2545]'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            ]"
          >
            <span>❌ Felbesvarade frågor</span>
            <span class="bg-slate-100 px-2 py-0.5 rounded-full text-xs font-bold text-slate-600">
              {{ wrongQuestions.length }}
            </span>
          </button>

          <button
            @click="activeTab = 'sparade'"
            class="pb-3 text-sm font-extrabold transition-all border-b-2 cursor-pointer flex items-center gap-2"
            :class="[
              activeTab === 'sparade'
                ? 'border-[#0b2545] text-[#0b2545]'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            ]"
          >
            <span>⭐ Sparade frågor</span>
            <span class="bg-slate-100 px-2 py-0.5 rounded-full text-xs font-bold text-slate-600">
              {{ savedQuestions.length }}
            </span>
          </button>
        </div>
      </div>

      <!-- FLIK 1: FELBESVARADE FRÅGOR -->
      <div v-if="activeTab === 'fel'" class="space-y-6">
        <!-- OM DET FINNS FEL -->
        <div v-if="wrongQuestions.length > 0" class="space-y-4">
          <div class="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span class="text-xs font-extrabold text-slate-600">
              Du har {{ wrongQuestions.length }} felbesvarade frågor att repetera.
            </span>
            <button
              @click="startPracticeWrong"
              class="bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-extrabold text-xs px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              🔄 Öva på alla fel
            </button>
          </div>

          <!-- LISTA ÖVER FRÅGOR -->
          <div class="space-y-3">
            <div 
              v-for="q in wrongQuestions" 
              :key="q.id"
              class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2"
            >
              <div class="text-xs font-bold text-amber-600 uppercase tracking-wider">
                {{ q.categoryId }}
              </div>
              <p class="font-bold text-[#0b2545] text-sm">
                {{ q.questionText.sv }}
              </p>
              <p v-if="wrongAnswers[q.id]" class="text-sm text-red-700">
                Ditt svar:
                {{ q.options.find(option => option.id === wrongAnswers[q.id])?.text.sv }}
              </p>
              <p class="text-sm text-emerald-700">
                Rätt svar:
                {{ q.options.find(option => option.id === q.correctAnswerId)?.text.sv }}
              </p>
            </div>
          </div>
        </div>

        <!-- TOMT LÄGE (INGA FEL ÄN) -->
        <div v-else class="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <div class="text-5xl">🎯</div>
          <div class="space-y-2 max-w-md mx-auto">
            <h2 class="text-2xl font-black text-[#0b2545]">
              Inga felbesvarade frågor än!
            </h2>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              När du gör ett teoriprov eller övar per kategori sparas de frågor du svarar fel på automatiskt här så att du enkelt kan repetera dem.
            </p>
          </div>
          <div class="pt-2 flex flex-wrap justify-center gap-3">
            <button
              @click="startFullTest"
              class="bg-[#0b2545] hover:bg-[#133c6e] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              ⏱️ Starta ett teoriprov (65 frågor)
            </button>
            <button
              @click="goToCategories"
              class="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer"
            >
              📚 Öva per kategori
            </button>
          </div>
        </div>
      </div>

      <!-- FLIK 2: SPARADE FRÅGOR -->
      <div v-if="activeTab === 'sparade'" class="space-y-6">
        <!-- OM DET FINNS SPARADE -->
        <div v-if="savedQuestions.length > 0" class="space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span class="text-xs font-extrabold text-slate-600">
              Dina sparade frågor med svar och förklaring.
            </span>
            <button
              @click="startPracticeSaved"
              class="bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-extrabold text-xs px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              🔄 Öva på sparade frågor
            </button>
          </div>
          <div 
            v-for="q in savedQuestions" 
            :key="q.id"
            class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2"
          >
            <div class="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              ⭐ Sparad fråga
            </div>
            <p class="font-bold text-[#0b2545] text-sm">
              {{ q.questionText.sv }}
            </p>
            <div class="space-y-1">
              <p
                v-for="(option, index) in q.options"
                :key="option.id"
                class="text-sm"
                :class="option.id === q.correctAnswerId ? 'font-bold text-emerald-700' : 'text-slate-600'"
              >
                {{ ['A', 'B', 'C', 'D'][index] }}. {{ option.text.sv }}
                <span v-if="option.id === q.correctAnswerId">✓ Rätt svar</span>
              </p>
            </div>
            <p class="text-sm text-slate-600">{{ q.explanation.sv }}</p>
            <button
              @click="removeSavedQuestion(q.id)"
              class="text-xs font-bold text-red-600 hover:text-red-800 cursor-pointer"
            >
              Ta bort från sparade
            </button>
          </div>
        </div>

        <!-- TOMT LÄGE (INGA SPARADE ÄN) -->
        <div v-else class="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <div class="text-5xl">⭐</div>
          <div class="space-y-2 max-w-md mx-auto">
            <h2 class="text-2xl font-black text-[#0b2545]">
              Inga sparade frågor än!
            </h2>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Du kan bokmärka kluriga frågor under tiden du övar för att spara dem och läsa igenom dem senare.
            </p>
          </div>
          <div class="pt-2">
            <button
              @click="goToCategories"
              class="bg-[#0b2545] hover:bg-[#133c6e] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              📚 BÖRJA ÖVA NU
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>