<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref(window.user);

function logout() {
  window.user = null;
  router.push({ name: "home" });
}
</script>
