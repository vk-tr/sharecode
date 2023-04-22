<script setup>
import { RouterHelper } from '../lib/RouterHelper';

const routerHelper = new RouterHelper();
</script>

<template>
  <main>
    <h1>sharecode__</h1>
    <p>Let's start collaborating on some code.</p>
    <button @click="routerHelper.createSpace()">Create space</button>
  </main>
</template>

<style scoped>
  main {
    margin: 5%;
  }
</style>