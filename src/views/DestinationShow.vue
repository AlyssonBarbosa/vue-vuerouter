<script setup lang="ts">
import { onMounted, ref } from "vue";
import type Destination from "@/interfaces/destination";
import ExperienceCard from "@/components/ExperienceCard.vue";
import { RouterLink, RouterView } from "vue-router";
import GoBack from "../components/GoBack.vue";

const props = defineProps({
  id: { type: String, required: true },
  slug: { type: String, required: true },
});

const destination = ref();

async function getDestination() {
  const response = await fetch(
    `https://travel-dummy-api.netlify.app/${props.slug}`
  );

  destination.value = (await response.json()) as Destination;
}

onMounted(() => {
  getDestination();
});
</script>

<template>
  <div>
    <section class="destination" v-if="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" alt="" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences" v-if="destination">
      <h2>Top experiences in {{ destination.name }}</h2>

      <div class="cards">
        <RouterLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </RouterLink>
      </div>
      <RouterView />
    </section>
  </div>
</template>
