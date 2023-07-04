<script>
const focus = {
  mounted: (el) => el.focus()
}
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created: (el, binding, vnode, prevVnode) => {
    // 下面会介绍各个参数的细节
    console.log('created', el)
  },
  // 在元素被插入到 DOM 前调用
  beforeMount: (el, binding, vnode, prevVnode) => {
    console.log('beforeMount', el)
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {
    console.log('mounted', el)
  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {
    console.log('beforeUpdate', el)
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated (el, binding, vnode, prevVnode) {
    console.log('updated', el, binding)
    // let value = binding.value;
    let value = el.value;
    // if (value === 'how are you') {
    //   this.pong = 'i am fine'
    // }
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {
    console.log('beforeUnmount', el)
  },
  // 绑定元素的父组件卸载后调用
  unmounted: (el, binding, vnode, prevVnode) => {
    console.log('unmounted', el)
  }
}
export default {
  data() {
    return {
      ping: '',
      pong: '1'
    }
  },
  directives: {
    focus,
    myDirective,
    bgRed: {
      mounted(el, binding) {
        // el.style.bgColor = 'red'
        el.style.backgroundColor = 'red'
        el.style.color = 'white'
        // console.log('bgRed', el, this.pong)
      }
    }
  }
}

</script>
<script setup>
import {ref} from "vue";

console.log('set up')
let arg = ref('foo')
const vExample = {
  mounted: (el, binding) => {
    console.log('v-example', el, binding)
  },
  updated(el, binding, vnode, prevVnode) {
    console.log('v example updated', el, binding)
  }
}
</script>
<template>
<div>
  <label for="">
    directive
    <input type="text" v-focus.foo="1+2" v-my-directive v-model="ping">
  </label>
  <div>{{ pong }}</div>
  <label for="">
    disable
    <input type="text" v-disable>
  </label>
  <div v-bg-red>background red</div>
  <div v-example:foo.bar="1">example</div>
  <input type="text" v-model="arg">
  <div id="arg" v-example:[arg]="1">example</div>
</div>
</template>

<style scoped>

</style>