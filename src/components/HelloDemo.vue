<template>
  <div class="text-red">
      <span class="text-bold">
      hello demo!!!
      </span>

      {{ msg }}
  </div>
</template>

<script setup>
// export default {
//     name: "HelloDemo"
// }
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<style scoped>

</style>