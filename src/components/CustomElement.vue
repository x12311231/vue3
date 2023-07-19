<script setup>
import {defineCustomElement} from "vue";

const MyVueElement = defineCustomElement({
  // 这里是同平常一样的 Vue 组件选项
  props: {
    msg: {}
  },
  emits: {},
  template: `
    <div>i am a custom element, {msg}</div>
  `,

  // defineCustomElement 特有的：注入进 shadow root 的 CSS
  styles: [`/* inlined css */`]
})
// customElements.define('my-vue-element', MyVueElement)
document.body.appendChild(
    new MyVueElement({
      // 初始化 props（可选）
      msg: "helo"
    })
)
</script>

<template>
<my-vue-element msg="hello, element"></my-vue-element>
</template>

<style scoped>

</style>