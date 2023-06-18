<template>
  <div class="drink text-red">
      <span class="text-bold"> sprite </span>
      <span>{{ name }}</span>
      <span>{{ price }}</span>
  </div>
</template>

<script>
export default {
    name: "SpriteDrink",
    props: ['price', 'name']
}
</script>

<style scoped>
.drink {
    display: block;
}
.text-red {
    color: red;
}
</style>