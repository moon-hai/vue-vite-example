<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <div :class="$style.flex">
    <p :class="[$style.text, $style.text2]">
      Edit
      <code>components/HelloWorld.vue</code>
      to test hot module replacement.
    </p>

    <p :class="[$style.text, $style.text2]">
      Edit
      <code>components/HelloWorld.vue</code>
      to test hot module replacement.
    </p>
  </div>
</template>

<style lang="postcss" module>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.flex {
  display: flex;

  .text {
    color: var(--color-orange);
  }

  .text2 {
    font-weight: bold;
  }
}
</style>
