<script setup>
import {useCounterStore} from "@/assets/js/common/pinia/counter";
// import {useCounterStore} from "@/assets/js/common/pinia/counterSetup";
import {storeToRefs} from "pinia";

const store = useCounterStore()

// `name` 和 `doubleCount` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
const { count, doubleCount } = storeToRefs(store)
console.log('pinia', count)
// 作为 action 的 increment 可以直接解构
const { increment } = store
</script>

<template>
<div>
  pinia
  <div>count: {{ count }}</div>
  <div>double count: {{ doubleCount }}</div>
  <button @click="increment">increment</button>
</div>

</template>

<style scoped>

</style>