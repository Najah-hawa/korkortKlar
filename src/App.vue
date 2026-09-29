<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>