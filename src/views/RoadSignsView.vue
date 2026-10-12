<script setup lang="ts">
import { ref, computed } from 'vue'
import { roadSignsData, type RoadSign } from '@/data/roadSigns'

// State för aktivt filter och sökning
const activeCategory = ref<string>('alla')
const searchQuery = ref<string>('')

// State för detalj-modal (när man klickar på ett vägmärke)
const selectedSign = ref<RoadSign | null>(null)

// Filtrering baserat på kategori och söktext
const filteredSigns = computed(() => {
  return roadSignsData.filter(sign => {
    const matchesCategory = activeCategory.value === 'alla' || sign.category === activeCategory.value
    const matchesSearch = sign.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          sign.code.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

// Funktion för att öppna modal
const openModal = (sign: RoadSign) => {
  selectedSign.value = sign
}

// Funktion för att stänga modal
const closeModal = () => {
  selectedSign.value = null
}
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- 1. BREADCRUMB & HEADER -->
      <div class="space-y-2">
        <div class="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <RouterLink to="/kategorier" class="hover:text-[#0b2545] transition-colors">Kategorier</RouterLink>
          <span>></span>
          <span class="text-[#0b2545]">Vägmärken</span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#0b2545]">
          Vägmärken i Sverige
        </h1>
        <p class="text-slate-600 text-base max-w-2xl">
          Lär dig vad alla vägmärken betyder, och se exempel på hur de ser ut i verkligheten.
        </p>
      </div>

      <!-- 2. SEARCH & FILTER TABS -->
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        
        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-2 w-full md:w-auto">
          <button 
            @click="activeCategory = 'alla'"
            :class="activeCategory === 'alla' ? 'bg-[#0b2545] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all"
          >
            Alla
          </button>
          <button 
            @click="activeCategory = 'varning'"
            :class="activeCategory === 'varning' ? 'bg-[#0b2545] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all"
          >
            Varning
          </button>
          <button 
            @click="activeCategory = 'vaejningsplikt'"
            :class="activeCategory === 'vaejningsplikt' ? 'bg-[#0b2545] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all"
          >
            Väjningsplikt
          </button>
          <button 
            @click="activeCategory = 'forbud'"
            :class="activeCategory === 'forbud' ? 'bg-[#0b2545] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all"
          >
            Förbud
          </button>
          <button 
            @click="activeCategory = 'pabud'"
            :class="activeCategory === 'pabud' ? 'bg-[#0b2545] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all"
          >
            Påbud
          </button>
          <button 
            @click="activeCategory = 'anvisning'"
            :class="activeCategory === 'anvisning' ? 'bg-[#0b2545] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all"
          >
            Anvisning
          </button>
        </div>

        <!-- Search Bar -->
        <div class="w-full md:w-72 relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">🔍</span>
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Sök vägmärke..." 
            class="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2545]/20 focus:border-[#0b2545] transition-all"
          />
        </div>
      </div>

      <!-- 3. ROAD SIGNS GRID -->
      <div v-if="filteredSigns.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="sign in filteredSigns"
          :key="sign.id"
          @click="openModal(sign)"
          class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 relative"
        >
          <!-- Code badge -->
          <span class="absolute top-4 right-4 bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
            {{ sign.code }}
          </span>

          <!-- Sign Image -->
<div class="w-28 h-28 flex items-center justify-center my-4 transition-transform group-hover:scale-105">
  <img 
    :src="sign.image" 
    :alt="sign.title" 
    class="w-full h-full object-contain drop-shadow-sm" 
    @error="($event.target as HTMLElement).style.display = 'none'"
  />
</div>

          <!-- Title -->
          <h2 class="text-base sm:text-lg font-bold text-[#0b2545] mt-auto">
            {{ sign.title }}
          </h2>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white rounded-2xl p-12 text-center border border-slate-200">
        <p class="text-slate-500 text-base">Inga vägmärken hittades som matchar din sökning.</p>
      </div>

      <!-- 4. BRA ATT VETA BANNER -->
      <div class="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
        <div class="w-10 h-10 rounded-full bg-white border border-blue-200 flex items-center justify-center text-blue-900 font-bold shrink-0 shadow-xs">
          i
        </div>
        <div>
          <h3 class="text-base font-bold text-[#0b2545]">Bra att veta</h3>
          <p class="text-slate-600 text-sm mt-1">
            Vägmärken är en viktig del av trafiksäkerheten och måste följas, både i stad och på landsbygd. Lär dig särdrag och koder för att klara teoriprovet galant.
          </p>
        </div>
      </div>

    </div>

    <!-- 5. DETAIL MODAL -->
    <div v-if="selectedSign" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-fade-in">
      <div class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-6 border border-slate-100">
        
        <!-- Close button -->
        <button 
          @click="closeModal" 
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-colors"
        >
          ✕
        </button>

        <!-- Modal Header -->
        <div class="flex items-center justify-between pr-8">
          <span class="bg-blue-50 text-blue-800 text-xs font-extrabold px-2.5 py-1 rounded-md">
            {{ selectedSign.code }}
          </span>
          <span class="text-xs uppercase tracking-wider font-semibold text-slate-400">
            {{ selectedSign.category }}
          </span>
        </div>

        <!-- Modal Image -->
        <div class="w-40 h-40 mx-auto flex items-center justify-center bg-slate-50 rounded-2xl p-4 border border-slate-100">
          <img :src="selectedSign.image" :alt="selectedSign.title" class="max-h-full max-w-full object-contain drop-shadow-md" />
        </div>

        <!-- Description -->
        <div class="space-y-3 text-left">
          <h2 class="text-xl font-bold text-[#0b2545]">
            {{ selectedSign.title }}
          </h2>
          <p class="text-slate-600 text-sm leading-relaxed">
            {{ selectedSign.description }}
          </p>

          <!-- Rule Tips Box -->
          <div v-if="selectedSign.ruleTips" class="bg-amber-50 border border-amber-200/60 rounded-xl p-3.5 text-xs text-amber-900 font-medium">
            <span class="font-bold">💡 Teoriprovstips:</span> {{ selectedSign.ruleTips }}
          </div>
        </div>

        <!-- Modal Footer -->
        <button 
          @click="closeModal"
          class="w-full bg-[#0b2545] hover:bg-[#0b2545]/90 text-white font-bold py-3 rounded-xl transition-all shadow-sm"
        >
          Stäng
        </button>

      </div>
    </div>

  </div>
</template>