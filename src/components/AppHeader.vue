<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-[#0b2545] text-white sticky top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo -->
       <!-- Logo -->
<RouterLink to="/" class="flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-white">
  <img 
    src="/logo.png" 
    alt="KörkortKlar Logo" 
    class="w-9 h-9 object-contain rounded-lg"
  />
  <span>KörkortKlar</span>
</RouterLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          <RouterLink to="/" class="hover:text-amber-400 transition-colors">Hem</RouterLink>
          <RouterLink to="/quiz" class="hover:text-amber-400 transition-colors">Öva</RouterLink>
          <RouterLink to="/kategorier" class="hover:text-amber-400 transition-colors">Kategorier</RouterLink>
          <RouterLink to="/vagmarken" class="hover:text-amber-400 transition-colors">Vägmärken</RouterLink>
          <RouterLink to="/teoriprov" class="hover:text-amber-400 transition-colors">Teoriprov</RouterLink>
          <RouterLink to="/resultat" class="hover:text-amber-400 transition-colors">Mina fel</RouterLink>
          <a href="#" class="hover:text-amber-400 transition-colors">Om oss</a>
        </nav>

        <!-- Language Switcher & Mobile Menu Button -->
        <div class="flex items-center gap-4">
          <!-- Language Selector -->
          <div class="relative flex items-center gap-1 bg-[#13325b] px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer border border-slate-700">
            <span>🌐</span>
            <span>SV</span>
            <span class="text-[10px]">▼</span>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden text-slate-300 hover:text-white focus:outline-none"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-[#0e2c52] border-t border-slate-700 px-4 pt-2 pb-4 space-y-2 text-sm">
      <RouterLink @click="isMobileMenuOpen = false" to="/" class="block py-2 hover:text-amber-400">Hem</RouterLink>
      <RouterLink @click="isMobileMenuOpen = false" to="/quiz" class="block py-2 hover:text-amber-400">Öva</RouterLink>
      <RouterLink @click="isMobileMenuOpen = false" to="/kategorier" class="block py-2 hover:text-amber-400">Kategorier</RouterLink>
      <RouterLink @click="isMobileMenuOpen = false" to="/vagmarken" class="block py-2 hover:text-amber-400">Vägmärken</RouterLink>
      <RouterLink @click="isMobileMenuOpen = false" to="/teoriprov" class="block py-2 hover:text-amber-400">Teoriprov</RouterLink>
      <RouterLink @click="isMobileMenuOpen = false" to="/resultat" class="block py-2 hover:text-amber-400">Mina fel</RouterLink>
    </div>
  </header>
</template>