<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { roadSignsData, type RoadSign } from '@/data/roadSigns'

const router = useRouter()
const searchQuery = ref<string>('')

// Extrahera unika kategorier baserat på categoryCode och categoryName
const categories = computed(() => {
  const map = new Map()
  roadSignsData.forEach(sign => {
    if (!map.has(sign.categoryCode)) {
      // Hitta en representativ bild för kategorin (t.ex. den första skylten i den kategorin)
      map.set(sign.categoryCode, {
        code: sign.categoryCode,
        name: sign.categoryName,
        image: sign.image,
        count: roadSignsData.filter(s => s.categoryCode === sign.categoryCode).length
      })
    }
  })
  return Array.from(map.values())
})

// Filtrera kategorier baserat på sökning
const filteredCategories = computed(() => {
  return categories.value.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    cat.code.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Gå till den specifika kategorisidan
const goToCategory = (categoryCode: string) => {
  router.push({ name: 'category-signs', params: { categoryCode } })
}
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- HEADER -->
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
          Välj en av Transportstyrelsens 19 officiella kategorier för att lära dig alla vägmärken och dess betydelse.
        </p>
      </div>

      <!-- SÖKFÄLT -->
      <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div class="w-full relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">🔍</span>
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Sök bland kategorier (t.ex. Varningsmärken, A, B)..." 
            class="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2545]/20 focus:border-[#0b2545] transition-all"
          />
        </div>
      </div>

      <!-- RUTNÄT MED DE 19 KATEGORIERNA -->
      <div v-if="filteredCategories.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="cat in filteredCategories"
          :key="cat.code"
          @click="goToCategory(cat.code)"
          class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 relative"
        >
          <!-- Kategori-kod badge -->
          <span class="absolute top-4 right-4 bg-blue-50 text-blue-800 text-[11px] font-extrabold px-2.5 py-1 rounded-md">
            {{ cat.code }}
          </span>

          <!-- Bild för kategorin -->
          <div class="w-28 h-28 flex items-center justify-center my-4 transition-transform group-hover:scale-105">
            <img :src="cat.image" :alt="cat.name" class="max-h-full max-w-full object-contain drop-shadow-sm" />
          </div>

          <!-- Kategori-namn -->
          <h2 class="text-base font-bold text-[#0b2545] mt-auto group-hover:text-blue-600 transition-colors">
            {{ cat.name }}
          </h2>
          <p class="text-xs text-slate-400 mt-1">
            Klicka för att visa märken
          </p>
        </div>
      </div>

      <!-- Om inget hittas -->
      <div v-else class="bg-white rounded-2xl p-12 text-center border border-slate-200">
        <p class="text-slate-500 text-base">Inga kategorier matchar din sökning.</p>
      </div>

      <!-- BRA ATT VETA BANNER -->
      <div class="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
        <div class="w-10 h-10 rounded-full bg-white border border-blue-200 flex items-center justify-center text-blue-900 font-bold shrink-0 shadow-xs">
          i
        </div>
        <div>
          <h3 class="text-base font-bold text-[#0b2545]">Bra att veta</h3>
          <p class="text-slate-600 text-sm mt-1">
            Vägmärkena är indelade i grupper efter deras funktion i trafiken. Att lära sig kategorierna underlättar avsevärt när du ska skriva teoriprovet.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>