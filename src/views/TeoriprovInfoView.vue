<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// FAQ State
const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

const startFullTest = () => {
  // Navigera till quiz-sidan med parametern för fullständigt teoriprov
  router.push({ path: '/ova', query: { type: 'full' } })
}

const faqList = [
  {
    q: 'Hur många poäng krävs för att bli godkänd på teoriprovet?',
    a: 'Du behöver få minst 52 poäng av 65 möjliga för att bli godkänd (cirka 80%). Provet innehåller totalt 70 frågor, men 5 av dem är oredovisade testfrågor.'
  },
  {
    q: 'Hur lång tid har jag på mig under teoriprovet?',
    a: 'Du har exakt 50 minuter på dig att besvara alla 70 frågor. Tiden börjar räkna ned först när introduktionsfilmen i provsalen är klar och du startar provet.'
  },
  {
    q: 'Hur länge är ett godkänt teoriprov giltigt?',
    a: 'Från och med den 19 augusti 2026 är ett godkänt teoriprov giltigt i 1 år (12 månader). Inom denna tid måste du genomföra och bli godkänd på körprovet.'
  },
  {
    q: 'Vad behöver jag ta med mig till provsalen hos Trafikverket?',
    a: 'Du måste ta med dig en giltig ID-handling. Båda delarna av Riskutbildningen (Risk 1 och Risk 2) måste också vara genomförda och registrerade innan du gör provet.'
  },
  {
    q: 'Finns det hjälpmedel på plats?',
    a: 'Ja! Vid datorn finns hörlurar om du vill lyssna på frågorna (på svenska), en miniräknare samt en touch-penna för skärmen.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <!-- HERO & START PROV CTA -->
      <div class="bg-gradient-to-br from-[#0b2545] to-[#133c6e] text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
        <span class="inline-block bg-amber-400/20 text-amber-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-amber-400/30 uppercase tracking-wider">
          🚗 Trafikverkets officiella provstruktur
        </span>
        
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto">
          Teoriprov för B-Körkort
        </h1>
        
        <p class="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Testa dina kunskaper under riktiga provförhållanden. Vårt simulerade teoriprov speglar Trafikverkets upplägg med tidspress, slumpade frågor och omedelbart resultat.
        </p>

        <!-- Stora startknappen -->
        <div class="pt-4 flex justify-center">
          <button 
            @click="startFullTest"
            class="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-black text-base sm:text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 cursor-pointer"
          >
            <span>⏱️ Starta skarpt teoriprov (65 frågor)</span>
            <span class="text-xl">→</span>
          </button>
        </div>
      </div>

      <!-- SNABBFAKTA (4-GRID) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs text-center space-y-1">
          <div class="text-3xl">⏱️</div>
          <div class="text-2xl font-black text-[#0b2545]">50 min</div>
          <p class="text-xs text-slate-500 font-semibold">Provtid</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs text-center space-y-1">
          <div class="text-3xl">❓</div>
          <div class="text-2xl font-black text-[#0b2545]">70 frågor</div>
          <p class="text-xs text-slate-500 font-semibold">65 poäng + 5 testfrågor</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs text-center space-y-1">
          <div class="text-3xl">🎯</div>
          <div class="text-2xl font-black text-[#0b2545]">52 poäng</div>
          <p class="text-xs text-slate-500 font-semibold">Krävs för godkänt (80%)</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs text-center space-y-1">
          <div class="text-3xl">📅</div>
          <div class="text-2xl font-black text-[#0b2545]">1 år</div>
          <p class="text-xs text-slate-500 font-semibold">Giltighetstid efter godkänt</p>
        </div>
      </div>

      <!-- VAD INNEHÅLLER PROVET? (5 ÄMNEN) -->
      <div class="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 space-y-8 shadow-xs">
        <div class="space-y-2">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0b2545]">
            Vad innehåller teoriprovet?
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Trafikverket mäter dina kunskaper inom fem huvudsakliga ämnesområden:
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 class="font-extrabold text-[#0b2545] flex items-center gap-2">
              <span>🚗</span> Fordonskännedom & Manövrering
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Hur fordonet fungerar, bromsar, väglagets påverkan på väggrepp samt säkerhetskontroller.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 class="font-extrabold text-[#0b2545] flex items-center gap-2">
              <span>🌱</span> Miljö & Miljöanpassad körning
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Ecodriving, val av transportsätt, katalysator och hur din körstil påverkar bränsleförbrukningen.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 class="font-extrabold text-[#0b2545] flex items-center gap-2">
              <span>🛡️</span> Trafiksäkerhet
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Hastighetsanpassning, avstånd till framförvarande, mörkerkörning och samspel med oskyddade trafikanter.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 class="font-extrabold text-[#0b2545] flex items-center gap-2">
              <span>🛑</span> Trafikregler
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Vägmärken, högerregeln, väjningsplikt, stopplikt, omkörningsregler samt parkeringsbestämmelser.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 sm:col-span-2">
            <h3 class="font-extrabold text-[#0b2545] flex items-center gap-2">
              <span>🧠</span> Personliga förutsättningar
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Hur trötthet, alkohol, droger, grupptryck och impulser påverkar din reaktionsförmåga och säkerhet i trafiken.
            </p>
          </div>
        </div>
      </div>

      <!-- VIKTIGT INFÖR PROVDAGEN -->
      <div class="bg-amber-50/60 rounded-3xl border border-amber-200/80 p-8 sm:p-10 space-y-4">
        <h3 class="text-xl font-extrabold text-amber-950 flex items-center gap-2">
          <span>💡</span> Viktigt att komma ihåg inför provdagen hos Trafikverket
        </h3>
        <ul class="space-y-2 text-sm text-amber-900 list-disc list-inside leading-relaxed">
          <li>Du måste ha genomfört och fått godkänt på <strong>Riskutbildning 1 & 2</strong> innan du gör teoriprovet.</li>
          <li>Kom i god tid (minst 30 minuter innan) eftersom du fotograferas till körkortet innan provstart.</li>
          <li>Du måste kunna visa upp en <strong>giltig och fysisk ID-handling</strong> (t.ex. pass eller nationellt ID-kort).</li>
          <li>Mobiltelefoner ska vara helt avstängda och placerade i anvisat skåp innan provet börjar.</li>
        </ul>
      </div>

      <!-- VANLIGA FRÅGOR & SVAR (FAQ ACCORDION) -->
      <div class="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 space-y-6 shadow-xs">
        <h2 class="text-2xl font-extrabold text-[#0b2545]">
          Vanliga frågor om teoriprovet
        </h2>

        <div class="space-y-3">
          <div 
            v-for="(faq, i) in faqList" 
            :key="i"
            class="border border-slate-200 rounded-2xl overflow-hidden transition-all"
          >
            <button 
              @click="toggleFaq(i)"
              class="w-full p-5 text-left font-bold text-[#0b2545] bg-slate-50/50 hover:bg-slate-100 flex items-center justify-between cursor-pointer transition-all text-sm sm:text-base"
            >
              <span>{{ faq.q }}</span>
              <span class="text-lg">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div 
              v-if="openFaq === i"
              class="p-5 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>