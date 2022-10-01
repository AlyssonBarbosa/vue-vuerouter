<script lang="ts" setup>
import sourceData from "@/data.json";
import { RouterLink } from "vue-router";
import { ref } from "vue";

const destinations = ref(sourceData.destinations);
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img
          :src="`/images/${destination.image}`"
          :alt="destination.description"
        />
      </RouterLink>
    </div>
  </div>
</template>
