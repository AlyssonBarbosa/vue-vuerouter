<template>
  <div id="nav">
    <RouterLink id="logo" to="/"> Travel App Page </RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import sourceData from "@/data.json";
import { ref } from "vue";

const destinations = ref(sourceData.destinations);
</script>

<style scoped></style>
