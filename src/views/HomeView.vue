<script setup lang="ts">
import { ref , computed} from 'vue'
import { RouterLink } from 'vue-router'
import { allQuestions } from '@/data/questions'

// حساب العدد الإجمالي للأسئلة بشكل ديناميكي
const totalQuestionsCount = computed(() => allQuestions.length)
// حالة افتراضية لتقدم المستخدم (يمكن ربطها لاحقاً بـ Pinia)
const userProgress = ref({
  completedQuestions: 37,
  totalQuestions: 100,
  hasStarted: true
})
</script>

<template>
  <div class="space-y-12 pb-16">
    

    <!-- 1. HERO SECTION -->
<section class="relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden border-b border-slate-200">
  
  <!-- Background Image covering the entire section -->
  <img 
    src="/public/hero-bild.jfif" 
    alt="Svensk väg med bil" 
    class="absolute inset-0 w-full h-full object-cover object-right sm:object-center z-0"
  />

  <!-- Subtle gradient mask to keep text crisp on left side -->
  <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-10 pointer-events-none"></div>

  <!-- Content Layer -->
  <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
    <div class="max-w-xl text-left space-y-6">
      
      <!-- Badge -->
      <div class="inline-flex items-center gap-1.5 bg-amber-100/90 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold border border-amber-300/80 shadow-sm">
        <span class="text-xs">⚡</span>
        <span>Gratis & Uppdaterat</span>
      </div>

      <!-- Title -->
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b2545] leading-[1.15] tracking-tight">
        Klarar du teoriprovet<br />på första försöket?
      </h1>

      <!-- Description -->
     <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b2545] leading-[1.15] tracking-tight">
  <span class="text-4xl sm:text-5xl font-black text-[#0b2545]">
    {{ totalQuestionsCount }} +
  </span>
  <p class="text-slate-600 font-semibold text-sm sm:text-base">
    Unika teorifrågor och vägmärken baserade på Trafikverket
  </p>
</div>

      <!-- CTA Button -->
      <div class="pt-2">
        <RouterLink 
          to="/quiz" 
          class="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-bold text-base px-8 py-3.5 rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95"
        >
          <span>Börja öva direkt</span>
          <span class="text-lg">→</span>
        </RouterLink>
      </div>

      <!-- Feature Bullets (3 Icons horizontally at the bottom left) -->
      <div class="flex flex-wrap items-center gap-6 pt-6 text-xs sm:text-sm font-bold text-[#0b2545]">
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-md bg-blue-100/80 border border-blue-200 text-blue-900 flex items-center justify-center text-xs">📋</span>
          <span>Hundratals frågor</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-md bg-blue-100/80 border border-blue-200 text-blue-900 flex items-center justify-center text-xs">🚫</span>
          <span>Helt gratis</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-md bg-blue-100/80 border border-blue-200 text-blue-900 flex items-center justify-center text-xs">🧭</span>
          <span>Uppdaterat innehåll</span>
        </div>
      </div>

    </div>
  </div>
</section>

    <!-- 2. QUICK CATEGORIES SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div>
        <h2 class="text-2xl font-bold text-[#0b2545]">Börja öva direkt</h2>
        <p class="text-slate-500 text-sm">Välj ett område och starta din träning. Det tar bara några minuter!</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Card 1: Vägmärken -->
        <RouterLink to="/quiz" class="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-center flex flex-col items-center gap-3">
          <div class="w-12 h-12 flex items-center justify-center text-3xl">⚠️</div>
          <h3 class="font-bold text-slate-800">Vägmärken</h3>
          <span class="text-xs text-slate-500">10 frågor</span>
          <span class="text-slate-400 text-sm mt-1">→</span>
        </RouterLink>

        <!-- Card 2: Trafikregler -->
        <RouterLink to="/quiz" class="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-center flex flex-col items-center gap-3">
          <div class="w-12 h-12 flex items-center justify-center text-3xl">🚘</div>
          <h3 class="font-bold text-slate-800">Trafikregler</h3>
          <span class="text-xs text-slate-500">10 frågor</span>
          <span class="text-slate-400 text-sm mt-1">→</span>
        </RouterLink>

        <!-- Card 3: Miljö & Säkerhet -->
        <RouterLink to="/quiz" class="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-center flex flex-col items-center gap-3">
          <div class="w-12 h-12 flex items-center justify-center text-3xl">🍃</div>
          <h3 class="font-bold text-slate-800">Miljö & Säkerhet</h3>
          <span class="text-xs text-slate-500">10 frågor</span>
          <span class="text-slate-400 text-sm mt-1">→</span>
        </RouterLink>

        <!-- Card 4: Bilens delar -->
        <RouterLink to="/quiz" class="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-center flex flex-col items-center gap-3">
          <div class="w-12 h-12 flex items-center justify-center text-3xl">🔧</div>
          <h3 class="font-bold text-slate-800">Bilens delar</h3>
          <span class="text-xs text-slate-500">10 frågor</span>
          <span class="text-slate-400 text-sm mt-1">→</span>
        </RouterLink>
      </div>
    </section>

    <!-- 3. PROGRESS TRACKER & SNABBTEST SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Fortsätt där du slutade (Progress Card) -->
        <div v-if="userProgress.hasStarted" class="lg:col-span-2 bg-blue-50/60 border border-blue-200 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div class="space-y-3 flex-1">
            <div class="flex items-center gap-2">
              <span class="text-xl">🎯</span>
              <h3 class="font-bold text-[#0b2545]">Fortsätt där du slutade</h3>
            </div>
            
            <!-- Progress Bar -->
            <div class="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div 
                class="bg-blue-600 h-full rounded-full transition-all duration-500"
                :style="{ width: `${(userProgress.completedQuestions / userProgress.totalQuestions) * 100}%` }"
              ></div>
            </div>

            <p class="text-xs text-slate-600 font-medium">
              Du har klarat <strong class="text-slate-900">{{ userProgress.completedQuestions }} av {{ userProgress.totalQuestions }} frågor</strong>
            </p>
          </div>

          <RouterLink 
            to="/quiz" 
            class="bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap text-center transition-colors shadow-sm"
          >
            Fortsätt öva →
          </RouterLink>
        </div>

        <!-- Snabbtest Card -->
        <div class="bg-white border border-slate-200 p-6 rounded-2xl flex items-center justify-between hover:border-amber-400 transition-colors cursor-pointer">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xl">⏱️</span>
              <h3 class="font-bold text-slate-800">Snabbtest</h3>
            </div>
            <p class="text-xs text-slate-500">10 slumpmässiga frågor</p>
            <p class="text-[11px] text-slate-400">Perfekt för en snabb genomgång.</p>
          </div>
          <span class="text-slate-400 font-bold">→</span>
        </div>

      </div>
    </section>

    <!-- 4. INFO BANNER SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-[#0b2545] rounded-3xl p-6 sm:p-8 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
        
        <div class="lg:col-span-6 space-y-4">
          <h2 class="text-2xl font-bold">Allt du behöver inför teoriprovet</h2>
          <p class="text-slate-300 text-sm">Vanliga frågor, regler, tips och mycket mer.</p>
          <RouterLink 
            to="/teoriprov" 
            class="inline-block border border-white/40 hover:bg-white/10 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors"
          >
            Till teoriprov →
          </RouterLink>
        </div>

        <div class="lg:col-span-6 grid grid-cols-3 gap-4 text-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
          <div>
            <div class="text-2xl font-bold text-amber-400">70 frågor</div>
            <div class="text-[11px] text-slate-300 mt-1">på provet</div>
          </div>
          <div> 
            <div class="text-2xl font-bold text-amber-400">50 minuter</div>
            <div class="text-[11px] text-slate-300 mt-1">tid</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-amber-400">52 poäng</div>
            <div class="text-[11px] text-slate-300 mt-1">för godkänt</div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>