<template>
  <div class="login">
    <form class="form" @submit.prevent="login()">
      <h1>login</h1>
      <label for="username"> Username </label>
      <input type="text" name="" v-model="username" id="username" />
      <label for="password"> Password </label>
      <input type="password" v-model="password" name="" id="password" />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref();
const password = ref();

function login() {
  window.user = username.value;
  router.push({ name: "protected" });
}
</script>
