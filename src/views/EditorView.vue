<script setup>
import Editor from '@/components/Editor.vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

function goHome() {
  router.push({
    path: '/home'
  }).then(_ => location.reload());
}

function randomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function createSpace() {
  router.push({
    name: 'editor',
    params: {
      id: randomString()
    },
  }).then(_ => location.reload());
}
</script>

<template>
  <div class="layout">
    <header>
      Editing {{ id }}
      <button @click="goHome" class="editorViewBtn">Home</button>
      <button @click="createSpace" class="editorViewBtn">Create new space</button>
    </header>
    <Editor :id="id" />
  </div>
</template>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

.layout header {
  margin: 0.5rem;
}

.layout button {
  margin: 0.5rem;
}
</style>