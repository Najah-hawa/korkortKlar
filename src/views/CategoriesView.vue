<script setup lang="ts">
import { ref } from 'vue'

// Struktur för kategorierna
interface Category {
  id: string
  title: string
  questionsCount: number
  icon: string
  iconBg: string
}

const categories = ref<Category[]>([
  { id: 'vagmarken', title: 'Vägmärken', questionsCount: 120, icon: '⚠️', iconBg: 'bg-red-50 text-red-600' },
  { id: 'trafikregler', title: 'Trafikregler', questionsCount: 180, icon: '🚗', iconBg: 'bg-blue-50 text-blue-600' },
  { id: 'miljo-sakerhet', title: 'Miljö & Säkerhet', questionsCount: 90, icon: '🍃', iconBg: 'bg-emerald-50 text-emerald-600' },
  { id: 'bilens-delar', title: 'Bilens delar', questionsCount: 80, icon: '🔧', iconBg: 'bg-slate-100 text-slate-700' },
  { id: 'personliga-risker', title: 'Personliga risker', questionsCount: 60, icon: '👤', iconBg: 'bg-indigo-50 text-indigo-600' },
  { id: 'ovrigt', title: 'Övrigt', questionsCount: 50, icon: '💬', iconBg: 'bg-sky-50 text-sky-600' }
])

// Struktur för populära sidor
const popularPages = ref([
  { title: 'Vägmärken i Sverige', desc: 'Lär dig alla viktiga vägmärken', icon: '⚠️' },
  { title: 'Hur många frågor är det på teoriprovet?', desc: 'Läs allt om provet', icon: '🚗' },
  { title: 'Vanliga misstag på teoriprovet', desc: 'Undvik dessa fel', icon: '🍃' }
])
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <!-- 1. HEADER SECTION -->
      <div class="space-y-2">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#0b2545]">
          Kategorier
        </h1>
        <p class="text-slate-600 text-base sm:text-lg font-normal">
          Välj ett område och öva på frågor inom just det ämnet.
        </p>
      </div>

      <!-- 2. CATEGORIES GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="`/quiz?category=${category.id}`"
          class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group hover:-translate-y-1"
        >
          <!-- Icon -->
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110" :class="category.iconBg">
            {{ category.icon }}
          </div>

          <!-- Title -->
          <h2 class="text-xl font-bold text-[#0b2545] mb-1">
            {{ category.title }}
          </h2>

          <!-- Subtitle / Count -->
          <p class="text-slate-500 text-sm font-medium mb-6">
            {{ category.questionsCount }} frågor
          </p>

          <!-- Arrow Icon -->
          <div class="mt-auto text-slate-400 group-hover:text-[#0b2545] transition-colors">
            <span class="text-xl">→</span>
          </div>
        </RouterLink>
      </div>

      <!-- 3. SNABBTEST BANNER -->
      <div class="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div class="flex items-center gap-5 text-center sm:text-left">
          <div class="w-14 h-14 rounded-full bg-white border border-blue-200/80 flex items-center justify-center text-2xl text-[#0b2545] shadow-xs shrink-0">
            ⏱️
          </div>
          <div>
            <h3 class="text-xl font-bold text-[#0b2545]">
              Snabbtest
            </h3>
            <p class="text-slate-600 text-sm mt-0.5">
              <span class="font-semibold text-slate-700">10 frågor</span> • Slumpmässigt
            </p>
            <p class="text-slate-500 text-xs mt-1">
              Perfekt för en snabb repetition.
            </p>
          </div>
        </div>

        <RouterLink 
          to="/quiz?type=quick" 
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-bold text-base px-7 py-3.5 rounded-full shadow-xs transition-all shrink-0"
        >
          <span>Starta test</span>
          <span>→</span>
        </RouterLink>
      </div>

      <!-- 4. POPULÄRA SIDOR SECTION -->
      <div class="space-y-4 pt-4">
        <h2 class="text-xl font-bold text-[#0b2545]">
          Populära sidor
        </h2>

        <div class="space-y-3">
          <div 
            v-for="(page, index) in popularPages" 
            :key="index"
            class="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all flex items-center justify-between gap-4 cursor-pointer group"
          >
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-xl shrink-0">
                {{ page.icon }}
              </div>
              <div>
                <h3 class="text-base font-bold text-[#0b2545] group-hover:text-blue-600 transition-colors">
                  {{ page.title }}
                </h3>
                <p class="text-xs text-slate-500">
                  {{ page.desc }}
                </p>
              </div>
            </div>
            
            <span class="text-slate-400 group-hover:text-[#0b2545] transition-colors text-lg">›</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>