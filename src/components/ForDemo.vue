<template>
  <div>
      <ul>
          <li v-for="item in items">
              {{ item.message }}
          </li>
      </ul>
      <ul>
          <li v-for="(item, index) in items">
               {{ index }} - {{ item.message }}
          </li>
      </ul>
      <ul>
          <li v-for="v in myObject">
              {{ v }}
          </li>
      </ul>
      <ul>
          <li v-for="(value, key) in myObject">
              {{ key }}: {{ value }}
          </li>
      </ul>
      <ul>
          <li v-for="(value, key, index) in myObject">
              {{ index }}. {{ key }}: {{ value }}
          </li>
      </ul>
      <span v-for="n in 10">{{ n }}</span>
      <ul>
          <template v-for="item in items">
              <li>{{ item.message }}</li>
<!--              <li class="divider" role="presentation"></li>-->
          </template>
      </ul>
      <ul>
          <template v-for="item of items">
              <li v-if="item.isShouldSeen">
                  {{ item.property }}
              </li>
          </template>
      </ul>
      <div v-for="item in items" :key="item.id">
          {{ item.message }}
      </div>
      <div v-for="item in items" :key="item.message">
          {{ item.message }}
      </div>
      <button @click="addData">add data</button>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const items = ref([{ message: 'Foo', isShouldSeen: false, property: 'hide' }, { message: 'Bar', isShouldSeen: true, property: 'show' }])
const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})
function addData() {
    // items.push({ message: 'new' + new Date(), isShouldSeen: true, property: 'show'})
    items.value.push({ message: 'new' + new Date(), isShouldSeen: true, property: 'show'})
}
// export default {
//     name: "ForDemo",
//     data() {
//         return {
//             items: [{ message: 'Foo', isShouldSeen: false, property: 'hide' }, { message: 'Bar', isShouldSeen: true, property: 'show' }],
//             myObject: {
//                 title: 'How to do lists in Vue',
//                 author: 'Jane Doe',
//                 publishedAt: '2016-04-10'
//             }
//         }
//     },
//     methods: {
//         addData() {
//             this.items.push({ message: 'new' + new Date(), isShouldSeen: true, property: 'show'})
//         }
//     }
// }
</script>

<style scoped>

</style>