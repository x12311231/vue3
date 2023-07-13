import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => {
        return 2 * count.value
    })
    function increment() {
        count.value++
    }

    return { count, doubleCount, increment }
})