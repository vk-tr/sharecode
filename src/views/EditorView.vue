<script setup>
import Editor from '@/components/Editor.vue';
import { useRoute } from 'vue-router';
import * as awarenessProtocol from 'y-protocols/awareness.js'

import { RouterHelper } from '../lib/RouterHelper';

const route = useRoute();
const id = route.params.id;
const routerHelper = new RouterHelper();
</script>

<template>
  <div class="layout">
    <header>
      <button @click="routerHelper.goHome()" class="editorViewBtn">Home</button>
      <button @click="routerHelper.createSpace()" class="editorViewBtn">Create new space</button>
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