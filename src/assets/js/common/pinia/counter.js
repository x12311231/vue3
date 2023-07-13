import {defineStore} from "pinia";
import {ref} from "vue";

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 2 }),
    getters: {
        doubleCount: (state) => state.count * 2,
        // count: state => state.count
    },
    actions: {
      increment() {
          console.log('pinia increment')
          this.count++
      },
    },
  })