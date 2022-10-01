<template>
  <div>
    <h1>{{ experience?.name }}</h1>
    <img :src="`/images/${experience?.image}`" alt="" />
    <p>{{ experience?.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import sourceData from "@/data.json";

const props = defineProps({
  id: { type: Number, required: true },
  experienceSlug: { type: String, required: true },
});

const destination = computed(() => {
  return sourceData.destinations.find(
    (destinationItem) => destinationItem.id === props.id
  );
});

const experience = computed(() => {
  return destination.value?.experiences.find(
    (experienceItem) => experienceItem.slug === props.experienceSlug
  );
});
</script>

<style scoped></style>
