<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { roadSignsData, type RoadSign } from '@/data/roadSigns'

const route = useRoute()
const router = useRouter()

// Hämta kategori-koden från URL (t.ex. 'A', 'B', etc.)
const categoryCode = computed(() => route.params.categoryCode as string)

// Hitta namnet på kategorin baserat på koden
const currentCategoryName = computed(() => {
  const found = roadSignsData.find(s => s.categoryCode === categoryCode.value)
  return found ? found.categoryName : `Kategori ${categoryCode.value}`
})

// Filtrera ut alla vägmärken som tillhör denna kategori
const categorySigns = computed(() => {
  return roadSignsData.filter(sign => sign.categoryCode === categoryCode.value)
})

// State för detalj-modal
const selectedSign = ref<RoadSign | null>(null)

const openModal = (sign: RoadSign) => {
  selectedSign.value = sign
}

const closeModal = () => {
  selectedSign.value = null
}
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- BREADCRUMB & HEADER -->
      <div class="space-y-2">
        <div class="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <RouterLink to="/vagmarken" class="hover:text-[#0b2545] transition-colors">Vägmärken</RouterLink>
          <span>></span>
          <span class="text-[#0b2545]">{{ categoryCode }}</span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#0b2545]">
          {{ currentCategoryName }}
        </h1>
        <p class="text-slate-600 text-base">
          Här visas alla vägmärken som ingår i denna kategori. Klicka på ett märke för att se detaljer.
        </p>
      </div>

      <!-- GRID MED STÖRRE BILDER -->
      <div v-if="categorySigns.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="sign in categorySigns"
          :key="sign.id"
          @click="openModal(sign)"
          class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 relative"
        >
          <!-- Code badge -->
          <span class="absolute top-4 right-4 bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
            {{ sign.code }}
          </span>

          <!-- Större bild för varje vägmärke -->
          <div class="w-36 h-36 flex items-center justify-center my-6 transition-transform group-hover:scale-105">
            <img :src="sign.image" :alt="sign.title" class="max-h-full max-w-full object-contain drop-shadow-md" />
          </div>

          <!-- Title -->
          <h2 class="text-lg font-bold text-[#0b2545] mt-auto">
            {{ sign.title }}
          </h2>
        </div>
      </div>

      <!-- Om inga märken finns inlagda för denna kategori än -->
      <div v-else class="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
        <p class="text-slate-500 text-base">Fler vägmärken för denna kategori läggs till inom kort.</p>
        <button 
          @click="router.push('/vagmarken')"
          class="inline-block bg-[#0b2545] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#0b2545]/90 transition-all"
        >
          Tillbaka till alla vägmärken
        </button>
      </div>

    </div>

    <!-- DETAIL MODAL -->
    <div v-if="selectedSign" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-6 border border-slate-100">
        
        <button 
          @click="closeModal" 
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-colors"
        >
          ✕
        </button>

        <div class="flex items-center justify-between pr-8">
          <span class="bg-blue-50 text-blue-800 text-xs font-extrabold px-2.5 py-1 rounded-md">
            {{ selectedSign.code }}
          </span>
          <span class="text-xs uppercase tracking-wider font-semibold text-slate-400">
            {{ selectedSign.categoryCode }}
          </span>
        </div>

        <div class="w-44 h-44 mx-auto flex items-center justify-center bg-slate-50 rounded-2xl p-4 border border-slate-100">
          <img :src="selectedSign.image" :alt="selectedSign.title" class="max-h-full max-w-full object-contain drop-shadow-lg" />
        </div>

        <div class="space-y-3 text-left">
          <h2 class="text-xl font-bold text-[#0b2545]">
            {{ selectedSign.title }}
          </h2>
          <p class="text-slate-600 text-sm leading-relaxed">
            {{ selectedSign.description }}
          </p>

          <div v-if="selectedSign.ruleTips" class="bg-amber-50 border border-amber-200/60 rounded-xl p-3.5 text-xs text-amber-900 font-medium">
            <span class="font-bold">💡 Teoriprovstips:</span> {{ selectedSign.ruleTips }}
          </div>
        </div>

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