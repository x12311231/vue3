<template>
  <div>
      <button @click="awesome = !awesome">Toggle</button>

      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
  </div>
</template>

<script setup>
// export default {
//     name: "IfDemo",
//     props: {
//         "awesome": {}
//     }
// }

import {ref} from "vue";

let awesome;
awesome = ref(true);
</script>

<style scoped>

</style>