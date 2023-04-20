<script setup>
import { ref, onMounted } from 'vue';

import * as Y from 'yjs';

import { WebrtcProvider } from 'y-webrtc';
import { WebsocketProvider } from 'y-websocket'

import { MonacoBinding } from 'y-monaco';

import * as monaco from 'monaco-editor';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const editorElement = ref(null);

const signaling = [
];

onMounted(() => {
  const ydoc = new Y.Doc();

  // Users using the same ID will share the same document
  // const provider = new WebrtcProvider(props.id, ydoc, {
  //   signaling: signaling
  // });

  const provider = new WebsocketProvider('wss://demos.yjs.dev', 'monaco', ydoc)

  const ycontent = ydoc.getText('monaco');

  const editor = monaco.editor.create(editorElement.value, {
    value: '',
    language: "javascript",
    theme: 'vs-light',
    fontSize: 13,
    fontFamily:
      'ui-monospace, Menlo, Monaco, "Cascadia Code", "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro","Fira Mono", "Droid Sans Mono", "Courier New", monospace',
    minimap: {
      enabled: false,
    },
    scrollBeyondLastLine: false,
    renderWhitespace: true
  });

  // Bind Yjs to the editor model
  new MonacoBinding(ycontent, editor.getModel(), new Set([editor]), provider.awareness);

  const connectBtn = /** @type {HTMLElement} */ (document.getElementById('y-connect-btn'))
  connectBtn.addEventListener('click', () => {
    if (provider.shouldConnect) {
      provider.disconnect()
      connectBtn.textContent = 'Connect'
    } else {
      provider.connect()
      connectBtn.textContent = 'Disconnect'
    }
  })

});
</script>

<template>
  <div class="editor" ref="editorElement"></div>
</template>

<style>
.editor {
  width: 100%;
  height: 100%;
}
</style>