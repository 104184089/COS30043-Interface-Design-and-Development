<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppNavBar from './components/AppNavBar.vue'
</script>
  
<template>
  <div class="app">
    <AppHeader></AppHeader>
    <AppNavBar></AppNavBar>
  </div>
</template>

<style scoped>
/* Styles here */
</style>
