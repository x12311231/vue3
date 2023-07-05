<script setup>
import {inject} from "vue";

let i18n = inject('i18n');

console.log('plugin', i18n.greetings.hello)

</script>

<template>
  <div>
    <h1>{{ $translate('greetings.hello') }}</h1>
    <h2>{{ i18n.greetings.hello }}</h2>
  </div>
</template>

<style scoped>

</style>