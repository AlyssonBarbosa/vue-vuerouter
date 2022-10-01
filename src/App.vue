<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheNavigation from "@/components/TheNavigation.vue";
</script>

<template>
  <TheNavigation />

  <div class="container">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.params.id" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
