<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function randomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function createSpace() {
  router.push({
    name: 'editor',
    params: {
      id: randomString()
    },
  });
}
</script>

<template>
  <main>
    <h1>sharecode__</h1>
    <p>Let's start collaborating on some code.</p>
    <button @click="createSpace">Create space</button>
  </main>
</template>

<style scoped>
  main {
    margin: 5%;
  }
</style>