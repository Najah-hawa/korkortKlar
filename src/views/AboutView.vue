<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const contactEmail = 'najah.hawa@gmail.com'
const copiedEmail = ref(false)

// --- MODAL & FORM STATE ---
const showContactModal = ref(false)
const isSending = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: 'Förfrågan om webbutveckling',
  message: ''
})

const copyToClipboard = () => {
  navigator.clipboard.writeText(contactEmail)
  copiedEmail.value = true
  setTimeout(() => {
    copiedEmail.value = false
  }, 3000)
}

// --- SKICKA E-POST MED EMAILJS ---
const sendContactForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Vänligen fyll i alla fält.')
    return
  }

  isSending.value = true

  try {
    await emailjs.send(
      'service_iqe2vh4', // Din EmailJS Service ID
      'template_fqng5k7', // Ersätt med ditt Template ID från EmailJS
      {
        user_name: form.value.name,
        user_email: form.value.email,
        subject: form.value.subject,
        user_message: form.value.message,
        to_email: contactEmail
      },
      'vS87R5Y-IUy2NOqp0' // Ersätt med din Public Key från EmailJS
    )

    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.')
    
    // Återställ formulär och stäng modal
    form.value = { name: '', email: '', subject: 'Förfrågan om webbutveckling', message: '' }
    showContactModal.value = false
  } catch (error) {
    console.error('Kunde inte skicka meddelandet:', error)
    alert('Ett fel uppstod när meddelandet skulle skickas. Försök igen.')
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <!-- 1. HERO SECTION -->
      <div class="text-center space-y-4 max-w-3xl mx-auto">
        <span class="inline-block bg-blue-100 text-[#0b2545] text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          🇸🇪 Helt gratis körkortsteori
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-[#0b2545] tracking-tight">
          Om KörkortKlar
        </h1>
        <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
          Vi grundade KörkortKlar med ett tydligt mål: att göra vägen till det svenska körkortet tillgänglig, pedagogisk och helt kostnadsfri för alla.
        </p>
      </div>

      <!-- 2. VÅRT UPPDRAG & GRATIS-LÖFTE (GRID) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Kort 1: Gratis -->
        <div class="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-3 relative overflow-hidden">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold">
            🎁
          </div>
          <h3 class="text-xl font-bold text-[#0b2545]">100% Gratis</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Inga dolda avgifter, inga låsta kapitel och inga prenumerationer. Alla frågor, vägmärken och övningsprov är helt öppna för dig.
          </p>
        </div>

        <!-- Kort 2: Officiell standard -->
        <div class="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-blue-100 text-[#0b2545] flex items-center justify-center text-2xl font-bold">
            📜
          </div>
          <h3 class="text-xl font-bold text-[#0b2545]">Anpassat efter provet</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Innehållet bygger på Transportstyrelsens regler och täcker alla 19 officiella vägmärkeskategorier samt provliknande teorifrågor.
          </p>
        </div>

        <!-- Kort 3: Modern teknik -->
        <div class="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
            ⚡
          </div>
          <h3 class="text-xl font-bold text-[#0b2545]">Snabb & Mobilanpassad</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Plugga var du än är. Plattformen är optimerad för mobiler, surfplattor och datorer med omedelbar feedback på varje fråga.
          </p>
        </div>

      </div>

      <!-- 3. OM PLATTFORMEN / VISION -->
      <div class="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-8 sm:p-10 space-y-6">
        <h2 class="text-2xl font-extrabold text-[#0b2545]">
          Varför skapade vi KörkortKlar?
        </h2>
        <div class="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Att ta körkort i Sverige ska inte behöva kosta en förmögenhet innan du ens har satt dig bakom ratten. Många teorisajter låser in sina frågor bakom dyra månadsabonnemang, vilket gör det svårt för studenter och unga förare att öva i sin egen takt.
          </p>
          <p>
            KörkortKlar är utformat för att ge dig ett modernt, intuitivt och ständigt uppdaterat verktyg där du kan lära dig alla vägmärken, testa dina kunskaper i kategorispecifika quiz och förbereda dig inför det riktiga teoriprovet hos Trafikverket.
          </p>
        </div>
      </div>

      <!-- 4. WEBBUTVECKLING & KONTAKTSEKTION -->
      <div class="bg-gradient-to-br from-[#0b2545] to-[#133c6e] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 relative overflow-hidden">
        
        <div class="max-w-2xl space-y-4">
          <span class="inline-block bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-md border border-amber-400/30">
            💻 Webbutveckling & Konsulttjänster
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-white">
            Behöver du en egen webbplats eller hjälp med kod?
          </h2>
          <p class="text-slate-200 text-sm sm:text-base leading-relaxed">
            KörkortKlar är utvecklad från grunden som ett högpresterande projekt med Vue 3, TypeScript och Tailwind CSS. 
            Om du behöver en skräddarsydd hemsida, felsökning (buggfixar), designförbättringar eller en ny webbapplikation – hör gärna av dig!
          </p>
        </div>

        <!-- Tjänster som erbjuds -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-100 pt-2 border-t border-white/10">
          <div class="flex items-center gap-2">
            <span class="text-amber-400">✓</span> Skräddarsydda webbplatser & Single Page Applications
          </div>
          <div class="flex items-center gap-2">
            <span class="text-amber-400">✓</span> Felsökning, prestandaoptimering & buggfixar
          </div>
          <div class="flex items-center gap-2">
            <span class="text-amber-400">✓</span> Responsiv design & mobilanpassning
          </div>
          <div class="flex items-center gap-2">
            <span class="text-amber-400">✓</span> API-integrationer & frontend-arkitektur
          </div>
        </div>

        <!-- Kontaktknappar -->
        <div class="pt-4 flex flex-wrap items-center gap-4">
          <button 
            @click="showContactModal = true"
            class="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-extrabold text-sm px-7 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
          >
            <span>✉️ Kontakta webbutvecklaren</span>
          </button>

          <button 
            @click="copyToClipboard"
            class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3.5 rounded-full transition-all border border-white/20 cursor-pointer"
          >
            <span>{{ copiedEmail ? '✓ E-post kopierad!' : 'Kopiera e-postadress' }}</span>
          </button>
        </div>

      </div>

    </div>

    <!-- 5. KONTAKT MODAL (POP-UP FORMULÄR) -->
    <div 
      v-if="showContactModal" 
      class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all"
    >
      <div class="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative">
        
        <!-- Stäng-knapp -->
        <button 
          @click="showContactModal = false"
          class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 font-bold text-xl cursor-pointer"
        >
          ✕
        </button>

        <div class="space-y-1">
          <h3 class="text-2xl font-extrabold text-[#0b2545]">
            Skicka ett meddelande
          </h3>
          <p class="text-slate-500 text-sm">
            Fyll i formuläret så återkommer vi till dig så snart som möjligt.
          </p>
        </div>

        <form @submit.prevent="sendContactForm" class="space-y-4">
          <!-- Namn -->
          <div class="space-y-1">
            <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Ditt namn</label>
            <input 
              v-model="form.name"
              type="text" 
              required
              placeholder="Anna Andersson"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b2545] focus:ring-1 focus:ring-[#0b2545] outline-none text-sm transition-all"
            />
          </div>

          <!-- E-post -->
          <div class="space-y-1">
            <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Din e-postadress</label>
            <input 
              v-model="form.email"
              type="email" 
              required
              placeholder="anna@example.com"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b2545] focus:ring-1 focus:ring-[#0b2545] outline-none text-sm transition-all"
            />
          </div>

          <!-- Ämne -->
          <div class="space-y-1">
            <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Ämne</label>
            <select 
              v-model="form.subject"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b2545] focus:ring-1 focus:ring-[#0b2545] outline-none text-sm transition-all bg-white"
            >
              <option value="Förfrågan om webbutveckling">Förfrågan om webbutveckling / Ny hemsida</option>
              <option value="Felsökning / Buggfixar">Felsökning & Buggfixar</option>
              <option value="Allmän fråga">Allmän fråga om KörkortKlar</option>
            </select>
          </div>

          <!-- Meddelande -->
          <div class="space-y-1">
            <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Meddelande</label>
            <textarea 
              v-model="form.message"
              rows="4" 
              required
              placeholder="Beskriv vad du behöver hjälp med..."
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b2545] focus:ring-1 focus:ring-[#0b2545] outline-none text-sm transition-all resize-none"
            ></textarea>
          </div>

          <!-- Skicka-knapp -->
          <div class="pt-2 flex items-center justify-end gap-3">
            <button 
              type="button"
              @click="showContactModal = false"
              class="px-5 py-2.5 rounded-full text-slate-600 font-bold text-sm hover:bg-slate-100 transition-all cursor-pointer"
            >
              Avbryt
            </button>
            <button 
              type="submit"
              :disabled="isSending"
              class="bg-amber-400 hover:bg-amber-500 text-[#0b2545] font-extrabold text-sm px-6 py-2.5 rounded-full transition-all shadow-xs cursor-pointer disabled:opacity-50"
            >
              {{ isSending ? 'Skickar...' : 'Skicka meddelande →' }}
            </button>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>